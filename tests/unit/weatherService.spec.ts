import { fetchWeather } from '@/services/weatherService';
import axios from 'axios';

jest.mock('axios');

describe('fetchWeather', () => {
  it('fetches weather data from API', async () => {
    const city = 'Nuuk';
    const country = 'GL';
    const responseData = {
      data: {
        name: 'Nuuk',
        weather: [{ description: 'Cloudy' }],
        main: { temp: 5, humidity: 75, pressure: 1013 }
      }
    };
    (axios.get as jest.Mock).mockResolvedValue(responseData);

    const weatherData = await fetchWeather(city, country);

    expect(axios.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: `${city},${country}`,
        appid: process.env.VUE_APP_API_KEY, 
        units: 'metric'
      }
    });
    expect(weatherData).toEqual({
      cityName: 'Nuuk',
      countryName: 'GL',
      description: 'Cloudy',
      temperature: 5,
      humidity: 75,
      pressure: 1013
    });
  });
});
