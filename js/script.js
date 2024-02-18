const parentDiv = document.getElementById("seat-rows");
parentDivChildren = parentDiv.children;
// console.log(parentDivChildren);
for (const row of parentDivChildren) {
  const everyHTMLCollection = row.children;
  //   console.log(everyHTMLCollection);
  for (let i = 1; i < everyHTMLCollection.length; i++) {
    const seatId = everyHTMLCollection[i].innerText;
    // console.log(seatId);
    const individualSeatId = getId(seatId);
    // console.log(individualSeatId);
    document.getElementById(seatId).addEventListener("click", function () {
      if (seatId === individualSeatId) {
        // increasing the seat booking value by 1
        let currentSeats = getId("current-seats");
        let updatedSeats = parseInt(currentSeats) + 1;
        if (updatedSeats > 4) {
          alert("You can not select more than 4 seats.");
        } else {
          // document.getElementById(seatId).setAttribute("disabled", true);

          setColorById(seatId);
          // document.getElementById(seatId).setAttribute("disabled", false);
          setValueByElementById("current-seats", updatedSeats);

          const seatAddition = document.getElementById("seat-addition");
          const eachRow = document.createElement("tr");
          const p1 = document.createElement("td");
          p1.innerText = seatId;
          const p2 = document.createElement("td");
          p2.innerText = "Economy";
          const p3 = document.createElement("td");
          p3.innerText = "550";
          eachRow.appendChild(p1);
          eachRow.appendChild(p2);
          eachRow.appendChild(p3);
          // p2.classList.add("items-center");
          seatAddition.appendChild(eachRow);
          const updatedPrice = totalPrice("current-price", updatedSeats);
          // document.getElementById(seatId).setAttribute("disabled", true);

          // const couponInput = getId("coupon-input");
          // // console.log(couponInput);
          // // couponInput.toLowerCase;
          // if (couponInput.toLowerCase === "new15") {
          //   console.log("gi");
          // }

          // decreasing left seats value by 1
          let currentSeatsLeft = getId("current-seatsLeft");
          let updatedSeatsLeft = parseInt(currentSeatsLeft) - 1;
          setValueByElementById("current-seatsLeft", updatedSeatsLeft);
          enableButton(updatedSeats);
        }

        //
      }
    });
  }
}
function enableButton(value) {
  const phoneInput = document.getElementById("phone-input");
  const nextButton = document.getElementById("next-button");

  phoneInput.addEventListener("keyup", function () {
    const phoneInputValue = phoneInput.value;
    // console.log(phoneInputValue.length);
    if (value >= 1 && phoneInputValue.length > 0) {
      // console.log(phoneInputValue.length);
      nextButton.removeAttribute("disabled");
    } else {
      alert("Please provide your phone number.");
      nextButton.setAttribute("disabled", true);
    }
  });
}
