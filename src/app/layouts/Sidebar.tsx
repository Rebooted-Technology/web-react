import { DashboardMenuState } from "./Dashboard";

interface SidebarNavbarProps {
  menuState: DashboardMenuState
}

const menuStateToWidth = (menuState: DashboardMenuState) => {
  switch (menuState) {
    case DashboardMenuState.Collapsed:
      return "w-0"
    case DashboardMenuState.Expanded:
      return "w-full"
    default:
      return "w-64"
  }
}

const Sidebar: React.FC<SidebarNavbarProps> = ({ menuState }) => {
  const width = menuStateToWidth(menuState)
  return (
    <aside
      className={`fixed inset-0 mt-16 ${width} rounded-none border-0 border-r border-blue-gray-100 bg-blue-gray-50 overflow-auto transition-all duration-300`}
    >
    </aside>
  )
}

export default Sidebar