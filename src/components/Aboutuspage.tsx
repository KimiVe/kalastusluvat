import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { theme } from '../theme';

const Aboutuspage = () => {
  const { content } = useSelector((state: AppState) => state.selectedLanguage);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          width: '100%',
          height: '600px',
          backgroundColor: theme.colors.green2,
          padding: '30px'

        }}
      >
        <h2
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            margin: 0,
            color: 'black',
          }}
        >
          Kala-Appi
        </h2>

        <div>
          <p>{content.Aboutuspage.text2}</p>
          <p>{content.Aboutuspage.text3}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutuspage;