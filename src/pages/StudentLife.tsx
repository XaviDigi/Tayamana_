import React from 'react';

const StudentLife: React.FC = () => {
  return (
    <section id="vie-etudiante" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Vie Étudiante</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/278494182_2330270230449444_305162930193861251_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dy6G-6w52wsQ7kNvgFMlvD_&_nc_ht=scontent-nrt1-1.xx&_nc_gid=ANoWu5cVvN03czS7y7Tug2l&oh=00_AYAzve3D0S5jOvYC1pR0KeOQYgW4COlSRgz_BpYFuU7PmQ&oe=670724D6&auto=format&fit=crop&w=1470&q=80"
              alt="Vie étudiante à Tayamana"
              className="rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Une Communauté Dynamique
            </h3>
            <p>
              À Tayamana, la vie étudiante est riche et variée. Nos élèves
              participent à de nombreuses activités qui favorisent leur
              épanouissement personnel et leur sens de la communauté.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Événements et Activités
            </h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Journée culturelle annuelle</h4>
                <p>
                  Célébration de la diversité culturelle de notre communauté
                  scolaire.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">
                  Compétitions sportives inter-écoles
                </h4>
                <p>
                  Participation à des tournois dans diverses disciplines
                  sportives.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Club de lecture</h4>
                <p>
                  Rencontres hebdomadaires pour discuter de livres et promouvoir
                  la lecture.
                </p>
              </li>
              <li>
                <h4 className="font-semibold">Projets environnementaux</h4>
                <p>
                  Initiatives écologiques menées par les élèves pour
                  sensibiliser à la protection de l'environnement.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
