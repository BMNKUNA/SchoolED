"use client";  // Mark as client component

// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { Users, Building, Star } from "lucide-react";  // Icons for the stats
import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";  // Card components

interface CounterProps {
  end: number;
  duration: number;
}

export const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 360); // 60 fps
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}+</>;
};

// Use counters with faster durations in your main component
const Statistics = () => {
  return (
    <div>
      {/* Patients Treated */}
      <Card>
        <CardHeader>
          <Users className="w-8 h-8 mr-2 bg-pink-800" />
          <CardTitle className="flex items-baseline">
            <Counter end={50000} duration={4} /> {/* Slower */}
          </CardTitle>
          <CardDescription>Patients Treated Annually</CardDescription>
        </CardHeader>
      </Card>

      {/* Years Serving the Community */}
      <Card>
        <CardHeader>
          <Building className="w-8 h-8 mr-2" />
          <CardTitle className="flex items-baseline">
            <Counter end={20} duration={3} />+ {/* Slow */}
          </CardTitle>
          <CardDescription>Years Serving the Community</CardDescription>
        </CardHeader>
      </Card>

      {/* Patient Satisfaction Rating */}
      <Card>
        <CardHeader>
          <Star className="w-8 h-8 mr-2" />
          <CardTitle className="flex items-baseline">
            <Counter end={4.9} duration={2} /> {/* Faster */}
          </CardTitle>
          <CardDescription>Patient Satisfaction Rating</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Statistics;