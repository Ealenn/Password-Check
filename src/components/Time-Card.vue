<template>
  <q-card class="score-bar-card" flat>
    <q-card-section class="text-center">
      <p>{{ $t('timeto.time') }} {{momentjs(new Date().getTime() + TimeOptimyze).fromNow()}}</p>
      <p>{{TimeTo.Seconds(TimeOptimyze / 3600)[Local] }}</p>
    </q-card-section>
  </q-card>
</template>

<style>
</style>

<script>
import moment from 'moment'
import TimeTo from '@/class/TimeTo'

export default {
  name: 'TimeCard',
  created: function () {
    moment.locale(this.$store.state.local)
  },
  data () {
    return {
      momentjs: moment,
      TimeTo: new TimeTo()
    }
  },
  computed: {
    Local: function () {
      return this.$store.state.local
    },
    TimeOptimyze: function () {
      const comparator = this.$store.state.operation.Comparator()
      return Math.floor(comparator[comparator.length - 1].Time)
    }
  }
}
</script>
