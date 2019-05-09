$fn = 30;


difference(){
    color("green")
    translate([0,0,10])
    cube([6,6,6], center=true);
    translate([0,0,10])
    cylinder(h = 4, r = 3.5);
    }


difference(){
    color("cyan")
    translate([15,0,10])
    cube([6,6,6], center=true);
    translate([15,0,10])
    cylinder(h = 4, r = 3.5);
    }


difference(){
    color("pink")
    translate([15,15,10])
    cube([6,6,6], center=true);
    translate([15,15,10])
    cylinder(h = 4, r = 3.5);
    }
    
difference(){
    color("orange")
    translate([0,15,10])
    cube([6,6,6], center=true);
    translate([0,15,10])
    cylinder(h = 4, r = 3.5);
    }
 
 difference(){
 translate([0,15,10])
 cylinder(h = 12, r = 1);
    
 translate([-5,15, 20])
  rotate([0,90,0])
  cylinder(h= 10, r =0.6);
 }
    
 
 difference(){
translate([7.5,7.5,2])
     color("purple")
 cube([21,21,10], center=true);
    
 
  translate([-5,7.5,-2])
   rotate([0,90,0])
   cylinder(h = 25, r =2 );
    }
