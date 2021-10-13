<template>
  <div class="row-cols-1">
    <p class="fw-bold">Format(s)</p>
    <ul class="list-unstyled">
      <li v-for="format in formats" :key="format">
        {{ format.name }} <br>
        <ul class="nav navbar navbar-left d-flex d-inline-flex">
          <li v-for="description in format.descriptions" :key="description" class="nav-item d-inline-flex  align-items-center mr-2">
            &nbsp;{{ description }}&nbsp;
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Formats",
  props: ['formats']
}
</script>

<style scoped>

</style>
