import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import { User } from '@/store/types/userTypes';

export default Vue.extend({
  name: 'WhoToFollow',
  data() {
    return {
      page: 1,
      perPage: 30,
    };
  },
  computed: {
    ...mapState(['whoToFollowVisibleData']),
  },
  mounted() {
    this.setWhoToFollowData();
  },
  methods: {
    ...mapActions(['getWhoToFollow', 'removeWhoToFollow']),
    setWhoToFollowData() {
      this.getWhoToFollow({ page: this.page, perPage: this.perPage, index: -1 });
    },
    changeSuggestion(index: number) {
      this.page += 1;
      this.getWhoToFollow({ page: this.page, perPage: 1, index });
    },
    moveToProfile(data: User) {
      this.$router.push({
        name: 'profile',
        params: { userName: data.login },
      });
    },
  },
});
