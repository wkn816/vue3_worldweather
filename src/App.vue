<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="ここ" />
    <MyText />
    <MyTitle />
    <Form />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyText from "./components/MyText.vue";
import MyTitle from "./components/MyTitle.vue";
import Form from "./components/Form.vue";




export default {
  name: "App",
  components: {
    HelloWorld,
    MyText,
    MyTitle,
    Form
  }
};
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
