import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-72 bg-purple-500">Title</div>
      <div className="p-72 bg-red-500">video</div>
      <div className="p-72 bg-green-500">Benefits and Recruitment Guide</div>
      <div className="p-72 bg-blue-500">Recruitment Overview</div>
      <div className="p-72 bg-yellow-500">Training Contents and Schedule</div>
      <div className="p-72 bg-orange-500">How to apply and Selection</div>
      <div className="p-72 bg-pink-500">Location</div>
      <Footer />
    </div>
  );
};

export default App;
