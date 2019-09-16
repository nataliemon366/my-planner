var url=`https://holidayapi.com/v1/holidays?pretty&key=289d464e-4f16-4454-b43d-02689d16ca76&country=US&year=2018`

$.ajax({
    url: url
})
.then(function(result){
    console.log(result)
})