<template>
  <form class="form" @submit.prevent="$emit('startFetchUser', username)">
    <h3>fetch single user infos</h3>
    <div
      class="form-control"
      v-bind:style="{ 'grid-template-columns': '150px 1fr' }"
    >
      <label for="username">Github username :</label>
      <input
        class
        type="text"
        name="username"
        id="username"
        v-model="username"
      />
    </div>
    <p>examples: danielOuattara, quincyLarson, ...</p>
    <button class="btn" type="submit">fetch</button>
  </form>

  <h2 v-if="!singleUserLoading && !singleUserError">User infos :</h2>
  <h3 v-if="Object.entries(singleUserData).length != 0">User infos :</h3>
  <ul>
    <li
      v-bind:style="{
        'text-align': 'left',
        margin: '10px 0 10px 10px',
      }"
      v-for="[key, value] in Object.entries(singleUserData)"
      :key="key"
    >
      <b>{{ key }} :</b> {{ value }}
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SingleUserFetch",
  props: ["singleUserData", "singleUserLoading", "singleUserError"],
  emits: ["startFetchUser"],

  setup() {
    const username = ref("");
    return { username };
  },
};
</script>
