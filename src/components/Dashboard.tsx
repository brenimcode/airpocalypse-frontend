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
  const userName = localStorage.getItem('userName') || 'Atleta'
  
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
    airQuality: 'Bom',
    uvIndex: 7,
    precipitation: 15,
    forecast: [
      { day: 'Hoje', temp: 28, condition: 'Ensolarado' },
      { day: 'Amanhã', temp: 26, condition: 'Parcialmente nublado' },
      { day: 'Qua', temp: 29, condition: 'Ensolarado' },
      { day: 'Qui', temp: 27, condition: 'Chuvoso' }
    ]
  }

  const getAirQualityColor = (quality: string) => {
    switch (quality) {
      case 'Excelente': return 'text-green-600 bg-green-100'
      case 'Bom': return 'text-blue-600 bg-blue-100'
      case 'Moderado': return 'text-yellow-600 bg-yellow-100'
      case 'Ruim': return 'text-orange-600 bg-orange-100'
      case 'Muito Ruim': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getUVColor = (index: number) => {
    if (index <= 2) return 'text-green-600 bg-green-100'
    if (index <= 5) return 'text-yellow-600 bg-yellow-100'
    if (index <= 7) return 'text-orange-600 bg-orange-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">
                Cerrado Protege
              </h1>
            </div>
            
            <nav className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <User className="h-4 w-4 mr-1" />
                Perfil
              </Link>
              <Link
                to="/notifications"
                className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <Bell className="h-4 w-4 mr-1" />
                Notificações
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Sair
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
            <h2 className="text-2xl font-bold text-gray-900">
              Olá, {userName}! Bem-vindo ao seu dashboard climático
            </h2>
          </div>
          <p className="text-gray-600">
            Monitoramento em tempo real das condições climáticas em Uberlândia para otimizar seus treinos
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
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Temperatura
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {weatherData.temperature}°C
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
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Umidade
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
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
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Vento
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {weatherData.windSpeed} km/h
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
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Qualidade do Ar
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
                  <h3 className="text-lg font-medium text-gray-900">Índice UV</h3>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mt-2 ${getUVColor(weatherData.uvIndex)}`}>
                    <Sun className="h-4 w-4 mr-1" />
                    {weatherData.uvIndex}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {weatherData.uvIndex}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Use protetor solar durante atividades ao ar livre
              </p>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Precipitação</h3>
                  <div className="text-2xl font-bold text-blue-600 mt-2">
                    {weatherData.precipitation}%
                  </div>
                </div>
                <Cloud className="h-12 w-12 text-blue-500" />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Chance de chuva nas próximas horas
              </p>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Previsão do Tempo</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-gray-900">{day.day}</div>
                  <div className="text-2xl font-bold text-gray-900 mt-2">{day.temp}°C</div>
                  <div className="text-sm text-gray-600 mt-1">{day.condition}</div>
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
