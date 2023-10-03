export function formatDateTime(inputDate:string, inputTime:string) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        const dateObject = new Date(inputDate + 'T' + inputTime + ':00'); // Adding ':00' to make it a complete hour:minute:second format
        
        // Extracting the day, month, and year from the dateObject
        const day = dateObject.getDate();
        const month = months[dateObject.getMonth()];
        const year = dateObject.getFullYear();
    
        // Formatting the time to the 12-hour format
        let hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
       const newminutes = minutes < 10 ? '0' + minutes : minutes;
    
        return {
            date: `${day} ${month} ${year}`,
            time: `${hours}:${newminutes} ${ampm}`
        };
    }
  
  // Test
  const inputDate = "2021-10-10";
  const inputTime = "13:00";
  const formatted = formatDateTime(inputDate, inputTime);
  
  console.log(formatted.date);  // 10 October 2021
  console.log(formatted.time);  // 1:00 PM
  