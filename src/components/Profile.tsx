import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { theme } from '../theme';

const Profile = () => {
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
          height: '500px', 
          backgroundColor: theme.colors.green2, 
          padding: '20px',
          textAlign: 'center',
          maxWidth: '900px', 
          width: '100%',
        }}
      >

<div style={{ textAlign: 'left', marginTop: '20px', width: '100%' }}>
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