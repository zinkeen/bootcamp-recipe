/* const source = $("recipe-template").html()
const template = Handlebars.compile(source)
 */




const getRecipe = function(){
    let newFood = $("#new-food-input").val()
 
    $.get(`/recipes/${newFood}`, function (response) {
        console.log(response)
        // render(response)
})
}

/* 
const render = function(recipes){
    $("#recipe-container").empty()
    let newHtml = template({recipes})
    console.log(newHtml)
    $("#recipe-container").append(newHtml)
} */