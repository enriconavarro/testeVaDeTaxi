    <template>
    <v-container align-content-center fill-height>
    <v-layout text-xs-center wrap align-center justify-center>
        <v-flex xs12 sm6>
        <v-form ref="form" lazy-validation>
            <v-text-field name="cidade" type="text" label="Cidade" :rules="cidadeRules" v-model="cidade" required>
            </v-text-field>

            <v-btn color="primary" @click="procurar" :loading="loading">
            Procurar
            </v-btn>
        </v-form>
        </v-flex>
    </v-layout>
    </v-container>
    </template>

<script>

import ServiceUtil from '@/services/serviceUtil';

export default {
    data: () => ({
        cidade: "",
        cidadeRules: [
        v => !!v || 'É obrigatório informar uma cidade'
        ],
        serviceUtil: new ServiceUtil(),
        loading: false
    }),

    methods: {

        procurar() {

            if(this.$refs.form.validate()) {

                this.loading = true

                this.serviceUtil.procurarCidade(this.cidade, 'metric', 'pt').then(response => {

                    this.loading = false

                    if (response.cod == 200) {

                        //TODO Tratar dados
                        console.log(response)
                    
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
        }
    }
}
</script>

<style>
</style>
