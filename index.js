var sec = ["arts", "automobiles", "books", "business", "fashion", "food", "health",
    "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion",
    "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater",
    "t-magazine", "travel", "upshot", "us", "world"
];
async function func() {
    var catog = document.getElementById("inputGroupSelect02").value;
    console.log(catog);
    var response = await fetch("https://api.nytimes.com/svc/topstories/v2/" + sec[catog] + ".json?api-key=Fa1VrfxOoOo5DU3UuNQG8B2Yjt0yvgt6");
    console.log(response);
    var data = await response.json();
    console.log(data);
    document.getElementById("row").innerHTML = "";
    for (let i in data.results) {
        var mydate = new Date(data.results[i]["created_date"]);
        var mon = "";
        var cdate = mydate.getDate();
        switch (mydate.getMonth()) {
            case 0:
                mon = "JAN";
                break;
            case 1:
                mon = "FEB";
                break;
            case 2:
                mon = "MAR";
                break;
            case 3:
                mon = "APR";
                break;
            case 4:
                mon = "MAY";
                break;
            case 5:
                mon = "JUN";
                break;
            case 6:
                mon = "JUL";
                break;
            case 7:
                mon = "AUG";
                break;
            case 8:
                mon = "SEP";
                break;
            case 9:
                mon = "OCT";
                break;
            case 10:
                mon = "NOV";
                break;
            case 11:
                mon = "DEC";
                break;
        }
        var udate = mon + " " + cdate;
        document.getElementById("row").innerHTML += `
        <div class="col-lg-12 ">
        <div class="card mb-3 shadow p-3 mb-5 bg-dark rounded text-white" >
        <div class="row no-gutters">
          
          <div class="col-lg-8 ">
            <div class="card-body ">
            <p class="text-primary text-capitalize font-weight-bold">` + data.results[i]["section"] + `</p>
              <h5 class="card-title font-weight-bolder">` + data.results[i]["title"] + `</h5>
              <p class="card-text"><small class="text-muted">` + data.results[i]["byline"] + `</small></p>
              <p class="card-text"><small class="text-muted">` + udate + `</small></p>
              <p class="card-text">` + data.results[i]["abstract"] + `</p>
              <a href=` + data.results[i]["short_url"] + ` class="text-decoration-none" target="_blank">Continue reading...</a>
              
            </div>
          </div>
          <div class="col-lg-4 ">
            <img src="` + data.results[i]["multimedia"][4]["url"] + `" class="card-img " alt="..."  style="height:50vh;"/>
          </div>
        </div>
      </div>
      </div>`;
    }
}

function initial() {

    for (let i in sec) {
        document.getElementById("inputGroupSelect02").innerHTML += " <option value=" + i + " class='text-capitalize '>" + sec[i] + "</option>"
    }
}
initial();