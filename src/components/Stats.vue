<template>

  <div class="stats">

    <table class="ui striped table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Nombre</th>
          <th>Recommandations</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Nombre de caractères</td>
        <td>{{Stats.total()}}</td>
        <td v-if="Stats.total() < 12" class="negative"><i class="icon close"></i> 12</td>
        <td v-if="Stats.total() >= 12" class="positive"><i class="icon checkmark"></i> 12</td>
      </tr>
      <tr>
        <td>Lettres majuscules</td>
        <td>{{Stats.uppercase()}}</td>
        <td></td>
      </tr>
        <tr>
          <td>Lettres minuscules</td>
          <td>{{Stats.lowercase()}}</td>
          <td></td>
        </tr>
        <tr>
          <td>Chiffre</td>
          <td>{{Stats.number()}}</td>
          <td></td>
        </tr>
        <tr>
          <td>Caractères spéciaux</td>
          <td>{{Stats.specialChar()}}</td>
          <td></td>
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
