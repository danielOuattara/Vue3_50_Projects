<template>
  <b><p :style="{ marginLeft: '5rem' }">composition API solution</p></b>
  <Navbar />
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped></style>
