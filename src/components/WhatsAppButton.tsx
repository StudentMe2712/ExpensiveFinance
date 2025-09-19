'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

const WhatsAppButton = ({ 
  phoneNumber = '77771234567', 
  message = 'Здравствуйте! Меня интересуют ваши финансовые услуги.',
  className = ''
}: WhatsAppButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Показываем через 3 секунды

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <button
        onClick={handleClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        title="Напишите нам в WhatsApp!"
      >
        <MessageCircle size={24} className="group-hover:animate-bounce" />
        
        {/* Пульсирующее кольцо */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Напишите нам в WhatsApp!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </button>
    </div>
  )
}

export default WhatsAppButton
