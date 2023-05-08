const searchButton = document.getElementById("search");
const searchInput = document.getElementById("q");
const form = document.getElementById("searchForm");


searchButton.addEventListener("click", function () {
    const value = searchInput.value;
    if (value.length == 0) return;
    form.submit();
});