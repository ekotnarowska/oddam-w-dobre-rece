import React, {useState, useEffect} from 'react';
import Pagination from "./pagination";


const HomeWhoWeHelp = () => {
    const [foundations, setFoundations] = useState([]);
    const [current, setCurrent] = useState('Fundacje');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);

    const loadFoundation = () => {

        fetch("http://localhost:3005/foundations", {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => setFoundations(res))
            .catch(error => console.log(error))

    }

    useEffect(() => {
        loadFoundation()

    }, []);
    const handleClick = (e) => {
        setCurrent(e.target.name);
        setCurrentPage(1)
    };

    const getFundation = () => foundations?.find(fund => fund.name === current) || null
    //get current foundations
    const indexOfLastFoundations = currentPage * itemsPerPage;
    const indexOfFirstFoundations = indexOfLastFoundations - itemsPerPage;

    const currentFoundations = getFundation()?.items?.slice(indexOfFirstFoundations, indexOfLastFoundations);
    console.log(currentFoundations);
    console.log(currentFoundations)

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <section id="foundations" className="foundation">
                <div className="container">
                    <h2 className="foundation__title">Komu pomagamy?</h2>
                    <div className="foundation__buttons">
                        <button name={"Fundacje"} className="foundation__button" onClick={handleClick}>Fundacjom
                        </button>
                        <button name="Organizacje" className="foundation__button" onClick={handleClick}>Organizacjom
                            pozarządowym
                        </button>
                        <button name="Loklane zbiórki" className="foundation__button" onClick={handleClick}>Lokalnym
                            zbiórkom
                        </button>
                    </div>
                    <p className="foundation__text">{getFundation()?.desc}</p>
                    <ul className='foundation__list'>
                        {currentFoundations?.map((e, i) => {
                            return (
                                <li className="foundation__item" key={e.id}>
                                    <div className="foundation__header"><h4>{e.header}</h4><h5>{e.subheader}</h5></div>
                                    <p>{e.desc}</p></li>
                            )
                        })}
                    </ul>
                    <Pagination itemsPerPage={itemsPerPage} totalItems={getFundation()?.items.length || 0} paginate={paginate}/>
                </div>
            </section>
        </>
    )
}

export default HomeWhoWeHelp;
