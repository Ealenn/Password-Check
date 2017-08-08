<template>

  <div class="stats">

    <!-- Repeat Modal -->
    <ya-modal verticla flip inverted v-model="activeModal">
      <div class="ui header">Nombre de répétitions</div>
      <div class="content">

        <table class="ui striped table">
          <thead>
            <tr>
              <th>Caractère</th>
              <th>Répétition</th>
              <th>Évaluation des risques</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in Stats.repeat(false)" v-if="item > 1">
              <td>{{index}}</td>
              <td>{{item}}</td>
              <td>
                <div class="ui small progress">
                  <div class="bar" :style="'width:' + Math.floor((item * 100) / Stats.total()) +'%'"></div>
                  <div class="label">{{ Math.floor((item * 100) / Stats.total()) }}%</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="actions">
        <div class="ui green ok inverted button" @click="activeModal=false">OK</div>
      </div>
    </ya-modal>

    <!-- Table -->
    <table class="ui striped table">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Nombre</th>
          <th>
            Recommandations
            <a href="http://www.ssi.gouv.fr/" target="_blank" class="ui icon" data-tooltip="ANSSI : Agence nationale de la sécurité des systèmes d'information" data-position="top left">
              <i class="ui help circle icon"></i>
            </a>
          </th>
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
        <td>Nombre de caractères unique</td>
        <td>{{Stats.repeat().unique}}</td>
        <td v-if="Stats.repeat().unique < 12" class="negative"><i class="icon close"></i> 12</td>
        <td v-if="Stats.repeat().unique >= 12" class="positive"><i class="icon checkmark"></i> 12</td>
      </tr>
      <tr>
        <td>
          Nombre de répétitions 
          <a href="#" @click.prevent="showModal()" class="ui icon" data-tooltip="Affiche un tableau explicatif afin d'évaluer les risques" data-position="top left">
            (<i class="ui plus square outline icon"></i>Plus d'informations)
          </a>
        </td>
        <td>
          {{Stats.repeat().max}}
        </td>
        <td v-if="Stats.uppercase() >= 2" class="positive"><i class="icon checkmark"></i> < 2</td>
        <td v-if="Stats.uppercase() < 2" class="negative"><i class="icon close"></i> < 2</td>
      </tr>
      <tr>
        <td>Lettres majuscules</td>
        <td>{{Stats.uppercase()}}</td>
        <td v-if="Stats.uppercase() >= 2" class="positive"><i class="icon checkmark"></i> 2</td>
        <td v-if="Stats.uppercase() < 2" class="negative"><i class="icon close"></i> 2</td>
      </tr>
        <tr>
          <td>Lettres minuscules</td>
          <td>{{Stats.lowercase()}}</td>
          <td v-if="Stats.lowercase() >= 2" class="positive"><i class="icon checkmark"></i> 2</td>
          <td v-if="Stats.lowercase() < 2" class="negative"><i class="icon close"></i> 2</td>
        </tr>
        <tr>
          <td>Chiffre</td>
          <td>{{Stats.number()}}</td>
          <td v-if="Stats.number() >= 2" class="positive"><i class="icon checkmark"></i> 2</td>
          <td v-if="Stats.number() < 2" class="negative"><i class="icon close"></i> 2</td>
        </tr>
        <tr>
          <td>Caractères spéciaux</td>
          <td>{{Stats.specialChar()}}</td>
          <td v-if="Stats.specialChar() >= 2" class="positive"><i class="icon checkmark"></i> 2</td>
          <td v-if="Stats.specialChar() < 2" class="negative"><i class="icon close"></i> 2</td>
        </tr>
        <tr>
          <td>Mots clés dangereux</td>
          <td>{{Use.keyword(this.password).length}}</td>
          <td v-if="Use.keyword(this.password).length == 0" class="positive"><i class="icon checkmark"></i> 0</td>
          <td v-if="Use.keyword(this.password).length > 0" class="negative"><i class="icon close"></i> 0</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
import YaModalFunc from 'vue-ya-semantic-modal'

export default {
  name: 'stats',
  components: {
    YaModal: YaModalFunc()
  },
  data: function () {
    return {
      activeModal: false
    }
  },
  computed: {
    password: function () {
      return this.$store.state.password
    },
    Stats: function () {
      return this.$store.state.Stats
    },
    Use: function () {
      return this.$store.state.Use
    }
  },
  methods: {
    showModal: function () {
      this.activeModal = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
