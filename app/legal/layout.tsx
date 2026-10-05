import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <div className="container max-w-4xl py-12 md:py-24 px-4 md:px-6">
                <div className="mb-8">
                    <Button variant="ghost" size="sm" asChild className="pl-0 hover:bg-transparent hover:text-violet-500">
                        <Link href="/">
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back to HQ
                        </Link>
                    </Button>
                </div>
                <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl prose-a:text-violet-600 dark:prose-a:text-violet-400">
                    {children}
                </div>
            </div>
        </div>
    );
}
