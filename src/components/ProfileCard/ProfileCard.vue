<template>
  <div class="profile">
    <div class="profile__personal-info">
      <img
        v-if="$store.state.data.avatar_url"
        class="profile__img"
        :src="avatar"
      />
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
      </div>
      <div class="profile__details">
        <h2 v-if="$store.state.data.name" class="profile__name">{{ name }}</h2>
        <p v-if="$store.state.data.bio" class="profile__bio">{{ bio }}</p>
        <p v-if="$store.state.data.blog" class="profile__blog">
          {{ blog }}
        </p>
      </div>
    </div>
    <div class="profile__links">
      <h3 v-if="$store.state.data.email">
        Email: <a href="/"> {{ email }}</a>
      </h3>
      <h3 v-if="$store.state.data.html_url">
        Github: <a href="/"> {{ githubLink }}</a>
      </h3>
    </div>
  </div>
</template>

<script lang="ts" src="./profileCard"></script>

<style scoped lang="scss">
@import './profile-card';
</style>
