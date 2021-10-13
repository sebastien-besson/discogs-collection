<template>
  <div class="col">
    <p class="fw-bold">Label(s)</p>
    <ul class="list-unstyled">
      <li v-for="label in labels" :key="label">
        {{ label.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Labels",
  props: ['labels']
}
</script>

<style scoped>

</style>
