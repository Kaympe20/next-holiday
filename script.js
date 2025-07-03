async function soonestDate() {
    const response = await fetch('https://date.nager.at/api/v3/PublicHolidays/' + new Date().getFullYear() + '/US');

    const data = await response.json(); 

    for (const holiday of data) {
        if (new Date(holiday.date) > new Date()) {
            return holiday;
        }
    }
}

async function updateHolidayInfo() {
    const holiday = await soonestDate();
    const daysUntilHoliday = Math.ceil((new Date(holiday.date) - new Date()) / (1000 * 60 * 60 * 24));

    document.getElementById('holiday-label').innerText = holiday.name;
    document.getElementById('days-label').innerText = daysUntilHoliday;
}

updateHolidayInfo();