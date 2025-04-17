import jwt from 'jsonwebtoken'; // Import jsonwebtoken for token generation

const authMiddleware = (req, res, next) => {
    
    // Check if the user is authenticated
    const token = req.headers['authorization']; // Get the token from the request headers
    console.log("Token in auth: "+token);
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    try {
        // Verify the token 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user_id = decoded.id; // Attach user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ 
            error: error.message // Include error message for debugging
        });
    }
};

export default authMiddleware;
