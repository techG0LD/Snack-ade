import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useParams,Link} from 'react-router-dom'

export default function Product() {
    const [snack, setSnack] = useState([''])
    const params = useParams();

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/snacks/${JSON.stringify(params)}`)
            const json = await response.json()
            setSnack(json)
        }
        fetchData()
    }, [] )



    return (
        <div className="recipePage">
            <img src={snack.img} alt={snack.name} width="550px" height="650px" />
        <div className="recipes">
            <h1 className="recipesRec">snack</h1>
            <ul className="recipeList">
                    <li style={{paddingBottom:'25px'}}>
                        <div>Name: {snack.name}</div>
                        <div>Vendor: {snack.vendor}</div>
                        <div>
                            <br/>
                            <ul>
                                <br/>
                                {snack.price} <br/>
                                {snack.desc} <br/>
                            </ul>
                        </div>
                    </li>
            </ul>

            <div>
                <Link  to='/'><Button variant='danger'>Back to Home</Button></Link>
            </div>



           
            <div>
                <Link to={`update`}><Button variant='danger'>Update snack</Button></Link>
            </div>
            {/* <form method="POST" action={`/places/${data.id}?_method=PUT`}></form> */}

        </div>
        </div>

    )
}