
export default class PrevisaoModel {

    constructor(previsao = {}) {

        if (previsao === null) {

            previsao = {}
        }

        this.diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
        this.meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
          ];

        this.descricao = this.tratarDescricao(previsao.weather[0].description)
        this.icone = "http://openweathermap.org/img/w/" + previsao.weather[0].icon + ".png"
        this.data = this.tratarData(previsao.dt)
        this.temperatura = Math.round(previsao.main.temp)
        this.temperaturaMax = Math.round(previsao.main.temp_max)
        this.temperaturaMin = Math.round(previsao.main.temp_min)
        this.umidade = previsao.main.humidity
        this.nascerSol = this.conversaoUnixToHoras(previsao.sys.sunrise)
        this.porSol = this.conversaoUnixToHoras(previsao.sys.sunset)
    }

    conversaoUnixToHoras = function (t) {

        var dt = new Date(t * 1000);
        var hr = dt.getHours();
        var m = "0" + dt.getMinutes();
        var s = "0" + dt.getSeconds();
        return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
    }

    tratarDescricao = function(texto) {

        return texto.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
    }

    tratarData = function(data) {

        data = new Date(data * 1000)
        let dataFormatada = ""

        dataFormatada = this.diasSemana[data.getDay()] + ", "
        dataFormatada = dataFormatada + data.getDate() + " de "
        dataFormatada = dataFormatada + this.meses[data.getMonth()] + " de "
        dataFormatada = dataFormatada + data.getFullYear()

        return dataFormatada
    }
}
