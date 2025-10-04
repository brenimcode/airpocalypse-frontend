import React from 'react'
import { Droplets, Cloud, Sun } from 'lucide-react'

interface HumidityModalProps {
  isOpen: boolean
  onClose: () => void
  humidity: number
}

const HumidityModal: React.FC<HumidityModalProps> = ({ isOpen, onClose, humidity }) => {
  const getHumidityIcon = (humidity: number) => {
    if (humidity < 30) return <Sun className="h-8 w-8 text-yellow-600" />
    if (humidity < 60) return <Droplets className="h-8 w-8 text-blue-500" />
    return <Cloud className="h-8 w-8 text-gray-500" />
  }

  const getHumidityInsights = (humidity: number) => {
    if (humidity < 30) {
      return {
        title: 'Low Humidity Conditions',
        insights: [
          'Dry air can cause increased water loss',
          'Higher risk of dehydration',
          'Improved heat dissipation from skin',
          'Potential for dry throat and nasal passages'
        ],
        recommendation: 'Increase fluid intake significantly. Consider using a humidifier indoors.',
        performance: 'Better heat tolerance but monitor hydration closely.'
      }
    }
    
    if (humidity < 60) {
      return {
        title: 'Ideal Humidity Range',
        insights: [
          'Optimal conditions for most sports',
          'Balanced heat dissipation and moisture retention',
          'Comfortable breathing conditions',
          'Good for both endurance and power sports'
        ],
        recommendation: 'Perfect conditions for training. Standard hydration protocols apply.',
        performance: 'Optimal performance conditions with minimal environmental stress.'
      }
    }
    
    if (humidity < 80) {
      return {
        title: 'High Humidity Conditions',
        insights: [
          'Reduced heat dissipation efficiency',
          'Increased perceived heat stress',
          'Higher risk of overheating',
          'Sweat may not evaporate effectively'
        ],
        recommendation: 'Reduce training intensity and increase rest periods. Focus on hydration.',
        performance: 'Performance may be reduced by 5-15% due to heat stress.'
      }
    }
    
    return {
      title: 'Very High Humidity',
      insights: [
        'Extremely difficult heat dissipation',
        'High risk of heat-related illnesses',
        'Significantly reduced performance capacity',
        'Sweat accumulation on skin'
      ],
      recommendation: 'Consider indoor training or postpone outdoor activities. High health risk.',
      performance: 'Performance can be reduced by 20-30% in extreme humidity.'
    }
  }

  const insights = getHumidityInsights(humidity)

  return (
    <div className="space-y-4">
      {/* Humidity Status */}
      <div className="flex items-center space-x-3">
        {getHumidityIcon(humidity)}
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">
            {humidity}% Humidity
          </h4>
          <p className="text-sm text-neutral-600">Relative Humidity</p>
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

      {/* Performance Impact */}
      <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
        <h6 className="font-medium text-accent-900 mb-2">Performance Impact</h6>
        <p className="text-sm text-accent-800">{insights.performance}</p>
      </div>

      {/* Heat Index Info */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h6 className="font-medium text-neutral-900 mb-2">Humidity & Heat Index</h6>
        <p className="text-xs text-neutral-600">
          High humidity makes temperatures feel much hotter because sweat cannot evaporate effectively. 
          This increases the risk of heat-related illnesses during exercise.
        </p>
      </div>
    </div>
  )
}

export default HumidityModal
