<template>
  <div class="col">
    <p class="fw-bold">Style(s)</p>
    <ul class="list-unstyled">
      <li v-for="style in styles" :key="style">
        {{ style }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Styles",
  props: ['styles']
}
</script>

<style scoped>

</style>
