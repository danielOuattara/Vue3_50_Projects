import { reactive, toRefs } from "vue";

function useFetchJobs() {
  const state = reactive({
    jobs: [],
    isLoading: true,
    error: "",
    jobIndex: 0,
  });

  const fetchJobs = async (urlArg) => {
    try {
      const res = await fetch(urlArg);
      if (!res.ok) {
        state.error = `${res.status} ${res.statusText}`;
        state.isLoading = false;
        throw new Error();
      }

      state.jobs = await res.json();
      state.error = false;
      state.isLoading = false;
    } catch (error) {
      return error;
    }
    console.log(state.jobs);
  };

  return { ...toRefs(state), fetchJobs };
}

export default useFetchJobs;
