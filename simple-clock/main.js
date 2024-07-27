const hour = document.getElementById("hour-stick")
const min = document.getElementById("min-stick")
const sec = document.getElementById("sec-stick")

const now = new Date();

let degrees = now.getSeconds()*6;
let m_degrees = now.getMinutes()*6;
let h_degrees = now.getHours()*30;

min.style.transform = `translateY(-50%) rotate(${m_degrees}deg)`;
hour.style.transform = `translateY(-50%) rotate(${h_degrees}deg)`;

setInterval(() => {
    degrees += 6; 
    sec.style.transform = `translateY(-50%) rotate(${degrees}deg)`; // Apply the rotation
}, 1000);

setInterval(() => {
    m_degrees += 6; 
    min.style.transform = `translateY(-50%) rotate(${m_degrees}deg)`; // Apply the rotation
}, 60_000);

setInterval(() => {
    h_degrees += 6; 
    hour.style.transform = `translateY(-50%) rotate(${h_degrees}deg)`; // Apply the rotation
}, 60_000);