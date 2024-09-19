<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="" />
    <MyText />
    <MyTitle />
    <MyForm @submit-form="getWeather" />
    <MyResults :results="results" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import MyText from "./components/MyText.vue";
import MyTitle from "./components/MyTitle.vue";
import MyForm from "./components/MyForm.vue";
import MyResults from "./components/MyResults.vue";

const results = reactive({
  country: "",
  cityName: "",
  temperature: "",
  conditionText: "",
  icon: ""
})
const getWeather = (city) => {
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=d93185177c9a41d4bb9111921241909&q=${city}&aqi=no`
    )
    .then(res => {
            results.country = res.data.location.country,
            results.cityName = res.data.location.name,
            results.temperature = res.data.current.temp_c,
            results.conditionText = res.data.current.condition.text,
            results.icon = res.data.current.condition.icon
    })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
