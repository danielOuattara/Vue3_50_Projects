<template>
  <article className="question">
    <header>
      <h4>{{ singleQuestion.title }}</h4>
      <button className="btn" @click="toggleShowAnswer">
        {{ this.showAnswer ? "-" : "+" }}
      </button>
    </header>
    <p v-if="showAnswer">{{ singleQuestion.info }}</p>
  </article>
</template>

<script>
export default {
  name: "Questions",
  props: ["singleQuestion"],
  data() {
    return {
      showAnswer: false,
    };
  },

  methods: {
    toggleShowAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
};
</script>
