type AnyObject = Record<string, unknown>;

function camelToSnake(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

function snakeToCamel(str: string): string {
  return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
}

function processKeys(
  obj: unknown,
  converter: (str: string) => string,
): unknown {
  if (Array.isArray(obj)) {
    return obj.map((item) => processKeys(item, converter));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj: AnyObject = {};
    for (const key in obj as AnyObject) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = converter(key);
        newObj[newKey] = processKeys((obj as AnyObject)[key], converter);
      }
    }
    return newObj;
  }
  return obj;
}

export function convertKeysToCamelCase<TData, TParsedData>(
  obj: TData,
): TParsedData {
  return processKeys(obj, snakeToCamel) as TParsedData;
}

export function convertKeysToSnakeCase<TData, TParsedData>(
  obj: TData,
): TParsedData {
  return processKeys(obj, camelToSnake) as TParsedData;
}
