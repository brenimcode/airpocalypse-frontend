import React from 'react'
import { Wind, Flag, Shield } from 'lucide-react'

interface WindModalProps {
  isOpen: boolean
  onClose: () => void
  windSpeed: number
  unit: 'mph' | 'km/h'
}

const WindModal: React.FC<WindModalProps> = ({ isOpen, onClose, windSpeed, unit }) => {
  const getWindIcon = (speed: number, unit: string) => {
    const speedKmh = unit === 'mph' ? speed * 1.609 : speed
    
    if (speedKmh < 10) return <Wind className="h-8 w-8 text-green-500" />
    if (speedKmh < 25) return <Wind className="h-8 w-8 text-yellow-500" />
    if (speedKmh < 40) return <Wind className="h-8 w-8 text-orange-500" />
    return <Wind className="h-8 w-8 text-red-500" />
  }

  const getWindInsights = (speed: number, unit: string) => {
    const speedKmh = unit === 'mph' ? speed * 1.609 : speed
    
    if (speedKmh < 10) {
      return {
        title: 'Calm Wind Conditions',
        insights: [
          'Ideal for precision sports and technical training',
          'No wind resistance for running or cycling',
          'Perfect for outdoor photography and filming',
          'Stable conditions for equipment setup'
        ],
        recommendation: 'Excellent conditions for all outdoor activities. Ideal for performance testing.',
        sports: 'Perfect for: Running, Cycling, Golf, Tennis, Archery'
      }
    }
    
    if (speedKmh < 25) {
      return {
        title: 'Light to Moderate Winds',
        insights: [
          'Slight cooling effect during exercise',
          'Minimal impact on most sports performance',
          'Good for endurance activities',
          'May affect precision sports slightly'
        ],
        recommendation: 'Good conditions for most activities. Consider wind direction for planning.',
        sports: 'Good for: Most outdoor sports with minor adjustments'
      }
    }
    
    if (speedKmh < 40) {
      return {
        title: 'Moderate to Strong Winds',
        insights: [
          'Noticeable wind resistance for running/cycling',
          'May affect ball sports significantly',
          'Good cooling effect but can be distracting',
          'Equipment may need securing'
        ],
        recommendation: 'Adjust training intensity. Consider wind direction and plan routes accordingly.',
        sports: 'Challenging for: Cycling, Running, Ball sports, Precision activities'
      }
    }
    
    return {
      title: 'Strong Wind Conditions',
      insights: [
        'Significant impact on performance',
        'High risk of equipment damage',
        'Difficult to maintain balance',
        'Safety concerns for outdoor activities'
      ],
      recommendation: 'Consider indoor alternatives. If outdoors, use extreme caution and reduce intensity.',
      sports: 'Not recommended for: Most outdoor activities due to safety concerns'
    }
  }

  const insights = getWindInsights(windSpeed, unit)

  return (
    <div className="space-y-4">
      {/* Wind Status */}
      <div className="flex items-center space-x-3">
        {getWindIcon(windSpeed, unit)}
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">
            {windSpeed} {unit}
          </h4>
          <p className="text-sm text-neutral-600">Wind Speed</p>
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

      {/* Sports Impact */}
      <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
        <h6 className="font-medium text-secondary-900 mb-2">Sports Impact</h6>
        <p className="text-sm text-secondary-800">{insights.sports}</p>
      </div>

      {/* Wind Strategy Tips */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h6 className="font-medium text-neutral-900 mb-2">Wind Strategy Tips</h6>
        <ul className="text-xs text-neutral-600 space-y-1">
          <li>• Start against the wind, finish with the wind</li>
          <li>• Use wind as natural resistance training</li>
          <li>• Plan routes to minimize crosswinds</li>
          <li>• Adjust equipment and clothing for wind protection</li>
        </ul>
      </div>
    </div>
  )
}

export default WindModal
