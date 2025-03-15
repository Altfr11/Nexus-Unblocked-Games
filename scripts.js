```javascript
function showHome() {
    fetch('components/home.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-side').innerHTML = data;
            updateDateTime();
            typewriterEffect();
        });
}

function showMore() {
    fetch('components/more.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showMovies() {
    fetch('components/movies.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showProxies() {
    fetch('components/proxies.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showPartners() {
    fetch('components/partners.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showGames() {
    fetch('components/games.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showBasketBros() {
    fetch('components/games/basketbros.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showTabs() {
    fetch('components/games/tabs.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showCrossy() {
    fetch('components/games/crossy.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showCookieClicker() {
    fetch('components/games/cookieclicker.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showClusterRush() {
    fetch('components/games/clusterrush.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showDriftHunters() {
    fetch('components/games/drifthunters.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showDinoGame() {
    fetch('components/games/dinogame.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showFNF() {
    fetch('components/games/fnf.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showFruitNinja() {
    fetch('components/games/fruitninja.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showGDLite() {
    fetch('components/games/gdlite.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showHappyWheels() {
    fetch('components/games/happywheels.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showInfiltratingTheAirship() {
    fetch('components/games/infiltratingtheairship.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showInfiniteCraft() {
    fetch('components/games/infinitecraft.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showPrecisionClient() {
    fetch('components/games/precisionclient.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showOvo() {
    fetch('components/games/ovo.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showPolyTrack() {
    fetch('components/games/polytrack.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function showPakoHighway() {
    fetch('components/games/pakohighway.html')
        .then(response => response.text())
        .then(data => document.getElementById('content-side').innerHTML = data);
}

function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById('datetime').textContent = formattedDateTime;
}

function typewriterEffect() {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
        }, index * 100);
    });
}
```
