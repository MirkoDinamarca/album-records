import React from 'react'

const Footer = () => {
  return (
    <div className="inset-x-0 fixed bottom-0 p-6 bg-gray-700 ">
      <div className="flex h-12 justify-between text-base mt-6">
        <div>Contactanos: 2997007632</div>
        <div>
          <span>
            <svg className="h-4 w-4 text-neutral-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            album_records_ok
          </span>
        </div>
        <div>todos los derechos reservados</div>
      </div>
    </div>
  )
}

export default Footer