<template>
  <div>
    <div class="search container">
      <input placeholder="Search" class="search__input" v-model="username" />
      <a href="#" @click.prevent="searchData(true)" class="search__button">Search</a>
    </div>
    <div v-if="$store.state.searchData.length > 0">
      <div
        v-for="(data, index) in $store.state.searchData"
        :key="index"
        class="search__card"
        @click.prevent="getPorfile(data)"
      >
        <img v-if="data.avatar_url" :src="data.avatar_url" class="search__img" />
        <h2 v-if="data.login" class="search__username">
          {{ data.login }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./search"></script>

<style scoped lang="scss">
@import './search';
</style>
