import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Tayamana</h3>
            <p>École à Niamey, Niger</p>
            <p>Éduquer pour bâtir l'avenir</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="hover:underline">Accueil</a></li>
              <li><a href="#a-propos" className="hover:underline">À Propos</a></li>
              <li><a href="#admissions" className="hover:underline">Admissions</a></li>
              <li><a href="#programmes" className="hover:underline">Programmes</a></li>
              <li><a href="#vie-etudiante" className="hover:underline">Vie Étudiante</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contactez-nous</h3>
            <p>123 Rue de l'Éducation, Niamey, Niger</p>
            <p>Téléphone: +227 12 34 56 78</p>
            <p>Email: contact@tayamana.edu</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Tayamana. Tous droits réservés.</p>
          <p className="mt-2">Made By <a href="https://xavidigi.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">XaviDigi.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
