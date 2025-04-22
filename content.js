let startTime = Date.now();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'trackTime') {
    let timeSpent = Date.now() - startTime;
    console.log(`Time spent on this page: ${timeSpent / 1000} seconds`);
  }
});