import React from 'react';



const HomeThreeColumns = () => {

    return (
       <div className="statistics">
           <div className="container">
               <div className="statistics__box one">
                   <span className="statistics__number">10</span>
                   <h4 className="statistics__title">Oddanych worków</h4>
                   <p className="statistics__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolores facilis id laudantium molestias praesentium ullam.
                   </p>
               </div>
               <div className="statistics__box two">
                   <span className="statistics__number">5</span>
                   <h4 className="statistics__title">Wspartych organizacji</h4>
                   <p className="statistics__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ipsam laboriosam neque quod sed sint tempora.
                   </p>
               </div>
               <div className="statistics__box three">
                   <span className="statistics__number">7</span>
                   <h4 className="statistics__title">Zorganizowanych zbiórek</h4>
                   <p className="statistics__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum ea earum eos, ipsa quaerat quisquam.
                   </p>
               </div>
           </div>
       </div>
    )
}

export default HomeThreeColumns