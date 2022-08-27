const { sendMessage, getRoomMessages } = require("../controllers/messageController");
const router = require("express").Router();

let titleD = "Demos";
let h1D = "Demos";

// index page
router.get("/", function(req, res) {
	res.render("pages/index", {title: titleD, h1: h1D});
});

router.post("/api/sendMsg", function(req, res) {
	sendMessage(req, res);
});

router.post("/api/getRoomMsgs", function(req, res) {
	getRoomMessages(req, res);
});

module.exports = router;