// function $(selector) {
//     var eles = document.querySelectorAll(selector);
//     return eles.length > 1 ? eles : document.querySelector(selector);
// }

// /** 
//  * 轮播函数
//  * @param {Number} index 最开始出现的索引
//  * @param {Number} interval 自动轮播间隔，单位 ms
//  * 
//  * 
//  */

// function netEaseCarousel(options) {
//     this.index = options.index || 0;
//     this.interval = options.interval || 3000;
//     this.imgs = $(options.imgs) || $('.rotate-img');
//     this.pause = false;
// }


// new netEaseCarousel({
//     imgs: '.rotate-img',

// });



// mocha

// dbb
// tbb


function rotate(rotateObj) {

    var lis = document.querySelectorAll('.' + rotateObj.imgCon + ' li'); //图片中的 li空格不能删
    var imgCon = document.querySelector('.' + rotateObj.imgCon); //图片 ul

    var indexs = document.querySelectorAll('.' + rotateObj.pointCon + ' li'); // 下面的 li空格不能删
    var index = document.querySelector('.' + rotateObj.pointCon); // 下面的 ul

    var leftBtn = document.querySelector('.' + rotateObj.lefthand);
    var rightBtn = document.querySelector('.' + rotateObj.righthand);

    var lisLen = lis.length,
        indexsLen = indexs.length;
    var nextIndex = 0,
        preIndex = 0;

    indexs = Array.prototype.slice.call(indexs);

    if (index) {
        //根据光标获得 index.
        index.addEventListener('click', function(ev) {
            var target = ev.target;
            //获得 index.
            if (target.tagName.toUpperCase() == 'LI') {
                // 获得前一个的 index.
                for (var i = 0; i < lisLen; i++) {
                    if (lis[i].className == 'showleft' || lis[i].className == 'showright') {
                        preIndex = i;
                    }
                };
                // 获得后一个的 index.
                nextIndex = indexs.indexOf(target);

                if (lis[nextIndex].className != 'showleft' && lis[nextIndex].className != 'showright') {
                    setImgIndex(preIndex, nextIndex);
                }
            }
        });
        changeStyle(index, 'mouseover', function() {
            clearInterval(setIntFun);
        });
        changeStyle(index, 'mouseover', function() {
            setIntFun = setInterval(setInt, 2000);
        });
    }

    //重新设置lis 的 className 和 光标的 背景 
    function reset() {
        for (var i = 0; i < lisLen; i++) {
            lis[i].className = 'none';
        }
        if (index) {
            for (var j = 0; j < indexsLen; j++) {
                indexs[j].style.background = '#dcdcdc';
            }
        }

    };
    //设置下面光标轮播   获得当前的 index. 并判断前后大小
    function setImgIndex(preIndex, nextIndex) {
        reset();

        if (preIndex > nextIndex) {
            lis[nextIndex].className = 'showleft';
        } else if (preIndex < nextIndex) {
            lis[nextIndex].className = 'showright';
        }
        if (index) {
            indexs[nextIndex].style.background = '#fad554';
        }
        lis[preIndex].className = 'show';
    }
    //设置自动轮播
    var setIntFun = setInterval(setInt, 2000);

    function setInt() {
        reset();

        nextIndex++;
        preIndex = nextIndex - 1;
        if (nextIndex == lisLen) {
            nextIndex = 0;
        }
        if (preIndex == lisLen) {
            preIndex = 0;
        }
        if (index) {
            indexs[nextIndex].style.background = '#22A9FF';
        }
        lis[nextIndex].className = 'showright';
        lis[preIndex].className = 'show';
        preIndex++;
    };

    if (leftBtn && rightBtn) {
        //给两个 btn 添加事件
        leftBtn.addEventListener('click', function() {
            reset();
            if (nextIndex == 0) {
                nextIndex = lisLen;
            }
            nextIndex--;
            preIndex = nextIndex + 1;
            //如果后一张为最后一张  前一张为0
            if (nextIndex == lisLen - 1) {
                preIndex = 0;
            }
            if (index) {
                indexs[nextIndex].style.background = '#22A9FF';
            }

            lis[nextIndex].className = 'showleft';
            lis[preIndex].className = 'show';
            preIndex--;
        });
        changeStyle(imgCon, 'mouseover', function() {
            showBtn();
            clearInterval(setIntFun);
        });
        changeStyle(imgCon, 'mouseout', function() {
            hideBtn();
            setIntFun = setInterval(setInt, 2000);
        });

        rightBtn.addEventListener('click', setInt, false);

    }
    // 添加 hover 显示左右 button 和 重设置自动轮播
    function showBtn() {
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
    }

    function hideBtn() {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
    }

    function changeStyle(element, ev, callback, async) {
        var async = async || false;
        element.addEventListener(ev, function() {
            callback();
        })
    }

    if (index && leftBtn && rightBtn) {
        changeStyle(index, 'mouseover', function() {
            showBtn();
        });
        changeStyle(index, 'mouseover', function() {
            hideBtn();
        });
    }
};

rotate({
    imgCon: 'images',
    pointCon: 'index',
    lefthand: 'lefthand',
    righthand: 'righthand'
});




