import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'

export default function ProjectCard({ title, description, status, href }) {
  const statusClasses = {
    ship: 'status-ship',
    hold: 'status-hold'
  }

  return (
    <Link to={href} className="project-card no-underline">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <div className="font-semibold">{title}</div>
          <span className={`status-badge ${statusClasses[status]}`}>
            {status === 'ship' ? 'Ship' : 'Hold'}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-auto pt-6">
          <Button className="btn btn-primary text-xs">
            Read case study →
          </Button>
        </div>
      </div>
    </Link>
  )
}

