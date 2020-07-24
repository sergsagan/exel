import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'header';
  toHTML() {
    return `
      <input type="text" class="header__input input" value="+ new table"/>
      <div class="header__buttons">
        <a href="#" class="button button--delete">
          <i class="material-icons">delete</i>
        </a>
        <a href="#" class="button button--exit">
          <i class="material-icons">exit_to_app</i>
        </a>
      </div>
    `;
  }
}
