import { Fragment } from "react"
import food_image from '../../assets/1000_F_712884560_Yo8EBdcoAApSFKvIjt5ZMoaxhPFUMyOh.jpg'
const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>Meals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={food_image} />
            </div>
        </Fragment>
    )
}

export default Header