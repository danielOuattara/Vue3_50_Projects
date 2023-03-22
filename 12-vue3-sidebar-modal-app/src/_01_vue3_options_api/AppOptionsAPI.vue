<template>
  <p style="text-align: center">options API solution !</p>
  <Home @onToggleSideBar="toggleSideBar" @onToggleModal="toggleModal" />
  <Modal :isModalOpen="isModalOpen" @onToggleModal="toggleModal" />
  <SideBar :isSideBarOpen="isSideBarOpen" @onToggleSideBar="toggleSideBar" />
</template>

<script>
import Home from "./components/Home.vue";
import Modal from "./components/Modal.vue";
import SideBar from "./components/SideBar.vue";

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
