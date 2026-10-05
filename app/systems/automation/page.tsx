import { ServiceDetail } from "@/components/services/ServiceDetail";
import { pageMetadata } from "@/lib/seo";

const introduction = "Connect your enquiries, CRM, email and internal tasks so information moves reliably between the tools your business uses. LogicGrid Ops builds business automation workflows for teams in Pakistan and overseas.";
export const metadata = pageMetadata("Business Automation & CRM Integration", "Connect enquiries, CRM, email and internal tasks with business process automation from LogicGrid Ops. Scoped projects for Pakistan and overseas clients.", "/systems/automation");

export default function AutomationPage() {
  return <ServiceDetail path="/systems/automation" title="Business Automation & CRM Integration" introduction={introduction}
    sections={[
      { heading: "Give every enquiry a clear next step", text: "An enquiry form is only the beginning. We can connect it to a CRM or a structured record, route it to the right person and trigger an acknowledgement or follow-up task. Before building the workflow, we agree on the fields, routing rules and what should happen when an enquiry is incomplete or a connected service is unavailable.", items: ["Form-to-CRM workflows and lead routing", "Email notifications and follow-up tasks", "Customer onboarding and approval steps", "Quote requests and appointment workflows"] },
      { heading: "Reduce repeated copying between systems", text: "Teams often copy the same information into spreadsheets, emails and dashboards. We map where that information starts, who needs it and which tool should hold the authoritative record. The integration is then designed around your existing tools and the permissions they provide. We can also build a small internal interface when a workflow needs a clear place for staff to review or approve work.", items: ["API integrations and webhook connections", "Spreadsheet and document generation workflows", "Status dashboards and reporting", "Scheduled tasks and data synchronisation"] },
      { heading: "Build for the exceptions, then hand it over", text: "A useful automation needs to handle more than the successful path. The agreed scope can include validation, duplicate handling, retries, logs and notifications when a task needs attention. We test the workflow with representative inputs and document its configuration, access and dependencies. You should know what runs automatically, what still needs a person and how to pause or change it." },
    ]}
    questions={[
      { question: "Can you work with our existing CRM?", answer: "We first check the CRM's API, webhook support, subscription requirements and access permissions. If it supports the required connection, we can scope an integration around it. Compatibility is confirmed before you commit to a build." },
      { question: "Do we have to automate everything at once?", answer: "No. A single workflow, such as routing website enquiries into a CRM, can be a useful first project. Additional workflows can be added after the initial connection has been tested and your team is comfortable using it." },
      { question: "Are third-party subscriptions included?", answer: "Any required subscriptions, usage charges and hosting costs are identified separately in the proposal. Accounts and access can remain under your ownership, with documentation provided at handover." },
    ]} />;
}
