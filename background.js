// build a chrome extension that will allow you to create a new tab with a given url

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Remove Paywall',
    contexts: ['all'],
    id: 'remove-paywall',
  });
});
