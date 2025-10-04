import React from 'react'
import { Cloud, CloudRain, CloudSnow, Sun } from 'lucide-react'

interface PrecipitationModalProps {
  isOpen: boolean
  onClose: () => void
  precipitation: number
  condition: string
}

const PrecipitationModal: React.FC<PrecipitationModalProps> = ({ isOpen, onClose, precipitation, condition }) => {
  const getPrecipitationIcon = (precip: number, condition: string) => {
    if (precip < 20) return <Sun className="h-8 w-8 text-yellow-500" />
    if (precip < 60) return <Cloud className="h-8 w-8 text-gray-500" />
    if (condition.toLowerCase().includes('snow')) return <CloudSnow className="h-8 w-8 text-blue-400" />
    return <CloudRain className="h-8 w-8 text-blue-500" />
  }

  const getPrecipitationInsights = (precip: number, condition: string) => {
    const conditionLower = condition.toLowerCase()
    
    if (precip < 20) {
      return {
        title: 'Low Precipitation Risk',
        insights: [
          'Excellent conditions for outdoor training',
          'Minimal risk of weather interruption',
          'Good for equipment-sensitive activities',
          'Ideal for long-duration training sessions'
        ],
        recommendation: 'Perfect conditions for outdoor activities. No weather concerns.',
        equipment: 'Standard equipment suitable. No special weather protection needed.'
      }
    }
    
    if (precip < 40) {
      return {
        title: 'Moderate Precipitation Risk',
        insights: [
          'Possible light rain or drizzle',
          'Most outdoor activities still possible',
          'May need weather contingency plans',
          'Good for training with weather adaptation'
        ],
        recommendation: 'Monitor conditions. Have backup plans for outdoor training.',
        equipment: 'Consider lightweight rain gear. Protect electronic devices.'
      }
    }
    
    if (precip < 60) {
      return {
        title: 'High Precipitation Risk',
        insights: [
          'Significant chance of rain',
          'Outdoor activities may be interrupted',
          'Safety concerns for certain sports',
          'Equipment protection essential'
        ],
        recommendation: 'Consider indoor alternatives or flexible scheduling.',
        equipment: 'Waterproof gear recommended. Protect all equipment from moisture.'
      }
    }
    
    if (conditionLower.includes('snow')) {
      return {
        title: 'Snow Conditions',
        insights: [
          'Winter sports conditions available',
          'Reduced traction for running/cycling',
          'Increased injury risk on slippery surfaces',
          'Specialized winter training opportunities'
        ],
        recommendation: 'Consider winter sports or indoor training. Use appropriate footwear.',
        equipment: 'Winter gear essential. Ice grips for footwear recommended.'
      }
    }
    
    return {
      title: 'Heavy Precipitation Expected',
      insights: [
        'High risk of weather interruption',
        'Safety concerns for outdoor activities',
        'Equipment damage risk',
        'Indoor training strongly recommended'
      ],
      recommendation: 'Strongly recommend indoor training or postponing outdoor activities.',
      equipment: 'Maximum protection required. Consider indoor alternatives.'
    }
  }

  const insights = getPrecipitationInsights(precipitation, condition)

  return (
    <div className="space-y-4">
      {/* Precipitation Status */}
      <div className="flex items-center space-x-3">
        {getPrecipitationIcon(precipitation, condition)}
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">
            {precipitation}% Chance
          </h4>
          <p className="text-sm text-neutral-600">{condition}</p>
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

      {/* Equipment Considerations */}
      <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
        <h6 className="font-medium text-secondary-900 mb-2">Equipment Considerations</h6>
        <p className="text-sm text-secondary-800">{insights.equipment}</p>
      </div>

      {/* Weather Adaptation Tips */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h6 className="font-medium text-neutral-900 mb-2">Weather Adaptation Tips</h6>
        <ul className="text-xs text-neutral-600 space-y-1">
          <li>• Check weather updates regularly during training</li>
          <li>• Have indoor backup plans ready</li>
          <li>• Adjust training intensity based on conditions</li>
          <li>• Use weather as opportunity for mental toughness training</li>
          <li>• Protect equipment from moisture and temperature changes</li>
        </ul>
      </div>

      {/* Precipitation Benefits */}
      <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
        <h6 className="font-medium text-accent-900 mb-2">Training in Different Conditions</h6>
        <div className="text-xs text-accent-800 space-y-1">
          <p><strong>Light Rain:</strong> Can provide cooling effect and mental challenge</p>
          <p><strong>Snow:</strong> Excellent for winter sports and cross-training</p>
          <p><strong>High Humidity:</strong> Increases heat tolerance and endurance</p>
        </div>
      </div>
    </div>
  )
}

export default PrecipitationModal
