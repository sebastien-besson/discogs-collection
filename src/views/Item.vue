<template>
  <loading v-model:active="this.$store.isLoading"
           :can-cancel="true"
           :on-cancel="onCancel"
           :is-full-page="fullPage"></loading>
  <h1>{{ release.title }}</h1>
  <h2> {{ release.artists_sort }} </h2>
  <img v-bind:src=release.images[0].resource_url class="a-img">

</template>

<script>

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Item',
  props: ['id'],
  data() {
    return {
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
  },
  created() {
    this.isLoading = this.$store.isLoading;
    this.$store.dispatch('setCurrentRelease', this.id);
  },
  computed: {
    isLoading: function() {
      return this.$store.getters.getIsLoading;
    },
    release: function() {
      return this.$store.getters.getCurrentRelease;
    }
  }
}
</script>

<style scoped>
</style>
