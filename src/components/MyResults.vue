<template>
  <div>
    <h2>気象データ</h2>
    {{ results }}
  </div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  results: Object
});
console.log(props) //ここ消すとpropsが一度も使われてないよ。と怒られるので、とりあえず吐き出す
</script>
