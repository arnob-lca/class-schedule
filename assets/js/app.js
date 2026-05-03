const d = new Date();
let newtime = document.querySelector("#newtime");
let newday = document.querySelector("#newday");
let newdate = document.querySelector("#newdate");

setInterval(function () {
    let d = new Date();
    newtime.innerHTML = d.toLocaleTimeString();
}, 1000);
let dayname = ["Sun", "Mon", "Tue", "Wed", "Tus", "Sat"];
const daynames = dayname[d.getDay()];
newday.innerHTML = daynames;
newdate.innerHTML = d.toLocaleDateString('en-IN');

const data = [
    { name: "Samrit Paul", mo: 24 },
    { name: "Diya Das", mo: 21 },
    { name: "Arnab Roy", mo: 20 },
    { name: "Srijita Karmakar", mo: 17 },
    { name: "Doyel Roy", mo: 16 },
    { name: "Suprabhat Sarkar", mo: 15 },
    { name: "Rupanjana Roy", mo: 12 },
    { name: "Arnob Biswas", mo: 10 },
    { name: "Soumik Dutta", mo: 10 },
    { name: "Rudra Pratap Biswas", mo: 7 },
];

const max = data[0].mo;
const container = document.getElementById('rows');

data.forEach((d, i) => {
    const rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : '';
    const pct = (d.mo / max * 100).toFixed(1);
    const moStr = String(d.mo).padStart(2, '0');

    const row = document.createElement('div');
    row.className = 'lt-row';
    row.innerHTML = `
        <div class="lt-inner">
          <div class="lt-top">
            <span class="lt-name ${rankClass}">${d.name}</span>
            <span class="lt-mo ${rankClass}">${moStr}MO.</span>
          </div>
          <div class="lt-track">
            <div class="lt-bar ${rankClass}" data-pct="${pct}"></div>
          </div>
        </div>
        ${i < data.length - 1 ? '<div class="lt-divider"></div>' : ''}
      `;
    container.appendChild(row);
});

requestAnimationFrame(() => {
    setTimeout(() => {
        document.querySelectorAll('.lt-bar').forEach(bar => {
            bar.style.width = bar.dataset.pct + '%';
        });
    }, 100);
});






/* === corsour JS === */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    rx += (e.clientX - rx) * 0.12;
    ry += (e.clientY - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
});
document.querySelectorAll('a, button, [data-hover]')
    .forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('hover');
            ring.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            dot.classList.remove('hover');
            ring.classList.remove('hover');
        });
    });



