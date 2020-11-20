import ChildB from './ChildB/ChildB';
import './ParentB.css';

const ParentB = ({ language }) => {
  return (
    <div className='parent-b'>
      <ChildB language={language} />
    </div>
  );
};

export default ParentB;
