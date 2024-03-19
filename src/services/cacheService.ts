import { WeatherData } from '@/types';

class CacheService {
    private readonly CACHE_PREFIX = 'weather-cache-';
  
    get(key: string): WeatherData | null {
      const cachedItem = localStorage.getItem(this.CACHE_PREFIX + key);
      if (cachedItem) {
        const { data, timestamp } = JSON.parse(cachedItem);
        if (new Date().getTime() - timestamp < 10 * 60 * 1000) {
          return data;
        }
      }
      return null;
    }
  
    set(key: string, data: WeatherData): void {
      const timestamp = new Date().getTime();
      localStorage.setItem(this.CACHE_PREFIX + key, JSON.stringify({ data, timestamp }));
    }
  }
  
  export const cacheService = new CacheService();