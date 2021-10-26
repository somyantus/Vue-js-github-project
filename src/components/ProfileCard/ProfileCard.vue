<template>
  <div class="profile">
    <div class="profile__personal-info">
      <img v-if="data.avatar_url" class="profile__img" :src="avatar" />
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
          v-if="$store.state.data.login != $route.query.userName"
          type="button"
          class="profile__follow-button"
          @click.prevent="setAddFollowing($route.query.userName)"
        >
          Follow
        </button>
      </div>
      <div class="profile__details">
        <h2 v-if="data.name" class="profile__name">{{ name }}</h2>
        <p v-if="data.bio" class="profile__bio">{{ bio }}</p>
        <p v-if="data.blog" class="profile__blog">
          {{ blog }}
        </p>
      </div>
    </div>
    <div class="profile__links">
      <h3 v-if="data.email">
        Email: <a href="/"> {{ email }}</a>
      </h3>
      <h3 v-if="data.html_url">
        Github: <a href="/"> {{ githubLink }}</a>
      </h3>
    </div>
  </div>
</template>

<script lang="ts" src="./profileCard"></script>

<style scoped lang="scss">
@import './profile-card';
</style>
