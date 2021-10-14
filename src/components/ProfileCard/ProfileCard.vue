<template>
  <div class="profile">
    <div class="profile__personal-info">
      <img class="profile__img" src="" />
      <p class="profile__username">{{ userName }}</p>
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
        <h2 class="profile__name">{{ name }}</h2>
        <p class="profile__bio">{{ bio }}</p>
        <p class="profile__blog">
          {{ blog }}
        </p>
      </div>
    </div>
    <div class="profile__links">
      <h3>
        Email: <a href="/"> {{ email }}</a>
      </h3>
      <h3>
        Github: <a href="/"> {{ githubLink }}</a>
      </h3>
    </div>
  </div>
</template>

<script lang="ts" src="./profile"></script>

<style scoped lang="scss">
@import './profile-card';
</style>
