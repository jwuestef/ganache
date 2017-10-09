export class Image {
  $key: string;
  file: File;
  description: string;
  url: string;
  link: string;
  progress: number;
  name: string;   // Name can be removed after other pages are updated
  constructor(file: File) {
    this.file = file;
  }

}
