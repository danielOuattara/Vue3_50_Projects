<template>
  <section class="section-center">
    <h3>tired of boring lorem ipsum ?</h3>

    <form class="lorem-form" @submit.prevent="handleSubmit">
      <label for="numbParagraph">number of paragraph ?</label>
      <input
        id="numbParagraph"
        type="number"
        min="1"
        :max="allTexts.length"
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
import { ref } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const allTexts = ref(data);
    const numberOfParagraph = ref(1);
    const text = ref([]);
    function handleSubmit() {
      return (text.value = data.slice(0, parseInt(numberOfParagraph.value)));
    }

    return {
      numberOfParagraph,
      text,
      handleSubmit,
      allTexts,
    };
  },
};
</script>

<style></style>
