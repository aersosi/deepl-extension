// Kontextmenü erstellen
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "openInDeepl",
        title: "Open in DeepL Translator",
        contexts: ["selection"]
    });
});

// Aktion bei Klick auf den Kontextmenüeintrag
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "openInDeepl" && info.selectionText) {
        const encodedText = encodeURIComponent(info.selectionText);
        const targetUrl = `https://www.deepl.com/de/translator#en/de/${encodedText}`;

        // Tab mit URL öffnen und Content Script injizieren
        chrome.tabs.create({ url: targetUrl }, (tab) => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ["contentScript.js"]
            });
        });
    }
});
