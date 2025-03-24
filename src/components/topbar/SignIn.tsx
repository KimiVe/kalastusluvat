import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import '../styles/SignIn.css';
import { useDispatch } from 'react-redux';
import { signIn } from '../../reducers/signInReducer';

const SignIn = () => {
    const textContent = useSelector((state: AppState) => state.selectedLanguage.content);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const dispatch = useDispatch();
    const handleSignin = () => {
        dispatch(signIn())
    }

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <div className="signin" onClick={handleOpenModal}> 
                {textContent.loginButton.login}
            </div>

            {isModalOpen && (
                 <div className="modal">
                 <div className="modal-content">
                     <span className="close" onClick={handleCloseModal}>&times;</span>
                     <h2>{textContent.loginButton.login}</h2>
                     <input type="email" placeholder={textContent.loginBox.email} />
                     <input type="password" placeholder={textContent.loginBox.password} />
                     <p>{textContent.loginBox.passwordDescription}</p>
                     <button onClick={handleSignin}>{textContent.loginBox.logginButton}</button>
                     <button>{textContent.loginBox.createAccountButton}</button>
                     <p>{textContent.loginBox.createAccountButtonDescription}</p>
                 </div>
             </div>
            )}
        </div>
    );
};

export default SignIn;