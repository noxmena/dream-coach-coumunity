import { LucideIcon } from 'lucide-react';

export interface ButtonProps {
  icon?: LucideIcon;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}