<template>
  <div class="password column">
    <div class="ui left corner labeled input">

      <input v-if="showPassword" type="text" :value="password" @input="updatePassword" :placeholder="$t('password.input.placeholder')">
      <input v-if="!showPassword" type="password" :value="password" @input="updatePassword" :placeholder="$t('password.input.placeholder')">

      <div class="ui left corner label">
        <i class="asterisk icon"></i>
      </div>

    </div>

    <button v-on:click="showPassword = !showPassword" class="ui icon button">
      <i :class="inputButtonIcon + ' icon'"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'password',
  data () {
    return {
      showPassword: false
    }
  },
  computed: {
    password: function () {
      return this.$store.state.password
    },
    inputButtonIcon: function () {
      return this.showPassword ? 'hide' : 'unhide'
    }
  },
  methods: {
    updatePassword (e) {
      this.$store.commit('EDIT_PASSWORD', e.target.value)
    }
  }
}
</script>

<style scoped>
.password{
  text-align: center;
}
</style>
