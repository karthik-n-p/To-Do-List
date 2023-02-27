export default class List {
  _id: string = '';
  title: string = '';

  constructor(data?: any) {
    if (data) {
      this._id = data._id || '';
      this.title = data.title || '';
    }
  }
}
