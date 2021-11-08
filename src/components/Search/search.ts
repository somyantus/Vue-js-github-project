import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import { User } from '@/store/types/userTypes';

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
    getProfile(data: User) {
      this.$router.push({
        name: 'profile',
        params: { userName: data.login },
      });
      this.$store.state.loading = false;
    },
    handleScroll() {
      const doc = <HTMLElement>document.querySelector('#search__results');
      const bottomWindow = doc.scrollTop + doc.clientHeight === doc.scrollHeight;

      if (bottomWindow) {
        this.setSearchData();
      }
    },
  },
  mounted() {
    const doc = <HTMLElement>document.querySelector('#search__results');
    doc.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    const doc = <HTMLElement>document.querySelector('#search__results');
    if (doc) {
      doc.removeEventListener('scroll', this.handleScroll);
    }
  },
});
