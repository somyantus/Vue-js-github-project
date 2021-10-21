import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Navbar',
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
