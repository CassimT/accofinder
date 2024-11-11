

export function checkTokenExpiration() {
  const tokenCreatedAt = localStorage.getItem("tokenCreatedAt");

  // Check if the token is older than 2 minutes (120 seconds)
  if ((Date.now() - tokenCreatedAt) > 3600000) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenCreatedAt");
    localStorage.removeItem("userId");
  }
}
