import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'texteditor',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class TexteditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      branding: false,
      menubar: false,
      resize: 'both',
      browser_spellcheck: true,
      elementpath: false,
      relative_urls: false,
      paste_data_images: false,
      toolbar: [
        'undo redo | cut copy paste | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | indent outdent',
        'fontselect fontsizeselect textcolor forecolor colorpicker | subscript superscript | bullist numlist table link image media preview'
      ],
      plugins: ['link lists preview textcolor image media paste colorpicker table'],
      skin_url: 'assets/skins/lightgray',
      theme: 'modern',
      textcolor_map: [
        '000000', 'Black',
        '993300', 'Burnt orange',
        '333300', 'Dark olive',
        '003300', 'Dark green',
        '003366', 'Dark azure',
        '000080', 'Navy Blue',
        '333399', 'Indigo',
        '333333', 'Very dark gray',
        '800000', 'Maroon',
        'FF6600', 'Orange',
        '808000', 'Olive',
        '008000', 'Green',
        '008080', 'Teal',
        '0000FF', 'Blue',
        '666699', 'Grayish blue',
        '808080', 'Gray',
        'FF0000', 'Red',
        'FF9900', 'Amber',
        '99CC00', 'Yellow green',
        '339966', 'Sea green',
        '33CCCC', 'Turquoise',
        '3366FF', 'Royal blue',
        '800080', 'Purple',
        '999999', 'Medium gray',
        'FF00FF', 'Magenta',
        'FFCC00', 'Gold',
        'FFFF00', 'Yellow',
        '00FF00', 'Lime',
        '00FFFF', 'Aqua',
        '00CCFF', 'Sky blue',
        '993366', 'Red violet',
        'FFFFFF', 'White',
        'FF99CC', 'Pink',
        'FFCC99', 'Peach',
        'FFFF99', 'Light yellow',
        'CCFFCC', 'Pale green',
        'CCFFFF', 'Pale cyan',
        '99CCFF', 'Light sky blue',
        'CC99FF', 'Plum'
      ],
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
