module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '48978b17422c01444fd2b41513c0f928'),
  },
});
