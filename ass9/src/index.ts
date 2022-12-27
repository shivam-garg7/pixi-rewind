import { Application, Sprite } from 'pixi.js';
// import {  } from "./asset/";
import { game } from "./Game";
export const app:Application = new game({width:innerWidth,height:innerHeight,backgroundColor:0xff9678});

// Add the view to the DOM
document.body.appendChild(app.view);





// import { Application, Graphics,Sprite } from "pixi.js";
//  const app=new Application({width:innerWidth,height:innerHeight,backgroundColor:0xf345f5});
//  document.body.appendChild(app.view);
//  const graphics=new Graphics()

//  graphics.beginFill(0xffffff);
//  graphics.drawRect(50, 50, 200, 50);
//  graphics.endFill();
//  app.stage.addChild(graphics);
//  const sprite=Sprite.from("./asset/scrool.png");
//  sprite.width=40;
//  sprite.height=50;
//  sprite.x=200;
//  sprite.y=50;
//  sprite.interactive=true;
//  sprite.buttonMode=true;
// sprite.on("pointerdown",()=>{
//     const graphics1=new Graphics()

//  graphics1.beginFill(0xff0000);
//  graphics1.drawRect(50, 100, 200, 50);
//  graphics1.endFill();
//  app.stage.addChild(graphics1);
//  graphics1.interactive=true;
//  graphics1.buttonMode=true;
//  graphics1.on("pointerdown",()=>{})
//  const graphics2=new Graphics()

//  graphics2.beginFill(0x0000ff);
//  graphics2.drawRect(50, 150, 200, 50);
//  graphics2.endFill();
//  app.stage.addChild(graphics2);
//  graphics2.interactive=true;
//  graphics2.buttonMode=true;
//  const graphics3=new Graphics()

//  graphics3.beginFill(0x00ff00);
//  graphics3.drawRect(50, 200, 200, 50);
//  graphics3.endFill();
//  app.stage.addChild(graphics3);
//  graphics3.interactive=true;
//  graphics3.buttonMode=true;
// })
//  app.stage.addChild(sprite);
