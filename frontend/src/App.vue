<template>
<v-app>
    <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
        <span>Wheater Front Test</span>
    </v-toolbar-title>
    </v-toolbar>

    <v-content align-content-center>
    <notifications group="notificacoes" class="notificacao"/>
    <Previsao/>
    </v-content>
</v-app>
</template>

<script>
import Previsao from './components/previsao'

export default {
name: 'App',
components: {
    Previsao
},
data () {
    return {
    //
    }
}
}
</script>

<style>
.notificacao {
    margin: 10px;
}
</style>
