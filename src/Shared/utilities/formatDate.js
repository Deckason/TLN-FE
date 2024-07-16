function formatDate(startTime, endTime) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    const dayOfWeek = daysOfWeek[start.getUTCDay()];
    
    const startHour = start.getUTCHours();
    const endHour = end.getUTCHours();
    
    const startMinutes = start.getUTCMinutes().toString().padStart(2, '0');
    const endMinutes = end.getUTCMinutes().toString().padStart(2, '0');
    
    const startPeriod = startHour >= 12 ? 'pm' : 'am';
    const endPeriod = endHour >= 12 ? 'pm' : 'am';
    
    const formattedStartHour = startHour % 12 === 0 ? 12 : startHour % 12;
    const formattedEndHour = endHour % 12 === 0 ? 12 : endHour % 12;
    
    return `${dayOfWeek} ${formattedStartHour}:${startMinutes} ${startPeriod} - ${formattedEndHour}:${endMinutes} ${endPeriod} | `;
}
export default formatDate;