<template>
  <div class="ranking">
    <transition-group name="flip-list">
      <ranking-entry v-for="entry in playerRanking"
        :key="entry.number"
        :voted="!!round.votes[entry.number]"
        :is-narrator="entry.number === activePlayer"
        :color="defs.playerColors[entry.number]"
        :entry="entry" />
    </transition-group>
  </div>
</template>

<script>
import RankingEntry from './RankingEntry.vue';

export default {
  components: { RankingEntry },
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
  computed: {
    activePlayer() {
      return this.$store && this.$store.getters.activePlayer;
    },
    playerRanking() {
      const players = [...this.game.players];
      console.log(players);
      players.sort((a, b) => {
        if (a.points > b.points) {
          return -1;
        }
        if (a.points < b.points) {
          return 1;
        }
        return 0;
      });
      console.log(players);
      return players;
    },
  },
};
</script>

<style lang="scss" scoped>
  .flip-list-move {
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .ranking {
  }
</style>
