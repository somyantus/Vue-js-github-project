<template>
  <div>
    <ProfileCard
      v-if="profileData && profileData.login"
      :avatar="profileData.avatar_url"
      :user-name="profileData.login"
      :following-num="profileData.following"
      :follower-num="profileData.followers"
      :name="profileData.name"
      :bio="profileData.bio"
      :blog="profileData.blog"
      :email="profileData.email"
      :github-link="profileData.html_url"
    ></ProfileCard>
    <h3 v-else class="not-found">User you saerched for (Not Found)</h3>
  </div>
</template>

<script lang="ts" src="./profilePage"></script>

<style scoped>
.not-found {
  font-size: 4rem;
  justify-content: center;
  display: flex;
  margin-top: 20rem;
}
</style>
