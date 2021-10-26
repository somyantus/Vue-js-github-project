import Vue from 'vue';
import { mapState } from 'vuex';
import Search from '@/components/Search/Search.vue';

export default Vue.extend({
  components: {
    Search,
  },
  computed: {
    ...mapState(['searchData']),
  },
});
