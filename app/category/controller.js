const Category = require("./model");
module.exports = {
  index: async (req, res) => {
    try {
      const data = await Category.find();
      res.render("./pages/category/index", { title: "Category", data });
    } catch (err) {
      console.log(err);
    }
  },
  create: async (req, res) => {
    try {
      res.render("./pages/category/create", { title: "Category" });
    } catch (err) {
      console.log(err);
    }
  },
  store: async (req, res) => {
    try {
      const { name } = req.body;
      let category = await Category({ name });
      await category.save();
      res.redirect("/category/create");
    } catch (err) {
      console.log(err);
    }
  },
};
