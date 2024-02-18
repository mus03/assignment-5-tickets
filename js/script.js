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
        setColorById(seatId);
        let currentSeats = getId("current-seats");
        console.log(typeof currentSeats);
        let updatedSeats = parseInt(currentSeats) + 1;
        console.log(updatedSeats);
        setValueByElementById("current-seats", updatedSeats);
        let currentSeatsLeft = getId("current-seatsLeft");
        let updatedSeatsLeft = parseInt(currentSeatsLeft) - 1;
        setValueByElementById("current-seatsLeft", updatedSeatsLeft);
      }
    });
  }
}

function getId(elementId) {
  const element = document.getElementById(elementId);
  return element.innerText;
}
function setColorById(elementId) {
  document
    .getElementById(elementId)
    .classList.add("text-white", "bg-[#1DD100]");
}
function setValueByElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
