import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  data() {
    return {
      isFollowing: false,
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
      const abc = this.data.login !== this.$route.params.userName;
      console.log(
        this.data.login,
        this.$route.params.userName,
        abc,
        this.isFollowing,
        this.following
      );
      return abc && !(this.isFollowing || this.following);
    },
  },
  methods: {
    ...mapActions(['addFollowing']),
    setAddFollowing(username: string) {
      this.addFollowing(username);
      this.isFollowing = true;
    },
  },
});
