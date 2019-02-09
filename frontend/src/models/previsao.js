
export default class PrevisaoModel {

    constructor(previsao = {}) {

        if (previsao === null) {

            previsao = {}
        }

        this.descricao = previsao.wheater[0].description
        this.temperatura = previsao.main.temp
        this.temperaturaMax = previsao.main.temp_max
        this.temperaturaMin = previsao.main.temp_min
        this.humidade = previsao.main.humidity
        this.nascerSol = previsao.sys.sunrise
        this.porSol = previsao.sys.sunset
    }
}
