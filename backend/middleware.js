const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).json({
        message:"Invalid token format"
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res.status(403).json({
        message:"authentication failiar"
      });
    }
  } catch (err) {
    return res.status(403).json({err});
  }
};

module.exports = {
  authMiddleware,
};
