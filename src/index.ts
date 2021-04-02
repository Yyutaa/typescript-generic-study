/*
 * @Author: yuta
 * @Date: 2021-04-01 16:57:32
 * @LastEditTime: 2021-04-02 11:03:39
 * @LastEditors: yuta
 */
// 泛型函数的定义以及使用

// 泛型的类型函数使用
function getTutureTutorialsInfo<T>(user: T[]): T[] {
  console.log(user);
  console.log(user.length);
  return user;
}

// 泛型的多个类型变量
function getTutureTutorialsInfo2<T, U>(user: T[], profile: U): T[] {
  console.log(user, profile);
  return user;
}

// 泛型的匿名函数使用
const getTutureTutorialsInfo3: <T>(info: T[]) => T[] = (info) => {
  console.log(info, info.length);
  return info;
};

// 或者
// const getTutureTutorialsInfo4: <T>(info: T[]) => T[] = function (info) {
//   console.log(info);
// };

// 泛型默认类型的参数
function getTutureTutorialsInfo4<T, U = number>(info: T[], age: U): T[] {
  console.log(info, age);
  return info;
}

// 泛型数组使用
function getTutureTutorialsInfo5<T>(info: Array<T>): Array<T> { // 泛型变量的类型可以写成具体的类型，如数组类型，这样是等同于T[]的
  console.log(info.length, info);
  return info;
}
// getTutureTutorialsInfo5<string>(["123", "456"]);

// 类泛型的定义及使用

//
