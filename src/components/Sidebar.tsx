import React from 'react';
import { Users, Home, Group, MessageSquare, ShoppingBag, Play, MoreHorizontal, Bookmark, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, text: 'Home' },
  { icon: Users, text: 'Find Friends' },
  { icon: Group, text: 'Groups' },
  { icon: MessageSquare, text: 'Most Recent' },
  { icon: ShoppingBag, text: 'Marketplace' },
  { icon: Play, text: 'Watch' },
  { icon: MoreHorizontal, text: 'See More' }
];

const shortcuts = [
  { icon: Bookmark, text: 'UX/UI Designer Community' },
  { icon: Group, text: 'Web Development Group' },
  { icon: Users, text: 'Memes Group' }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`
        w-64 bg-white p-4 h-screen fixed left-0 top-0 z-50 
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6 mt-12 lg:mt-0">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium">{item.text}</span>
              </button>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">Your shortcuts</h3>
            <div className="space-y-2">
              {shortcuts.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}