const hr = document.getElementById("hr"),
      mt = document.getElementById("mt"),
      sd = document.getElementById("sd"),
      tm = document.getElementById("tm");

setInterval(() => {
    const time = new Date();
    let h = time.getHours();
        m = time.getMinutes();
        s = time.setMinutes();

    if(h <= 9 ) hr.textContent = `0${h}:`;
    else hr.textContent = `${h}:`;

    if(m <= 9 ) hr.textContent = `0${m}:`;
    else hr.textContent = `${m}:`;

    if(s <= 9 ) hr.textContent = `0${s}:`;
    else hr.textContent = s;

    if(h <= 9 ) hr.textContent = 'PM';
    else tm.textContent = 'AM';

}, 1000);