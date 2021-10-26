import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  name: 'Search',
  data() {
    return {
      username: '',
      page: 0,
    };
  },
  computed: {
    ...mapState(['searchData']),
  },
  methods: {
    ...mapActions(['getSearchData']),
    setSearchData(reset = false) {
      if (reset) {
        this.page = 0;
      }
      this.page += 1;
      this.getSearchData({ userName: this.username, page: this.page });
    },
    getProfile(data: any) {
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
        this.setSearchData();
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
