import { Facebook, Instagram, Mail, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const TopBarStrip = () => {
  return (
    <div>
        <div className="px-32 w-full bg-[#0a2855] text-white py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:enquire@FinanceGaze.com" className="text-sm">
                enquire@FinanceGaze.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="WhatsApp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.462.13-.61.136-.137.301-.354.451-.531.151-.177.2-.301.3-.502.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.242-.579-.487-.5-.672-.51-.172-.01-.371-.01-.571-.01-.2 0-.522.074-.796.359-.273.285-1.045.999-1.045 2.446 0 1.447 1.064 2.842 1.213 3.043.149.2 2.095 3.193 5.076 4.485.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M13.229 18.784l-.011.001-.01-.001c-3.223-.133-5.869-1.596-7.682-4.02l.002-.003C3.75 12.178 3.113 8.38 4.56 5.121l.002-.002c1.202-2.735 3.597-4.601 6.485-5.07h.002c3.578-.57 7.052.828 9.11 3.588l-.008-.007c2.229 2.98 2.679 6.956 1.074 10.36l.006-.013c-1.445 3.095-4.377 5.16-7.769 5.469l-.033.002c-1.033.061-2.069.05-3.101-.032z" />
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TopBarStrip