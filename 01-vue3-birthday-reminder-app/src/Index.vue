<template>
  <AppOptionsAPI />
  <br />
  <hr />
  <br />
  <AppCompositionAPI />
</template>

<script>
import AppOptionsAPI from "./_01_vue3_options_api/AppOptionsAPI.vue";
import AppCompositionAPI from "./_02_vue3_composition_api/AppCompositionAPI.vue";

export default {
  name: "Index",
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
