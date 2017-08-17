<template>
  <div class="translate">
    <a href="#" v-on:click="updateLocal('fr')"><i class="france flag"></i> Français</a> -  
    <a href="#" v-on:click="updateLocal('en')"><i class="united kingdom flag"></i> English</a>
  </div>
</template>

<script>
export default {
  name: 'translate',
  data () {
    return {
    }
  },
  methods: {
    updateLocal (local) {
      this.$store.commit('EDIT_LOCAL', local)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
