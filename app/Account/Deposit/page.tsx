import Deposit from '@/components/Account/Deposit';
import { headers } from 'next/headers';
import { auth } from '../../../lib/auth';


export default async function  page() {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <Deposit session={session} />
    </div>
  );
};

