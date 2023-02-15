<template>
  <main>
    <div className="title">
      <h2>no tour left</h2>
      <button className="btn" @click="fetchTours">refresh</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "ResteTours",
  props: ["fetchTours"],
};
</script>
