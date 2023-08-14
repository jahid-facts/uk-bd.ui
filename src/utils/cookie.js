import Cookies from 'js-cookie';

// Set a cookie with a specific name, value, and expiration (in days)
export const setCookie = (name, value, days) => {
  Cookies.set(name, value, { expires: days });
};

// Remove a cookie by its name
export const removeCookie = (name) => {
  Cookies.remove(name);
};
