robot="robot.png"; 



difference(){
    color("powderBlue")
  cylinder(20,20,10,$fn=4);
 translate([0,0, 10])  
cube([50,100, 4], true);

    }
    
    
   col_width = 8;
   col_heght = 1;
   rows = 3;
   columns = 3; 
    $fn = 50;
  
 
    
    module unit_column(){
        union(){
            color("Coral")
            translate([-4,-7,10])
            rotate([0,0,0])
          cylinder(col_width, col_height, col_height, true);  
            }
        }
    
  
    for(x = [0:columns-1], y = [0:rows-1]){
        translate([x* col_width/1.5, 1.4*y * col_width/1.5])
{
            unit_column();
            }
        
        }