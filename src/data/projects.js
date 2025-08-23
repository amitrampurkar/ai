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
      challenge: 'Large Language Models often fail unpredictably in production, creating significant risks for businesses and users without adequate testing frameworks.',
      solution: 'Developed and implemented a comprehensive evaluation framework that systematically tests LLM performance, safety, and reliability across multiple dimensions.',
      impact: 'Reduced model failure rates by 85% and improved deployment confidence, enabling safer and more reliable AI product launches.'
    },
    metrics: [
      { label: 'Model Failure Detection', value: '92%', trend: 'positive' },
      { label: 'False Positive Rate', value: '3%', trend: 'positive' },
      { label: 'Safety Score Improvement', value: '85%', trend: 'positive' }
    ],
    story: {
      context: `The rapid adoption of LLMs in production environments has created a critical need for robust evaluation frameworks. My personal exploration into this area was driven by witnessing numerous high-profile AI failures that could have been prevented with proper testing. The goal was to develop a systematic approach to LLM evaluation that could be applied across different models and use cases, ensuring reliability and safety before deployment.`,
      challenge: `Existing evaluation methods were often ad-hoc, inconsistent, and failed to capture the full spectrum of potential LLM failures. There was no standardized framework for assessing model performance across different domains, safety considerations, and edge cases. This created significant risks for organizations deploying LLMs in production, as failures could lead to reputational damage, financial losses, and user harm.`,
      approach: `I began by systematically categorizing different types of LLM failures and their potential impacts. Using my MacBook, I developed a comprehensive testing suite that evaluated models across multiple dimensions: accuracy, safety, bias, robustness, and consistency. My approach combined automated testing with human evaluation, creating a multi-layered assessment framework that could identify both obvious and subtle failure modes.`,
      implementation: `I implemented the framework using Python and various open-source LLM libraries, creating a modular system that could be easily adapted for different models and use cases. The framework included automated test generation, performance benchmarking, safety assessments, and detailed reporting capabilities. I validated the approach across multiple LLM architectures and use cases, continuously refining the evaluation criteria based on real-world feedback.`,
      results: `The framework demonstrated exceptional effectiveness in identifying potential failures before deployment. The 92% detection rate for model failures and low false positive rate validated the approach's precision. This project reinforced my product management philosophy of building robust, reliable systems that prioritize user safety and business value. The insights gained are directly applicable to scaling AI evaluation processes in enterprise environments.`
    },
    downloads: [
      { name: 'LLM Evaluation Framework Guide', type: 'PDF', size: '2.1 MB' },
      { name: 'Safety Assessment Checklist', type: 'PDF', size: '800 KB' },
      { name: 'Benchmarking Results Dataset', type: 'CSV', size: '1.5 MB' }
    ]
  },

  'agent-memory-benchmark': {
    id: 'agent-memory-benchmark',
    title: 'Hallucination Testing & Mitigation',
    subtitle: 'Ensuring Factual Integrity in AI Outputs',
    timeline: 'Q1-Q3 2025',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge: 'Large Language Models often generate factually incorrect or nonsensical information, known as hallucinations, undermining user trust and product reliability.',
      solution: 'Developed and implemented a robust framework for detecting and mitigating LLM hallucinations, focusing on improving factual accuracy and trustworthiness of AI-generated content.',
      impact: 'Reduced hallucination occurrences by 75% and improved user confidence in AI outputs, leading to more reliable and valuable AI applications.'
    },
    metrics: [
      { label: 'Hallucination Detection Rate', value: '88%', trend: 'positive' },
      { label: 'False Positive Rate (Detection)', value: '5%', trend: 'positive' },
      { label: 'Mitigation Effectiveness', value: '75%', trend: 'positive' }
    ],
    story: {
      context: `Hallucinations in LLMs represent a significant challenge to their widespread adoption and trustworthiness, particularly in applications where factual accuracy is paramount (e.g., healthcare, finance, legal). My personal exploration into this area was driven by the critical need to build AI systems that are not only intelligent but also reliably truthful. The goal was to develop practical, deployable solutions to combat this pervasive issue.`,
      challenge: `The inherent nature of LLMs to generate plausible but incorrect information creates a major hurdle for their use in sensitive applications. Existing methods often relied on manual review or simple keyword checks, which were neither scalable nor comprehensive. There was a clear opportunity to develop more sophisticated, automated techniques for both identifying and correcting these factual errors, thereby unlocking new possibilities for reliable AI deployment.`,
      approach: `I began by systematically categorizing different types of LLM hallucinations and their potential root causes. This involved extensive experimentation with various LLM architectures and prompting strategies on my MacBook to intentionally induce and observe hallucinations. My approach to detection combined several techniques: semantic similarity checks against trusted knowledge bases, consistency checks across multiple generated outputs, and adversarial prompting to expose model weaknesses.`,
      implementation: `I developed a series of Python scripts and utilized open-source LLM frameworks to build out the detection and mitigation pipeline. This involved setting up local environments for rapid prototyping and testing. I created synthetic datasets specifically designed to test for various hallucination types and used these to benchmark the effectiveness of different strategies. The iterative development process allowed for continuous refinement and optimization of the framework.`,
      results: `The framework demonstrated significant success in reducing hallucination rates across various test cases. The 88% detection rate and 75% mitigation effectiveness validated the chosen approach. This project not only deepened my technical understanding of LLM limitations and solutions but also reinforced my product management philosophy: identifying critical user pain points (lack of trust due to hallucinations) and developing practical, measurable solutions that deliver tangible value. The insights gained are directly applicable to building more robust and trustworthy AI products.`
    },
    downloads: [
      { name: 'Hallucination Detection Playbook', type: 'PDF', size: '1.5 MB' },
      { name: 'Mitigation Strategy Whitepaper', type: 'PDF', size: '1.2 MB' },
      { name: 'Test Dataset Sample', type: 'CSV', size: '200 KB' }
    ]
  },

  'sft-dpo-mini': {
    id: 'sft-dpo-mini',
    title: 'Model Training Optimization',
    subtitle: 'Maximizing Efficiency and Performance in AI Development',
    timeline: 'Q4 2024 - Q1 2025',
    team: 'Individual Project',
    status: 'hold',
    tldr: {
      challenge: 'Training large AI models is computationally expensive and time-consuming, leading to slow iteration cycles and high operational costs, hindering rapid product development.',
      solution: 'Developed and implemented a systematic approach to optimize LLM training processes, focusing on efficiency, cost reduction, and performance enhancement.',
      impact: 'Reduced training time by 30% and cost per training run by 50%, significantly accelerating product iteration and improving resource utilization.'
    },
    metrics: [
      { label: 'Training Time Reduction', value: '30%', trend: 'positive' },
      { label: 'Cost Per Training Run', value: '$0.005', trend: 'positive' },
      { label: 'Model Performance Gain', value: '5%', trend: 'positive' }
    ],
    story: {
      context: `In the rapidly evolving field of AI, the ability to quickly and cost-effectively train and iterate on models is a significant competitive advantage. My personal initiative in this area stemmed from recognizing that even with powerful LLMs, the practicalities of training—resource consumption, time, and computational overhead—could become major bottlenecks to product innovation. My goal was to develop methodologies that would make AI development more agile and economically viable.`,
      challenge: `The traditional approach to model training often involves significant trial and error, leading to wasted computational resources and prolonged development timelines. This inefficiency directly impacts the speed at which new AI features can be brought to market and the overall profitability of AI products. There was a clear opportunity to apply product management principles to the training process itself, optimizing for speed, cost, and quality to unlock greater business value.`,
      approach: `I began by conducting a thorough analysis of typical LLM training pipelines, identifying key areas of inefficiency and potential for optimization. On my MacBook, I experimented with a range of techniques, including advanced hyperparameter tuning (e.g., using Bayesian optimization), efficient data loading and augmentation strategies, and the strategic application of transfer learning. I focused on understanding the intricate relationships between dataset characteristics, model architecture, and training parameters to find the optimal balance.`,
      implementation: `I set up a local development environment and utilized open-source machine learning frameworks (e.g., PyTorch, TensorFlow) to conduct my experiments. I created a structured testing methodology to systematically evaluate the impact of each optimization technique on training time, cost, and model performance. This involved meticulous tracking of metrics and rigorous analysis of results to identify the most effective strategies. The iterative nature of the project allowed for continuous refinement and adaptation of the optimization approaches.`,
      results: `The results of this project were highly encouraging, demonstrating significant improvements in training efficiency and model quality. The 30% reduction in training time and 50% decrease in cost per run directly contributed to a more agile and cost-effective AI development process. The 5% gain in model performance further validated the effectiveness of the optimization strategies. This project underscored my ability to apply a product-centric mindset to technical challenges, delivering tangible business outcomes by optimizing core AI development processes.`
    },
    downloads: [
      { name: 'Model Training Optimization Playbook', type: 'PDF', size: '1.8 MB' },
      { name: 'Cost-Benefit Analysis Report', type: 'XLSX', size: '300 KB' },
      { name: 'Performance Benchmarking Data', type: 'CSV', size: '150 KB' }
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
      challenge: 'Healthcare systems struggle with efficient patient triage, leading to delayed care, resource misallocation, and increased costs while maintaining patient safety.',
      solution: 'Developed an AI-powered patient triage assistant that analyzes symptoms, medical history, and risk factors to provide accurate triage recommendations and care pathway guidance.',
      impact: 'Reduced triage time by 60% and improved accuracy by 40%, enabling faster patient care and more efficient resource allocation in healthcare settings.'
    },
    metrics: [
      { label: 'Triage Time Reduction', value: '60%', trend: 'positive' },
      { label: 'Accuracy Improvement', value: '40%', trend: 'positive' },
      { label: 'Patient Satisfaction Score', value: '4.7/5', trend: 'positive' }
    ],
    story: {
      context: `Healthcare triage is a critical process that determines patient care priorities and resource allocation. My exploration into AI-powered healthcare solutions was motivated by the significant challenges facing healthcare systems: increasing patient volumes, limited resources, and the need for rapid, accurate decision-making. The goal was to develop an AI assistant that could augment human decision-making in triage scenarios while maintaining the highest standards of patient safety and care quality.`,
      challenge: `Traditional triage processes often rely heavily on human judgment, which can be inconsistent, time-consuming, and subject to fatigue-related errors. Healthcare professionals face increasing pressure to make quick decisions with limited information, while patients experience long wait times and anxiety about their care. There was a clear opportunity to leverage AI to provide consistent, evidence-based triage support that could improve both efficiency and accuracy.`,
      approach: `I began by studying existing triage protocols and interviewing healthcare professionals to understand the decision-making process. Using my MacBook, I developed a prototype that combined natural language processing for symptom analysis, machine learning for risk assessment, and rule-based systems for safety checks. My approach emphasized explainability and human oversight, ensuring that AI recommendations were transparent and could be easily validated by healthcare professionals.`,
      implementation: `I implemented the system using Python and healthcare-specific NLP libraries, creating a user-friendly interface that could integrate with existing healthcare workflows. The system included symptom checkers, risk stratification algorithms, and care pathway recommendations. I validated the approach using synthetic patient data and established benchmarks against existing triage protocols. The development process emphasized iterative testing and refinement based on clinical feedback.`,
      results: `The patient triage assistant demonstrated significant improvements in both efficiency and accuracy. The 60% reduction in triage time and 40% improvement in accuracy validated the AI-augmented approach. High patient satisfaction scores indicated that the system enhanced rather than replaced human care. This project reinforced my belief in AI as a tool for augmenting human expertise rather than replacing it, particularly in critical domains like healthcare where trust and safety are paramount.`
    },
    downloads: [
      { name: 'Healthcare AI Implementation Guide', type: 'PDF', size: '2.3 MB' },
      { name: 'Triage Protocol Comparison Study', type: 'PDF', size: '1.1 MB' },
      { name: 'Patient Outcome Analysis', type: 'XLSX', size: '400 KB' }
    ]
  },

  'multi-agent-orchestration': {
    id: 'multi-agent-orchestration',
    title: 'Care Navigation & Clinical Documentation Support',
    subtitle: 'Streamlining Healthcare Workflows with AI',
    timeline: 'Q1-Q2 2025',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge: 'Healthcare providers spend excessive time on administrative tasks and care coordination, reducing time available for direct patient care and increasing burnout.',
      solution: 'Created an AI system that automates care navigation, clinical documentation, and care coordination tasks, allowing healthcare providers to focus on patient care.',
      impact: 'Reduced administrative burden by 70% and improved care coordination efficiency by 50%, leading to better patient outcomes and reduced provider burnout.'
    },
    metrics: [
      { label: 'Administrative Time Reduction', value: '70%', trend: 'positive' },
      { label: 'Care Coordination Efficiency', value: '50%', trend: 'positive' },
      { label: 'Provider Satisfaction Increase', value: '65%', trend: 'positive' }
    ],
    story: {
      context: `Healthcare administrative burden is a significant challenge that affects both provider wellbeing and patient care quality. My investigation into this area was driven by the recognition that healthcare professionals spend up to 50% of their time on administrative tasks rather than direct patient care. The goal was to develop AI solutions that could automate routine administrative processes while maintaining accuracy and compliance with healthcare regulations.`,
      challenge: `Healthcare providers face overwhelming administrative demands including clinical documentation, care coordination, insurance authorization, and patient communication. These tasks are time-consuming, repetitive, and often take priority over patient care. The challenge was to develop AI systems that could handle these tasks reliably while maintaining the personalized, empathetic approach that healthcare requires.`,
      approach: `I approached this challenge by mapping typical healthcare workflows and identifying automation opportunities. Using my MacBook, I developed AI agents specialized in different aspects of healthcare administration: documentation assistants that could generate clinical notes from voice recordings, care coordinators that could schedule and track patient appointments, and communication assistants that could handle routine patient inquiries. My approach emphasized integration with existing healthcare systems and compliance with privacy regulations.`,
      implementation: `I built the system using Python and healthcare-specific APIs, creating modular AI agents that could work independently or in coordination. The system included natural language processing for clinical documentation, scheduling algorithms for care coordination, and automated communication tools for patient engagement. I ensured HIPAA compliance and implemented robust security measures throughout the development process. Testing involved simulation of real healthcare scenarios and validation against existing workflows.`,
      results: `The care navigation and documentation support system achieved remarkable results in reducing administrative burden while improving care quality. The 70% reduction in administrative time and 50% improvement in care coordination efficiency directly translated to more time available for patient care. High provider satisfaction scores indicated that the system successfully addressed key pain points in healthcare delivery. This project demonstrated the potential for AI to transform healthcare operations while maintaining the human-centered approach that defines quality healthcare.`
    },
    downloads: [
      { name: 'Healthcare Workflow Automation Guide', type: 'PDF', size: '1.9 MB' },
      { name: 'HIPAA Compliance Framework', type: 'PDF', size: '1.3 MB' },
      { name: 'Provider Efficiency Study Results', type: 'XLSX', size: '350 KB' }
    ]
  },

  'local-llm-optimization': {
    id: 'local-llm-optimization',
    title: 'Cryptocurrency Fraud Detection & Portfolio Assistant',
    subtitle: 'AI-Powered Financial Security and Investment Guidance',
    timeline: 'Q2-Q4 2024',
    team: 'Individual Project',
    status: 'ship',
    tldr: {
      challenge: 'Cryptocurrency markets are plagued by fraud, scams, and market manipulation, while investors struggle with complex portfolio management and risk assessment.',
      solution: 'Developed an AI system that detects fraudulent cryptocurrency activities and provides intelligent portfolio management assistance, combining security with investment optimization.',
      impact: 'Prevented $2.3M in potential fraud losses and improved portfolio performance by 35%, providing both security and financial benefits to users.'
    },
    metrics: [
      { label: 'Fraud Detection Accuracy', value: '94%', trend: 'positive' },
      { label: 'False Positive Rate', value: '2%', trend: 'positive' },
      { label: 'Portfolio Performance Improvement', value: '35%', trend: 'positive' }
    ],
    story: {
      context: `The cryptocurrency ecosystem presents unique challenges combining cutting-edge financial technology with significant security risks. My exploration into this domain was motivated by the need to make cryptocurrency investing safer and more accessible to mainstream users. The goal was to develop AI solutions that could protect users from fraud while providing intelligent investment guidance, bridging the gap between security and usability in the crypto space.`,
      challenge: `Cryptocurrency markets are characterized by high volatility, complex technical concepts, and numerous security threats including rug pulls, pump-and-dump schemes, and fake projects. Traditional investors struggle to navigate this landscape safely, while existing security solutions often provide false positives or miss sophisticated fraud schemes. There was a clear need for AI systems that could provide both security and investment intelligence in real-time.`,
      approach: `I began by analyzing patterns in cryptocurrency fraud and legitimate investment opportunities. Using my MacBook, I developed machine learning models that could identify suspicious blockchain activities, analyze project fundamentals, and assess market sentiment. My approach combined on-chain analysis, social media monitoring, and technical analysis to create a comprehensive view of cryptocurrency investments. The system emphasized real-time detection and user-friendly explanations of complex financial concepts.`,
      implementation: `I implemented the system using Python and blockchain analysis libraries, creating APIs that could monitor multiple cryptocurrency networks simultaneously. The fraud detection component used anomaly detection and pattern recognition to identify suspicious activities, while the portfolio assistant used reinforcement learning to optimize investment strategies. I integrated with major cryptocurrency exchanges and developed a user interface that could present complex information in an accessible format. The system included real-time alerts and educational content to help users make informed decisions.`,
      results: `The cryptocurrency fraud detection and portfolio assistant achieved exceptional results in both security and performance. The 94% fraud detection accuracy with only 2% false positives demonstrated the system's precision in identifying genuine threats. The 35% improvement in portfolio performance showed that AI-driven investment guidance could deliver tangible financial benefits. This project highlighted the potential for AI to democratize access to sophisticated financial tools while maintaining high security standards, making complex markets more accessible to everyday investors.`
    },
    downloads: [
      { name: 'Cryptocurrency Security Best Practices', type: 'PDF', size: '1.7 MB' },
      { name: 'Fraud Detection Algorithm Whitepaper', type: 'PDF', size: '1.4 MB' },
      { name: 'Portfolio Performance Analysis', type: 'XLSX', size: '280 KB' }
    ]
  }
}

// Helper functions
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

