<template>
  <!-- <AppOptionsAPI /> -->
  <!-- <AppCompositionAPI /> -->
  <!-- <AppOptionsAPIProvideInject /> -->
  <AppCompositionAPIProvideInject />
</template>

<script>
import AppOptionsAPI from "./_01_vue3_options_api/AppOptionsAPI.vue";
import AppCompositionAPI from "./_02_vue3_composition_api/AppCompositionAPI.vue";
import AppOptionsAPIProvideInject from "./_03_vue3_options_api_provide_inject/AppOptionsAPIProvideInject.vue";
import AppCompositionAPIProvideInject from "./_04_vue3_composition_api_provide_inject/AppCompositionAPIProvideInject.vue";

export default {
  name: "Index",
  components: {
    AppOptionsAPI,
    AppCompositionAPI,
    AppOptionsAPIProvideInject,
    AppCompositionAPIProvideInject,
  },
};
</script>
