import { shallowMount } from '@vue/test-utils';
import WeatherCard from '@/components/WeatherCard.vue';

describe('WeatherCard', () => {
    it('renders weather data correctly', () => {
      const weatherData = {
        cityName: 'Nuuk',
        countryName: 'GL',
        description: 'Cloudy',
        temperature: 5,
        humidity: 75,
        pressure: 1013
      };
  
      const wrapper = shallowMount(WeatherCard, {
        propsData: {
          weatherData
        }
      });
  
      expect(wrapper.text()).toMatchInlineSnapshot(`"Nuuk / GL Cloudy 5°C Humidity: 75% Pressure: 1013 hPa"`);
    });
  });