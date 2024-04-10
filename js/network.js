
// Python Server module which comunicates with the Auto
serverUrl = '127.0.0.1:8000'

async function getFaults() {
    return fetch(serverUrl).then()
}

async function updateBMS() {
    return fetch(serverUrl).then()
}

async function updateInverters() {
    return fetch(serverUrl).then()
}



export {getFaults, updateBMS, updateInverters};