<template>
  <div>
    <ProfileCard
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
  </div>
</template>

<script lang="ts" src="./profilePage"></script>
