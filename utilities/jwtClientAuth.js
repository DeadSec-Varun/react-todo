export function jwtClientAuth() {
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (!token) {
        return false; // No token found, user is not authenticated
    }
    try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Decode the JWT payload
        const currentTime = Math.floor(Date.now() / 1000); // Get the current time in seconds
        return payload.exp > currentTime; // Check if the token is still valid
    } catch (error) {
        console.error("Error decoding token: ", error);
        return false; // Token is invalid or expired
    }
}