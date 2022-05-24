import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    console.log('process.env.USER => ', process.env.USER);
    console.log('process.env.PASSWORD => ', process.env.PASSWORD);

    if (username === process.env.USER && password === process.env.PASSWORD) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', process.env.TOKEN, {
          maxAge: 60 * 60 * 24,
          sameSite: 'strict',
          path: '/',
        })
      );
      res.status(200).json('Login Successfully.');
    } else {
      res.status(400).json('Wrong Credentials!');
    }
  }
}
