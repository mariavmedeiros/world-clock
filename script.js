function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#losangeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY ");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //São Paulo

  let saoPauloElement = document.querySelector("#saopaulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = saoPauloTime.format(" MMMM Do, YYYY");
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
setInterval(updateTime, 1000);
