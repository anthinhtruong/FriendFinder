var friendsData = require("../data/friends.js");


function apiRoutes(app){

    app.get("/api/friends",function(req,res){
        return res.json(friendsData);
    });

    app.post("/api/friends", function(req,res){
        var newfriend = req.body;

        var newfriendName = newfriend.name;
        var newfriendPhoto = newfriend.photo;
        var newfriendScore = newfriend.score;

        var difference = 0;

        for (var i = 0 ; i < friendsData.length; i++){
            console.log(friendsData[i].name);

            var friendScore = friendsData[i].score;

            for (var i = 0 ; i < friendScore.length; i++){
                if (friendScore[i] !== newfriendScore){
                    difference += Math.abs(parseInt(friendScore[i])) - Math.abs(parseInt(newfriendScore))
                    
                }    
        }
        



        friendsData.push(newfriend);
        res.json(newfriend);
    });



}
module.exports = apiRoutes;