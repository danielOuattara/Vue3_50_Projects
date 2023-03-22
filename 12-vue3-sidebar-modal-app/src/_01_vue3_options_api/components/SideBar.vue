<template>
  <aside :class="isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'">
    <div class="sidebar-header">
      <img :src="logo" alt="logo" class="logo" />
      <button class="close-btn" @click="$emit('onToggleSideBar')">
        <font-awesome-icon icon="fa-solid fa-times" />
      </button>
    </div>
    <ul class="links">
      <li v-for="item in links" :key="item.id">
        <a :href="item.url"
          ><font-awesome-icon :icon="item.icon" /> {{ item.text }}</a
        >
      </li>
    </ul>

    <ul class="social-icons">
      <li v-for="item in socials" :key="item.id">
        <a :href="item.url"><font-awesome-icon :icon="item.icon" /></a>
      </li>
    </ul>
  </aside>
</template>

<script>
import logo from "./../../logo.svg";
import { socials, links } from "./../../data";
export default {
  name: "SideBar",
  props: ["isSideBarOpen"],
  emits: ["onToggleSideBar"],

  data() {
    return {
      logo,
      socials,
      links,
    };
  },
};
</script>

<style lang="scss" scoped></style>
