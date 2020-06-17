class Plate  {
 constructor(plate,date,hour){
  this.plate = plate.toString();
  this.date = date.toString();
  this.time = hour.toString();
 } 

  predictPicoPlaca (callback) {
  let dateDay = new Date(`${this.date},${this.time}`);
  let lastDigit = parseInt(this.plate.charAt(this.plate.length-1));
  let day = DAYS[dateDay.getDay()];
  let hourDay = dateDay.getHours();
  let minHour = dateDay.getMinutes();  
  let rest = RESTRCTIONS[day].plateDigit;
    
    
  if(rest.includes(lastDigit)){
    if((hourDay>=7 && hourDay<=9) || (hourDay>=16 && hourDay<=19)){
        if((hourDay===9 || hourDay===19) && (minHour>=30)){
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
  // Instantiate UI
  const ui = new UI();
  
  const plate = document.getElementById('plate').value.toLowerCase() ,
  date = document.getElementById('date').value,
  time = document.getElementById('time').value

  
  
  
  if(!ui.validatePlate(plate)){
    ui.showAlert('Insert a vlid plate like: ABC-1234', 'error');
  }else{
    if(plate === '' || date === '' || time === ''){
      // Error alert
       ui.showAlert('Please fill in all fields', 'error');
     }else {
          // Instantiate plate
           const plateObj = new Plate(plate, date, time);
           //Get the message section
           const msg =  document.getElementById('predict');
            plateObj.predictPicoPlaca((e,i)=>{
               if(e){
                 msg.style.color = '#0cb870';
                 msg.innerText=i
               }else{
                 msg.style.color = '#c72b2ba4';
                 msg.innerText=i
               }
   
           });
           setTimeout(function(){
             ui.cleanOutput();
           }, 4000);
     }
  }

  
   

});


