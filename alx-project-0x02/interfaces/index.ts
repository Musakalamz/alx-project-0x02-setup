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

// Props interfaces for components
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface PostCardProps {
  post: Post;
  onClick?: () => void;
}

export interface UserCardProps {
  user: User;
}

export interface PostModalProps {
  post: Post | null;
  isOpen: boolean;
  onClose: () => void;
}
