function hasKey(key) {
    const isPresent = localStorage.getItem(key);
    return isPresent !== null;
}

function getItem(key) {
    return localStorage.getItem(key);
}

function setItem(key,payload) {
    localStorage.setItem(key,payload);
}

const methods = {
    hasKey,
    getItem,
    setItem
};

export default methods;