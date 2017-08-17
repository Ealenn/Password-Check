<template>
  <div id="app" class="ui main container">
    <translate></translate>
    <password></password>
    <time-to></time-to>
    <div class="ui section divider"></div>
    <stats></stats>
    <div class="ui section divider"></div>
    <times></times>
  </div>
</template>

<script>
import Translate from './components/Translate'
import Password from './components/Password'
import TimeTo from './components/TimeTo'
import Stats from './components/Stats'
import Times from './components/Times'

export default {
  name: 'app',
  components: {
    Translate,
    Password,
    TimeTo,
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
