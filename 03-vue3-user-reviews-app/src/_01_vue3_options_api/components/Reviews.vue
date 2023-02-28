<template>
  <article class="review">
    <div class="img-container">
      <img
        :src="people[index]['image']"
        :alt="people[index]['name']"
        class="person-img"
      />
      <span class="quote-icon">
        <!-- <FaQuoteRight />  -->
        &&
      </span>
    </div>

    <h4 class="author">{{ people[index]["name"] }}</h4>
    <p class="job">{{ people[index]["job"] }}</p>
    <p class="info">{{ people[index]["text"] }}</p>

    <div class="button-container">
      <button class="prev-btn" @click="getPreviousQuote">
        <!-- <FaChevronLeft /> -->
        &lt;&lt;
      </button>
      <button class="next-btn" @click="getNextQuote">
        <!-- <FaChevronRight /> -->
        &gt;&gt;
      </button>
    </div>

    <div class="button-container">
      <button class="random-btn" @click="getRandomQuote">surprise me</button>
    </div>
  </article>
</template>

<script>
import reviews from "./../../data";
export default {
  name: "Reviews",
  data() {
    return {
      index: 0,
      people: reviews,
    };
  },

  methods: {
    checkIndex(argIndex) {
      if (argIndex > this.people.length - 1) {
        return 0;
      } else if (argIndex < 0) {
        return this.people.length - 1;
      } else {
        return argIndex;
      }
    },
    getPreviousQuote() {
      this.index = this.checkIndex(this.index - 1);
      return;
    },
    getNextQuote() {
      this.index = this.checkIndex(this.index + 1);
      return;
    },
    getRandomQuote() {
      let randomIndex = Math.floor(Math.random() * this.people.length);
      if (randomIndex === this.index) {
        randomIndex = this.checkIndex(randomIndex - 1);
      }
      return (this.index = randomIndex);
    },
  },
};
</script>
