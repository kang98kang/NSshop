import React from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-6">
        <h1 className="text-2xl"> NS홈쇼핑 언리얼엔진</h1>
        <p>프로젝트 스타트 프로젝트 스타트</p>
      </main>
    </div>
  );
};

export default App;
