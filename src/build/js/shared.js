/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		3:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"about","1":"contact","2":"home"}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/assets/js";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDQ8NDQ0NDQ0NDQ0ODQ0NDQ8ODQ4NFhEWFhURExMYHSggGBslJxMVIzEhJSk3Li4uGB8zODMtNygtLisBCgoKDg0OFRAQFy0eHR0uKy0rLS0tLS0tLS0tKystLS0tLS0rLS0rLS0tLS0tLS0tLS0tLSsrKy0tLS0tLS0tLf/AABEIANwA5gMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIGAwQFB//EADkQAAIBAgIFCAkEAgMAAAAAAAABAgMRBAUGITFRshI0QWFxcnOBEyIjQlJikbHBMkNTodHwJIKD/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEBAAIBBAICAQQDAAAAAAAAAAECAwQRITEyM0FxURIiUmEjQpH/2gAMAwEAAhEDEQA/APlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOWth6kFFzpzgpq8XOLipLqvtJmsx3CImJ6cRCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0cryXEYnXTjyafTVndQ8vi8jSmK1+lLXirccq0dw+HtJr0tVa/STS9V/LHYvv1nZTDWv8Acue2SbPUr0IVIuFSEZwe2MkmmazETG0qRO3TVs10R2zwkv8AxqPhn/n6nLfTfNW9c38mrV6M6cnCpCUJrbGSs+3s6zlmJidpbRMT04yEgAAAAAAAAAAAAAAAAAAAAAAAB28vy6tiJcmjByt+qWyEe9Lo+5atLW6VtaK9tvynRSjStOu1XqfDb2UX2e95/Q66aeI5tywtlmeuGwqK2LUlqSXQjoZLYCWAtgOtjsBRrx5Famprob1Si98XtRW1YtG0pi0x01DNdE6tO88O3Wh8Dsqq/Evv1HJfTzHNeW9csT21ySabTTTTs01Zp7mjnbIAAAAAAAAAAAAAAAAAAAADlw2HqVZqFKEqk37sVfVve5dbJis2naETMR22zKdEErTxUuU/4YO0V3pdPYvqzqpp/mzG2b8Noo0YQioQjGEI6lGKUYryR0xERxDCZ3chIAAAAABAOhmmT4fEr2sLTtZVYaqi8+nsZS+Ot+1q3mvTTc10axFC8oL09Je9BevFfND8o474LV65h0VyRLxDFoAAAAAAAAAAAAAAAAMoQcmoxTlJuyjFNyb3JIdjZcp0SqTtPEv0Uf44tOo+17I/fsOmmnmebMbZo+G3YLB0qMORRhGEem21ve3tb7TqrWKxtDCZme3YLIAKAAAWwEAAQABAPHzbR3D4i8kvRVX+5BLW/mjsf36zK+GtuepaVyTVpuaZLiMNd1I8qn0VYa4efw+Zx3xWp303reLPNM1wAAAAAAAAAAAAPdyrRmvWtKp7Ck9d5L2kl1R6O1/2b0wWt3xDK2WI65bhlmVUMOrUoJSatKpLXUl2v8LUddMdadMLXm3bvouqAUCkABQBIAABAgEZIAQDGS6Hse1Aa9muitGpeVC1Cp8KXspeXu+X0ML6es814a1yzHfLUMfl1bDy5NaDjf8ATLbCXZL/AFnHalq9w3raLdOqVWAAAAAAAAAHraLL/m0+pVGu3kM30/shnm8JfQI1N/1PQmHHu5EyqzIABQKQKAAqiaVpMom2yuBeccfCsWYtGMxMdrxO4QIwIwISAEYGEpJE7IebnrvhK97W9DN260tTK5Y/x2+lqT+6Hzk8t2gAAAAAAAAD19Fee0+7U4Gb6b2QyzeEt7PScap22EbJcsam/UVmExLkISAUgZJFq0mUTOzNRRvXHEKTbdkWQAGJjcYOO4yti/C8W/LBmW2yyECEjGUktoHHKpu1FohXdgWQ6Od80xHg1OFmeb12+l8flD50eU7gAAAAAAAAB6+inPafdqcDN9N7IZZvCW+HpOQIADKMmiNk7uWE79pEVmejeHKomtccR2rNmdzRUuBbgLgS4C4EZExE9pjhhKNjK2OfhaLOCVTd9Smyd2BZCAAOlnfNMR4FThZTL67fS2Pyh85PKdwAAAAAAAAA9fRTntPu1eBm+m9kM83hLfD0nGpAAAMommP5Vs5I1Gus0VcsZpkJZAAkCABcDjlVXQTsbuJyb2kocZzS0AAADo53zTEeBU4WUy+u30tTyh85PKdwAAAAAAAAA9fRTntPu1eBm+m9kM8vhLfT0nGpAACBlE1x/KtlNVUAyjVfTrIHKpJ7CErchLCVVLrJ2Q4nNslAiRQMDmntoEASIB0c75piPAqcLKZvXb6Wx+UPnJ5TuAAAAAAAAAHr6Kc9p92rwM303shnl8Jb6ei41ApAAZRNcXyrZbGqqAYkCXArm2QlCUMkgKSKEMDmntqEASIB0M75piPAqcLKZfXb6Wx+UPnJ5TuAAAAAAAAAHr6Kc9p92rwM303shnl8Jb6ei41AqApAsTXF8q2U1URhKMgYgAKBkSKAJQxOWe2oQISIB0M85piPAqcLKZfXb6Wx+UPnJ5TuAAAAAAAAAHr6Kc9p92rwM303shnl8Jb6j0XGoFQFAsTTH8q2U1VRgQgQCICoDICokAMTmntoARgQDoZ3zTEeBU4WUzeu30tj8ofOTyncAAAAAAAAAPX0U57T7tXgZvpvZDPN4S31HpONUQKgKATL0tEImGRqojAjAxZCUAyApKGVwDZE2iExG7C5guoGLAgHRzvmmI8Cpwspl9dvpanlD5yeU7gAAAAAAAAB6+ivPafdqcDN9N7IZZvCW+HpONQKQlSAAXLRaYNi5pF4lWajLIQCAUgVMnfY2Lmc3/C0VDNIAJECEJHRzvmmI8Gpwszzeu30vTyh85PKdwAAAAAAAAA9bRXntPu1OBm+m9kMs3hLfLnpONSEqgLcgAkCEAXLRaYRsXNItEq7BYLmc3/CdgpM7rKQASXCACEiXA6Od80xHg1OFlM3rt9LY/KHzo8p3AAAAAAAAEA7WWY14etGsoqfJunG9rpqz1+ZfHf9Ft1b1/VGzecszjD4jVTlafTSnqn5b/I9DHmrfrtyWxzXt6BqooACkABAkCEJAbgBSBQkCACEgBhOainKTUYpXbbskt7YGsZ7pFRlTnQop1OXGUJVNkEmrO2/7HJm1FZia15dGPFO8TLVTidCgAAAAAAAQCAS9ndamndNamnvA97K9Ka1O0a6daHxbKsfP3vP6nTj1Nq8W5Y2wxPXDbcBmFGvHlUainb9Udk496L1o7KXreOJc9qzXt2i6q3AEABCQYEAoFAEASAEA8PNdJqFG8Kft6q1Wg/Ui/ml+Ec+TUVrxHMta4pnvhqOY5rXxDvVn6t9VOPq04+XT2s4r5LX7l01pFenURRZUBUBQAAAAYACAYsCMCMC0as4SU4SlCcdkotpomJmJ3gmN+2z5Vpc1aGKjdfzQWv/ALQ6e1fQ6seq+L/9YWw/xbVhsRTqwU6c4zg9kou67OpnZW0WjeHPMTHEuUlAAAgACgAAADzM1zzD4a6lLl1OilDXLz6I+ZlkzVp320pjmzTs1z/EYi8W/RUn+1B6mvmltl9uo4sma1+OodFccVeWjFoqAyQFQFQFAAAAAABAIBLARoCWAlgObB4yrRny6M5Ql022SW6S2MtW01neJRNYniW2ZVpZTnaGJSpS/kjd0n2rbH7dZ2Y9TE8W4c98Mx4tkhNSSlFqUWrpp3TW9M6mCgAIBQAHUzHM6GHjyq01Fv8ATBa5y7I/nYUvkrTuVq0m3TUM10or1bxo3oU96ftZLrl7vl9Tiyai1uI4h01wxHfLwTnarYC2AqQGQFAoAAAAAAAACALASwEsBLAY2AlgO7luaV8M70p+re8qcvWpy8ujtRemS1OpVtSLdtvyrSahWtGp7Cq9VpP2cn8svw/7O3HqK24niXNfFMdcvbbOhkgHFisVSpQ5dWcacV0ye17kul9SK2tFY3mUxEzxDVc10tnK8MLHkR2elmk5vux2Lz/o48mpmeKuiuGP9mtVJylJynKUpS1uUm5Sb62zlmd+ZbpYC2AtgLYC2AoFAAAAAAAAAAAACALASwGNgJYCWAjQHqZXn2Iw9op+lpL9uo3ZL5ZbY/bqNcea1P7hnfHWz2MbpeuQlh6TU2tcqtuTB9ST9Y3tquP2wzrg/MtYxWJq1ZcurOVSW+T2LclsS6kclrTad5ndvERHEOOxCVsBUgLYC2AtgKAAAAAAAAAAAAAAAAAQCWAlgJYCWAWAWAWAtgLYC2AtgAFAAAAAAAAAAAAAAAAAAAABAJYBYCWAWAtgFgLYABQAAAAAAAAAAAAAAAAAAAAAAAABAAAABQAAAAAAAAAAAAAAP//Z"

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".about{\r\n\tcolor: blue;\r\n}\r\n\r\n.contact{\r\n\tcolor: red;\r\n}\r\n\r\n.home{\r\n\tcolor: yellowgreen;\r\n}\r\n\r\n#logo {\r\n\twidth: 20%;\r\n\theight: 200px;\r\n\tbackground-color: yellow;\r\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".about {\n  padding: 15px;\n  border-color: red;\n  border-style: solid;\n  border-width: 2px; }\n\n.contact {\n  padding: 15px;\n  border-color: yellowgreen;\n  border-style: solid;\n  border-width: 2px; }\n\n.home {\n  padding: 15px;\n  border-color: blue;\n  border-style: solid;\n  border-width: 2px; }\n", ""]);

	// exports


/***/ }
/******/ ]);