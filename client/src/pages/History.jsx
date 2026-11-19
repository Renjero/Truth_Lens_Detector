
import { useEffect, useState } from "react";
import { useAuth } from "./store/auth";

import API_URL from "../api";

import {
  Search,
  Clock,
  FileSearch,
  RefreshCw,
  AlertCircle,
  X,
  Mail,
  MessageSquare,
  Calendar,
} from "lucide-react";

const History = () => {
  const { token } = useAuth();

  // Switch between two histories
  const [activeTab, setActiveTab] = useState("verification");

  // Verification history
  const [history, setHistory] = useState([]);

  // Contact history
  const [contactHistory, setContactHistory] = useState([]);

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Get verification history
  const getHistory = async () => {
    try {
      const response = await fetch(
        `${API_URL}/history`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch verification history");
      }

      setHistory(data.history || []);
    } catch (error) {
      console.log("Verification History Error:", error);
      throw error;
    }
  };

  // Get contact history
  const getContactHistory = async () => {
    try {
      const response = await fetch(
       `${API_URL}/history`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch contact history");
      }

      setContactHistory(data.contacts || []);
    } catch (error) {
      console.log("Contact History Error:", error);
      throw error;
    }
  };

  // Fetch both histories
  const refreshHistory = async () => {
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      await Promise.all([
        getHistory(),
        getContactHistory(),
      ]);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refreshHistory();
  }, [token]);

  // Search verification history
  const filteredHistory = history.filter((item) => {
    const news = item.news?.toLowerCase() || "";
    const analysis = item.analysis?.toLowerCase() || "";
    const searchText = search.toLowerCase();

    return (
      news.includes(searchText) ||
      analysis.includes(searchText)
    );
  });

  // Search contact history
  const filteredContacts = contactHistory.filter((item) => {
    const username = item.username?.toLowerCase() || "";
    const email = item.email?.toLowerCase() || "";
    const subject = item.subject?.toLowerCase() || "";
    const message = item.message?.toLowerCase() || "";

    const searchText = search.toLowerCase();

    return (
      username.includes(searchText) ||
      email.includes(searchText) ||
      subject.includes(searchText) ||
      message.includes(searchText)
    );
  });

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin text-teal-700 mx-auto mb-3" />
          <p className="text-gray-500">
            Loading your history...
          </p>
        </div>
      </div>
    );
  }

  // Login required
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
          <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-3" />

          <h2 className="text-xl font-bold text-gray-800">
            Login Required
          </h2>

          <p className="text-gray-500 mt-2">
            Please login to view your history.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>
            <div className="flex items-center gap-2 text-teal-700 mb-2">
              <Clock size={18} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                Your Activity
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Your History
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your news verification reports and contact messages.
            </p>
          </div>

          {/* Total Count */}
          <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Records
            </p>

            <h2 className="text-3xl font-bold text-teal-700">
              {history.length + contactHistory.length}
            </h2>
          </div>

        </div>

        {/* History Switch */}
        <div className="bg-white border border-gray-200 rounded-2xl p-2 mb-6 shadow-sm">

          <div className="grid grid-cols-2 gap-2">

            <button
              onClick={() => {
                setActiveTab("verification");
                setSearch("");
                setError("");
              }}
              className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-semibold transition ${
                activeTab === "verification"
                  ? "bg-teal-700 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FileSearch size={19} />
              <span>Verification History</span>
              <span className="text-xs">
                ({history.length})
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("contact");
                setSearch("");
                setError("");
              }}
              className={`flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-semibold transition ${
                activeTab === "contact"
                  ? "bg-teal-700 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Mail size={19} />
              <span>Contact History</span>
              <span className="text-xs">
                ({contactHistory.length})
              </span>
            </button>

          </div>
        </div>

        {/* Search and Refresh */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 mb-6 shadow-sm">

          <div className="flex flex-col md:flex-row gap-4">

            {/* Search */}
            <div className="relative flex-1">

              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder={
                  activeTab === "verification"
                    ? "Search news or AI analysis..."
                    : "Search subject, email or message..."
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}

            </div>

            {/* Refresh */}
            <button
              onClick={refreshHistory}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              <RefreshCw size={17} />
              Refresh
            </button>

          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        {/* =============================== */}
        {/* VERIFICATION HISTORY */}
        {/* =============================== */}

        {activeTab === "verification" && (

          <div className="max-h-[680px] overflow-y-auto pr-2 space-y-5">

            {filteredHistory.length > 0 ? (

              filteredHistory.map((item) => (

                <div
                  key={item._id}
                  className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition"
                >

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                    <div className="flex items-center gap-3">

                      <div className="bg-teal-50 text-teal-700 p-3 rounded-xl">
                        <FileSearch size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          News Verification
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Provider: {item.provider || "AI"}
                        </p>
                      </div>

                    </div>

                    <span className="text-sm text-gray-400">
                      {new Date(item.createdAt).toLocaleString()}
                    </span>

                  </div>

                  {/* Submitted News */}
                  <div className="mb-5">

                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      Submitted News
                    </h4>

                    <p className="text-gray-600 text-sm leading-7 whitespace-pre-wrap break-words">
                      {item.news}
                    </p>

                  </div>

                  {/* AI Analysis */}
                  <div className="bg-slate-50 border border-gray-100 rounded-xl p-4 md:p-5">

                    <div className="flex items-center gap-2 mb-3">
                      <FileSearch size={17} className="text-teal-700" />

                      <h4 className="font-bold text-gray-800">
                        AI Analysis
                      </h4>
                    </div>

                    <p className="text-sm text-gray-600 leading-7 whitespace-pre-wrap break-words">
                      {item.analysis}
                    </p>

                  </div>

                </div>

              ))

            ) : (

              <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">

                <FileSearch
                  size={42}
                  className="text-gray-300 mx-auto mb-4"
                />

                <h3 className="text-xl font-bold text-gray-800">
                  {search ? "No Results Found" : "No History Found"}
                </h3>

                <p className="text-gray-500 mt-2">
                  {search
                    ? "Try searching with different keywords."
                    : "Your news verification history will appear here."}
                </p>

              </div>

            )}

          </div>
        )}

        {/* =============================== */}
        {/* CONTACT HISTORY */}
        {/* =============================== */}

        {activeTab === "contact" && (

          <div className="max-h-[680px] overflow-y-auto pr-2 space-y-5">

            {filteredContacts.length > 0 ? (

              filteredContacts.map((item) => (

                <div
                  key={item._id}
                  className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition"
                >

                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                    <div className="flex items-center gap-3">

                      <div className="bg-teal-50 text-teal-700 p-3 rounded-xl">
                        <MessageSquare size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Contact Message
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          Submitted to TruthLens
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar size={16} />
                      {new Date(item.createdAt).toLocaleString()}
                    </div>

                  </div>

                  {/* User Details */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-5 space-y-2">

                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">
                        Name:
                      </span>{" "}
                      {item.username}
                    </p>

                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-gray-800">
                        Email:
                      </span>{" "}
                      {item.email}
                    </p>

                  </div>

                  {/* Subject */}
                  <div className="mb-4">

                    <h4 className="text-sm font-bold text-gray-800 mb-2">
                      Subject
                    </h4>

                    <p className="text-gray-600 text-sm">
                      {item.subject}
                    </p>

                  </div>

                  {/* Message */}
                  <div className="bg-slate-50 border border-gray-100 rounded-xl p-4 md:p-5">

                    <div className="flex items-center gap-2 mb-3">

                      <Mail size={17} className="text-teal-700" />

                      <h4 className="font-bold text-gray-800">
                        Your Message
                      </h4>

                    </div>

                    <p className="text-sm text-gray-600 leading-7 whitespace-pre-wrap break-words">
                      {item.message}
                    </p>

                  </div>

                </div>

              ))

            ) : (

              <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center">

                <Mail
                  size={42}
                  className="text-gray-300 mx-auto mb-4"
                />

                <h3 className="text-xl font-bold text-gray-800">
                  {search ? "No Results Found" : "No Contact Messages"}
                </h3>

                <p className="text-gray-500 mt-2">
                  {search
                    ? "Try searching with different keywords."
                    : "Your submitted contact messages will appear here."}
                </p>

              </div>

            )}

          </div>
        )}

        {/* Footer Count */}
        <p className="text-center text-sm text-gray-400 mt-6">
          {activeTab === "verification"
            ? `Showing ${filteredHistory.length} of ${history.length} analyses`
            : `Showing ${filteredContacts.length} of ${contactHistory.length} messages`}
        </p>

      </div>
    </div>
  );
};

export default History;
