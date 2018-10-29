import { Artist } from "./artist";
import { Copyright } from "./copyright";
import { Image } from "./image";
import { Track } from "./track";
import { PagingObject } from "./paging-object";

export class Album {

    album_type: string;

    artists: Array<Artist>;

    available_markets: Array<string>;

    copyrights: Array<Copyright>;

    external_ids: Map<string, string>;

    external_urls: Map<string, string>;

    genres: Array<string>;

    href: string;

    id: string;

    images: Array<Image>;

    label: string;

    name: string;

    popularity: number;

    release_date: string;

    release_date_precision: string;

    tracks: Array<PagingObject<Track>>;

    type: string;

    uri: string;
}