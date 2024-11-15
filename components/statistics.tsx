'use client'

import React from 'react'
import { Users, Building, Star, Ambulance } from 'lucide-react'
import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"

// Counter Component to animate the number changes
interface CounterProps {
  end: number
  duration: number
}

const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    let start = 0
    const increment = end / (duration * 60) // 60 fps
    const timer = setInterval(() => {
      start += increment
      setCount(Math.floor(start))
      if (start >= end) {
        clearInterval(timer)
        setCount(end)
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [end, duration])

  return <>{count.toLocaleString()}</>
}

const Statistics = () => {
  return (
    <section className="relative z-20 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Patients Treated Annually Card */}
          <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-baseline">
                <Users className="w-8 h-8 mr-2 text-pink-800" />
                <span className="text-4xl font-bold text-pink-800">
                  <Counter end={50000} duration={4} />+
                </span>
              </CardTitle>
              <CardDescription className="text-lg">Patients Treated Annually</CardDescription>
            </CardHeader>
          </Card>

          {/* Emergency Services Available Card */}
          <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-baseline">
                <Ambulance className="w-8 h-8 mr-2 text-pink-800" />
                <span className="text-4xl font-bold text-pink-800">24/7</span>
              </CardTitle>
              <CardDescription className="text-lg">Emergency Services Available</CardDescription>
            </CardHeader>
          </Card>

          {/* Years Serving the Community Card */}
          <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-baseline">
                <Building className="w-8 h-8 mr-2 text-pink-800" />
                <span className="text-4xl font-bold text-pink-800">
                  <Counter end={20} duration={3} />+
                </span>
              </CardTitle>
              <CardDescription className="text-lg">Years Serving the Community</CardDescription>
            </CardHeader>
          </Card>

          {/* Patient Satisfaction Rating Card */}
          <Card className="bg-white/90 backdrop-blur-lg border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-baseline">
                <Star className="w-8 h-8 mr-2 text-pink-800" />
                <span className="text-4xl font-bold text-pink-800">
                  <Counter end={4.9} duration={2} />
                </span>
              </CardTitle>
              <CardDescription className="text-lg">Patient Satisfaction Rating</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Statistics