async function loadIncludes() {
  const isSubPage = window.location.pathname !== "/" &&
                    !window.location.pathname.endsWith("index.html");

  const basePath = isSubPage ? "../" : "./";

  // Load header
  const headerResponse = await fetch(basePath + "header.html");
  const headerHTML = await headerResponse.text();

  // Load footer
  const footerResponse = await fetch(basePath + "footer.html");
  const footerHTML = await footerResponse.text();

  // Insert HTML
  const headerTarget = document.getElementById("header");
  const footerTarget = document.getElementById("footer");

  if (headerTarget) headerTarget.innerHTML = headerHTML;
  if (footerTarget) footerTarget.innerHTML = footerHTML;
}

loadIncludes();