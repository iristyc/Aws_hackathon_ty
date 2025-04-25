import { API, graphqlOperation } from 'aws-amplify';
import { listConversations } from './graphql/queries'; // Amplify 自動生成
import { useEffect, useState } from 'react';

const ChatList = ({ onSelect }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const result = await API.graphql(graphqlOperation(listConversations));
      setConversations(result.data.listConversations.items);
    };
    fetchConversations();
  }, []);

  return (
    <div className="w-1/4 border-r h-full overflow-y-auto">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelect(conv)}
          className="p-4 border-b cursor-pointer hover:bg-gray-100"
        >
          Conversation {conv.id}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
