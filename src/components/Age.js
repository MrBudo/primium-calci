import React, {useState} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker'
function Age() {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div >
            <Datepicker 
            selected={selectedDate} 
            onChange={date=> setSelectedDate(date)}
        />
        </div>
    )
}

export default Age
