<template>
  <Error v-if="isError" :errorMessage="errorMessage" />
  <Loading v-if="isLoading" />
  <ResetTours
    v-if="!isLoading && !isError && tours.length === 0"
    :fetchTours="fetchTours"
  />
  <Tours
    v-if="!isError && !isLoading && tours.length >= 1"
    :tours="tours"
    @removeTour="removeTourItem"
  />
</template>

<script>
import Error from "./components/Error.vue";
import Loading from "./components/Loading.vue";
import ResetTours from "./components/ResetTours.vue";
import Tours from "./components/Tours.vue";
export default {
  name: "App",
  components: { Error, Loading, ResetTours, Tours },
  data() {
    return {
      url: "https://course-api.com/react-tours-project",
      isLoading: true,
      isError: false,
      errorMessage: "",
      tours: [],
    };
  },

  methods: {
    async fetchTours() {
      try {
        const res = await fetch(this.url);
        if (!res.ok) {
          this.isError = true;
          this.isLoading = false;
          this.errorMessage = `${res.status} ${res.statusText}`;
          throw Error(`${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        this.tours = data;
        this.isLoading = false;
        this.errorMessage = "";
      } catch (err) {
        this.isLoading = false;
        this.isError = true;
        return err;
      }
    },

    removeTourItem(id) {
      return (this.tours = this.tours.filter((item) => item.id !== id));
    },
  },

  created() {
    this.fetchTours();
  },
};
</script>

<style></style>
