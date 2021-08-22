//-------------------------------------------- function to select available options and set price-----------------------------------

function upgrade(id) {
  if (id == "8gb") {
    document.getElementById("8gb").classList.add("active");
    document.getElementById("16gb").classList.remove("active");
    document.getElementById("Memory").innerText = 0;
  }
  if (id == "16gb") {
    document.getElementById("16gb").classList.add("active");
    document.getElementById("8gb").classList.remove("active");
    document.getElementById("Memory").innerText = 180;
  }
  if (id == "256GB") {
    document.getElementById("256GB").classList.add("active");
    document.getElementById("512GB").classList.remove("active");
    document.getElementById("1TB").classList.remove("active");
    document.getElementById("Storage").innerText = 0;
  }
  if (id == "512GB") {
    document.getElementById("512GB").classList.add("active");
    document.getElementById("256GB").classList.remove("active");
    document.getElementById("1TB").classList.remove("active");
    document.getElementById("Storage").innerText = 100;
  }
  if (id == "1TB") {
    document.getElementById("1TB").classList.add("active");
    document.getElementById("512GB").classList.remove("active");
    document.getElementById("256GB").classList.remove("active");
    document.getElementById("Storage").innerText = 180;
  }
  if (id == "normal_delivery") {
    document.getElementById("normal_delivery").classList.add("active");
    document.getElementById("exp_delivery").classList.remove("active");
    document.getElementById("dc").innerText = 0;
  }
  if (id == "exp_delivery") {
    document.getElementById("exp_delivery").classList.add("active");
    document.getElementById("normal_delivery").classList.remove("active");
    document.getElementById("dc").innerText = 20;
  }
  totalprice();
}
// -------------------------------------- this function calculates the total before applying the promo code -------------------------
function totalprice() {
  let memory_price = document.getElementById("Memory").innerText;
  memory_price = parseInt(memory_price);
  let storage_price = document.getElementById("Storage").innerText;
  storage_price = parseInt(storage_price);
  let delivery = document.getElementById("dc").innerText;
  delivery = parseInt(delivery);
  total = memory_price + storage_price + delivery + 1299;
  document.getElementById("total").innerText = total;
  document.getElementById("final_total").innerText = total;

  return total;
}
//  applying promocode stevekaku and 20% discount function
function promocode() {
  let promo = document.getElementById("promo-code").value;
  let total = parseInt(document.getElementById("total").innerText);
  let finaltotal = parseInt(document.getElementById("final_total").innerText);

  if (promo == "stevekaku" && total == finaltotal) {
    document.getElementById("final_total").innerText =
      parseInt(finaltotal) - parseInt(finaltotal) * 0.2;
    console.log("inside if");
  }
  document.getElementById("promo-code").value = "";
}

document.getElementById("8gb").addEventListener("click", function () {
  memory = upgrade("8gb");
});
document.getElementById("16gb").addEventListener("click", function () {
  memory = upgrade("16gb");
});
document.getElementById("256GB").addEventListener("click", function () {
  storage = upgrade("256GB");
});
document.getElementById("512GB").addEventListener("click", function () {
  storage = upgrade("512GB");
});
document.getElementById("1TB").addEventListener("click", function () {
  storage = upgrade("1TB");
});
document
  .getElementById("normal_delivery")
  .addEventListener("click", function () {
    delivery = upgrade("normal_delivery");
  });
document.getElementById("exp_delivery").addEventListener("click", function () {
  delivery = upgrade("exp_delivery");
});
document.getElementById("promo-button").addEventListener("click", promocode);
