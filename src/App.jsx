import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MetricCard from './components/MetricCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import { getProject, getAgenticProject, getAllAgenticProjects } from './data/projects.js'
import './App.css'

function HomePage() {
  const metrics = [
    {
      title: "Model Safety Score",
      description: "Keeping AI systems reliable",
      value: "≥ 96%",
      status: "ship"
    },
    {
      title: "Data Quality Issues",
      description: "Clean training pipelines",
      value: "0",
      status: "warning"
    },
    {
      title: "Cost Per 1K Tokens",
      description: "Efficient resource usage",
      value: "$0.003",
      status: "ship"
    },
    {
      title: "Response Time",
      description: "User experience priority",
      value: "3.8s",
      status: "error"
    }
  ]

  const projects = [
    {
      title: "LLM Evaluation & Safety Framework",
      description: "Built a comprehensive testing system that catches model failures before they reach users. Think of it as quality assurance for AI—but with the stakes of a medical device approval process.",
      status: "ship",
      href: "/projects/llm-eval-harness"
    },
    {
      title: "AI Agent Memory System",
      description: "Developed a memory architecture that helps AI agents remember context across long conversations. Like giving an AI assistant a notebook that actually works—and doesn't forget where it put things.",
      status: "ship",
      href: "/projects/agent-memory-benchmark"
    },
    {
      title: "Model Training Optimization",
      description: "Created a systematic approach to fine-tuning that balances quality improvements with cost reality. Because even the best AI is useless if you can't afford to run it.",
      status: "hold",
      href: "/projects/sft-dpo-mini"
    }
  ]

  const agenticProjects = [
    {
      title: "Autonomous Research Agent",
      description: "Built an AI that conducts independent research like a PhD student—formulating questions, gathering sources, and synthesizing insights. It's like having a research team that never sleeps and never gets tired of digging deeper.",
      status: "ship",
      href: "/projects/autonomous-research-agent"
    },
    {
      title: "Multi-Agent Orchestration Platform",
      description: "Created a system where specialized AI agents collaborate like a well-coordinated team. Think of it as the conductor for an AI orchestra—each agent plays their part, but the magic happens in the coordination.",
      status: "ship",
      href: "/projects/multi-agent-orchestration"
    },
    {
      title: "Local LLM Optimization Suite",
      description: "Developed tools that let enterprises run powerful AI models on their own hardware without sacrificing performance. It's like bringing the power of the cloud into your own data center.",
      status: "ship",
      href: "/projects/local-llm-optimization"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="container py-10">
        <h1 className="hero-title text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          I'm an AI Product Manager who turns complex models into products that actually work.
        </h1>
        <p className="hero-subtitle mt-6 text-lg text-muted-foreground">
          With 15+ years in product management and a Master's in Design, I bridge the gap between 
          cutting-edge AI research and real-world business value. I don't just ship models—I ship 
          solutions that teams trust, users love, and executives can sleep soundly knowing are safe and scalable.
        </p>
        
        <div className="hero-buttons mt-8 flex gap-4">
          <Button className="btn btn-primary enhanced-hover">
            View my work
          </Button>
          <Button variant="secondary" className="btn btn-secondary enhanced-hover">
            Download case studies
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            description={metric.description}
            value={metric.value}
            status={metric.status}
          />
        ))}
      </div>

      {/* Featured Projects */}
      <h2 className="section-header mt-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Recent Work That Made a Difference
      </h2>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            status={project.status}
            href={project.href}
          />
        ))}
      </div>

      {/* Agentic AI Projects */}
      <h2 className="section-header mt-20 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Agentic AI: Building Systems That Think and Act
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-4xl">
        These projects showcase my work with autonomous AI agents—systems that can plan, execute, 
        and adapt without constant human oversight. This is where AI stops being a tool and starts 
        being a collaborator.
      </p>
      
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agenticProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            status={project.status}
            href={project.href}
          />
        ))}
      </div>
    </>
  )
}

function ProjectPageWrapper() {
  const { projectId } = useParams()
  const project = getProject(projectId) || getAgenticProject(projectId)
  
  return <ProjectPage project={project} />
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectPageWrapper />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App

