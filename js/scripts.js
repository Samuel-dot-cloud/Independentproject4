var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

function Pizza(pizza) {
    this.pizza = pizza;
    this.condiments = [];
}

function Condiment(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
var size = {
    Small: "300 ",

    Medium: "300 ",

    Large: "500 "
};
var crust = {
    New haven style: "100 ",

    StLouis style: "100 ",
    Silician: "100 "
};
var topping = {
    Ham and pineapple: "
    200 ", 
    Bacon and shrimp: "200 ",

    Chicken fajita: "300 "
};


// UI logic/
$(document).ready(function() {
            $("#add-pizza").click(function() {
                $("newpizza").append('<div class="form-group">' +
                    '<label for="sepizza">Select pizza.</label>' +
                    ' <select id="sepizza" name="pizza"></select>' +
                    '<option hidden>Pizza name.</option>' +
                    '<option value="onep">Marinara @ kshs.600</option>' +
                    '<option value="twop">Margherita @ kshs.600</option>' +
                    '<option value="threep">Calzone @ kshs.300</option>' +
                    '<option value="fourp">Stromboli @ kshs.400</option>' +
                    '<option value="fivep">Neapolitan @ kshs.500</option>' +
                    '<option value="sixp">Deep dish @ kshs.500</option>' +
                    '</select>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="sesize">Select size.</label>' +
                    '<select id="sesize" name="size">' +
                    '<option hidden>Pizza size.</option>' +
                    ' <option value="onesize">Small @ kshs.300</option>' +
                    '<option value="twosize">Medium @ kshs.300</option>' +
                    '<option value="threesize">Large @ kshs.500</option>' +
                    '</select>' +
                    ' </div>' +
                    '<div class="form-group">' +
                    '<label for="secrust">Select crust.</label>' +
                    '<select id="secrust" name="crust">' +
                    '<option hidden>Pizza crust.</option>' +
                    '<option value="onecru ">New haven style @ kshs.100</option>' +
                    '                    <option value="twocru ">St.Louis style @ kshs.100</option>' +
                    '<option value="threecru ">Silician @ kshs.100</option>' +
                    '</select>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<label for="setop">Select topping.</label>' +
                    '<select id="setop" name="topping">' +
                    '<option hidden>Pizza topping.</option>' +
                    '<option value="onetop ">Ham and pineapple @ kshs.200</option>' +
                    '<option value="twotop ">Bacon and shrimp @ kshs.200</option>' +
                    ' <option value="threetop ">Chicken fajita @kshs.300</option>' +
                    '</select>' +
                    '</div>' +
                    '<div class="form-group">' +
                    '<input type="number" class="form-control" id="number" placeholder="Number of pizzas" min="1" required>' +
                    '</div>');
            });
            $("form#newpizza").submit(function(event) {
                        event.preventDefault();
                        $(".form-group").each(function() {
                            var size = $(this).find("input.sesize").val();
                            var crust = $(this).find("input.secrust").val();
                            var topping = $(this).find("input.setop").val();
                            var quantity = $(this).find("input#number").val();
                            var newPizza = newPizza(inputtedSesize, inputtedSecrust, inputtedSetop, inputtedNumber)
                        })
                    }