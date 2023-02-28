<template>
  <main>
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
        <div>
          <TourItem
            v-for="tourItem in tours"
            :key="tourItem.id"
            :tourItem="tourItem"
            @removeTour="$emit('removeTour', tourItem.id)"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TourItem from "./TourItem.vue";
export default {
  name: "Tours",
  components: { TourItem },
  props: ["tours"],
  emits: ["removeTour"],
};
</script>
