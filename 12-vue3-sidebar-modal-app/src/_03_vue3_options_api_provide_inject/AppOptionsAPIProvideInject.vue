<template>
  <br />
  <hr />
  <br />
  <p style="text-align: center">options API provide/inject solution !</p>
  <Home @onToggleSideBar="toggleSideBar" @onToggleModal="toggleModal" />
  <Modal @onToggleModal="toggleModal" />
  <SideBar @onToggleSideBar="toggleSideBar" />
</template>

<script>
import Home from "./components/Home.vue";
import Modal from "./components/Modal.vue";
import SideBar from "./components/SideBar.vue";
import { computed } from "vue";

export default {
  name: "AppOptionsAPI",
  components: {
    Home,
    Modal,
    SideBar,
  },

  data() {
    return {
      isSideBarOpen: false,
      isModalOpen: false,
    };
  },

  provide() {
    return {
      isModalOpen: computed(() => this.isModalOpen),
      isSideBarOpen: computed(() => this.isSideBarOpen),
    };
  },

  methods: {
    toggleSideBar() {
      this.isSideBarOpen = !this.isSideBarOpen;
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },
};
</script>
