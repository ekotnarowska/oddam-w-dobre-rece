import React from "react";

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <nav>
                <ul className="pagination">
                    {new Array(Math.ceil(totalItems / itemsPerPage)).fill(null).map((n, i) => (
                        <li key={i} className="pagination__item">
                            <button onClick={() => paginate(i + 1)} href="!#" className="pagination__link">
                                {i +1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination