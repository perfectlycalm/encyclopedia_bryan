// Navigation Dropdowns

const dietArrow = document.querySelector("#diet-arrow");
const dietDropdown = document.querySelector("#diet-dropdown");
const dietItem = document.querySelector("#diet-item")
let dietDropdownClosed = true;

dietItem.addEventListener("click", function () {
    rotateArrow(dietArrow, dietDropdown, dietDropdownClosed);
    dietDropdownClosed = rotateArrow(dietArrow, dietDropdown, dietDropdownClosed);
});


const fitnessArrow = document.querySelector("#fitness-arrow");
const fitnessDropdown = document.querySelector("#fitness-dropdown");
const fitnessItem = document.querySelector("#fitness-item")
let fitnessDropdownClosed = true;

fitnessItem.addEventListener("click", function () {
    rotateArrow(fitnessArrow, fitnessDropdown, fitnessDropdownClosed);
    fitnessDropdownClosed = rotateArrow(fitnessArrow, fitnessDropdown, fitnessDropdownClosed);
});


const moneyArrow = document.querySelector("#money-arrow");
const moneyDropdown = document.querySelector("#money-dropdown");
const moneyItem = document.querySelector("#money-item")
let moneyDropdownClosed = true;

moneyItem.addEventListener("click", function () {
    rotateArrow(moneyArrow, moneyDropdown, moneyDropdownClosed);
    moneyDropdownClosed = rotateArrow(moneyArrow, moneyDropdown, moneyDropdownClosed);
});


const timeManagementArrow = document.querySelector("#timeManagement-arrow");
const timeManagementDropdown = document.querySelector("#timeManagement-dropdown");
const timeManagementItem = document.querySelector("#timeManagement-item")
let timeManagementDropdownClosed = true;

timeManagementItem.addEventListener("click", function () {
    rotateArrow(timeManagementArrow, timeManagementDropdown, timeManagementDropdownClosed);
    timeManagementDropdownClosed = rotateArrow(timeManagementArrow, timeManagementDropdown, timeManagementDropdownClosed);
});


const supplementsArrow = document.querySelector("#supplements-arrow");
const supplementsDropdown = document.querySelector("#supplements-dropdown");
const supplementsItem = document.querySelector("#supplements-item")
let supplementsDropdownClosed = true;

supplementsItem.addEventListener("click", function () {
    rotateArrow(supplementsArrow, supplementsDropdown, supplementsDropdownClosed);
    supplementsDropdownClosed = rotateArrow(supplementsArrow, supplementsDropdown, supplementsDropdownClosed);
});


function rotateArrow (arrow, dropdown, dropdownClosed) {
    if (dropdownClosed) {
        arrow.style.transform = 'rotate(180deg)'
        dropdown.style.maxHeight = "100%";
        if (window.innerWidth <= 975) {
            dropdown.style.marginTop = "5px"
        }
        return false
    } else {
        arrow.style.transform = 'rotate(0deg)'
        dropdown.style.maxHeight = "0";
        if (window.innerWidth <= 975) {
            dropdown.style.marginTop = "0"
        }
        return true;
    }
    
}


// Nav menu

const navMenu = document.querySelector(".nav-menu");
const navMobile = document.querySelector(".main-nav");
let navMenuClosed = true;

navMenu.addEventListener("click", function() {
    if (navMenuClosed) {
        navMobile.style.display = "flex";
        navMenuClosed = false;
    } else {
        navMobile.style.display = "none";
        navMenuClosed = true;
    }
})
