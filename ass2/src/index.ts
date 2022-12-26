import { Application, Sprite } from 'pixi.js';
// import {  } from "./asset/";
import { game } from "./Game";
// import { ass3  } from "./ass2";
// Create the application
export const app:Application = new game({width:innerWidth,height:innerHeight,backgroundColor:0xff9678});

// Add the view to the DOM
document.body.appendChild(app.view);
 export const Gamediv:HTMLDivElement=<HTMLDivElement>document.getElementById("mainpg")
// export const app2:Application=new ass3({width:innerWidth,height:innerHeight,backgroundColor:0xff9900})
// Gamediv.appendChild(app2.view)
// export const Gamediv2:HTMLDivElement=<HTMLDivElement>document.getElementById("jackpot")
// export const app3 =new Application({width:innerWidth/3,height:innerHeight/3,backgroundColor:0x99f655})
// export const count=1;