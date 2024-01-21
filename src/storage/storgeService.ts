const TOKEN = "token";

const isLocalStorage = (): string | null => {
  return localStorage.getItem(TOKEN);
};

const storeToken = (token: string, rememberMe: boolean): void => {
  if (rememberMe) {
    localStorage.setItem(TOKEN, token);
  } else {
    sessionStorage.setItem(TOKEN, token);
  }
};

const getToken = (): string | null => {
  let token = isLocalStorage();
  if (token) {
    return token;
  } else {
    return sessionStorage.getItem(TOKEN);
  }
};

export { storeToken, getToken };
