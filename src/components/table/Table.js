import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'table';
  toHTML() {
    return `
    <div class="table__row">
        <div class="table__row-info"></div>
        <div class="table__row-data">
            <div class="column">A</div>
            <div class="column">B</div>
            <div class="column">C</div>
            <div class="column">D</div>
            <div class="column">E</div>
        </div>
    </div>
    <div class="table__row">
        <div class="table__row-info">1</div>
        <div class="table__row-data">
            <div class="cell cell--selected" contenteditable="true">A1</div>
            <div class="cell" contenteditable="true">B1</div>
            <div class="cell" contenteditable="true">C1</div>
            <div class="cell" contenteditable="true">D1</div>
            <div class="cell" contenteditable="true">E1</div>
        </div>
    </div>
    <div class="table__row">
        <div class="table__row-info">2</div>
        <div class="table__row-data">
            <div class="cell" contenteditable="true">A2</div>
            <div class="cell" contenteditable="true">B2</div>
            <div class="cell" contenteditable="true">C2</div>
            <div class="cell" contenteditable="true">D2</div>
            <div class="cell" contenteditable="true">E2</div>
        </div>
    </div>
    <div class="table__row">
        <div class="table__row-info">3</div>
        <div class="table__row-data">
            <div class="cell" contenteditable="true">A3</div>
            <div class="cell" contenteditable="true">B3</div>
            <div class="cell" contenteditable="true">C3</div>
            <div class="cell" contenteditable="true">D3</div>
            <div class="cell" contenteditable="true">E3</div>
        </div>
    </div>
    <div class="table__row">
        <div class="table__row-info">4</div>
        <div class="table__row-data">
            <div class="cell" contenteditable="true">A4</div>
            <div class="cell" contenteditable="true">B4</div>
            <div class="cell" contenteditable="true">C4</div>
            <div class="cell" contenteditable="true">D4</div>
            <div class="cell" contenteditable="true">E4</div>
        </div>
    </div>
    `;
  }
}
