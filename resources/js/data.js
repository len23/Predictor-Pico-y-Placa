// Here is the data to validate if a plate of one vehicle can be on the road 

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
 
