chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled...');
});

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "SAMPLE_MSG":
      console.log('msg from bg script');
      break;
    default:
      break;
  }
});