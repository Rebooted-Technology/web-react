import Sidebar from "./Sidebar";
import { StickyNavbar } from "./StickyNavbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <StickyNavbar />
      <div className="flex-1 md:ml-72 sm:ml-8 m-8 overflow-y-auto">
        
      </div>
    </div>
  )
}

export default Dashboard