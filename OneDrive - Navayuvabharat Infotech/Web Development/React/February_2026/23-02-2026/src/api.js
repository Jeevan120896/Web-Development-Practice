// Base URL of API
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

/* =========================
   GET - Fetch all users
   ========================= */
export const getUsers = async () => {
  const response = await fetch(BASE_URL); // Send GET request
  const data = await response.json();     // Convert response to JSON
  return data;                            // Return data
};


/* =========================
   POST - Create new user
   ========================= */
export const createUser = async (userData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",                       // HTTP method
    headers: {
      "Content-Type": "application/json", // Tell server we send JSON
    },
    body: JSON.stringify(userData),       // Convert JS object to JSON
  });

  return response.json();                 // Return created user
};


/* =========================
   PUT - Full update
   Replaces entire user data
   ========================= */
export const updateUserPut = async (id, userData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",                        // Full update
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};


/* =========================
   PATCH - Partial update
   Updates only given fields
   ========================= */
export const updateUserPatch = async (id, userData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",                      // Partial update
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return response.json();
};


/* =========================
   DELETE - Remove user
   ========================= */
export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",                     // Delete request
  });
};