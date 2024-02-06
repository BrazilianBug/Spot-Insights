export function List({ ms_played, master_metadata_track_name }) {
    return (
        <>
            <h1 className="text-white-main text-3xl font-geist">
                {master_metadata_track_name}
            </h1>
        </>
    )
}

// {"ms_played": 216520,
//     "ts": "2017-09-14T18:00:11Z",
//     "master_metadata_track_name": "Neighbor",
//     "master_metadata_album_artist_name": "J. Cole",
//     "master_metadata_album_album_name": "4 Your Eyez Only",
//     "episoe_name": null,
//     "episode_show_name": null,
//     "spotify_episode_uri": null,
//     "reason_start": "fwdbtn",
//     "reason_end": null,
//     "shuffle": true,
//     "skipped": null
// },
