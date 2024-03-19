import { cacheService } from '@/services/cacheService';

describe('CacheService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('stores and retrieves data from cache', () => {
    const weatherData = {
      cityName: 'Nuuk',
      countryName: 'GL',
      description: 'Cloudy',
      temperature: 5,
      humidity: 75,
      pressure: 1013
    };
    cacheService.set('Nuuk', weatherData);
    const cachedData = cacheService.get('Nuuk');
    expect(cachedData).toEqual(weatherData);
  });
});
