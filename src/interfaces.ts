export interface IValidate {
  (args: Object): Object;
};


export interface IAction {
  (args: Object): Object;
};


/**
 * Represents a single command definition.
 */
export interface ICommand {
  name: string;
  description?: string;
  args?: Object;
  validate?: Function;
  action: Function;
};