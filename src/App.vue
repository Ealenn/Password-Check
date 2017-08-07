<template>
  <div id="app" class="ui container">
    <password></password>

    <div class="ui section divider"></div>

    <stats></stats>
  </div>
</template>

<script>
import Password from './components/Password'
import Stats from './components/Stats'

export default {
  name: 'app',
  components: {
    Password,
    Stats
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
