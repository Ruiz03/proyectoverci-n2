let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function generateCalendar() {
    const monthYearElement = document.getElementById('monthYear');
    const calendarBody = document.querySelector('#calendar tbody');
    
    // Set the month and year heading
    monthYearElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    
    // Clear previous calendar rows
    calendarBody.innerHTML = '';
    
    // Get the first day of the month and number of days in the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let row = document.createElement('tr');
    let dayCounter = 1;
    
    // Adjust the first day of the month to match the calendar grid
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('td');
        row.appendChild(emptyCell);
    }
    
    // Add the days of the month
    for (let i = firstDay; i < 7; i++) {
        const cell = document.createElement('td');
        cell.textContent = dayCounter++;
        row.appendChild(cell);
    }
    calendarBody.appendChild(row);
    
    // Add the rest of the weeks
    while (dayCounter <= lastDate) {
        row = document.createElement('tr');
        
        for (let i = 0; i < 7; i++) {
            if (dayCounter <= lastDate) {
                const cell = document.createElement('td');
                cell.textContent = dayCounter++;
                row.appendChild(cell);
            }
        }
        
        calendarBody.appendChild(row);
    }
}

function getMonthName(month) {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    return months[month];
}

function changeMonth(change) {
    currentMonth += change;
    
    // If the month goes out of bounds, adjust the year
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    
    generateCalendar();
}

// Initial calendar generation
generateCalendar();
