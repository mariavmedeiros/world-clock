//Los Angeles

let losAngelesElement = document.querySelector("#losangeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
losAngelesDateElement.innerHTML = moment().format("MMMM D, YYYY ");
