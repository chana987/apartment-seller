
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    //Your code goes here.
    const source = $("#template-apartments").html()
    const template = Handlebars.compile(source)
    HandlebarsIntl.registerWith(Handlebars)
    const newHTML = template({ apartments })
    $("#results").append(newHTML)
}

renderApts(apartments)