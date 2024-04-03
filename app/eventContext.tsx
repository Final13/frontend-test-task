import { createContext, MouseEventHandler } from 'react';

type EventContextType = {
  handleMouseEnter: MouseEventHandler<HTMLButtonElement>;
  handleMouseLeave: MouseEventHandler<HTMLButtonElement>;
};

const EventContext = createContext<EventContextType>({
  handleMouseEnter: () => {},
  handleMouseLeave: () => {}
});

export default EventContext;