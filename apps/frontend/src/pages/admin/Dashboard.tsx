
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const AdminDashboard = () => {
  const systemStats = [
    { label: "Total Students", value: "1,247", change: "+12", trend: "up" },
    { label: "Active Teachers", value: "89", change: "+3", trend: "up" },
    { label: "Classes Today", value: "156", change: "-5", trend: "down" },
    { label: "System Uptime", value: "99.8%", change: "+0.2%", trend: "up" },
  ];

  const recentAlerts = [
    { id: 1, type: "warning", message: "Low storage space on server", time: "2h ago", severity: "medium" },
    { id: 2, type: "info", message: "New teacher account created", time: "4h ago", severity: "low" },
    { id: 3, type: "success", message: "Backup completed successfully", time: "6h ago", severity: "low" },
  ];

  const activeClasses = [
    { id: 1, subject: "Mathematics", teacher: "Ms. Johnson", students: 28, room: "Virtual A" },
    { id: 2, subject: "Chemistry", teacher: "Dr. Smith", students: 24, room: "Virtual B" },
    { id: 3, subject: "English", teacher: "Mr. Davis", students: 30, room: "Virtual C" },
  ];

  const pendingTasks = [
    { task: "Review new teacher applications", count: 3, priority: "high" },
    { task: "Update system policies", count: 1, priority: "medium" },
    { task: "Process grade appeals", count: 5, priority: "high" },
    { task: "Schedule maintenance window", count: 1, priority: "low" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">System Overview</h1>
          <p className="text-purple-100">Managing ScholarConnect for our school community</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {systemStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`flex items-center text-xs ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}>
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      stat.trend === "down" ? "rotate-180" : ""
                    }`} />
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                System Alerts
              </CardTitle>
              <CardDescription>Recent system notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.type === "warning" ? "bg-yellow-500" :
                      alert.type === "success" ? "bg-green-500" : "bg-blue-500"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                  <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Active Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Live Classes
              </CardTitle>
              <CardDescription>Currently active virtual classrooms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activeClasses.map((class_) => (
                <div key={class_.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{class_.subject}</h3>
                    <p className="text-sm text-gray-600">{class_.teacher} • {class_.students} students</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                      Live
                    </Badge>
                    <Button size="sm" variant="outline">
                      Monitor
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Pending Tasks & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Administrative items requiring attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{task.task}</h3>
                    <p className="text-xs text-gray-600">{task.count} items</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={
                      task.priority === "high" ? "destructive" : 
                      task.priority === "medium" ? "default" : "secondary"
                    }>
                      {task.priority}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common administrative functions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/admin/users">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
              </Link>
              <Link to="/admin/classes">
                <Button className="w-full justify-start" variant="outline">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Class Schedules
                </Button>
              </Link>
              <Link to="/admin/attendance">
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Attendance Reports
                </Button>
              </Link>
              <Link to="/admin/settings">
                <Button className="w-full justify-start" variant="outline">
                  <Clock className="w-4 h-4 mr-2" />
                  System Settings
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
