import React from 'react';
import { Bell, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onNotificationsClick: () => void;
}

export default function Header({ onMenuClick, onNotificationsClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-full lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Zap className="w-8 h-8 text-blue-500" />
          <span className="text-xl font-bold">DreamCoach</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-medium hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="font-medium hover:text-blue-500 transition-colors">Courses</a>
          <a href="#" className="font-medium hover:text-blue-500 transition-colors">Chat</a>
          <a href="#" className="font-medium text-blue-500">Community</a>
        </nav>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            onClick={onNotificationsClick}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors md:flex hidden">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors md:flex hidden">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}