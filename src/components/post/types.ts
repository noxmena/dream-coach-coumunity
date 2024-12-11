export interface Post {
  id: number;
  author: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
}

export interface PostActionsProps {
  likes: number;
  comments: number;
}

export interface PostProps extends Post {}