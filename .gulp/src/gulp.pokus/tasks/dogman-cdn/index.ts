//
// import { DogmanOptimoleCdn as dogmanOptimoleCdn } from './providers/optimole';
import { DogmanOptimoleCdnProvider } from './providers/optimole';
import { DogmanCloudinaryCdnProvider } from './providers/cloudinary';



export interface DogmanWorker {
  /**
   * Load configuration from the dogman yaml configuration file ( './.dogmanrc.yaml' by default)
   *
   * The Dogman reads its configuration from the './.dogmanrc.yaml' configuration file by default (if the <code>${DOGMAN_CONF}</code> environment variable is not set )
   * The DOGMAN_CONF environement variable sets the path to the dogman yaml configuration file.
   *
   **/
   loadConfig(): any;
   /**
    * Checks that all providers are installed as npm packages
    **/
   checkProviders(): void;
   /**
    * Runs all the tasks this Dogman Worker has to complete
    **/
   run(): void;

}


export interface DogmanProviderOptions {
  options: string[ ];
}

export interface DogmanCDNAssetConfig {
  file_src_path: string;
  providerOptions: DogmanProviderOptions;
}

export const littleRed: DogmanCDNAssetConfig = { // just an example instance to show what an nstance looks like
  file_src_path: "./static/images/products/tshirt_bleu_breadcrumded_no1.png",
  providerOptions: {
    options: [ "firstday" ]
  }
}



export interface DogmanCdnWorkerConfig {
  providers: string[];
  assets: DogmanCDNAssetConfig[];
}


/**
 * The Dogman reads its configuration from the ./.dogmanrc.yaml configuration file by default (if the <code>${DOGMAN_CONF}</code> environment variable is not set )
 * The DOGMAN_CONF environement variable sets the path to the dogman yaml configuration file.
 *
 *
 *
 **/
export class DogmanCdnWorker implements DogmanWorker {
  readonly dogmanConfig: DogmanCdnWorkerConfig;

  constructor() {
    this.dogmanConfig = this.loadConfig();
  }

  /**
   * load configuration from ./.dogmanrc.yaml
   **/
   run(): void {
     // Here i do :

     // 1./
   }
  /**
   * load configuration from ./.dogmanrc.yaml
   **/
   loadConfig(): DogmanCdnWorkerConfig {
     let dogmanConfigFilePath: string = process.env.DOGMAN_CONF || `./.dogmanrc.yaml`;

     let exampleAssetConfig1: DogmanCDNAssetConfig = {
       file_src_path: "./static/images/products/tshirt_bleu_breadcrumded_no1.png",
       providerOptions: {
         options: [ "firstday" ]
       }
     }
     let exampleAssetConfig2: DogmanCDNAssetConfig = {
       file_src_path: "./static/images/products/tshirt_jaune_bargain_no2.png",
       providerOptions: {
         options: [ "8K" ]
       }
     }

     let exampleConfig: DogmanCdnWorkerConfig = {
       providers: [
         "optimole",
         "cloudinary"
       ],
       assets: [
         exampleAssetConfig1,
         exampleAssetConfig2
       ]
     }

     let returnedConfig: DogmanCdnWorkerConfig = exampleConfig;
     return returnedConfig;
   }
  /**
   *
   **/
  upload(src_image_file_path: string) {
    let fileConfig: any = this.findConfig(src_image_file_path);
  }

  findConfig(src_image_file_path: string): any {
    // Here i look up the configuration file to get all informations like which CDN is chosen, and other providerOptions, like Optimole presets to use for that asset
    return {}
  }



}



/*

export class DogmanCDN {
  cdn_name: string;

  constructor(message: string) {
    this.cdn_name = message;
  }

  greet() {
    return "Hello, " + this.cdn_name;
  }
}

*/
