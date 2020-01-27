<template>
  <div id="oneiric"
    class="grid">
    <header>
      <router-link to="/">
        <img src="~@/assets/logo.svg" />
      </router-link>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
  html {
    background: url(~@/assets/bg.png) no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
  }
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
    line-height: 1;
    *,
    *::after,
    *::before {
      box-sizing: inherit;
    }
  }
  .grid {
    padding: 60px 90px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  header {
    height: 2em;
    margin-top: 1em;
  }
</style>
