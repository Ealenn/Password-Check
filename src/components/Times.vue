<template>

  <div class="times column">

    <h2 class="ui header">
      <i class="plug icon"></i>
      <div class="content">
        {{ $t('time.title') }}
        <div class="sub header">
          {{ $t('time.wikipedia') }}
          <a href="https://fr.wikipedia.org/wiki/Attaque_par_force_brute" target="_blank">Wikipedia</a></div>
      </div>
    </h2>

    <!-- Message -->
    <div class="ui info message" v-if="Times.stats().possibility == 0">
      <div class="header">
        {{ $t('time.emptypassword.title') }}
      </div>
      <ul class="list">
        <li>{{ $t('time.emptypassword.line1') }}</li>
        <li>{{ $t('time.emptypassword.line2') }}</li>
        <li>{{ $t('time.emptypassword.line3') }}</li>
      </ul>
    </div>

    <div class="ui negative message" v-if="Times.stats().possibility > 0 && keyword.length > 0">
      <div class="header">
        {{ $t('time.warning.title') }}
      </div>
      <ul class="list">
        <li>{{ $t('time.warning.line1') }}</li>
        <li>{{ $t('time.warning.line2') }}</li>
        <li>{{ $t('time.warning.line3') }}</li>
      </ul>
    </div>

    <!-- Stats -->
    <div class="ui list" v-if="Times.stats().possibility > 0">
      <div class="item">
        <i class="right triangle icon"></i>
        <div class="content">
          <div class="header">{{humanizejs.numberFormat(Times.stats().possibility,0,',',' ')}} {{ $t('time.bycharacters') }}</div>
          <div class="description">{{Times.stats().possibility_ascii}}</div>
        </div>
      </div>
      <div class="item">
        <i class="right triangle icon"></i>
        <div class="content">
          <div class="header">{{ $t('time.maximumoperations') }}</div>
          <div class="description">{{humanizejs.numberFormat(Times.stats().operations,0,',',' ')}}</div>
        </div>
      </div>
    </div>

    <!-- Table -->
    <table class="ui striped table" v-if="Times.stats().possibility > 0">
      <thead>
        <tr>
          <th>{{ $t('time.array.title') }}</th>
          <th>{{ $t('time.array.date') }}</th>
          <th>{{ $t('time.array.clock') }}</th>
          <th>{{ $t('time.array.parallelism') }}</th>
          <th>{{ $t('time.array.operations') }}</th>
          <th>{{ $t('time.array.time') }}</th>
          <th>{{ $t('time.array.optimizedtime') }}</th>
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
