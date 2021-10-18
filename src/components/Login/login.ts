import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({
  name: 'loginCard',
  data() {
    return {
      token: '',
    };
  },
  computed: {
    ...mapState(['loggingIn', 'loginError', 'accessToken']),
  },
  methods: {
    ...mapActions(['doLogin']),
    loginSubmit() {
      this.doLogin(this.token)
        .then(() => {
          this.$router.push({
            name: 'profile',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changed(event: any) {
      this.$store.commit('change', event.target.value);
    },
  },
});
