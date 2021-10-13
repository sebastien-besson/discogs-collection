<template>
  <h1>{{ this.$store.state.user }} discogs collection</h1>
  <div class="container page-top">
    <DiscogsName></DiscogsName>
    <hr>
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

export default {
  name: 'Dashboard',
  components: {
    DiscogsName,
    Releases
  },
  methods: {
  },
  created() {
  }
}
</script>

<style scoped>
</style>
