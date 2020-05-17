<template>
  <q-card class="score-bar-card" flat>
    <q-card-section class="text-center">
      <q-linear-progress
        size="25px"
        :value="resume.Percent / 100"
        class="q-mt-sm"
      >
        <div class="absolute-full flex flex-center">
          <q-badge
            color="white"
            text-color="accent"
            :label="resume.Percent + '%'"
          />
        </div>
      </q-linear-progress>
      <strong>{{ resume.Score }} / {{ resume.ScoreMax }}</strong>
    </q-card-section>
  </q-card>
</template>

<style></style>

<script>
import { QCard, QCardSection } from 'quasar'

export default {
  name: 'ScoreBar',
  components: {
    QCard,
    QCardSection
  },
  computed: {
    score () {
      return this.$store.state.score
    },
    resume () {
      return this.$store.state.score.Resume()
    }
  }
}
</script>
