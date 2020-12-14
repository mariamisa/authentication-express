const {Pool}=require('pg');

let dbUrl = '';
const {NODE_ENV,TEST_DB_URL,DATABASE_URL,DB_URL}=process.env
if (NODE_ENV === 'test') {
  dbUrl = TEST_DB_URL;
} else if (NODE_ENV === 'production') {
  dbUrl = DATABASE_URL;
} else {
  dbUrl = DB_URL;
}
if (!dbUrl) throw new Error('No Database URL!!!');
const options = {
  connectionString: dbUrl,
  ssl: NODE_ENV==='production',
};

module.exports = new Pool(options);