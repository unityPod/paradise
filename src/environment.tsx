let URL:string ="";

if (process.env.NODE_ENV === "development") {
  URL = "http://localhost:4000";
} else if (process.env.NODE_ENV === "production") {
  URL = "https://paradise-server.herokuapp.com";
}

export default URL;
