import React from 'react';

const News: React.FC = () => {
  return (
    <section id="actualites" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Actualités et Événements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/278843811_2330270223782778_5774952990286110521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ySGSrkTxb_MQ7kNvgFSY_JD&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AnkY1ocuZF-1y7EUkBKyE4S&oh=00_AYDQaDFLNSDQhnTKsx_OIlipVcRRxha3qxBmI5l0Zrw_MA&oe=67074A1D&auto=format&fit=crop&w=1470&q=80"
              alt="Cérémonie de remise des diplômes"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Cérémonie de remise des diplômes 2024
              </h3>
              <p className="text-gray-600 mb-4">
                Rejoignez-nous pour célébrer la réussite de nos diplômés le 15
                juillet 2024.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Lire la suite
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/278843811_2330270223782778_5774952990286110521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ySGSrkTxb_MQ7kNvgFSY_JD&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AnkY1ocuZF-1y7EUkBKyE4S&oh=00_AYDQaDFLNSDQhnTKsx_OIlipVcRRxha3qxBmI5l0Zrw_MA&oe=67074A1D&auto=format&fit=crop&w=1470&q=80"
              alt="Nouveau programme STEM"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Lancement du nouveau programme STEM
              </h3>
              <p className="text-gray-600 mb-4">
                Tayamana introduit un programme innovant en sciences,
                technologie, ingénierie et mathématiques.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Lire la suite
              </a>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/278843811_2330270223782778_5774952990286110521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ySGSrkTxb_MQ7kNvgFSY_JD&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AnkY1ocuZF-1y7EUkBKyE4S&oh=00_AYDQaDFLNSDQhnTKsx_OIlipVcRRxha3qxBmI5l0Zrw_MA&oe=67074A1D&auto=format&fit=crop&w=1470&q=80"
              alt="Journée portes ouvertes"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Journée portes ouvertes
              </h3>
              <p className="text-gray-600 mb-4">
                Venez découvrir Tayamana lors de notre journée portes ouvertes
                le 10 septembre 2024.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                Lire la suite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
