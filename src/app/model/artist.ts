import { Image } from "./image";
import { Followers } from "./followers";

export class Artist {

    external_urls: Map<string, string>;
    
    followers: Followers;

    genres: Array<string>;

    href: string;

    id: string;

    images: Array<Image>; 

    name: string;

    popularity: number;

    type: string;

    uri: string;    

}