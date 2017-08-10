<template>

  <div class="times column">

    <h2 class="ui header">
      <i class="plug icon"></i>
      <div class="content">
        Calculez en combien de temps peut être cracké votre mot de passe via bruteforce
        <div class="sub header">L'attaque par force brute est une méthode utilisée en cryptanalyse pour trouver un mot de passe ou une clé. Il s'agit de tester, une à une, toutes les combinaisons possibles. <a href="https://fr.wikipedia.org/wiki/Attaque_par_force_brute" target="_blank">Wikipedia</a></div>
      </div>
    </h2>

    <!-- Message -->
    <div class="ui info message" v-if="Times.stats().possibility == 0">
      <div class="header">
        Vous devez saisir un mot de passe pour calculer :
      </div>
      <ul class="list">
        <li>Les possibilités par caractères</li>
        <li>Les opérations maximum avant de trouver le mot de passe</li>
        <li>Le temps de calcule</li>
      </ul>
    </div>

    <div class="ui negative message" v-if="Times.stats().possibility > 0 && keyword.length > 0">
      <div class="header">
        Attention : Votre mot de passe est vulnérable
      </div>
      <ul class="list">
        <li>Votre mot de passe comporte des mots clefs disponible dans des dictionnaire de mot de passe.</li>
        <li>Ne prenez pas en compte ces temps de calcule.</li>
        <li>Il est donc beaucoup plus rapide à découvrir.</li>
      </ul>
    </div>

    <!-- Stats -->
    <div class="ui list" v-if="Times.stats().possibility > 0">
      <div class="item">
        <i class="right triangle icon"></i>
        <div class="content">
          <div class="header">{{humanizejs.numberFormat(Times.stats().possibility,0,',',' ')}} Possibilités par caractères</div>
          <div class="description">{{Times.stats().possibility_ascii}}</div>
        </div>
      </div>
      <div class="item">
        <i class="right triangle icon"></i>
        <div class="content">
          <div class="header">Opérations maximum pour trouver le mot de passe</div>
          <div class="description">{{humanizejs.numberFormat(Times.stats().operations,0,',',' ')}}</div>
        </div>
      </div>
    </div>

    <!-- Table -->
    <table class="ui striped table" v-if="Times.stats().possibility > 0">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Date</th>
          <th>Fréquence d'horloge</th>
          <th>Parallélisme</th>
          <th>Opérations /s</th>
          <th>Temps</th>
          <th>Temps optimisé</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in Times.operation()">
        <td>{{item.title}}</td>
        <td>{{item.date}}</td>
        <td>{{item.cpu}} Ghz</td>
        <td>{{item.para}}</td>
        <td>{{humanizejs.numberFormat(item.unit,0,',',' ')}} (x{{item.para}})</td>
        <td>{{momentjs(new Date().getTime() + item.time).fromNow()}}</td>
        <td>{{momentjs(new Date().getTime() + item.time_optimyze).fromNow()}}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import humanize from 'humanize'
import moment from 'moment'
moment.locale('fr')

export default {
  name: 'times',
  data: function () {
    console.log(humanize)
    return {
      momentjs: moment,
      humanizejs: humanize
    }
  },
  computed: {
    Times: function () {
      return this.$store.state.Times
    },
    keyword: function () {
      return this.$store.state.Use.keyword(this.$store.state.password)
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
