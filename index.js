/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let myConvert = ""
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// meter to feet
const meterEl = document.getElementById("feet-el")
// liter to gallons
const literEl = document.getElementById("liter-el")
// kilogram to pound
const kiloEl = document.getElementById("kilo-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

inputBtn.addEventListener("click", function() {
    myConvert = inputEl.value
    if (!isNaN(myConvert) && myConvert != "" && myConvert != 0) {

        meterEl.textContent = ` ${myConvert} meters = ${Math.round((myConvert * meterToFeet) * 100) / 100 } feet | ${myConvert} feet = ${Math.round((myConvert / meterToFeet) * 100) / 100 } meters`
        literEl.textContent = ` ${myConvert} liters = ${Math.round((myConvert * literToGallon) * 100) / 100 } gallons | ${myConvert} gallons = ${Math.round((myConvert / literToGallon) * 100) / 100 } liters`
        kiloEl.textContent = ` ${myConvert} kilos = ${Math.round((myConvert * kiloToPound) * 100) / 100 } pounds | ${myConvert} pounds = ${Math.round((myConvert / kiloToPound) * 100) / 100 } kilos`


      } else {
        meterEl.textContent = ` What da fuck is this shit: "${myConvert}"?`
        literEl.textContent = ` Really, what do I do with this: "${myConvert}"?`
        kiloEl.textContent = ` What do you want with that: "${myConvert}"?`
      }

})