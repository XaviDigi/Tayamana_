import React from 'react'
import { ClipboardList, Calendar, CreditCard } from 'lucide-react'

const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Admissions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ClipboardList className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Processus d'Admission</h3>
            <p>Découvrez les étapes pour rejoindre Tayamana, de la demande initiale à l'inscription finale.</p>
            <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">En savoir plus</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dates Importantes</h3>
            <p>Consultez notre calendrier pour les dates limites d'admission, les journées portes ouvertes et plus encore.</p>
            <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Voir le calendrier</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <CreditCard className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frais de Scolarité</h3>
            <p>Informations sur les frais de scolarité, les options de paiement et les bourses disponibles.</p>
            <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">Détails des frais</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admissions