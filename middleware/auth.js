const jwt = require('express-jwt');

module.exports = (context) => {
    // const authHeader = context.req.headers.authorization || '';
    console.log(context.req.headers);
    const authHeader = context.req.headers.authorization;
    const token = loadUser(authHeader);
    if (token) {
        const token = authHeader.split('Bearer')[1];
        if (token) {
            try {
                const student = jwt.verify(token, process.JWT_SECRET);
                return student;
            } catch (err) {
                throw new Error('Invalid expired token');
            }
        }
        throw new Error('Auth token must be bearer [token]')
    }
};