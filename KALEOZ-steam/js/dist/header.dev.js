"use strict";

var topLanguage = document.querySelector('.top-language');
var language = document.querySelector('.language');
var form = document.querySelector('.form');
console.log(form, 33);
var languageClose = document.querySelector('.language-close');
var userMenu = document.querySelector('.user-menu');
var user = document.querySelector('.user');
var mainNavGame = document.querySelector('.main-nav-game');
var gameListCtrl = document.querySelector('.game-list-ctrl'); // 语言切换

language.addEventListener('click', function () {
  if (topLanguage.classList.contains('on')) {
    topLanguage.classList.remove('on');
  } else {
    topLanguage.classList.add('on');
  }
}); // 语言切换关闭

languageClose.addEventListener('click', function () {
  topLanguage.classList.remove('on');
}); // 用户菜单切换

user.addEventListener('click', function () {
  if (userMenu.classList.contains('on')) {
    userMenu.classList.remove('on');
  } else {
    userMenu.classList.add('on');
  }
}); // 游戏筛选

gameListCtrl.addEventListener('click', function () {
  if (mainNavGame.classList.contains('on')) {
    mainNavGame.classList.remove('on');
  } else {
    mainNavGame.classList.add('on');
  }
});