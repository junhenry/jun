"use strict";

var filterNavLis = document.querySelectorAll('.filter-nav li');
var filterTitle = document.querySelector('.filter-title h6');
var filterMenu = document.querySelector('.filter-menu');
var titleClose = document.querySelector('.filter-title i');
var title = document.querySelector('.filter-title .title');
var productFilterLis = document.querySelectorAll('.product-filter li');
var search = document.querySelector('.search');
var searchInput = document.querySelector('.searchInput');
var filter = document.querySelector('.filter');
var filterBtn = document.querySelector('.filter-btn');
var heroes = document.querySelector('.heroes');
var close = document.querySelector('.close');
filterNavLis.forEach(function (filterNavLi) {
  filterNavLi.addEventListener('click', function (e) {
    filterNavLis.forEach(function (item) {
      item.classList.remove('selected');
    });
    filterNavLi.classList.add('selected');
    filterMenu.classList.add('on');
    var liValue = filterNavLi.querySelector('span');
    filterTitle.innerHTML = liValue.innerHTML;
    var dataDotaNpc = e.target.getAttribute('data-dota-npc');
    title.setAttribute('data-dota-npc', dataDotaNpc);
  });
}); // 过滤名称关闭

titleClose.addEventListener('click', function () {
  filterMenu.classList.remove('on');
  filterNavLis.forEach(function (item) {
    item.classList.remove('selected');
  });
  filterTitle.innerHTML = 'Select Your Hero';
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
close.addEventListener('click', function () {
  filterMenu.classList.add('show');
});
heroes.addEventListener('click', function () {
  filterMenu.classList.remove('show');
});