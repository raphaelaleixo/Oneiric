<template>
  <div class="entry">
    <img class="voted"
      v-if="voted && !isNarrator"
      src="~@/assets/check.svg" />
    <div class="color"
      :style="{backgroundColor: color}">
    </div>
    <div class="name"
      :class="{narrator:isNarrator}">{{entry.name}}</div>
    <div class="points">{{entry.points}}</div>
  </div>
</template>

<script>
export default {
  props: {
    entry: { type: Object, required: true },
    color: { type: String, required: true },
    voted: { type: Boolean, default: false },
    isNarrator: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
  .entry {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 12px 0;
    .color {
      min-width: 18px;
      height: 18px;
      border-radius: 50%;
      flex-basis: auto;
    }
    .name {
      width: 100%;
      margin-left: 24px;
      color: $white;
      font-weight: bold;
      &.narrator {
        color: $pink;
      }
    }
    .points {
      color: $pink;
    }
    .voted {
      height: 18px;
      display: block;
      position: absolute;
      left: -36px;
    }
  }
</style>
