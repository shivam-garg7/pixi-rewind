import { Application,BlobResource,Graphics,Sprite } from "pixi.js";
import { app } from "./index";
export class game extends Application {
  app1: Application;
  count:number;
  constructor(opts: any) {
    super(opts)
    this.count=0;
    const graphics=new Graphics()
 graphics.beginFill(0xffffff);
 graphics.drawRect(50, 50, 200, 50);
 graphics.endFill();
 this.stage.addChild(graphics);
 const sprite=Sprite.from("./asset/scrool.png");
 sprite.width=40;
 sprite.height=50;
 sprite.x=200;
 sprite.y=50;
 sprite.interactive=true;
 sprite.buttonMode=true;
 this.stage.addChild(sprite);
sprite.on("pointerdown",()=>{
    const graphics1=new Graphics();
 graphics1.beginFill(0xff0000);
 graphics1.drawRect(50, 100, 200, 50);
 graphics1.endFill();
 this.stage.addChild(graphics1);
 graphics1.interactive=true;
 graphics1.buttonMode=true;
 
 graphics1.on("pointerdown",()=>{
  const num=1;
  this.count=this.count+1;
  this.onclick(num)})
 const graphics2=new Graphics()

 graphics2.beginFill(0x0000ff);
 graphics2.drawRect(50, 150, 200, 50);
 graphics2.endFill();
 this.stage.addChild(graphics2);
 graphics2.interactive=true;
 graphics2.buttonMode=true;
 graphics2.on("pointerdown",()=>{
  const num=2;
  this.count=this.count+1;
  this.onclick(num)})
 const graphics3=new Graphics()

 graphics3.beginFill(0x00ff00);
 graphics3.drawRect(50, 200, 200, 50);
 graphics3.endFill();
 this.stage.addChild(graphics3);
 graphics3.interactive=true;
 graphics3.buttonMode=true;
 graphics3.on("pointerdown",()=>{ 
  const num=3;
  
  this.onclick(num)})
})

  }

  /**
   * onclick
   */
  public onclick(num:any) {
    app.view.remove();
    // this.app1.view.remove()
    // const app1:Application;
    // document.body.appendChild(app.view) 
    // this.app1 = new game({width:innerWidth,height:innerHeight,backgroundColor:0xff0000});
    //     document.body.appendChild(this.app1.view);
    switch (num) {
      case 1:
      //  this.app1.view.remove();

        this.app1 = new game({width:innerWidth,height:innerHeight,backgroundColor:0xff0000});
        document.body.appendChild(this.app1.view);
        break;
        case 2:
          // this.app1.view.remove();
          // this.app1.stage.destroy()
          this.app1 = new game({width:innerWidth,height:innerHeight,backgroundColor:0x0000ff});
          document.body.appendChild(this.app1.view);
        break;
        case 3:
          // this.app1.view.remove();
          // this.app1.stage.destroy()
                    this.app1= new game({width:innerWidth,height:innerHeight,backgroundColor:0x00ff00});
          document.body.appendChild(this.app1.view);
        break;
    
      default:
        break;
    }
  
   }
}