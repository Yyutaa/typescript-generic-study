/*
 * @Author: yuta
 * @Date: 2021-04-01 16:57:32
 * @LastEditTime: 2021-04-02 12:00:21
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
function getTutureTutorialsInfo5<T>(info: Array<T>): Array<T> {
  // 泛型变量的类型可以写成具体的类型，如数组类型，这样是等同于T[]的
  console.log(info.length, info);
  return info;
}
// getTutureTutorialsInfo5<string>(["123", "456"]);

// 类泛型的定义及使用
// class Tuture<T> {
//   name: T[];
// }
// let tutorial = new Tuture<string>();
// tutorial.name = ["123"];
// console.log(tutorial.name);

// 接口泛型
interface Profile<T> {
  username: string;
  nickName: string;
  avatar: string;
  age: T;
}

type ProfileWithAge = Profile<string>;

// 类型别名泛型

type Profile2<T> = {
  username: string;
  nickName: string;
  avatar: string;
  age: T;
};

type ProfileWithAge2 = Profile2<string>;

// 类型约束 类型约束可以说是为了让我们写代码的时候编辑器可以自动补全参数，约束类型可以是简单的字面类型或者高级点的交叉类型和联合类型。
// Profile3可以是类型别名，同样也可以是接口，还可以是一个类
type Profile3<T> = {
  username: string;
  age: T;
};

type Tuture = {
  github: string,
  remote: string[],
}

// 或者
// type Profile3<T> {
//   username: string;
//   age: T;
// }

// 或者
// class Profile3<T> {
//   username: string;
//   age: T;
// }

function getTutureTutorialsInfo6<T, U extends Profile3<number> & Tuture>(
  info: T[],
  Profile: U
): T[] {
  console.log(Profile.age);
  console.log(Profile.username);
  console.log(Profile.remote)
  return info;
}

getTutureTutorialsInfo6(["123", "456"], {
  age: 12,
  username: "yang",
  github: '123',
  remote: ['sss']
});
