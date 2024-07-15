class Car {
    constructor(x, y, carIndex) {
        this.x = x;
        this.y = y;
        this.carIndex = carIndex;
    }

    draw() {
        let carImg = `<img class="car" style="position:absolute; width:11%; top:${this.y}px; left:${this.x}px;" src="./img/car${this.carIndex}.png" id="car${this.carIndex}"></img>`;
        $('.race').append(carImg);
    }

    move(n) {
        let count = 0;
        let drive = setInterval(() => {
            n = 1 + Math.floor(Math.random() * 9);
            count += n;
            $(`#car2`).css({ left: count + 'px' });
            if (document.getElementById(`car2`).offsetLeft > 870) {
                clearInterval(drive);
                data.push('2');
                $('body').append(`<div class="win">
                Машина ${data[0]} выйграла
                </div>`);
                setTimeout(() => {
                    document.querySelector('.win').remove();
                }, 3000);
            }
            repeatBtn.addEventListener('click', () => {
                clearInterval(drive);
                $('.car').remove();
                data = [];
            });
        }, 30);
    }

    movePlayer(n) {
        let count = 0;

        goBtnPlayer.addEventListener('click', () => {
            if (document.getElementById(`car1`).offsetLeft < 870 && document.getElementById(`car2`).offsetLeft > 11) {
            n = 15 + Math.floor(Math.random() * 40);
            count += n;
            $(`#car1`).css({ left: count + 'px' });
            } else {
                    data.push('1');
                } 
        });

        document.addEventListener('keyup', function(event) {
            if (event.code == 'Space') {
                if (document.getElementById(`car1`).offsetLeft < 870 && document.getElementById(`car2`).offsetLeft > 11) {
                    n = 13 + Math.floor(Math.random() * 34);
                    count += n;
                    $(`#car1`).css({ left: count + 'px' });
                    } else {
                            data.push('1');
                        } 
            }
        })
    
        repeatBtn.addEventListener('click', () => {
            count = 0;
            $('.car').remove();
            data = [];
        }); 
     
    }
}



const car1 = new Car(10, 405, 1);
const car2 = new Car(10, 445, 2);


let data = [];

const repeatBtn = document.querySelector('.repeat');
const startBtn = document.querySelector('.start');
const goBtn = document.querySelector('.go');
const goBtnPlayer = document.querySelector('.go_player');



function race() {
    startBtn.addEventListener('click', () => {
        if ($(`.car`).length === 0) {
            car1.draw();
            car2.draw();
        }
    });

    goBtn.addEventListener('click', () => {
        if (document.getElementById('car1').offsetLeft === 10) {
            car1.movePlayer();
            car2.move();
        }
    });
}

race();

repeatBtn.addEventListener('click', () => {
    $('.car').remove();
    data = [];
});


