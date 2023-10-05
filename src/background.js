chrome.runtime.onInstalled.addListener(() => {
  chrome.management.getSelf((extension) => {
    let title = "Copy clean URL";
    if (extension.installType === "development") {
      title += " [dev]";
    }
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        title: title,
        contexts: ["page"],
        id: "copy-clean-url",
        documentUrlPatterns: chrome.runtime.getManifest()["content_scripts"][0]["matches"],
      });
    });
  });
});

chrome.contextMenus.onClicked.addListener((_, tab) => {
  chrome.tabs.sendMessage(tab.id, "");
});
