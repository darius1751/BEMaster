"use strict";
exports.__esModule = true;
var express_1 = require("express");
var carrerasController_1 = require("../controllers/carrerasController");
var CarreraRouters = /** @class */ (function () {
    function CarreraRouters() {
        this.routers = express_1.Router();
        this.config();
    }
    CarreraRouters.prototype.config = function () {
        this.routers.get('/', carrerasController_1["default"].getAll);
        this.routers.get('/:id', carrerasController_1["default"].get);
        this.routers.post('/', carrerasController_1["default"].post);
        this.routers["delete"]('/:id', carrerasController_1["default"]["delete"]);
    };
    return CarreraRouters;
}());
exports["default"] = new CarreraRouters().routers;
