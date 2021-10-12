<template>
  <div>
    <ProfileCard
      :userName="profile.userName"
      :followingNum="profile.followingNum"
      :followerNum="profile.followerNum"
      :name="profile.name"
      :bio="profile.bio"
      :blog="profile.blog"
      :email="profile.email"
      :githubLink="profile.githubLink"
    ></ProfileCard>
  </div>
</template>

//
<script>
import ProfileCard from '@/components/ProfileCard.vue';

export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      profile: {
        userName: 'somya_agarwal',
        followingNum: 153,
        followerNum: 146,
        name: 'Somya Agarwal',
        bio: 'Tech enthusiast, Traveller, Photographer',
        blog: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        email: 'xyz@gmail.com',
        githubLink: 'https://somyantus.github.com',
      },
    };
  },
};
</script>
