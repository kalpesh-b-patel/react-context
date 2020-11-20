import React, { useContext } from 'react';
import LanguageContext from '../../../contexts/LanguageContext';

const ChildA = () => {
  const context = useContext(LanguageContext);
  return (
    <div className='child-a'>
      <h1>Child A</h1>
      <p>Language: {context}</p>
    </div>
  );
};

export default ChildA;
