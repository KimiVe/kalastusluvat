import { useSelector } from 'react-redux';
import { AppState } from '../store';

const Aboutuspage = () => {
  const { content } = useSelector((state: AppState) => state.selectedLanguage);

  return (
    <div className='content-box'>
      <h2 className='content-header'>{content.Aboutuspage.header}</h2>
      <p className='content-text'>{content.Aboutuspage.text1}</p>
      <p className='content-text'>{content.Aboutuspage.text2}</p>
    </div>
  );
};

export default Aboutuspage;