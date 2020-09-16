const date = new Date();
const hour = date.getHours();
const todos = JSON.parse(localStorage.getItem("todo"));
var todo = {};

for (let i = 9; i < 18; i++) {

$(".container").append(`<div class="row time-block">
<div class="col-1 hour">${i}:00</div>
<textarea rows="2" class="col-10 description past" id="${i}"></textarea>
<button class="col-1 saveBtn" id="${i}">Save</button>
</div>`);

if (i < hour) {
    $("#" + i).addClass("past");
}
else if (i === hour) {
    $("#" + i).removeClass("past");
    $("#" + i).addClass("present");
}
else {
    $("#" + i).removeClass("past");
    $("#" + i).removeClass("present");
    $("#" + i).addClass("future");
}
}

$(".saveBtn").on("click", function(){
    todo = {}
    const value = $(this).siblings("textarea").val().trim();
    const key = $(this).attr("id")
    todo[key] = value
    todos.push(todo)
    console.log(todos)
    localStorage.setItem("todo", JSON.stringify(todos))
});


var saveTodos = JSON.parse(localStorage.getItem("todo"))  
// console.log(saveTodos)
for (let i = 0; i < saveTodos.length; i++) {
    for(const key in saveTodos[i]) {
        $("#" + key).val(saveTodos[i][key])
        console.log(key)
    };
}