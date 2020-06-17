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
    
    console.log(rest);
    
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
  console.log('Llega hasta aca');
  
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
  clearFields() {
    document.getElementById('plate').value = '';
    document.getElementById('date').value = '';
    document.getElementById('hour').value = '';
  }
}

document.getElementById('plate-form').addEventListener('submit', function(e){
  e.preventDefault();
  const plate = document.getElementById('plate').value,
  date = document.getElementById('date').value,
  time = document.getElementById('time').value
  // Instantiate UI
  const ui = new UI();

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
          document.querySelector('#predict').innerText='';
        }, 2000);
  }
   

});


