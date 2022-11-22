import React from 'react'
import './Aboutus.css'


export default function Aboutus() {

  const worker = [
    {
      first_name: 'Tomek', 
      position: 'CEO', 
      img: '/img/ceo.jpg',
      describe_worker: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolor fuga ipsa culpa, ducimus beatae ex. Pariatur obcaecati ex quos, harum dolorum dolorem saepe assumenda laudantium ipsam ipsa quasi facilis.'
    },
    {
      first_name: 'Patrycja', 
      position: 'Księgowa', 
      img: '/img/women.jpg',
      describe_worker: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolor fuga ipsa culpa, ducimus beatae ex. Pariatur obcaecati ex quos, harum dolorum dolorem saepe assumenda laudantium ipsam ipsa quasi facilis.'
    },
    {
      first_name: 'Krzysztof', 
      position: 'Sprzedawca', 
      img: '/img/men.jpg',
      describe_worker: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolor fuga ipsa culpa, ducimus beatae ex. Pariatur obcaecati ex quos, harum dolorum dolorem saepe assumenda laudantium ipsam ipsa quasi facilis.'
    },
    {
      first_name: 'Ewelina', 
      position: 'Sprzedawca', 
      img: '/img/womenTwo.jpg',
      describe_worker: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque dolor fuga ipsa culpa, ducimus beatae ex. Pariatur obcaecati ex quos, harum dolorum dolorem saepe assumenda laudantium ipsam ipsa quasi facilis.'
    },

  ]

  const style = {
    
    worker: {
      width: '80%', marginLeft: '2em'
    }, 
    
  }

  return (
    <div>
    <div style={style.worker}>
      {
        worker.map((el, index) => {
          return (
            <div key={index}>     
                  <img className='avatar' src={process.env.PUBLIC_URL + el.img} alt='avatar' />
                  <div className='workerName' style={style.workerName}>Imię: {el.first_name}</div>
                  <div className='workerPosition'>Pozycja: {el.position}</div>
                  <div className='describeWorker'>{el.describe_worker}</div>
            </div>
          )
        })
      }
    </div>  
    </div>
   
  )
}
