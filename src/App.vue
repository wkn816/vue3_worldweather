<template>
  <v-app>
    <v-main>
      <router-view/>
      <MyTitle />
    </v-main>
  </v-app>
</template>

<script setup>
import MyTitle from "./components/MyTitle.vue"
</script>
