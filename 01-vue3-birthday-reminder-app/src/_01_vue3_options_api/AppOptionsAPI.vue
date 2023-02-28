<template>
  <main>
    <section class="container">
      <span>vue3 options API</span>
      <h3 v-if="people.length > 1">{{ people.length }} birthdays today</h3>
      <h3 v-if="people.length === 1">{{ people.length }} birthday today</h3>
      <List :people="people" @close="this.handleRemoveOnePerson" />
      <button @click="handleEmpty" v-if="people.length !== 0">clear all</button>

      <button v-if="people.length === 0" @click="handleRefresh">Refresh</button>
    </section>
  </main>
</template>

<script>
import data from "../data";
import List from "./components/List.vue";
export default {
  name: "App",
  components: {
    List,
  },
  data() {
    return {
      people: data,
    };
  },

  methods: {
    handleRemoveOnePerson(id) {
      return (this.people = this.people.filter((person) => person.id != id));
    },

    handleEmpty() {
      this.people = [];
    },

    handleRefresh() {
      this.people = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
