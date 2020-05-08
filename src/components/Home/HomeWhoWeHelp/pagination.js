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
                    {pageNumbers.map(number => (
                        <li key={number} className="pagination__item">
                            <a onClick={() => paginate(number)} href="!#" className="pagination__link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination