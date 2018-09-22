import React, { Component } from 'react';

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQC41a3U7SlSyuCtkHYpexN_trP6I36ph38uNb3tuzk_ijYiokEgjG0u7i3jHRgWz5p9AU9bMmVBcEBoXoICNWV7yzI9f3rbrIYHQZ9emPJxnWOBkKgdOJ5ko_xGWOPE1WI0gR9NXtrWthkl20GdIBwhcAIAEjYB6lQT0Xyz5Z_LJp-VWeBKz_9yK3d6';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
    });
    
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
    
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
    
    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });
    
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });
    
    // Connect to the player!
    player.connect();
};

export default class MusicPlayer extends Component {
    render () {
        return(   
           window.onSpotifyWebPlaybackSDKReady()
        );
    }
}