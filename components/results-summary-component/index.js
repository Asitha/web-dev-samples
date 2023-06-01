
fetch('./data.json').then(function(response) {
    return response.json();
    }
).then(function(data) {
    processResults(data);
    }
);

function processResults(data) {
    element = document.getElementsByClassName('summary-list')[0];
    if (element) {
        element.innerHTML = '';
        data.forEach(function(item) {
            element.innerHTML +=
            '<li class="summary-item summary-item--type-' + item.category.toLowerCase() + '" >'
                + '<div class="summary-item__title">'
                    + '<img src="' + item.icon + '" alt="' + item.category + '"/>'
                    + '<p>'+ item.category + '</p>'
                + '</div>'
                + '<p><span class="summary-item__score">'+ item.score +'</span> / 100</p>'
            + '</li>';
        });
    }
}
