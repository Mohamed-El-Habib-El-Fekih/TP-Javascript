var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var Livre = /** @class */ (function () {
    function Livre(id, title, author, year, available) {
        this.author = author;
        this.id = id;
        this.title = title;
        this.year = year;
        this.available = available;
    }
    return Livre;
}());
var Utilisateurs = /** @class */ (function (_super) {
    __extends(Utilisateurs, _super);
    function Utilisateurs(id, name, role) {
        var _this = _super.call(this, id, name) || this;
        _this.role = "User";
        return _this;
    }
    return Utilisateurs;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, name, role) {
        var _this = _super.call(this, id, name) || this;
        _this.role = "Admin";
        return _this;
    }
    return Admin;
}(Person));
var Library = /** @class */ (function () {
    function Library() {
        this.tab = [];
    }
    Library.prototype.ajouter = function (x) {
        this.tab.push(x);
    };
    Library.prototype.retirer = function (ind) {
        if (ind < 0 || ind >= this.tab.length)
            console.log("index out of range");
        else
            this.tab.splice(ind, 1);
    };
    Library.prototype.rechercher = function (id) {
        for (var i = 0; i < this.tab.length; i++)
            if (this.tab[i].id == id)
                return this.tab[i].available;
        return false;
    };
    Library.prototype.emprunter = function (id) {
        if (this.rechercher(id)) {
            for (var i = 0; i < this.tab.length; i++)
                if (this.tab[i].id == id)
                    this.tab[i].available = false;
            console.log("emprunt avec succes\n");
        }
        else
            console.log("emprunt echoue : livre " + id + " n'est pas disponible\n");
    };
    Library.prototype.rendre = function (id) {
        for (var i = 0; i < this.tab.length; i++) {
            if (this.tab[i].id == id)
                this.tab[i].available = true;
        }
    };
    return Library;
}());
