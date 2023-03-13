<template>
  <p :class="`alert alert-${alert.type}`">{{ alert.message }}</p>
</template>

<script>
export default {
  name: "Alert",
  props: ["alert", "showAlert"],

  data() {
    return {
      timeoutID: undefined,
    };
  },

  updated() {
    this.timeoutID = setTimeout(() => {
      return this.showAlert();
    }, 1500);
  },

  beforeMount() {
    clearTimeout(this.timeoutID);
  },
};
</script>

<style lang="scss" scoped></style>
