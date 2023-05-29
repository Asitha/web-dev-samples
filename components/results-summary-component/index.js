
fetch('./data.json').then(function(response) {
    return response.json();
    }
).then(function(data) {
    processResults(data);
    }
);

function processResults(data) {
    element = document.getElementsByClassName('summary__item-list')[0];
    if (element) {
        element.innerHTML = '';
        data.forEach(function(item) {
            console.log(item);
            element.innerHTML +=
            '<li class="summary__item summary__item--type-' + item.category.toLowerCase() + '" >'
                + '<img src="' + item.icon + '" alt="' + item.category + '"/>'
                + '<h4>'+ item.category + '</h4>'
                + '<p><span class="summary__item--score">'+item.score +'</span> / 100</p>'
            '</li>';
        });
    }
}
