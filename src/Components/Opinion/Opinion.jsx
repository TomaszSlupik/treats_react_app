import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import './Opinion.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Opinion(props) {


    const style = {
        yourName: {marginLeft: '1em', borderColor: '#008b8b'}, 
        area: {margin: '2em 1.5em'}, 
        btn: {width: '50%', marginLeft: '1em'}
    }

    
const theme = createTheme({
    palette: {
      primary: {
        main: '#008b8b',
      }
    },
  });

  const [user_name, setuser_name] = useState('')
  const [user_text, setuser_text] = useState('')

  const writeUser = (e) => {
    setuser_name(e.target.value)
    console.log(user_name)
  }

  const writeText = (e) => {
    setuser_text(e.target.value)
    console.log(user_text)
  }

  const addUser = () => {
        const newuser = {
            user_name: user_name,
            body: user_text
        }
        props.onAdd(newuser)
  }



  return (
    <div>
        <div className='boxOpinion' >
        <ThemeProvider theme={theme}>
        <TextField 
        onChange={writeUser}
        style={style.yourName} id="outlined-basic" label="Imię" variant="outlined" />
        <TextField
          onChange={writeText}
          id="standard-multiline-static"
          label="Opinia"
          multiline
          rows={4}
          variant="standard"
          style={style.area}
        />
        <Button style={style.btn}variant="contained"
        onClick={()=> addUser()}>Prześlij</Button>     
        </ThemeProvider>  
        <div className='comment'>Komentarze:</div>
            
        </div>
    </div>
  )
}
