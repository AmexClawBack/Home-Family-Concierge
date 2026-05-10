async function loadIncludes() {
  const header = await fetch("header.html");
  document.getElementById("header").innerHTML = await header.text();

  const footer = await fetch("footer.html");
  document.getElementById("footer").innerHTML = await footer.text();
}

loadIncludes();