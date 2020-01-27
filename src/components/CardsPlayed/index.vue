<template>
  <div class="cards">
    <card v-for="card in round.cards"
      :key="card"
      :card="card" />
  </div>
</template>

<script>
import Card from '@/components/_global/Card.vue';

export default {
  components: { Card },
  props: {
    game: {
      type: Object,
      required: true,
    },
    round: {
      type: Object,
      required: true,
    },
    defs: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .cards {
    display: flex;
    width: 100%;
    .card {
      width: calc((100% / 12) - 24px);
    }
  }
</style>
