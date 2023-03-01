<template>
  <article
    @click="handleCopyToClipBoard"
    :class="index > listLength / 2 + 2 ? 'color-light color' : 'color'"
    :style="{ 'background-color': `${color.hexString()}` }"
  >
    <p class="percent-value">{{ color.weight }} %</p>
    <p class="color-value">{{ color.hexString() }}</p>

    <p
      v-if="alert"
      :class="index > listLength / 2 + 2 ? 'alert-light alert' : 'alert'"
    >
      copied to clipboard
    </p>
  </article>
</template>

<script>
export default {
  name: "SingleColor",
  props: ["index", "color", "listLength"],
  data() {
    return {
      alert: false,
    };
  },

  methods: {
    handleCopyToClipBoard() {
      this.alert = true;
      navigator.clipboard.writeText(this.color.hexString());
    },
  },
  watch: {
    alert(newValue, oldValue) {
      if (newValue === true) {
        const timeOut = setTimeout(() => (this.alert = false), 500);
        // clearTimeout(timeOut);
      }
    },
  },
};
</script>
