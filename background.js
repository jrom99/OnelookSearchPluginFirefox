chrome.contextMenus.create({
    id: "onelook-search",
    title: "Search on Onelook",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "onelook-search") {
        searchOnelook(info.selectionText);
    }
});

function searchOnelook(data) {
    browser.tabs.create({url:'https://onelook.com/?w='+data});
}
