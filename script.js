//Gets the all the students and add them to the varieble $students
var $student = $(".student-item");
var pages = $student.length
//Creates the div and ul element and sets them to appropriete varibles.
let div = document.createElement("div");
let Ul = document.createElement("ul");
//Creates the input dic and button element and sets them to appropriete varibles.
let divserch = document.createElement("div");
let textsearch = document.createElement("input");
let buttsearch = document.createElement("button");
let search;


//When loaded The pages Function is called.
$(window).on("load", Calc(pages));
//Makes the program start by displaying page one
$(window).on("load", DisplayPage(1))

//Here i create the Pages and it does this when it loads.
function Calc(result) {
  //Calculates how many pages there should be and adds it to the varible pages
    result = Math.ceil(result / 10);
    //Creating the div and 
    $(divserch).addClass("student-search").appendTo(".page-header");
    $(textsearch).attr("placeholder", "Search for students...").appendTo(".student-search");
    $(buttsearch).html("search").appendTo(".student-search");


    //Creating the div and adding the pagination class to it, also putting it at the bottom of the .page class
    $(div).addClass("pagination").appendTo($(".page"));
    //Making the Ul inside the div
    div.appendChild(Ul);
    //loop the code until there is no need for more pages   
    for (let i = 0; i < result; i++) {
        //Creates the Li and a element
        let li = document.createElement("li");
        let a = document.createElement("a");
        //Sets the href : # to the a thing to get the right styles
        a.setAttribute("href", "#");
        //Textcontent +1 cus othervise the page selection would start at 0 wich would be a bit weird
        a.textContent = i + 1;
        //Creates the a inside the li and the li inside the ul
        li.appendChild(a);
        Ul.appendChild(li);
    }
}

        

$(buttsearch).on("click", function () {
    let matchstudent = [];
    search = $(textsearch).val().toUpperCase();
    const Name = document.querySelectorAll("h3");
    const Email = document.querySelectorAll(".email");
    for (let i = 0; i < $student.length; i++) {
        //every student get hidden
        $student[i].style.display = "none";
        let nameMatch = Name[i].innerText.toUpperCase();
        let emailMatch = Email[i].innerText.toUpperCase();
        if (nameMatch.includes(search) || emailMatch.includes(search)){
            $student[i].style.display = "block"
        }
    }

});

//When you click a page the page displays
$(Ul).on("click", function (e) {
    let number = parseInt(e.target.textContent);
    //Gets the number of the page and then sends it to the display page function
    DisplayPage(number);

})

//Made this a difrent function so i can call it in the begining instead of writing the code twice
function DisplayPage(PageNumber) {
    //selects the id of the page and then multiplies it by ten so if for example the page is 2 the max number is 20 and the minimun is 10
    //so the students will be from 10 to 19 including 10.
    let max = PageNumber * 10;
    let min = max - 10;
    for (let i = 0; i < $student.length; i++) {
        //every student get hidden
        $student[i].style.display = "none";
        if (i >= min && i < max)
            //the students that is between min and max will get shown.
            $student[i].style.display = "block"
    }
}
