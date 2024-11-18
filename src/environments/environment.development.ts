export const environment = {
  production: false,
  apiUrl: 'https://localhost:7098/',
  routes: {
    auth: {
      login: "api/login",
      signup: "api/signup",
      googleSignIn: "api/auth/google",
    },
    users: {
      create: "api/users",
      getAll: "api/users",
      update: "api/users",
      getById: "api/users/:id",
      delete: "api/users/:id",
      setMyPasswordFirstTime: "api/users/set-password-first-time"
    }
  },
  googleClientId: '1089983564893-6ib1c7fguksg8c9iu5gk5bn6g9fi69v4.apps.googleusercontent.com'
};
