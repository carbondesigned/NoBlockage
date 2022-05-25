const removeBtn = document.getElementById('removePaywall');

removeBtn.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removePaywall,
  });
});

const removePaywall = () => {
  const url = window.location.href;
  window.location.href = `https://12ft.io/${url}`;
};
