import React from 'react';
import { Post } from './post/Post';
import { posts } from '../data/posts';
import { CreatePost } from './post/CreatePost';

export default function Feed() {
  return (
    <div className="max-w-2xl mx-auto pt-20 pb-8 px-4">
      <CreatePost />
      <div className="space-y-6">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}