<template>
  <div class="follow">
    <h1 class="follow__heading">Who To Follow</h1>
    <div v-for="(data, index) in whoToFollowData" :key="index" class="follow__card">
      <div class="follow__card-1">
        <img :src="data.avatar_url" class="follow__card-img" />
        <h2 class="follow__card-username">{{ data.login }}</h2>
        <button type="button" class="follow__cross-button">
          <img
            src="../../assets/images/cross-removebg-preview.png"
            class="follow__cross"
            @click.prevent="changeSuggestion(index)"
          />
        </button>
      </div>
      <div class="follow__card-2">
        <button type="button" class="follow__button" @click.prevent="moveToProfile(data)">
          See Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./whoToFollow"></script>

<style scoped lang="scss">
@import './who-to-follow';
</style>
