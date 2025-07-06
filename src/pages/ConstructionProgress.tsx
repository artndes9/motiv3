import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactModal from "@/components/ContactModal";
import { 
  Calendar, 
  Camera, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Users, 
  Building, 
  Truck,
  HardHat,
  FileText,
  Download,
  Play,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const ConstructionProgress = () => {
  const currentMonth = "January 2025";
  const overallProgress = 45;
  
  const progressMilestones = [
    {
      phase: "Foundation & Basement",
      status: "completed",
      progress: 100,
      startDate: "March 2024",
      completionDate: "June 2024",
      description: "Foundation work, basement construction, and waterproofing completed"
    },
    {
      phase: "Ground Floor Structure",
      status: "completed", 
      progress: 100,
      startDate: "July 2024",
      completionDate: "October 2024",
      description: "Ground floor slab, columns, and basic structure completed"
    },
    {
      phase: "Upper Floor Construction",
      status: "in-progress",
      progress: 75,
      startDate: "November 2024",
      completionDate: "March 2025",
      description: "1st to 8th floor construction in progress, 6 floors completed"
    },
    {
      phase: "Roofing & Top Structure",
      status: "upcoming",
      progress: 0,
      startDate: "April 2025",
      completionDate: "June 2025",
      description: "Roof construction, water tank installation, and top structure work"
    },
    {
      phase: "Interior & Finishing",
      status: "upcoming",
      progress: 0,
      startDate: "July 2025",
      completionDate: "November 2025",
      description: "Interior work, flooring, painting, and finishing touches"
    },
    {
      phase: "Amenities & Landscaping",
      status: "upcoming",
      progress: 0,
      startDate: "December 2025",
      completionDate: "February 2026",
      description: "Clubhouse, swimming pool, gardens, and amenity completion"
    }
  ];

  const monthlyHighlights = [
    {
      title: "Structural Progress",
      description: "6th and 7th floor slabs completed, 8th floor work initiated",
      icon: Building,
      color: "text-blue-500"
    },
    {
      title: "Quality Inspections",
      description: "Third-party quality audit completed with excellent ratings",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      title: "Material Delivery",
      description: "Premium finishing materials arrived on schedule",
      icon: Truck,
      color: "text-orange-500"
    },
    {
      title: "Safety Measures",
      description: "Zero safety incidents, all protocols strictly followed",
      icon: HardHat,
      color: "text-red-500"
    }
  ];

  const progressPhotos = [
    {
      title: "Overall Site View",
      date: "January 5, 2025",
      description: "Aerial view showing 7 floors completed"
    },
    {
      title: "Interior Progress",
      date: "January 3, 2025", 
      description: "Ground floor interior work in progress"
    },
    {
      title: "Amenity Area",
      date: "January 2, 2025",
      description: "Swimming pool area excavation completed"
    },
    {
      title: "Parking Structure",
      date: "December 30, 2024",
      description: "Basement parking waterproofing completed"
    }
  ];

  const upcomingMilestones = [
    {
      date: "February 15, 2025",
      milestone: "8th Floor Completion",
      description: "Complete 8th floor slab and column work"
    },
    {
      date: "March 10, 2025",
      milestone: "Roofing Initiation", 
      description: "Begin roof structure and water tank installation"
    },
    {
      date: "April 20, 2025",
      milestone: "Exterior Work",
      description: "Start exterior cladding and facade work"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-orange-500';
      case 'upcoming': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'upcoming': return 'Upcoming';
      default: return 'Pending';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Pearl
              </span>{" "}
              <span className="text-white">The Central Park</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-4">
              Construction Progress Report
            </h2>
            <p className="text-xl text-gray-300 mb-6">{currentMonth}</p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-orange-500/20 px-6 py-3 rounded-lg border border-orange-500/30">
                <div className="text-2xl font-bold text-orange-400">{overallProgress}%</div>
                <div className="text-sm text-gray-300">Overall Progress</div>
              </div>
              <div className="bg-green-500/20 px-6 py-3 rounded-lg border border-green-500/30">
                <div className="text-2xl font-bold text-green-400">On Track</div>
                <div className="text-sm text-gray-300">Timeline Status</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Progress Overview */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Construction Timeline</h3>
          <div className="space-y-6">
            {progressMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(milestone.status)}`}></div>
                    <h4 className="text-xl font-semibold text-slate-800">{milestone.phase}</h4>
                    <Badge variant={milestone.status === 'completed' ? 'default' : milestone.status === 'in-progress' ? 'secondary' : 'outline'}>
                      {getStatusText(milestone.status)}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">{milestone.progress}%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div 
                    className={`h-3 rounded-full ${getStatusColor(milestone.status)}`}
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Start:</span> {milestone.startDate}
                  </div>
                  <div>
                    <span className="font-medium">Target:</span> {milestone.completionDate}
                  </div>
                  <div>
                    <span className="font-medium">Description:</span> {milestone.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Monthly Highlights */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">This Month's Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <highlight.icon className={`w-8 h-8 ${highlight.color} mb-4`} />
                <h4 className="font-semibold text-slate-800 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Progress Photos */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Latest Progress Photos</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {progressPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-orange-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-800 mb-2">{photo.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{photo.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    {photo.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/photo-gallery">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Camera className="w-4 h-4 mr-2" />
                View Complete Photo Gallery
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Upcoming Milestones */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Upcoming Milestones</h3>
          <div className="space-y-4">
            {upcomingMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">{milestone.milestone}</h4>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {milestone.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Reports & Downloads */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">Reports & Documentation</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-500" />
                  Monthly Progress Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Detailed construction progress report for {currentMonth}</p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-green-500" />
                  Video Update
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Watch this month's construction progress video</p>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Video
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-500" />
                  Quality Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Third-party quality inspection reports</p>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Contact & Updates */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Construction Progress</h3>
          <p className="mb-6 max-w-2xl mx-auto text-gray-300">
            Get monthly construction updates delivered to your inbox. Our team publishes detailed progress reports 
            every first week of the month with photos, milestones, and timeline updates.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="font-semibold">Monthly Reports</div>
              <div className="text-sm text-gray-300">First week of every month</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Camera className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="font-semibold">Photo Updates</div>
              <div className="text-sm text-gray-300">High-quality progress photos</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="font-semibold">Client Portal</div>
              <div className="text-sm text-gray-300">Exclusive access for investors</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal 
              trigger={
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Mail className="w-5 h-5 mr-2" />
                  Subscribe to Updates
                </Button>
              }
              defaultMessage="I would like to subscribe to monthly construction progress updates for Pearl The Central Park"
            />
            <ContactModal 
              trigger={
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Site Visit
                </Button>
              }
              defaultMessage="I would like to schedule a site visit to see the current construction progress at Pearl The Central Park"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ConstructionProgress; 