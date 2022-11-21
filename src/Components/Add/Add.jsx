import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';


export default function Add(props) {

    const [name_meal, setname_meal] = useState('')

    const titleNew = (e) => {
        setname_meal(e.target.value)
        console.log (name_meal)
    }

    const addDish = () => {
        const el = {
            name_meal: name_meal
        }
        props.onAdd(el)
    }
 
  return (
    <div>
        <TextField 
        onChange={titleNew}
        id="outlined-basic" label="Outlined" variant="outlined" />
        <Button 
        onClick={()=> addDish ()}
        variant="contained" color="success">
        Dodaj
        </Button>
    </div>
  )
}
