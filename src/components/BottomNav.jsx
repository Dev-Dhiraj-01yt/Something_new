import {LayoutGrid,Home,ShoppingBag,User} from 'lucide-react'
import {NavLink} from 'react-router-dom'
const items=[['Home','/',Home],['Categories','/blends',LayoutGrid],['Cart','/cart',ShoppingBag],['Profile','/profile',User]]
export default function BottomNav(){return <nav className="fixed bottom-0 left-0 right-0 z-40 flex h-[68px] border-t border-gray-100 bg-white/95 px-2 backdrop-blur lg:hidden">{items.map(([label,to,Icon])=><NavLink key={to} to={to} className={({isActive})=>`relative flex flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium ${isActive?'text-[#1E4631]':'text-gray-400'}`}>{({isActive})=><><Icon size={19}/><span>{label}</span>{isActive&&<span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-[#1E4631]"/>}</>}</NavLink>)}</nav>}
