export const env = {
    port: process.env.INCP_BK_PORT || 3000,
    dbUrl: process.env.INCP_DB_URL || 'mongodb://localhost:27017/',
    dbName: process.env.INCP_DB_NAME || 'concept-test'
  };