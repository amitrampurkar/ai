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

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'positive':
        return <TrendingUp className="h-4 w-4 text-green-400" />
      case 'negative':
        return <TrendingDown className="h-4 w-4 text-red-400" />
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status) => {
    return status === 'ship' ? 'bg-green-500' : 'bg-amber-500'
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Back Navigation */}
        <Button 
          variant="ghost" 
          className="mb-8 text-muted-foreground hover:text-foreground"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-foreground">{project.title}</h1>
            <Badge className={`${getStatusColor(project.status)} text-white`}>
              {project.status === 'ship' ? 'Shipped' : 'On Hold'}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground mb-6">{project.subtitle}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Timeline:</span>
              <span className="ml-2 text-foreground">{project.timeline}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Team:</span>
              <span className="ml-2 text-foreground">{project.team}</span>
            </div>
          </div>
        </div>

        {/* TL;DR Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">TL;DR - For Busy Recruiters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
              <p className="text-muted-foreground">{project.tldr.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">My Solution</h4>
              <p className="text-muted-foreground">{project.tldr.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">The Impact</h4>
              <p className="text-muted-foreground">{project.tldr.impact}</p>
            </div>
          </CardContent>
        </Card>

        {/* Metrics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.metrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    {getTrendIcon(metric.trend)}
                  </div>
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed Story */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Full Story - For Hiring Managers</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Context & Background</h3>
              <p className="text-muted-foreground leading-relaxed">{project.story.context}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{project.story.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed">{project.story.approach}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Implementation</h3>
              <p className="text-muted-foreground leading-relaxed">{project.story.implementation}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Results & Impact</h3>
              <p className="text-muted-foreground leading-relaxed">{project.story.results}</p>
            </div>
          </div>
        </div>

        {/* Downloads */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Download Materials</CardTitle>
            <p className="text-muted-foreground">
              Detailed case studies, implementation guides, and analysis reports
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.downloads.map((download, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-start space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span className="font-medium">{download.name}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {download.type} • {download.size}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

