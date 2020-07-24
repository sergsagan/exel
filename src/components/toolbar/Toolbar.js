import {ExcelComponent} from '@core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  static className = 'toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
    <a href="#" class="button">
      <i class="material-icons">format_size</i>
    </a>
    <a href="#" class="button">
      <i class="material-icons">format_bold</i>
    </a>
    <a href="#" class="button">
      <i class="material-icons">format_italic</i>
    </a>
    <a href="#" class="button">
      <i class="material-icons">format_underlined</i>
    </a>
    <a href="#" class="button">
      <i class="material-icons">format_align_left</i>
    </a>
    <a href="#" class="button">
      <i class="material-icons">format_align_center</i>
    </a>
    <a href="#" class="button">
      <i class="material-icons">format_align_right</i>
    </a>`;
  }

  onClick(event) {
    console.log(event.target)
  }
}
