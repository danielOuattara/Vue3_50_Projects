<template>
  <ul className="btn-container">
    <li v-for="category in categories" :key="category">
      <button className="filter-btn" @click="setCategory(category)">
        {{ category }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuCategories",
  props: ["categories", "setCategory"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
