import gsap from "gsap";
import {  Application,Sprite} from "pixi.js";
import { app, app2,app3,Gamediv2} from "./index";

export class ass3 extends Application{
    constructor(opts:any){
    super(opts)

    const nextbtn = Sprite.from('./asset/nextbtn.jpg')
    nextbtn.interactive = true;
    nextbtn.buttonMode = true;
    nextbtn.anchor.set(0.5);
    nextbtn.width = 100;
    nextbtn.height = 100;
    nextbtn.x =innerWidth*0.95;
    nextbtn.y = innerHeight/2;
    this.stage.addChild(nextbtn)
    nextbtn.on("pointerdown", this.backreview.bind(this))
    const wheel= Sprite.from("./asset/cardback.jpg");
    wheel.x=innerWidth/2;
    wheel.y=innerHeight/2;
    wheel.anchor.set(0.5);
    wheel.interactive=true;
    wheel.buttonMode=true;
    wheel.on("pointerdown",()=>{
        gsap.fromTo(wheel,{angle:0},{angle:6000,duration:5});
        wheel.interactive=false
    })
    this.stage.addChild(wheel);
    setTimeout(() => {
        
       
        Gamediv2.appendChild(app3.view)
       
    }, 7000);
}
/**
 * jackpot
 */
public jackpot() {
   
}
/**
 * onclick
 */
public backreview() {
    app2.view.remove();
    document.body.appendChild(app.view)
}
/**
 * rotate
 */

}