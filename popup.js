let date = new Date();

//All the attributes for displaying the date

let hours = date.getHours();
let mins = date.getMinutes();
let sec = date.getSeconds();
let year = date.getFullYear();

let day = date.getDay();
let month = date.getMonth();
let num = date.getDate();


//Selecting all the DOM elements here

let dateBox = document.querySelector(".date");
let details = document.querySelector(".details");

// Declaring the Week Days and Months

let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday",
                    "Friday", "Saturday"];

let months = ["January", "February", "March", "April",
                    "May", "June", "July", "August", "September",
                    "October", "November", "December"];

// Displaying the Date attributes in UI

dateBox.innerHTML = `${hours} : ${mins} : ${sec}`;
details.innerHTML = `${weekdays[day]}, ${months[month]}
 ${num}, ${year}
`;

