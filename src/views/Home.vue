<template>
  <div>
    <main>
    <div class="card_container">
    <WeatherCard
      v-for="(city, index) in cities"
      :key="index"
      :weatherData="city.weatherData"
    />
     </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { WeatherData } from "@/types";
import { fetchWeather } from "@/services/weatherService";
import WeatherCard from "@/components/WeatherCard.vue";

@Component({
  components: {
    WeatherCard,
  },
})
export default class App extends Vue {
  cities: { city: string; country: string; weatherData: WeatherData | null }[] =
    [
      { city: "Nuuk", country: "GL", weatherData: null },
      { city: "Urubici", country: "BR", weatherData: null },
      { city: "Nairobi", country: "KE", weatherData: null },
    ];
  async fetchData() {
    await Promise.all(
      this.cities.map(async (city) => {
        try {
          const weatherData = await fetchWeather(city.city, city.country);
          city.weatherData = weatherData;
        } catch (error) {
          console.error(
            "Error fetching weather data for",
            city.city,
            ",",
            city.country,
            ":",
            error
          );
        }
      })
    );
  }
  created() {
    this.fetchData();

    setInterval(() => {
      this.fetchData();
    }, 10 * 60 * 1000);
  }
}
</script>

<style scoped>
main{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
 
}
.card_container{
  display: flex;
  flex-direction: row;
} 

@media only screen and (max-width: 768px) {
  .card_container {
    flex-direction: column;
    justify-content: center;
  }
}
</style>