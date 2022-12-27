import { Application,BlobResource,Graphics,Sprite,TextStyle,Text } from "pixi.js";
import { app } from "./index";
export class game extends Application {
 richText:Text;
 richText1:Text;
  constructor(opts: any) {
    super(opts)
    const style = new TextStyle({
      fontFamily: 'Arial',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round',
    });
    
     this.richText = new Text('Rich text with a lot of options and across multiple lines', style);
    this.richText.x = 50;
    this.richText.y = 220;
    this.stage.addChild(this.richText);
    this.richText.visible=false;
    const style1 = new TextStyle({
      fontFamily: 'Arcade',
      fontSize: 36,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round',
    });
    
    this.richText1 = new Text('Rich text with a lot of options and across multiple lines', style1);
    this.richText1.x = 50;
    this.richText1.y = 220;
    this.stage.addChild(this.richText1);
    const sprite=Sprite.from("./asset/checkbox1.jpg");
    sprite.width=40;
    sprite.height=50;
    sprite.x=200;
    sprite.y=50;
    sprite.interactive=true;
    sprite.buttonMode=true;
    this.stage.addChild(sprite);
   sprite.on("pointerdown",()=>{
    this.richText.visible=false;
    this.richText1.visible=true;
   
    sprite.visible=false;
  sprite1.visible=true
});
   const sprite1=Sprite.from("./asset/checkbox2.jpg");
    sprite1.width=40;
    sprite1.height=50;
    sprite1.x=200;
    sprite1.y=50;
    sprite1.interactive=true;
    sprite1.buttonMode=true;
    this.stage.addChild(sprite1);
   sprite1.on("pointerdown",()=>{
    this.richText.visible=true
    this.richText1.visible=false
    sprite1.visible=false;
    sprite.visible=true
  });
////---------------------------------------------------------------------------------------------


  
   }
}