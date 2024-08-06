function formatDateTime(dateString) {
    const date = new Date(dateString);
    
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    
    const formattedDateTime = `${formattedDate} ${formattedTime}`;
    return formattedDateTime;
}
export default formatDateTime;