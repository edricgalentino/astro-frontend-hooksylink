import Cookies from "../../../lib/helpers/cookie";
import JWT from "../../../lib/helpers/jwt";

// Prepares the UI for the user who is logged in
function handleGuest() {
  const authenticatedRoutes = ["/admin"];
  // If the user is on an authenticated route, redirect them to the home page
  if (authenticatedRoutes.some((route) => window.location.pathname.match(route))) {
    window.location.href = "/";
  }
}

// Prepares the UI for the user who is logged out
function handleAuthenticated() {
  const guestRoutes = ["/login", "/signup", "/verify-account", "/verification-pending", "/reset-password", "/forgot-password"];

  // If the user is on a guest route, redirect them to the home page
  if (guestRoutes.includes(window.location.pathname)) {
    const authRedirect = window.localStorage.getItem("authRedirect") || "/admin";
    window.localStorage.removeItem("authRedirect");

    window.location.href = authRedirect;
  }
}

export function handleAuthRequired() {
  const token = Cookies.get(JWT.TOKEN_COOKIE_NAME);
  console.log("token: ", token);

  if (token) {
    handleAuthenticated();
  } else {
    handleGuest();
  }
}

window.setTimeout(() => {
  handleAuthRequired();
}, 0);
