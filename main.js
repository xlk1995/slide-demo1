let $buttons = $('#buttonWrapper>button')
let $sildes = $('#slides')
let $images = $sildes.children('img')   //获取所有的img
let current = 0

makeFakeSlides()
$sildes.css({transform:'translateX(-400px)'})

bindEvents()

function bindEvents(){
    $buttons.eq(0).on('click',function(){
        if(current === 2){
            $sildes.css({transform:'translateX(-1600px)'})
            .one('transitionend',function(){
                $sildes.hide()
                    .offset()   //如果hide之后show出问题了就可以用offset
                $sildes.css({transform:'translateX(-400px)'})
                    .show()
            })
        }else{
            $sildes.css({transform:'translateX(-400px)'})
        }
        current = 0
    })
    $buttons.eq(1).on('click',function(){
        $sildes.css({transform:'translateX(-800px)'})
        current =1
    })
    $buttons.eq(2).on('click',function(){
         if(current === 0){
            $sildes.css({transform:'translateX(0)'})
            .one('transitionend',function(){
                $sildes.hide()
                    .offset()
                $sildes.css({transform:'translateX(-1200px)'})
                    .show()
            })
        }else{
            $sildes.css({transform:'translateX(-1200px)'})
        }
        current = 2
    })
}



function makeFakeSlides(){
    //克隆第一个和最后一个元素
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true) //加true就是复制元素及其子元素（全家）

    //添加到slides的首尾
    $sildes.append($firstCopy)
    $sildes.prepend($lastCopy)
}