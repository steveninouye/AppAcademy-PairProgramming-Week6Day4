/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(HTMLElements){ //\n    this.HTMLElements = HTMLElements;\n  }\n  \n  html(str){\n    if(str){\n      this.HTMLElements.forEach(element=> {\n        element.innerHTML = str;\n      });\n    } else {\n      return this.HTMLElements[0].innerHTML;\n    }\n  }\n  \n  empty(){\n    this.HTMLElements.forEach(element => {\n      element.innerHTML = \"\";\n    });\n  }\n  \n  append(arg){\n    if (arg instanceof HTMLElement){\n          this.HTMLElements.forEach(el => el.appendChild(arg));\n    } else if (arg.constructor === String){\n      this.HTMLElements.forEach(el => {\n        el.innerHTML += arg;\n      });\n    } else if (arg.constructor === DOMNodeCollection){\n      arg.forEach(argElement => {\n        this.HTMLElements.forEach(el => { el.appendChild(argElement); });\n      });\n    }\n  }\n  \n  forEach(cb){\n    this.HTMLElements.forEach(el => cb(el));\n  }\n  \n  attr(attribute, setter){\n    if(attribute === \"checked\"){\n      this.HTMLElements.forEach(el => el.checked = !el.checked );\n    }\n    if(setter){\n      \n    } else if (attribute){\n      \n    } else {\n      let attributes = {};\n      this.HTMLElements.forEach(el => {\n        for(let i = 0; el[i] !== undefined; i++){\n            if(attributes[el[i]] !== undefined){\n              attributes[el[i]] = el[i].value;\n            }\n        }\n      });\n      return attributes;\n    }\n  }\n  \n  addClass(){\n    \n  }\n  \n  removeClass(){\n    \n  }\n  \n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function(arg){\n  if(typeof arg === \"string\"){\n    let result = [];\n    if(arg[0] === \"#\"){\n      result.push(document.getElementById(arg.slice(1)));\n    }else if(arg[0] === \".\"){\n      let elements = document.querySelectorAll(arg.slice());\n      for(let i = 0; i < elements.length; i++){\n        result.push(elements[i]);\n      }\n    } else {\n      elements = document.getElementsByTagName(arg);\n      for(let i = 0; i < elements.length; i++){\n        result.push(elements[i]);\n      }\n    }\n    return new DOMNodeCollection(result);\n  }else if (arg instanceof HTMLElement){\n    return new DOMNodeCollection([arg]);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });