// This function is for restricting routes a user is not allowed to visit if not logged in.
module.exports = (req, res, next) => {
  // IF the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // IF the user is NOT logged in, redirect them to the login page.
  return res.redirect("/sign-in");
};
