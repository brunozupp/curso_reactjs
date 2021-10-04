async function get(url) {

    var response = await fetch(url);
    var responseJson = await response.json();

    return responseJson;
}

// 200 OK
// 403 Wrong
async function post(form) {
    
    const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    if(response.status == 200) {
        return true;
    }

    return false;
}

const requisicao = {
    get,
    post
}

export default requisicao;