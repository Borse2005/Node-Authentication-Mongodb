import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from "../controllers/crmController";
import { verifyToken } from "../middleware/verifyToken";

const routes = (app) => {
    app.route('/contact')
        .get(verifyToken ,(req,res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        
        //Post endpoint
        .post(verifyToken,addNewContact);

    app.route('/contact/:contactID')
        // Get a specific contact
        .get(verifyToken, getContactWithID)

        // Updating specific contact
        .put(verifyToken, updateContact)

        // Deleting specific contact
        .delete(verifyToken, deleteContact);
}

export default routes;
