
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Settings, Video, FileText, BarChart3, Calendar, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">ScholarConnect</h1>
                <p className="text-sm text-gray-600">Private School Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Contact IT</Button>
              <Link to="/portal">
                <Button className="bg-blue-600 hover:bg-blue-700">Access Portal</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Smarter Way to Learn and Teach
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Built for Our School - Private virtual classrooms, secure tools, and student management in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portal">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Access Portal
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-slate-800 border-white hover:bg-white text-lg px-8 py-3">
              Contact School IT
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Built for Every Role in Our School
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Join classes, download materials, submit homework, view grades
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Schedule and host live sessions, upload materials, track performance
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Admins</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Manage users, schedules, grades, compliance, system data
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Module Showcases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Platform Modules
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Virtual Classroom */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Video className="w-6 h-6 text-blue-600" />
                  <CardTitle>Virtual Classroom Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Live schedule</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Screen sharing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Interactive whiteboard</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Student reactions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Teacher Panel */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  <CardTitle>Teacher Panel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Rubric-based grading</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>File uploads</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Lecture organization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Admin SIS */}
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                  <CardTitle>Admin SIS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>User manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Class scheduler</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Reports & analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span>Compliance tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech & Privacy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Security & Privacy First
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secure Cloud Architecture</h3>
              <p className="text-gray-600">Enterprise-grade security with encrypted data transmission</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Role-Based Access</h3>
              <p className="text-gray-600">Controlled permissions for students, teachers, and administrators</p>
            </div>
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Privacy Protected</h3>
              <p className="text-gray-600">Student privacy and grade security built into every feature</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Need Help? Contact Our IT Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">it-support@ourschool.edu</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>In-Person Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">IT Room - Building A, Floor 2</p>
                <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 4:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">ScholarConnect</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Internal IT Policy</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 ScholarConnect. Built for our school community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
