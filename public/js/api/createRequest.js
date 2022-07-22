const createRequest = (options = {}) => {
    const { data, method, callback } = options;
    let url = options.url;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    const formData = new FormData();

    if (method != 'GET') {
        for (let key in data) {
            formData.append(key, data[key]);
        }
    } else {
        url += '?';
        for (let key in data) {
            url += `${key}=${data[key]}&`;
        }
    }

    xhr.onload = () => {
        callback(null, xhr.response);
    }

    try {
        xhr.open(method, url);
        xhr.send(formData);
    } catch (error) {
        callback(error);
    }
};