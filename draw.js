const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 16;
const rows = canvas.height / scale;  //podział canvasa na mniejsze segmenty 
const columns = canvas.width / scale; //podział canvasa na mniejsze segmenty 

var snake;

(function setup(){ //funkcja inicjuje węża i owoc dzięki czemu program o nich wie
    snake = new snake_function();
    fruit = new fruit_function();
    fruit.pickLocation(); //wybiera nową lokację dla owoca po zjedzeniu
   
    

    window.setInterval(() => {  //ustawia opóźnienie do wywołania funkcji, im niższe opóźnienie tym większa prędkość
       
       

        ctx.clearRect(0, 0, canvas.width, canvas.height); //sprawia ze porusza sie sam kwadrat i nie zostawia za sobą śladu
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) { //sprawdza kiedy wąż najedzie na owoc
            fruit.pickLocation(); //sprawia ze owoc zmienia położenie na losowe po zjedzeniu
        }

       
        
        snake.checkCollision();

        document.querySelector('.score') //wyswietla nasz wynik
        .innerText = snake.total;

        
       
        
    }, 100);
}());


window.addEventListener('keydown', ((evt) => { //umożliwiamy sobie sterowanie naszym wężem
   
    const direction = evt.key.replace('Arrow', ''); //pobiera informację o tym którą strzałkę na klawiaturze naciskamy (up, down, left lub right)
    snake.changeDirection(direction);
    
}))
