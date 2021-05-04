const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const profileRoutes = require("./profileRoutes");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);


module.exports = router;
