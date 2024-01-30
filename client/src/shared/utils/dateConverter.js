function formatDate(inputDate) {
    // Convert input string to a Date object
    const currentDate = new Date();
    const inputDateTime = new Date(inputDate);
  
    // Calculate time difference in milliseconds
    const timeDifference = currentDate - inputDateTime;
  
    // Convert time difference to seconds
    const secondsDifference = Math.floor(timeDifference / 1000);
  
    // Define time intervals
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    if (secondsDifference < minute) {
      return "Just now";
    } else if (secondsDifference < hour) {
      const minutesAgo = Math.floor(secondsDifference / minute);
      return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
    } else if (secondsDifference < day) {
      const hoursAgo = Math.floor(secondsDifference / hour);
      return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
    } else if (secondsDifference < day * 2) {
      return "Yesterday";
    } else if (secondsDifference <= day * 7) {
      const daysAgo = Math.floor(secondsDifference / day);
      return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
    } else {
      // Display the actual date in a suitable format
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return inputDateTime.toLocaleDateString(undefined, options);
    }
  }
  
  
export default formatDate;