import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223495013.jpg?k=da04493a33158d6d6090bb6c51a917ffae2506ca1aaf6eb94af9e165fa39a990&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223495013.jpg?k=da04493a33158d6d6090bb6c51a917ffae2506ca1aaf6eb94af9e165fa39a990&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223495013.jpg?k=da04493a33158d6d6090bb6c51a917ffae2506ca1aaf6eb94af9e165fa39a990&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1"
        },
    ];

    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber)
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton st 25 New Delhi</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighLight">
                        Book a stay over $115 at this property and get a free airport texi
                    </span>
                    <div className="hotelImage">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={() => handleOpen(i)}
                                    src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Bangalore</h1>
                            <p className="hotelDesc">
                                Situated in Bangalore, within 4.6 km of Commercial Street and 5.3 km of Brigade Road, Regenta Inn Indiranagar Bangalore features accommodation with a restaurant and free WiFi throughout the property as well as free private parking for guests who drive. This 3-star hotel offers room service and a 24-hour front desk. The accommodation provides a concierge service, a tour desk and currency exchange for guests.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay</h1>
                            <span>Location in the real heart of Bangalore, this property has an excellent location score of 9.8!</span>
                            <h2><b>$945</b>(9 nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel