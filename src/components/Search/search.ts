import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Seacrh',
  data() {
    return {
      username: '',
      page: 0,
    };
  },
  methods: {
    ...mapActions(['getSearchdata']),
    searchData(reset = false) {
      if (reset) {
        this.page = 0;
      }
      this.page += 1;
      this.getSearchdata({ userName: this.username, page: this.page });
    },
    getPorfile(data: any) {
      this.$router.push({
        name: 'profile',
        query: { userName: data.login },
      });
      this.$store.state.loading = false;
    },
    handleScroll() {
      const doc = document.documentElement;
      const bottomWindow = doc.scrollTop + window.innerHeight === doc.offsetHeight;

      if (bottomWindow) {
        this.searchData();
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
