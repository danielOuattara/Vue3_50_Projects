<template>
  <div className="section-center">
    <SingleMenu v-for="menu in menuToRender" :key="menu.id" :menu="menu" />
  </div>
</template>

<script>
import SingleMenu from "./SingleMenu.vue";
export default {
  name: "Menu",
  components: {
    SingleMenu,
  },
  props: ["menuToRender"],
};
</script>
