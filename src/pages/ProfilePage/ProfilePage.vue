<template>
  <div>
    <ProfileCard
      :user-name="profile.userName"
      :following-num="profile.followingNum"
      :follower-num="profile.followerNum"
      :name="profile.name"
      :bio="profile.bio"
      :blog="profile.blog"
      :email="profile.email"
      :github-link="profile.githubLink"
    ></ProfileCard>
  </div>
</template>

<script lang="ts" src="./profilePage"></script>
