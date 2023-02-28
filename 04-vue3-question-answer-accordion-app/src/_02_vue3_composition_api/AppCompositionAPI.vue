<template>
  <div className="container">
    <h3>question and answer about login <b>(vue3 options API)</b></h3>
    <section className="info">
      <ul>
        <li v-for="singleQuestion in questions" :key="singleQuestion.id">
          <Questions :singleQuestion="singleQuestion" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import data from "./../data";
import Questions from "./components/Questions.vue";
import { ref } from "vue";
export default {
  name: "AppOptionsAPI",
  components: {
    Questions,
  },
  setup() {
    const questions = ref(data);

    return {
      questions,
    };
  },
};
</script>

<style lang="scss" scoped></style>
