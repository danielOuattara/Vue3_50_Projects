<template>
  <h3>fetch 30 users</h3>
  <ul class="users">
    <UserListItem v-for="user in users" :key="user.id" :user="user" />
  </ul>
</template>

<script>
import UserListItem from "./UserListItem.vue";
export default {
  name: "UsersList",
  components: {
    UserListItem,
  },
  props: ["users"],
};
</script>
