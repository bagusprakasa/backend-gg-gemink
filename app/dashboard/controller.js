module.exports = {
  index: async (req, res) => {
    try {
      res.render("./pages/dashboard/index", { title: "Dashboard" });
    } catch (err) {
      console.log(err);
    }
  },
};
