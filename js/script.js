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
          document.getElementById(seatId).classList.add("pointer-events-none");
        }
      }
    });
  }
}
//coupon section
function btn() {
  const couponInput = document.getElementById("coupon-input").value;
  const couponInputMatch = couponInput.toUpperCase();
  const CP = getId("current-price");
  const numCP = parseInt(CP);
  const applyBtn = document.getElementById("apply-btn");
  if (couponInputMatch === "NEW15") {
    const updatedGrandPrice = numCP - numCP * 0.15;
    setValueByElementById("current-grandPrice", updatedGrandPrice);
    showDiscountValue(numCP * 0.15);
  } else if (couponInputMatch === "COUPLE 20") {
    const updatedGrandPrice = numCP - numCP * 0.2;
    setValueByElementById("current-grandPrice", updatedGrandPrice);
    showDiscountValue(numCP * 0.2);
  } else {
    document.getElementById("coupon-box").classList.add("hidden");
    setValueByElementById("current-grandPrice", CP);
    showDiscountValue(0);
  }
}
document.getElementById("phone-input").addEventListener("keyup", function () {
  const nextButton = document.getElementById("next-button");
  const CS = getId("current-seats");
  let numCS = parseInt(CS);
  console.log(numCS);
  let phoneInputValue = document.getElementById("phone-input").value;
  if (phoneInputValue.length > 0 && numCS === 0) {
    document.getElementById("phone-input").value = " ";
    alert("Please select your seat first then put phone number");
  } else if (phoneInputValue.length > 0 && numCS > 0) {
    nextButton.removeAttribute("disabled");
  }
});
