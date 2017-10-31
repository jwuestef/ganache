export class GridImage {
  $key: string;
  file: File;
  title: string;
  description: string;
  url: string;
  link: string;
  progress: number;
  constructor(file: File) {
    this.file = file;
  }
}
