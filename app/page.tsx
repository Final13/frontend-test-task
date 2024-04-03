'use client'

import { useState } from 'react';
import { DonateFlow } from "@/components/DonateFlow";
import { FloatingHearts } from "@/components/FloatingHearts";
import EventContext from './eventContext';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <EventContext.Provider value={{ handleMouseEnter, handleMouseLeave }}>
      <DonateFlow />
      <FloatingHearts isHovered={isHovered} />
    </EventContext.Provider>
  );
}
