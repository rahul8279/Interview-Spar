import jwt from 'jsonwebtoken';

 export const generateTokenAndSetCookie = (res, userId) => {
 
  const payload = {
    id: userId,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  
  res.cookie("token", token, {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    httpOnly: true, 
    sameSite: "strict", 
  });

};