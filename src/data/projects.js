// Detailed project data for the AI portfolio
export const projects = {
  'llm-eval-harness': {
    id: 'llm-eval-harness',
    title: 'LLM Evaluation & Safety Framework',
    subtitle: 'Building Trust Through Rigorous Testing',
    status: 'ship',
    timeline: 'Q2-Q4 2024',
    team: 'Cross-functional team of 8 (ML Engineers, Safety Researchers, DevOps)',
    
    tldr: {
      challenge: 'AI models were being deployed without comprehensive safety testing, creating potential risks for users and business liability.',
      solution: 'Built an automated evaluation framework that tests models across 47 safety dimensions before production deployment.',
      impact: 'Reduced safety incidents by 94% and accelerated deployment cycles by 40% while maintaining rigorous safety standards.'
    },
    
    metrics: [
      { label: 'Safety Incident Reduction', value: '94%', trend: 'positive' },
      { label: 'Deployment Speed Increase', value: '40%', trend: 'positive' },
      { label: 'Test Coverage', value: '47 dimensions', trend: 'neutral' },
      { label: 'False Positive Rate', value: '<2%', trend: 'positive' }
    ],
    
    story: {
      context: `When I joined the AI safety team, we had a problem that kept executives up at night. Our language models were powerful, but our safety testing was manual, inconsistent, and frankly, not keeping pace with our deployment ambitions. We'd had three near-misses in six months where models almost went live with concerning behaviors that could have damaged user trust and created regulatory headaches.

The engineering team was brilliant at building models, but they were drowning in ad-hoc safety checks. Product managers were frustrated by unpredictable deployment timelines. Leadership wanted faster innovation but couldn't accept the risk of a public safety failure. Something had to change.`,
      
      challenge: `The core challenge wasn't technical—it was organizational. We had safety knowledge scattered across different teams, inconsistent evaluation criteria, and no systematic way to make go/no-go decisions. Each model evaluation felt like starting from scratch.

I spent two weeks shadowing our ML engineers and safety researchers, documenting every step of their evaluation process. What I found was a patchwork of brilliant individual insights with no systematic framework to capture and scale that expertise.`,
      
      approach: `My approach was to treat this like any other product development challenge: start with user needs, define clear success metrics, and build something that actually gets used. The "users" in this case were our ML engineers, safety researchers, and ultimately, the millions of people who would interact with our models.

I worked with the team to codify our safety knowledge into 47 distinct evaluation dimensions, ranging from obvious concerns like harmful content generation to subtle issues like demographic bias in reasoning tasks. Each dimension got clear pass/fail criteria, automated test suites, and escalation procedures for edge cases.`,
      
      implementation: `The implementation took four months of intense collaboration. We built the framework on top of existing ML infrastructure, ensuring it could scale with our model development pipeline. The key insight was making safety evaluation feel like a natural part of the development process, not an external audit.

We started with a pilot program on three model variants, gradually expanding to cover all production deployments. The framework automatically generates comprehensive safety reports, flags potential issues, and provides clear recommendations for remediation.`,
      
      results: `The results exceeded everyone's expectations. Safety incidents dropped by 94% in the first six months. More surprisingly, deployment cycles actually accelerated by 40% because teams had confidence in the systematic evaluation process.

The framework has now evaluated over 200 model variants and caught 23 critical safety issues before they reached users. It's become the gold standard for AI safety evaluation in our organization and has been adopted by two other companies in our industry.`
    },
    
    downloads: [
      { name: 'Safety Framework Case Study', type: 'PDF', size: '2.3 MB' },
      { name: 'Implementation Playbook', type: 'PDF', size: '1.8 MB' },
      { name: 'ROI Analysis', type: 'XLSX', size: '456 KB' }
    ]
  },
  
  'agent-memory-benchmark': {
    id: 'agent-memory-benchmark',
    title: 'AI Agent Memory System',
    subtitle: 'Enabling Long-Term Context Understanding',
    status: 'ship',
    timeline: 'Q1-Q3 2024',
    team: 'Product-led initiative with 6 engineers and 2 researchers',
    
    tldr: {
      challenge: 'AI agents lost context in long conversations, making them unreliable for complex, multi-session tasks.',
      solution: 'Developed a dual-memory architecture combining episodic and semantic memory with intelligent retrieval.',
      impact: 'Improved task completion rates by 73% for conversations longer than 50 exchanges while keeping response times under 4 seconds.'
    },
    
    metrics: [
      { label: 'Task Completion Rate', value: '+73%', trend: 'positive' },
      { label: 'Context Retention', value: '95%', trend: 'positive' },
      { label: 'Response Time', value: '<4s', trend: 'positive' },
      { label: 'Memory Efficiency', value: '60% reduction', trend: 'positive' }
    ],
    
    story: {
      context: `The problem hit me during a user interview. A customer was trying to use our AI assistant to plan a complex business trip spanning three cities, multiple meetings, and various constraints. After 30 minutes of back-and-forth, the AI essentially forgot everything from the beginning of the conversation and started asking the same questions again.

The user's frustration was palpable: "It's like talking to someone with amnesia." That moment crystallized the core issue—our AI agents were brilliant in short bursts but hopeless at maintaining context over extended interactions.`,
      
      challenge: `The technical challenge was fascinating: how do you give an AI system memory that works like human memory? Not perfect recall of everything, but intelligent retention of what matters, when it matters.

Our existing approach was essentially a sliding window—keep the last N messages and forget everything else. This worked for simple Q&A but failed spectacularly for complex, multi-step tasks that required building on previous context.`,
      
      approach: `I drew inspiration from cognitive psychology research on human memory systems. Humans have episodic memory (specific events and experiences) and semantic memory (general knowledge and concepts). What if we could give AI agents something similar?

Working with our research team, we designed a dual-memory architecture. Episodic memory captured specific conversation events with rich context. Semantic memory extracted and stored general patterns and preferences. The key innovation was the retrieval system—not just storing information, but knowing when and how to recall it.`,
      
      implementation: `The implementation required careful balance between memory capacity and retrieval speed. We couldn't store everything, so we developed intelligent compression algorithms that preserved essential context while discarding redundant information.

The system learns what to remember based on user feedback and task outcomes. If a user corrects the AI or expresses frustration, that becomes a strong signal to remember the context that led to the error.`,
      
      results: `The results were transformative. Task completion rates for complex, multi-session conversations improved by 73%. Users started trusting the AI with more sophisticated requests because they knew it would remember their preferences and previous decisions.

Perhaps most importantly, user satisfaction scores increased by 45%. People began describing interactions with our AI as "having a conversation with someone who actually listens"—exactly the experience we were aiming for.`
    },
    
    downloads: [
      { name: 'Memory Architecture Deep Dive', type: 'PDF', size: '3.1 MB' },
      { name: 'User Research Findings', type: 'PDF', size: '2.7 MB' },
      { name: 'Performance Benchmarks', type: 'XLSX', size: '892 KB' }
    ]
  },
  
  'sft-dpo-mini': {
    id: 'sft-dpo-mini',
    title: 'Model Training Optimization',
    subtitle: 'Balancing Quality and Cost in AI Development',
    status: 'hold',
    timeline: 'Q3 2024 - Ongoing',
    team: 'ML Engineering team of 12 with product oversight',
    
    tldr: {
      challenge: 'Model fine-tuning costs were spiraling out of control while quality improvements plateaued, threatening project viability.',
      solution: 'Developed a systematic approach to training optimization using staged fine-tuning and cost-aware quality metrics.',
      impact: 'Currently achieving 85% of quality improvements at 40% of the cost, with clear framework for future optimization decisions.'
    },
    
    metrics: [
      { label: 'Training Cost Reduction', value: '60%', trend: 'positive' },
      { label: 'Quality Retention', value: '85%', trend: 'neutral' },
      { label: 'Training Time', value: '-45%', trend: 'positive' },
      { label: 'Resource Utilization', value: '92%', trend: 'positive' }
    ],
    
    story: {
      context: `This project started with a budget crisis. Our model training costs had grown 300% in six months, but our quality improvements were showing diminishing returns. The CFO was asking hard questions about ROI, and the engineering team was frustrated by resource constraints.

I was brought in to figure out how to make our training process more efficient without sacrificing the quality that made our models competitive. It was a classic product management challenge: optimize for multiple competing objectives with limited resources.`,
      
      challenge: `The core challenge was that our training approach was essentially "throw more compute at it until it works better." This worked when we had unlimited budgets, but it wasn't sustainable as we scaled.

We needed a systematic way to understand the relationship between training investment and quality outcomes. More importantly, we needed to define what "good enough" meant for different use cases—not every model needed to be perfect at everything.`,
      
      approach: `I approached this like a classic optimization problem, but with a product lens. First, we segmented our use cases by quality requirements and cost sensitivity. A customer service chatbot needed different optimization than a creative writing assistant.

We then developed a staged training approach: start with supervised fine-tuning (SFT) to get basic competency, then use direct preference optimization (DPO) only where it provided clear value. The key insight was treating training like a product development pipeline with clear gates and success criteria.`,
      
      implementation: `The implementation involved building new tooling to track quality-cost tradeoffs in real-time. We created automated stopping criteria based on marginal improvement rates and cost thresholds.

The most innovative aspect was our "training portfolio" approach—instead of optimizing each model individually, we optimized across our entire model suite, sharing learnings and computational resources where possible.`,
      
      results: `We're currently achieving 85% of our previous quality improvements at 40% of the cost. More importantly, we have a systematic framework for making training decisions based on business value rather than just technical metrics.

The project is marked as "hold" not because it failed, but because we're taking time to validate our approach across more use cases before full deployment. Early results are promising, and we expect to resume full implementation in Q1 2025.`
    },
    
    downloads: [
      { name: 'Training Optimization Framework', type: 'PDF', size: '2.9 MB' },
      { name: 'Cost-Quality Analysis', type: 'XLSX', size: '1.2 MB' },
      { name: 'Implementation Roadmap', type: 'PDF', size: '1.5 MB' }
    ]
  }
}

export const getProject = (id) => projects[id]
export const getAllProjects = () => Object.values(projects)



// Agentic AI Projects
export const agenticProjects = {
  'autonomous-research-agent': {
    id: 'autonomous-research-agent',
    title: 'Autonomous Research Agent',
    subtitle: 'Self-Directed Information Discovery and Analysis',
    status: 'ship',
    timeline: 'Q1-Q2 2024',
    team: 'Solo product initiative with 4 ML engineers',
    
    tldr: {
      challenge: 'Research tasks required hours of manual information gathering and synthesis, creating bottlenecks for decision-making.',
      solution: 'Built an autonomous agent that can independently research topics, synthesize findings, and generate comprehensive reports with source verification.',
      impact: 'Reduced research time by 85% while improving information quality and coverage. Now handles 200+ research requests monthly.'
    },
    
    metrics: [
      { label: 'Research Time Reduction', value: '85%', trend: 'positive' },
      { label: 'Source Accuracy', value: '96%', trend: 'positive' },
      { label: 'Monthly Requests Handled', value: '200+', trend: 'positive' },
      { label: 'User Satisfaction', value: '4.8/5', trend: 'positive' }
    ],
    
    story: {
      context: `The idea came from watching our strategy team struggle with a market analysis that should have taken days but stretched into weeks. They were drowning in information—industry reports, competitor analysis, regulatory changes, customer feedback—but had no systematic way to process and synthesize it all.

I realized this wasn't just a strategy team problem. Across the organization, smart people were spending 60-70% of their time gathering information rather than making decisions based on it. We needed an AI that could think like a researcher, not just search like a search engine.`,
      
      challenge: `The technical challenge was fascinating: how do you build an AI that can formulate its own research questions, pursue multiple lines of inquiry, and synthesize findings without human guidance? Most AI tools are reactive—they respond to specific queries. We needed something proactive that could explore a topic comprehensively.

The bigger challenge was trust. How do you convince executives to rely on AI-generated research for critical business decisions? The system had to be not just accurate, but transparent about its reasoning and sources.`,
      
      approach: `I designed the agent around the research methodology I'd learned in graduate school: start with broad exploration, identify key themes, dive deep into promising areas, and synthesize findings into actionable insights.

The agent uses a multi-stage approach: first, it generates a comprehensive research plan based on the initial query. Then it executes that plan autonomously, following leads, cross-referencing sources, and building a knowledge graph of interconnected insights. Finally, it synthesizes everything into a structured report with clear recommendations.`,
      
      implementation: `The implementation required building several novel capabilities. The agent needed to evaluate source credibility, detect conflicting information, and know when to dig deeper versus when to move on. We built custom tools for web research, document analysis, and expert interview synthesis.

The key innovation was the "research memory" system—the agent maintains context across multiple research sessions, building on previous findings and avoiding redundant work. It can pick up a research thread weeks later exactly where it left off.`,
      
      results: `The results exceeded our wildest expectations. Research time dropped by 85%, but more importantly, the quality improved dramatically. The agent consistently finds sources and connections that human researchers miss, simply because it can process vastly more information without fatigue.

The system now handles over 200 research requests monthly, from competitive analysis to regulatory impact assessments. It's become the go-to tool for any strategic decision requiring comprehensive information synthesis.`
    },
    
    downloads: [
      { name: 'Research Agent Architecture', type: 'PDF', size: '3.4 MB' },
      { name: 'Implementation Case Studies', type: 'PDF', size: '2.8 MB' },
      { name: 'ROI & Performance Metrics', type: 'XLSX', size: '678 KB' }
    ]
  },
  
  'multi-agent-orchestration': {
    id: 'multi-agent-orchestration',
    title: 'Multi-Agent Orchestration Platform',
    subtitle: 'Coordinating Specialized AI Agents for Complex Tasks',
    status: 'ship',
    timeline: 'Q2-Q4 2024',
    team: 'Cross-functional team of 10 (ML, Backend, Frontend, DevOps)',
    
    tldr: {
      challenge: 'Complex business processes required multiple AI capabilities working together, but existing solutions were monolithic and inflexible.',
      solution: 'Created an orchestration platform where specialized AI agents collaborate on complex tasks, each contributing their unique expertise.',
      impact: 'Improved task completion rates by 67% for complex workflows while reducing development time for new AI applications by 50%.'
    },
    
    metrics: [
      { label: 'Task Completion Rate', value: '+67%', trend: 'positive' },
      { label: 'Development Time Reduction', value: '50%', trend: 'positive' },
      { label: 'Agent Coordination Accuracy', value: '94%', trend: 'positive' },
      { label: 'System Uptime', value: '99.7%', trend: 'positive' }
    ],
    
    story: {
      context: `The inspiration came from watching a customer support case that should have been simple but required five different AI tools and three human handoffs. A customer wanted to modify their subscription, which triggered billing calculations, inventory checks, personalization updates, and compliance verification.

Each step worked perfectly in isolation, but the handoffs were clunky and error-prone. I realized we were building AI like we built software in the 1990s—monolithic applications that tried to do everything. What if we could build AI more like modern microservices?`,
      
      challenge: `The core challenge was coordination. How do you get multiple AI agents to work together without stepping on each other? How does one agent know when another has completed its task? How do you handle failures and retries in a distributed AI system?

Traditional workflow engines weren't designed for AI agents that might take unpredictable amounts of time or produce unexpected outputs. We needed something more flexible and intelligent.`,
      
      approach: `I drew inspiration from both software architecture and organizational psychology. The platform treats each AI agent like a specialist on a team—they have clear roles, communicate through structured protocols, and can escalate issues when they're stuck.

The orchestration layer acts like a smart project manager, understanding task dependencies, monitoring progress, and dynamically adjusting workflows based on intermediate results. Agents can request help from other agents, negotiate resource allocation, and even spawn new agents for specialized subtasks.`,
      
      implementation: `The implementation required solving several novel problems. We built a communication protocol that lets agents share context without overwhelming each other with information. We created a resource management system that prevents agents from competing for the same computational resources.

The most innovative aspect is the "agent marketplace"—new agents can register their capabilities, and the orchestrator automatically discovers how to incorporate them into existing workflows. This makes the system incredibly extensible.`,
      
      results: `The platform has transformed how we build AI applications. Task completion rates for complex workflows improved by 67%, but the real win is development velocity. New AI applications that used to take months now take weeks because we can compose them from existing agents.

We've deployed 47 different agent types, from document analysis specialists to customer communication experts. The platform handles over 10,000 orchestrated tasks daily, with 99.7% uptime despite the complexity of coordinating multiple AI systems.`
    },
    
    downloads: [
      { name: 'Orchestration Platform Overview', type: 'PDF', size: '4.1 MB' },
      { name: 'Agent Development Guide', type: 'PDF', size: '3.2 MB' },
      { name: 'Performance Benchmarks', type: 'XLSX', size: '1.1 MB' }
    ]
  },
  
  'local-llm-optimization': {
    id: 'local-llm-optimization',
    title: 'Local LLM Optimization Suite',
    subtitle: 'Running Enterprise AI Locally with Production Performance',
    status: 'ship',
    timeline: 'Q3 2024 - Ongoing',
    team: 'Technical product lead with 6 ML engineers and 2 infrastructure specialists',
    
    tldr: {
      challenge: 'Enterprise customers needed AI capabilities but couldn\'t send sensitive data to external APIs due to compliance and security requirements.',
      solution: 'Developed an optimization suite that enables production-grade LLM deployment on local infrastructure with 90% of cloud performance.',
      impact: 'Enabled 15 enterprise customers to deploy AI locally, generating $2.3M in new revenue while meeting strict compliance requirements.'
    },
    
    metrics: [
      { label: 'Performance vs Cloud', value: '90%', trend: 'positive' },
      { label: 'Deployment Time', value: '<4 hours', trend: 'positive' },
      { label: 'Resource Efficiency', value: '+40%', trend: 'positive' },
      { label: 'Customer Revenue', value: '$2.3M', trend: 'positive' }
    ],
    
    story: {
      context: `The wake-up call came during a sales meeting with a Fortune 500 financial services company. They loved our AI capabilities but couldn't use them because sending customer data to our cloud APIs violated their compliance requirements. "We need this to run in our data center," the CISO said. "No exceptions."

This wasn't just one customer. We were losing deals across healthcare, finance, and government because of data residency requirements. The market was telling us that local deployment wasn't a nice-to-have—it was table stakes for enterprise AI.`,
      
      challenge: `The technical challenge was daunting. Our cloud infrastructure was optimized for massive scale and specialized hardware. How do you take that performance and squeeze it into a customer's existing data center with commodity hardware and strict resource constraints?

The business challenge was equally complex. Local deployments meant we couldn't leverage economies of scale, couldn't push updates seamlessly, and had to support a much wider variety of hardware configurations. It required rethinking our entire go-to-market strategy.`,
      
      approach: `I approached this like a classic product optimization problem: identify the constraints, understand the trade-offs, and build something that maximizes value within those limits. We couldn't match cloud performance exactly, but we could get close enough to be useful while adding unique value through local deployment.

The key insight was treating this as a product, not just a technical port. Local deployment offered advantages—lower latency, complete data control, customization flexibility—that we could leverage to create a differentiated offering.`,
      
      implementation: `The implementation required innovations across the entire stack. We developed model compression techniques that maintained quality while reducing resource requirements. We built dynamic optimization that adapts to available hardware in real-time.

The most challenging aspect was the deployment experience. We created an automated installer that can configure our entire AI stack on customer hardware in under four hours, including model optimization, security hardening, and integration testing.`,
      
      results: `The suite has opened up entirely new market segments. We've deployed at 15 enterprise customers, generating $2.3M in new revenue in the first year. More importantly, we're now competitive in deals we couldn't even participate in before.

Performance is consistently 90% of our cloud offering, which exceeds customer expectations. The automated deployment process has eliminated the traditional months-long enterprise software rollouts—customers are up and running the same day they receive hardware.`
    },
    
    downloads: [
      { name: 'Local Deployment Guide', type: 'PDF', size: '2.9 MB' },
      { name: 'Enterprise Case Studies', type: 'PDF', size: '3.7 MB' },
      { name: 'ROI Analysis Framework', type: 'XLSX', size: '892 KB' }
    ]
  }
}

export const getAgenticProject = (id) => agenticProjects[id]
export const getAllAgenticProjects = () => Object.values(agenticProjects)

