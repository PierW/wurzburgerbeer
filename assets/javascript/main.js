let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let hour = today.getHours();
let minutes = today.getMinutes();


let todayDate = document.querySelector('.today-date');
let todayHour = document.querySelector('.today-hour');
    todayDate.innerText = dd + '/' + mm + '/' + yyyy;
    todayHour.innerText = hour + ':' + minutes;
