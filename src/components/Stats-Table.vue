<template>
  <q-card class="home-card" flat>
    <q-card-section>
      <q-table
        grid
        hide-header
        hide-bottom
        :data="tableData"
        :columns="tableColumns"
        :pagination="pagination"
        row-key="name"
      >
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-3">
            <q-card>
              <q-card-section
                :style="
                  'background-color:' +
                    ColorGenerator.GetHexByValues(props.row.number, props.row.recommendations, props.row.inverted)
                "
                class="text-center text-white"
              >
                <strong>
                  <q-icon
                    :name="
                      props.row.check
                        ? 'fas fa-check'
                        : 'fas fa-exclamation-triangle'
                    "
                    style="margin-rigth:3px"
                  />
                  {{ props.row.title }}
                </strong>
              </q-card-section>
              <q-separator />
              <q-card-section class="text-center">
                <p>
                  {{ $t("stats.array.number") }} /
                  {{ $t("stats.array.recommendations") }}
                </p>
                <p>{{ props.row.number }} / {{ props.row.recommendations }}</p>
              </q-card-section>
              <q-separator />
              <q-card-section class="text-center">
                <p>{{ $t("stats.array.score") }}</p>
                <strong>{{ props.row.score }}</strong>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </q-card-section>
  </q-card>
</template>

<style>
p {
  margin: 0 !important;
}
</style>

<script>
import { QCard, QCardSection } from 'quasar'
import ColorGenerator from '@/class/ColorGenerator'

export default {
  name: 'StatsTable',
  components: {
    QCard,
    QCardSection
  },
  data () {
    return {
      ColorGenerator: new ColorGenerator(),
      pagination: {
        rowsPerPage: 0
      }
    }
  },
  methods: {
    getIcon: function (check) {
      return check ? 'icon checkmark' : 'icon close'
    }
  },
  computed: {
    score () {
      return this.$store.state.score
    },
    resume () {
      return this.$store.state.score.Resume()
    },
    stats () {
      return this.$store.state.stats
    },
    tableColumns: function () {
      return [
        {
          label: this.$t('stats.array.title'),
          name: 'title',
          field: 'title',
          align: 'left'
        },
        {
          label: this.$t('stats.array.number'),
          name: 'number',
          field: 'number',
          sortable: true
        },
        {
          label: this.$t('stats.array.recommendations'),
          name: 'recommendations',
          field: 'recommendations'
        },
        {
          label: this.$t('stats.array.score'),
          name: 'score',
          field: 'score'
        },
        {
          label: '',
          name: 'inverted',
          field: 'inverted'
        }
      ]
    },
    tableData: function () {
      return [
        {
          title: this.$t('stats.array.character'),
          number: this.score.Characters().Total,
          recommendations: this.score.Characters().Recommend,
          score: `${this.score.Characters().Score}/${this.score.Characters().ScoreMax}`,
          check: this.score.Characters().Check,
          inverted: false
        },
        {
          title: this.$t('stats.array.unique'),
          number: this.score.Unique().Total,
          recommendations: this.score.Unique().Recommend,
          score: `${this.score.Unique().Score}/${this.score.Unique().ScoreMax}`,
          check: this.score.Unique().Check,
          inverted: false
        },
        {
          title: this.$t('stats.array.repeat'),
          number: this.score.Repeat().Total,
          recommendations: this.score.Repeat().Recommend,
          score: `${this.score.Repeat().Score}/${this.score.Repeat().ScoreMax}`,
          check: this.score.Repeat().Check,
          inverted: true
        },
        {
          title: this.$t('stats.array.upper'),
          number: this.score.UpperCase().Total,
          recommendations: this.score.UpperCase().Recommend,
          score: `${this.score.UpperCase().Score}/${this.score.UpperCase().ScoreMax}`,
          check: this.score.UpperCase().Check,
          inverted: false
        },
        {
          title: this.$t('stats.array.lower'),
          number: this.score.LowerCase().Total,
          recommendations: this.score.LowerCase().Recommend,
          score: `${this.score.LowerCase().Score}/${this.score.LowerCase().ScoreMax}`,
          check: this.score.LowerCase().Check,
          inverted: false
        },
        {
          title: this.$t('stats.array.digit'),
          number: this.score.Number().Total,
          recommendations: this.score.Number().Recommend,
          score: `${this.score.Number().Score}/${this.score.Number().ScoreMax}`,
          check: this.score.Number().Check,
          inverted: false
        },
        {
          title: this.$t('stats.array.special'),
          number: this.score.SpecialChar().Total,
          recommendations: this.score.SpecialChar().Recommend,
          score: `${this.score.SpecialChar().Score}/${this.score.SpecialChar().ScoreMax}`,
          check: this.score.SpecialChar().Check,
          inverted: false
        }
      ]
    }
  }
}
</script>
