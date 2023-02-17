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
import peopleData from "./../data.js";
import { ref, watch, watchEffect, onMounted } from "vue";

export default {
  name: "AppOptionsAPI",
  setup() {
    const people = ref(peopleData);
    const index = ref(0);
    const slider = ref(null);

    const updateIndex = (arg) => {
      return (index.value = index.value + arg);
    };

    function updatePosition(indexArg) {
      let position = "nextSlide";
      if (index.value === indexArg) {
        position = "activeSlide";
      }
      if (
        index.value === indexArg + 1 ||
        (index.value === 0 && indexArg === people.value.length - 1)
      ) {
        position = "lastSlide";
      }

      return position;
    }

    function checkIndex(indexArg) {
      if (indexArg === -1) {
        return (index.value = people.value.length - 1);
      } else if (indexArg === people.value.length) {
        return (index.value = 0);
      } else {
        return indexArg;
      }
    }

    onMounted(() => {
      clearTimeout(slider);
      slider.value = setInterval(() => {
        updateIndex(1);
        console.log(index.value);
      }, 3000);
    });

    return {
      people,
      index,
      slider,
      checkIndex,
      updateIndex,
      updatePosition,
    };
  },

  watch: {
    index: {
      handler(newValue, oldValue) {
        this.checkIndex(newValue);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
