let day = prompt('Write day');
switch (day) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        alert('Working day');
        break;
    case 'Saturday':
    case 'Sunday':
        alert('Weekendy');
        break;
    default:
        alert('Can not define, please try another value or write with uppercase');
}

