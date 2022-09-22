const Category = require("./model");
module.exports = {
  index: async (req, res) => {
    try {
      const data = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("./pages/category/index", { title: "Category", data, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  create: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      console.log(alert);
      res.render("./pages/category/create", { title: "Category", alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  store: async (req, res) => {
    try {
      const { name } = req.body;
      let category = await Category({ name });
      await category.save();
      req.flash("alertMessage", "Success add data");
      req.flash("alertStatus", "success");
      res.redirect("/category/create");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category/create");
    }
  },

  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Category.findOne({ _id: id });
      res.render("./pages/category/edit", { title: "Category", data });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      let category = await Category.findOneAndUpdate(
        { _id: id },
        { name: name }
      );
      await category.save();
      req.flash("alertMessage", "Success update data");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category/edit/" + id);
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      let category = await Category.findOneAndRemove({ _id: id });
      req.flash("alertMessage", "Success delete data");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (err) {
      console.log(err);
    }
  },
};
