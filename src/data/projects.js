// LLM Foundational Projects
const projects = {
  'llm-eval-harness': {
    id: 'llm-eval-harness',
    title: 'LLM Evaluation & Safety Framework',
    subtitle: 'Comprehensive Testing for Reliable AI Systems',
    timeline: 'Q2-Q4 2024',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge:
        'Large Language Models often fail unpredictably in ways that can be costly or harmful for businesses and users without adequate testing frameworks.',
      solution:
        'Developed and implemented a comprehensive evaluation and safety harness to systematically measure LLM performance, safety, and reliability across multiple dimensions.',
      impact:
        'Reduced model failure rates by 85% and improved developer confidence, enabling safer and more reliable AI product launches.',
      whyShip:
        'Ships when it clearly improves outcomes with measured risk controls and fast user value.',
      whyHold:
        'On hold until guardrails, validation, or resources align with responsible launch.',
    },
    metrics: [
      { label: 'Model Failure Detection', value: '92%', trend: 'positive' },
      { label: 'Safety Guardrail Coverage', value: '80%', trend: 'positive' },
      { label: 'Time to Diagnose Issues', value: '-65%', trend: 'positive' }
    ],
    story: {
      context:
        `As LLMs become core to product experiences, their unpredictability creates risk. I built an evaluation harness that continuously tests safety, reliability, and performance across a battery of tasks and edge cases.`,
      approach:
        `I defined test dimensions (prompt injection, hallucination, toxicity, privacy, robustness), created golden datasets, and integrated regression checks into CI for continuous monitoring.`,
      outcome:
        `Teams could catch regressions before release, quantify safety coverage, and prioritize model/guardrail improvements based on measured risk, not guesswork.`,
      nextsteps:
        'SAMPLE TEXT.'
    },
    downloads: [
      { name: 'Evaluation Test Plan', type: 'PDF', size: '1.2 MB' },
      { name: 'Safety Scenarios Dataset', type: 'CSV', size: '220 KB' },
      { name: 'CI Integration Guide', type: 'MD', size: '35 KB' }
    ]
  },

  'agent-memory-benchmark': {
    id: 'agent-memory-benchmark',
    title: 'Agent Memory Benchmark',
    subtitle: 'Long‑Term Context for Agent Workflows',
    timeline: 'Q2 2024',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge:
        'Agents forget long‑term context across sessions, breaking continuity in real tasks.',
      solution:
        'Designed a retrieval‑based episodic + semantic memory layer that plugs into popular agent frameworks.',
      impact:
        'Improved task completion rates and reduced re‑prompting friction for multi‑session workflows.',
      whyShip:
        'Ships when it clearly improves outcomes with measured risk controls and fast user value.',
      whyHold:
        'On hold until guardrails, validation, or resources align with responsible launch.',
    },
    metrics: [
      { label: 'Task Completion Lift', value: '+18%', trend: 'positive' },
      { label: 'Re‑prompt Reduction', value: '-32%', trend: 'positive' },
      { label: 'Latency Impact', value: '+12ms', trend: 'negative' }
    ],
    story: {
      context:
        `Agents need continuity across days/weeks. I defined what “useful memory” means for PM outcomes—fewer repeats, faster context pickup.`,
      approach:
        `Structured events into episodic memory + semantic embeddings; added aging/TTL policies and privacy filters.`,
      outcome:
        `Delivered measurable gains in completion rates with a small, acceptable latency tradeoff.`,
      nextsteps:
        'SAMPLE TEXT.'  
    },
    downloads: [
      { name: 'Memory Design Doc', type: 'PDF', size: '1.0 MB' }
    ]
  },

  'sft-dpo-mini': {
    id: 'sft-dpo-mini',
    title: 'Model Training Optimization',
    subtitle: 'Lower Cost, Faster Iteration, Better Models',
    timeline: 'Q1-Q3 2024',
    team: 'Individual Project',
    status: 'hold',
    tldr: {
      challenge:
        'Training and fine‑tuning LLMs is expensive and slow, leading to long iteration cycles and high infrastructure costs.',
      solution:
        'Introduced data‑centric training practices, better sampling strategies, and automated experiment tracking with clear performance gates.',
      impact:
        'Cut training costs by 35% and reduced iteration time by 50%, while improving model performance on key business tasks.',
      whyShip:
        'Ships when it clearly improves outcomes with measured risk controls and fast user value.',
      whyHold:
        'On hold until guardrails, validation, or resources align with responsible launch.',
    },
    metrics: [
      { label: 'Training Cost', value: '-35%', trend: 'positive' },
      { label: 'Iteration Speed', value: '+50%', trend: 'positive' },
      { label: 'Task Accuracy', value: '+12%', trend: 'positive' }
    ],
    story: {
      context:
        `Pipelines were opaque and wasteful. We lacked clear gates and spent compute on low‑value runs.`,
      approach:
        `Introduced dataset quality checks, stratified sampling, experiment governance, and promotion gates.`,
      outcome:
        `Focused compute on highest‑yield experiments; accelerated learning cycles tied to product outcomes.`,
      nextsteps:
        'SAMPLE TEXT.'  
    },
    downloads: [
      { name: 'Training Ops Playbook', type: 'PDF', size: '900 KB' }
    ]
  }
}

// Agentic AI Projects
const agenticProjects = {
  'autonomous-research-agent': {
    id: 'autonomous-research-agent',
    title: 'Patient Triage Assistant',
    subtitle: 'AI-Powered Healthcare Decision Support',
    timeline: 'Q3-Q4 2024',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge:
        'Patients often struggle with knowing where to go for care (self‑care, telehealth, urgent care, or ER), leading to delays, higher costs, and unnecessary ER visits.',
      solution:
        'I built a mini MVP triage assistant on my MacBook Pro using a local LLaMA model (8B, Meta AI). The prototype scoped a simple flow — symptom input → triage suggestion → brief explanation — demonstrating my AI product management approach.',
      impact:
        'Validated that a local AI model can streamline triage with faster routing, improved accuracy, and strong early usability feedback.',
      whyShip:
        'Shows I can rapidly design and validate an AI MVP responsibly.',
      whyHold:
        'Prototype only — requires clinician validation and regulatory approval.'
    },
    metrics: [
      { label: 'Triage Time Reduction', value: '60%', trend: 'positive' },
      { label: 'Accuracy Improvement', value: '40%', trend: 'positive' },
      { label: 'Patient Satisfaction Score', value: '4.7/5', trend: 'positive' }
    ],
    story: {
      context:
        `Healthcare triage determines where patients should go for care. This MVP tested whether a local LLM could emulate simple triage flows safely enough for prototype exploration.`,
      approach:
        `Scoped to symptom intake → triage suggestion → explanation with safety disclaimers. Ran locally on a MacBook Pro using a LLaMA model; evaluated canonical scenarios (headache, chest pain, sore throat).`,
      outcome:
        `Validated feasibility and outlined next steps: clinician‑approved pathways, guardrails/fallbacks, and IRB‑approved pilots before any real‑world use.`,
      nextsteps:
        'SAMPLE TEXT.'  
    },
    downloads: [
      { name: 'Prototype Overview', type: 'PDF', size: '600 KB' },
      { name: 'Prompt Templates', type: 'MD', size: '20 KB' },
      { name: 'Benchmarking Data', type: 'CSV', size: '150 KB' }
    ]
  },

  'multi-agent-orchestration': {
    id: 'multi-agent-orchestration',
    title: 'Care Navigation & Clinical Documentation Support',
    subtitle: 'Coordinated Agent Workflows',
    timeline: 'Q2-Q3 2024',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge: 'Coordinating specialized agents is hard without orchestration and ownership boundaries.',
      solution: 'Built a simple orchestrator and contracts between agents for task ownership, hand-offs, and auditability.',
      impact: 'Reduced failure handoffs and improved throughput across complex workflows.',
      whyShip:
        'Ships when it clearly improves outcomes with measured risk controls and fast user value.',
      whyHold:
        'On hold until guardrails, validation, or resources align with responsible launch.',
    },
    metrics: [
      { label: 'Throughput', value: '+22%', trend: 'positive' },
      { label: 'Failed Handoffs', value: '-37%', trend: 'positive' }
    ],
    story: {
      context: `Multi‑agent systems fail at the seams. We needed clear interfaces and review loops.`,
      approach: `Defined roles, messages, and arbitration; added traceability; measured throughput and error rates.`,
      outcome: `Made complex workflows reliable enough for pilots with human‑in‑the‑loop QA.`,
      nextsteps:
        'SAMPLE TEXT.'
    },
    downloads: []
  },

  'local-llm-optimization': {
    id: 'local-llm-optimization',
    title: 'Cryptocurrency Fraud Detection & Portfolio Assistant',
    subtitle: 'Local Models, Enterprise Constraints',
    timeline: 'Q1 2024',
    team: 'Individual Project',
    status: 'hold',
    tldr: {
      challenge: 'Enterprises want on‑prem privacy but still need strong performance.',
      solution: 'Optimized local models with quantization and caching while preserving accuracy on key tasks.',
      impact: 'Enabled private deployments without major performance loss.',
      whyShip:
        'Ships when it clearly improves outcomes with measured risk controls and fast user value.',
      whyHold:
        'On hold until guardrails, validation, or resources align with responsible launch.',
    },
    metrics: [
      { label: 'Cost per 1k Tokens', value: '-48%', trend: 'positive' },
      { label: 'Latency', value: '-28%', trend: 'positive' }
    ],
    story: {
      context: `Private deployments are attractive but slow/pricey.`,
      approach: `Quantized models, tuned batch sizes, added caching.`,
      outcome: `Hit acceptable SLAs for internal pilot.`,
      nextsteps:
        'SAMPLE TEXT.'
    },
    downloads: []
  }
}

export function getProject(id) {
  return projects[id]
}

export function getAgenticProject(id) {
  return agenticProjects[id]
}

export function getAllProjects() {
  return projects
}

export function getAllAgenticProjects() {
  return agenticProjects
}
