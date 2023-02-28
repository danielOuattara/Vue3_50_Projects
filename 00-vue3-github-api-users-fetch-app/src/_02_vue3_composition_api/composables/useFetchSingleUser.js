import { reactive, toRefs } from "vue";

function useFetchSingleUser() {
  const state = reactive({
    singleUserLoading: true,
    singleUserError: false,
    singleUserErrorMessage: "",
    singleUserData: {},
  });

  const url = "https://api.github.com/users";

  async function fetchSingleUser(usernameArg) {
    try {
      const res = await fetch(`${url}/${usernameArg}`);
      if (!res.ok) {
        state.singleUserError = true;
        state.singleUserLoading = false;
        state.singleUserErrorMessage = `${res.statusText} ${res.status}`;
        throw Error(res.statusText);
      } else {
        state.singleUserData = await res.json();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return { ...toRefs(state), fetchSingleUser };
}

export default useFetchSingleUser;
