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
var core_1 = require("@angular/core");
var CloseSidebar = (function () {
    function CloseSidebar() {
        this.clicked = new core_1.EventEmitter();
    }
    /** @internal */
    CloseSidebar.prototype._onClick = function () {
        this.clicked.emit(null);
    };
    return CloseSidebar;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CloseSidebar.prototype, "clicked", void 0);
__decorate([
    core_1.HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CloseSidebar.prototype, "_onClick", null);
CloseSidebar = __decorate([
    core_1.Directive({ selector: '[closeSidebar]' })
], CloseSidebar);
exports.CloseSidebar = CloseSidebar;
//# sourceMappingURL=close.directive.js.map