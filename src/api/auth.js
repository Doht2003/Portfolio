import instance from "./config";

const register = (user) => {
    return instance.post("/register", user);
    // email : required
    // password: required
};
const login = (user) => {
    return instance.post("/login", user);
    // email : required
    // password: required
};
export { register, login };
