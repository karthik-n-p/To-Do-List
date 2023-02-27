export default class Task {
  title: string = '';
  completed: boolean = false;
  _listId: string = '';
  _id: string = '';

  constructor(data?: any) {
    if (data) {
      this.title = data.title || '';
      this.completed = data.completed || false;
      this._listId = data._listId || '';
      this._id = data._id || '';
    }
  }
}
