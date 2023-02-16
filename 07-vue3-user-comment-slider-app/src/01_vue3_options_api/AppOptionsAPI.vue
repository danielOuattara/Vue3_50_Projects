<template>
  <section class="section">
    <div class="title">
      <h2><span>/</span>reviews</h2>
    </div>

    <div class="section-center">
      <article
        v-for="(person, personIndex) in people"
        :key="person.id"
        v-bind:class="updatePosition(personIndex)"
      >
        <img :src="person.image" :alt="person.name" class="person-img" />
        <h4>{{ person.name }}</h4>
        <p class="title">{{ person.title }}</p>
        <p class="text">{{ person.quote }}</p>
      </article>

      <button className="prev" @click="() => updateIndex(-1)">
        <span> &lt;&lt;</span>
      </button>
      <button className="next" @click="() => updateIndex(1)">
        <span> &gt;&gt;</span>
      </button>
    </div>
  </section>
</template>

<script>
import people from "./../data.js";

export default {
  name: "AppOptionsAPI",
  data() {
    return {
      people,
      index: 0,
      slider: "",
    };
  },

  methods: {
    updateIndex(arg) {
      return (this.index = this.index + arg);
    },

    updatePosition(indexArg) {
      let position = "nextSlide";
      if (this.index === indexArg) {
        position = "activeSlide";
      }
      if (
        this.index === indexArg + 1 ||
        (this.index === 0 && indexArg === this.people.length - 1)
      ) {
        position = "lastSlide";
      }

      return position;
    },

    checkIndex(indexArg) {
      if (indexArg === -1) {
        return (this.index = people.length - 1);
      } else if (indexArg === people.length) {
        return (this.index = 0);
      } else {
        return indexArg;
      }
    },
  },

  watch: {
    index: {
      handler(newValue, oldValue) {
        this.checkIndex(newValue);
      },
      immediate: true,
    },
  },

  mounted() {
    clearTimeout(this.slider);
    this.slider = setInterval(() => {
      this.updateIndex(1);
      console.log(this.index);
    }, 3000);
  },

  // unmounted() {
  //   clearTimeout(this.slider);
  // },
};
</script>

<style lang="scss" scoped></style>
