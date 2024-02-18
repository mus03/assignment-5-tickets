const parentDiv = document.getElementById("seat-rows");
parentDivChildren = parentDiv.children;
for (const row of parentDivChildren) {
  const everyHTMLCollection = row.children;
  for (let i = 1; i < everyHTMLCollection.length; i++) {
    const seatId = everyHTMLCollection[i].innerText;
    const individualSeatId = getId(seatId);
    document.getElementById(seatId).addEventListener("click", function () {
      if (seatId === individualSeatId) {
        // increasing the seat booking value by 1
        let currentSeats = getId("current-seats");
        let updatedSeats = parseInt(currentSeats) + 1;
        if (updatedSeats > 4) {
          alert("You can not select more than 4 seats.");
        } else {
          setColorById(seatId);
          setValueByElementById("current-seats", updatedSeats);
          // decreasing left seats value by 1
          let currentSeatsLeft = getId("current-seatsLeft");
          let updatedSeatsLeft = parseInt(currentSeatsLeft) - 1;
          setValueByElementById("current-seatsLeft", updatedSeatsLeft);
          // enableButton(updatedSeats);
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
          eachRow.style.display = "flex";
          eachRow.style.justifyContent = "space-around";
          seatAddition.appendChild(eachRow);
          const updatedPrice = totalPrice("current-price", updatedSeats);
          totalPrice("current-grandPrice", updatedSeats);
        }
      }
    });
  }
}
function btn() {
  const couponInput = document.getElementById("coupon-input").value;
  const couponInputMatch = couponInput.toUpperCase();
  const CP = getId("current-price");
  const numCP = parseInt(CP);
  const applyBtn = document.getElementById("apply-btn");
  if (couponInputMatch === "NEW15") {
    const updatedGrandPrice = numCP - numCP * 0.15;
    setValueByElementById("current-grandPrice", updatedGrandPrice);
  } else if (couponInputMatch === "COUPLE 20") {
    const updatedGrandPrice = numCP - numCP * 0.2;
    setValueByElementById("current-grandPrice", updatedGrandPrice);
  } else {
    document.getElementById("coupon-box").classList.add("hidden");
    setValueByElementById("current-grandPrice", CP);
  }
}
// function enableButton() {
document.getElementById("phone-input").addEventListener("keyup", function () {
  const nextButton = document.getElementById("next-button");
  const CS = getId("current-seats");
  let numCS = parseInt(CS);
  console.log(numCS);
  const phoneInputValue = document.getElementById("phone-input").value;
  // for (let i = 0; i > 4; i++) {
  if (phoneInputValue.length > 0) {
    if (numCS === 0) {
      alert("Please select atleast one seat then put your number.");
      nextButton.setAttribute("disabled", true);
    }
  } else if (phoneInputValue.length > 0 && numCS > 0) {
    // alert("Please provide your number");
    nextButton.setAttribute("disabled", true);
  }
});
// }
