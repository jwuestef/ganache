export class Image {
  $key: string;
  file: File;
  name: string;
  description: string;
  url: string;
  progress: number;
  constructor(file: File) {
    this.file = file;
  }
}
