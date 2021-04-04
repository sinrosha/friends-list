import React from  "react"
import  {FaArrowLeft, FaArrowRight} from "react-icons/fa"

function Pagination({friendsToShow, currentPage, handleNavigation, startWindow, endWindow }) {
    return (
        <>
            {friendsToShow.length > 4 ? (
                <div className="pagination">
                    <div className="prev" style={currentPage === 1 ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => handleNavigation("prev")}>
                        <FaArrowLeft />
                    </div>
                    <p>Showing {startWindow + 1} - {friendsToShow.length < endWindow ? friendsToShow.length : endWindow}</p>
                    <div className="next" style={friendsToShow.length <= endWindow ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => handleNavigation("next")}>
                        <FaArrowRight />
                    </div>
                </div>
            ) : null }
        </>
    )
}

export default Pagination;