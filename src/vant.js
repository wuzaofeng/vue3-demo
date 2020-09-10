import { Toast, Button, Calendar, Cell, CellGroup } from 'vant'

export function initVant (app) {
  return app
    .use(Toast)
    .use(Button)
    .use(Calendar)
    .use(Cell)
    .use(CellGroup)
}
