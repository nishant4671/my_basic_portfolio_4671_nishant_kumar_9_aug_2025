import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Rocket, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <main className='min-h-screen p-8 bg-gray-50'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-between items-start mb-12'>
          <div>
            <h1 className='text-4xl font-bold text-gray-900'>Your Name</h1>
            <p className='mt-2 text-lg text-gray-600'>Frontend Developer</p>
          </div>
          <div className='flex space-x-2'>
            <Button variant='outline' size='icon'>
              <Github className='h-5 w-5' />
            </Button>
            <Button variant='outline' size='icon'>
              <Linkedin className='h-5 w-5' />
            </Button>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>About Me</h2>
          <p className='text-gray-600'>
            Professional frontend developer specializing in React and Next.js.
          </p>
        </div>

        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Projects</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Weather Dashboard</CardTitle>
              <CardDescription>Real-time weather forecasts</CardDescription>
              <div className='flex flex-wrap gap-2 mt-4'>
                <span className='bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded'>
                  React
                </span>
                <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded'>
                  API Integration
                </span>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Portfolio Website</CardTitle>
              <CardDescription>This exact portfolio</CardDescription>
              <div className='flex flex-wrap gap-2 mt-4'>
                <span className='bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded'>
                  Next.js
                </span>
                <span className='bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded'>
                  TypeScript
                </span>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className='mt-12'>
          <Button className='bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg'>
            <Rocket className='mr-2 h-4 w-4' />
            Contact Me
          </Button>
        </div>
      </div>
    </main>
  )
}
