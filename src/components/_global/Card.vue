<template>
  <div class="card">
    <div class="inner">
      <div class="front">
        <img :src="require(`@/assets/cards/${this.card}.jpg`)" />
      </div>
      <div clas="back">
        <img src="~@/assets/card-back.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Number,
      required: true,
    },
  },
  computed: {
    cardPicture() {
      return `@/assets/${this.card}.jpg`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .inner {
      position: relative;
      padding-bottom: 150%;
    }
    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
