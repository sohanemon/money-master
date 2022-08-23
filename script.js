const $ = (id) => document.getElementById(id);
const valueOf = (id) => parseFloat($(id).value);
const textOf = (id) => parseFloat($(id).innerText);
const giveAlert = (id) => {
  if (isNaN(valueOf(id))) {
    alert("ঠিকঠাক স্যালারি দে");
    return true;
  }
  return false;
};
$("calculate-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  if (
    giveAlert("income") ||
    giveAlert("food-expenses") ||
    giveAlert("rent-expenses") ||
    giveAlert("clothes-expenses")
  )
    return;
  $("modal").style.display = "block";
  $("balance").innerText =
    valueOf("income") -
    valueOf("food-expenses") -
    valueOf("rent-expenses") -
    valueOf("clothes-expenses");

  $("total-expenses").innerText =
    valueOf("food-expenses") +
    valueOf("rent-expenses") +
    valueOf("clothes-expenses");
});
document.body.addEventListener("click", () => {
  $("modal").style.display = "none";
});
$("modal").addEventListener("click", (e) => {
  e.stopPropagation();
});
$("save-btn").addEventListener("click", () => {
  if (giveAlert("saving-amount")) return;
  let x;
  $("savings").innerText = x =
    (valueOf("income") * valueOf("saving-amount")) / 100;
  $("remains").innerText = valueOf("income") - textOf("total-expenses") - x;
});
