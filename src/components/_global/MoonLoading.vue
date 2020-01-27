<template>
  <div class="moon-loading"
    :style="{'--bg-color':bg}">
    <div class="loader"
      :class="[size, {pinkMoon}]"></div>
  </div>
</template>

<script>
export default {
  props: {
    size: { type: String, default: 'normal' },
    bg: { type: String, default: '#232946' },
  },
  computed: {
    pinkMoon() {
      return this.bg === '#232946';
    },
  },
};
</script>

<style lang="scss" scoped>
  .moon-loading {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background-color: var(--bg-color);
    min-width: 128px;
  }
  .loader {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: $white;
    position: relative;
    margin: 32px;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 50%;
      border-radius: 50%;
      background-color: var(--bg-color);
      transition: all 3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      animation: eclipse 20s ease-in-out infinite;
      transform-origin: 50% 0;
    }
    &.small {
      width: 1em;
      height: 1em;
      margin: 0.5em;
      &:after {
        animation-duration: 5s;
      }
    }
    &.pinkMoon {
      background-color: $pink;
    }
  }

  @keyframes eclipse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
