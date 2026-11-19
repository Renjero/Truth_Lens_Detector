
import { useEffect, useState } from "react";

import API_URL from "../api";

const ContactHistory = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${API_URL}/contact/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setContacts(data.contacts);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Contact History
        </h1>

        {contacts.length === 0 ? (
          <p className="text-gray-500">
            You haven't submitted any messages yet.
          </p>
        ) : (
          <div className="space-y-5">

            {contacts.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-xl border shadow-sm"
              >
                <h2 className="text-xl font-bold">
                  {item.subject}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  {item.username} | {item.email}
                </p>

                <p className="mt-4 text-gray-700">
                  {item.message}
                </p>

                <p className="text-xs text-gray-400 mt-4">
                  Submitted: {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default ContactHistory;
