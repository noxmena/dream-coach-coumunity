import { useState } from 'react';

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = (callback?: () => void) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      callback?.();
    }, 300);
  };

  return { isAnimating, animate };
}