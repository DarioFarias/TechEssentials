import { verify } from '../config/token.js';

const authMe = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw 'no se encontro usuario';
    const { payload } = verify(token);
    if (!payload) throw 'no se encontro usuario';
    req.user = payload;

    next();
  } catch (error) {
    res.status(205).send({ success: false, message: error });
  }
};

export default authMe;
