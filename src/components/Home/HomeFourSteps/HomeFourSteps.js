import React from 'react';



const HomeFourSteps = () => {

    return (
        <section id="fourSteps" className="fourSteps">
                <h2 className="fourSteps__title">Wystarczą 4 proste kroki</h2>
                <div className="fourSteps__boxes">
                <div className="container">
                    <div className="fourSteps__box">
                        <div className="fourSteps__box-img one"> </div>
                        <h4 className="fourSteps__box-title">Wybierz rzeczy</h4>
                        <p className="fourSteps__box-text">ubrania, zabawki, sprzęt i inne
                        </p>
                    </div>
                    <div className="fourSteps__box">
                        <div className="fourSteps__box-img two"> </div>
                        <h4 className="fourSteps__box-title">Spakuj je</h4>
                        <p className="fourSteps__box-text">skorzystaj z worków na śmieci
                        </p>
                    </div>
                    <div className="fourSteps__box">
                        <div className="fourSteps__box-img three"> </div>
                        <h4 className="fourSteps__box-title">Zdecyduj komu chcesz pomóc</h4>
                        <p className="fourSteps__box-text">wybierz zaufane miejsce
                        </p>
                    </div>
                    <div className="fourSteps__box">
                        <div className="fourSteps__box-img four"> </div>
                        <h4 className="fourSteps__box-title">Zamów kuriera</h4>
                        <p className="fourSteps__box-text">kurier przyjedzie w dogodnym terminie
                        </p>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default HomeFourSteps