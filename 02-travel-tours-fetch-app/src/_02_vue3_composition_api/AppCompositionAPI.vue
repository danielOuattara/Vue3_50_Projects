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
import { onBeforeMount } from "vue";
import useFetchTours from "./composables/useFetchTours";
export default {
  name: "App",
  components: { Error, Loading, ResetTours, Tours },
  setup() {
    const { isError, errorMessage, isLoading, tours, fetchTours } =
      useFetchTours();

    function removeTourItem(id) {
      return (tours.value = tours.value.filter((item) => item.id !== id));
    }

    onBeforeMount(fetchTours);

    return {
      isError,
      errorMessage,
      isLoading,
      tours,
      fetchTours,
      removeTourItem,
    };
  },
};
</script>

<style></style>
