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
    alert('Notification settings saved successfully!')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                to="/dashboard"
                className="flex items-center text-neutral-700 hover:text-primary-600 mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-1" />
                Back
              </Link>
              <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-neutral-900">
                Notification Settings
              </h1>
            </div>
            <button
              onClick={handleSave}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Save className="h-4 w-4 mr-1" />
              Save
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Email Notifications */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-6 py-4 border-b border-neutral-200">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-lg font-medium text-neutral-900">
                  Email Notifications
                </h2>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">
                    Enable email notifications
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Receive alerts and summaries by email
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
                    <span className="text-sm font-medium text-neutral-900">
                      Temperature Alerts
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.temperatureAlerts}
                    onChange={() => handleToggle('temperatureAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-sm font-medium text-neutral-900">
                      Air Quality
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.airQualityAlerts}
                    onChange={() => handleToggle('airQualityAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-neutral-900">
                      High UV Index
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.uvIndexAlerts}
                    onChange={() => handleToggle('uvIndexAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Cloud className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-sm font-medium text-neutral-900">
                      Precipitation
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.precipitationAlerts}
                    onChange={() => handleToggle('precipitationAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-neutral-900">
                      Strong Winds
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.windAlerts}
                    onChange={() => handleToggle('windAlerts')}
                    disabled={!settings.emailNotifications}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Summary Notifications */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-6 py-4 border-b border-neutral-200">
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-primary-600 mr-2" />
                <h2 className="text-lg font-medium text-neutral-900">
                  Summaries and Reports
                </h2>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900">
                      Daily Summary
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Receive daily weather conditions summary
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
                    <h3 className="text-sm font-medium text-neutral-900">
                      Weekly Summary
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Receive weekly weather conditions report
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
                    <h3 className="text-sm font-medium text-neutral-900">
                      Extreme Weather Alerts
                    </h3>
                    <p className="text-sm text-neutral-500">
                      Urgent notifications for extreme weather conditions
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
            <div className="px-6 py-4 border-b border-neutral-200">
              <h2 className="text-lg font-medium text-neutral-900">
                Notification Frequency
              </h2>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email frequency
                  </label>
                  <select
                    value={settings.emailFrequency}
                    onChange={(e) => handleSelectChange('emailFrequency', e.target.value)}
                    className="mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  >
                    <option value="immediate">Immediate</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>

                <div className="bg-accent-50 border border-accent-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Bell className="h-5 w-5 text-accent-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-accent-800">
                        Athlete Tip
                      </h3>
                      <div className="mt-2 text-sm text-accent-700">
                        <p>
                          Configure air quality and UV index alerts to optimize your training. 
                          Weather conditions can significantly affect your performance and health.
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
