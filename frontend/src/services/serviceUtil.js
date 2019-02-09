export default class ServiceUtil {

    request(rota, metodo, param) {

        rota = "http://api.openweathermap.org/data/2.5/" + rota + "&APPID=bf5b6c8e6e0f8324de6bb6a7dc0e47a3";

        return window.app.$http[metodo](rota, param)

            .then(function (response) {

                return response;

            }, function (error) {

                return error;
            })

            .catch(() => {

                return 'Erro ao realizar requisição.'
            });
    }

    procurarCidade(nome) {

        return this.request("weather?q=" + nome.trim(), 'get', {});
    }
}