function success() {
    var url = `https://newsapi.org/v2/everything?q=BayArea&sortBy=publishedAt&apiKey=d3273c96db6d4c538a014da34567caee`
    console.log(url)
}

var url = `https://newsapi.org/v2/everything?q=BayArea&sortBy=publishedAt&apiKey=d3273c96db6d4c538a014da34567caee`
$.ajax({
        url: url
    })
    .then(function (result) {
        articleGen(result)
    })
function articleGen(data){
    
    var $div = $("<div>").addClass(" text-dark")
    var randomIndexForArticle = Math.floor(Math.random() * data.totalResults )
    var randomArticleToPick = [randomIndexForArticle % 8, (randomIndexForArticle+1) % 8, (randomIndexForArticle+2%8)]
    console.log(randomArticleToPick)
    for(var i = 0; i < 3; i++){
        randomIndexForArticle = Math.floor(Math.random(randomIndexForArticle) * data.totalResults )
        // created 3 span for my main div
        var $span = $("<span>").addClass("card mt-3")
        var $authorForSpan = $("<p>")
        var $articleTitleForSpan = $("<p>")
        var $aLink = $("<a>").attr("href", data.articles[randomArticleToPick[i]].url )
        //need to create a title for article and a author 
        $authorForSpan.text(data.articles[randomArticleToPick[i]].author)
        $articleTitleForSpan.text(data.articles[randomArticleToPick[i]].title)
        $aLink.text("click here")
        // insert data into html elements / jquery
        $span.append($articleTitleForSpan, $authorForSpan, $aLink);
    // organizing my html or jquery 
        $div.append($span)
    }
    // organizing my html or jquery 
    $(".newsArticlesDiv").append($div)
}
// this is wordy code that isaac wrote.
// function render(result) {
//     var $div = $("<div>");
//     // created 3 spand for my main div
//     var $span1 = $("<span>")
//     var $span2 = $("<span>")
//     var $span3 = $("<span>")

//     //need to create a title for article and a author 
//     var $authorForSpan1 = $("<h4>")
//     var $authorForSpan2 = $("<h4>")
//     var $authorForSpan3 = $("<h4>")

//     var $articleTitleForSpan1 = $("<h2>")
//     var $articleTitleForSpan2 = $("<h2>")
//     var $articleTitleForSpan3 = $("<h2>")

//     // insert data into html elements / jquery
//     $authorForSpan1.text(result.articles[7].author)
//     $articleTitleForSpan1.text(result.articles[7].title)
//     $authorForSpan2.text(result.articles[5].author)
//     $articleTitleForSpan2.text(result.articles[5].title)
//     $authorForSpan3.text(result.articles[2].author)
//     $articleTitleForSpan3.text(result.articles[2].title)

//     // organizing my html or jquery 
//     $span1.append($articleTitleForSpan1, $authorForSpan1);
//     $span2.append($articleTitleForSpan2 ,$authorForSpan2);
//     $span3.append($articleTitleForSpan3 ,$authorForSpan3);

//     $div.append($span1,$span2, $span3);

//     $ ("body").append($div); 
 
// }
























// var config = {}
// var keyword = 'in';
// $(document).ready(function () {
//     var url = 'https://newsapi.org/v2/top-headlines?country=' + config.country + `apiKey=872d018bf0644aedbac0c6447302c0d3`;
//     function getData(url);
// });
// $('.country').on('change', function () {
//     config.country = $(this).val();
//     var url = 'https://newsapi.org/v2/top-headlines?country=' + config.country + `apiKey=872d018bf0644aedbac0c6447302c0d3`;
// });
// $('.submit').on('click', function() {
//     var keyword = $('.keywords').val();
//     var date = $('.date').val();
//     if (keyword.length < i) {
//         alert('Enter valid keyword to search, minimum 3 character');
//         return false;
//     }
//     if (!date) {
//         alert('Enter valid date to search');
//         return false;
//     }
//     var url = 'https://newsapi.org/v2/everything?q=' + keyword + '&from=' + date + 'apiKey=872d018bf0644aedbac0c6447302c0d3';
//     function preventDefault();
// });
// function getData(url) {
//     $.ajax({
//         url: url,
//         dataType: 'json',
//         success: function (result) {
//             $('.newslist').html('');
//             $.each(result.articles, function (index, element) {
//                 var date = ;
//                 var author =;
//             });
//         },

//     });
// }