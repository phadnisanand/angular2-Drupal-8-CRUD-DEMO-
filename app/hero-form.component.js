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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var HeroFormComponent = (function () {
    function HeroFormComponent(http) {
        this.http = http;
        this.getAllData();
    }
    HeroFormComponent.prototype.getAllData = function () {
        var _this = this;
        this.http.get('http://localhost:3000/app/people.json')
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    HeroFormComponent.prototype.createData = function () {
    };
    HeroFormComponent.prototype.deleteData = function () {
    };
    HeroFormComponent.prototype.updateData = function () {
    };
    return HeroFormComponent;
}());
HeroFormComponent = __decorate([
    core_1.Component({
        selector: 'hero-form',
        templateUrl: 'app/hero-form.component.html',
        viewProviders: [hero_service_1.HeroService]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HeroFormComponent);
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map