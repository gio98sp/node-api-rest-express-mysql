import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  database: 'db_copa'
})

connection.connect()

export const query = (sql, values='') => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, result) => {
      if (err) reject(err);
      return resolve(result);
    });
  });
}

export default connection