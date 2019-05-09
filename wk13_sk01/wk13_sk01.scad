    difference(){
      cube([110, 110, 60]);
        
        translate([15, 15, 5])
        cube([80,109,80]);
}

module unit_ridge(){
    cube([5,5,7], true);
}
cols = 95;
    
   for(y = [0:cols-1]){
         translate([103,107 - y,60]){
      unit_ridge();
      }
  }    

for(y = [0:cols-1]){
    translate([7, 107 - y, 60]){
        unit_ridge();
     }
}  

$fn = 40;

difference(){
translate([7, 5.5, 60])
cylinder(8,5,5);
    

translate([7, 5.5, 63])
cylinder(6,4,4);

}
difference(){
translate([103, 5.5, 60])
cylinder(8,5,5);
    
    
translate([103, 5.5, 63])
cylinder(6,4,4);
}


