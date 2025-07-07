
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, BookOpen, FileText, Users, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const StudentDashboard = () => {
  const upcomingClasses = [
    { id: 1, subject: "Mathematics", teacher: "Ms. Johnson", time: "9:00 AM", room: "Virtual Room A", status: "live" },
    { id: 2, subject: "English Literature", teacher: "Mr. Davis", time: "10:30 AM", room: "Virtual Room B", status: "upcoming" },
    { id: 3, subject: "Chemistry", teacher: "Dr. Smith", time: "2:00 PM", room: "Virtual Room C", status: "upcoming" },
  ];

  const assignments = [
    { id: 1, title: "Algebra Problem Set", subject: "Mathematics", dueDate: "Today", status: "pending" },
    { id: 2, title: "Essay: Shakespeare Analysis", subject: "English", dueDate: "Tomorrow", status: "pending" },
    { id: 3, title: "Lab Report", subject: "Chemistry", dueDate: "Dec 15", status: "completed" },
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Quiz 5", grade: "A-", points: "92/100" },
    { subject: "English", assignment: "Essay 2", grade: "B+", points: "87/100" },
    { subject: "Chemistry", assignment: "Lab 3", grade: "A", points: "95/100" },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-blue-100">Ready for another great day of learning?</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-gray-600">Classes Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-gray-600">Due Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-gray-600">Avg Grade</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">6</p>
              <p className="text-sm text-gray-600">Active Courses</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Today's Classes
              </CardTitle>
              <CardDescription>Your schedule for today</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingClasses.map((class_) => (
                <div key={class_.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{class_.subject}</h3>
                    <p className="text-sm text-gray-600">{class_.teacher} • {class_.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {class_.status === "live" && (
                      <Badge className="bg-red-500 hover:bg-red-600">
                        <Play className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    )}
                    <Link to="/student/join">
                      <Button size="sm" variant={class_.status === "live" ? "default" : "outline"}>
                        {class_.status === "live" ? "Join Now" : "Preview"}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Assignments
              </CardTitle>
              <CardDescription>Upcoming and recent work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{assignment.title}</h3>
                    <p className="text-sm text-gray-600">{assignment.subject} • Due {assignment.dueDate}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {assignment.status === "completed" ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Done
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-orange-300 text-orange-700">
                        Pending
                      </Badge>
                    )}
                    <Link to="/student/assignments">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest assignment results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentGrades.map((grade, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                  <h3 className="font-medium text-sm text-gray-600">{grade.subject}</h3>
                  <p className="text-xs text-gray-500 mb-2">{grade.assignment}</p>
                  <p className="text-2xl font-bold text-blue-600">{grade.grade}</p>
                  <p className="text-sm text-gray-600">{grade.points}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link to="/student/grades">
                <Button variant="outline">View All Grades</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
