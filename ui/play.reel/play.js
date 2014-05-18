/**
 * @module ui/play.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Player = require("/model/player.js").Player;

/**
 * @class Play
 * @extends Component
 */
exports.Play = Component.specialize(/** @lends Play# */ {
    constructor: {
        value: function Play() {
            this.super();
            
            this.players = [];

            var lcPlayer1 = new Player();
            lcPlayer1.identifier = "player1";
            lcPlayer1.name = "# PLayer 1";
            this.players.push(lcPlayer1);

            var lcPlayer2 = new Player();
            lcPlayer2.identifier = "room2";
            lcPlayer2.name = "# Player 2";
            this.players.push(lcPlayer2);
        }
    },
    enterDocument: {
        value: function(){
            $(document).ready(function(){

                $('#getAuthKey').click(function (e){
                    BeatsService.getAccessToken();
                });

                init();
                createGame('Sasi');
                joinGame('Tan');
                joinGame('Ray');
                joinGame('Michel');
                startRound();


                $(".choice").click(function(e) {
                    console.log(e);
                    answer = $(e.target).attr("id");
                    answer = answer.split('-');
                    answer = answer[1];
                    console.log(answer);
                    submitAnswer('Sasi', answer);  	
                    $("#answer").text(answer);
                    endRound();
                    var winRef = new Firebase('https://mah.firebaseio.com/rounds/0/winners');
                    winRef.once('value', function(snapshot) { 
                        // if ( $.inArray(answer, snapshot.val()) ) {
                        $('.image-playing').attr("src", "assets/images/logo.png");
                        // }
                    });
                });
            });
        }       
    },
    players: {
        value: null
    },
    createPlayer: {
        value: function(){
            var players = {};
            players["ray"] = {
                "status" : "inactive",
                "score" : 0,
                "image": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/t1.0-1/c1.0.148.148/p148x148/10153124_10152034868947124_4493190993143905922_n.jpg"};
            players["sasi"] = {
                "status" : "inactive",
                "score" : 0,
                "image": "https://scontent-b-sjc.xx.fbcdn.net/hprofile-ash2/l/t1.0-1/c31.0.148.148/p148x148/10007032_10152266803177937_365546827_n.jpg"};
            players["tan"] = {
                "status" : "inactive",
                "score" : 0,
                "image": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn1/t1.0-1/c41.30.372.372/s148x148/76725_1665291162374_4704204_n.jpg"};
            players["michel"] = {
                "status" : "inactive",
                "score" : 0,
                "image": "https://scontent-a-sjc.xx.fbcdn.net/hphotos-frc3/t1.0-9/10372123_10152405557367937_7944549406127823943_n.jpg"};
            var playersRef = new Firebase('https://mah.firebaseio.com/players');
            playersRef.set(players);
        }
    }
});
