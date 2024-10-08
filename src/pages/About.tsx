import React from 'react'
import { BookOpen, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="a-propos" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À Propos de Nous
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center" variants={itemVariants}>
            <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Histoire</h3>
            <p>Fondée en 2000, Tayamana s'est engagée à offrir une éducation de qualité aux jeunes de Niamey et au-delà.</p>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Équipe</h3>
            <p>Nos enseignants et notre personnel sont dévoués à l'excellence académique et au développement personnel de chaque élève.</p>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <Award className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Nos Accréditations</h3>
            <p>Tayamana est fière d'être accréditée par le Ministère de l'Éducation du Niger et reconnue internationalement.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About