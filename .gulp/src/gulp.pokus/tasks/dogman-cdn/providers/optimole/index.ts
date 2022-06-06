
export interface DogmanOptimoleCdnPresets {
  name: string;
  unsigned: boolean;
  categorization: string;
  auto_tagging: number;
  background_removal: string;
  folder: string
}


export const dogmanDefaultOptimolePresets: DogmanOptimoleCdnPresets = {
    name: "my_preset",
    unsigned: true,
    categorization: "google_tagging,google_video_tagging",
    auto_tagging: 0.75,
    background_removal: "cloudinary_ai",
    folder: "new-products"
};

/**
 * Use this Class to upload images
 **/
export class DogmanOptimoleCdnProvider {
  cdn_name: string;

  constructor(message: string) {
    this.cdn_name = message;
  }

  whoami() {
    return `I am the ${this.cdn_name} CDN`;
  }

  /**
   *
   **/
  upload(src_image_file_path: string) {

  }
}
