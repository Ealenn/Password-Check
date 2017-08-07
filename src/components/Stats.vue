<template>

  <div class="stats">

    <table class="ui striped table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>[A-Z]</td>
          <td>{{Stats.uppercase()}}</td>
        </tr>
        <tr>
          <td>[a-z]</td>
          <td>{{Stats.lowercase()}}</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
export default {
  name: 'stats',
  computed: {
    password: function () {
      return this.$store.state.password
    },
    Stats: function () {
      return this.$store.state.Stats
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
