<template>
  <div class="profile">
    <div class="profile__personal-info">
      <img v-if="avatar" class="profile__img" :src="avatar" />
      <p class="profile__username">{{ $route.params.userName }}</p>
    </div>
    <div class="profile__desc">
      <div class="profile__connectors">
        <div class="profile__following">
          <h3><i class="icon-user"></i>Following</h3>
          <p class="profile__following-num">{{ followingNum }}</p>
        </div>
        <div class="profile__followers">
          <h3><i class="icon-user"></i>Followers</h3>
          <p class="profile__followers-num">{{ followerNum }}</p>
        </div>
        <button
          v-if="followCheck"
          type="button"
          class="profile__follow-button"
          @click.prevent="setAddFollowing($route.params.userName)"
        >
          Follow
        </button>
        <button v-else type="button" class="profile__following-button">Following</button>
      </div>
      <div class="profile__details">
        <h2 class="profile__name">{{ name || userName }}</h2>
        <p class="profile__bio">{{ bio || 'No Bio Available' }}</p>
        <p class="profile__blog">
          {{ blog || 'No Blog Available' }}
        </p>
      </div>
    </div>
    <div class="profile__links">
      <h3 v-if="email">
        Email: <a target="blank" :href="email"> {{ email }}</a>
      </h3>
      <h3 v-if="githubLink">
        Github: <a :href="githubLink" target="blank"> {{ githubLink }}</a>
      </h3>
    </div>
  </div>
</template>

<script lang="ts" src="./profileCard"></script>

<style scoped lang="scss">
@import './profile-card';
</style>
