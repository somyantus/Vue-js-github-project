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
            query: { userName: this.$store.state.data.login },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (this.$store.state.accessToken) {
      this.$router.push({
        name: 'profile',
        query: { userName: this.$store.state.data.login },
      });
    }
  },
});
