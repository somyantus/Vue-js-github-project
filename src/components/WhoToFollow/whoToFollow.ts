import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  name: 'WhoToFollow',
  data() {
    return {
      page: 1,
      perPage: 3,
    };
  },
  computed: {
    ...mapState(['whoToFollowData']),
  },
  mounted() {
    this.setWhoToFollowData();
  },
  methods: {
    ...mapActions(['getWhoToFollow', 'removeWhoToFollow']),
    setWhoToFollowData() {
      this.getWhoToFollow({ page: this.page, perPage: this.perPage, index: -1 });
    },
    changeSuggestion(index: any) {
      this.page += 1;
      this.getWhoToFollow({ page: this.page, perPage: 1, index });
    },
    moveToProfile(data: any) {
      this.$router.push({
        name: 'profile',
        query: { userName: data.login },
      });
    },
  },
});
