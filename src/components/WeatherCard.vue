<template>
  <div class="weather-card">
    <h2 class="city">{{ weatherData.cityName }} / {{weatherData.countryName}}</h2>
    <p>{{ weatherData.description }}</p>
    <p :class="temperatureColorClass" class="temp">{{ weatherData.temperature }}°C</p>
    <p>Humidity: {{ weatherData.humidity }}%</p>
    <p>Pressure: {{ weatherData.pressure }} hPa</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { WeatherData } from '@/types';
@Component
export default class WeatherCard extends Vue {
  @Prop({ type: Object, required: true }) weatherData!: WeatherData;

  get temperatureColorClass(): string {
    const temperature = this.weatherData.temperature;
    const temperatureClasses: { [key: string]: boolean } = {
      'blue-text': temperature <= 5,
      'orange-text': temperature > 5 && temperature <= 25,
      'red-text': temperature > 25
    };
    return Object.keys(temperatureClasses).filter(cls => temperatureClasses[cls]).join(' ');
  }
}
</script>

<style scoped>
p{
  margin: 8px;
}
.weather-card {
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 32px;
  margin: 8px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.082);
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-card .temp{
  padding: 16px;
  font-size: 88px;
  font-weight:700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0,25);
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.15);
}

.weather-card  .city{
  font-size: 32px;
}
.blue-text {
  color: rgb(7, 111, 228);
}

.orange-text {
  color: rgb(195, 128, 5);
}

.red-text {
  color: rgb(180, 2, 2);
}
</style>