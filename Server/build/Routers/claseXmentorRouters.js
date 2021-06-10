"use strict";
exports.__esModule = true;
var express_1 = require("express");
var clases_x_mentorController_1 = require("../controllers/clases_x_mentorController");
var ClaseXMentorRouters = /** @class */ (function () {
    function ClaseXMentorRouters() {
        this.routers = express_1.Router();
        this.config();
    }
    ClaseXMentorRouters.prototype.config = function () {
        this.routers.get('/', clases_x_mentorController_1["default"].getAll);
        this.routers.get('/:id', clases_x_mentorController_1["default"].get);
        this.routers.post('/', clases_x_mentorController_1["default"].post);
        this.routers["delete"]('/:id', clases_x_mentorController_1["default"]["delete"]);
    };
    return ClaseXMentorRouters;
}());
exports["default"] = new ClaseXMentorRouters().routers;
