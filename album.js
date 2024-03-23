"use strict";
//Question # 40
function make_album(artist, title) {
    const album = {
        artist: artist,
        title: title
    };
    console.log(album);
}
make_album("BTS", "Love Yourself");
make_album("BTS", "Map of Soul");
make_album("BTS", "BE");
///NOW SOME CHANGES
function make_other_album(artist, title, trackNumber) {
    const album1 = {
        artist: artist,
        title: title
    };
    if (trackNumber !== undefined) {
        album1.trackNumber = trackNumber;
    }
    console.log(album1);
}
make_other_album("BTS", "Love Yourself");
make_other_album("BTS", "Map of Soul", 77);
make_other_album("BTS", "BE", 4);
