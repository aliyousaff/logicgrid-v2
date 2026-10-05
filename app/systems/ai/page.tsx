import { ServiceDetail } from "@/components/services/ServiceDetail";
import { pageMetadata } from "@/lib/seo";

const introduction = "Connect AI to your business information and workflows. LogicGrid Ops builds knowledge assistants, document retrieval systems and practical AI integrations for businesses in Pakistan and internationally.";
export const metadata = pageMetadata("AI Integration & Knowledge Assistants", "Build knowledge assistants, document retrieval and practical AI integrations connected to your business tools with LogicGrid Ops.", "/systems/ai");

export default function AIPage() {
  return <ServiceDetail path="/systems/ai" title="AI Integration & Knowledge Assistants" introduction={introduction}
    sections={[
      { heading: "Help people find answers in your own information", text: "A knowledge assistant can search an approved collection of documents and use the retrieved material to help answer a question. This approach, often called retrieval-augmented generation or RAG, is useful for internal knowledge, product documentation and support material. We define which sources are available, who can access them and how the assistant should respond when it cannot find enough evidence.", items: ["Internal knowledge and SOP assistants", "Document search and source references", "Product information and support assistants", "Approved knowledge-base retrieval"] },
      { heading: "Connect the assistant to a real workflow", text: "An AI feature is more useful when it sits where your team already works. Depending on the scope, an integration can help summarise an enquiry, organise information from a document or prepare a draft for staff to review. We agree on what the system may read, which actions it may perform and which decisions must stay with a person. Tool access and approval rules are part of the design.", items: ["Enquiry summarisation and qualification support", "Document classification and information extraction", "AI features in websites and internal tools", "Draft responses with human review"] },
      { heading: "Evaluate the answers before expanding the system", text: "We start with a defined use case and representative questions or documents. The agreed scope can include source attribution, access controls, evaluation examples, usage limits and a fallback when the system is uncertain. AI outputs can still be wrong, so the workflow should reflect the consequences of an error. We identify model-provider charges, data handling requirements and maintenance needs before deployment." },
    ]}
    questions={[
      { question: "Does a RAG assistant train a new model on our files?", answer: "Usually it retrieves relevant information from an approved document collection and provides that information to a model when a question is asked. Fine-tuning is a different approach. We explain the selected architecture and how your data is handled during scoping." },
      { question: "Can you guarantee every answer is correct?", answer: "No. Retrieval, evaluation, source references and review steps can improve reliability, but they do not eliminate mistakes. We design the use case with appropriate boundaries and a way to escalate uncertain answers." },
      { question: "Can the integration use our own accounts?", answer: "Where the selected platform supports it, provider accounts and API access can be owned by your business. We identify usage costs, permissions and operating instructions as part of the handover." },
    ]} />;
}
