<template>
  <div class="btn-container">
    <button
      v-for="(job, index) in jobs"
      :key="job.id"
      :class="`job-btn ${index === jobIndex && 'active-btn'}`"
    >
      {{ job.company }}
    </button>
  </div>
</template>

<script>
export default {
  name: "JobAccessButton",
  props: ["jobIndex", "jobs"],
  mounted() {
    console.log("---> 1 ", this.jobIndex);
    console.log(" ---- 2 ", this.jobs);
  },
};
</script>
