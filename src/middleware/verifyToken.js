import jsonwebtoken from "jsonwebtoken";
import { config } from "../config/auth";

export const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    
    if (!token) {
        res.json({ message: "Please login and Token provide" });
        return
    }

    jsonwebtoken.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!"
          });
        }
        req.userId = decoded.id;
        next();
    });
}