var url=`https://holidayapi.com/v1/holidays?pretty&key=289d464e-4f16-4454-b43d-02689d16ca76&country=US&year=2018`

$.ajax({
    url: url
})
.then(function(result){
    console.log(result)
})



/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>My Planner!</title>
    <link rel="stylesheet" href="./assets/css/lopez.css">
    <style type="text/css">
    #vt-line {
        width: 1;
        height: 500;
        background-color: blue;
    }
    </style>
</head>

<body>

    <div class="container-fluid">
        <div class="my-planner">
            <h1>My Planner!</h1>
        </div>
    </div>
    </div>

    <div class="container">
            <div class="row">
              <div class="col">
                <h4>Quote of the Day</h4>
              </div>
              <div id="vt-line"></div>
              <div class="col">
                <h4>Weather Report</h4>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col">
                <h4>To-Do</h4>
              </div>
              <div class="col">
                <h4>Daily News</h4>
              </div>
              <div class="col">
                <h4>My Calender</h4>
              </div>
            </div>
          </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script src="./assets/js/lopez.js"></script>

</body>

</html>
*/