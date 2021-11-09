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
  watch: {
    '$route.params.userName': function (newV, oldV) {
      if (newV === oldV) return;
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(['getUser']),
    init() {
      const username = this.$route.params.userName;
      const loginUser = this.$store.state.data.login;
      if (loginUser && username === loginUser) {
        this.profileData = this.$store.state.data;
      } else {
        this.searchUser();
      }
    },
    searchUser() {
      this.getUser(this.$route.params.userName).then(() => {
        this.profileData = this.$store.state.searchUser;
      });
    },
  },
});
