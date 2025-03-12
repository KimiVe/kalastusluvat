import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { theme } from '../theme';

const Profile = () => {
  const { content } = useSelector((state: AppState) => state.selectedLanguage);

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f4f4f4', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}
    >
      <div
        style={{
          position: 'relative', 
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center', 
          height: '600px', 
          backgroundColor: theme.colors.green2, 
          padding: '30px',
          maxWidth: '900px', 
          width: '100%'
        }}
      >

<div style={{ textAlign: 'left', marginTop: '30px', width: '200%' }}>
          <p>
            <strong>{content.Profile.header}:</strong>
          </p>
          <p>
            <strong>{content.Profile.name}:</strong>
          </p>
          <p>
            <strong>{content.Profile.address}:</strong>
          </p>
          <p>
            <strong>{content.Profile.phoneNumber}:</strong>
          </p>
          <p>
            <strong>{content.Profile.email}:</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;