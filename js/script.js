let random_wish, wish_type;

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function set_repeated_data(class_name, attribute, value) {
    const selected_tags = document.querySelectorAll(`.${class_name}`);
    selected_tags.forEach((tag) => {
        tag[attribute] = `${value}`;
    });
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

set_repeated_data(
    "document_title",
    "innerText",
    document.getElementById("hpbd").innerText
);
set_repeated_data(
    "title",
    "content",
    document.getElementById("hpbd").innerText
);
set_repeated_data(
    "description",
    "content",
    document.getElementById("hpbd").innerText
);
set_repeated_data("opengraph_image", "content", "assets/opengraph.jpg");
set_repeated_data("this_url", "content", window.location.origin);

document.getElementById('year').innerText = new Date().getFullYear();