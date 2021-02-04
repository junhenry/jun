"use strict";

// 获取节点
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var departmentLists = document.querySelectorAll('.departmentList li');
var nationalFlag = document.querySelector('.nationalFlag');
var departmentIndex = 0; // 上一步

prev.addEventListener('click', function () {
  departmentIndex--;

  if (departmentIndex < 0) {
    departmentIndex = departmentLists.length - 1;
  }

  departmentLists.forEach(function (item) {
    item.classList.remove('show');
  });
  nationalFlag.src = "../image/seagm-ers-block-1-department".concat(departmentIndex + 1, ".png");
  departmentLists[departmentIndex].classList.add('show');
}); // 下一步

next.addEventListener('click', function () {
  departmentIndex++;

  if (departmentIndex > departmentLists.length - 1) {
    departmentIndex = 0;
  }

  departmentLists.forEach(function (item) {
    item.classList.remove('show');
  });
  console.log(departmentIndex);
  nationalFlag.src = "../image/seagm-ers-block-1-department".concat(departmentIndex + 1, ".png");
  departmentLists[departmentIndex].classList.add('show');
});