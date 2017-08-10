<template>
  <div id="app" class="ui main container">
    <password></password>
    <div class="ui section divider"></div>
    <stats></stats>
    <div class="ui section divider"></div>
    <times></times>
  </div>
</template>

<script>
import Password from './components/Password'
import Stats from './components/Stats'
import Times from './components/Times'

export default {
  name: 'app',
  components: {
    Password,
    Stats,
    Times
  }
}
</script>

<style>
.main.container {
  margin-top:20px;
  margin-bottom: 20px;
}
</style>
