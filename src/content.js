chrome.runtime.onMessage.addListener(() => {
  const result = clean(window.location.href);
  document.getElementsByTagName("body")[0].focus();
  navigator.clipboard.writeText(result).then(() => {
    console.log("ec-url-cleaner: " + result);
  });
});

/**
 * Remove noisy params from given URL.
 *
 * @param url {string} URL as string
 * @return string
 */
function clean(url) {
  const parser = new URL(url);
  let path = parser.pathname;
  const tokens = path.split("/");

  // only query params are deleted for non-amazon sites
  if (!parser.host.startsWith("www.amazon.")) {
    return parser.origin + path;
  }

  // delete ref
  if (tokens[tokens.length - 1].startsWith("ref=")) {
    tokens.splice(tokens.length - 1, 1);
    path = tokens.join("/");
  }

  // category
  if (tokens.indexOf("b") > 0) {
    return parser.origin + "/b/?node=" + parser.searchParams.get("node");
  } else if (path.startsWith("/gp/browse.html")) {
    return parser.origin + "/gp/browse.html?node=" + parser.searchParams.get("node");
  }

  // products
  if (tokens.indexOf("dp") > 1 && tokens[2] === "dp") {
    path = "/dp/" + tokens[3] + "/";
  } else if (path.startsWith("/gp/product/")) {
    path = "/dp/" + tokens[3] + "/";
  } else if (path.startsWith("/gp/video/detail/")) {
    path = "/dp/" + tokens[4] + "/";
  }
  return parser.origin + path;
}
