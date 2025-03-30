const express = require('express');
const oracledb = require('oracledb');
const path = require('path');

const app = express();
const port = 3000;

const dbConfig = {
  user: 'yulnwza',           // 👈 แก้ตรงนี้
  password: '1234',
  connectString: 'localhost/XEPDB1'
};

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home page.html'));
});

app.get('/technician', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'technician Ui', 'index-technician.html'));
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const sql = `
      SELECT USERID, USERNAME, EMAIL, ROLE
      FROM USERS
      WHERE EMAIL = :email AND USERPASSWORD = :password
    `;
    const binds = { email, password };
    const result = await connection.execute(sql, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT });

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const role = user.ROLE?.toLowerCase() || '';
      const redirectUrl = role === 'technician' ? '/technician' : '/home';
      return res.json({ success: true, redirect: redirectUrl });
    } else {
      return res.json({ success: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดกับฐานข้อมูล' });
  } finally {
    if (connection) await connection.close();
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
