import Vue from 'vue';
import { mapActions } from 'vuex';
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';

export default Vue.extend({
  components: {
    ProfileCard,
  },
  data() {
    return {
      profileData: {},
    };
  },
  mounted() {
    const username = this.$route.query.userName;
    const loginUser = this.$store.state.data.login;
    if (loginUser && username === loginUser) {
      this.profileData = this.$store.state.data;
    } else {
      this.searchUser();
    }
  },

  methods: {
    ...mapActions(['getUser']),
    searchUser() {
      this.getUser(this.$route.query.userName).then(() => {
        this.profileData = this.$store.state.searchUser;
      });
    },
  },
});
