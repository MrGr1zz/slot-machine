const icons = [ '7️⃣', '🍌', '🍒', '💎', '🔔', '🍇'];
wins = 0;
const user = prompt("Input name: ");
const username = document.getElementById("name");
username.textContent = user;
const winText = document.getElementById("wins");
if (username.textContent === "") username.textContent = "Pablo";
function getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
}
function spin() {
    document.getElementById('slot1').textContent = getRandomIcon();
    document.getElementById('slot2').textContent = getRandomIcon();
    document.getElementById('slot3').textContent = getRandomIcon();
    document.getElementById('slot4').textContent = getRandomIcon();
    document.getElementById('slot5').textContent = getRandomIcon();
    document.getElementById('slot6').textContent = getRandomIcon();
    document.getElementById('slot7').textContent = getRandomIcon();
    document.getElementById('slot8').textContent = getRandomIcon();
    document.getElementById('slot9').textContent = getRandomIcon();
    const middleRowElements = document.querySelectorAll('.middle-row .slot');
    const values = Array.from(middleRowElements).map(element => element.textContent);
    const allEqual = values.every(value => value === values[0]);
    if (allEqual) wins++;
    if (wins >= 3) {
        alert(`${username.textContent} WINS`);
        wins = 0;
    }
    winText.textContent = "Current wins: " + wins;
}