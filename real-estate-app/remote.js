$.get("http://localhost:3635/", function (data) {
    console.log("cross domain ajax accepted");
    $("#widget").html(data);
});