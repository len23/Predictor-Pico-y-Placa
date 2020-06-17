const RESTRCTIONS = {
  timeRestriction:{
    morning: '7:00 - 9:30',
    evening: '16:00 - 19:30'
  },
  monday:{
    plateDigit: [1,2]
  },
  tuesday:{
    plateDigit: [3,4]
  },
  wednesday: {
    plateDigit: [5,6]
  },
  thursday: {
    plateDigit: [7,8]
  },
  friday: {
    plateDigit: [9,0]
  },
  saturday: {
    plateDigit: []
  },
  sunday: {
    plateDigit: []
  }
}

const DAYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']


//Class for plate
class Plate  {
 constructor(plate,date,hour){
  this.plate = plate.toString();
  this.date = date.toString();
  this.time = hour.toString();
 } 

  predictPicoPlaca (callback) {
   
    
  
  //Get all the vals to make the validator operations
  const dateDay = new Date(`${this.date.replace(/-/g,'/')},${this.time}`);
  const lastDigit = parseInt(this.plate.charAt(this.plate.length-1));
  const day = DAYS[dateDay.getDay()];
  const hourDay = dateDay.getHours();
  const minHour = dateDay.getMinutes();  

  
  const rest = RESTRCTIONS[day].plateDigit;
  

  if( rest.includes(lastDigit) ) {
    if((hourDay>=7 && hourDay<=9) || (hourDay>=16 && hourDay<=19)){
        if((hourDay===9 || hourDay===19) && (minHour>=30)){
          //Allways return a callback function with two vals
          return callback (true, `You can be on the road`);
        }
          return callback (false, `You can't be on the road`);
        
    }else{
      return callback (true, `You can be on the road`);
    }
    
  }
  return callback (true, `You can be on the road`);  
}
}

//Class for handle the User interface
class UI { 
  showAlert(message, className){
    document.getElementById(className).innerText=message;
      // Timeout after 3 sec
      setTimeout(function(){
        document.querySelector('#error').innerText='';
      }, 3000);
  }
  validatePlate(placa){
      let exp = new RegExp(/^[a-z]{3,3}-\d{4,4}$/);
      return exp.test(placa);
  }
  cleanOutput(){
    document.querySelector('#predict').innerText=''
  }
}

document.getElementById('plate-form').addEventListener('submit', function(e){
  e.preventDefault();
  // Instantiate UI fro handle the user interface
  const ui = new UI();
  
  // Get the data from the form
  const plate = document.getElementById('plate').value.toLowerCase() ,
  date = document.getElementById('date').value,
  time = document.getElementById('time').value

  //Validate if it is a valid Plate
  if(!ui.validatePlate(plate)){
    ui.showAlert('Insert a vlid plate like: ABC-1234', 'error');
  }else{
    //Valid if the user fill all the fields
    if(plate === '' || date === '' || time === ''){
      // Error alert
       ui.showAlert('Please fill in all fields', 'error');
     }else {
          // Instantiate plate
           const plateObj = new Plate(plate, date, time);
           //Get the message section
           const msg =  document.getElementById('predict');

           //Output the message using callback
            plateObj.predictPicoPlaca((e,i)=>{
               if(e){
                 msg.style.color = '#0cb870';
                 msg.innerText=i
               }else{
                 msg.style.color = '#c72b2ba4';
                 msg.innerText=i
               }
   
           });

           //Cleaning the output
           setTimeout(function(){
             ui.cleanOutput();
           }, 4000);
     }
  }
});


