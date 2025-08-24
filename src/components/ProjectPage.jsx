import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Download, TrendingUp, TrendingDown, Minus, ArrowLeft } from 'lucide-react'

export default function ProjectPage({ project }) {
  if (!project) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
        <Button className="mt-4" onClick={() => window.history.back()}>
          Go back
        </Button>
      </div>
    )
  }

  const trendIcon = (trend) => {
    switch (trend) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-400" />
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-400" />
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />
    }
  }

  return (
    <div className="container py-10">
      <Button variant="ghost" className="mb-6" onClick={() => window.history.back()}>
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-foreground">{project.title}</h1>
          <p className="text-muted-foreground">{project.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{project.timeline}</Badge>
          <Badge variant="secondary">{project.team}</Badge>
          <Badge className={project.status === 'ship' ? 'bg-green-600' : 'bg-amber-600'}>
            {project.status === 'ship' ? 'Ship' : 'Hold'}
          </Badge>
        </div>
      </div>

      {/* TL;DR */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">TL;DR - For Busy Recruiters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
            <p className="text-muted-foreground whitespace-pre-line">{project.tldr.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">My Solution</h4>
            <p className="text-muted-foreground whitespace-pre-line">{project.tldr.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">The Impact</h4>
            <p className="text-muted-foreground whitespace-pre-line">{project.tldr.impact}</p>
            {project.tldr?.whyShip && (
              <p className="mt-2">
                <span className="font-medium text-green-500">Why Ship:</span>
                <span className="ml-1 text-muted-foreground">{project.tldr.whyShip}</span>
              </p>
            )}
            {project.tldr?.whyHold && (
              <p>
                <span className="font-medium text-amber-500">Why Hold:</span>
                <span className="ml-1 text-muted-foreground">{project.tldr.whyHold}</span>
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Key Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.metrics?.map((m, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{m.label}</span>
                  {trendIcon(m.trend)}
                </div>
                <div className="text-3xl font-bold">{m.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Full Story */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">The Full Story</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Context</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.context}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Approach</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.story.approach}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Outcome</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.story.outcome}</p>
          </div>
        </div>
      </div>

      {/* Downloads */}
      {project.downloads?.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Downloads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.downloads.map((download, i) => (
                <Button key={i} variant="outline" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="w-4 h-4" />
                    <div className="text-left">
                      <div className="font-medium">{download.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {download.type} • {download.size}
                      </div>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
