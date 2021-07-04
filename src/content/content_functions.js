/* global chrome */

const isPDF = () => {
    // if window contains one of this it is probably a pdf file
    return Boolean(window?.MimeTypes || window?.PdfNavigator || window.location.href.match(/\.pdf/i));
}

const port = chrome.runtime.connect({name: "connection"});

const sendPDFProcessing = (fileName) => {
    port.postMessage({message: "pdf_found", pdf_name: fileName});
}

port.onMessage.addListener((msg) => {
  console.log("Message:", msg);
});

export {isPDF, sendPDFProcessing};
