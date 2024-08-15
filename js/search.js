function searchFunction() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let artistItems = document.getElementsByClassName("artist-item");

  Array.from(artistItems).forEach(function (item) {
    let artistName = item
      .getElementsByTagName("h2")[0]
      .textContent.toLowerCase();
    let description = item
      .getElementsByTagName("p")[0]
      .textContent.toLowerCase();

    if (artistName.includes(input) || description.includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
