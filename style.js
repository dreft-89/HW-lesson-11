let day = prompt('Write day');
switch (day.toUpperCase()) {
    case 'MONDAY':
    case 'TUESDAY':
    case 'WEDNESDAY':
    case 'THURSDAY':
    case 'FRIDAY':
        alert('Working day');
        break;
    case 'SATURDAY':
    case 'SUNDAY':
        alert('Weekendy');
        break;
    default:
        alert('Can not define, please try another value or write with uppercase');
}

