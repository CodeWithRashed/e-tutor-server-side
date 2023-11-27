const removeCookie = (req, res) => {
  const user = req.body;
  console.log("logging out", user);
  res
    .clearCookie("token", { maxAge: 0 })
    .send({ success: true })
    .clearCookie("token", {
      maxAge: 0,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })
    .send({ success: true });
};

module.exports = removeCookie;
