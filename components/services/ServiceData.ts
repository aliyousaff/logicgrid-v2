import { Monitor, Cpu, Database, Bot, TrendingUp, ShieldCheck, Cloud, Link, Code2, Server, type LucideIcon } from "lucide-react";

export interface ServiceDetail {
    name: string;
    technical: string; // How we build it
    benefit: string;   // Client benefit
}

export interface ServiceCategory {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    services: ServiceDetail[];
}

export const SERVICE_DATA: ServiceCategory[] = [
    {
        id: "web",
        title: "Website & Conversion Systems",
        icon: Monitor,
        description: "High-performance interfaces designed to capture and convert.",
        services: [
            {
                name: "High-performance website development",
                technical: "Built on Next.js 14 with Server Components and edge caching.",
                benefit: "Instant page loads that boost SEO rank and keep visitors engaged."
            },
            {
                name: "Landing page development",
                technical: "Single-page architecture with Framer Motion scroll animations.",
                benefit: "High-impact presentation that guides visitors directly to the 'Buy' button."
            },
            {
                name: "Website redesign & modernization",
                technical: "Migration from legacy CMS (WP/Wix) to modern React framework.",
                benefit: "Remove security risks, plugin bloat, and slow loading times forever."
            },
            {
                name: "Mobile optimization",
                technical: "Responsive layouts focusing on touch targets and thumb zones.",
                benefit: "Capture the 60%+ of traffic that comes from phones."
            },
            {
                name: "Page speed optimization",
                technical: "Asset compression, code splitting, and Core Web Vitals audit.",
                benefit: "Stop losing customers who won't wait 3 seconds for your site to load."
            },
            {
                name: "Conversion optimization (CRO)",
                technical: "A/B testing implementation and heatmap analysis tools.",
                benefit: "Turn more of your existing traffic into paying customers."
            },
            {
                name: "Form design & lead capture flows",
                technical: "Multi-step logic with real-time validation and localized inputs.",
                benefit: "Reduce form abandonment and get higher quality lead data."
            },
            {
                name: "Multi-step funnels",
                technical: "State-managed wizard flows with drop-off tracking.",
                benefit: "Guide users through complex decisions without overwhelming them."
            },
            {
                name: "Appointment booking systems",
                technical: "Custom calendar sync (Cal.com/Calendly API) embedded natively.",
                benefit: "Let clients book time without the back-and-forth emails."
            },
            {
                name: "Quote request systems",
                technical: "Dynamic pricing calculators with instant PDF generation.",
                benefit: "Give prospects instant estimates while capturing their contact info."
            },
            {
                name: "WhatsApp / Email integrations",
                technical: "Direct API connections to Twilio/SendGrid for instant alerts.",
                benefit: "Respond to leads the second they submit a form."
            },
            {
                name: "Analytics & tracking setup",
                technical: "Server-side GTM tagging and custom event implementation.",
                benefit: "Know exactly which marketing channel is making you money."
            },
            {
                name: "Event-based conversion tracking",
                technical: "Granular user action logging (clicks, scrolls, video views).",
                benefit: "Understand user behavior beyond just 'page views'."
            },
            {
                name: "SEO-ready site structure",
                technical: "Semantic HTML5, automated sitemaps, and meta-data injection.",
                benefit: "Give Google exactly what it needs to rank you higher."
            },
            {
                name: "UI/UX restructuring",
                technical: "Information architecture audit and component library creation.",
                benefit: "Make your product intuitive so users stop churning."
            },
            {
                name: "Trust page design",
                technical: "Social proof aggregation and verified review schema markup.",
                benefit: "Prove your legitimacy instantly to skeptical cold traffic."
            },
            {
                name: "Headless CMS implementation",
                technical: "Sanity.io or Strapi setup decoupled from the frontend.",
                benefit: "Let your marketing team edit content without breaking the site."
            },
            {
                name: "Interactive 3D web experiences",
                technical: "Three.js / React Three Fiber integration for webGL assets.",
                benefit: "Create a 'wow' factor that competitors can't copy."
            }
        ]
    },
    {
        id: "automation",
        title: "Automation & Workflow Systems",
        icon: Cpu,
        description: "Removing manual friction from your daily operations.",
        services: [
            {
                name: "Lead routing automation",
                technical: "Webhook listeners that distribute leads based on logic rules.",
                benefit: "Never let a hot lead sit in an inbox for hours."
            },
            {
                name: "CRM setup & optimization",
                technical: "Custom field mapping, pipeline architecture, and data validation.",
                benefit: "A clean database that your sales team actually wants to use."
            },
            {
                name: "Internal task automation",
                technical: "Trigger-based creation of tasks in Asana/Jira/ClickUp.",
                benefit: "Stop manually copying to-do lists between tools."
            },
            {
                name: "Form → CRM pipelines",
                technical: "Real-time API sync between website inputs and your database.",
                benefit: "Zero manual data entry. Zero typos. Zero lost leads."
            },
            {
                name: "Email automation flows",
                technical: "Drip campaign logic based on user behavior triggers.",
                benefit: "Nurture leads automatically while you sleep."
            },
            {
                name: "Notification systems",
                technical: "Bot integration for Slack/Telegram/WhatsApp channels.",
                benefit: "Get alerted instantly when VIP clients take action."
            },
            {
                name: "Follow-up automation",
                technical: "If/Then logic to send reminders if no reply is received.",
                benefit: "Close more deals by being the most persistent vendor."
            },
            {
                name: "Document generation automation",
                technical: "Template-based PDF creation populated with database variables.",
                benefit: "Create contracts and invoices in 1 click, not 15 minutes."
            },
            {
                name: "File organization automation",
                technical: "Rules to auto-name and move files in G-Drive/Dropbox.",
                benefit: "Stop losing critical assets in a messy downloads folder."
            },
            {
                name: "Customer onboarding automation",
                technical: "Sequential delivery of welcome emails, forms, and logins.",
                benefit: "Give new clients a premium experience without manual effort."
            },
            {
                name: "Sales pipeline automation",
                technical: "Auto-move deal stages based on signed contracts or payments.",
                benefit: "Keep your revenue forecast accurate in real-time."
            },
            {
                name: "Internal approval flows",
                technical: "Request/Approve logic loops with slack notifications.",
                benefit: "Streamline sign-offs without chasing managers."
            },
            {
                name: "Status tracking dashboards",
                technical: "Aggregated views of project states from multiple tools.",
                benefit: "See the health of your entire operation at a glance."
            },
            {
                name: "ERP Integration",
                technical: "Bi-directional sync between Netsuite/SAP and other tools.",
                benefit: "Ensure your finance and operations teams see the same numbers."
            },
            {
                name: "Payment processing automation",
                technical: "Stripe Connect or Wise Webhooks for auto-reconciliation.",
                benefit: "Get paid faster and stop updating spreadsheets manually."
            }
        ]
    },
    {
        id: "data",
        title: "Data & Internal Tools",
        icon: Database,
        description: "Custom dashboards and portals to organize your business intelligence.",
        services: [
            {
                name: "Custom dashboards",
                technical: "React-based visualization using Recharts/Tremor libraries.",
                benefit: "Visual proof of your business metrics for investors/partners."
            },
            {
                name: "Internal portals",
                technical: "Secure, authenticated web apps for employee/vendor use.",
                benefit: "Centralize your company resources behind one login."
            },
            {
                name: "Admin panels",
                technical: "CRUD interfaces built on Retool or custom React Admin.",
                benefit: "Give your team superpowers to manage app data safely."
            },
            {
                name: "Data collection systems",
                technical: "High-volume ingest endpoints and structured storage.",
                benefit: "Capture every signal your business generates for future analysis."
            },
            {
                name: "Data cleanup & structuring",
                technical: "Python/Pandas scripts to normalize messy datasets.",
                benefit: "Turn garbage data into actionable insights."
            },
            {
                name: "Spreadsheet automation",
                technical: "Google Apps Script or Excel VBA macros for complex calcs.",
                benefit: "Eliminate the 'spreadsheet errors' costing you money."
            },
            {
                name: "Reporting systems",
                technical: "Scheduled queries that email PDF reports to stakeholders.",
                benefit: "Monday morning reports on your desk without lifting a finger."
            },
            {
                name: "KPI tracking tools",
                technical: "Real-time goal tracking against historic baselines.",
                benefit: "Keep your team focused on the numbers that matter."
            },
            {
                name: "Client management systems",
                technical: "Custom lightweight CRM focused on your specific workflow.",
                benefit: "Manage clients your way, not how Salesforce forces you to."
            },
            {
                name: "Inventory resource trackers",
                technical: "Barcode/QR based logging systems connected to DB.",
                benefit: "Stop wondering where your physical assets are."
            },
            {
                name: "Internal performance monitors",
                technical: "Uptime and response time logging for internal APIs.",
                benefit: "Know if your systems are down before your users do."
            },
            {
                name: "Database migration services",
                technical: "Zero-downtime ETL pipelines to move data to new homes.",
                benefit: "Upgrade your infrastructure without pausing business."
            },
            {
                name: "Data warehousing setup",
                technical: "Snowflake/BigQuery configuration for large-scale analysis.",
                benefit: "Prepare your business for AI by centralizing all history."
            },
            {
                name: "Real-time analytics feeds",
                technical: "Websocket connections pushing live data to frontends.",
                benefit: "Watch your business happen live, not on a delay."
            }
        ]
    },
    {
        id: "ai",
        title: "AI & Intelligent Systems",
        icon: Bot,
        description: "Practical AI modules that solve specific reasoning tasks.",
        services: [
            {
                name: "Knowledge assistants (RAG)",
                technical: "Vector databases (Pinecone) + LLM context retrieval.",
                benefit: "Instant answers from your own documents and wikis."
            },
            {
                name: "Internal search engines",
                technical: "Semantic search functionality over unstructured data.",
                benefit: "Find that one contract or email from 3 years ago instantly."
            },
            {
                name: "Support assistants",
                technical: "Fine-tuned chatbots trained on your help center.",
                benefit: "Deflect 80% of repetitive tickets automatically."
            },
            {
                name: "Intake & qualification agents",
                technical: "Conversational forms that score leads in real-time.",
                benefit: "Only talk to prospects who are actually qualified."
            },
            {
                name: "Decision-support tools",
                technical: "AI analysis of complex scenarios providing options.",
                benefit: "Make faster, data-backed decisions with AI recommendations."
            },
            {
                name: "Document understanding systems",
                technical: "OCR + LLM parsing of invoices, receipts, and forms.",
                benefit: "Automate data entry from PDFs and images."
            },
            {
                name: "Customer query systems",
                technical: "Auto-drafting of email responses based on intent.",
                benefit: "Reduce response time from hours to minutes."
            },
            {
                name: "Policy / SOP retrieval systems",
                technical: "Chat interface for your employee handbook.",
                benefit: "New hires get answers without interrupting seniors."
            },
            {
                name: "Smart routing systems",
                technical: "AI classification of incoming tickets/emails.",
                benefit: "Ensure every request lands on the right desk immediately."
            },
            {
                name: "Data interpretation tools",
                technical: "Natural language interfaces for SQL databases.",
                benefit: "Ask questions about your data in plain English."
            },
            {
                name: "Automated content generation",
                technical: "Programmatic SEO content pipelines with human review.",
                benefit: "Scale your content marketing output 10x."
            },
            {
                name: "Voice agent integration",
                technical: "Twilio + OpenAI Realtime API for phone handling.",
                benefit: "Handle phone support 24/7 without a call center."
            },
            {
                name: "Computer vision systems",
                technical: "Object detection models for quality control or analysis.",
                benefit: "Automate visual inspections and monitoring."
            }
        ]
    },
    {
        id: "cloud",
        title: "Cloud & DevOps Infrastructure",
        icon: Cloud,
        description: "Scalable backend architecture and automated deployment pipelines.",
        services: [
            {
                name: "AWS / Azure / GCP Architecture",
                technical: "Cloud-native design using well-architected framework.",
                benefit: "Infrastructure that auto-scales with your growth."
            },
            {
                name: "Kubernetes Cluster Management",
                technical: "EKS/AKS setup with Helm charts updates.",
                benefit: "Run containerized apps with enterprise-grade reliability."
            },
            {
                name: "Docker Containerization",
                technical: "Creating lightweight, portable runtime environments.",
                benefit: "Eliminate 'it works on my machine' bugs forever."
            },
            {
                name: "CI/CD Pipeline Setup",
                technical: "GitHub Actions / GitLab CI automated workflows.",
                benefit: "Deploy code changes confidently multiple times a day."
            },
            {
                name: "Serverless Architecture Design",
                technical: "Lambda/Functions implementation to reduce idle cost.",
                benefit: "Pay only for the compute you actually use."
            },
            {
                name: "Infrastructure as Code",
                technical: "Terraform/Pulumi scripts to version control infrastructure.",
                benefit: "Recreate your entire server stack in minutes, not days."
            },
            {
                name: "Auto-scaling configuration",
                technical: "Load balancer rules based on CPU/RAM metrics.",
                benefit: "Handle traffic spikes without crashing."
            },
            {
                name: "Multi-region deployment",
                technical: "Geographically distributed serving for low latency.",
                benefit: "Fast access for users anywhere in the world."
            },
            {
                name: "Cloud cost optimization",
                technical: "Audit of unused resources and reserved instance planning.",
                benefit: "Slash your AWS bill without reducing performance."
            },
            {
                name: "Edge computing implementation",
                technical: "Vercel / Cloudflare Workers logic at the edge.",
                benefit: "Ultra-low latency logic execution."
            },
            {
                name: "Database clustering & sharding",
                technical: "Horizontally scalable DB architecture.",
                benefit: "Store infinite data without performance degradation."
            }
        ]
    },
    {
        id: "api",
        title: "API & Integration Systems",
        icon: Link,
        description: "Connecting disparate tools into a unified ecosystem.",
        services: [
            {
                name: "Custom API Development",
                technical: "REST or GraphQL endpoints with strict typing.",
                benefit: "Build your own platform that others can connect to."
            },
            {
                name: "Legacy System Integration",
                technical: "Wrapper APIs around mainframe/old DBs.",
                benefit: "Connect modern apps to your unmovable old systems."
            },
            {
                name: "Third-party webhook handlers",
                technical: "Secure listeners to capture external events.",
                benefit: "React instantly when things happen in other apps."
            },
            {
                name: "Payment Gateway Integration",
                technical: "Secure tokenized payment flows (PCI Compliant).",
                benefit: "Accept money globally with any provider."
            },
            {
                name: "Inventory Syncing Middleware",
                technical: "Real-time stock synchronization scripts.",
                benefit: "Never oversell product you don't have."
            },
            {
                name: "Auth0 / SSO Implementation",
                technical: "Enterprise identity provider integration.",
                benefit: "Secure, single-click logins for your enterprise clients."
            },
            {
                name: "Public API Documentation",
                technical: "Swagger/OpenAPI spec generation.",
                benefit: "Let developers easily build on top of your product."
            },
            {
                name: "Rate limiting & Throttling",
                technical: "Redis-backed request counting middleware.",
                benefit: "Protect your servers from abuse and spam."
            },
            {
                name: "API Security & Key Management",
                technical: "Rolling API key architecture and scopes.",
                benefit: "Ensure only authorized partners access your data."
            }
        ]
    },
    {
        id: "web3",
        title: "Blockchain & Web3",
        icon: Code2,
        description: "Decentralized applications and smart contract logic.",
        services: [
            {
                name: "Smart Contract Development",
                technical: "Solidity contracts with rigorous unit testing.",
                benefit: "Immutable, trustless business logic on-chain."
            },
            {
                name: "dApp Frontend Interfaces",
                technical: "Web3.js / Ethers.js integration with React.",
                benefit: "User-friendly interfaces for complex blockchain interactions."
            },
            {
                name: "Wallet Integration",
                technical: "Connect with MetaMask, Rainbow, WalletConnect.",
                benefit: "Allow users to login with their crypto wallets."
            },
            {
                name: "Token Gating Systems",
                technical: "NFT ownership verification logic.",
                benefit: "Create exclusive communities for token holders."
            },
            {
                name: "NFT Minting Pipelines",
                technical: "Lazy minting or bulk generation scripts.",
                benefit: "Launch your NFT collection smoothly."
            },
            {
                name: "On-chain Data Indexing",
                technical: "The Graph subgraphs for querying blockchain data.",
                benefit: "Fast, queryable access to decentralized ledger history."
            },
            {
                name: "DAO Governance Tooling",
                technical: "Voting snapshots and proposal interfaces.",
                benefit: "Manage decentralized organizations efficiently."
            },
            {
                name: "Web3 Auth integration",
                technical: "SIWE (Sign-in with Ethereum) implementation.",
                benefit: "Cryptographically secure authentication."
            }
        ]
    },
    {
        id: "growth",
        title: "Growth Infrastructure",
        icon: TrendingUp,
        description: "Systems designed purely to increase revenue velocity.",
        services: [
            {
                name: "Lead generation funnels",
                technical: "High-velocity landing pages coupled with magnets.",
                benefit: "Fill your pipeline with fresh prospects daily."
            },
            {
                name: "Outreach infrastructure",
                technical: "Domain warming and multi-inbox sending setup.",
                benefit: "Send thousands of emails without landing in spam."
            },
            {
                name: "Cold email systems",
                technical: "Automated personalization and follow-up engines.",
                benefit: "Start conversations with ideal clients at scale."
            },
            {
                name: "CRM growth pipelines",
                technical: "Automated attribution and deal scoring.",
                benefit: "Focus sales effort only on the most likely buyers."
            },
            {
                name: "Retargeting infrastructure",
                technical: "Pixel implementation and audience creation.",
                benefit: "Bring back the 98% of visitors who didn't buy."
            },
            {
                name: "Campaign tracking systems",
                technical: "UTM parameter standardization and reporting.",
                benefit: "Know exactly which ad dollar converts."
            },
            {
                name: "Conversion attribution systems",
                technical: "Multi-touch attribution modeling.",
                benefit: "Understand the full customer journey."
            },
            {
                name: "Marketing automation",
                technical: "HubSpot/Marketo architecting.",
                benefit: "Comprehensive lifecycle marketing on autopilot."
            },
            {
                name: "Customer segmentation systems",
                technical: "RFM analysis and automated tagging.",
                benefit: "Send the right message to the right customer."
            },
            {
                name: "AB Testing framework setup",
                technical: "Statistical significance calculation tooling.",
                benefit: "Scientifically improve your conversion rates."
            },
            {
                name: "Affiliate tracking systems",
                technical: "Referral link generation and payout logic.",
                benefit: "Turn your customers into your sales team."
            }
        ]
    },
    {
        id: "security",
        title: "Security & Optimization",
        icon: ShieldCheck,
        description: "Hardening your digital assets against threats and downtime.",
        services: [
            {
                name: "Website stability monitoring",
                technical: "Synthetic uptime checks alerting via SMS.",
                benefit: "Sleep well knowing your site is online."
            },
            {
                name: "Load optimization",
                technical: "CDN caching strategies and database tuning.",
                benefit: "Sites that withstand viral traffic spikes."
            },
            {
                name: "Hosting optimization",
                technical: "Migration to modern, faster infrastructure.",
                benefit: "Better performance for less money."
            },
            {
                name: "Deployment optimization",
                technical: "Zero-downtime release pipelines.",
                benefit: "Ship new features without breaking the site."
            },
            {
                name: "Performance audits",
                technical: "Deep-dive analysis of bottleneck tracing.",
                benefit: "Identify exactly what is slowing you down."
            },
            {
                name: "Security hardening",
                technical: "Firewall rules, headers, and dependency audits.",
                benefit: "Protect your business from hacks and leaks."
            },
            {
                name: "System documentation",
                technical: "Auto-generated docs from codebases.",
                benefit: "Never lose knowledge when a developer leaves."
            },
            {
                name: "System handover frameworks",
                technical: "Training sessions and recorded walkthroughs.",
                benefit: "Full independence to run your own systems."
            },
            {
                name: "Penetration testing coordination",
                technical: "Vulnerability scanning and remediation.",
                benefit: "Find holes in your security before hackers do."
            },
            {
                name: "Compliance auditing",
                technical: "GDPR / HIPAA data handling verification.",
                benefit: "Avoid massive fines and legal trouble."
            },
            {
                name: "DDoS protection setup",
                technical: "Cloudflare enterprise rules configuration.",
                benefit: "Stay online even under attack."
            },
            {
                name: "Automated backup systems",
                technical: "Encrypted, off-site snapshots.",
                benefit: "Total disaster recovery in minutes."
            }
        ]
    }
];
