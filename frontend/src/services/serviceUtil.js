export default class ServiceUtil {

    request(rota, metodo, param) {

        //TODO Configurar rota
        rota = "CONSTANTE" + rota;

        return window.app.$http[metodo](rota, param)

            .then(function (response) {

                //TODO Verificar resposta
                return response;

            }, function (error) {

                //TODO Verificar resposta
                return error;
            })

            .catch(() => {

                return 'Erro ao realizar requisição.'
            });
    }

    procurarCidade(nome) {

        //TODO adicionar rota
        return this.request("rota" + nome, 'get', {});
    }
}