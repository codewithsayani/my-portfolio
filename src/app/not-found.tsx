import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-9xl font-bold font-heading text-primary/20">404</h1>
            <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
            <p className="text-muted-foreground mt-4 max-w-md">
                Oops! The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
                <ArrowLeft size={20} /> Back to Home
            </Link>
        </div>
    );
}
