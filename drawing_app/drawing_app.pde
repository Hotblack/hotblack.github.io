boolean flag;

void setup(){
  size(800,800);
  background(#000000);
  flag = false;
  noStroke();
}

void draw(){
  if(flag){
    fill(#000000);   
  }
  else
    fill(mouseX/2, (mouseX), mouseY/2);   
          
  println(abs(pmouseX-mouseX));
 
 ellipse(mouseX, mouseY, abs(pmouseX-mouseX)+10, abs(pmouseY-mouseY)+10);
}

void keyPressed(){
  if(key == TAB)
  {
    clear();
  }
   if(key == '1')
     {
       flag = true;  
     }
     if (key == '2')
     {
      flag = false; 
     }
}
