<template>
  <div class="password">
    <div class="ui left corner labeled input">

      <input v-if="showPassword" type="text" v-model="password" placeholder="Mot de passe">
      <input v-if="!showPassword" type="password" v-model="password" placeholder="Mot de passe">

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
      password: '',
      showPassword: false
    }
  },
  computed: {
    inputButtonIcon: function () {
      return this.showPassword ? 'hide' : 'unhide'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
