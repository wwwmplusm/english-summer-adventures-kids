
import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Летний Английский Интенсив
          </h3>
          <p className="text-gray-300 mb-4">
            Подарите своему ребенку увлекательное и полезное лето с английским!
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>для детей и их родителей</span>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © 2024 Летний Английский Интенсив. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
