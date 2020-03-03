let days = prompt('Write a day');
if (days.toUpperCase() == 'MONDAY'
  || days.toUpperCase() =='TUESDAY'
  || days.toUpperCase() == 'WEDNSDAY'
  || days.toUpperCase() == 'THURSDAY' 
  || days.toUpperCase() == 'FRIDAY') {  
    alert('Working day');
} else if (days.toUpperCase() == 'SATURDAY'
  || days.toUpperCase() =='SUNDAY') {
    alert('Weekend');
} else {
    alert('Can not define, please try another value');
}