<template>
  <div>
    <h2>気象データ</h2>
  <div v-if="results.country">{{ results.country }}</div>
  <div v-if="results.cityName">{{ results.cityName }}</div>
  <div v-if="results.temperature">{{ results.temperatur }}</div>
  <div v-if="results.icon">
    <img :src="results.icon" alt="icon">
    <span>{{ results.conditionText }}</span>
  </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  results: Object
});
console.log(props) //ここ消すとpropsが一度も使われてないよ。と怒られるので、とりあえず吐き出す
</script>
