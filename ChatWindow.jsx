import { API, graphqlOperation } from 'aws-amplify';
import { updateConversation } from './graphql/mutations'; // Amplify 自動生成
import { useState } from 'react';

const ChatWindow = ({ conversation }) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const updatedMessages = [
      ...conversation.messages,
      { sender: 'user', content: input, timestamp: new Date().toISOString() },
    ];

    await API.graphql(
      graphqlOperation(updateConversation, {
        input: { id: conversation.id, messages: updatedMessages },
      })
    );
    setInput('');
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {conversation.messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-blue-100 p-2 rounded">{msg.content}</span>
          </div>
        ))}
      </div>
      <div className="p-4 flex border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded mr-2"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
