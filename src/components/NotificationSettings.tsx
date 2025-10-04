import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Bell, Mail, Save, AlertTriangle, Cloud, Sun, Wind } from 'lucide-react'

const NotificationSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    temperatureAlerts: true,
    airQualityAlerts: true,
    uvIndexAlerts: true,
    precipitationAlerts: false,
    windAlerts: true,
    dailyForecast: true,
    weeklySummary: true,
    extremeWeather: true,
    emailFrequency: 'daily'
  })

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }))
  }

  const handleSelectChange = (key: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleSave = () => {
    localStorage.setItem('notificationSettings', JSON.stringify(settings))
    alert('Configurações de notificação salvas com sucesso!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/dashboard"
                className="flex items-center text-gray-700 hover:text-primary-600 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Voltar
              </Link>
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CP</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">
                Configurações de Notificação
              </h1>
            </div>
            <button
              onClick={handleSave}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Save className="h-4 w-4 mr-1" />
              Salvar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Email Notifications */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">
                  Notificações por Email
                </h2>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Ativar notificações por email
                  </h3>
                  <p className="text-sm text-gray-500">
                    Receber alertas e resumos por email
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Thermometer className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      Alertas de Temperatura
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.temperatureAlerts}
                    onChange={() => handleToggle('temperatureAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      Qualidade do Ar
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.airQualityAlerts}
                    onChange={() => handleToggle('airQualityAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      Índice UV Alto
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.uvIndexAlerts}
                    onChange={() => handleToggle('uvIndexAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      Precipitação
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.precipitationAlerts}
                    onChange={() => handleToggle('precipitationAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-900">
                      Ventos Fortes
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.windAlerts}
                    onChange={() => handleToggle('windAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Notifications */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">
                  Resumos e Relatórios
                </h2>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Resumo Diário
                    </h3>
                    <p className="text-sm text-gray-500">
                      Receber resumo das condições climáticas diárias
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.dailyForecast}
                    onChange={() => handleToggle('dailyForecast')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Resumo Semanal
                    </h3>
                    <p className="text-sm text-gray-500">
                      Receber relatório semanal das condições climáticas
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.weeklySummary}
                    onChange={() => handleToggle('weeklySummary')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Alertas de Tempo Extremo
                    </h3>
                    <p className="text-sm text-gray-500">
                      Notificações urgentes para condições climáticas extremas
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.extremeWeather}
                    onChange={() => handleToggle('extremeWeather')}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Frequency Settings */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Frequência das Notificações
              </h2>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frequência dos emails
                  </label>
                  <select
                    value={settings.emailFrequency}
                    onChange={(e) => handleSelectChange('emailFrequency', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  >
                    <option value="immediate">Imediato</option>
                    <option value="hourly">A cada hora</option>
                    <option value="daily">Diário</option>
                    <option value="weekly">Semanal</option>
                  </select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Bell className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">
                        Dica para Atletas
                      </h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>
                          Configure alertas de qualidade do ar e índice UV para otimizar seus treinos. 
                          Condições climáticas podem afetar significativamente seu desempenho e saúde.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotificationSettings
