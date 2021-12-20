
// var font_family_radios = document.forms['formA'].elements['font_family'];
// var align_radios = document.forms['formA'].elements['align'];
// var line_height_radios = document.forms['formA'].elements['line_height'];
// var letter_spacing_radios = document.forms['formA'].elements['letter_spacing'];
// var text_translation_radios = document.forms['formA'].elements['text_translation'];
// var text_decoration_radios = document.forms['formA'].elements['text_decoration'];
// var border_radios = document.forms['formA'].elements['border'];
// var border_color_radios = document.forms['formA'].elements['border_color'];
// var font_size_buttons = document.forms['formA'].elements['font_size'];
// var main_paragraph = document.querySelector('.main-passage');

// console.log(main_paragraph.style.fontFamily='arial');
// function setFontSize(_value){
//     main_paragraph.style.fontFamily
// }
// for(var i = 0 ; i < font_family_radios.length;i++) {
//     font_family_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.fontFamily = this.value;

//     }
// }

// for(var i = 0 ; i < align_radios.length;i++) {
//     align_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.textAlign = this.value;

//     }
// }

// for(var i = 0 ; i < line_height_radios.length;i++) {
//     line_height_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.lineHeight = this.value;

//     }
// }


// for(var i = 0 ; i < letter_spacing_radios.length;i++) {
//     letter_spacing_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.letterSpacing = this.value;

//     }
// }

// for(var i = 0 ; i < text_translation_radios.length;i++) {
//     text_translation_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.textTransform = this.value;

//     }
// }



// for(var i = 0 ; i < text_decoration_radios.length;i++) {
//     text_decoration_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.textDecoration = this.value;

//     }
// }

// for(var i = 0 ; i < border_radios.length;i++) {
//     border_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.border = this.value;

//     }
// }

// for(var i = 0 ; i < border_color_radios.length;i++) {
//     border_color_radios[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.color = this.value;

//     }
// }

// for(var i = 0 ; i < font_size_buttons.length;i++) {
//     font_size_buttons[i].onclick = function() {
//         console.log(this.value);
//         main_paragraph.style.fontSize = this.value;

//     }
// }

var main_paragraph = document.querySelector('.main-passage');

const tds = document.getElementsByTagName('td');

for (let i = 0; i < tds.length; i++) {

    tds[i].addEventListener('click',function(e){
        switch (e.target.name) {
            case 'font_family':
                main_paragraph.style.fontFamily = e.target.value;
                break;
            case 'align':
                main_paragraph.style.textAlign = e.target.value;
                break;
            case 'line_height':
                main_paragraph.style.lineHeight = e.target.value;
                break;
            case 'letter_spacing':
                main_paragraph.style.letterSpacing = e.target.value;
                break;
            case 'font_size':
                main_paragraph.style.fontSize = e.target.value;
                break;
            case 'text_translation':
                main_paragraph.style.textTransform = e.target.value;
                break;
            case 'text_decoration':
                main_paragraph.style.textDecoration = e.target.value;
                break;
            case 'border':
                main_paragraph.style.border = e.target.value;
                break;
            case 'border_color':
                main_paragraph.style.borderColor  = e.target.value;
                break;
        
            default:
                main_paragraph.innerText  =  'Pleas pick one of the Radios';
                break;
        }
    })
    
}
