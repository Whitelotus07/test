import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, Phone, Trash2, Edit } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const TeamManagement = () => {
  const { theme } = useTheme();
  const [team, setTeam] = useState([
    { id: 1, name: 'John Doe', role: 'Financial Analyst', email: 'john@example.com', phone: '(555) 123-4567' },
    { id: 2, name: 'Jane Smith', role: 'Accountant', email: 'jane@example.com', phone: '(555) 987-6543' },
    { id: 3, name: 'Mike Johnson', role: 'Budget Manager', email: 'mike@example.com', phone: '(555) 456-7890' },
  ]);

  const [showAddMember, setShowAddMember] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  const addTeamMember = (newMember) => {
    setTeam([...team, { id: team.length + 1, ...newMember }]);
    setShowAddMember(false);
  };

  const updateTeamMember = (updatedMember) => {
    setTeam(team.map(member => member.id === updatedMember.id ? updatedMember : member));
    setEditingMember(null);
  };

  const deleteTeamMember = (id) => {
    setTeam(team.filter(member => member.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <h2 className="text-3xl font-bold mb-6">Team Management</h2>
      <div className={`bg-white ${theme === 'dark' ? 'bg-gray-800' : ''} p-6 rounded-lg shadow-lg`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Finance Team</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center px-4 py-2 rounded ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={() => setShowAddMember(true)}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Add Team Member
          </motion.button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              onEdit={() => setEditingMember(member)}
              onDelete={() => deleteTeamMember(member.id)}
            />
          ))}
        </div>
        {showAddMember && (
          <AddEditTeamMemberForm
            onSubmit={addTeamMember}
            onCancel={() => setShowAddMember(false)}
          />
        )}
        {editingMember && (
          <AddEditTeamMemberForm
            member={editingMember}
            onSubmit={updateTeamMember}
            onCancel={() => setEditingMember(null)}
          />
        )}
      </div>
    </motion.div>
  );
};

const TeamMemberCard = ({ member, onEdit, onDelete }) => {
  const { theme } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}
    >
      <div className="flex items-center mb-2">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-100'}`}>
          <Users className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`} />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{member.name}</h4>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{member.role}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          <Mail className="w-4 h-4 mr-2" />
          {member.email}
        </p>
        <p className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          <Phone className="w-4 h-4 mr-2" />
          {member.phone}
        </p>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onEdit}
          className={`p-2 rounded ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'Certainly! I'll enhance the Beekeeper AI accountant software based on your requirements. I'll improve the design, add new features, and ensure everything works properly. Here's a summary of the improvements:

1. Enhanced UI with beautiful colors, animations, and gradients
2. Improved authentication flow with email confirmation
3. Added forgot password functionality
4. Restricted access to features for non-logged-in users
5. Updated subscription model with feature restrictions
6. Added AI chatbot for general accounting questions and calculations
7. Included contact support feature
8. Improved team management
9. Updated API structure and versioning
10. Enhanced backend efficiency and robustness

Let's implement these improvements:

<boltArtifact id="beekeeper-ai-enhancements" title="Beekeeper AI Accountant Software Enhancements">

<boltAction type="file" filePath="src/App.tsx">
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './hooks/useTheme';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import FinancialReports from './components/FinancialReports';
import Forecasting from './components/Forecasting';
import BudgetManagement from './components/BudgetManagement';
import TeamManagement from './components/TeamManagement';
import Settings from './components/Settings';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import PrivateRoute from './components/Auth/PrivateRoute';
import AIAssistant from './components/AIAssistant';
import ContactSupport from './components/ContactSupport';
import SubscriptionPlans from './components/SubscriptionPlans';

function App() {
  const { theme } = useTheme();
  const { user, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        {user && <Navbar />}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/reports" element={
              <PrivateRoute>
                <FinancialReports />
              </PrivateRoute>
            } />
            <Route path="/forecasting" element={
              <PrivateRoute>
                <Forecasting />
              </PrivateRoute>
            } />
            <Route path="/budget" element={
              <PrivateRoute>
                <BudgetManagement />
              </PrivateRoute>
            } />
            <Route path="/team" element={
              <PrivateRoute>
                <TeamManagement />
              </PrivateRoute>
            } />
            <Route path="/settings" element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            } />
            <Route path="/ai-assistant" element={
              <PrivateRoute>
                <AIAssistant />
              </PrivateRoute>
            } />
            <Route path="/contact-support" element={
              <PrivateRoute>
                <ContactSupport />
              </PrivateRoute>
            } />
            <Route path="/subscription-plans" element={
              <PrivateRoute>
                <SubscriptionPlans />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
        <ToastContainer position="bottom-right" theme={theme} />
      </div>
    </Router>
  );
}

export default App;