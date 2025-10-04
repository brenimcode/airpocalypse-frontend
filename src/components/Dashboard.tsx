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
  MapPin
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
          <div className="flex items-center mb-6">
            <MapPin className="h-5 w-5 text-primary-600 mr-2" />
            <h2 className="text-2xl font-bold text-neutral-900">
              Hello, {userName}! Welcome to your climate dashboard
            </h2>
          </div>
          <p className="text-neutral-600">
            Real-time monitoring of weather conditions in {userRegion} to optimize your training
          </p>
        </div>

        {/* Current Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Thermometer className="h-6 w-6 text-orange-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-neutral-500 truncate">
                      Temperature
                    </dt>
                    <dd className="text-lg font-medium text-neutral-900">
                      {Math.round(weatherData.temperature * 9/5 + 32)}°F
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Droplets className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-neutral-500 truncate">
                      Humidity
                    </dt>
                    <dd className="text-lg font-medium text-neutral-900">
                      {weatherData.humidity}%
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Wind className="h-6 w-6 text-gray-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-neutral-500 truncate">
                      Wind
                    </dt>
                    <dd className="text-lg font-medium text-neutral-900">
                      {Math.round(weatherData.windSpeed * 0.621371)} mph
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-neutral-500 truncate">
                      Air Quality
                    </dt>
                    <dd className={`text-sm font-medium px-2 py-1 rounded-full ${getAirQualityColor(weatherData.airQuality)}`}>
                      {weatherData.airQuality}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UV Index and Precipitation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">UV Index</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${getUVColor(weatherData.uvIndex)}`}>
                    <Sun className="h-4 w-4 mr-1" />
                    {weatherData.uvIndex}
                  </div>
                </div>
                <div className="text-3xl font-bold text-neutral-900">
                  {weatherData.uvIndex}
                </div>
              </div>
              <p className="text-sm text-neutral-600 mt-2">
                Use sunscreen during outdoor activities
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">Precipitation</h3>
                  <div className="text-2xl font-bold text-blue-600 mt-2">
                    {weatherData.precipitation}%
                  </div>
                </div>
                <Cloud className="h-12 w-12 text-blue-500" />
              </div>
              <p className="text-sm text-neutral-600 mt-2">
                Chance of rain in the next few hours
              </p>
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
