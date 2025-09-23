// User interface for API data
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Post interface for API data
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// New Post interface for user-created posts
export interface NewPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

// Props interfaces for components
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

// Reusable Card component props
export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export interface PostCardProps {
  post: Post;
  onClick?: () => void;
}

export interface UserCardProps {
  user: User;
}

// Updated PostModal props for creating new posts
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

// Form data interface
export interface PostFormData {
  title: string;
  content: string;
}
