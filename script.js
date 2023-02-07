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

function updateCity(event) {
  let citytimeZone = event.target.value;
  let cityTime = moment().tz(citytimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${citytimeZone}</h2>
          <div class="date">${cityTime.format(" MMMM Do, YYYY")}</div>
        </div>
        <div class="time"> ${cityTime.format(
          "h:mm:ss"
        )} <small> ${cityTime.format("A")}
        </small></div>
        </div>`;
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
