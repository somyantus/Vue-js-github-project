import Vue from 'vue';

export default Vue.extend({
  props: {
    userName: {
      type: String,
    },
    followingNum: {
      type: String,
    },
    followerNum: {
      type: String,
    },
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    blog: {
      type: String,
    },
    email: {
      type: String,
    },
    githubLink: {
      type: String,
    },
  },
});
