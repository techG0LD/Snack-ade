import React, { useState,useEffect } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate,useParams } from "react-router-dom";


function SearchBar() {
    const [snacks, setSnacks] = useState([''])
    const params = useParams();
    const navigate = useNavigate(); // create a navigate function

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4005/api/snacks/names`)
            const json = await response.json()
            setSnacks(json)
        }
        fetchData()
    }, [] )


    const [query, setQuery] = useState("");

   const handleSearch = () => {
    
    // do something with the query
    console.log(query);

    if (snacks.includes(query)){
        navigate('/')
        navigate(`/snacks/${query}`)
    }
    else{
        navigate(`/error:snack?=not found`)
    }
    
  };

  // add an onSubmit event handler to the Form component
  const handleSubmit = (event) => {
    // prevent the default behavior of the form submission
    event.preventDefault();
    // call the handleSearch function
    handleSearch();
  };

  return (
    <Form className=" mr-4 my-1" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Snack Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            borderRadius: "50px",
            borderRight: "none",
          }}
        />
        <Button
          className="search-butt"
          variant=""
          onClick={handleSearch}
          style={{
            borderRadius: "50px",
            borderLeft: "none",
          }}
        >
          <i class="fa fa-search" aria-hidden="true"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;




