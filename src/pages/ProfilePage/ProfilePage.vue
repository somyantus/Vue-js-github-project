<template>
  <div>
    <ProfileCard
      :avatar="data.avatar_url"
      :user-name="data.login"
      :following-num="data.following"
      :follower-num="data.followers"
      :name="data.name"
      :bio="data.bio"
      :blog="data.blog"
      :email="data.email"
      :github-link="data.html_url"
    ></ProfileCard>
  </div>
</template>

<script lang="ts" src="./profilePage"></script>
