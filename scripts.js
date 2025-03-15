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
