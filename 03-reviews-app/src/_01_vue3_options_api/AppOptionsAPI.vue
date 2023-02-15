<template>
  <main>
    <section class="container">
      <div class="title">
        <h2>our reviews</h2>
        <h4>options API</h4>
        <div class="underline"></div>
      </div>
      <Reviews />
    </section>
  </main>
</template>

<script>
import Reviews from "./components/Reviews.vue";
export default {
  name: "AppOptionsAPI",
  components: {
    Reviews,
  },
};
</script>
