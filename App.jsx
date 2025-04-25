import { useState } from 'react';
import AuthProvider from './AuthProvider';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const App = () => {
  const [selectedConv, setSelectedConv] = useState(null);

  return (
    <AuthProvider>
      <div className="flex h-screen">
        <ChatList onSelect={setSelectedConv} />
        {selectedConv ? (
          <ChatWindow conversation={selectedConv} />
        ) : (
          <div className="flex-1 flex items-center justify-center">Select a conversation</div>
        )}
      </div>
    </AuthProvider>
  );
};

export default App;
