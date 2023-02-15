<template>
  <AppOptionsAPI />
  <AppCompositionAPI />
</template>

<script>
import AppOptionsAPI from "./01_vue3_options_api/AppOptionsAPI.vue";
import AppCompositionAPI from "./02_vue3_composition_api/AppCompositionAPI.vue";

export default {
  name: "App",
  components: {
    AppOptionsAPI,
    AppCompositionAPI,
  },
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
