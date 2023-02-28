<template>
  <AppOptionsAPI />
  <hr />
  <AppCompositionAPI />
</template>

<script>
import AppOptionsAPI from "./01_vue3_options_api/AppOptionsAPI.vue";
import AppCompositionAPI from "./02_vue3_composition_api/AppCompositionAPI.vue";

export default {
  name: "Index",
  components: {
    AppOptionsAPI,
    AppCompositionAPI,
  },
};
</script>
