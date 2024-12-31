import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-700 text-sm">
      <div className="container mx-auto py-4 px-6 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-blue-400 hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
