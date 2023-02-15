<template>
  <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <h4>vue3 composition API</h4>
        <div className="underline"></div>
        <MenuCategories :categories="categories" :setCategory="setCategory" />
        <Menu :menuToRender="menuToRender" />
      </div>
    </section>
  </main>
</template>

<script>
import menuData from "../data";
import { ref, computed, reactive } from "vue";
import Menu from "./components/Menu.vue";
import MenuCategories from "./components/MenuCategories.vue";

export default {
  name: "AppOptionsAPI",
  components: { Menu, MenuCategories },
  setup() {
    const menuItems = ref(menuData);
    const category = ref("all");
    const categories = computed(() => {
      return ["all", ...new Set(menuItems.value.map((item) => item.category))];
    });

    const setCategory = (categoryArg) => {
      return (category.value = categoryArg);
    };

    const filteredMenu = computed(() => {
      return menuItems.value.filter((item) => item.category === category.value);
    });

    const menuToRender = computed(() => {
      return category.value === "all" ? menuItems.value : filteredMenu.value;
    });

    return {
      menuItems,
      category,
      setCategory,
      filteredMenu,
      menuToRender,
      categories,
    };
  },
};
</script>
