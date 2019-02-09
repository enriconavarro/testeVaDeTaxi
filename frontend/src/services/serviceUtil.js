export default class ServiceUtil {

    request(rota, metodo, param, unidade, linguagem) {

        rota = "http://api.openweathermap.org/data/2.5/" + rota
        
        if (unidade) {

            rota = rota +"&units=" + unidade
        }

        if (linguagem) {

            rota = rota + "&lang=" + linguagem
        }
        
        rota = rota + "&APPID=bf5b6c8e6e0f8324de6bb6a7dc0e47a3"

        return window.app.$http[metodo](rota, param)

            .then(function (response) {

                return response.data

            }).catch(() => {

                return 'Erro ao realizar requisição.'
            });
    }

    procurarCidade(nome, unidade, linguagem) {

        return this.request("weather?q=" + nome.trim(), 'get', {}, unidade, linguagem)
    }
}