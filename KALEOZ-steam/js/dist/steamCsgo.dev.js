"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var navMenus = document.querySelectorAll('.nav-menu');
var menuIten = document.querySelectorAll('.menu-iten');
var search = document.querySelector('.search');
var searchInput = document.querySelector('.searchInput');
var filter = document.querySelector('.filter');
var filterBtn = document.querySelector('.filter-btn');
var productFilterLis = document.querySelectorAll('.product-filter li');
navMenus.forEach(function (navMenu, index) {
  var lis = navMenu.querySelectorAll('li');
  var spanValue = navMenu.querySelector('span'); // 判断是否有下拉  

  if (lis.length == 0) {
    navMenu.classList.add('hideDown');
  } // 设置下拉数据的个数和列数


  var CW = navMenu.offsetWidth;
  var NUM = Math.ceil(lis.length / 10);
  menuIten[index].style.setProperty('--width', CW);
  menuIten[index].style.setProperty('--num', NUM);
  navMenu.addEventListener('click', function () {
    if (navMenu.classList.contains('on')) {
      navMenu.classList.remove('on');
    } else {
      navMenus.forEach(function (item) {
        item.classList.remove('on');
      });
      navMenu.classList.add('on');

      var lisItem = _toConsumableArray(lis);

      lisItem.forEach(function (li) {
        li.addEventListener('click', function (e) {
          spanValue.innerHTML = li.innerHTML;
          lisItem.forEach(function (item) {
            item.classList.remove('selected');
          });
          li.classList.add('selected');

          _this.classList.remove('on');
        });
      });
    }
  });
}); // 搜索获取焦点

searchInput.addEventListener('focus', function (e) {
  e.preventDefault();
  search.classList.add('on');
}); // 搜索失去焦点

searchInput.addEventListener('blur', function (e) {
  e.preventDefault();

  if (searchInput.value.trim() == '') {
    search.classList.remove('on');
  }
});
filterBtn.addEventListener('click', function () {
  if (filter.classList.contains('on')) {
    filter.classList.remove('on');
  } else {
    filter.classList.add('on');
  }
}); // Hot、New、Price  tab切换

productFilterLis.forEach(function (productFilterLi) {
  productFilterLi.addEventListener('click', function () {
    productFilterLis.forEach(function (item) {
      item.classList = '';
    });
    productFilterLi.classList.add('selected');
  });
});