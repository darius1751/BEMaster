"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var clasesRouters_1 = require("./Routers/clasesRouters");
var EstudiantesRouters_1 = require("./Routers/EstudiantesRouters");
var mentoresRouters_1 = require("./Routers/mentoresRouters");
var carrerasRouters_1 = require("./Routers/carrerasRouters");
var claseXmentorRouters_1 = require("./Routers/claseXmentorRouters");
var compression = require("compression");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            console.log("Server On Port " + _this.app.get('port'));
        });
    };
    Server.prototype.config = function () {
        this.app.set('port', 4300 || process.env.PORT);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(compression());
        this.app.use('/clase', clasesRouters_1["default"]);
        this.app.use('/estudiante', EstudiantesRouters_1["default"]);
        this.app.use('/mentor', mentoresRouters_1["default"]);
        this.app.use('/carrera', carrerasRouters_1["default"]);
        this.app.use('/mentorXclase', claseXmentorRouters_1["default"]);
    };
    return Server;
}());
var server = new Server();
server.start();
