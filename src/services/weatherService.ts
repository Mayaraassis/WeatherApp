import axios from 'axios';
import { WeatherData } from '@/types';
import { cacheService } from './cacheService';

const API_KEY = process.env.VUE_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city: string,  country: string): Promise<WeatherData> {
  try{
  const cachedData = cacheService.get(city);
  if (cachedData) {
    return cachedData;
  }
  const response = await axios.get(BASE_URL, {
    params: {
      q: `${city},${country}`,
      appid: API_KEY,
      units: 'metric'
    }
  });
  
  const weatherData: WeatherData = {
    cityName: response.data.name,
    countryName: country,
    description: response.data.weather[0].description,
    temperature: Math.round(response.data.main.temp),
    humidity: response.data.main.humidity,
    pressure: response.data.main.pressure
  };
  cacheService.set(city, weatherData);
  return weatherData;
} catch (error) {
  if(axios.isAxiosError(error)){
    throw new Error('Failed to fetch weather data. Please check your network connection and try again.');
  } else{
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
}
}
