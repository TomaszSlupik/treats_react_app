import React, { Component } from 'react'
import './Maincomments.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DeleteIcon from '@mui/icons-material/Delete';
import Opinion from '../Opinion/Opinion';


export default class Maincomments extends Component {
    constructor(props) {
      super(props)
      this.state = {
        comment: [
          {
             id: 1,
             user_name: 'Ola', 
             body: 'Bardzo pysze smakołyki. Można zakochać się'
          }, 
          {
             id: 2, 
             user_name: 'Piotrek', 
             body: 'Ujdzie'
 
          }, 

          {
            id: 3, 
            user_name: 'Zosia', 
            body: 'Wyśmienite smakołyki. Miła obsługa, pełen profesjonalizm oraz uśmiechnięci pracownicy'

         }
         ]
      }
    }
    
    deleteComment (id) {
      const allcoment = [...this.state.comment].filter(el => el.id !== id)
      this.setState({comment: allcoment})
      console.log(id)
    }

    addComment (el) {
      const allcoment = [...this.state.comment]
      allcoment.push(el)
      this.setState({comment : allcoment})
    }

  render() {
    const style = {
      bin: {position: 'absolute', top: '2%', right: '4%', fontSize: '2rem', color: 'red', cursor: 'pointer'}
    }

    return (
      <div>
        <Opinion 
        onAdd={(el)=> this.addComment(el)}
        />
        {
            this.state.comment.map((el, index) => {
                return (
                    <div >
                        <div className="maincomment" key={index}>
                        <FormatQuoteIcon className='comment' />
                        <div className='commentmain'>    
                        </div>
                        <div className='commentmaintext'>{el.user_name}</div>
                        <div className='commentmaintext'>{el.body}</div>
                        <DeleteIcon style={style.bin}
                        onClick={()=> this.deleteComment(el.id)}/>
                        </div>    
                    </div>
                )
            })
        }
      </div>
    )
  }
}
