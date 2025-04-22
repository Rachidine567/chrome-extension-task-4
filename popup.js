document.getElementById('toggleTracking').addEventListener('click', toggleTracking);
document.getElementById('blockWebsite').addEventListener('click', blockWebsite);

function toggleTracking() {
  chrome.storage.local.get('tracking', (data) => {
    let newState = !data.tracking;
    chrome.storage.local.set({ tracking: newState }, () => {
      alert(newState ? 'Tracking started.' : 'Tracking stopped.');
    });
  });
}

function blockWebsite() {
  let url = window.location.href;
  chrome.storage.local.set({ blockedSite: url }, () => {
    alert('This website is now blocked.');
  });
}