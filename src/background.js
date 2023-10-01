chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Copy clean URL",
    contexts: ["page"],
    id: "copy-clean-url",
    documentUrlPatterns: [
      "https://www.amazon.com/*",
      "https://www.amazon.com.au/*",
      "https://www.amazon.com.br/*",
      "https://www.amazon.ca/*",
      "https://www.amazon.cn/*",
      "https://www.amazon.fr/*",
      "https://www.amazon.de/*",
      "https://www.amazon.in/*",
      "https://www.amazon.it/*",
      "https://www.amazon.co.jp/*",
      "https://www.amazon.com.mx/*",
      "https://www.amazon.nl/*",
      "https://www.amazon.pl/*",
      "https://www.amazon.sg/*",
      "https://www.amazon.es/*",
      "https://www.amazon.com.tr/*",
      "https://www.amazon.ae/*",
      "https://www.amazon.co.uk/*",
      "https://item.rakuten.co.jp/*",
    ],
  });
});

chrome.contextMenus.onClicked.addListener(function (_, tab) {
  chrome.tabs.sendMessage(tab.id, "");
});
