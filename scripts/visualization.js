let speed=1000;

input_speed.addEventListener("input",vis_speed);

function vis_speed() {
    let array_speed = input_speed.value;
    switch(parseInt(array_speed)) {
        case 1: speed=5;
            break;
        case 2: speed=20;
            break;
        case 3: speed=100;
            break;
        case 4: speed=500;
            break;
        case 5: speed=2000;
            break;
    }

    delay_time= 10000 / (Math.floor(array_size / 10) * speed);
}

let delay_time = 10000 / (Math.floor(array_size/10) * speed);
let c_delay = 0;

function div_update(cont,height,color) {
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size))
            + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay += delay_time);
}

function enable_buttons() {
    window.setTimeout(function(){
        for(let i = 0;i < algorithm_buttons.length;i++) {
            algorithm_buttons[i].classList = [];
            algorithm_buttons[i].classList.add("butt_unselected");

            algorithm_buttons[i].disabled = false;
            input_speed.disabled = false;
            input_generate.disabled = false;
            input_array_size.disabled = false;
        }
    },c_delay+=delay_time);
}
