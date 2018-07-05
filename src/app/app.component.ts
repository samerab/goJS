import { Component } from '@angular/core';
import * as go from 'gojs';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataArray =
  [
    { text: "Don sssssssss", width: 100, height: 300, x: 0, y:0 },
    { text: "Toulouse", width: 50, height: 50, x:200, y: 200 },
    { text: "Roquefort", width: 60, height: 100, x:400, y: 200 },
    { text: "samer", width: 100, height: 100, x:200, y: 0 }
  ];

  ngOnInit() {
    this.createDiagram();


  }



  createTextBlock(text){
    let textblock = new go.TextBlock();
    textblock.text = text;
    textblock.margin = 5;
    return textblock;
  }

  createShape(){
    let shape = new go.Shape();
    shape.figure = "RoundedRectangle";
    shape.fill = "lightblue";
    
    return shape;
  }

  createNode(shape, textblock, width, height, x, y){
    let node = new go.Node(go.Panel.Auto);
    //Set Properties
    node.resizable = true;
    node.rotatable = true;
    node.position = new go.Point(x,y);
    node.desiredSize = new go.Size(width,height);
    //Add Elements
    node.add(shape);
    node.add(textblock);
    return node;
  }

  getDiagram(){
    let $ = go.GraphObject.make;
    let diagram = $(go.Diagram, "myDiagramDiv");
    diagram.addDiagramListener("SelectionMoved",
      function(e) {
        console.log(e) 
    });
    return diagram;
  }

  createDiagram(){
    let diagram = this.getDiagram();
    this.dataArray.forEach( item => {
      let shape = this.createShape();
      let textblock = this.createTextBlock(item.text);
      let node = this.createNode(
        shape,
        textblock,
        item.width,
        item.height,
        item.x,
        item.y
      )
      diagram.add(node);
    });
    
  }


  
}
