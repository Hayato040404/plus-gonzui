function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'j1d2024' && pass === '20240401') {
        document.cookie = "loggedIn=true; max-age=" + (3 * 24 * 60 * 60);
        window.location.href = 'home.html';
    } else {
        document.getElementById('error').innerText = 'ユーザー名またはパスワードが違います。';
    }
}

function logout() {
    document.cookie = "loggedIn=; max-age=0";
    window.location.href = 'index.html';
}

function checkLogin() {
    if (document.cookie.indexOf("loggedIn=true") === -1) {
        window.location.href = 'index.html';
    }
}

window.onload = checkLogin;
