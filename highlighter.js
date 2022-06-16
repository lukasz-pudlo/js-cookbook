'use strict';

document.getElementById("searchSubmit").onlick = function() {
    // Get the pattern
    const pattern = document.getElementById("pattern").value;
    const regex = new RegExp(pattern, 'g');

    const searchText = document.getElementById("incoming").value;

    let highlightedResult = "<pre>";
    let startPosition = 0;
    let endPosition = 0;

    // Find each match, and build the result
    const matches = searchText.matchAll(regex);
    for (const match of matches) {
        // This is the index at the beginning of the matched string
        endPosition = match.index;

        // Get all of the string up to the match, and concatenate
        highlightedResult += searchText.slice(startPosition, endPosition);

        // Add matched text, using a CSS class for formatting
        highlightedResult += "<span class='found'>" + match[0] + "</span>";
        startPosition = endPosition + match[0].length;
    }
    // Finish off the result string
    highlightedResult += searchText.slice(startPosition);
    highlightedResult += "</pre>";

    // Show the highlighted text in the page
    document.getElementById("searchResult").innerHTML = highlightedResult;
}