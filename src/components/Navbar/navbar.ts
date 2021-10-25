import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  name: 'Navbar',
  computed: {
    ...mapState(['accessToken']),
  },
  methods: {
    ...mapActions(['logOut']),
    LogOut() {
      this.logOut().then(() => {
        this.$router.push({
          name: 'login',
        });
      });
    },
  },
});
