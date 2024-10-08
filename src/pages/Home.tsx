import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white opacity-10 rounded-full transform rotate-45"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-white opacity-10 rounded-full transform rotate-45"></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<h1 className="text-5xl md:text-6xl font-bold mb-4 text-white gradient">
              Bienvenue à Tayamana
            </h1>



            <p className="text-2xl mb-6 text-blue-100">Éduquer pour bâtir l'avenir</p>
            <p className="mb-8 text-lg text-blue-50">
              Tayamana est une école d'excellence à Niamey, Niger, dédiée à
              former les leaders de demain dans un environnement stimulant et
              inclusif.
            </p>
            <motion.a
              href="#admissions"
              className="btn btn-secondary inline-flex items-center text-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Admissions <ArrowRight className="ml-2" />
            </motion.a>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/278843811_2330270223782778_5774952990286110521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ySGSrkTxb_MQ7kNvgFSY_JD&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AnkY1ocuZF-1y7EUkBKyE4S&oh=00_AYDQaDFLNSDQhnTKsx_OIlipVcRRxha3qxBmI5l0Zrw_MA&oe=67074A1D&auto=format&fit=crop&w=1470&q=80"
              alt="Étudiants de Tayamana"
              className="rounded-lg shadow-lg animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;