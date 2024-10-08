import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CreditCard, User } from 'lucide-react'

const ParentPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('events')

  const tabContent = {
    events: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Événements à venir</h3>
        <ul className="space-y-4">
          <li>
            <span className="font-semibold">15 Mai 2024:</span> Journée portes ouvertes
          </li>
          <li>
            <span className="font-semibold">1 Juin 2024:</span> Début des examens finaux
          </li>
          <li>
            <span className="font-semibold">20 Juin 2024:</span> Cérémonie de remise des diplômes
          </li>
        </ul>
      </div>
    ),
    payments: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Paiements</h3>
        <ul className="space-y-4">
          <li>
            <span className="font-semibold">Frais de scolarité:</span> 500,000 FCFA (Payé)
          </li>
          <li>
            <span className="font-semibold">Frais de cantine:</span> 100,000 FCFA (En attente)
          </li>
          <li>
            <span className="font-semibold">Activités extrascolaires:</span> 50,000 FCFA (Payé)
          </li>
        </ul>
      </div>
    ),
    childInfo: (
      <div>
        <h3 className="text-xl font-semibold mb-4">Information de l'élève</h3>
        <ul className="space-y-4">
          <li>
            <span className="font-semibold">Nom:</span> Amadou Diallo
          </li>
          <li>
            <span className="font-semibold">Classe:</span> 3ème A
          </li>
          <li>
            <span className="font-semibold">Professeur principal:</span> M. Ibrahim Touré
          </li>
          <li>
            <span className="font-semibold">Moyenne générale:</span> 15.5/20
          </li>
        </ul>
      </div>
    ),
  }

  return (
    <section id="portail-des-parents" className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Portail des Parents</h2>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-6">
          <div className="flex flex-col sm:flex-row mb-6">
            <button
              className={`flex-1 py-2 px-4 mb-2 sm:mb-0 sm:mr-2 ${activeTab === 'events' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-200'}`}
              onClick={() => setActiveTab('events')}
            >
              <Calendar className="inline-block mr-2" /> Événements
            </button>
            <button
              className={`flex-1 py-2 px-4 mb-2 sm:mb-0 sm:mr-2 ${activeTab === 'payments' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-200'}`}
              onClick={() => setActiveTab('payments')}
            >
              <CreditCard className="inline-block mr-2" /> Paiements
            </button>
            <button
              className={`flex-1 py-2 px-4 ${activeTab === 'childInfo' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-600 dark:text-gray-200'}`}
              onClick={() => setActiveTab('childInfo')}
            >
              <User className="inline-block mr-2" /> Élève
            </button>
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="dark:text-white"
          >
            {tabContent[activeTab as keyof typeof tabContent]}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ParentPortal