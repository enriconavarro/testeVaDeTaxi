<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Wheater Front Test</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content align-content-center>
      <Inicial/>
    </v-content>
  </v-app>
</template>

<script>
import Inicial from './components/Inicial'

export default {
  name: 'App',
  components: {
    Inicial
  },
  data () {
    return {
      //
    }
  }
}
</script>
