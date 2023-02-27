<template>
  <section class="section-center">
    <h3>tired of boring lorem ipsum ?</h3>

    <form class="lorem-form" @submit.prevent="handleSubmit">
      <label for="numbParagraph">number of paragraph ?</label>
      <input
        id="numbParagraph"
        type="number"
        min="1"
        :max="data.length"
        v-model="numberOfParagraph"
      />
      <button type="submit" class="btn">Generate</button>
    </form>

    <article class="lorem-text">
      <p v-for="(textItem, index) in text" :key="index">{{ textItem }}</p>
    </article>
  </section>
</template>

<script>
import data from "./../data";
export default {
  name: "App",
  components: {},
  data() {
    return {
      data,
      numberOfParagraph: 1,
      text: [],
    };
  },

  methods: {
    handleSubmit() {
      return (this.text = this.data.slice(0, parseInt(this.numberOfParagraph)));
    },
  },
};
</script>

<style></style>
