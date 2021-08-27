class Intro {
    constructor() {
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.title1 = createElement('h3');
        this.title2 = createElement('h3');
        this.title3 = createElement('h3');
        this.title4 = createElement('h3');
        this.title5 = createElement('h3');
        this.img = document.getElementById("introimg");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
        this.title2.hide();
        this.title2.hide();
        this.title3.hide();
        this.title4.hide();
        this.title5.hide();
        this.img.style.visibility ='hidden';
    }

    display(){
        this.textsize = 500;
        this.title.html("TASC");
        this.title.position(displayWidth/2 - 65, 0);
        this.title1.html("DESIGNED BY - Anannya");
        this.title1.position(displayWidth/2 - 160 , 40 );
        this.title2.html("“ TASC ” is an undercover team operating under the guidance of NIA.");
        this.title2.position(displayWidth/2 - 410, 150 );
        this.title3.html("BEST OF LUCK  !!!");
        this.title3.position(displayWidth/2 - 110, 350);
        this.title4.html("MADE IN - VISUAL STUDIO CODE - JAVA SCRIPT");
        this.title4.position(displayWidth/2 -250, displayHeight/2 + 200);
        this.title5.html("MENTOR AND INSTRUCTER- Sindhu Thyagarajan ");
        this.title5.position(displayWidth/2 -320, 70);
        this.button.position(displayWidth/2 - 100 , displayHeight/2 + 80);
       
       
        this.button.mousePressed(()=>{
          this.button.hide();
          this.title.hide();          
          this.title1.hide();
          this.title2.hide();
          this.title3.hide();
          this.title4.hide();
          this.title5.hide();
         // this.img.hide();
         this.img.style.visibility ='hidden';
          game.update(2);
        });
    }
}