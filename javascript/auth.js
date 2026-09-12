// Login Form Handling
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        localStorage.setItem('flixora_user', JSON.stringify({ 
            name: "Veysel", 
            email: email, 
            password: password, 
            avatar: "" 
        }));

        window.location.href = 'index.html';
    });
}

// Account Page: Load User Data & Avatar
const accountName = document.getElementById('account-name');
const accountEmail = document.getElementById('account-email');
const avatarContainer = document.getElementById('account-avatar-container');

if (accountName && accountEmail) {
    let storedUser = localStorage.getItem('flixora_user');
    
    if (!storedUser) {
        const defaultUser = { 
            name: "Veysel", 
            email: "veysel@example.com", 
            password: "veyselalan1234",
            avatar: "" 
        };
        localStorage.setItem('flixora_user', JSON.stringify(defaultUser));
        storedUser = JSON.stringify(defaultUser);
    }

    const user = JSON.parse(storedUser);
    accountName.textContent = user.name ? user.name : user.email;
    accountEmail.textContent = user.email;

    if (user.avatar && avatarContainer) {
        avatarContainer.innerHTML = `<img src="${user.avatar}" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    }
}

// Edit Profile Page: Load Existing Data & Handle File Upload
const editProfileForm = document.getElementById('edit-profile-form');

if (editProfileForm) {
    let storedUser = localStorage.getItem('flixora_user');
    if (!storedUser) {
        window.location.href = 'login.html';
    } else {
        const user = JSON.parse(storedUser);
        if (document.getElementById('profile-name')) document.getElementById('profile-name').value = user.name || "";
        if (document.getElementById('new-email')) document.getElementById('new-email').value = user.email || "";
    }

    editProfileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let storedUser = localStorage.getItem('flixora_user');
        if (!storedUser) return;

        const user = JSON.parse(storedUser);
        user.name = document.getElementById('profile-name').value;
        user.email = document.getElementById('new-email').value;

        const avatarInput = document.getElementById('profile-avatar');
        
        if (avatarInput.files && avatarInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (uploadEvent) {
                user.avatar = uploadEvent.target.result;
                localStorage.setItem('flixora_user', JSON.stringify(user));
                alert("Profile updated successfully!");
                window.location.href = 'account.html';
            };
            reader.readAsDataURL(avatarInput.files[0]);
        } else {
            localStorage.setItem('flixora_user', JSON.stringify(user));
            alert("Profile updated successfully!");
            window.location.href = 'account.html';
        }
    });
}

// Change Password Page Form Handling
const changePasswordForm = document.getElementById('change-password-form');

if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let storedUser = localStorage.getItem('flixora_user');
        if (!storedUser) {
            window.location.href = 'login.html';
            return;
        }

        const user = JSON.parse(storedUser);
        const currentPass = document.getElementById('current-password').value;
        const newPass = document.getElementById('new-password').value;
        const confirmPass = document.getElementById('confirm-password').value;

        if (currentPass === user.password) {
            if (newPass !== confirmPass) {
                alert("New passwords do not match!");
                return;
            }

            if (newPass && newPass.trim() !== "") {
                user.password = newPass;
                localStorage.setItem('flixora_user', JSON.stringify(user));
                alert("Password changed successfully!");
                window.location.href = 'account.html';
            } else {
                alert("New password cannot be empty.");
            }
        } else {
            alert("Incorrect current password!");
        }
    });
}

// Global Password Visibility Toggle (Show / Hide Password)
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('toggle-password')) {
        const targetId = e.target.getAttribute('data-target');
        const passwordInput = document.getElementById(targetId);

        if (passwordInput) {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                e.target.classList.remove('bi-eye-slash');
                e.target.classList.add('bi-eye');
            } else {
                passwordInput.type = 'password';
                e.target.classList.remove('bi-eye');
                e.target.classList.add('bi-eye-slash');
            }
        }
    }
});

// Log Out
const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('flixora_user');
        window.location.href = 'login.html';
    });
}