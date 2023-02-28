<template>
 <h2 v-if="people.length > 1" class="h2_styled">friends to contact</h2>
 <h2 v-if="people.length === 1" class="h2_styled">friend to contact</h2>

 <article v-for="person in people" :key="person.id" class="person article_styled">
  <img :src="person.image" :alt="person.name" />
  <div>
   <h4>{{person.name}}</h4>
   <p>{{person.age}} years</p>
   <button @click="$emit('close', person.id)" class="btn_styled">Event Finished</button>
  </div>
 </article>
</template>

<script>
export default {
 name: "List",
 props: ["people"],
 emits: ["close"],
};
</script>








