import { Application, Container, Graphics, Sprite,Text,TextStyle } from 'pixi.js';
// import {  } from "./asset/";
// import { game } from "./Game";
// import { ass3  } from "./ass2";
// Create the application
export const app = new Application({width:innerWidth,height:innerHeight,backgroundColor:0xff9678});

// Add the view to the DOM
document.body.appendChild(app.view);
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

const richText = new Text('Rich text with a lot of options and across multiple lines', style);
richText.x = 50;
richText.y = 220;
richText.interactive=true;
richText.buttonMode=true;
app.stage.addChild(richText);


const thing = new Graphics();
app.stage.addChild(thing);
thing.x = 400;
thing.y =500;

let count = 0;

// Just click on the stage to draw random lines
const graphics = new Graphics();
// window.app = app;
app.stage.on('pointerdown', () => {
    graphics.lineStyle(Math.random() * 30, Math.random() * 0xFFFFFF, 1);
    graphics.moveTo(Math.random() * 800, Math.random() * 600);
    graphics.bezierCurveTo(
        Math.random() * 800, Math.random() * 600,
        Math.random() * 800, Math.random() * 600,
        Math.random() * 800, Math.random() * 600,
    );
});

app.ticker.add(() => {
    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffFF00, 0.5);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.closePath();

    thing.rotation = count * 0.1;
    thing.interactive=true;
    thing.buttonMode=true
});