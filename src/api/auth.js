import instance from "./config";

const register = (user) => {
    return instance.post("/signup", user);
    // email : required
    // password: required
};
const login = (user) => {
    return instance.post("/signin", user);
    // email : required
    // password: required
};
export { register, login };
