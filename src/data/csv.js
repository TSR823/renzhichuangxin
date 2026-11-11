/**
 * 极简 CSV 解析器（支持 BOM、CRLF、引号内的换行与转义引号）。
 * 赛题数据中的“解答过程”“选项”等字段包含多行文本，不能用 split(',')。
 */
export function parseCsv(text) {
  const source = text.replace(/^\uFEFF/, '');
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (quoted) {
      if (char === '"') {
        if (source[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      field = '';
      rows.push(row);
      row = [];
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const header = rows.shift().map((item) => item.trim());
  return rows
    .filter((cells) => cells.some((cell) => cell !== ''))
    .map((cells) =>
      Object.fromEntries(header.map((key, index) => [key, (cells[index] ?? '').trim()]))
    );
}
