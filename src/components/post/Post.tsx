import React from 'react';
import { PostActions } from './PostActions';

interface PostProps {
  author: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export function Post({ author, content, image, likes, comments }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop"
            alt={author}
            className="w-10 h-10 rounded-full transform hover:scale-105 transition-transform duration-200"
          />
          <div>
            <h3 className="font-semibold">{author}</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        
        <p className="mb-4">{content}</p>
        
        {image && (
          <img
            src={image}
            alt="Post content"
            className="w-full h-64 object-cover rounded-lg mb-4 hover:opacity-95 transition-opacity duration-200"
          />
        )}
        
        <PostActions likes={likes} comments={comments} />
      </div>
    </div>
  );
}