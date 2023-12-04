const text= "test print using JS in HTML";
document.getElementById('anything1').innerHTML= text;
console.log('test print in log');

const image= 'camisaCinza.png';
document.getElementById('anything3').src= image;

const list= ['name1', 'name2', 'name3', 'name4'];
document.getElementById('anything4').innerHTML=  list;
console.log(list);

const dict= {'name' : ['name1', 'name2', 'name3'], 'age' : [20, 21, 30]};
const dict2= ['name:', dict['name'], 'age:', dict['age']];
document.getElementById('anything5').innerHTML= dict2;
console.log(dict['name'], dict['age']);

let light= [true];
function anything6(lights= light) {
    
    if (lights[0] == true) {
        document.getElementById('body').style.backgroundColor= 'black';
        lights[0]= false;
    }

    else{
        document.getElementById('body').style.backgroundColor= 'white';
        document.getElementById('p').style.color = 'black';
        lights[0]= true;
    }
}


