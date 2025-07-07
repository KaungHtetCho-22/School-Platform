
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut, 
  Video,
  GraduationCap,
  Menu,
  X
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "student" | "teacher" | "admin";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getNavigationItems = () => {
    switch (role) {
      case "student":
        return [
          { icon: Home, label: "Dashboard", path: "/student/dashboard" },
          { icon: Video, label: "Join Class", path: "/student/join" },
          { icon: FileText, label: "Assignments", path: "/student/assignments" },
          { icon: BarChart3, label: "Grades", path: "/student/grades" },
          { icon: Calendar, label: "Calendar", path: "/student/calendar" },
        ];
      case "teacher":
        return [
          { icon: Home, label: "Dashboard", path: "/teacher/dashboard" },
          { icon: Video, label: "Classroom", path: "/teacher/classroom" },
          { icon: FileText, label: "Materials", path: "/teacher/materials" },
          { icon: BarChart3, label: "Grading", path: "/teacher/grading" },
          { icon: Users, label: "Reports", path: "/teacher/reports" },
        ];
      case "admin":
        return [
          { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
          { icon: Users, label: "Users", path: "/admin/users" },
          { icon: GraduationCap, label: "Classes", path: "/admin/classes" },
          { icon: Calendar, label: "Attendance", path: "/admin/attendance" },
          { icon: Settings, label: "Settings", path: "/admin/settings" },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  const handleLogout = () => {
    navigate("/portal");
  };

  const getRoleColor = () => {
    switch (role) {
      case "student": return "bg-blue-600";
      case "teacher": return "bg-green-600";
      case "admin": return "bg-purple-600";
      default: return "bg-gray-600";
    }
  };

  const getRoleName = () => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${getRoleColor()} rounded-lg flex items-center justify-center`}>
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">ScholarConnect</h1>
              <p className="text-xs text-gray-500">{getRoleName()} Portal</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? `${getRoleColor()} text-white` 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium">Welcome back!</p>
              <p className="text-xs text-gray-500">{getRoleName()} Account</p>
            </div>
            <div className={`w-10 h-10 ${getRoleColor()} rounded-full flex items-center justify-center text-white font-bold`}>
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
