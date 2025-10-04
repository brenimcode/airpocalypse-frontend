import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Cloud, 
  Thermometer, 
  Wind, 
  Droplets, 
  Sun, 
  AlertTriangle, 
  User, 
  Bell, 
  LogOut,
  MapPin,
  Info,
  CheckCircle,
  Shield
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const userName = localStorage.getItem('userName') || 'Athlete'
  const userRegion = localStorage.getItem('userRegion') || 'North America'
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userName')
    window.location.href = '/login'
  }

  const weatherData = {
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    airQuality: 'Good',
    uvIndex: 7,
    precipitation: 15,
    forecast: [
      { day: 'Today', temp: 78, condition: 'Sunny' },
      { day: 'Tomorrow', temp: 75, condition: 'Partly Cloudy' },
      { day: 'Wed', temp: 82, condition: 'Sunny' },
      { day: 'Thu', temp: 79, condition: 'Rainy' }
    ]
  }

  const getAirQualityColor = (quality: string) => {
    switch (quality) {
      case 'Excellent': return 'text-secondary-600 bg-secondary-100'
      case 'Good': return 'text-primary-600 bg-primary-100'
      case 'Moderate': return 'text-yellow-600 bg-yellow-100'
      case 'Poor': return 'text-orange-600 bg-orange-100'
      case 'Very Poor': return 'text-red-600 bg-red-100'
      default: return 'text-neutral-600 bg-neutral-100'
    }
  }

  const getUVColor = (index: number) => {
    if (index <= 2) return 'text-secondary-600 bg-secondary-100'
    if (index <= 5) return 'text-yellow-600 bg-yellow-100'
    if (index <= 7) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  // Insight functions
  const getAirQualityInsight = (quality: string) => {
    switch (quality) {
      case 'Excellent':
        return {
          title: 'Perfect Training Conditions',
          insight: 'Ideal air quality for all outdoor activities with no respiratory stress expected.',
          recommendation: 'Take advantage for your most demanding training sessions.'
        }
      case 'Good':
        return {
          title: 'Great Training Conditions',
          insight: 'Suitable for all outdoor activities with minimal impact on breathing performance.',
          recommendation: 'Excellent conditions for pushing your limits safely.'
        }
      case 'Moderate':
        return {
          title: 'Moderate Air Quality',
          insight: 'Suitable for light to moderate activities, consider reducing intensity for sensitive individuals.',
          recommendation: 'Monitor breathing during high-intensity sessions.'
        }
      case 'Poor':
        return {
          title: 'Poor Air Quality',
          insight: 'Not recommended for high-intensity outdoor activities due to respiratory irritation risk.',
          recommendation: 'Consider indoor alternatives or reduce intensity significantly.'
        }
      default:
        return {
          title: 'Very Poor Air Quality',
          insight: 'High risk of respiratory problems, indoor training strongly recommended.',
          recommendation: 'Strongly recommend indoor training or postponing outdoor activities.'
        }
    }
  }

  const getTemperatureInsight = (temp: number) => {
    const tempF = Math.round(temp * 9/5 + 32)
    if (tempF < 50) {
      return {
        title: 'Cold Weather Training',
        insight: 'Optimal for endurance activities with reduced heat stress and dehydration risk.',
        recommendation: 'Excellent for long-distance training. Ensure proper warm-up and layering.'
      }
    } else if (tempF < 75) {
      return {
        title: 'Cool Training Conditions',
        insight: 'Ideal for high-intensity training with optimal muscle performance.',
        recommendation: 'Perfect conditions for most training activities. Ideal for performance testing.'
      }
    } else if (tempF < 85) {
      return {
        title: 'Warm Training Conditions',
        insight: 'Good for most training activities with increased sweating and fluid loss.',
        recommendation: 'Suitable for training with increased attention to hydration and cooling.'
      }
    } else {
      return {
        title: 'Hot Weather Training',
        insight: 'High risk of heat-related illnesses with significantly reduced performance capacity.',
        recommendation: 'Limit outdoor training intensity and duration. Consider early morning or evening sessions.'
      }
    }
  }

  const getHumidityInsight = (humidity: number) => {
    if (humidity < 40) {
      return {
        title: 'Low Humidity Conditions',
        insight: 'Dry air can cause increased water loss with better heat dissipation.',
        recommendation: 'Increase fluid intake significantly. Monitor hydration closely.'
      }
    } else if (humidity < 60) {
      return {
        title: 'Ideal Humidity Range',
        insight: 'Optimal conditions for most sports with balanced heat dissipation.',
        recommendation: 'Perfect conditions for training. Standard hydration protocols apply.'
      }
    } else if (humidity < 80) {
      return {
        title: 'High Humidity Conditions',
        insight: 'Reduced heat dissipation efficiency with increased perceived heat stress.',
        recommendation: 'Reduce training intensity and increase rest periods. Focus on hydration.'
      }
    } else {
      return {
        title: 'Very High Humidity',
        insight: 'Extremely difficult heat dissipation with high risk of heat-related illnesses.',
        recommendation: 'Consider indoor training or postpone outdoor activities. High health risk.'
      }
    }
  }

  const getWindInsight = (speed: number) => {
    const speedMph = Math.round(speed * 0.621371)
    if (speedMph < 10) {
      return {
        title: 'Calm Wind Conditions',
        insight: 'Ideal for precision sports and technical training with no wind resistance.',
        recommendation: 'Excellent conditions for all outdoor activities. Ideal for performance testing.'
      }
    } else if (speedMph < 25) {
      return {
        title: 'Light to Moderate Winds',
        insight: 'Slight cooling effect during exercise with minimal impact on most sports.',
        recommendation: 'Good conditions for most activities. Consider wind direction for planning.'
      }
    } else if (speedMph < 40) {
      return {
        title: 'Moderate to Strong Winds',
        insight: 'Noticeable wind resistance for running/cycling with good cooling effect.',
        recommendation: 'Adjust training intensity. Consider wind direction and plan routes accordingly.'
      }
    } else {
      return {
        title: 'Strong Wind Conditions',
        insight: 'Significant impact on performance with high risk of equipment damage.',
        recommendation: 'Consider indoor alternatives. If outdoors, use extreme caution and reduce intensity.'
      }
    }
  }

  const getUVInsight = (index: number) => {
    if (index <= 2) {
      return {
        title: 'Low UV Index',
        insight: 'Safe for extended outdoor activities with minimal sun protection needed.',
        recommendation: 'Enjoy outdoor activities with minimal sun protection requirements.'
      }
    } else if (index <= 5) {
      return {
        title: 'Moderate UV Index',
        insight: 'Safe for outdoor activities with protection, moderate sun protection recommended.',
        recommendation: 'Good conditions for outdoor training with proper sun protection.'
      }
    } else if (index <= 7) {
      return {
        title: 'High UV Index',
        insight: 'Increased risk of sunburn with sun protection essential.',
        recommendation: 'Train early morning or late afternoon. Use comprehensive sun protection.'
      }
    } else {
      return {
        title: 'Very High UV Index',
        insight: 'High risk of sunburn and skin damage, not recommended for extended outdoor exposure.',
        recommendation: 'Avoid outdoor training during peak hours (10 AM - 4 PM).'
      }
    }
  }

  const getPrecipitationInsight = (precip: number) => {
    if (precip < 20) {
      return {
        title: 'Low Precipitation Risk',
        insight: 'Excellent conditions for outdoor training with minimal risk of weather interruption.',
        recommendation: 'Perfect conditions for outdoor activities. No weather concerns.'
      }
    } else if (precip < 40) {
      return {
        title: 'Moderate Precipitation Risk',
        insight: 'Possible light rain or drizzle, most outdoor activities still possible.',
        recommendation: 'Monitor conditions. Have backup plans for outdoor training.'
      }
    } else if (precip < 60) {
      return {
        title: 'High Precipitation Risk',
        insight: 'Significant chance of rain with outdoor activities may be interrupted.',
        recommendation: 'Consider indoor alternatives or flexible scheduling.'
      }
    } else {
      return {
        title: 'Heavy Precipitation Expected',
        insight: 'High risk of weather interruption with safety concerns for outdoor activities.',
        recommendation: 'Strongly recommend indoor training or postponing outdoor activities.'
      }
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-neutral-900">
                Smart Athlete
              </h1>
            </div>
            
            <nav className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="flex items-center text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <User className="h-4 w-4 mr-1" />
                Profile
              </Link>
              <Link
                to="/notifications"
                className="flex items-center text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Bell className="h-4 w-4 mr-1" />
                Notifications
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center text-neutral-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Sign Out
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-neutral-900">
              Welcome Back, {userName.split(' ')[0]}!
            </h2>
            
            {/* Region Mini Modal */}
            <div className="bg-white border border-neutral-200 rounded-lg shadow-sm p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-sm font-medium text-neutral-700">Region:</span>
                <span className="text-sm text-neutral-600">{userRegion}</span>
              </div>
            </div>
          </div>
        </div>

        {/* General Insight */}
        <div className="px-4 py-6 sm:px-0 mb-8">
          <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-xl p-8 shadow-lg min-h-[70vh] flex flex-col justify-between">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                How is swimming training today?
              </h2>
              
              <div className="mb-4">
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  With {weatherData.airQuality.toLowerCase()} air quality and {Math.round(weatherData.temperature * 9/5 + 32)}°F temperature, 
                  conditions are {weatherData.airQuality === 'Good' && weatherData.temperature < 30 ? 'excellent' : 'moderate'} for outdoor training. 
                  The {weatherData.humidity}% humidity provides good heat dissipation, making it ideal for 
                  {weatherData.temperature < 25 ? ' high-intensity' : ' moderate-intensity'} workouts.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <h3 className="font-semibold text-xl mb-3">Ideal Exercise:</h3>
                  <p className="text-xl mb-2">
                    {weatherData.precipitation > 50 || weatherData.airQuality === 'Poor' || weatherData.airQuality === 'Very Poor' 
                      ? '🏊‍♂️ Indoor' 
                      : '🏊‍♂️ Outdoor'}
                  </p>
                  <p className="text-base opacity-90">
                    {weatherData.precipitation > 50 || weatherData.airQuality === 'Poor' || weatherData.airQuality === 'Very Poor'
                      ? 'Adverse conditions recommend training in covered pool'
                      : 'Favorable conditions for outdoor training'}
                  </p>
                </div>

                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <h3 className="font-semibold text-xl mb-3">Action Recommendations:</h3>
                  <ul className="space-y-2 text-base">
                    {weatherData.temperature > 25 && (
                      <li>• Drink more water - high dehydration risk</li>
                    )}
                    {weatherData.humidity > 70 && (
                      <li>• Extra hydration due to high humidity</li>
                    )}
                    {weatherData.uvIndex > 6 && (
                      <li>• Use water-resistant sunscreen</li>
                    )}
                    {weatherData.windSpeed > 20 && (
                      <li>• Be careful with stronger waves and currents</li>
                    )}
                    {weatherData.airQuality === 'Good' && weatherData.temperature < 30 && (
                      <li>• Perfect conditions - take advantage for intense training</li>
                    )}
                    <li>• Stretch well before and after training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm opacity-75">
                More detailed information can be found below ↓
              </p>
            </div>
          </div>
        </div>

        {/* Current Weather with Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Temperature Card */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Thermometer className="h-8 w-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Temperature</h3>
                  <p className="text-2xl font-bold text-orange-600">{Math.round(weatherData.temperature * 9/5 + 32)}°F</p>
                </div>
              </div>
              {(() => {
                const insight = getTemperatureInsight(weatherData.temperature)
                return (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-900">{insight.title}</h4>
                      <p className="text-sm text-neutral-600">{insight.insight}</p>
                    </div>
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                      <p className="text-sm text-primary-800"><strong>Recommendation:</strong> {insight.recommendation}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Humidity Card */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Droplets className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Humidity</h3>
                  <p className="text-2xl font-bold text-blue-600">{weatherData.humidity}%</p>
                </div>
              </div>
              {(() => {
                const insight = getHumidityInsight(weatherData.humidity)
                return (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-900">{insight.title}</h4>
                      <p className="text-sm text-neutral-600">{insight.insight}</p>
                    </div>
                    <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-3">
                      <p className="text-sm text-secondary-800"><strong>Recommendation:</strong> {insight.recommendation}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Wind Card */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Wind className="h-8 w-8 text-gray-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Wind</h3>
                  <p className="text-2xl font-bold text-gray-600">{Math.round(weatherData.windSpeed * 0.621371)} mph</p>
                </div>
              </div>
              {(() => {
                const insight = getWindInsight(weatherData.windSpeed)
                return (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-900">{insight.title}</h4>
                      <p className="text-sm text-neutral-600">{insight.insight}</p>
                    </div>
                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-3">
                      <p className="text-sm text-accent-800"><strong>Recommendation:</strong> {insight.recommendation}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Air Quality Card */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-green-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Air Quality</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getAirQualityColor(weatherData.airQuality)}`}>
                    {weatherData.airQuality}
                  </div>
                </div>
              </div>
              {(() => {
                const insight = getAirQualityInsight(weatherData.airQuality)
                return (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-900">{insight.title}</h4>
                      <p className="text-sm text-neutral-600">{insight.insight}</p>
                    </div>
                    <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-3">
                      <p className="text-sm text-secondary-800"><strong>Recommendation:</strong> {insight.recommendation}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>

        {/* UV Index and Precipitation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* UV Index Card */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">UV Index</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getUVColor(weatherData.uvIndex)}`}>
                    {weatherData.uvIndex}
                  </div>
                </div>
              </div>
              {(() => {
                const insight = getUVInsight(weatherData.uvIndex)
                return (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-900">{insight.title}</h4>
                      <p className="text-sm text-neutral-600">{insight.insight}</p>
                    </div>
                    <div className="bg-accent-50 border border-accent-200 rounded-lg p-3">
                      <p className="text-sm text-accent-800"><strong>Recommendation:</strong> {insight.recommendation}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>

          {/* Precipitation Card */}
          <div className="bg-white shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900">Precipitation</h3>
                  <p className="text-2xl font-bold text-blue-600">{weatherData.precipitation}%</p>
                </div>
              </div>
              {(() => {
                const insight = getPrecipitationInsight(weatherData.precipitation)
                return (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-neutral-900">{insight.title}</h4>
                      <p className="text-sm text-neutral-600">{insight.insight}</p>
                    </div>
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                      <p className="text-sm text-primary-800"><strong>Recommendation:</strong> {insight.recommendation}</p>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h3 className="text-lg font-medium text-neutral-900">Weather Forecast</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="text-center p-4 bg-neutral-50 rounded-lg">
                  <div className="text-sm font-medium text-neutral-900">{day.day}</div>
                  <div className="text-2xl font-bold text-neutral-900 mt-2">{day.temp}°F</div>
                  <div className="text-sm text-neutral-600 mt-1">{day.condition}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
