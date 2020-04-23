function snake_function(){
    this.x = 0; 
    this.y = 0;
    this.xSpeed = scale * 1; 
    this.ySpeed = 0; 
    this.total = 0; //początkowa ilość zjedzonych owoców, wyświetla nasz wynik
    this.tail = []; //zjedzone owoce są zapisywane w tym miejscu

    this.draw = function(){ //rysowanie węża na canvasie
        ctx.fillStyle = "#3CD070"; //wypełnienie kształtu kolorem

        for (let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale); //umożliwa powiększanie się węża o wielkość owoca po jego zjedzeniu
        }

        ctx.fillRect(this.x, this.y, scale, scale); //ustawia kształt naszego węża
    } 

    this.update = function() { //wporawdzamy funkcję update i ustalamy co ma ona robić (aktualizuje stan węża czyli położenie i kształt)
            for (let i=0; i<this.tail.length - 1; i++) { //umożliwa powiększanie się węża o wielkość owoca po jego zjedzeniu
                this.tail[i] = this.tail[i+1];
            }

            this.tail[this.total - 1] = { x: this.x, y: this.y };

            
            this.x += this.xSpeed; //umożliwia poruszanie się naszego węża (póki co tylko do lewej do prawej)
            this.y += this.ySpeed; //umożliwia poruszanie się naszego węża (póki co tylko do lewej do prawej)

            if (this.x > canvas.width) { //określamy co wąż robi po uderzeniu w ścianę
                this.x = 0; //sprawia że wąż może przechodzić przez ściany 
            }
            
            if (this.y > canvas.height) {  
                this.y = 0;//sprawia że wąż może przechodzić przez ściany
            }

            if (this.x < 0) { 
                this.x = canvas.width;//sprawia że wąż może przechodzić przez ściany 
            }

            if (this.y < 0) { 
                this.y = canvas.height;//sprawia że wąż może przechodzić przez ściany 
            }
    }

    this.changeDirection = function(direction){ //umożliwiamy sterowanie wężem za pomocą strzałek
        switch(direction){
            case 'Up': //ruch w górę 
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'Down': //ruch w dół
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'Left': //ruch w lewo
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'Right': //ruch w prawo
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }

    }

    this.eat = function(fruit){ //sprawia ze program wie kiedy nasz wąż nachodzi na owoc 
        if (this.x === fruit.x && this.y === fruit.y){ //sprawdza czy głowa węża zderza się z owocem
            this.total++; //umożliwa powiększanie się węża po zjedzeniu owoca 
            return true;
    }
            return false;
}

this.checkCollision = function() { //opisujemy co ma robic ta fukncja

    for (var i=0; i<this.tail.length; i++)  { //sprawdza czy głowa węża zderza się z jego ogonem

        if(this.x === this.tail[i].x && this.y === this.tail[i].y){ //funkcja if jeżeli wąż dotknie głową sowjego ogona 
            
            alert("PRZEGRAŁEŚ");
            document.location.reload();
            clearInterval(interval);
            
            //this.total=0; //wraca do początkowego stanu
            //this.tail = [];
        }

    }
}

}
