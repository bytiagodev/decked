document.addEventListener('DOMContentLoaded', function () {
    if (isLoggedIn()) {
        window.location.href = 'account.html';
        return;
    }

    var mode = 'login';
    var tabLogin    = document.getElementById('tabLogin');
    var tabRegister = document.getElementById('tabRegister');
    var nameField   = document.getElementById('nameField');
    var titleEl     = document.getElementById('authTitle');
    var subEl       = document.getElementById('authSub');
    var submitEl    = document.getElementById('authSubmit');
    var errorEl     = document.getElementById('authError');
    var form        = document.getElementById('authForm');

    var nextParam = new URLSearchParams(window.location.search).get('next');

    function setMode(m) {
        mode = m;
        errorEl.style.display = 'none';
        if (m === 'login') {
            tabLogin.classList.add('is-active');
            tabRegister.classList.remove('is-active');
            nameField.style.display = 'none';
            titleEl.textContent = 'Welcome back.';
            subEl.textContent = 'Log in to pick up where you left off.';
            submitEl.textContent = 'Log in';
        } else {
            tabRegister.classList.add('is-active');
            tabLogin.classList.remove('is-active');
            nameField.style.display = 'flex';
            titleEl.textContent = 'Join the club.';
            subEl.textContent = 'Your board is waiting.';
            submitEl.textContent = 'Create account';
        }
    }

    tabLogin.addEventListener('click', function () { setMode('login'); });
    tabRegister.addEventListener('click', function () { setMode('register'); });

    if (new URLSearchParams(window.location.search).get('mode') === 'register') {
        setMode('register');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = form.elements.email.value.trim();
        var pass  = form.elements.password.value.trim();
        var name  = form.elements.name ? form.elements.name.value.trim() : '';

        if (mode === 'register') {
            if (!name || !email || !pass) {
                errorEl.textContent = 'Please fill in every field.';
                errorEl.style.display = 'block';
                return;
            }
            saveUser({ name: name, email: email });
        } else {
            if (!email || !pass) {
                errorEl.textContent = 'Enter your email and password.';
                errorEl.style.display = 'block';
                return;
            }
            /* Derive name from email for demo */
            var derivedName = email.split('@')[0].replace(/[._-]+/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
            saveUser({ name: derivedName || 'Skater', email: email });
        }

        window.location.href = nextParam === 'checkout.html' ? 'checkout.html' : 'account.html';
    });
});
