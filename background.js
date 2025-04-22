chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ tracking: false, blockedSite: '' });
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    chrome.storage.local.get('blockedSite', (data) => {
      if (tab.url.includes(data.blockedSite)) {
        chrome.tabs.update(activeInfo.tabId, { url: 'about:blank' });
      }
    });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'trackTime') {
    // Code to track time spent on websites
  }
});