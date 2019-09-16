var url = `https://newsapi.org/v2/everything?q=local+news&from=2019-08-16&sortBy=publishedAt&apiKey=aa56ced490074f299c845bd060c233f9`
$.ajax({
    url: url
})
.then(function(result){
    console.log(result)
})