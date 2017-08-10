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
                  <div class="bar" :style="'background-color:' + getPrcColor(Math.floor((item * 100) / characters.total), true) + ';width:' + Math.floor((item * 100) / characters.total) +'%'"></div>
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
    <div class="ui small progress">
      <div class="bar" :style="'background-color:' + score.color + ';width:' + score.prc +'%'"></div>
      <div class="label">{{ score.total }} / {{score.max}}<br/>{{score.prc}}%</div>
    </div>
    <br />
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
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
      <tr :class="getClass(characters.check)">
        <td>Nombre de caractères</td>
        <td>{{characters.total}}</td>
        <td><i :class="getIcon(characters.check)"></i> {{characters.recommend}}</td>
        <td>{{characters.score}}/{{characters.score_max}}</td>
      </tr>
      <tr :class="getClass(repeat.unique_check)">
        <td>Nombre de caractères unique</td>
        <td>{{repeat.unique}}</td>
        <td><i :class="getIcon(repeat.unique_check)"></i> {{repeat.unique_recommend}}</td>
        <td>{{repeat.unique_score}}/{{repeat.unique_score_max}}</td>
      </tr>
      <tr :class="getClass(repeat.repeat_check)">
        <td>
          Nombre de répétitions
          <a href="#" @click.prevent="showModal()" class="ui icon" data-tooltip="Affiche un tableau explicatif afin d'évaluer les risques" data-position="top left">
            (<i class="ui plus square outline icon"></i>Plus d'informations)
          </a>
        </td>
        <td>{{repeat.max}}</td>
        <td><i :class="getIcon(repeat.repeat_check)"></i> {{repeat.repeat_recommend}}</td>
        <td>{{repeat.repeat_score}}/{{repeat.repeat_score_max}}</td>
      </tr>
      <tr :class="getClass(uppercase.check)">
        <td>Lettres majuscules</td>
        <td>{{uppercase.uppercase}}</td>
        <td><i :class="getIcon(uppercase.check)"></i> {{uppercase.recommend}}</td>
        <td>{{uppercase.score}}/{{uppercase.score_max}}</td>
      </tr>
        <tr :class="getClass(lowercase.check)">
          <td>Lettres minuscules</td>
          <td>{{lowercase.lowercase}}</td>
          <td><i :class="getIcon(lowercase.check)"></i> {{lowercase.recommend}}</td>
          <td>{{lowercase.score}}/{{lowercase.score_max}}</td>
        </tr>
        <tr :class="getClass(number.check)">
          <td>Chiffre</td>
          <td>{{number.number}}</td>
          <td><i :class="getIcon(number.check)"></i> {{number.recommend}}</td>
          <td>{{number.score}}/{{number.score_max}}</td>
        </tr>
        <tr :class="getClass(specialchar.check)">
          <td>Caractères spéciaux</td>
          <td>{{specialchar.specialchar}}</td>
          <td><i :class="getIcon(specialchar.check)"></i> {{specialchar.recommend}}</td>
          <td>{{specialchar.score}}/{{specialchar.score_max}}</td>
        </tr>
        <tr :class="getClass(keyword.check)">
          <td>Mots clés dangereux</td>
          <td>{{keyword.keyword.length}}</td>
          <td><i :class="getIcon(keyword.check)"></i> {{keyword.recommend}}</td>
          <td>{{keyword.score}}/{{keyword.score_max}}</td>
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
        check: total >= 12,
        score: total < 12 ? 0 : 1,
        score_max: 1
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
        repeat_score: max <= 2 ? 2 : (max - 2) * -1,
        repeat_score_max: 2,
        unique_recommend: 12,
        unique_check: unique >= 12,
        unique_score: unique < 12 ? unique * 2 : 24,
        unique_score_max: 24
      }
    },
    number: function () {
      var number = this.$store.state.Stats.number()

      return {
        number,
        recommend: 2,
        check: number >= 2,
        score: number <= 2 ? number * 2 : 6,
        score_max: 6
      }
    },
    uppercase: function () {
      var uppercase = this.$store.state.Stats.uppercase()

      return {
        uppercase,
        recommend: 2,
        check: uppercase >= 2,
        score: uppercase <= 2 ? uppercase * 2 : 6,
        score_max: 6
      }
    },
    lowercase: function () {
      var lowercase = this.$store.state.Stats.lowercase()

      return {
        lowercase,
        recommend: 2,
        check: lowercase >= 2,
        score: lowercase <= 2 ? lowercase : 3,
        score_max: 3
      }
    },
    specialchar: function () {
      var specialchar = this.$store.state.Stats.specialChar()

      return {
        specialchar,
        recommend: 2,
        check: specialchar >= 2,
        score: specialchar <= 2 ? specialchar * 2 : 6,
        score_max: 6
      }
    },
    keyword: function () {
      var keyword = this.$store.state.Use.keyword(this.$store.state.password)

      return {
        keyword,
        recommend: 0,
        check: keyword.length <= 0,
        score: keyword.length * -10,
        score_max: 0
      }
    },
    score: function () {
      let characters = this.characters
      let repeat = this.repeat
      let number = this.number
      let uppercase = this.uppercase
      let lowercase = this.lowercase
      let specialchar = this.specialchar
      let keyword = this.keyword
      let total = characters.score + repeat.unique_score + repeat.repeat_score + number.score + uppercase.score + lowercase.score + specialchar.score + keyword.score
      let max = characters.score_max + repeat.unique_score_max + repeat.repeat_score_max + number.score_max + uppercase.score_max + lowercase.score_max + specialchar.score_max + keyword.score_max
      let prc = Math.floor((total * 100) / max)
      let color = this.getPrcColor(prc)

      return {
        total,
        max,
        prc: prc < 0 ? 0 : prc,
        color
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
    },
    getPrcColor: function (prc, inversed = false) {
      if (prc <= 10) {
        return inversed ? '#4CAF50' : '#DD2C00'
      } else if (prc > 10 && prc <= 20) {
        return inversed ? '#8BC34A' : '#FF3D00'
      } else if (prc > 20 && prc <= 30) {
        return inversed ? '#00E676' : '#FF6E40'
      } else if (prc > 30 && prc <= 40) {
        return inversed ? '#69F0AE' : '#FF6D00'
      } else if (prc > 40 && prc <= 50) {
        return inversed ? '#FFD600' : '#FF9100'
      } else if (prc > 50 && prc <= 60) {
        return inversed ? '#FF6D00' : '#FFD600'
      } else if (prc > 60 && prc <= 70) {
        return inversed ? '#FF6D00' : '#69F0AE'
      } else if (prc > 70 && prc <= 80) {
        return inversed ? '#FF6E40' : '#00E676'
      } else if (prc > 80 && prc <= 90) {
        return inversed ? '#FF3D00' : '#8BC34A'
      } else if (prc > 90) {
        return inversed ? '#DD2C00' : '#4CAF50'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
