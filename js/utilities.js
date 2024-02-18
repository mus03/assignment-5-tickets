function getId(elementId) {
  const element = document.getElementById(elementId);
  return element.innerText;
}
function setColorById(elementId) {
  document
    .getElementById(elementId)
    .classList.add("text-white", "bg-[#1DD100]");
}
function removeColorById(elementId) {
  document
    .getElementById(elementId)
    .classList.remove("text-white", "bg-[#1DD100]");
}
function setValueByElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function totalPrice(elementId, seatNum) {
  const currentPrice = getId(elementId);
  let updatedPrice = seatNum * 550;
  setValueByElementById(elementId, updatedPrice);
  return updatedPrice;
}
// document.getElementById(seatId).setAttribute("disabled", true);
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
