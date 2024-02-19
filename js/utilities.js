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
function showDiscountValue(value) {
  document.getElementById("discounted-box").classList.remove("hidden");
  document.getElementById("discounted-price").innerText = value;
}
