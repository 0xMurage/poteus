export function fingerprintLoaded() {
    return new Promise((resolve) => {
        const i = setInterval(() => {
            if ((window.FingerprintJS) !== undefined) {
                clearInterval(i);
                resolve(true);
            }
        }, 500);
    });
}
export function lazyloadScript(path) {
    const scriptElement = document.createElement('script');
    scriptElement.src = path;
    document.head.appendChild(scriptElement);
}
export function errorInterceptor(res) {
    if (res.ok) {
        return res;
    }
    return Promise.reject({ message: res.statusText, status: res.status });
}
export function notification(body, type = 'success') {
    var _a;
    const elem = document.querySelector(`#toast-notification .toast-message`);
    if (!elem) {
        return;
    }
    if (body instanceof Error) {
        elem.textContent = 'Unexpected error encountered';
    }
    else if (body.status >= 400 && body.status < 500) {
        elem.textContent = 'Hmm. Your request could not be processed by the server';
    }
    else {
        elem.textContent = body.message;
    }
    (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add('show', `${type}-message`);
    setTimeout(() => {
        var _a;
        (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove('show', `${type}-message`);
    }, 12000);
}
