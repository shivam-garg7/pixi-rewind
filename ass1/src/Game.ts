import { Application, Sprite,Graphics } from "pixi.js";
import { app,Gamediv } from "./index";
// import { count} from "./index";
// import {Howl, Howler} from 'howler';
export class game extends Application {
  public btn1:any;
//   public sound:Howl
  constructor(opts: any) {
    super(opts)
    // const {Howl, Howler} = require('howler');
    // this.sound = new Howl({
    //   src: ['./asset/sound.wav']
    // });
    
    // // sound.play();
    this.prevscreen()
    // this.togglebtn(this.sound);
   
  }
  
 /**
  * togglebtn
  */
//  public togglebtn(sound:Howl) { 
//   const btn1 = Sprite.from("./asset/toggleon.png")
//   btn1.interactive = true;
//   btn1.buttonMode = true;
//   btn1.anchor.set(0.5);
//   btn1.width = 100;
//   btn1.height = 100;
//   btn1.x = innerWidth / 1.5;
//   btn1.y = innerHeight / 1.2;
//   this.stage.addChild(btn1)
//   btn1.on("pointerdown", ()=>{sound.stop();
//     btn1.visible=false;
//   btn.visible=true})
//   const btn = Sprite.from("./asset/toggle.png")
//   btn.interactive = true;
//   btn.buttonMode = true;
//   btn.anchor.set(0.5);
//   btn.width = 100;
//   btn.height = 100;
//   btn.x = innerWidth / 1.5;
//   btn.y = innerHeight / 1.2;
//   this.stage.addChild(btn)
//   btn.on("pointerdown", ()=>{sound.play();
//   btn.visible=false;
// btn1.visible=true;})
  
//  }
  /**
   * addedbtn
   */
  /**
   * prevscreen
   */

  public prevscreen() {
    this.stage.removeChild(this.btn1)
    const sprite = Sprite.from('./asset/bunny.jpg')
    sprite.width = innerWidth / 2;
    sprite.height = innerHeight / 2;
    sprite.x = innerWidth / 2;
    sprite.y = innerHeight / 2;
    sprite.anchor.set(0.5);
    this.stage.addChild(sprite);


    // const btn = Sprite.from("./asset/start.jpg")
    // btn.interactive = true;
    // btn.buttonMode = true;
    // btn.anchor.set(0.5);
    // btn.width = 100;
    // btn.height = 100;
    // btn.x = innerWidth / 2.2;
    // btn.y = innerHeight / 1.2;
    // this.stage.addChild(btn)
    // btn.on("pointerdown", this.onClick.bind(this))

    // const prev = Sprite.from('./asset/prev.jpg')
    // prev.interactive = true;
    // prev.buttonMode = true;
    // prev.anchor.set(0.5);
    // prev.width = 100;
    // prev.height = 100;
    // prev.x = 50;
    // prev.y = innerHeight/2;
    // this.stage.addChild(prev)
    // prev.on("pointerdown", this.nextpage.bind(this))

  }
  /**
   * onClick
   */
  /**
   * nes
   */
  public nextpage() {
    // Gamediv.appendChild(app2.view)
    app.view.remove();
  }
  public onClick() {
    this.stage.removeChildren();
    this.btn1 = Sprite.from("./asset/close.png")
    this.btn1.interactive = true;
    this.btn1.buttonMode = true;
    this.btn1.anchor.set(0.5);
    this.btn1.width = 100;
    this.btn1.height = 100;
    this.btn1.x = innerWidth / 2;
    this.btn1.y = innerHeight / 1.2;

    this.stage.addChild(this.btn1)
   this.btn1.on("pointerdown", this.prevscreen.bind(this))


  }

}
