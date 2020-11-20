import React, { useContext } from 'react';
import LanguageContext from '../../../contexts/LanguageContext';

const ChildB = ({ language }) => {
  const context = useContext(LanguageContext);
  return (
    <div className='child-b'>
      <h1>Child B</h1>
      <p>Language: {context}</p>
    </div>
  );
};

export default ChildB;
