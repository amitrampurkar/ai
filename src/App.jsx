import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MetricCard from './components/MetricCard.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import About from './components/About.jsx'
import { getProject, getAgenticProject, getAllAgenticProjects } from './data/projects.js'
import './App.css'

function HomePage() {

  const handleScrollToProjects = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const metrics = [
      {
        title: "Safety Compliance",
        description: "Reliable outputs with safety checks",
        value: "97% safe",
        status: "ship",
        tooltip: "SHIP – Model passes safety guardrails with very low unsafe outputs."
      },
      {
        title: "Facts Accuracy",
        description: "Hallucination is higher on new topics",
        value: "+12% errors",
        status: "warning",
        tooltip: "WARNING – Accuracy drops on new topics, needs more tuning."
      },
      {
        title: "Training Speed",
        description: "Optimizations reduced training time",
        value: "−37%",
        status: "ship",
        tooltip: "SHIP – Training runs much faster with only minor trade-offs."
      },
      {
        title: "Response Time",
        description: "Extra safety checks add delay",
        value: "+0.8s",
        status: "error",
        tooltip: "HOLD – Extra checks slow down responses noticeably."
      }
  ]

  const projects = [
    {
      title: "LLM Evaluation & Safety Framework",
      description: "Built a lightweight safety system that checks AI answers against rules before release. It turned “looks fine” into clear pass/fail signals so teams can spot risky outputs early.",
      status: "ship",
      href: "/projects/llm-eval-harness"
    },
    {
      title: "Hallucination Testing & Mitigation",
      description: "Created a small framework to catch when AI makes up facts. It breaks answers into claims, checks them against trusted data, and either asks for sources, hedges, or blocks unsafe replies.",
      status: "ship",
      href: "/projects/hallucination-mitigation"
    },
    {
      title: "Model Training Optimization",
      description: "Tested different training setups on a laptop to see how much faster and cheaper models could run. Found clear trade-offs between speed, memory savings, and accuracy.",
      status: "hold",
      href: "/projects/model-training-optimization"
    }
  ]

  const agenticProjects = [
    {
      title: "Patient Triage Assistant",
      description: "Prototyped an AI tool that suggests whether a patient should use self‑care, telehealth, urgent care, or the ER. Added safety disclaimers and tested it on common health cases.",
      status: "ship",
      href: "/projects/patient-triage"
    },
    {
      title: "Care Navigation & Clinical Documentation Support",
      description: "Built two small agents — one for routing patients to the right care, another for drafting visit notes. Linked them with a simple orchestrator so they could hand off tasks reliably.",
      status: "ship",
      href: "/projects/care-navigation"
    },
    {
      title: "Cryptocurrency Fraud Detection & Portfolio Assistant",
      description: "Created a local tool that flags suspicious crypto transactions and gives a clear picture of portfolio health. It highlights fraud risks while also showing gains, losses, and diversification.",
      status: "hold",
      href: "/projects/crypto-fraud"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div className="container py-10">
        <h1 className="hero-title text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          AI PM focused on safety, reliability, and impact..
        </h1>
        <p className="hero-subtitle mt-6 text-lg text-muted-foreground">
          Below is a collection of lightweight AI MVPs — experiments designed to test ideas, build skills, and highlight practical product thinking.
        </p>
        
        <div className="hero-buttons mt-8 flex gap-4">
        <Button
            type="button"
            onClick={handleScrollToProjects}
            className="btn btn-primary enhanced-hover"
          >
            View my work
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
         <MetricCard key={i} {...m} />
))}
      </div>

      {/* Featured Projects */}
      
      <h2 className="section-header mt-16 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        LLM Foundational Projects
        <span id="projects" className="block scroll-mt-24"></span>
      </h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-4xl">
        Lightweight experiments that make AI models safer, more reliable, and faster to train. Each project shows how I scoped a local MVP to tackle real problems like evaluation, hallucinations, and training efficiency.”
      </p>
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
        Agentic AI Projects
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
            <Route path="/about" element={<About />} />
            <Route path="/projects/:projectId" element={<ProjectPageWrapper />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
