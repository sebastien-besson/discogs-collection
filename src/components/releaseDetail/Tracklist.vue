<template>
  <div class="row-cols-1">
    <p class="fw-bold">Tracklist</p>
    <ul class="list-unstyled">
      <li v-for="track in tracklist" :key="track">
        {{ track.position }} - {{ track.title }} ({{ track.duration }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tracklist",
  props: ['tracklist']
}
</script>

<style scoped>

</style>
