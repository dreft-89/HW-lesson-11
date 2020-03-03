let days = prompt('Write a day');
if (days == 'monday'
  || days =='tuesday'
  || days == 'wednsday'
  || days == 'thursday' 
  || days == 'friday') {  
alert('Working day');
} else if (days == 'saturday'
    || days =='sunday') {
    alert('Weekend');
} else {
    alert('Can not define, please try another value');
}