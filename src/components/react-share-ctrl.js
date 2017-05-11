import ReactShare2 from 'components/react-share-2';

let instance;

export default class ReactShareCtrl {
  static createInstance(inProps) {
    instance = instance || ReactShare2.newInstance(inProps);
    return instance;
  }

  static show(inOptions, inCallback) {
    console.log(instance);
    instance.component.show(inOptions, inCallback);
  }

  static hide(inCallback) {
    instance.component.hide(inCallback);
  }

  static destory() {
    instance.destory();
    instance = null;
  }
}
