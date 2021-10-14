<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import './sass/vendors/container';
@import './sass/base/common';
@import './sass/base/reset';
@import './sass/base/typography';
@import './sass/vendors/fonts';
@import './sass/vendors/icons';
</style>
