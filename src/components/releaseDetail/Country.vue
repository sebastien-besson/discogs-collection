<template>
  <div class="col">
    <p class="fw-bold">Country</p>
    <p class="fw-lighter">{{ country }}</p>
  </div>
</template>

<script>
export default {
  name: "Country",
  props: ['country']
}
</script>

<style scoped>

</style>
