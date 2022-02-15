import { addNewUser, deleteuser, getUser, getUserWithId, updateUser } from "../controllers/userController"
import { emailVerify } from "../middleware/userMiddleware";
import { verifyToken } from "../middleware/verifyToken";

const user = (app) => {
    app.route('/user')
        // New User 
        .get(verifyToken,getUser)

        //Add new user
        .post(emailVerify,addNewUser)

    app.route('/user/:userID')
        //Get user with specific id
        .get(verifyToken,getUserWithId)

        //Update user with specific id
        .put(verifyToken,emailVerify,updateUser)

        //Delete user with specific id
        .delete(verifyToken,deleteuser)
}


export default user;