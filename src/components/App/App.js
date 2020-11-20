import { useState } from 'react';
import ParentA from '../ParentA/ParentA';
import ParentB from '../ParentB/ParentB';
import './App.css';
import LanguageContext from '../../contexts/LanguageContext';

const App = () => {
  const [language, setLanguage] = useState('English');

  const onLanguageChange = (language) => {
    setLanguage(language);
  };
  return (
    <div className='app'>
      <h1>App Component</h1>
      <div className='app__buttons'>
        <button
          type='button'
          className='btn btn-primary'
          onClick={() => onLanguageChange('English')}
        >
          English
        </button>
        <button
          type='btn'
          className='btn btn-primary'
          onClick={() => onLanguageChange('French')}
        >
          French
        </button>
      </div>

      <LanguageContext.Provider value={language}>
        <div className='app__main'>
          <div className='app__main--a'>
            <h1>Parent A</h1>
            <ParentA />
          </div>
          <div className='app__main--b'>
            <h1>Parent B</h1>
            <ParentB />
          </div>
        </div>
      </LanguageContext.Provider>
    </div>
  );
};
export default App;
