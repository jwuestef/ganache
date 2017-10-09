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
      content_css : 'https://fonts.googleapis.com/css?family=PT+Serif:400,https://fonts.googleapis.com/css?family=PT+Serif:400i,https://fonts.googleapis.com/css?family=PT+Serif:700,https://fonts.googleapis.com/css?family=PT+Serif:700i',
      font_formats: 'PT Serif=PT Serif,serif;Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats',
      fontsize_formats: '6pt 8pt 10pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 26pt 28pt 30pt 32pt 34pt 36pt 38pt 40pt 42pt 44pt 46pt 48pt',
      plugins: ['link lists preview textcolor image media paste colorpicker table'],
      skin_url: 'assets/skins/lightgray',
      style_formats_merge: true,
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



