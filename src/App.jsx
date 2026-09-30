import {Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import UtilityHeader from './components/UtilityHeader'
import MobileHeader from './components/MobileHeader'
import BottomNav from './components/BottomNav'
import Storefront from './pages/Storefront'
import InfoPage from './pages/InfoPage'
export default function App(){return <div className="flex min-h-screen w-full overflow-x-hidden bg-[#FCFBF9]"><Sidebar/><div className="flex min-h-screen min-w-0 flex-1 flex-col overflow-hidden"><div className="lg:block"><UtilityHeader/></div><MobileHeader/><div className="min-h-0 flex-1 overflow-y-auto scrollbar-none"><Routes><Route path="/" element={<Storefront/>}/><Route path="/blends" element={<InfoPage route="/blends"/>}/><Route path="/groceries" element={<InfoPage route="/groceries"/>}/><Route path="/new-arrivals" element={<InfoPage route="/new-arrivals"/>}/><Route path="/recipes" element={<InfoPage route="/recipes"/>}/><Route path="/about" element={<InfoPage route="/about"/>}/><Route path="/contact" element={<InfoPage route="/contact"/>}/><Route path="/cart" element={<InfoPage route="/cart"/>}/><Route path="/profile" element={<InfoPage route="/profile"/>}/><Route path="*" element={<InfoPage route="/blends"/>}/></Routes></div></div><BottomNav/></div>}
