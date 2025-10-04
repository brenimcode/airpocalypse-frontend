import React from 'react'
import { Thermometer, Sun, Snowflake, Droplets } from 'lucide-react'

interface TemperatureModalProps {
  isOpen: boolean
  onClose: () => void
  temperature: number
  unit: 'F' | 'C'
}

const TemperatureModal: React.FC<TemperatureModalProps> = ({ isOpen, onClose, temperature, unit }) => {
  const getTemperatureIcon = (temp: number, unit: string) => {
    const tempC = unit === 'F' ? Math.round((temp - 32) * 5/9) : temp
    
    if (tempC < 0) return <Snowflake className="h-8 w-8 text-blue-600" />
    if (tempC < 10) return <Thermometer className="h-8 w-8 text-blue-400" />
    if (tempC < 20) return <Thermometer className="h-8 w-8 text-green-500" />
    if (tempC < 30) return <Sun className="h-8 w-8 text-yellow-500" />
    return <Sun className="h-8 w-8 text-red-500" />
  }

  const getTemperatureInsights = (temp: number, unit: string) => {
    const tempC = unit === 'F' ? Math.round((temp - 32) * 5/9) : temp
    
    if (tempC < 0) {
      return {
        title: 'Extreme Cold Conditions',
        insights: [
          'Risk of hypothermia during outdoor activities',
          'Significantly increased injury risk',
          'Reduced muscle performance and flexibility',
          'High risk of frostbite on exposed skin'
        ],
        recommendation: 'Avoid outdoor training. If necessary, dress in layers and limit exposure time.',
        hydration: 'Cold air is dry - increase fluid intake despite feeling less thirsty.'
      }
    }
    
    if (tempC < 10) {
      return {
        title: 'Cold Weather Training',
        insights: [
          'Optimal for endurance activities',
          'Reduced heat stress and dehydration risk',
          'Improved cardiovascular efficiency',
          'Longer warm-up period required'
        ],
        recommendation: 'Excellent for long-distance training. Ensure proper warm-up and layering.',
        hydration: 'Continue regular hydration despite cooler temperatures.'
      }
    }
    
    if (tempC < 20) {
      return {
        title: 'Cool Training Conditions',
        insights: [
          'Ideal for high-intensity training',
          'Optimal muscle performance',
          'Comfortable for extended outdoor sessions',
          'Good conditions for speed work'
        ],
        recommendation: 'Perfect conditions for most training activities. Ideal for performance testing.',
        hydration: 'Standard hydration protocols apply.'
      }
    }
    
    if (tempC < 30) {
      return {
        title: 'Warm Training Conditions',
        insights: [
          'Good for most training activities',
          'Increased sweating and fluid loss',
          'Slightly reduced performance in endurance events',
          'Monitor for heat-related symptoms'
        ],
        recommendation: 'Suitable for training with increased attention to hydration and cooling.',
        hydration: 'Increase fluid intake. Consider electrolyte replacement for longer sessions.'
      }
    }
    
    return {
      title: 'Hot Weather Training',
      insights: [
        'High risk of heat-related illnesses',
        'Significantly reduced performance capacity',
        'Increased cardiovascular stress',
        'High dehydration risk'
      ],
      recommendation: 'Limit outdoor training intensity and duration. Consider early morning or evening sessions.',
      hydration: 'Aggressive hydration required. Pre-hydrate and replace electrolytes frequently.'
    }
  }

  const insights = getTemperatureInsights(temperature, unit)

  return (
    <div className="space-y-4">
      {/* Temperature Status */}
      <div className="flex items-center space-x-3">
        {getTemperatureIcon(temperature, unit)}
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">
            {temperature}°{unit}
          </h4>
          <p className="text-sm text-neutral-600">
            {unit === 'F' ? `${Math.round((temperature - 32) * 5/9)}°C` : `${Math.round(temperature * 9/5 + 32)}°F`}
          </p>
        </div>
      </div>

      {/* Insights */}
      <div className="space-y-3">
        <h5 className="font-medium text-neutral-900">{insights.title}</h5>
        <ul className="space-y-2">
          {insights.insights.map((insight, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-neutral-700">{insight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommendation */}
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
        <h6 className="font-medium text-primary-900 mb-2">Training Recommendation</h6>
        <p className="text-sm text-primary-800">{insights.recommendation}</p>
      </div>

      {/* Hydration Tip */}
      <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Droplets className="h-4 w-4 text-secondary-600" />
          <h6 className="font-medium text-secondary-900">Hydration Tip</h6>
        </div>
        <p className="text-sm text-secondary-800">{insights.hydration}</p>
      </div>

      {/* Additional Info */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h6 className="font-medium text-neutral-900 mb-2">Temperature Impact on Performance</h6>
        <p className="text-xs text-neutral-600">
          Optimal performance typically occurs between 50-68°F (10-20°C). 
          Extreme temperatures can reduce performance by 10-20%.
        </p>
      </div>
    </div>
  )
}

export default TemperatureModal
