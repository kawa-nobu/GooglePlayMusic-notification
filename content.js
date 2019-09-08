setInterval(appl, 100);
function appl() {

if (document.getElementsByClassName('player-album')[0].innerText ==! "") {
var test = true;
}else{
var ap_title = document.getElementById("currently-playing-title").textContent;
var ap_artist = document.getElementById("player-artist").textContent;
var ap_al = document.getElementsByClassName('player-album')[0].innerText;
var artw = document.getElementById("playerBarArt").src;
var ar_rep = artw.replace('s90-c-e100', 's500-c-e100');
		if ('mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: ap_title,
				artist: ap_artist+"-"+ap_al,
				album: "Test",
				artwork: [{ src: ar_rep,  sizes: '500x500',   type: 'image/jpeg' }]
			});
			navigator.mediaSession.setActionHandler('play', function() {document.getElementById("player-bar-play-pause").click();});
			navigator.mediaSession.setActionHandler('pause', function() {document.getElementById("player-bar-play-pause").click();});
			navigator.mediaSession.setActionHandler('previoustrack', function() {document.getElementById("player-bar-rewind").click();});
			navigator.mediaSession.setActionHandler('nexttrack', function() {document.getElementById("player-bar-forward").click();});
		}
	}
}

