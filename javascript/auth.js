// Login Form Handling
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('login-name').value;
        const email = document.getElementById('login-email').value;

        localStorage.setItem('flixora_user', JSON.stringify({ name: name, email: email }));

        window.location.href = 'account.html';
    });
}

// Account Page: Load User Data
const accountName = document.getElementById('account-name');
const accountEmail = document.getElementById('account-email');

if (accountName && accountEmail) {
    const storedUser = localStorage.getItem('flixora_user');

    if (storedUser) {
        const user = JSON.parse(storedUser);
        accountName.textContent = user.name;
        accountEmail.textContent = user.email;
    } else {
        window.location.href = 'login.html';
    }
}

// Log Out
const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('flixora_user');
        window.location.href = 'login.html';
    });
}