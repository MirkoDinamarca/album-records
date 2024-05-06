import React from 'react'

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 p-3 bg-gray-700 ">
      <div className="flex h-6 justify-between mt-0">
        <div>Contactanos: 299700763X</div>
        <div>
          <span className="flex items-center mr-2">
            <svg className="h-6 w-6 text-neutral-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            album_records_ok
          </span>
        </div>
        <div>todos los derechos reservados</div>
      </div>
    </div>
  )
}

export default Footer