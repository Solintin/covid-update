import React from 'react'
export default function Updated (){
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const d = new Date()
    const day = d.getDate();
    const month = d.getMonth()
    const year = d.getFullYear()
    return(
        <>

{`${months[month]} ${day}, ${year}`}

        </>
    )
}