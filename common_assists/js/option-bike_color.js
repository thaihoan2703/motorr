const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var optionImg = $(".optionNav_option-img")
var optionsImg = $(".optionNav_options-img")
var optionImgs = $$(".optionNav_option-img")
var imgs = $$('.configurator_stage-img')
var img = $('.configurator_stage-img')
var optionContent = $(".optionNav_option")
var optionContents = $$(".optionNav_option")

optionsImg.onclick = function(e){
    const colorNode = e.target.closest('.optionNav_option-img:not(.active)');
    if(colorNode){
        optionImgs.forEach((element,index,array) => {
            if(element.classList.contains('active')){
                element.classList.remove("active");
            }
        });
        colorNode.classList.toggle("active");
        optionImgs.forEach((element,index,array) => {
            if(element.classList.contains('active')){
                imgs.forEach((img_ele, img_index, img_array) =>{
                    if(index == img_index){
                        imgs[img_index].style.display = "block";
                    }else{
                        imgs[img_index].style.display = "none";
                    }
                })
                optionContents.forEach((cont_ele, cont_index,cont_array)=> {
                    if(index == cont_index){
                        optionContents[cont_index].style.display = "block";
                    }else{
                        optionContents[cont_index].style.display = "none";
                    }
                })
            }
        });
    }
}

