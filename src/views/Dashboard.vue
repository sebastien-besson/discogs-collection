<template>
  <h1>{{ this.$store.state.user }} discogs collection</h1>
  <div class="container page-top">
    <DiscogsName></DiscogsName>
    <hr>
    <loading v-model:active="isLoading"
             :can-cancel="true"
             :on-cancel="onCancel"
             :is-full-page="fullPage"></loading>
    <div class="row">
      <div class="col-12">
        <Releases></Releases>
      </div>
    </div>
  </div>
</template>

<script>
import DiscogsName from "@/components/DiscogsName";
import Releases from "@/components/Releases";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'Dashboard',
  components: {
    DiscogsName,
    Releases,
    Loading
  },
  methods: {
  },
  created() {
  },
  computed: {
    isLoading: function () {
      return this.$store.getters.getIsLoading;
    }
  }
}
</script>

<style scoped>
</style>
