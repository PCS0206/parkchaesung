function navigateTo(url) {
    window.location.href = url;
}

function changeLanguage() {
    var language = document.getElementById("language").value;
    var baseUrl = window.location.origin;  // 현재 페이지의 베이스 URL 가져오기
    var newUrl;

    if (language === 'en') {
        newUrl = baseUrl + '/en';
    } else if (language === 'ko') {
        newUrl = baseUrl + '/ko';
    } else if (language === 'fr') {
        newUrl = baseUrl + '/fr';
    }

    window.location.href = newUrl;
}
