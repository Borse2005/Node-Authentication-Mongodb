import { userLogin } from "../controllers/authController"

const auth = (app) => {
    app.route('/login')
        //User login
        .post(userLogin)
    
    app.route('/logout')
}

export default auth;