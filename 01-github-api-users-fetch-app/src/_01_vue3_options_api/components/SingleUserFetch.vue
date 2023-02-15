<template>
  <form class="form" @submit.prevent="$emit('startFetchUser', username)">
    <h4>fetch single user infos {{ mode }}</h4>
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
  <ul>
    <li
      v-bind:style="{
        'text-align': 'left',
        margin: '10px 0 10px 10px',
      }"
      v-for="[key, value] in Object.entries(this.singleUserData)"
      :key="key"
    >
      <b>{{ key }} :</b> {{ value }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "SingleUserFetch",
  props: ["singleUserData", "singleUserLoading", "singleUserError", "mode"],
  emits: ["startFetchUser"],
  data() {
    return {
      username: "",
    };
  },

  computed: {
    userData() {
      console.log(Object.entries(this.singleUserData));
      //    console.log(("this.singleUserData = ", this.singleUserData));
      //    return Object.entries(this.singleUserData).map((item) => {
      //     return ([keyIndex, value] = item);
      //    });
    },
  },

  mounted() {
    if (!this.singleUserLoading && !this.singleUserError) {
      console.log("datxxxxxx = ", this.singleUserData);
    }
  },
};
</script>
