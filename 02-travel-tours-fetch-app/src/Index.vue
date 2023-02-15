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
  components: { AppOptionsAPI, AppCompositionAPI },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
