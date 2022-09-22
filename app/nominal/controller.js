const Nominal = require("./model");
module.exports = {
  index: async (req, res) => {
    try {
      const data = await Nominal.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("./pages/nominal/index", { title: "Nominal", data, alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },

  create: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      console.log(alert);
      res.render("./pages/nominal/create", { title: "Nominal", alert });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },

  store: async (req, res) => {
    try {
      const { name, qty, price } = req.body;
      let nominal = await Nominal({ name, qty, price });
      await nominal.save();
      req.flash("alertMessage", "Success add data");
      req.flash("alertStatus", "success");
      res.redirect("/nominal/create");
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal/create");
    }
  },

  edit: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Nominal.findOne({ _id: id });
      res.render("./pages/nominal/edit", { title: "Nominal", data });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, qty, price } = req.body;
      let nominal = await Nominal.findOneAndUpdate(
        { _id: id },
        { name: name, qty: qty, price: price }
      );
      await nominal.save();
      req.flash("alertMessage", "Success update data");
      req.flash("alertStatus", "success");
      res.redirect("/nominal");
    } catch (err) {
      const { id } = req.params;
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal/edit/" + id);
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      let nominal = await Nominal.findOneAndRemove({ _id: id });
      req.flash("alertMessage", "Success delete data");
      req.flash("alertStatus", "success");
      res.redirect("/nominal");
    } catch (err) {
      console.log(err);
    }
  },
};
