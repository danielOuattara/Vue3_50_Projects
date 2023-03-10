<template>
  <p :class="`alert alert-${alert.type}`">{{ alert.message }}</p>
</template>

<script>
export default {
  name: "Alert",
  props: ["alert", "showAlert"],

  // mounted() {
  //   // console.log(this.alert);
  //   // console.log(this.alert.message);
  //   clearTimeout(this.timeoutID);
  // },

  data() {
    return {
      timeoutID: undefined,
    };
  },

  // watch: {
  //   alert(newAlert, oldAlert) {
  //     if (newAlert !== oldAlert) {
  //       console.log("in watch");
  //       this.timeoutID = setTimeout(() => {
  //         return this.showAlert();
  //       }, 1500);
  //     }
  //   },
  // },

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
