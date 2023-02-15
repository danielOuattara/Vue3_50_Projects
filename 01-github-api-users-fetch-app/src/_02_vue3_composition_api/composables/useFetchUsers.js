import { ref, reactive, toRefs } from "vue";

function useFetchUsers() {
  const state = reactive({
    isLoading: true,
    isError: false,
    errorMessage: "",
    users: [],
  });

  // const url = "http://localhost:8000/users"; // mock data only

  const url = "https://api.github.com/users";

  //--------------------------------------
  async function fetchUsers() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage = `${res.statusText} ${res.status}`;
        throw Error(res.statusText);
      } else {
        state.users = await res.json();
        console.log(" ---> ", state.users);
        state.isLoading = false;
        state.isError = false;
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return { ...toRefs(state), fetchUsers };
}

export default useFetchUsers;
