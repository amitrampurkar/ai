import { Button } from '@/components/ui/button.jsx'
import { Info } from 'lucide-react'

export default function MetricCard({ title, description, value, status = 'info' }) {
  const statusClasses = {
    info: 'status-info',
    warning: 'status-warning',
    error: 'status-error',
    ship: 'status-ship'
  }

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold">{title}</div>
        <Button 
          size="sm" 
          variant="ghost" 
          className={`status-badge ${statusClasses[status]} h-6 w-6 p-0`}
        >
          <Info className="h-3 w-3" />
        </Button>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-auto pt-6 text-2xl font-bold">{value}</div>
    </div>
  )
}

