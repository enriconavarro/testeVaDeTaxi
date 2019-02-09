    <template>
    <v-container align-content-center fill-height>
        <v-layout text-xs-center row wrap align-center justify-center v-if="!previsao">
            <v-flex xs12 sm6>
            <v-form ref="form" lazy-validation>
                <v-text-field name="cidade" type="text" label="Cidade" :rules="cidadeRules" v-model="cidade" required />

                <v-btn color="primary" @click="procurar" :loading="loading">
                Procurar
                </v-btn>
            </v-form>
            </v-flex>
        </v-layout>

        <v-layout text-xs-center row wrap v-if="previsao" align-center>

            <v-flex xs12>

                <v-layout row wrap align-center justify-center>

                    <v-flex xs12 sm4>
                        <h1> {{this.cidade}} </h1>
                    </v-flex>

                </v-layout>

                <v-layout row wrap>

                    <v-flex xs12 sm4>
                        <span> Mínima </span>
                        <h3> {{previsao.temperaturaMin + 'º C'}} </h3>
                    </v-flex>

                    <v-flex xs12 sm4>
                        <h1> {{previsao.temperatura + 'º C'}} </h1>
                        <h2> {{previsao.descricao}} </h2>
                    </v-flex>

                    <v-flex xs12 sm4>
                        <span> Máxima </span>
                        <h3> {{previsao.temperaturaMax + 'º C'}} </h3>
                    </v-flex>

                </v-layout>

                <hr>

                <v-layout row wrap align-center justify-center>
                    
                    <v-flex xs12>

                        <v-layout row wrap>
                            <v-flex xs6 justify-end>
                                <span> Humidade </span>
                            </v-flex>

                            <v-flex xs6>
                                <span> {{previsao.humidade + '%'}} </span>
                            </v-flex>

                        </v-layout>

                        <v-layout row wrap>

                            <v-flex xs6>
                                <span> Nascer do sol </span>
                            </v-flex>

                            <v-flex xs6>
                                <span> {{previsao.nascerSol}} </span>
                            </v-flex>

                        </v-layout>

                        <v-layout row wrap>

                            <v-flex xs6>
                                <span> Pôr do sol </span>
                            </v-flex>

                            <v-flex xs6>
                                <span> {{previsao.porSol}} </span>
                            </v-flex>

                        </v-layout>

                    </v-flex>

                </v-layout>

                <v-layout row wrap>

                    <v-flex xs12>
                        <v-btn color="default" @click="voltar">
                            Voltar
                        </v-btn>
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
</style>
