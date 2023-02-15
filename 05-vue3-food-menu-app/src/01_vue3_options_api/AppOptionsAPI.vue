<template>
  <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <h4>vue3 options API</h4>
        <div className="underline"></div>
        <MenuCategories :categories="categories" :setCategory="setCategory" />
        <Menu :menuToRender="menuToRender" />
      </div>
    </section>
  </main>
</template>

<script>
import menuItems from "../data";
import Menu from "./components/Menu.vue";
import MenuCategories from "./components/MenuCategories.vue";

export default {
  name: "AppOptionsAPI",
  components: { Menu, MenuCategories },
  data() {
    return {
      menuItems,
      category: "all",
    };
  },

  methods: {
    setCategory(categoryArg) {
      return (this.category = categoryArg);
    },
  },

  computed: {
    filteredMenu() {
      return this.menuItems.filter((item) => item.category === this.category);
    },
    menuToRender() {
      return this.category === "all" ? this.menuItems : this.filteredMenu;
    },

    categories() {
      return ["all", ...new Set(menuItems.map((item) => item.category))];
    },
  },
};
</script>
