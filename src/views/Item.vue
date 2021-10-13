<template>
  <loading v-model:active="isLoading"
           :can-cancel="true"
           :is-full-page="fullPage"></loading>
  <div class="container" v-if="release.id">
    <h1>{{ release.title }}</h1>
    <h2> {{ release.artists_sort }} </h2>
    <div class="card-img">
      <img v-bind:src=release.images[0].resource_url>
    </div>
    <hr>
    <div class="row">
      <Labels v-bind:labels="release.labels"></Labels>
      <Country v-bind:country="release.country"></Country>
      <Styles v-bind:styles="release.styles"></Styles>
    </div>
    <Formats v-bind:formats="release.formats"></Formats>
    <Tracklist v-bind:tracklist="release.tracklist"></Tracklist>
  </div>
</template>

<script>

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Formats from "@/components/releaseDetail/Formats";
import Country from "@/components/releaseDetail/Country";
import Styles from "@/components/releaseDetail/Styles";
import Tracklist from "@/components/releaseDetail/Tracklist";
import Labels from "@/components/releaseDetail/Labels";

export default {
  name: 'Item',
  props: ['id'],
  data() {
    return {
      fullPage: true
    }
  },
  components: {
    Labels,
    Tracklist,
    Styles,
    Country,
    Loading,
    Formats
  },
  methods: {
  },
  created() {
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
