function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    document.cookie = "cookiesAccepted=true; max-age=" + (365 * 24 * 60 * 60);
}

window.onload = function() {
    if (document.cookie.indexOf("cookiesAccepted=true") === -1) {
        document.getElementById("cookie-banner").style.display = "block";
    }
};
