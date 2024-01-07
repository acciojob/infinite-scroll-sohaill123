//your code here!

document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");

  // Function to add new list items
  function addItems(count) {
    for (let i = 1; i <= count; i++) {
      const li = document.createElement("li");
      li.textContent = "Item " + (i + infiList.children.length);
      infiList.appendChild(li);
    }
  }

  // Add 10 list items by default
  addItems(10);

  // Event listener for scrolling
  infiList.addEventListener("scroll", function () {
    // Check if the user has scrolled to the bottom
    if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
      // Add 2 more list items when reaching the bottom
      addItems(2);
    }
  });
});
