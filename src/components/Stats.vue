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
            <tr v-for="(item, index) in repeat.repeat" v-if="item > 1">
              <td>{{index}}</td>
              <td>{{item}}</td>
              <td>
                <div class="ui small progress">
                  <div class="bar" :style="'width:' + Math.floor((item * 100) / characters.total) +'%'"></div>
                  <div class="label">{{ Math.floor((item * 100) / characters.total) }}%</div>
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
        <td>{{characters.total}}</td>
        <td :class="getClass(characters.check)"><i :class="getIcon(characters.check)"></i> {{characters.recommend}}</td>
      </tr>
      <tr>
        <td>Nombre de caractères unique</td>
        <td>{{repeat.unique}}</td>
        <td :class="getClass(repeat.unique_check)"><i :class="getIcon(repeat.unique_check)"></i> {{repeat.unique_recommend}}</td>
      </tr>
      <tr>
        <td>
          Nombre de répétitions 
          <a href="#" @click.prevent="showModal()" class="ui icon" data-tooltip="Affiche un tableau explicatif afin d'évaluer les risques" data-position="top left">
            (<i class="ui plus square outline icon"></i>Plus d'informations)
          </a>
        </td>
        <td>{{repeat.max}}</td>
        <td :class="getClass(repeat.repeat_check)"><i :class="getIcon(repeat.repeat_check)"></i> {{repeat.repeat_recommend}}</td>
      </tr>
      <tr>
        <td>Lettres majuscules</td>
        <td>{{uppercase.uppercase}}</td>
        <td :class="getClass(uppercase.check)"><i :class="getIcon(uppercase.check)"></i> {{uppercase.recommend}}</td>
      </tr>
        <tr>
          <td>Lettres minuscules</td>
          <td>{{lowercase.lowercase}}</td>
          <td :class="getClass(lowercase.check)"><i :class="getIcon(lowercase.check)"></i> {{lowercase.recommend}}</td>
        </tr>
        <tr>
          <td>Chiffre</td>
          <td>{{number.number}}</td>
          <td :class="getClass(number.check)"><i :class="getIcon(number.check)"></i> {{number.recommend}}</td>
        </tr>
        <tr>
          <td>Caractères spéciaux</td>
          <td>{{specialchar.specialchar}}</td>
          <td :class="getClass(specialchar.check)"><i :class="getIcon(specialchar.check)"></i> {{specialchar.recommend}}</td>
        </tr>
        <tr>
          <td>Mots clés dangereux</td>
          <td>{{keyword.keyword.length}}</td>
          <td :class="getClass(keyword.check)"><i :class="getIcon(keyword.check)"></i> {{keyword.recommend}}</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
import YaModalFunc from 'vue-ya-semantic-modal'

const ICON_POSITIVE = 'icon checkmark'
const ICON_NEGATIVE = 'icon close'

const CLASS_POSITIVE = 'positive'
const CLASS_NEGATIVE = 'negative'

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
    characters: function () {
      var total = this.$store.state.Stats.total()

      return {
        total,
        recommend: 12,
        check: total >= 12
      }
    },
    repeat: function () {
      var repeat = this.$store.state.Stats.repeat()
      var unique = repeat.unique
      var max = repeat.max

      delete repeat.unique
      delete repeat.max

      return {
        repeat,
        unique,
        max,
        repeat_recommend: 0,
        repeat_tolerance: 2,
        repeat_check: max <= 2,
        unique_recommend: 12,
        unique_check: unique >= 12
      }
    },
    number: function () {
      var number = this.$store.state.Stats.number()

      return {
        number,
        recommend: 2,
        check: number >= 2
      }
    },
    uppercase: function () {
      var uppercase = this.$store.state.Stats.uppercase()

      return {
        uppercase,
        recommend: 2,
        check: uppercase >= 2
      }
    },
    lowercase: function () {
      var lowercase = this.$store.state.Stats.lowercase()

      return {
        lowercase,
        recommend: 2,
        check: lowercase >= 2
      }
    },
    specialchar: function () {
      var specialchar = this.$store.state.Stats.specialChar()

      return {
        specialchar,
        recommend: 2,
        check: specialchar >= 2
      }
    },
    keyword: function () {
      var keyword = this.$store.state.Use.keyword(this.$store.state.password)

      return {
        keyword,
        recommend: 0,
        check: keyword <= 0
      }
    }
  },
  methods: {
    showModal: function () {
      this.activeModal = true
    },
    getClass: function (check) {
      return check ? CLASS_POSITIVE : CLASS_NEGATIVE
    },
    getIcon: function (check) {
      return check ? ICON_POSITIVE : ICON_NEGATIVE
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
