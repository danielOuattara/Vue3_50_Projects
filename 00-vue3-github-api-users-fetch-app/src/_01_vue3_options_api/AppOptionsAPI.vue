<template>
  <h2 v-if="isLoading">Loading ...</h2>
  <h2 v-if="isError">Error: {{ errorMessage }}</h2>
  <h2 v-if="!isLoading && !isError">Vue3 options API</h2>
  <SingleUserFetch
    @startFetchUser="startFetchUser"
    :singleUserData="singleUserData"
    :singleUserLoading="singleUserLoading"
    :singleUserError="singleUserError"
    mode="Async/Await Try/Catch"
  />

  <UserList
    v-if="!isLoading && !isError"
    :users="users"
    mode="Promises Then/Catch"
  />
</template>

<script>
import SingleUserFetch from "./components/SingleUserFetch.vue";
import UserList from "./components/UsersList.vue";
export default {
  name: "App",
  components: {
    UserList,
    SingleUserFetch,
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      errorMessage: "",
      singleUserLoading: true,
      singleUserError: false,
      singleUserErrorMessage: "",
      url: "https://api.github.com/users",
      // url: "http://localhost:8000/users", // mock data testing only
      users: [],
      singleUserData: {},
    };
  },

  methods: {
    fetchUsers() {
      fetch(this.url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            this.isError = true;
            this.isLoading = false;
            this.errorMessage = `${res.statusText} ${res.status}`;
            throw Error(res.statusText);
          }
        })
        .then((users) => {
          this.users = users;
          this.isLoading = false;
          this.isError = false;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    async startFetchUser(arg) {
      /* this function is triggered  */
      try {
        const res = await fetch(`${this.url}/${arg}`);
        if (!res.ok) {
          this.singleUserError = true;
          this.singleUserLoading = false;
          this.singleUserErrorMessage = res.statusText;
          throw Error(res.statusText);
        } else {
          const data = await res.json();
          this.singleUserError = false;
          this.singleUserLoading = false;
          this.singleUserData = data;
        }
      } catch (err) {
        console.log(err.message);
      }
    },
  },

  mounted() {
    this.fetchUsers();
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
  margin-left: 20px;
  margin-right: 20px;
}
</style>
