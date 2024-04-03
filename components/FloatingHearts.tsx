import { useEffect, useState } from "react";
import { HeartIcon } from "./icons/HeartIcon";

type Heart = {
  id: number;
  size: number;
  x: number;
}

export const FloatingHearts = ({ isHovered }: { isHovered: boolean }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (isHovered) {
      const timer = setInterval(() => {
        const newHeart = {
          id: Date.now(),
          size: Math.floor(Math.random() * 40) + 12,
          x: Math.random() * (window.innerWidth - 60),
        };
        
        setHearts(prevHearts => [...prevHearts, newHeart]);
      }, 200);
  
      return () => clearInterval(timer);
    } else {
      setHearts([]);
    }
  }, [isHovered]);

  const handleAnimationEnd = (id: number) => {
    setHearts(prevHearts => prevHearts.filter(heart => heart.id !== id));
  };
  return (
    <>
      {isHovered ? (
        <div style={{ position: 'relative', height: window.innerHeight - 40 }}>
          {hearts.map(({ id, size, x }) => (
            <HeartIcon 
              key={id}
              size={size}
              x={x}
              color="red"
              className="fadeOut"
              onAnimationEnd={() => handleAnimationEnd(id)}
            />
          ))}
        </div>)
        :
        ''
      }
    </>
  );
}