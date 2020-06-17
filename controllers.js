class Plate  {
 constructor(plate,date,hour){
  this.plate = plate.toString();
  this.date = date.toString();
  this.time = hour.toString();
 } 

  predictPicoPlaca (){
  let dateDay = new Date(`${this.date},${this.time}`);
  let lastDigit = parseInt(this.plate.charAt(this.plate.length-1));
  let day = DAYS[dateDay.getDay()];
  let hourDay = dateDay.getHours();
  let minHour = dateDay.getMinutes();  
  let rest = RESTRCTIONS[day].plateDigit;
    
    console.log(rest);
    
  if(rest.includes(lastDigit)){
    if((hourDay>=7 && hourDay<=9) || (hourDay>=16 && hourDay<=19)){
        if((hourDay==9 || hourDay===19) && (minHour<=30)){
          return `You can't be on the road`;
        }else{
          return `You can be on the road`;
        }
    }else{
      return `You can be on the road`;
    }
    
  }
  return 'You can be on the road';
}
}

class UI { 
  showPredict(param){
    document.getElementById('predict').innerText=param;
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

   // Instantiate plate
   const plateObj = new Plate(plate, date, time);
   document.getElementById('predict').innerText = plateObj.predictPicoPlaca();

});


