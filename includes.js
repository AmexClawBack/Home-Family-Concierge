async function loadIncludes() {
  const headerTarget = document.getElementById("header");
  const footerTarget = document.getElementById("footer");

  if (headerTarget) {
    const headerResponse = await fetch("/header.html");
    const headerHTML = await headerResponse.text();
    headerTarget.innerHTML = headerHTML;
  }

  if (footerTarget) {
    const footerResponse = await fetch("/footer.html");
    const footerHTML = await footerResponse.text();
    footerTarget.innerHTML = footerHTML;
  }
}

loadIncludes();