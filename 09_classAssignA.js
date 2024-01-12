

console.log(`*************************************** Step 1*****************************************************************`);
class Vehicle{

    constructor (vehiclename , vehicleNo, vehicleColor, Vehicleshowroom, VehicleLicence){
        this.vehiclename=vehiclename;
        this.vehicleNo=vehicleNo;
        this.vehicleColor=vehicleColor;
        this.Vehicleshowroom=Vehicleshowroom;
        this.VehicleLicence=VehicleLicence;

    }
    getdetails(){
        console.log(`Vehicle Name: ${this.vehiclename} , Vehicle No: ${this.vehicleNo}, Vehicle color: ${this.vehicleColor}, Vehicle Showroom: ${this.Vehicleshowroom}, Vehicle Licence No: ${this.VehicleLicence}`);
    }
}
console.log(`Traversing the array of objects:`);

const  Jupiter= new Vehicle("Jupiter", "MH 0487", "black","Hinjawadi", 4567867);

const  Activa = new Vehicle("Activa","MH 9807", "White","Bavdhan",1234567);

const  KTM = new Vehicle("KTM","MH 7654","Yellow","Kothrud",9787654);

const  frod =new Vehicle(" Access 125","MH 5762","black", "Mumbai",876547);

const  Yamaha= new Vehicle("YAMAHA","MH 0997","Red","Delhi",987665);

const arrayOfVehicles= [Jupiter,Activa ,KTM, frod,Yamaha];
for (const element of arrayOfVehicles) {
    element.getdetails();
}
console.log(" ");
console.log(`*************************************** Step 2*****************************************************************`);

class College {


    constructor( collegeName, location, collegePrincipal, collegefacility){
this.collegeName=collegeName;
this.location=location;
this.collegePrincipal=collegePrincipal;
this.collegefacility=collegefacility;
this.display=function(){
 console.log(`College Name ${collegeName},Location ${location},College Principal ${collegePrincipal}, College Facilities ${collegefacility}`);
 }
      }
}
console.log(`Information about colleges are below:`);
const sinhgad = new College(" Sinhgad College", " Vadgaon"," ABC Principal","Library,Playground"   );
const mit= new College(" MIT","Kothrud","ABC Principal","Playground,laboratory");
const abhinav= new College(" Abhinav college","Narhe","XYZ Principal","Computer labs");
const DY=new College("DY. Patil college","Aundh","BCD Princpal","Labs,labarotary,library");
sinhgad.display();
console.log(" ");
mit.display();
console.log(" ");
abhinav.display();
console.log(" ");
DY.display();

console.log(" ");
console.log(`*************************************** Step 3*****************************************************************`);

class College1 {


    constructor( collegeName, location, collegePrincipal, collegefacility){
this.collegeName=collegeName;
this.location=location;
this.collegePrincipal=collegePrincipal;
this.collegefacility=collegefacility;
      }
}

const sinhgad1 = new College1(" Sinhgad College", " Vadgaon"," ABC Principal","Library,Playground"   );
const mit1= new College1(" MIT","Kothrud","ABC Principal","Playground,laboratory");
const abhinav1= new College1(" Abhinav college","Narhe","XYZ Principal","Computer labs");
const DY1=new College1("DY. Patil college","Aundh","BCD Princpal","Labs,labarotary,library");

console.log(`Traversing the object :`);
 let traverseObject= function(College1) {
    
    
 
    for (const key in College1)
     {
        
        if (Object.hasOwnProperty.call(College1, key)) {
            
            const element = College1[key];
            
            console.log(`${key}==> ${element}`);
        }
    }

 }
 traverseObject(sinhgad1);
 console.log(" ");
 traverseObject(mit1);
 console.log(" ");
 traverseObject(abhinav1);
 console.log(" ");
 traverseObject(DY1)