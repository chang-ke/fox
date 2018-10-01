export function omit(target: Object, fields: Array<string>): Object {
  const shallowCopy: any = {...target};
  fields.forEach(key => {
    delete shallowCopy[key];
  });
  return shallowCopy;
}

export function contain(target: Object | any, fields: Array<string>): Object {
  const obj: any = {};
  fields.forEach(key => {
    obj[key] = target[key];
  });
  return obj;
}
