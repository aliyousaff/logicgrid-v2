import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiceCTA() {
    return (
        <section className="py-24 border-t border-zinc-900 bg-black text-center">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    If your problem is not listed here,<br />
                    <span className="text-zinc-500">it still belongs here.</span>
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
                    We build systems. Systems can be shaped to solve anything. <br />
                    Don't shop for a "package". Shop for a solution.
                </p>
                <Button className="bg-violet-600 text-white hover:bg-violet-500 font-bold h-14 px-10 text-lg shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]" asChild>
                    <Link href="/#contact">
                        Request a Solution <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
