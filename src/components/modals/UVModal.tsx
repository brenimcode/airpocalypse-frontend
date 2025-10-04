import React from 'react'
import { Sun, Shield, AlertTriangle, Info } from 'lucide-react'

interface UVModalProps {
  isOpen: boolean
  onClose: () => void
  uvIndex: number
}

const UVModal: React.FC<UVModalProps> = ({ isOpen, onClose, uvIndex }) => {
  const getUVIcon = (index: number) => {
    if (index <= 2) return <Info className="h-8 w-8 text-green-500" />
    if (index <= 5) return <Sun className="h-8 w-8 text-yellow-500" />
    if (index <= 7) return <Sun className="h-8 w-8 text-orange-500" />
    if (index <= 10) return <AlertTriangle className="h-8 w-8 text-red-500" />
    return <AlertTriangle className="h-8 w-8 text-red-700" />
  }

  const getUVInsights = (index: number) => {
    if (index <= 2) {
      return {
        title: 'Low UV Index',
        risk: 'Minimal',
        insights: [
          'Safe for extended outdoor activities',
          'Minimal sun protection needed',
          'Good conditions for outdoor training',
          'Low risk of sunburn'
        ],
        recommendation: 'Enjoy outdoor activities with minimal sun protection requirements.',
        protection: 'Sunscreen SPF 15+ recommended for prolonged exposure.'
      }
    }
    
    if (index <= 5) {
      return {
        title: 'Moderate UV Index',
        risk: 'Low',
        insights: [
          'Safe for outdoor activities with protection',
          'Good conditions for training with sun care',
          'Moderate sun protection recommended',
          'Risk of sunburn increases with time'
        ],
        recommendation: 'Good conditions for outdoor training with proper sun protection.',
        protection: 'Sunscreen SPF 30+, hat, and sunglasses recommended.'
      }
    }
    
    if (index <= 7) {
      return {
        title: 'High UV Index',
        risk: 'Moderate',
        insights: [
          'Increased risk of sunburn',
          'Sun protection essential',
          'Limit midday outdoor activities',
          'Higher risk for athletes with light skin'
        ],
        recommendation: 'Train early morning or late afternoon. Use comprehensive sun protection.',
        protection: 'Sunscreen SPF 30+, protective clothing, hat, and sunglasses essential.'
      }
    }
    
    if (index <= 10) {
      return {
        title: 'Very High UV Index',
        risk: 'High',
        insights: [
          'High risk of sunburn and skin damage',
          'Not recommended for extended outdoor exposure',
          'Significant risk for all skin types',
          'Increased risk of heat-related illnesses'
        ],
        recommendation: 'Avoid outdoor training during peak hours (10 AM - 4 PM).',
        protection: 'Maximum sun protection required: SPF 50+, full coverage clothing, wide-brimmed hat.'
      }
    }
    
    return {
      title: 'Extreme UV Index',
      risk: 'Very High',
      insights: [
        'Extreme risk of sunburn and skin damage',
        'Indoor training strongly recommended',
        'Dangerous for all skin types',
        'High risk of heat stroke and dehydration'
      ],
      recommendation: 'Strongly recommend indoor training. Avoid outdoor activities.',
      protection: 'Maximum protection required if outdoor exposure is unavoidable.'
    }
  }

  const insights = getUVInsights(uvIndex)

  return (
    <div className="space-y-4">
      {/* UV Index Status */}
      <div className="flex items-center space-x-3">
        {getUVIcon(uvIndex)}
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">
            UV Index {uvIndex}
          </h4>
          <p className="text-sm text-neutral-600">Risk Level: {insights.risk}</p>
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

      {/* Protection Requirements */}
      <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Shield className="h-4 w-4 text-accent-600" />
          <h6 className="font-medium text-accent-900">Sun Protection Required</h6>
        </div>
        <p className="text-sm text-accent-800">{insights.protection}</p>
      </div>

      {/* UV Index Scale */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h6 className="font-medium text-neutral-900 mb-2">UV Index Scale</h6>
        <div className="space-y-1 text-xs text-neutral-600">
          <div className="flex justify-between">
            <span>0-2: Low</span>
            <span>3-5: Moderate</span>
          </div>
          <div className="flex justify-between">
            <span>6-7: High</span>
            <span>8-10: Very High</span>
          </div>
          <div className="flex justify-between">
            <span>11+: Extreme</span>
          </div>
        </div>
      </div>

      {/* Athlete Tips */}
      <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4">
        <h6 className="font-medium text-secondary-900 mb-2">Athlete Sun Safety Tips</h6>
        <ul className="text-xs text-secondary-800 space-y-1">
          <li>• Apply sunscreen 30 minutes before training</li>
          <li>• Reapply every 2 hours or after sweating</li>
          <li>• Use water-resistant sunscreen for sports</li>
          <li>• Wear UV-protective athletic clothing</li>
          <li>• Hydrate more in high UV conditions</li>
        </ul>
      </div>
    </div>
  )
}

export default UVModal
