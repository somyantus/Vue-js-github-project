<template>
  <div id="app">
    <Navbar />
    <div v-if="loading">
      <Loader />
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from '@/components/Navbar/Navbar.vue';
import Loader from '@/components/Loader/Loader.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Loader,
  },
  computed: {
    ...mapState(['loading']),
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
