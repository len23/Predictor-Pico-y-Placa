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

const picoPlaca = (plate,date,time)=>{

  let lastDigit = plate.charAt(plate.length-1);
  let day = new Date(date).getDay()

  console.log(lastDigit, day);
  

}

picoPlaca('PCK-5352','2020-12-17','00:36:00');