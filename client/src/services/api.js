// Shared API helper for the TruthLens News backend.
// Set VITE_API_URL in your client/.env file when the backend is ready.
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}
