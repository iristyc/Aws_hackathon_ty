import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'; // Amplify CLI 會自動生成

Amplify.configure(awsExports);
