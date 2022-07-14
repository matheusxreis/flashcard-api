"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_routes_1 = require("./modules/auth/routes/auth.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use("/auth", auth_routes_1.authRoutes);
