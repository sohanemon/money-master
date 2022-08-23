const $ = (id) => document.getElementById(id);
const valueOf = (id) => parseFloat($(id).value);
const textOf = (id) => parseFloat($(id).innerText);

$("calculate-btn").addEventListener("click", (e) => {
  e.stopPropagation();
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
  let x;
  $("savings").innerText = x =
    (valueOf("income") * valueOf("saving-amount")) / 100;
  $("remains").innerText = valueOf("income") - textOf("total-expenses") - x;
});
