<template>
  <section
    v-if="isLoading && !error && jobs.length === 0"
    class="section loading"
  >
    <h1>Loading ...</h1>
  </section>

  <section v-if="error" class="section loading">
    <h1>{{ error }}</h1>
  </section>

  <div v-if="!isLoading || jobs.length !== 0">
    <section class="section">
      <div class="title">
        <h2>experiences</h2>
        <h4>options API solution</h4>
        <div class="underline"></div>
      </div>

      <div class="jobs-center">
        <JobAccessButton
          :jobIndex="jobIndex"
          :updateJobIndex="updateJobIndex"
          :jobs="jobs"
        />
        <JobDetails :job="jobs[jobIndex]" />
      </div>
    </section>
  </div>
</template>

<script>
import JobDetails from "./components/JobDetails.vue";
import JobAccessButton from "./components/JobAccessButton.vue";

export default {
  name: "AppOptionsAPI",
  components: {
    JobDetails,
    JobAccessButton,
  },
  data() {
    return {
      jobs: [],
      isLoading: true,
      error: "",
      jobIndex: 0,
      url: "https://course-api.com/react-tabs-project",
    };
  },

  methods: {
    async fetchJob(urlArg) {
      try {
        const res = await fetch(urlArg);
        if (!res.ok) {
          this.error = `${res.status} ${res.statusText}`;
          this.isLoading = false;
          throw new Error();
        }
        this.jobs = await res.json();
        this.error = false;
        this.isLoading = false;
      } catch (error) {
        return error;
      }

      console.log(this.jobs);
    },
  },

  mounted() {
    this.fetchJob(this.url);
  },

  // computed: {
  //   filteredMenu() {},
  //   menuToRender() {},
  //   categories() {},
  // },
};
</script>
