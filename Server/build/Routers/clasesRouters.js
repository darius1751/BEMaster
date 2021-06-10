"use strict";
exports.__esModule = true;
var express_1 = require("express");
var clasesController_1 = require("../controllers/clasesController");
var ClasesRouters = /** @class */ (function () {
    function ClasesRouters() {
        this.routers = express_1.Router();
        this.config();
    }
    ClasesRouters.prototype.config = function () {
        this.routers.get('/', clasesController_1["default"].getAll);
        this.routers.get('/:id', clasesController_1["default"].get);
        this.routers.post('/', clasesController_1["default"].post);
        this.routers["delete"]('/:id', clasesController_1["default"]["delete"]);
    };
    return ClasesRouters;
}());
exports["default"] = new ClasesRouters().routers;
