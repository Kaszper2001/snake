function fruit_function(){ //tworzy nasz owoc
    this.x;
    this.y;

    this.pickLocation = function(){ //ustawia losowe położenie naszego owoca
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() { //rysowanie naszego owocka 
        ctx.fillStyle = "#3CD070"; //kolor
        ctx.fillRect(this.x, this.y, scale, scale) //kształt
    }
}
