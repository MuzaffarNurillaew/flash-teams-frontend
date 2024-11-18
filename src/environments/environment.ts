export const environment = {
  production: true,
  apiUrl: 'https://flashteams-api.azurewebsites.net/',
  routes: {
    auth: {
      login: "api/login",
      signup: "api/signup"
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
