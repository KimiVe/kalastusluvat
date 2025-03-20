import React from 'react';
import './Shareholder.css';
import './textContentFI.json';

const osakaskunnat = [
    { nimi: 'Änkilän kalastusosakaskunta', kuvaus: 'Puheenjohtaja Hannu Toivanen on ollut mukana viime vuosituhannelta saakka tekemässä Hiitolanjoen ihmettä.', kuva: 'ankila.jpg' },
    { nimi: 'Hiitolanjoen kalastusosakaskunta', kuvaus: 'Laatokan järvilohi ei jää enää Kangaskosken patoihin, ja pian järvitaimenet voivat nousta jo Torsanjärvelle saakka.', kuva: 'hiitola.jpg' },
    
];


const Shareholder = () => {
    return (
        <div className="shareholder-container">
            {osakaskunnat.map((osakaskunta, index) => (
                <div key={index} className="shareholder-box" onClick={() => alert(osakaskunta.nimi)}>
                    <img src={osakaskunta.kuva} alt={osakaskunta.nimi} className="shareholder-image" />
                    <h2 className="content-text-header">{osakaskunta.nimi}</h2>
                    <p className="content-text">{osakaskunta.kuvaus}</p>
                </div>
            ))}
        </div>
    );
};

export default Shareholder;