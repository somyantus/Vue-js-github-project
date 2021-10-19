<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from '@/components/Navbar/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['fetchAccessToken']),
  },
  created() {
    this.fetchAccessToken();
  },
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
