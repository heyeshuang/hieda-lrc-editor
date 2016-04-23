export const CHANGE_FILE="CHANGE_FILE";
export const CHANGE_ROW="CHANGE_ROW";
export const MODIFY_CELL="MODIFY_CELL";

export function changeFile(fileURL) {
  return {
    type: CHANGE_FILE,
    fileURL
  }
}
export function changeRow(index) {
  return {type: CHANGE_ROW, index};
}
export function modifyCell(rowIndex,cellIndex,text) {
  return {
    type: MODIFY_CELL,
    rowIndex,
    cellIndex,
    text
  }
}
