<template>
  <v-container align-content-center fill-height>
    <v-layout text-xs-center wrap align-center justify-center>
      <v-flex xs12 sm6>
        <v-form ref="form" lazy-validation>
          <v-text-field name="cidade" type="text" label="Cidade" :rules="cidadeRules" v-model="cidade" required>
          </v-text-field>

          <v-btn color="primary" @click="procurar">
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
      serviceUtil: new ServiceUtil()
    }),

    methods: {

      procurar() {

        if(this.$refs.form.validate()) {

          this.serviceUtil.procurarCidade(this.cidade).then(response => {

                //TODO Tratar dados
                alert(response)

            }, error => {

                //TODO Notificar erro
                alert(error)
            });
        }

      }
  }
}
</script>

<style>
</style>
