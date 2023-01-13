const btnComboRight = document.querySelector('.combo__btn');
let comboSliderBox = document.querySelectorAll('.combo__slider-box');

let i = 0;
btnComboRight.onclick = function () {
    comboSliderBox[i].style.display = 'none';
    i++;
    if (i >= comboSliderBox.length) {
        i = 0;
    }
    comboSliderBox[i].style.display = 'flex';
}


const btnChooseRight = document.querySelector('.choose__btn');
let chooseSliderBox = document.querySelectorAll('.choose__slider-box');
btnChooseRight.onclick = function () {
    chooseSliderBox[i].style.display = 'none';
    i++;
    if (i >= chooseSliderBox.length) {
        i = 0;
    }
    chooseSliderBox[i].style.display = 'flex';
}