<template>
  <main>
    <div className="title">
      <h2>{{ errorMessage }}</h2>
    </div>
  </main>
</template>

<script>
export default {
  name: "Error",
  props: ["errorMessage"],
};
</script>
