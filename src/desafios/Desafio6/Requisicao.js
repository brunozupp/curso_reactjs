async function get(url) {

    var response = await fetch(url);
    var responseJson = await response.json();

    return responseJson;
}

const requisicao = {
    get
}

export default requisicao;