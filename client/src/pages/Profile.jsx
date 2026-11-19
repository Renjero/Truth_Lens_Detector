
import { useState } from "react";
import { useAuth } from "./store/auth";
import {
  User,
  Mail,
  ShieldCheck,
  CalendarDays,
  Edit,
  Camera,
} from "lucide-react";

// import API_URL from "../api";

const Profile = () => {
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);

  const profileName = user?.name || user?.username || "User";
  const profileEmail = user?.email || "No email available";

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B132B]">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your personal information and account details.
          </p>
        </div>

        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-[#0B132B] to-teal-700"></div>

          <div className="px-8 pb-8">

            {/* Avatar */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 gap-5">

              <div className="relative">

                <div className="w-32 h-32 rounded-full bg-teal-700 border-4 border-white shadow-md flex items-center justify-center text-white text-5xl font-bold">
                  {profileName.charAt(0).toUpperCase()}
                </div>

                <button
                  type="button"
                  className="absolute bottom-2 right-2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100"
                  title="Profile photo"
                >
                  <Camera size={17} className="text-teal-700" />
                </button>

              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-lg font-semibold transition"
              >
                <Edit size={17} />
                {isEditing ? "Cancel Editing" : "Edit Profile"}
              </button>

            </div>

            {/* User Name */}
            <div className="mt-5">
              <h2 className="text-2xl font-bold text-gray-900">
                {profileName}
              </h2>

              <p className="text-gray-500 mt-1">
                {profileEmail}
              </p>

              <span className="inline-flex items-center gap-1.5 mt-3 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                <ShieldCheck size={15} />
                TruthLens Member
              </span>
            </div>

          </div>
        </div>

        {/* Account Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          {/* Personal Information */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Personal Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-teal-50 p-3 rounded-xl">
                  <User className="text-teal-700" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-semibold text-gray-800">
                    {profileName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-50 p-3 rounded-xl">
                  <Mail className="text-teal-700" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-semibold text-gray-800 break-all">
                    {profileEmail}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Account Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Account Details
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <ShieldCheck className="text-blue-700" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Account Status</p>
                  <p className="font-semibold text-green-600">
                    Active
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-50 p-3 rounded-xl">
                  <CalendarDays className="text-purple-700" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Account Type</p>
                  <p className="font-semibold text-gray-800">
                    {user?.userType || "Standard User"}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Message */}
        <div className="mt-8 bg-[#0B132B] rounded-2xl p-7 text-white">
          <h3 className="text-xl font-bold">
            Welcome to TruthLens!
          </h3>

          <p className="text-gray-300 mt-2">
            Stay informed, verify information, and help fight misinformation.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Profile;
