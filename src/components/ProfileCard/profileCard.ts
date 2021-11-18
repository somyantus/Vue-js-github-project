import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  data() {
    return {
      isFollowing: false,
      disableBtn: false,
    };
  },
  props: {
    avatar: {
      type: String,
    },
    userName: {
      type: String,
    },
    followingNum: {
      type: Number,
    },
    followerNum: {
      type: Number,
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
  computed: {
    ...mapState(['data', 'following']),
    followCheck(): boolean {
      return !(this.isFollowing || this.following);
    },
  },
  methods: {
    ...mapActions(['addFollowing']),
    setAddFollowing(username: string) {
      this.addFollowing(username);
      this.isFollowing = true;
      this.disableBtn = true;
    },
  },
});
