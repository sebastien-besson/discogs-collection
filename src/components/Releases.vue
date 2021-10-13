<template>
  <div v-if="getReleases && getReleases.length" class="row">
    <div class="col-lg-3 col-md-4 col-xs-6 content-img" v-for="(release, index) in getReleases" :key="index" >
      <router-link :to="{name: 'Item', params : { id : release.id}}" class="movie a-img-txt" >
        <img v-bind:src=release.basic_information.cover_image class="a-img">
        <div class="preview-content row">
          <p class="text-center display-6">{{release.basic_information.artists[0].name}}</p>
          <p class="fw-bold">{{release.basic_information.title}} ({{release.basic_information.year}})</p>
          <p class="">{{release.basic_information.formats[0].name}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Releases',
  data() {
    return {
      releases: this.$store.releases,
      errors: this.$store.errors
    }
  },
  computed: {
    getReleases() {
      return this.$store.state.releases;
    }
  },
}
</script>

<style scoped>
  img, svg {
    display: block;
    vertical-align: middle;
    width: 100%;
    height: auto;
    margin-bottom: 10%;
  }

  .a-img:hover{
    opacity: 0.75;
    background-color: black;
  }

  .a-img-txt{
    display:grid;
  }

  /* les enfants se superposent */
  .a-img-txt>*{
    grid-area:1/1/-1/-1;
    /* raccourci pour grid-row et grid-column */
  }

  /* le texte */
  .preview-content{
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    opacity:0;
    transition:opacity .8s;
  }

  .preview-content:hover{
    opacity:1;
  }

  a{
    text-decoration:none;
  }
</style>
