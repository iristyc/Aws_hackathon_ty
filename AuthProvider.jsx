import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

const AuthProvider = ({ children }) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <div className="flex justify-between p-2 bg-gray-200">
            <span>Hi, {user.username}</span>
            <button onClick={signOut}>Sign out</button>
          </div>
          {children}
        </div>
      )}
    </Authenticator>
  );
};

export default AuthProvider;
