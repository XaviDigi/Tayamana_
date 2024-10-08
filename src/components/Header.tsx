import React, { useState, useEffect } from 'react'
import { School, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ['Accueil', 'À Propos', 'Admissions', 'Programmes', 'Vie Étudiante', 'Actualités', 'Enseignants', 'Portail des Parents', 'Contact']

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true)
      } else {
        setIsMenuOpen(false)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleMenu}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
        >
          {isMenuOpen ? <X className="text-blue-600" /> : <Menu className="text-blue-600" />}
        </button>
      )}
      <AnimatePresence>
        {(isMenuOpen || !isMobile) && (
          <motion.header 
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col"
            initial={{ x: -264 }}
            animate={{ x: 0 }}
            exit={{ x: -264 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 overflow-y-auto flex-grow">
              <motion.div 
                className="flex items-center mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <School className="text-blue-600 w-8 h-8 mr-2" />
                <h1 className="text-2xl font-bold text-blue-600">Tayamana</h1>
              </motion.div>
              
              <nav className="mb-8">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a 
                        href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a').replace('é', 'e')}`} 
                        className="block text-gray-800 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => isMobile && setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header