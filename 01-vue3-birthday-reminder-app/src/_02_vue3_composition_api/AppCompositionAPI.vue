<template>
  <main>
    <section class="container">
      <span>vue3 composition API</span>
      <h3 v-if="people.length > 1">{{ people.length }} birthdays today</h3>
      <h3 v-if="people.length === 1">{{ people.length }} birthday today</h3>
      <List :people="people" @close="this.handleRemoveOnePerson" />
      <button @click="handleEmpty" v-if="people.length !== 0">clear all</button>

      <button v-if="people.length === 0" @click="handleRefresh">Refresh</button>
    </section>
  </main>
</template>

<script>
import List from "./components/List.vue";
import data from "../data";
import { toRefs, ref, reactive } from "vue";
export default {
  name: "AppCompositionAPI",
  components: {
    List,
  },
  setup() {
    let people = ref(data);

    function handleRemoveOnePerson(id) {
      return (people.value = people.value.filter((person) => person.id != id));
    }

    function handleEmpty() {
      people.value = [];
    }

    function handleRefresh() {
      people.value = data;
    }

    return {
      people,
      handleRemoveOnePerson,
      handleEmpty,
      handleRefresh,
    };
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
