<template>
  <h2 v-if="isLoading">Loading ...</h2>
  <h2 v-if="isError">Error: {{ errorMessage }}</h2>
  <h2 v-if="!isLoading && !isError">Vue3 composition API</h2>
  <SingleUserFetch
    @startFetchUser="startFetchUser"
    :singleUserData="singleUserData"
    :singleUserLoading="singleUserLoading"
    :singleUserError="singleUserError"
  />

  <UserList v-if="!isLoading && !isError" :users="users" />
</template>

<script>
import SingleUserFetch from "./components/SingleUserFetch.vue";
import UserList from "./components/UsersList.vue";
import { onBeforeMount } from "vue";
import useFetchSingleUser from "./composables/useFetchSingleUser";
import useFetchUsers from "./composables/useFetchUsers";
export default {
  name: "App",
  components: {
    UserList,
    SingleUserFetch,
  },

  setup() {
    const { isLoading, isError, errorMessage, users, fetchUsers } =
      useFetchUsers();

    onBeforeMount(fetchUsers);

    const {
      singleUserLoading,
      singleUserError,
      singleUserErrorMessage,
      singleUserData,
      fetchSingleUser,
    } = useFetchSingleUser();

    function startFetchUser(arg) {
      fetchSingleUser(arg);
    }

    return {
      singleUserLoading,
      singleUserError,
      singleUserErrorMessage,
      singleUserData,
      isLoading,
      isError,
      errorMessage,
      users,
      startFetchUser,
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
  margin-left: 20px;
  margin-right: 20px;
}
</style>
