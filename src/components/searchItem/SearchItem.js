import { useNavigate } from "react-router-dom"
import "./searchItem.css"

const SearchItem = () => {

    const navigate = useNavigate();

    const navigateToProperty = () => {
        navigate('/hotels/:id')
    };

    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/223496641.webp?k=ac8ff3baec098184e1870425150360e8d026253b59205bc4b2ba85138c629765&o=" alt=""
                className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle" onClick={navigateToProperty}>Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment with Air condition</span>
                <span className="siFeatures">Entire Studio, 1 bathroom, 21m² 1 full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$128</span>
                    <span className="siTaxOp">Includer taxes and fees</span>
                    <button className="siCheckButton">See availablity</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
