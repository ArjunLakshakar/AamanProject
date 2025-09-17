import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const header = req.headers.authorization; // "Bearer <token>"
  const token = header?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
