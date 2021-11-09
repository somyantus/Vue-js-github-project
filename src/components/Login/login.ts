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
    ...mapState(['loggingIn', 'loginError', 'accessToken', 'loading', 'data']),
  },
  methods: {
    ...mapActions(['doLogin', 'loginErrorMssg']),
    loginSubmit() {
      if (!this.token || this.token.length === 0) {
        // show error
        this.loginErrorMssg('Token Required !!');
        return null;
      }
      this.doLogin(this.token)
        .then(() => {
          this.$router.push({
            name: 'profile',
            params: { userName: this.$store.state.data.login },
          });
        })
        .catch((error) => {
          console.log(error);
        });
      return null;
    },
    checkState() {
      if (this.$store.state.accessToken && !this.loading) {
        this.$router.push({
          name: 'profile',
          params: { userName: this.$store.state.data.login },
        });
      }
    },
  },
  watch: {
    loading(newV, oldV) {
      if (newV === oldV) return;
      this.checkState();
    },
  },
  mounted() {
    this.checkState();
  },
});
