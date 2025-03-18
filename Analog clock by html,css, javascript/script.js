setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();

    
    htime = htime % 12; 


    let hrotation = (30 * htime) + (mtime / 2);  
    let mrotation = 6 * mtime;  
    let srotation = 6 * stime;  


    let hourHand = document.getElementById('hour');
    let minuteHand = document.getElementById('minute');
    let secondHand = document.getElementById('second');


    if (hourHand) hourHand.style.transform = `rotate(${hrotation}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${mrotation}deg)`;
    if (secondHand) secondHand.style.transform = `rotate(${srotation}deg)`;

}, 1000);
