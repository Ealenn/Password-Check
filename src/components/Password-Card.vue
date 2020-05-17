<template>
  <q-card class="home-card" flat bordered>
    <q-card-section>
      <q-card-section>
        <q-input id="form-input-password"
          outlined
          v-model="password"
          @input="updatePassword"
          filled
          :type="isPwd ? 'password' : 'text'"
          :placeholder="$t('password.input.placeholder')"
          aria-autocomplete="false">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<style>
#form-input-password {
  font-size: 25px;
}
</style>

<script>
import {
  QCard,
  QCardSection
} from 'quasar'

export default {
  name: 'PasswordCard',
  components: {
    QCard,
    QCardSection
  },
  data () {
    return {
      password: '',
      isPwd: true
    }
  },
  methods: {
    updatePassword (password) {
      this.$store.commit('EDIT_PASSWORD', password)
    }
  }
}
</script>
