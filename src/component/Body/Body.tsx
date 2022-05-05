import React, {DetailedHTMLProps, LiHTMLAttributes} from 'react';

interface StudentType {
    id: string,
    name: string,
    age: number
}

type key = {
    key: number
}
type StudentsType = {
    // students: Array<StudentType>
    students: StudentType[]
    title: string
}
export const Body = (props: StudentsType) => {
    // MAP method
    let car = [
        {brand: 'mers', model: 's500'},
        {brand: 'audi', model: 'q8'},
        {brand: 'zaz', model: 'slavyta'}
    ]
    return (
        <>
            <table>
                <tr>
                    {car.map(car => <th>{car.brand}</th>)}
                </tr>
                <tr>
                    {car.map(car => <td>{car.model}</td>)}
                </tr>
            </table>
            x
            <ul>
                {props.students.map(s => <li key={s.id}>Hello {s.name}! Are you {s.age} years old?</li>)}
            </ul>
        </>
    );
}

