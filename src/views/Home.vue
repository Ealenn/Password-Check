<template>
  <q-page padding class="flex justify-center items-start">
    <div id="main" class="q-pa-md">
      <div class="column">
        <PasswordCard />
        <ScoreBar class="element" />
        <TimeCard class="element" />
        <StatsTable class="element" />
        <TimeTable class="element" />
      </div>
    </div>
  </q-page>
</template>

<style>
#main {
  width: 100%;
  padding-left: 8%;
  padding-right: 8%;
}

.element {
  margin-top: 10px;
}
</style>

<script>
import PasswordCard from '@/components/Password-Card'
import ScoreBar from '@/components/Score-Bar'
import TimeCard from '@/components/Time-Card'
import StatsTable from '@/components/Stats-Table'
import TimeTable from '@/components/Time-Table'

export default {
  name: 'Home',
  components: {
    PasswordCard,
    ScoreBar,
    TimeCard,
    StatsTable,
    TimeTable
  }
}
</script>
