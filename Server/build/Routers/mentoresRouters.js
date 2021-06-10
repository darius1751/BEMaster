"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mentoresController_1 = require("../controllers/mentoresController");
var MentoresRouters = /** @class */ (function () {
    function MentoresRouters() {
        this.routers = express_1.Router();
        this.config();
    }
    MentoresRouters.prototype.config = function () {
        this.routers.get('/', mentoresController_1["default"].getAll);
        this.routers.get('/:id', mentoresController_1["default"].get);
        this.routers.post('/', mentoresController_1["default"].post);
        this.routers["delete"]('/:id', mentoresController_1["default"]["delete"]);
    };
    return MentoresRouters;
}());
exports["default"] = new MentoresRouters().routers;
