import React from 'react'
import './Dainty.css'

export default function Dainty() {

    const meal =[
        {
            name_meal: 'Pączki', 
            describe: 'Pyszne pączki z tradycją z nadzieniem truskawkowym', 
            img: '/img/one.jpg'
        }, 
        {
            name_meal: 'Lizak', 
            describe: 'Lizak o smaku truskawkowym z nutką wiśni', 
            img: '/img/two.jpg'

        }, 
        {
            name_meal: 'Ciasto', 
            describe: 'Tiramisu z puszystą smietaną', 
            img: '/img/three.jpg'
        }, 
        {
            name_meal: 'Lody', 
            describe: 'Lody w trzech różnych smakach', 
            img: '/img/four.jpg'

        }
    ]
 
     
  return (
    
    <div className="deliciousBox">
        {meal.map((el, index) => {
            return (
                <div key={index} >
                   
                    <div className="card">
                    <img className="card-img-top" src={process.env.PUBLIC_URL + el.img} alt="zdjęcia smakołyków" />
                    <div className="card-body">
                        <h5 className="card-title">{el.name_meal}</h5>
                        <p className="card-text">{el.describe}</p>         
                    </div>
                    </div>
                    
                </div>
            )})
        }  
    </div>
  )
}
