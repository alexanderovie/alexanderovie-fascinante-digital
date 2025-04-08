'use client'

import { X } from 'lucide-react'
import SidebarPro from '@/components/ui-pro/layout/SidebarPro'

type MobileSidebarWrapperProps = {
  onClose: () => void
}

const MobileSidebarWrapper = ({ onClose }: MobileSidebarWrapperProps) => {
  return (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Fondo oscuro opcional (blur o overlay) */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar como drawer lateral */}
      <div className="relative z-50 w-64 bg-white dark:bg-gray-900 shadow-lg h-full">
        {/* Botón para cerrar el sidebar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-50"
        >
          <X size={24} />
        </button>

        {/* Sidebar */}
        <SidebarPro />
      </div>
    </div>
  )
}

export default MobileSidebarWrapper