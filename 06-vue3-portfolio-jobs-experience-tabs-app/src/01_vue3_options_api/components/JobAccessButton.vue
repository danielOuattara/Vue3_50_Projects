<template>
  <div class="btn-container">
    <button
      v-for="(job, index) in jobs"
      :key="job.id"
      :class="`job-btn ${index === jobIndex && 'active-btn'}`"
      @click="$emit('changeJobIndex', index)"
    >
      {{ job.company }}
    </button>
  </div>
</template>

<script>
export default {
  name: "JobAccessButton",
  props: ["jobIndex", "jobs"],
  emits: ["changeJobIndex"],
};
</script>
