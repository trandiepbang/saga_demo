const axios = require('axios');

function bookB() {
    return axios.post('http://localhost:4000/book', {});
}

function bookC() {
    return axios.post('http://localhost:5000/book', {});
}

function bookD() {
    return axios.post('http://localhost:6000/book', {});
}

function cancelA() {
    return axios.post('http://localhost:3000/cancel', {});
}


function cancelB() {
    return axios.post('http://localhost:4000/cancel', {});
}

function cancelC() {
    return axios.post('http://localhost:5000/cancel', {});
}

module.exports = {
    bookB,
    bookC,
    bookD,
    cancelA,
    cancelB,
    cancelC
}