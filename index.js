const { default: axios } = require("axios");

class Newsmansmtp {

    constructor(_endpoint, _method) {
        this.endpoint = _endpoint;
        this.method = _method;
    }

    callParams(_params = undefined) {

        let api_url = "https://cluster.newsmanapp.com/api/1.0/";

        return axios.post(api_url + this.endpoint + '.' + this.method, JSON.stringify(_params), { headers: { 'Content-Type': 'application/json' } })

    }


}

module.exports.method = Newsmansmtp;