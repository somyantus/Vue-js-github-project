<template>
  <section>
    <nav class="navbar">
      <div class="navbar__logo">
        <h1><i class="icon-github navbar__icon"></i>Github</h1>
      </div>
      <div class="navbar__links">
        <router-link :to="{ name: 'home' }" class="navbar__items"
          ><i class="icon-home navbar__home-icon"></i>Home</router-link
        >
        <a
          href="#"
          :to="{ name: 'login' }"
          class="navbar__items"
          @click.prevent="log_out"
          v-if="$store.state.accessToken"
          >Logout</a
        >
        <router-link :to="{ name: 'home' }" class="navbar__items"
          >Account</router-link
        >
      </div>
    </nav>
    <router-view />
  </section>
</template>

<style scoped lang="scss">
@import '~/src/sass/components/navbar';
</style>
