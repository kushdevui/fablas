/**
 * Services for User Model
 * 
 * 
 */

// Dependencies
import db from '../bone_helpers/bone.db';
import jwt from 'jsonwebtoken';
const User = db.User;


/**
 * Service to save a new user when he/she signups
 * 
 * @param {signup data} userData 
 */
const saveNewUser = (userData) => {
    return new Promise( (resolve , reject) => {
        
        const user = new User(userData);
        var access = 'auth';
        var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
        user.tokens.push({access, token});
        // Saving a User
        user.save()
        .then( (success) => {
            resolve(success)
        })
        .catch( (err) => {
            reject(err);
        })
    });
    
}

// Exporting the Module
export default {
    saveNewUser
};