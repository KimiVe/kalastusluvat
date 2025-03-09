import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { theme } from '../theme';

const Footer = () => {
  const {content } = useSelector((state: AppState) => state.selectedLanguage);

  return (
    <div
      style={{
        backgroundColor: theme.colors.green3,
        color: theme.colors.white,
        padding: '20px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0, color: 'black' }}>Kala-Appi</h2>

        <h4>
          <Link to="/cookies"
            style={{
              color: 'black',
              textDecoration: 'underline',
              textDecorationColor: 'black',
            }}
          >
            {content.Footer.cookies}
          </Link>
        </h4>

        <h4>
          <Link to="/social-media"
            style={{
              color: 'black',
              textDecoration: 'underline',
              textDecorationColor: 'black',
            }}
          >
            {content.Footer['social-media']}
          </Link>
        </h4>

        <h4>
          <Link to="/contact"
            style={{
              color: 'black',
              textDecoration: 'underline',
              textDecorationColor: 'black',
            }}
          >
            {content.Footer.contact}
          </Link>
        </h4>

        <h4>
          <Link to="/feedback"
            style={{
              color: 'black',
              textDecoration: 'underline',
              textDecorationColor: 'black',
            }}
          >
            {content.Footer.feedback}
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Footer;