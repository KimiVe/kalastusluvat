import { useSelector } from 'react-redux';
import "./styles/SharedStyles.css";
import { AppState } from '../store';
import { useEffect, useState } from 'react';

interface Licence {
    lupa_id: number;
    kalalaji: string;
    kalastusmuoto: string;
    maakunta: string;
    paikkakunta: string;
    vesisto: string;
    nimi: string;
    aika: string;
    hinta: number;
}

interface CheckoutProps {
    cart: Licence[];
    setCart: React.Dispatch<React.SetStateAction<Licence[]>>;
}
const Checkout: React.FC<CheckoutProps> = ({ cart, setCart }) => {
    const content = useSelector((state: AppState) => state.selectedLanguage.content);
    const [uniqueLicences, setUniqueLicences] = useState<Set<Licence>>(new Set());

    function updateQuantity(licence: Licence, quantity: number) {
        setCart(
            cart.map((item) =>
                item.lupa_id === licence.lupa_id ? { ...item, quantity: quantity } : item));
    };

    function getQuantity(licence: Licence) {
        return cart.filter((item) => item.lupa_id === licence.lupa_id).length;
    }

    useEffect(() => {
        setUniqueLicences(new Set(cart));
    })

    function drawLicence(licence: Licence, quantity: number) {
        return (
            <div className='checkout-licence-box'>
                <h1 className='checkout-licence-header'></h1>
                <p className="checkout-text">{licence.maakunta}</p>
                <p className="checkout-text">{licence.paikkakunta}</p>
                <p className="checkout-text">{licence.vesisto}</p>
                <p className="checkout-text">{licence.kalalaji}</p>
                <p className="checkout-text">{licence.kalastusmuoto}</p>
                <p className="checkout-text">{licence.aika}</p>
                <div className='checkout-minus-plus'>
                    <div className='minus-button' onClick={() => updateQuantity(licence, (quantity || 0) - 1)}></div>
                    <div className='checkout-licence-box-amount'>{quantity}</div>
                    <div className='plus-button' onClick={() => updateQuantity(licence, (quantity || 0) + 1)}></div>
                </div>
                <p className='checkout-licence-box-price'></p>
            </div>
        );
    }
    function oneOrMany(numberOfItems: number) {
        if (numberOfItems == 1) {
            return <p>{content.cart.shoppingCartDescription}</p>
        }
        return <p>{content.cart.shoppingCartDescriptionPlural}</p>
    }

    const totalPrice = cart.reduce((total, licence) =>
        total + licence.hinta, 0);

    return (
        <div className='content-box'>
            <h1 className='content-header'>{content.cart.shoppingCart}</h1>
            <div className='checkout-licence-list'>
                {Array.from(uniqueLicences).map((licence, index) => (
                    <div key={index} className="licence">
                        {drawLicence(licence, getQuantity(licence))}
                    </div>
                ))}
            </div>
            <p className='checkout-price-desc'>{cart.length} {oneOrMany(cart.length)} {totalPrice}</p>
            <div className='checkout-price-total'>
            </div>
        </div>
    )
};
export default Checkout;