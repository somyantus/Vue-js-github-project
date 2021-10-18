import Vue from 'vue';
import { mapState } from 'vuex';
import ProfileCard from '@/components/ProfileCard/ProfileCard.vue';

export default Vue.extend({
  components: {
    ProfileCard,
  },
  computed: {
    ...mapState(['data']),
  },
});
