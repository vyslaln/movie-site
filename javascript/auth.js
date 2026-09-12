// Login Form Handling
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Mevcut profil varsa koru (avatar, isim gibi bilgiler silinmesin)
        let storedProfile = localStorage.getItem('flixora_profile');
        let profile;

        if (storedProfile) {
            profile = JSON.parse(storedProfile);
            profile.email = email;
            profile.password = password;
        } else {
            profile = { name: "Veysel", email: email, password: password, avatar: "" };
        }

        localStorage.setItem('flixora_profile', JSON.stringify(profile));
        localStorage.setItem('flixora_session', 'active');

        window.location.href = 'index.html';
    });
}

// Account Page: Load User Data & Avatar
const accountName = document.getElementById('account-name');
const accountEmail = document.getElementById('account-email');
const avatarContainer = document.getElementById('account-avatar-container');

if (accountName && accountEmail) {
    let storedProfile = localStorage.getItem('flixora_profile');

    if (!storedProfile) {
        const defaultProfile = {
            name: "Veysel",
            email: "veysel@example.com",
            password: "veyselalan1234",
            avatar: ""
        };
        localStorage.setItem('flixora_profile', JSON.stringify(defaultProfile));
        storedProfile = JSON.stringify(defaultProfile);
    }

    const profile = JSON.parse(storedProfile);
    accountName.textContent = profile.name ? profile.name : profile.email;
    accountEmail.textContent = profile.email;

    if (profile.avatar && avatarContainer) {
        avatarContainer.innerHTML = `<img src="${profile.avatar}" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    }
}

// Edit Profile Page: Load Existing Data & Handle File Upload
const editProfileForm = document.getElementById('edit-profile-form');

if (editProfileForm) {
    let storedProfile = localStorage.getItem('flixora_profile');
    if (!storedProfile) {
        window.location.href = 'login.html';
    } else {
        const profile = JSON.parse(storedProfile);
        if (document.getElementById('profile-name')) document.getElementById('profile-name').value = profile.name || "";
        if (document.getElementById('new-email')) document.getElementById('new-email').value = profile.email || "";
    }

    editProfileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let storedProfile = localStorage.getItem('flixora_profile');
        if (!storedProfile) return;

        const profile = JSON.parse(storedProfile);
        profile.name = document.getElementById('profile-name').value;
        profile.email = document.getElementById('new-email').value;

        const avatarInput = document.getElementById('profile-avatar');

        if (avatarInput.files && avatarInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (uploadEvent) {
                profile.avatar = uploadEvent.target.result;
                localStorage.setItem('flixora_profile', JSON.stringify(profile));
                alert("Profile updated successfully!");
                window.location.href = 'account.html';
            };
            reader.readAsDataURL(avatarInput.files[0]);
        } else {
            localStorage.setItem('flixora_profile', JSON.stringify(profile));
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
        let storedProfile = localStorage.getItem('flixora_profile');
        if (!storedProfile) {
            window.location.href = 'login.html';
            return;
        }

        const profile = JSON.parse(storedProfile);
        const currentPass = document.getElementById('current-password').value;
        const newPass = document.getElementById('new-password').value;
        const confirmPass = document.getElementById('confirm-password').value;

        if (currentPass === profile.password) {
            if (newPass !== confirmPass) {
                alert("New passwords do not match!");
                return;
            }

            if (newPass && newPass.trim() !== "") {
                profile.password = newPass;
                localStorage.setItem('flixora_profile', JSON.stringify(profile));
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

// Log Out — sadece oturumu kapatır, profil verisi (isim, email, avatar) silinmez
const logoutBtn = document.getElementById('logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('flixora_session');
        window.location.href = 'login.html';
    });
}