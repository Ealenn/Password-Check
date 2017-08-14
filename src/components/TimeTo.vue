<template>
  <div class="time-to" v-if="Times.stats().possibility > 0">
    <p>{{ $t('timeto.time') }} {{momentjs(new Date().getTime() + TimeTo.time).fromNow()}}</p>
    <p>{{TimeTo.str}}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'timeTo',
  created: function () {
    moment.locale(this.$store.state.local)
  },
  data () {
    return {
      momentjs: moment
    }
  },
  computed: {
    TimeTo: function () {
      let time = Math.floor(this.$store.state.Times.operation()[0].time_optimyze)
      let timeTo = this.$store.state.TimeTo.forSecondes(time)[this.$store.state.local]
      return {
        time: time,
        str: timeTo
      }
    },
    Times: function () {
      return this.$store.state.Times
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time-to{
  text-align:center;
  margin-top: 10px;
}
</style>
