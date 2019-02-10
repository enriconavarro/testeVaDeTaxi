
export default class PrevisaoModel {

    constructor(previsao = {}) {

        if (previsao === null) {

            previsao = {}
        }

        this.descricao = this.tratarDescricao(previsao.weather[0].description)
        this.data = new Date(previsao.dt)
        this.temperatura = Math.round(previsao.main.temp)
        this.temperaturaMax = Math.round(previsao.main.temp_max)
        this.temperaturaMin = Math.round(previsao.main.temp_min)
        this.humidade = previsao.main.humidity
        this.nascerSol = this.conversaoUnixToHoras(previsao.sys.sunrise)
        this.porSol = this.conversaoUnixToHoras(previsao.sys.sunset)
    }

    conversaoUnixToHoras = function (t) {

        var dt = new Date(t*1000);
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
}
