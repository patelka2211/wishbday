let random_wish, wish_type;

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const search_param = new URLSearchParams(window.location.search);

if (search_param.has("to")) {
    let person_name = document.getElementById("person_name");
    person_name.innerText = ` ${search_param.get("to")}`;
}

let wish_text = document.getElementById("wish_text");

fetch("js/wishes.json")
    .then((response) => response.json())
    .then((wishes) => {
        wish_type = choose(Object.keys(wishes));
        random_wish = choose(wishes[wish_type]);
        wish_text.innerText = random_wish;
    });

document.title = document.getElementById("hpbd").innerText;

let root = window.location;

document.getElementById("year").innerText = new Date().getFullYear();