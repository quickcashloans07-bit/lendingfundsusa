const rawApiUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://127.0.0.1:3001";

// In production (Vercel), always use relative paths so requests hit the /api rewrites,
// even if VITE_API_URL is accidentally set to localhost in the Vercel dashboard.
const API_BASE_URL = import.meta.env.PROD
  ? ""
  : (rawApiUrl.includes("localhost") ? rawApiUrl.replace("localhost", "127.0.0.1") : rawApiUrl);

const handleResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");
  const isJSON = contentType && contentType.includes("application/json");
  const data = isJSON ? await response.json() : await response.text();

  if (!response.ok) {
    const message = typeof data === "string" ? data : data?.message || "Request failed";
    throw new Error(message);
  }

  return data;
};

export const submitLoanApplication = async (payload: Record<string, unknown>) => {
  // API_BASE_URL can be empty for relative paths (Vercel)

  const response = await fetch(`${API_BASE_URL}/api/loan-application`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};
