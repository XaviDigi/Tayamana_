import React from 'react'

const Programs: React.FC = () => {
  return (
    <section id="programmes" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Programmes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Primaire</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Français</li>
              <li>Mathématiques</li>
              <li>Sciences</li>
              <li>Histoire-Géographie</li>
              <li>Arts plastiques</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Secondaire</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Littérature</li>
              <li>Mathématiques avancées</li>
              <li>Physique-Chimie</li>
              <li>Sciences de la Vie et de la Terre</li>
              <li>Langues étrangères</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Activités Extrascolaires</h3>
          <p className="mb-4">Nous offrons une variété d'activités pour enrichir l'expérience éducative de nos élèves :</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Club de débat</li>
            <li>Équipes sportives</li>
            <li>Club d'art et de musique</li>
            <li>Club de sciences et technologie</li>
            <li>Bénévolat et engagement communautaire</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Programs