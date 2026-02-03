import { redirect } from 'next/navigation'
import { auth } from "../lib/auth"

export default async function Page() {
    const session = await auth();
    if (!session) {
        redirect('/login');
    }
    
    return (
        <div>
            <h1 className="display-4 fw-bold">Welcome to the Home Page</h1>
            <p className="mt-3">This is the main content area. Replace this text with your content.</p>
            <p>{session?.user?.email}</p>
        </div>
    );
}