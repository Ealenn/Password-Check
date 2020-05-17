<template>
  <q-card class="score-bar-card" flat bordered>

    <q-card-section>
        <div class="text-h6">{{ $t('time.title') }}</div>
        <div class="text-subtitle2">{{ $t('time.wikipedia') }}</div>
    </q-card-section>

    <q-card-section>
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>{{ humanizejs.numberFormat(possibilityAndOperations.Possibility, 0, ',', ' ') }} {{ $t('time.bycharacters') }}</q-item-label>
            <q-item-label caption lines="2">{{ possibilityAndOperations.PossibilityAscii }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label>{{ $t('time.maximumoperations') }}</q-item-label>
            <q-item-label caption lines="2">{{ humanizejs.numberFormat(possibilityAndOperations.Operations, 0, ',', ' ') }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-table
        flat
        hide-bottom
        :data="tableData"
        :columns="tableColumns"
        :pagination="pagination"
        row-key="title"
      />
    </q-card-section>
  </q-card>
</template>

<style>
</style>

<script>
import { QCard, QCardSection } from 'quasar'
import humanize from 'humanize'
import moment from 'moment'

export default {
  name: 'TimeTable',
  created: function () {
    moment.locale(this.$store.state.local)
  },
  components: {
    QCard,
    QCardSection
  },
  data () {
    return {
      momentjs: moment,
      humanizejs: humanize,
      pagination: {
        rowsPerPage: 0
      }
    }
  },
  computed: {
    Local: function () {
      return this.$store.state.local
    },
    tableColumns: function () {
      return [
        {
          label: this.$t('time.array.title'),
          name: 'title',
          field: 'title'
        },
        {
          label: this.$t('time.array.date'),
          name: 'date',
          field: 'date'
        },
        {
          label: this.$t('time.array.clock'),
          name: 'clock',
          field: 'clock'
        },
        {
          label: this.$t('time.array.parallelism'),
          name: 'parallelism',
          field: 'parallelism'
        },
        {
          label: this.$t('time.array.operations'),
          name: 'operations',
          field: 'operations'
        },
        {
          label: this.$t('time.array.time'),
          name: 'time',
          field: 'time'
        },
        {
          label: this.$t('time.array.optimizedtime'),
          name: 'optimizedtime',
          field: 'optimizedtime'
        }
      ]
    },
    possibilityAndOperations: function () {
      return this.$store.state.operation.PossibilityAndOperations()
    },
    tableData: function () {
      const comparator = this.$store.state.operation.Comparator()
      const table = []
      comparator.forEach(item => {
        table.push({
          title: item.Title,
          date: item.Date,
          clock: item.Cpu,
          parallelism: item.Para,
          operations: this.humanizejs.numberFormat(item.Unit, 0, ',', ' '),
          time: this.momentjs(new Date().getTime() + item.Time).fromNow(),
          optimizedtime: this.momentjs(new Date().getTime() + item.TimeOptimyze).fromNow()
        })
      })
      return table
    }
  }
}
</script>
