"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, CheckCircle2, Loader2, Terminal, Copy, Download } from "lucide-react";
import { jsPDF } from "jspdf";

export function Contact() {
    const initialFormState = {
        name: "",
        business: "",
        email: "",
        phone: "",
        service: "High-Performance Website",
        outcome: "",
        details: ""
    };

    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successId, setSuccessId] = useState<number | null>(null);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Helper to generate PDF instance (reused for Email/Telegram and Download)
    const generatePDFDoc = (id: number | null) => {
        const doc = new jsPDF();
        const idText = id ? `#${id}` : "PENDING";
        const dateText = new Date().toLocaleString();

        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text("LOGICGRID OPS", 20, 20);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("COMMAND CENTER // PROJECT BRIEF", 20, 30);

        doc.setLineWidth(0.5);
        doc.line(20, 35, 190, 35);

        doc.setFont("courier", "normal");
        doc.setFontSize(10);

        const lines = [
            `PROTOCOL ID: ${idText}`,
            `TIMESTAMP:   ${dateText}`,
            "",
            "CLIENT DETAILS",
            "----------------------------------------",
            `NAME:     ${formData.name}`,
            `BUSINESS: ${formData.business}`,
            `EMAIL:    ${formData.email}`,
            `PHONE:    ${formData.phone}`,
            "",
            "PROJECT SPECS",
            "----------------------------------------",
            `SERVICE:  ${formData.service}`,
            `OUTCOME:  ${formData.outcome}`,
            "",
            "BRIEF",
            "----------------------------------------",
        ];

        let y = 50;
        lines.forEach(line => {
            doc.text(line, 20, y);
            y += 6;
        });

        const splitDetails = doc.splitTextToSize(formData.details, 170);
        doc.text(splitDetails, 20, y);

        return doc;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Generate PDF for the backend (Telegram attachment)
            // Note: ID is not available yet, so it will show "PENDING"
            const pdfDoc = generatePDFDoc(null);
            // Get base64 string without the data URI prefix (data:application/pdf;base64,)
            const pdfBase64 = pdfDoc.output('datauristring').split(',')[1];

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, pdfBase64 }), // Send PDF data
            });

            // Parse response to get the ID
            const data = await response.json();

            if (!response.ok || !data.success) throw new Error("Transmission failed");

            setSuccessId(data.id || Math.floor(Math.random() * 1000));
            setIsSuccess(true);
        } catch (err) {
            console.error(err);
            setError("Connection timed out or failed. Please try again or email us manually.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCopy = () => {
        const text = `LOGICGRID OPS // PROTOCOL STATUS\n\nSTATUS:      RECEIVED\nPROTOCOL ID: #${successId}\nTIMESTAMP:   ${new Date().toLocaleTimeString()}`;
        navigator.clipboard.writeText(text);
    };

    const handleDownload = () => {
        const doc = generatePDFDoc(successId);
        doc.save(`LogicGrid_Protocol_${successId}.pdf`);
    };

    return (
        <section id="contact" className="py-24 bg-background border-t border-border">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Context & Timeline */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 rounded-sm px-3 py-1 text-xs font-mono tracking-widest uppercase mb-4">
                                INITIATE_PROTOCOL
                            </Badge>
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">Start a Build</h2>
                            <p className="text-muted-foreground text-xl leading-relaxed max-w-md">
                                Tell us what you’re trying to achieve. We’ll respond with a clear plan: scope, timeline, and options.
                            </p>
                        </div>

                        {/* Timeline Card */}
                        <div className="bg-muted/40 border border-border rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <MessageSquare className="w-5 h-5 text-violet-600 dark:text-violet-500" />
                                <h3 className="text-foreground font-bold text-lg">What happens next?</h3>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Connecting Line */}
                                <div className="absolute left-[15px] top-2 bottom-6 w-px bg-border" />

                                <div className="relative flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold text-violet-600 dark:text-violet-500 z-10 shrink-0">
                                        01
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold mb-1">Review</h4>
                                        <p className="text-muted-foreground text-sm">We analyze your requirements and current setup.</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold text-violet-600 dark:text-violet-500 z-10 shrink-0">
                                        02
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold mb-1">Proposal</h4>
                                        <p className="text-muted-foreground text-sm">You get a clear roadmap with fixed pricing options.</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-muted border border-border flex items-center justify-center text-xs font-bold text-violet-600 dark:text-violet-500 z-10 shrink-0">
                                        03
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold mb-1">Kickoff</h4>
                                        <p className="text-muted-foreground text-sm">We align on goals and start the build immediately.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
                        {/* Success State Overlay */}
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">Protocol Initiated</h3>
                                <p className="text-muted-foreground max-w-sm mb-8">
                                    Your build request has been logged in our command center. Expect a secure communication shortly.
                                </p>
                                <div className="bg-muted/50 rounded-lg p-6 w-full max-w-sm border border-border font-mono text-xs text-left space-y-3 mb-8">
                                    <div className="flex justify-between border-b border-border/50 pb-2">
                                        <span className="text-muted-foreground">STATUS</span>
                                        <span className="text-green-500 font-bold">RECEIVED</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">PROTOCOL ID</span>
                                        <span className="text-foreground font-bold">#{successId}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">TIMESTAMP</span>
                                        <span>{new Date().toLocaleTimeString()}</span>
                                    </div>

                                    <div className="pt-4 flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="h-8 flex-1 text-[10px] uppercase tracking-wider font-bold"
                                            onClick={handleCopy}
                                        >
                                            <Copy className="w-3 h-3 mr-2" /> Copy
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="h-8 flex-1 text-[10px] uppercase tracking-wider font-bold"
                                            onClick={handleDownload}
                                        >
                                            <Download className="w-3 h-3 mr-2" /> PDF
                                        </Button>
                                    </div>
                                </div>

                                <Button
                                    className=""
                                    variant="outline"
                                    onClick={() => {
                                        setIsSuccess(false);
                                        setFormData(initialFormState); // Clear all data
                                    }}
                                >
                                    Start New Protocol
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Name</label>
                                        <Input
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="business" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Business</label>
                                        <Input
                                            id="business"
                                            value={formData.business}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Website (Optional)"
                                            className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Email</label>
                                        <Input
                                            id="email"
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="work@company.com"
                                            className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Phone</label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1..."
                                            className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Service Needed</label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-muted/50 border border-border rounded-md h-12 px-3 text-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500 appearance-none text-sm font-medium"
                                        >
                                            <option>High-Performance Website</option>
                                            <option>System Automation</option>
                                            <option>AI Integration</option>
                                            <option>Systems Retainer</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 5L9 1" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="outcome" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Desired Outcome</label>
                                    <Input
                                        id="outcome"
                                        value={formData.outcome}
                                        onChange={handleChange}
                                        placeholder="e.g. More leads, less admin, better data..."
                                        className="bg-muted/50 border-border h-12 text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="details" className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Project Details</label>
                                    <Textarea
                                        id="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        placeholder="Tell us about the project..."
                                        className="bg-muted/50 border-border min-h-[140px] text-foreground placeholder:text-muted-foreground focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none p-4"
                                    />
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-md border border-red-500/20">
                                        {error}
                                    </div>
                                )}

                                <Button
                                    disabled={isSubmitting}
                                    className="w-full bg-violet-600 text-white hover:bg-violet-500 font-bold h-12 text-base shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] transition-all hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Transmitting...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Send Request <ArrowRight className="ml-2 w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
