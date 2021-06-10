"use strict";
exports.__esModule = true;
var express_1 = require("express");
var estudiantesController_1 = require("../controllers/estudiantesController");
var EstudianteRouters = /** @class */ (function () {
    function EstudianteRouters() {
        this.routers = express_1.Router();
        this.config();
    }
    EstudianteRouters.prototype.config = function () {
        this.routers.get('/', estudiantesController_1["default"].getAll);
        this.routers.get('/:id', estudiantesController_1["default"].get);
        this.routers.post('/', estudiantesController_1["default"].post);
        this.routers["delete"]('/:id', estudiantesController_1["default"]["delete"]);
    };
    return EstudianteRouters;
}());
exports["default"] = new EstudianteRouters().routers;
