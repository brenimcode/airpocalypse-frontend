import React from 'react'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'

interface AirQualityModalProps {
  isOpen: boolean
  onClose: () => void
  airQuality: string
  aqi: number
}

const AirQualityModal: React.FC<AirQualityModalProps> = ({ isOpen, onClose, airQuality, aqi }) => {
  const getAirQualityIcon = (quality: string) => {
    switch (quality) {
      case 'Excellent':
      case 'Good':
        return <CheckCircle className="h-8 w-8 text-secondary-600" />
      case 'Moderate':
        return <Info className="h-8 w-8 text-yellow-600" />
      case 'Poor':
      case 'Very Poor':
        return <AlertTriangle className="h-8 w-8 text-red-600" />
      default:
        return <Info className="h-8 w-8 text-neutral-600" />
    }
  }

  const getAirQualityInsights = (quality: string) => {
    switch (quality) {
      case 'Excellent':
        return {
          title: 'Perfect Training Conditions',
          insights: [
            'Ideal air quality for all outdoor activities',
            'No respiratory stress expected during exercise',
            'Optimal conditions for endurance training',
            'Great day for high-intensity workouts'
          ],
          recommendation: 'Take advantage of these perfect conditions for your most demanding training sessions.'
        }
      case 'Good':
        return {
          title: 'Great Training Conditions',
          insights: [
            'Suitable for all outdoor activities',
            'Minimal impact on breathing performance',
            'Good conditions for moderate to high-intensity training',
            'Safe for extended outdoor sessions'
          ],
          recommendation: 'Excellent conditions for your training. You can push your limits safely.'
        }
      case 'Moderate':
        return {
          title: 'Moderate Air Quality',
          insights: [
            'Suitable for light to moderate activities',
            'Consider reducing intensity for sensitive individuals',
            'Monitor breathing during high-intensity sessions',
            'Good for shorter training sessions'
          ],
          recommendation: 'Consider reducing workout intensity if you experience breathing difficulties.'
        }
      case 'Poor':
        return {
          title: 'Poor Air Quality',
          insights: [
            'Not recommended for high-intensity outdoor activities',
            'Increased risk of respiratory irritation',
            'Consider indoor alternatives',
            'Limit outdoor training duration'
          ],
          recommendation: 'Consider moving your training indoors or reducing intensity significantly.'
        }
      case 'Very Poor':
        return {
          title: 'Very Poor Air Quality',
          insights: [
            'Not recommended for outdoor activities',
            'High risk of respiratory problems',
            'Indoor training strongly recommended',
            'Avoid prolonged outdoor exposure'
          ],
          recommendation: 'Strongly recommend indoor training or postponing outdoor activities.'
        }
      default:
        return {
          title: 'Air Quality Information',
          insights: ['Air quality data not available'],
          recommendation: 'Check back later for updated air quality information.'
        }
    }
  }

  const insights = getAirQualityInsights(airQuality)

  return (
    <div className="space-y-4">
      {/* Air Quality Status */}
      <div className="flex items-center space-x-3">
        {getAirQualityIcon(airQuality)}
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">{airQuality} Air Quality</h4>
          <p className="text-sm text-neutral-600">AQI: {aqi}</p>
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
        <h6 className="font-medium text-primary-900 mb-2">Athlete Recommendation</h6>
        <p className="text-sm text-primary-800">{insights.recommendation}</p>
      </div>

      {/* Additional Info */}
      <div className="bg-neutral-50 rounded-lg p-4">
        <h6 className="font-medium text-neutral-900 mb-2">About Air Quality Index (AQI)</h6>
        <p className="text-xs text-neutral-600">
          AQI measures air pollution levels. Lower values indicate cleaner air, 
          which is better for athletic performance and respiratory health.
        </p>
      </div>
    </div>
  )
}

export default AirQualityModal
