<template>
    <div>
        <q-btn flat v-on:click="updateLocal('en')"><flag class="flag-text" iso="us" /> English</q-btn>
        <q-btn flat v-on:click="updateLocal('fr')"><flag class="flag-text" iso="fr" /> Français</q-btn>
    </div>
</template>

<style>
.flag-text {
    margin-right: 5px;
}
</style>

<script>
export default {
  name: 'LanguagesButtons',
  methods: {
    updateLocal (local) {
      this.$store.commit('EDIT_LOCAL', local)
    }
  }
}
</script>
