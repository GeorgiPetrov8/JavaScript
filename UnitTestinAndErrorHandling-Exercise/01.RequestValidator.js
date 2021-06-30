function solve(httpObject) {
    let method = httpObject.method;
    let uri = httpObject.uri;
    let version = httpObject.version;
    let message = httpObject.message;

    if (method === undefined) {throw new Error('Invalid request header: Invalid Method');}
    if (uri === undefined) {throw new Error('Invalid request header: Invalid URI');}
    if (version === undefined) {throw new Error('Invalid request header: Invalid Version');};
    if (message === undefined) {throw new Error('Invalid request header: Invalid Message');};

    if (method != 'GET' && method != 'POST' && method != 'DELETE' && method != 'CONNECT') {
        throw new Error('Invalid request header: Invalid Method');
    }
    
    let matchResult = uri.match(/^[A-Za-z\d.]+$/);
    if (uri !== '*' && matchResult === null) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let [versionName, versionNumber] = version.split('/');
    if (versionName != 'HTTP' ||
        (versionNumber != '0.9' && versionNumber != '1.0' && versionNumber != '1.1' && versionNumber != '2.0')) {
        throw new Error('Invalid request header: Invalid Version');
    }
    
    let invalidateMesage = message.match(/^[^<>\&'"]+$/);
    if (invalidateMesage === null && message != '') {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObject;
}

solve(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/0.9',
        message: ''
    }
);