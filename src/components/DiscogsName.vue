<template>
  <div class="row-cols-1">
    <div class="form-group">
      <label for="user-name">Nom d'utilisateur discogs</label>
      <input id="user-name" type="text" v-model="user" v-cloak @keyup.enter="updateUser(user)" placeholder="Discogs username"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscogsName',
  data() {
    return {
      user: this.$store.getters.getUser
    }
  },
  created() {
    this.$store.commit('reloadUserAndApi', this.$store.getters.getUser);
  },
  computed: {
  },
  methods: {
    updateUser: function (user) {
      this.$store.commit('reloadUserAndApi', user);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
