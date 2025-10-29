import { auth } from '../lib/auth';
import AuthClientPage from './auth-client';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AuthPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect('/Dashboard');
  }

  return <AuthClientPage />;
}

/*
import AuthClientPage from "./auth-client";

export default async function AuthPage() {
  return <AuthClientPage />;
}

*/
