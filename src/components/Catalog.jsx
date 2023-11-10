import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Catalog() {
    const [snacks,setSnacks] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/snacks/')
            const json = await response.json()
            setSnacks(json)
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>Catalog</h1>
            <ul>
                {snacks.map((snack,index) => (
                    <li key={index} style = {{padding: '30px'}}>
                        {/* <Link to={`/snacks/${snack.snack_id}`}> */}
                        <Link to={`/snacks/${snack.name}`}>
                        <div>{snack.name}</div>
                        <div>{snack.vendor}</div>
                        <img src={snack.img} alt='Picture of snack'/>
                        <div>{snack.price}</div>
                        <div>{snack.desc}</div>
                        </Link>
                        
                    </li>
                ))}
            </ul>
        </div>
        
    )
}