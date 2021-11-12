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
        <div v-if="data.login !== $route.params.userName">
          <button
            type="button"
            class="profile__follow-button"
            @click.prevent="setAddFollowing($route.params.userName)"
          >
            <template v-if="followCheck">Follow</template>
            <template v-else>Following</template>
          </button>
        </div>
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
        Email: <a target="blank" href="mailto:somyaagarwal2000@gmail.com">{{ email }}</a>
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
