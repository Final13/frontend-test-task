import { useContext } from 'react';
import EventContext from '../../app/eventContext';
export const DonateButton = () => {
  const { handleMouseEnter, handleMouseLeave } = useContext(EventContext);
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Donate
    </button>
  );
}