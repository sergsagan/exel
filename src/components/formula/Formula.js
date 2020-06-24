import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  toHTML() {
    return `
    <div class="formula__info">fx</div>
    <div class="formula__input" contenteditable="true" spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('Formula: onInput', event)
  }
}
