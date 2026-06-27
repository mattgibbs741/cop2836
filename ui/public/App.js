"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/* eslint "react/react-in-jsx-scope": "off" */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */
/* globals React ReactDOM */

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

// eslint-disable-next-line react/prefer-stateless-function
var IssueFilter = /*#__PURE__*/function (_React$Component) {
  function IssueFilter() {
    _classCallCheck(this, IssueFilter);
    return _callSuper(this, IssueFilter, arguments);
  }
  _inherits(IssueFilter, _React$Component);
  return _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a placeholder for the issue filter");
    }
  }]);
}(React.Component);
function IssueRow(props) {
  var issue = props.issue;
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, issue.id), /*#__PURE__*/React.createElement("td", null, issue.status), /*#__PURE__*/React.createElement("td", null, issue.owner), /*#__PURE__*/React.createElement("td", null, issue.created.toDateString()), /*#__PURE__*/React.createElement("td", null, issue.effort), /*#__PURE__*/React.createElement("td", null, issue.due ? issue.due.toDateString() : ' '), /*#__PURE__*/React.createElement("td", null, issue.title));
}
function IssueTable(props) {
  var issues = props.issues;
  var issueRows = issues.map(function (issue) {
    return /*#__PURE__*/React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
}
var IssueAdd = /*#__PURE__*/function (_React$Component2) {
  function IssueAdd() {
    var _this;
    _classCallCheck(this, IssueAdd);
    _this = _callSuper(this, IssueAdd);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  _inherits(IssueAdd, _React$Component2);
  return _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        owner: form.owner.value,
        title: form.title.value,
        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
      };
      var createIssue = this.props.createIssue;
      createIssue(issue);
      form.owner.value = '';
      form.title.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add"));
    }
  }]);
}(React.Component);
function graphQLFetch(_x) {
  return _graphQLFetch.apply(this, arguments);
}
function _graphQLFetch() {
  _graphQLFetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(query) {
    var variables,
      response,
      body,
      result,
      error,
      details,
      _args3 = arguments,
      _t;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          variables = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          _context3.p = 1;
          _context3.n = 2;
          return fetch(window.ENV.UI_API_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              query: query,
              variables: variables
            })
          });
        case 2:
          response = _context3.v;
          _context3.n = 3;
          return response.text();
        case 3:
          body = _context3.v;
          result = JSON.parse(body, jsonDateReviver);
          if (result.errors) {
            error = result.errors[0];
            if (error.extensions.code === 'BAD_USER_INPUT') {
              details = error.extensions.exception.errors.join('\n ');
              alert("".concat(error.message, ":\n ").concat(details));
            } else {
              alert("".concat(error.extensions.code, ": ").concat(error.message));
            }
          }
          return _context3.a(2, result.data);
        case 4:
          _context3.p = 4;
          _t = _context3.v;
          alert("Error in sending data to server: ".concat(_t.message));
          return _context3.a(2, null);
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return _graphQLFetch.apply(this, arguments);
}
var IssueList = /*#__PURE__*/function (_React$Component3) {
  function IssueList() {
    var _this2;
    _classCallCheck(this, IssueList);
    _this2 = _callSuper(this, IssueList);
    _this2.state = {
      issues: []
    };
    _this2.createIssue = _this2.createIssue.bind(_this2);
    return _this2;
  }
  _inherits(IssueList, _React$Component3);
  return _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var query, data;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              query = "query {\n      issueList {\n        id title status owner created effort due\n      }\n    }";
              _context.n = 1;
              return graphQLFetch(query);
            case 1:
              data = _context.v;
              if (data) {
                this.setState({
                  issues: data.issueList
                });
              }
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function loadData() {
        return _loadData.apply(this, arguments);
      }
      return loadData;
    }()
  }, {
    key: "createIssue",
    value: function () {
      var _createIssue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(issue) {
        var query, data;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              query = "mutation issueAdd($issue: IssueInputs!) {\n      issueAdd(issue: $issue) {\n        id\n      }\n    }";
              _context2.n = 1;
              return graphQLFetch(query, {
                issue: issue
              });
            case 1:
              data = _context2.v;
              if (data) {
                this.loadData();
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function createIssue(_x2) {
        return _createIssue.apply(this, arguments);
      }
      return createIssue;
    }()
  }, {
    key: "render",
    value: function render() {
      var issues = this.state.issues;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
        issues: issues
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);
}(React.Component);
var element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById('contents'));