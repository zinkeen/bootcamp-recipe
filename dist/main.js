const source = $("recipe-template").html()
console.log(source)
const template = Handlebars.compile(source)

const render = function(recipes){
    $("#recipe-container").empty()
    let newHtml = template({recipes})
    console.log(newHtml)
    $("#recipe-container").append(newHtml)
}
 
 


const getRecipe = function(){
    let newFood = $("#new-food-input").val()
 
    $.get(`/recipes/${newFood}`, function (response) {
        console.log(response)
      
})
}


