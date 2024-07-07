let homeScore = 0;
let guestScore = 0;

document.getElementById('home-add-1').addEventListener('click', () => {
    homeScore += 1;
    document.getElementById('home-score').textContent = homeScore;
});

document.getElementById('home-add-2').addEventListener('click', () => {
    homeScore += 2;
    document.getElementById('home-score').textContent = homeScore;
});

document.getElementById('home-add-3').addEventListener('click', () => {
    homeScore += 3;
    document.getElementById('home-score').textContent = homeScore;
});

document.getElementById('guest-add-1').addEventListener('click', () => {
    guestScore += 1;
    document.getElementById('guest-score').textContent = guestScore;
});
document.getElementById('guest-add-2').addEventListener('click', () => {
    guestScore += 2;
    document.getElementById('guest-score').textContent = guestScore;
});

document.getElementById('guest-add-3').addEventListener('click', () => {
    guestScore += 3;
    document.getElementById('guest-score').textContent = guestScore;
});