import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, User, Mail, MapPin, Calendar, Save } from 'lucide-react'

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: localStorage.getItem('userName') || '',
    email: localStorage.getItem('userEmail') || '',
    birthDate: '',
    sport: '',
    experience: '',
    location: 'Uberlândia, MG'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    localStorage.setItem('userName', formData.name)
    localStorage.setItem('userEmail', formData.email)
    setIsEditing(false)
    alert('Perfil atualizado com sucesso!')
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
                Meu Perfil
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">
                  Informações Pessoais
                </h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Editar
                  </button>
                ) : (
                  <div className="space-x-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSave}
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      <Save className="h-4 w-4 mr-1" />
                      Salvar
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 py-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-1" />
                    Nome Completo
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-gray-900">{formData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-gray-900">{formData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    Localização
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-gray-900">{formData.location}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    Data de Nascimento
                  </label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                  ) : (
                    <p className="text-gray-900">
                      {formData.birthDate || 'Não informado'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modalidade Esportiva
                  </label>
                  {isEditing ? (
                    <select
                      name="sport"
                      value={formData.sport}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                      <option value="">Selecione uma modalidade</option>
                      <option value="corrida">Corrida</option>
                      <option value="ciclismo">Ciclismo</option>
                      <option value="natacao">Natação</option>
                      <option value="futebol">Futebol</option>
                      <option value="tenis">Tênis</option>
                      <option value="basquete">Basquete</option>
                      <option value="volei">Vôlei</option>
                      <option value="outro">Outro</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">
                      {formData.sport || 'Não informado'}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Experiência
                  </label>
                  {isEditing ? (
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                      <option value="">Selecione seu nível</option>
                      <option value="iniciante">Iniciante</option>
                      <option value="intermediario">Intermediário</option>
                      <option value="avancado">Avançado</option>
                      <option value="profissional">Profissional</option>
                    </select>
                  ) : (
                    <p className="text-gray-900">
                      {formData.experience || 'Não informado'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="mt-6 bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Preferências do Dashboard
              </h2>
            </div>
            <div className="px-6 py-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Tema Escuro
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ativar interface escura
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Unidades Métricas
                    </h3>
                    <p className="text-sm text-gray-500">
                      Usar Celsius e km/h
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile
