<template>
  <section class="container">
    <h3 :class="inputColorError ? 'error' : null">color generator</h3>
    <form action="" @submit.prevent="handleSubmit()">
      <input
        type="text"
        :placeholder="
          inputColorError ? 'Enter a valid Hex color...' : '#fbb146'
        "
        v-model="userColor"
        :class="inputColorError ? 'error' : null"
      />
      <button type="submit" class="btn">Submit</button>
      <p v-if="inputColorError" class="error">
        Enter a valid Hexadecimal Color
      </p>
    </form>
  </section>
  <section class="colors">
    <SingleColor
      v-for="(color, index) in colorsList"
      :key="index"
      :index="index"
      :color="color"
      :listLength="colorsList.length"
    />
  </section>
</template>

<script>
import Values from "values.js";
import SingleColor from "./components/SingleColor.vue";
export default {
  name: "AppOptionsAPI",
  components: { SingleColor },
  data() {
    return {
      step: 10,
      userColor: "",
      inputColorError: false,
      colorsList: new Values("#fbb146").all(this.step),
    };
  },

  methods: {
    handleSubmit() {
      try {
        this.colorsList = new Values(this.userColor).all(this.step);
      } catch (error) {
        this.inputColorError = true;
        this.userColor = "";
      }
    },
  },
};
</script>

<style></style>
