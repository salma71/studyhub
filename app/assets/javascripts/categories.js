$(document).ready(function () {
    renderCategories();
    renderQuestions();
    renderAnswers();
})

class Category {
    constructor(categoryObj) {
        this.id = categoryObj.id
        this.name = categoryObj.attributes.name
        this.questions_id = categoryObj.relationships.questions.data.id
    }
    renderCategory() {
        return `<div>${this.name}<br />`
    }
}
class Question {
    constructor(questionObject) {
        this.id = questionObject.id
        this.title = questionObject.attributes.title
        this.content = questionObject.attributes.content
        this.category_id = questionObject.relationships.category.data.id
    }

    renderQuestion(){
        return `<div>${this.title}<br />${this.content}</div>`
    }
}
function renderCategories() { 
    $("#new_category").on("submit", function (e) {         
        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(data){
                // debugger
                const categoryObj = new Category(category)
                console.log(categoryObj)
                $(`div#main-content#/categories/${categoryObj.id}`).append(categoryObj.renderCategory())
            }
        })
        e.preventDefault();
    })
} 

function renderQuestions() { //works fine
    $("a.question").on("click", function (e) {
        //console.log(this.href)
        $.get(this.href + '.json').success(function (response) {
            console.log(response.included)
            response.included.forEach(question => {
                const questionObject = new Question(question)
                console.log(questionObject)
                $(`div#load-questions-${ questionObject.category_id}`).append(questionObject.renderQuestion())
            })
        })
        e.preventDefault();
    })
}

function renderAnswers() {
    $("input.create").on("click", function (e) {
        // debugger;
        console.log(this.href)
        $.get(this.href + '.json').success(function (response) {
            debugger;
            console.log(response.included)
        //     response.included.forEach(question => {
        //         const questionObject = new Question(question)
        //         console.log(questionObject)
        //         $(`div#load-questions-${questionObject.category_id}`).append(questionObject.renderQuestion())
        //     })
        })
        e.preventDefault();
    })
}
// function renderAnswers() { 
//     // debugger; // works only in the console 
//     // and render 1st question repeated
//     $("a#answer").on("click", function (e) {
//         // debugger;
//         $.get(this.href).success(function (response) {
//             // debugger;
//             $("div.load-questions").html(response)
//             $("div#single-post-content").fadeToggle()
//         })
//         e.preventDefault();
//     })
// }