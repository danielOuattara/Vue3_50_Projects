<template>
 <li>
  <img :src="user.avatar_url" :alt="user.name" />
  <div>
   <h4>{{user.login}}</h4>
   <a :href="user.html_url" target="_blank" rel="noreferrer">Link to {{user.login}}</a>
  </div>
 </li>
</template>

<script>
export default {
 name: "UserListItem",
 props: ["user"],
};
</script>

<style lang="scss" scoped>
</style>