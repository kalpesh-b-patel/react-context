import ChildA from './ChildA/ChildA';
import './ParentA.css';

const ParentA = ({ language }) => {
  return (
    <div className='parent-a'>
      <ChildA language={language} />
    </div>
  );
};

export default ParentA;
