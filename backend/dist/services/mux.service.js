"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuxService = void 0;
const common_1 = require("@nestjs/common");
const mux_node_1 = __importDefault(require("@mux/mux-node"));
let MuxService = class MuxService {
    mux;
    constructor() {
        this.mux = new mux_node_1.default();
    }
    async createUploadUrl() {
        return this.mux.video.uploads.create({
            new_asset_settings: { playback_policy: ['public'] },
            cors_origin: '*',
        });
    }
};
exports.MuxService = MuxService;
exports.MuxService = MuxService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MuxService);
//# sourceMappingURL=mux.service.js.map