import {Menu} from 'lucide-react'
import BrandLogo from './BrandLogo'
export default function MobileHeader(){return <header className="flex h-16 items-center justify-between bg-[#1E4631] px-4 lg:hidden"><div className="h-11 w-28 overflow-hidden rounded-md"><BrandLogo className="h-full w-full object-contain "/></div><button aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full text-white hover:bg-white/10"><Menu size={24}/></button></header>}
