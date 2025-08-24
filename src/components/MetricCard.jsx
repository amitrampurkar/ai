import { Button } from '@/components/ui/button.jsx'
import { Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Added optional `tooltip` prop. If not provided, we fall back to `description`.
export default function MetricCard({ title, description, value, status = 'info', tooltip }) {
  const statusClasses = {
    info: 'status-info',
    warning: 'status-warning',
    error: 'status-error',
    ship: 'status-ship'
  }

  const tipText = tooltip || description

  return (
    <div className="metric-card">
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold">{title}</div>

        {/* Info button with tooltip (minimal change) */}
        {tipText ? (
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  className={`status-badge ${statusClasses[status]} h-6 w-6 p-0`}
                  aria-label={`${title} info`}
                >
                  <Info className="h-3 w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="end" className="max-w-xs leading-relaxed">
                {tipText}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Button
            size="sm"
            variant="ghost"
            className={`status-badge ${statusClasses[status]} h-6 w-6 p-0`}
            aria-label={`${title} info`}
          >
            <Info className="h-3 w-3" />
          </Button>
        )}
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-auto pt-6 text-2xl font-bold">{value}</div>
    </div>
  )
}
