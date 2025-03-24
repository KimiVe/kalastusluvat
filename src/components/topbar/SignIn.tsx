import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { signIn } from '../../reducers/signInReducer';
import '../styles/SignIn.css';

const SignIn = () => {
    const textContent = useSelector((state: AppState) => state.selectedLanguage.content);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullname: '',
        email: '',
        address: '',
        phone: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        setError('');
        try {
            const response = await fetch('https://kalastusluvatbackend-production.up.railway.app/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: formData.username, password: formData.password })
            });
            const data = await response.json();
            if (response.ok) {
                dispatch(signIn());
                setIsModalOpen(false);
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (error) {
            setError('Error');
        }
    };

    const handleRegister = async () => {
        setError('');
        try {
            const response = await fetch('https://kalastusluvatbackend-production.up.railway.app/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                alert('worked');
                setIsRegistering(false);
                dispatch(signIn());
            } else {
                setError(data.error || 'Failed');
            }
        } catch (error) {
            setError('Error');
        }
    };

    return (
        <div>
            <div className="signin" onClick={() => setIsModalOpen(true)}>
                {textContent.loginButton.login}
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
                        <h2>{isRegistering ? 'Register' : textContent.loginButton.login}</h2>
                        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                        {isRegistering && (
                            <>
                                <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                            </>
                        )}
                        {error && <p className="error-message">{error}</p>}
                        <button onClick={isRegistering ? handleRegister : handleLogin}>
                            {isRegistering ? 'Register' : 'Login'}
                        </button>
                        <button onClick={() => setIsRegistering(!isRegistering)}>
                            {isRegistering ? 'Back to Login' : 'Create Account'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignIn;
