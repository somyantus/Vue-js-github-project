import Vue from 'vue';
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';

export default Vue.extend({
  components: {
    ProfileCard,
  },
  data() {
    return {
      profile: {
        userName: '',
        followingNum: '',
        followerNum: '',
        name: '',
        bio: '',
        blog: '',
        email: '',
        githubLink: '',
      },
    };
  },
});
