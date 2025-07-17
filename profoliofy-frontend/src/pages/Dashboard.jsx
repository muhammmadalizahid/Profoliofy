import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  BarChart2, 
  Eye, 
  Globe, 
  Clock, 
  Heart, 
  Share2,
  Edit3,
  Settings,
  AlertCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock data - replace with actual API calls
const userData = {
  name: "John Doe",
  portfolio: {
    title: "Creative Developer Portfolio",
    url: "john-doe.profoliofy.com",
    views: 1234,
    likes: 89,
    shares: 45,
    lastUpdated: "2024-01-15"
  },
  analytics: {
    weeklyViews: [65, 84, 91, 77, 85, 98, 120],
    topLocations: [
      { country: "United States", views: 450 },
      { country: "India", views: 290 },
      { country: "UK", views: 190 }
    ],
    deviceTypes: {
      mobile: 55,
      desktop: 35,
      tablet: 10
    }
  }
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#1B263B]">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-[#243447] rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#415A77] rounded-full">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{userData.name}</h1>
                <p className="text-gray-400">Welcome back to your dashboard</p>
              </div>
            </div>
            <Link
              to="/settings"
              className="p-2 hover:bg-[#415A77] rounded-lg transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Portfolio Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-[#243447] rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Your Portfolio</h2>
              <Link
                to="/edit-portfolio"
                className="flex items-center gap-2 px-4 py-2 bg-[#415A77] rounded-lg hover:bg-[#324960] transition-colors text-white text-sm"
              >
                <Edit3 className="w-4 h-4" /> Edit Portfolio
              </Link>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg text-white">{userData.portfolio.title}</h3>
              <a 
                href={`https://${userData.portfolio.url}`} 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:underline flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {userData.portfolio.url}
              </a>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <Eye className="w-5 h-5 text-cyan-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{userData.portfolio.views}</p>
                  <p className="text-sm text-gray-400">Total Views</p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <Heart className="w-5 h-5 text-pink-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{userData.portfolio.likes}</p>
                  <p className="text-sm text-gray-400">Likes</p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <Share2 className="w-5 h-5 text-green-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{userData.portfolio.shares}</p>
                  <p className="text-sm text-gray-400">Shares</p>
                </div>
                <div className="bg-[#1B263B] p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-400 mb-2" />
                  <p className="text-sm font-bold text-white">Last Updated</p>
                  <p className="text-sm text-gray-400">{new Date(userData.portfolio.lastUpdated).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#243447] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link
                to="/templateselection"
                className="block w-full p-4 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors"
              >
                <h3 className="text-white font-medium">Create New Portfolio</h3>
                <p className="text-sm text-gray-400">Start with a template</p>
              </Link>
              <Link
                to="/settings"
                className="block w-full p-4 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors"
              >
                <h3 className="text-white font-medium">Account Settings</h3>
                <p className="text-sm text-gray-400">Update your preferences</p>
              </Link>
              <Link
                to="/support"
                className="block w-full p-4 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors"
              >
                <h3 className="text-white font-medium">Need Help?</h3>
                <p className="text-sm text-gray-400">Contact support</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="bg-[#243447] rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <BarChart2 className="w-5 h-5" />
            Analytics Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Weekly Views Chart */}
            <div className="bg-[#1B263B] p-4 rounded-lg">
              <h3 className="text-white font-medium mb-4">Weekly Views</h3>
              {/* Add your preferred charting library here */}
              <div className="h-48 flex items-end space-x-2">
                {userData.analytics.weeklyViews.map((views, index) => (
                  <div
                    key={index}
                    className="bg-cyan-400 rounded-t w-full"
                    style={{ height: `${(views / 120) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Top Locations */}
            <div className="bg-[#1B263B] p-4 rounded-lg">
              <h3 className="text-white font-medium mb-4">Top Locations</h3>
              <div className="space-y-4">
                {userData.analytics.topLocations.map((location, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{location.country}</span>
                    <span className="text-white font-medium">{location.views} views</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Types */}
            <div className="bg-[#1B263B] p-4 rounded-lg">
              <h3 className="text-white font-medium mb-4">Device Types</h3>
              <div className="space-y-4">
                {Object.entries(userData.analytics.deviceTypes).map(([device, percentage]) => (
                  <div key={device}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400 capitalize">{device}</span>
                      <span className="text-white">{percentage}%</span>
                    </div>
                    <div className="w-full bg-[#243447] rounded-full h-2">
                      <div
                        className="bg-cyan-400 rounded-full h-2"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;