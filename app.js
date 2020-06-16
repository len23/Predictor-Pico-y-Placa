const RESTRCTIONS = {
  timeRestriction:{
    morning: '7:00 - 9:30',
    evening: '16:00 - 19:30'
  },
  monday:{
    plate: [1,1]
  },
  tuesday:{
    plate: [3,4]
  },
  wednesday: {
    plate: [5,6]
  },
  thursday: {
    plate: [7,8]
  },
  friday: {
    plate: [9,0]
  }
}

const DAYS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

const picoPlaca = (plate,date,time)=>{
  let dateDay = new Date(`${date},${time}`);
  let lastDigit = parseInt(plate.charAt(plate.length-1));
  let day = DAYS[dateDay.getDay()];
  let hourDay = dateDay.getHours();
  let minHour = dateDay.getMinutes();
  let rest = RESTRCTIONS[day].plate;

  
  if(rest.includes(lastDigit)){
    console.log('No puede circular');
  }else{
    console.log('Puede circular');
  }
  
   

  
  
}

picoPlaca('PCK-5351','2020-06-15','17:09');