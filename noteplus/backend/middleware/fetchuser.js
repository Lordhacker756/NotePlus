//We have come to a part where we will start making protected routes, ie pages where we only want logged in users to access, so before giving the response we will require something that can verify if the user is loggedin or not. Insted of writing that code everywhere, we will simply create a middleware(which is simply a function) which will run after hitting the endpoint and before giving a response and will make sure everything functions smoothly!💜

const jwt = require("jsonwebtoken");

const JWT_SECRET = "$2a$10$yU.xIiS0dMjb2fu7ePAE8uwwRs1NSK4FaQzUMRjSRrpTGgV3Srh7O"

const fetchuser = async(req, res, next) => {
    //Get user from the jwt token and add id to req object💜

    const token = req.header('auth-token'); //Auth token which is passed as header
    if (!token) //Token isn't passed in the header
    {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    //If token is found, we need to verify the token
    try {
        const data = jwt.verify(token, JWT_SECRET)
        console.log(data)
        req.user = data.user; //🔶We are adding userId to the request!🔶
        next() //This will pass the control to the next middleware i.e the main req, res function in our case, or we can also chain multiple middlewares!
    }
    //If the provided token is not valid
    catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}

module.exports = fetchuser;