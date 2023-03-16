    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    console.log(buttons);
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }else {
            console.log(screen.value);
            screen.value = eval(screen.value);
            console.log(screen.value);
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";

    })