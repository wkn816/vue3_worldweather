<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="ここ" />
    <MyText />
    <MyTitle />
    <MyForm @submit-form="getWeather" />
  </div>
</template>

<script setup>
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
import MyText from "./components/MyText.vue";
import MyTitle from "./components/MyTitle.vue";
import MyForm from "./components/MyForm.vue";

const getWeather = () => {
  axios
    .get(
      "https://api.weatherapi.com/v1/current.json?key=d93185177c9a41d4bb9111921241909&q=London&aqi=no"
    )
    .then(res => console.log(res))
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
