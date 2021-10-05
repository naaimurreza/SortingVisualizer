let input_array_size = document.getElementById('array_size')
let array_size = input_array_size.value;
let input_generate = document.getElementById('generate_button');
let input_speed = document.getElementById('algorithm_speed');

let algorithm_buttons = document.querySelectorAll('.algorithms Button');

let div_sizes = [];
let divs = [];
let margin_size;
let container = document.getElementById('array_container');
container.style = "flex-direction: row";

input_generate.addEventListener('click', generate_array);
input_array_size.addEventListener('input', update_array_size);

function generate_array() {
    container.innerHTML = '';
    for (let i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (input_array_size.max - input_array_size.min) ) + 15;
        divs[i]=document.createElement("div");
        container.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color: blue; width:"
            + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        divs[i].innerHTML.text = div_sizes[i];
    }
}

function update_array_size() {
    array_size = input_array_size.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for(let i = 0;i < algorithm_buttons.length;i++) {
    algorithm_buttons[i].addEventListener("click", run_algorithm);
}

function disable_buttons() {
    for(let i = 0;i < algorithm_buttons.length;i++)
    {
        algorithm_buttons[i].classList=[];
        algorithm_buttons[i].classList.add("butt_locked");

        algorithm_buttons[i].disabled = true;
        input_generate.disabled = true;
        input_array_size.disabled = true;
        input_speed.disabled = true;
    }
}

function run_algorithm() {
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML) {
        case "Selection sort":
            Selection_sort();
            break;
        case "Merge sort":
            Merge_sort();
            break;
    }
}