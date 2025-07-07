
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, FileText, Video, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const TeacherDashboard = () => {
  const todaySchedule = [
    { id: 1, class: "Mathematics 101", time: "9:00 AM", students: 28, room: "Virtual Room A", status: "live" },
    { id: 2, class: "Algebra II", time: "10:30 AM", students: 24, room: "Virtual Room A", status: "upcoming" },
    { id: 3, class: "Calculus", time: "2:00 PM", students: 18, room: "Virtual Room A", status: "upcoming" },
  ];

  const pendingTasks = [
    { id: 1, task: "Grade Math Quiz 5", class: "Mathematics 101", count: 28, urgent: true },
    { id: 2, task: "Review Lab Reports", class: "Chemistry", count: 15, urgent: false },
    { id: 3, task: "Prepare Lecture Materials", class: "Algebra II", count: 1, urgent: false },
  ];

  const recentActivity = [
    { student: "Alex Johnson", action: "Submitted Assignment", class: "Math 101", time: "2h ago" },
    { student: "Sarah Davis", action: "Joined Class", class: "Algebra II", time: "3h ago" },
    { student: "Mike Wilson", action: "Asked Question", class: "Calculus", time: "5h ago" },
  ];

  return (
    <DashboardLayout role="teacher">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Good morning, Ms. Johnson!</h1>
          <p className="text-green-100">You have 3 classes scheduled for today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-600">Classes Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">70</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">28</p>
              <p className="text-sm text-gray-600">To Grade</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">92%</p>
              <p className="text-sm text-gray-600">Attendance</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Today's Schedule
              </CardTitle>
              <CardDescription>Your classes for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {todaySchedule.map((class_) => (
                <div key={class_.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{class_.class}</h3>
                    <p className="text-sm text-gray-600">{class_.time} • {class_.students} students</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {class_.status === "live" && (
                      <Badge className="bg-red-500 hover:bg-red-600">
                        <Play className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    )}
                    <Link to="/teacher/classroom">
                      <Button 
                        size="sm" 
                        variant={class_.status === "live" ? "default" : "outline"}
                        className={class_.status === "live" ? "bg-green-600 hover:bg-green-700" : ""}
                      >
                        {class_.status === "live" ? "Enter Room" : "Prepare"}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pending Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Pending Tasks
              </CardTitle>
              <CardDescription>Items requiring your attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {pendingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{task.task}</h3>
                    <p className="text-sm text-gray-600">{task.class} • {task.count} items</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {task.urgent && (
                      <Badge variant="destructive">Urgent</Badge>
                    )}
                    <Link to="/teacher/grading">
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Recent Student Activity
            </CardTitle>
            <CardDescription>Latest interactions from your students</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">
                        {activity.student.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.student}</p>
                      <p className="text-xs text-gray-600">{activity.action} - {activity.class}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/teacher/reports">
                <Button variant="outline">View All Activity</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
