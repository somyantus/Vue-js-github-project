<template>
  <div>
    <div class="search container">
      <form @submit="setSearchData(true)" class="search__form">
        <input placeholder="Search" class="search__input" v-model="username" />
        <a href="#" class="search__button" @click.prevent="setSearchData(true)">Search</a>
      </form>
    </div>
    <div class="search__cards-grid" id="search__results" @scroll="handleScroll">
      <div
        v-for="(data, index) in searchData"
        :key="index"
        class="search__card"
        @click.prevent="getProfile(data)"
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
