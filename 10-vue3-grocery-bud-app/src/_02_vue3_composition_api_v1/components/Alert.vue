<template>
  <p :class="`alert alert-${alert.type}`">{{ alert.message }}</p>
</template>

<script>
import { ref, onUpdated, onBeforeMount } from "vue";

export default {
  name: "Alert",
  props: ["alert", "showAlert"],

  setup(props, ctx) {
    const timeoutID = ref(undefined);

    onUpdated(
      () =>
        (timeoutID.value = setTimeout(() => {
          return props.showAlert();
        }, 1500)),
    );

    onBeforeMount(() => clearTimeout(timeoutID.value));

    return { timeoutID };
  },
};
</script>

<style lang="scss" scoped></style>
