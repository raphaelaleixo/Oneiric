<template>
  <div class="home">
    <moon-loading />
  </div>
</template>

<script>
// @ is an alias to /src
import MoonLoading from '@/components/MoonLoading.vue';

export default {
  name: 'home',
  components: {
    MoonLoading,
  },
};
</script>
