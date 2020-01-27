<template>
  <div class="game"
    v-if="game">
    <turn-indicator :game="game"
      :round="round"
      :defs="defs"
      :class="{'show-cards':round.step>=2}" />
    <ranking :game="game"
      :round="round"
      :defs="defs" />
  </div>
</template>

<script>
import TurnIndicator from '@/components/TurnIndicator/index.vue';
import Ranking from '@/components/Ranking/index.vue';

export default {
  components: { TurnIndicator, Ranking },
  computed: {
    game() {
      return this.$store.state.game;
    },
    round() {
      return this.$store.state.round;
    },
    defs() {
      return this.$store.state.defs;
    },
  },
};
</script>

<style lang="scss" scoped>
  .game {
    margin: 24px 0;
    font-size: 24px;
    display: flex;
    flex-grow: 1;
    position: relative;
    .turn-indicator {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: all 1s ease-in-out;
      &.show-cards {
        top: 24px;
        transform: none;
      }
    }
    .ranking {
      position: absolute;
      width: calc((100% / 12) * 3);
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
