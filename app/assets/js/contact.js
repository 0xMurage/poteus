import { errorInterceptor, lazyloadScript, notification } from "./utils/shared.js";
window.addEventListener('DOMContentLoaded', () => {
    lazyloadScript('/assets/js/fingerprintjs@3.3.2.min.js');
    contactForm();
});
function contactForm() {
    const contactButton = document.getElementById('contactFormSubmitForm');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            (window.FingerprintJS).load()
                .then((agent) => agent.get())
                .then((agent) => sendMessage(agent));
        });
    }
}
function sendMessage(agent) {
    var _a, _b, _c;
    const payload = {
        name: (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value,
        email: (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value,
        message: (_c = document.getElementById('message')) === null || _c === void 0 ? void 0 : _c.value,
        visitor: agent.visitorId
    };
    const normalFormBtn = document.getElementById('contactFormSubmitForm');
    const loaderFormBtn = document.getElementById('submissionLoader');
    if (normalFormBtn && loaderFormBtn) {
        normalFormBtn.classList.add('d-none');
        loaderFormBtn.classList.remove('d-none');
    }
    fetch(`https://murageyun.com/api/v1/messages`, {
        method: 'POST',
        headers: { 'accept': 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify(payload)
    }).then((rs) => errorInterceptor(rs))
        .then(() => {
        notification({
            message: 'Thank you for reaching out. Your message has been received and I will get back to you as soon as possible.',
            status: 200
        }, 'success');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
        .catch((err) => {
        notification(err, 'error');
    })
        .finally(() => {
        if (normalFormBtn && loaderFormBtn) {
            loaderFormBtn.classList.add('d-none');
            normalFormBtn.classList.remove('d-none');
        }
    });
}
