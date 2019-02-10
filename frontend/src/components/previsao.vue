<template>
    <v-container align-content-center fill-height>

        <v-layout text-xs-center row wrap align-center justify-center v-if="!previsao">

            <v-flex xs12 sm6>

            <v-form ref="form" lazy-validation>

                <v-text-field name="cidade" type="text" label="Cidade" :rules="cidadeRules" v-model="cidade" required />

                <v-btn color="primary" @click="procurar" :loading="loading"> Procurar </v-btn>

            </v-form>
            </v-flex>

        </v-layout>

        <v-layout text-xs-center row wrap v-if="previsao" align-center>

            <v-flex xs12>

                <v-layout row wrap align-center justify-center class="my-5">

                    <v-flex xs12 sm12>
                        <h1> {{cidade}} </h1>
                    </v-flex>

                    <v-flex xs12 sm12>
                        <span class="subtitulo"> {{previsao.data}} </span>
                    </v-flex>

                </v-layout>
                
                <v-layout row wrap align-center justify-center>

                    <v-flex xs12>
                        <img :src="previsao.icone" :alt="previsao.descricao">
                    </v-flex>

                </v-layout>

                <v-layout row wrap class="mb-4 mt-1">

                    <v-flex xs12 sm4>
                        <p class="my-0"> Mínima </p>
                        <p class="subdestaque my-0"> {{previsao.temperaturaMin + 'º C'}} </p>
                    </v-flex>

                    <v-flex xs12 sm4>
                        <p class="destaque my-0"> {{previsao.temperatura + 'º C'}} </p>
                        <p class="subtitulo-destaque my-0"> {{previsao.descricao}} </p>
                    </v-flex>

                    <v-flex xs12 sm4>
                        <p class="my-0"> Máxima </p>
                        <p class="subdestaque my-0"> {{previsao.temperaturaMax + 'º C'}} </p>
                    </v-flex>

                </v-layout>

                <hr>

                <v-layout row wrap align-center justify-center class="my-4">
                    
                    <v-flex xs12>

                        <v-layout row wrap align-center justify-center>
                            <v-flex xs6 sm1 class="text-sm-left">
                                <span class="negrito"> Umidade </span>
                            </v-flex>

                            <v-flex xs6 sm1 class="text-sm-right">
                                <span class="negrito"> {{previsao.umidade + '%'}} </span>
                            </v-flex>

                        </v-layout>

                        <v-layout row wrap align-center justify-center>

                            <v-flex xs6 sm1 class="text-sm-left">
                                <span class="negrito"> Nascer do sol </span>
                            </v-flex>

                            <v-flex xs6 sm1 class="text-sm-right">
                                <span class="negrito"> {{previsao.nascerSol}} </span>
                            </v-flex>

                        </v-layout>

                        <v-layout row wrap align-center justify-center>

                            <v-flex xs6 sm1 class="text-sm-left">
                                <span class="negrito"> Pôr do sol </span>
                            </v-flex>

                            <v-flex xs6 sm1 class="text-sm-right">
                                <span class="negrito"> {{previsao.porSol}} </span>
                            </v-flex>

                        </v-layout>

                    </v-flex>

                </v-layout>

                <v-layout row wrap class="my-4">

                    <v-flex xs12 class="text-sm-left text-xs-center">

                        <v-btn color="primary" @click="voltar"> Voltar </v-btn>

                    </v-flex>

                </v-layout>
            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>

import ServiceUtil from '@/services/serviceUtil';
import PrevisaoModel from '@/models/previsao.js';

export default {
    data: () => ({
        cidade: "",
        cidadeRules: [
        v => !!v || 'É obrigatório informar uma cidade'
        ],
        serviceUtil: new ServiceUtil(),
        loading: false,
        previsao: undefined
    }),

    methods: {

        procurar() {

            if(this.$refs.form.validate()) {

                this.loading = true

                this.serviceUtil.procurarCidade(this.cidade, 'metric', 'pt').then(response => {

                    this.loading = false

                    if (response.cod == 200) {

                        this.previsao = new PrevisaoModel(response)
                    
                    } else {

                        this.$notify({
                            type: 'error',
                            group: 'notificacoes',
                            title: 'Erro',
                            text: 'Erro ao buscar cidade.'
                        })
                    }
                })
            }
        },

        voltar() {

            this.cidade = undefined
            this.previsao = undefined
        }
    }
}
</script>

<style>
span.negrito {
    font-weight: bold;
}

.destaque {
    font-weight: bold;
    font-size: 50px;
}

.subtitulo-destaque {
    font-weight: bold;
    font-size: 25px;
}

.subdestaque {
    font-weight: bold;
    font-size: 30px;
}

.subtitulo {
    font-weight: bold;
    font-size: 15px;
    color: #9d9c9d;
}
</style>