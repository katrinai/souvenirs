import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:5000/api",
  withCredentials: true
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,

  getRequests(data) {
    return service
      .get("/requests")
      .then(res => res.data)
      .catch(errHandler);
  },

  postRequests(data) {
    return service
      .post("/requests", data)
      .then(res => res.data)
      .catch(errHandler);
  },

  getCities(data) {
    return service
      .get("/cities")
      .then(res => res.data)
      .catch(errHandler);
  },

  postCities(data) {
    return service
      .post("/cities", data)
      .then(res => res.data)
      .catch(errHandler);
  },

  signup(userInfo) {
    return service
      .post("/signup", userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post("/login", {
        username,
        password
      })
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      })
      .catch(errHandler);
  },

  logout() {
    return service.get("/logout").then(res => {
      localStorage.removeItem("user");
    });
  },

  isLoggedIn() {
    return localStorage.getItem("user") != null;
  },

  getUserprofile(data) {
    return service
      .get("/userprofile")
      .then(res => res.data)
      .catch(errHandler);
  }

  // addPicture(file) {
  //   const formData = new FormData();
  //   formData.append("picture", file);
  //   return service
  //     .post("/users/first-user/pictures", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data"
  //       }
  //     })
  //     .then(res => res.data)
  //     .catch(errHandler);
  // }
};
