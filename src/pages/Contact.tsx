import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-Nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Nos Coordonnées</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                <span>123 Rue de l'Éducation, Niamey, Niger</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-2" />
                <span>+227 12 34 56 78</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-2" />
                <span>contact@tayamana.edu</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Formulaire de Contact</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nom</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact