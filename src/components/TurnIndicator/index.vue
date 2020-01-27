<template>
  <div class="turn-indicator">
    <moon-loading :bg="playerColor" />
    <div class="text">
      <div class="player">
        {{playerName}}'s
        <span v-if="round.step===0"
          key="if">turn:</span>
        <span v-else
          key="else">clue is:</span>
      </div>
      <transition name="slide-left"
        mode="out-in">
        <div class="message"
          v-if="round.step===0"
          key="if">Waiting for the clue...</div>
        <div class="message"
          v-else
          key="else">“{{round.clue}}”</div>
      </transition>
    </div>
  </div>
</template>

<script>
import MoonLoading from '@/components/MoonLoading.vue';

export default {
  components: { MoonLoading },
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
    playerTurn() {
      return this.game.round % this.game.players.length;
    },
    playerName() {
      return this.game.players[this.playerTurn].name;
    },
    playerColor() {
      return this.defs.playerColors[this.playerTurn];
    },
  },
};
</script>

<style lang="scss" scoped>
  .turn-indicator {
    display: flex;
    align-items: center;
    width: calc((100% / 12) * 8);
  }
  .player,
  .message {
    position: absolute;
    width: 100%;
  }
  .player {
    color: $pink;
    top: 12px;
  }
  .text {
    margin-left: 24px;
    height: 128px;
    position: relative;
    width: calc(100% - 24px);
  }
  .message {
    color: $white;
    font-size: 72px;
    font-family: "Playfair display";
    bottom: 12px;
  }
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .slide-left-leave-active {
    position: absolute;
  }
  .slide-left-enter,
  .slide-left-leave-to {
    transform: translateX(-240px);
    opacity: 0;
  }
  .moon-loading {
    position: relative;
    z-index: 1;
  }
</style>
