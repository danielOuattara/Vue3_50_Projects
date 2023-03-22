<template>
  <br />
  <hr />
  <br />
  <p style="text-align: center">composition API solution !</p>
  <Home @onToggleSideBar="toggleSideBar" @onToggleModal="toggleModal" />
  <Modal :isModalOpen="isModalOpen" @onToggleModal="toggleModal" />
  <SideBar :isSideBarOpen="isSideBarOpen" @onToggleSideBar="toggleSideBar" />
</template>

<script>
import Home from "./components/Home.vue";
import Modal from "./components/Modal.vue";
import SideBar from "./components/SideBar.vue";
import { ref } from "vue";

export default {
  name: "AppOptionsAPI",
  components: {
    Home,
    Modal,
    SideBar,
  },
  setup() {
    const isSideBarOpen = ref(false);
    const isModalOpen = ref(false);
    function toggleSideBar() {
      isSideBarOpen.value = !isSideBarOpen.value;
    }

    function toggleModal() {
      isModalOpen.value = !isModalOpen.value;
    }

    return {
      isSideBarOpen,
      isModalOpen,
      toggleSideBar,
      toggleModal,
    };
  },
};
</script>
