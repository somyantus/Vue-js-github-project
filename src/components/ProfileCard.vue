<template>
  <div class="profile">
    <div class="profile__personal-info">
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

<script>
export default {
  props: {
    userName: {
      required: true,
      type: String,
    },
    followingNum: {
      required: true,
      type: Number,
    },
    followerNum: {
      required: true,
      type: Number,
    },
    name: {
      required: true,
      type: String,
    },
    bio: {
      required: true,
      type: String,
    },
    blog: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    githubLink: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import '~/src/sass/layouts/profile-page';
</style>
