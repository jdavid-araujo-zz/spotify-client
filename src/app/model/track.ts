import { Artist } from "./artist";
import { TrackLink } from "./track-link";

export class Track {

    artists: Array<Artist>;

    available_markets: Array<string>;

    disc_number: number;

    duration_ms: number;

    explicit: boolean;

    external_urls: Map<string, string>;

    href: string;

    id: string;

    is_playable: boolean;

    linked_from: TrackLink;

    name: string;

    preview_url: string;

    track_number: number;

    type: string;

    uri: string;

    is_local: boolean;
}