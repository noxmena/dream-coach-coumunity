import React, { useState } from 'react';
import { MessageCircle, Heart, Share2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAnimation } from '../../hooks/useAnimation';

interface PostActionsProps {
  likes: number;
  comments: number;
}

export function PostActions({ likes: initialLikes, comments }: PostActionsProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const { isAnimating, animate } = useAnimation();

  const handleLike = () => {
    animate(() => {
      setIsLiked(!isLiked);
      setLikes(prev => isLiked ? prev - 1 : prev + 1);
    });
  };

  return (
    <div className="flex items-center justify-between pt-4 border-t">
      <Button
        icon={Heart}
        onClick={handleLike}
        className={`${isLiked ? 'text-red-500 hover:text-red-600' : ''} 
          ${isAnimating ? 'scale-125' : ''} transition-transform duration-200`}
      >
        <span>{likes}</span>
      </Button>
      
      <Button icon={MessageCircle}>
        <span>{comments}</span>
      </Button>
      
      <Button icon={Share2}>
        <span>Share</span>
      </Button>
    </div>
  );
}