
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model cources
 * 
 */
export type cources = $Result.DefaultSelection<Prisma.$courcesPayload>
/**
 * Model regesteration
 * 
 */
export type regesteration = $Result.DefaultSelection<Prisma.$regesterationPayload>
/**
 * Model classess
 * 
 */
export type classess = $Result.DefaultSelection<Prisma.$classessPayload>
/**
 * Model Preclassess
 * 
 */
export type Preclassess = $Result.DefaultSelection<Prisma.$PreclassessPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cources`: Exposes CRUD operations for the **cources** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cources
    * const cources = await prisma.cources.findMany()
    * ```
    */
  get cources(): Prisma.courcesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regesteration`: Exposes CRUD operations for the **regesteration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regesterations
    * const regesterations = await prisma.regesteration.findMany()
    * ```
    */
  get regesteration(): Prisma.regesterationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classess`: Exposes CRUD operations for the **classess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classesses
    * const classesses = await prisma.classess.findMany()
    * ```
    */
  get classess(): Prisma.classessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preclassess`: Exposes CRUD operations for the **Preclassess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preclassesses
    * const preclassesses = await prisma.preclassess.findMany()
    * ```
    */
  get preclassess(): Prisma.PreclassessDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    cources: 'cources',
    regesteration: 'regesteration',
    classess: 'classess',
    Preclassess: 'Preclassess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "cources" | "regesteration" | "classess" | "preclassess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      cources: {
        payload: Prisma.$courcesPayload<ExtArgs>
        fields: Prisma.courcesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courcesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courcesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>
          }
          findFirst: {
            args: Prisma.courcesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courcesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>
          }
          findMany: {
            args: Prisma.courcesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>[]
          }
          create: {
            args: Prisma.courcesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>
          }
          createMany: {
            args: Prisma.courcesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courcesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>[]
          }
          delete: {
            args: Prisma.courcesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>
          }
          update: {
            args: Prisma.courcesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>
          }
          deleteMany: {
            args: Prisma.courcesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courcesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courcesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>[]
          }
          upsert: {
            args: Prisma.courcesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$courcesPayload>
          }
          aggregate: {
            args: Prisma.CourcesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCources>
          }
          groupBy: {
            args: Prisma.courcesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourcesGroupByOutputType>[]
          }
          count: {
            args: Prisma.courcesCountArgs<ExtArgs>
            result: $Utils.Optional<CourcesCountAggregateOutputType> | number
          }
        }
      }
      regesteration: {
        payload: Prisma.$regesterationPayload<ExtArgs>
        fields: Prisma.regesterationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regesterationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regesterationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>
          }
          findFirst: {
            args: Prisma.regesterationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regesterationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>
          }
          findMany: {
            args: Prisma.regesterationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>[]
          }
          create: {
            args: Prisma.regesterationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>
          }
          createMany: {
            args: Prisma.regesterationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.regesterationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>[]
          }
          delete: {
            args: Prisma.regesterationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>
          }
          update: {
            args: Prisma.regesterationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>
          }
          deleteMany: {
            args: Prisma.regesterationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regesterationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.regesterationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>[]
          }
          upsert: {
            args: Prisma.regesterationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regesterationPayload>
          }
          aggregate: {
            args: Prisma.RegesterationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegesteration>
          }
          groupBy: {
            args: Prisma.regesterationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegesterationGroupByOutputType>[]
          }
          count: {
            args: Prisma.regesterationCountArgs<ExtArgs>
            result: $Utils.Optional<RegesterationCountAggregateOutputType> | number
          }
        }
      }
      classess: {
        payload: Prisma.$classessPayload<ExtArgs>
        fields: Prisma.classessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.classessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.classessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>
          }
          findFirst: {
            args: Prisma.classessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.classessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>
          }
          findMany: {
            args: Prisma.classessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>[]
          }
          create: {
            args: Prisma.classessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>
          }
          createMany: {
            args: Prisma.classessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.classessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>[]
          }
          delete: {
            args: Prisma.classessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>
          }
          update: {
            args: Prisma.classessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>
          }
          deleteMany: {
            args: Prisma.classessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.classessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.classessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>[]
          }
          upsert: {
            args: Prisma.classessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$classessPayload>
          }
          aggregate: {
            args: Prisma.ClassessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassess>
          }
          groupBy: {
            args: Prisma.classessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassessGroupByOutputType>[]
          }
          count: {
            args: Prisma.classessCountArgs<ExtArgs>
            result: $Utils.Optional<ClassessCountAggregateOutputType> | number
          }
        }
      }
      Preclassess: {
        payload: Prisma.$PreclassessPayload<ExtArgs>
        fields: Prisma.PreclassessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreclassessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreclassessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>
          }
          findFirst: {
            args: Prisma.PreclassessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreclassessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>
          }
          findMany: {
            args: Prisma.PreclassessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>[]
          }
          create: {
            args: Prisma.PreclassessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>
          }
          createMany: {
            args: Prisma.PreclassessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreclassessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>[]
          }
          delete: {
            args: Prisma.PreclassessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>
          }
          update: {
            args: Prisma.PreclassessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>
          }
          deleteMany: {
            args: Prisma.PreclassessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreclassessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreclassessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>[]
          }
          upsert: {
            args: Prisma.PreclassessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreclassessPayload>
          }
          aggregate: {
            args: Prisma.PreclassessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreclassess>
          }
          groupBy: {
            args: Prisma.PreclassessGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreclassessGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreclassessCountArgs<ExtArgs>
            result: $Utils.Optional<PreclassessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    cources?: courcesOmit
    regesteration?: regesterationOmit
    classess?: classessOmit
    preclassess?: PreclassessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model cources
   */

  export type AggregateCources = {
    _count: CourcesCountAggregateOutputType | null
    _avg: CourcesAvgAggregateOutputType | null
    _sum: CourcesSumAggregateOutputType | null
    _min: CourcesMinAggregateOutputType | null
    _max: CourcesMaxAggregateOutputType | null
  }

  export type CourcesAvgAggregateOutputType = {
    id: number | null
  }

  export type CourcesSumAggregateOutputType = {
    id: number | null
  }

  export type CourcesMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    prerequisite: string | null
  }

  export type CourcesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    prerequisite: string | null
  }

  export type CourcesCountAggregateOutputType = {
    id: number
    name: number
    category: number
    prerequisite: number
    _all: number
  }


  export type CourcesAvgAggregateInputType = {
    id?: true
  }

  export type CourcesSumAggregateInputType = {
    id?: true
  }

  export type CourcesMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    prerequisite?: true
  }

  export type CourcesMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    prerequisite?: true
  }

  export type CourcesCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    prerequisite?: true
    _all?: true
  }

  export type CourcesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cources to aggregate.
     */
    where?: courcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cources to fetch.
     */
    orderBy?: courcesOrderByWithRelationInput | courcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cources
    **/
    _count?: true | CourcesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourcesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourcesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourcesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourcesMaxAggregateInputType
  }

  export type GetCourcesAggregateType<T extends CourcesAggregateArgs> = {
        [P in keyof T & keyof AggregateCources]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCources[P]>
      : GetScalarType<T[P], AggregateCources[P]>
  }




  export type courcesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courcesWhereInput
    orderBy?: courcesOrderByWithAggregationInput | courcesOrderByWithAggregationInput[]
    by: CourcesScalarFieldEnum[] | CourcesScalarFieldEnum
    having?: courcesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourcesCountAggregateInputType | true
    _avg?: CourcesAvgAggregateInputType
    _sum?: CourcesSumAggregateInputType
    _min?: CourcesMinAggregateInputType
    _max?: CourcesMaxAggregateInputType
  }

  export type CourcesGroupByOutputType = {
    id: number
    name: string
    category: string
    prerequisite: string
    _count: CourcesCountAggregateOutputType | null
    _avg: CourcesAvgAggregateOutputType | null
    _sum: CourcesSumAggregateOutputType | null
    _min: CourcesMinAggregateOutputType | null
    _max: CourcesMaxAggregateOutputType | null
  }

  type GetCourcesGroupByPayload<T extends courcesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourcesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourcesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourcesGroupByOutputType[P]>
            : GetScalarType<T[P], CourcesGroupByOutputType[P]>
        }
      >
    >


  export type courcesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    prerequisite?: boolean
  }, ExtArgs["result"]["cources"]>

  export type courcesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    prerequisite?: boolean
  }, ExtArgs["result"]["cources"]>

  export type courcesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    prerequisite?: boolean
  }, ExtArgs["result"]["cources"]>

  export type courcesSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    prerequisite?: boolean
  }

  export type courcesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "prerequisite", ExtArgs["result"]["cources"]>

  export type $courcesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cources"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string
      prerequisite: string
    }, ExtArgs["result"]["cources"]>
    composites: {}
  }

  type courcesGetPayload<S extends boolean | null | undefined | courcesDefaultArgs> = $Result.GetResult<Prisma.$courcesPayload, S>

  type courcesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courcesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourcesCountAggregateInputType | true
    }

  export interface courcesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cources'], meta: { name: 'cources' } }
    /**
     * Find zero or one Cources that matches the filter.
     * @param {courcesFindUniqueArgs} args - Arguments to find a Cources
     * @example
     * // Get one Cources
     * const cources = await prisma.cources.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courcesFindUniqueArgs>(args: SelectSubset<T, courcesFindUniqueArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cources that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courcesFindUniqueOrThrowArgs} args - Arguments to find a Cources
     * @example
     * // Get one Cources
     * const cources = await prisma.cources.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courcesFindUniqueOrThrowArgs>(args: SelectSubset<T, courcesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courcesFindFirstArgs} args - Arguments to find a Cources
     * @example
     * // Get one Cources
     * const cources = await prisma.cources.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courcesFindFirstArgs>(args?: SelectSubset<T, courcesFindFirstArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cources that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courcesFindFirstOrThrowArgs} args - Arguments to find a Cources
     * @example
     * // Get one Cources
     * const cources = await prisma.cources.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courcesFindFirstOrThrowArgs>(args?: SelectSubset<T, courcesFindFirstOrThrowArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courcesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cources
     * const cources = await prisma.cources.findMany()
     * 
     * // Get first 10 Cources
     * const cources = await prisma.cources.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courcesWithIdOnly = await prisma.cources.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courcesFindManyArgs>(args?: SelectSubset<T, courcesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cources.
     * @param {courcesCreateArgs} args - Arguments to create a Cources.
     * @example
     * // Create one Cources
     * const Cources = await prisma.cources.create({
     *   data: {
     *     // ... data to create a Cources
     *   }
     * })
     * 
     */
    create<T extends courcesCreateArgs>(args: SelectSubset<T, courcesCreateArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cources.
     * @param {courcesCreateManyArgs} args - Arguments to create many Cources.
     * @example
     * // Create many Cources
     * const cources = await prisma.cources.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courcesCreateManyArgs>(args?: SelectSubset<T, courcesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cources and returns the data saved in the database.
     * @param {courcesCreateManyAndReturnArgs} args - Arguments to create many Cources.
     * @example
     * // Create many Cources
     * const cources = await prisma.cources.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cources and only return the `id`
     * const courcesWithIdOnly = await prisma.cources.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courcesCreateManyAndReturnArgs>(args?: SelectSubset<T, courcesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cources.
     * @param {courcesDeleteArgs} args - Arguments to delete one Cources.
     * @example
     * // Delete one Cources
     * const Cources = await prisma.cources.delete({
     *   where: {
     *     // ... filter to delete one Cources
     *   }
     * })
     * 
     */
    delete<T extends courcesDeleteArgs>(args: SelectSubset<T, courcesDeleteArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cources.
     * @param {courcesUpdateArgs} args - Arguments to update one Cources.
     * @example
     * // Update one Cources
     * const cources = await prisma.cources.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courcesUpdateArgs>(args: SelectSubset<T, courcesUpdateArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cources.
     * @param {courcesDeleteManyArgs} args - Arguments to filter Cources to delete.
     * @example
     * // Delete a few Cources
     * const { count } = await prisma.cources.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courcesDeleteManyArgs>(args?: SelectSubset<T, courcesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courcesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cources
     * const cources = await prisma.cources.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courcesUpdateManyArgs>(args: SelectSubset<T, courcesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cources and returns the data updated in the database.
     * @param {courcesUpdateManyAndReturnArgs} args - Arguments to update many Cources.
     * @example
     * // Update many Cources
     * const cources = await prisma.cources.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cources and only return the `id`
     * const courcesWithIdOnly = await prisma.cources.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends courcesUpdateManyAndReturnArgs>(args: SelectSubset<T, courcesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cources.
     * @param {courcesUpsertArgs} args - Arguments to update or create a Cources.
     * @example
     * // Update or create a Cources
     * const cources = await prisma.cources.upsert({
     *   create: {
     *     // ... data to create a Cources
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cources we want to update
     *   }
     * })
     */
    upsert<T extends courcesUpsertArgs>(args: SelectSubset<T, courcesUpsertArgs<ExtArgs>>): Prisma__courcesClient<$Result.GetResult<Prisma.$courcesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courcesCountArgs} args - Arguments to filter Cources to count.
     * @example
     * // Count the number of Cources
     * const count = await prisma.cources.count({
     *   where: {
     *     // ... the filter for the Cources we want to count
     *   }
     * })
    **/
    count<T extends courcesCountArgs>(
      args?: Subset<T, courcesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourcesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourcesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourcesAggregateArgs>(args: Subset<T, CourcesAggregateArgs>): Prisma.PrismaPromise<GetCourcesAggregateType<T>>

    /**
     * Group by Cources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courcesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends courcesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courcesGroupByArgs['orderBy'] }
        : { orderBy?: courcesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, courcesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourcesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cources model
   */
  readonly fields: courcesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cources.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courcesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cources model
   */
  interface courcesFieldRefs {
    readonly id: FieldRef<"cources", 'Int'>
    readonly name: FieldRef<"cources", 'String'>
    readonly category: FieldRef<"cources", 'String'>
    readonly prerequisite: FieldRef<"cources", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cources findUnique
   */
  export type courcesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * Filter, which cources to fetch.
     */
    where: courcesWhereUniqueInput
  }

  /**
   * cources findUniqueOrThrow
   */
  export type courcesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * Filter, which cources to fetch.
     */
    where: courcesWhereUniqueInput
  }

  /**
   * cources findFirst
   */
  export type courcesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * Filter, which cources to fetch.
     */
    where?: courcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cources to fetch.
     */
    orderBy?: courcesOrderByWithRelationInput | courcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cources.
     */
    cursor?: courcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cources.
     */
    distinct?: CourcesScalarFieldEnum | CourcesScalarFieldEnum[]
  }

  /**
   * cources findFirstOrThrow
   */
  export type courcesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * Filter, which cources to fetch.
     */
    where?: courcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cources to fetch.
     */
    orderBy?: courcesOrderByWithRelationInput | courcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cources.
     */
    cursor?: courcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cources.
     */
    distinct?: CourcesScalarFieldEnum | CourcesScalarFieldEnum[]
  }

  /**
   * cources findMany
   */
  export type courcesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * Filter, which cources to fetch.
     */
    where?: courcesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cources to fetch.
     */
    orderBy?: courcesOrderByWithRelationInput | courcesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cources.
     */
    cursor?: courcesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cources.
     */
    skip?: number
    distinct?: CourcesScalarFieldEnum | CourcesScalarFieldEnum[]
  }

  /**
   * cources create
   */
  export type courcesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * The data needed to create a cources.
     */
    data: XOR<courcesCreateInput, courcesUncheckedCreateInput>
  }

  /**
   * cources createMany
   */
  export type courcesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cources.
     */
    data: courcesCreateManyInput | courcesCreateManyInput[]
  }

  /**
   * cources createManyAndReturn
   */
  export type courcesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * The data used to create many cources.
     */
    data: courcesCreateManyInput | courcesCreateManyInput[]
  }

  /**
   * cources update
   */
  export type courcesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * The data needed to update a cources.
     */
    data: XOR<courcesUpdateInput, courcesUncheckedUpdateInput>
    /**
     * Choose, which cources to update.
     */
    where: courcesWhereUniqueInput
  }

  /**
   * cources updateMany
   */
  export type courcesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cources.
     */
    data: XOR<courcesUpdateManyMutationInput, courcesUncheckedUpdateManyInput>
    /**
     * Filter which cources to update
     */
    where?: courcesWhereInput
    /**
     * Limit how many cources to update.
     */
    limit?: number
  }

  /**
   * cources updateManyAndReturn
   */
  export type courcesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * The data used to update cources.
     */
    data: XOR<courcesUpdateManyMutationInput, courcesUncheckedUpdateManyInput>
    /**
     * Filter which cources to update
     */
    where?: courcesWhereInput
    /**
     * Limit how many cources to update.
     */
    limit?: number
  }

  /**
   * cources upsert
   */
  export type courcesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * The filter to search for the cources to update in case it exists.
     */
    where: courcesWhereUniqueInput
    /**
     * In case the cources found by the `where` argument doesn't exist, create a new cources with this data.
     */
    create: XOR<courcesCreateInput, courcesUncheckedCreateInput>
    /**
     * In case the cources was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courcesUpdateInput, courcesUncheckedUpdateInput>
  }

  /**
   * cources delete
   */
  export type courcesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
    /**
     * Filter which cources to delete.
     */
    where: courcesWhereUniqueInput
  }

  /**
   * cources deleteMany
   */
  export type courcesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cources to delete
     */
    where?: courcesWhereInput
    /**
     * Limit how many cources to delete.
     */
    limit?: number
  }

  /**
   * cources without action
   */
  export type courcesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cources
     */
    select?: courcesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cources
     */
    omit?: courcesOmit<ExtArgs> | null
  }


  /**
   * Model regesteration
   */

  export type AggregateRegesteration = {
    _count: RegesterationCountAggregateOutputType | null
    _avg: RegesterationAvgAggregateOutputType | null
    _sum: RegesterationSumAggregateOutputType | null
    _min: RegesterationMinAggregateOutputType | null
    _max: RegesterationMaxAggregateOutputType | null
  }

  export type RegesterationAvgAggregateOutputType = {
    id: number | null
  }

  export type RegesterationSumAggregateOutputType = {
    id: number | null
  }

  export type RegesterationMinAggregateOutputType = {
    id: number | null
    CourceName: string | null
    instructor: string | null
    Studentname: string | null
    grade: string | null
    status: string | null
  }

  export type RegesterationMaxAggregateOutputType = {
    id: number | null
    CourceName: string | null
    instructor: string | null
    Studentname: string | null
    grade: string | null
    status: string | null
  }

  export type RegesterationCountAggregateOutputType = {
    id: number
    CourceName: number
    instructor: number
    Studentname: number
    grade: number
    status: number
    _all: number
  }


  export type RegesterationAvgAggregateInputType = {
    id?: true
  }

  export type RegesterationSumAggregateInputType = {
    id?: true
  }

  export type RegesterationMinAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    Studentname?: true
    grade?: true
    status?: true
  }

  export type RegesterationMaxAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    Studentname?: true
    grade?: true
    status?: true
  }

  export type RegesterationCountAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    Studentname?: true
    grade?: true
    status?: true
    _all?: true
  }

  export type RegesterationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regesteration to aggregate.
     */
    where?: regesterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regesterations to fetch.
     */
    orderBy?: regesterationOrderByWithRelationInput | regesterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regesterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regesterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regesterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regesterations
    **/
    _count?: true | RegesterationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegesterationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegesterationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegesterationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegesterationMaxAggregateInputType
  }

  export type GetRegesterationAggregateType<T extends RegesterationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegesteration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegesteration[P]>
      : GetScalarType<T[P], AggregateRegesteration[P]>
  }




  export type regesterationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regesterationWhereInput
    orderBy?: regesterationOrderByWithAggregationInput | regesterationOrderByWithAggregationInput[]
    by: RegesterationScalarFieldEnum[] | RegesterationScalarFieldEnum
    having?: regesterationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegesterationCountAggregateInputType | true
    _avg?: RegesterationAvgAggregateInputType
    _sum?: RegesterationSumAggregateInputType
    _min?: RegesterationMinAggregateInputType
    _max?: RegesterationMaxAggregateInputType
  }

  export type RegesterationGroupByOutputType = {
    id: number
    CourceName: string
    instructor: string
    Studentname: string
    grade: string
    status: string
    _count: RegesterationCountAggregateOutputType | null
    _avg: RegesterationAvgAggregateOutputType | null
    _sum: RegesterationSumAggregateOutputType | null
    _min: RegesterationMinAggregateOutputType | null
    _max: RegesterationMaxAggregateOutputType | null
  }

  type GetRegesterationGroupByPayload<T extends regesterationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegesterationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegesterationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegesterationGroupByOutputType[P]>
            : GetScalarType<T[P], RegesterationGroupByOutputType[P]>
        }
      >
    >


  export type regesterationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    Studentname?: boolean
    grade?: boolean
    status?: boolean
  }, ExtArgs["result"]["regesteration"]>

  export type regesterationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    Studentname?: boolean
    grade?: boolean
    status?: boolean
  }, ExtArgs["result"]["regesteration"]>

  export type regesterationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    Studentname?: boolean
    grade?: boolean
    status?: boolean
  }, ExtArgs["result"]["regesteration"]>

  export type regesterationSelectScalar = {
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    Studentname?: boolean
    grade?: boolean
    status?: boolean
  }

  export type regesterationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CourceName" | "instructor" | "Studentname" | "grade" | "status", ExtArgs["result"]["regesteration"]>

  export type $regesterationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "regesteration"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CourceName: string
      instructor: string
      Studentname: string
      grade: string
      status: string
    }, ExtArgs["result"]["regesteration"]>
    composites: {}
  }

  type regesterationGetPayload<S extends boolean | null | undefined | regesterationDefaultArgs> = $Result.GetResult<Prisma.$regesterationPayload, S>

  type regesterationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<regesterationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegesterationCountAggregateInputType | true
    }

  export interface regesterationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['regesteration'], meta: { name: 'regesteration' } }
    /**
     * Find zero or one Regesteration that matches the filter.
     * @param {regesterationFindUniqueArgs} args - Arguments to find a Regesteration
     * @example
     * // Get one Regesteration
     * const regesteration = await prisma.regesteration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regesterationFindUniqueArgs>(args: SelectSubset<T, regesterationFindUniqueArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regesteration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {regesterationFindUniqueOrThrowArgs} args - Arguments to find a Regesteration
     * @example
     * // Get one Regesteration
     * const regesteration = await prisma.regesteration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regesterationFindUniqueOrThrowArgs>(args: SelectSubset<T, regesterationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regesteration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regesterationFindFirstArgs} args - Arguments to find a Regesteration
     * @example
     * // Get one Regesteration
     * const regesteration = await prisma.regesteration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regesterationFindFirstArgs>(args?: SelectSubset<T, regesterationFindFirstArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regesteration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regesterationFindFirstOrThrowArgs} args - Arguments to find a Regesteration
     * @example
     * // Get one Regesteration
     * const regesteration = await prisma.regesteration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regesterationFindFirstOrThrowArgs>(args?: SelectSubset<T, regesterationFindFirstOrThrowArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regesterations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regesterationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regesterations
     * const regesterations = await prisma.regesteration.findMany()
     * 
     * // Get first 10 Regesterations
     * const regesterations = await prisma.regesteration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regesterationWithIdOnly = await prisma.regesteration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends regesterationFindManyArgs>(args?: SelectSubset<T, regesterationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regesteration.
     * @param {regesterationCreateArgs} args - Arguments to create a Regesteration.
     * @example
     * // Create one Regesteration
     * const Regesteration = await prisma.regesteration.create({
     *   data: {
     *     // ... data to create a Regesteration
     *   }
     * })
     * 
     */
    create<T extends regesterationCreateArgs>(args: SelectSubset<T, regesterationCreateArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regesterations.
     * @param {regesterationCreateManyArgs} args - Arguments to create many Regesterations.
     * @example
     * // Create many Regesterations
     * const regesteration = await prisma.regesteration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regesterationCreateManyArgs>(args?: SelectSubset<T, regesterationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regesterations and returns the data saved in the database.
     * @param {regesterationCreateManyAndReturnArgs} args - Arguments to create many Regesterations.
     * @example
     * // Create many Regesterations
     * const regesteration = await prisma.regesteration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regesterations and only return the `id`
     * const regesterationWithIdOnly = await prisma.regesteration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends regesterationCreateManyAndReturnArgs>(args?: SelectSubset<T, regesterationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regesteration.
     * @param {regesterationDeleteArgs} args - Arguments to delete one Regesteration.
     * @example
     * // Delete one Regesteration
     * const Regesteration = await prisma.regesteration.delete({
     *   where: {
     *     // ... filter to delete one Regesteration
     *   }
     * })
     * 
     */
    delete<T extends regesterationDeleteArgs>(args: SelectSubset<T, regesterationDeleteArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regesteration.
     * @param {regesterationUpdateArgs} args - Arguments to update one Regesteration.
     * @example
     * // Update one Regesteration
     * const regesteration = await prisma.regesteration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regesterationUpdateArgs>(args: SelectSubset<T, regesterationUpdateArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regesterations.
     * @param {regesterationDeleteManyArgs} args - Arguments to filter Regesterations to delete.
     * @example
     * // Delete a few Regesterations
     * const { count } = await prisma.regesteration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regesterationDeleteManyArgs>(args?: SelectSubset<T, regesterationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regesterations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regesterationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regesterations
     * const regesteration = await prisma.regesteration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regesterationUpdateManyArgs>(args: SelectSubset<T, regesterationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regesterations and returns the data updated in the database.
     * @param {regesterationUpdateManyAndReturnArgs} args - Arguments to update many Regesterations.
     * @example
     * // Update many Regesterations
     * const regesteration = await prisma.regesteration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regesterations and only return the `id`
     * const regesterationWithIdOnly = await prisma.regesteration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends regesterationUpdateManyAndReturnArgs>(args: SelectSubset<T, regesterationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regesteration.
     * @param {regesterationUpsertArgs} args - Arguments to update or create a Regesteration.
     * @example
     * // Update or create a Regesteration
     * const regesteration = await prisma.regesteration.upsert({
     *   create: {
     *     // ... data to create a Regesteration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regesteration we want to update
     *   }
     * })
     */
    upsert<T extends regesterationUpsertArgs>(args: SelectSubset<T, regesterationUpsertArgs<ExtArgs>>): Prisma__regesterationClient<$Result.GetResult<Prisma.$regesterationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regesterations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regesterationCountArgs} args - Arguments to filter Regesterations to count.
     * @example
     * // Count the number of Regesterations
     * const count = await prisma.regesteration.count({
     *   where: {
     *     // ... the filter for the Regesterations we want to count
     *   }
     * })
    **/
    count<T extends regesterationCountArgs>(
      args?: Subset<T, regesterationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegesterationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regesteration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegesterationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegesterationAggregateArgs>(args: Subset<T, RegesterationAggregateArgs>): Prisma.PrismaPromise<GetRegesterationAggregateType<T>>

    /**
     * Group by Regesteration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regesterationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends regesterationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regesterationGroupByArgs['orderBy'] }
        : { orderBy?: regesterationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, regesterationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegesterationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the regesteration model
   */
  readonly fields: regesterationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for regesteration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regesterationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the regesteration model
   */
  interface regesterationFieldRefs {
    readonly id: FieldRef<"regesteration", 'Int'>
    readonly CourceName: FieldRef<"regesteration", 'String'>
    readonly instructor: FieldRef<"regesteration", 'String'>
    readonly Studentname: FieldRef<"regesteration", 'String'>
    readonly grade: FieldRef<"regesteration", 'String'>
    readonly status: FieldRef<"regesteration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * regesteration findUnique
   */
  export type regesterationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * Filter, which regesteration to fetch.
     */
    where: regesterationWhereUniqueInput
  }

  /**
   * regesteration findUniqueOrThrow
   */
  export type regesterationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * Filter, which regesteration to fetch.
     */
    where: regesterationWhereUniqueInput
  }

  /**
   * regesteration findFirst
   */
  export type regesterationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * Filter, which regesteration to fetch.
     */
    where?: regesterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regesterations to fetch.
     */
    orderBy?: regesterationOrderByWithRelationInput | regesterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regesterations.
     */
    cursor?: regesterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regesterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regesterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regesterations.
     */
    distinct?: RegesterationScalarFieldEnum | RegesterationScalarFieldEnum[]
  }

  /**
   * regesteration findFirstOrThrow
   */
  export type regesterationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * Filter, which regesteration to fetch.
     */
    where?: regesterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regesterations to fetch.
     */
    orderBy?: regesterationOrderByWithRelationInput | regesterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regesterations.
     */
    cursor?: regesterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regesterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regesterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regesterations.
     */
    distinct?: RegesterationScalarFieldEnum | RegesterationScalarFieldEnum[]
  }

  /**
   * regesteration findMany
   */
  export type regesterationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * Filter, which regesterations to fetch.
     */
    where?: regesterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regesterations to fetch.
     */
    orderBy?: regesterationOrderByWithRelationInput | regesterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regesterations.
     */
    cursor?: regesterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regesterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regesterations.
     */
    skip?: number
    distinct?: RegesterationScalarFieldEnum | RegesterationScalarFieldEnum[]
  }

  /**
   * regesteration create
   */
  export type regesterationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * The data needed to create a regesteration.
     */
    data: XOR<regesterationCreateInput, regesterationUncheckedCreateInput>
  }

  /**
   * regesteration createMany
   */
  export type regesterationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regesterations.
     */
    data: regesterationCreateManyInput | regesterationCreateManyInput[]
  }

  /**
   * regesteration createManyAndReturn
   */
  export type regesterationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * The data used to create many regesterations.
     */
    data: regesterationCreateManyInput | regesterationCreateManyInput[]
  }

  /**
   * regesteration update
   */
  export type regesterationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * The data needed to update a regesteration.
     */
    data: XOR<regesterationUpdateInput, regesterationUncheckedUpdateInput>
    /**
     * Choose, which regesteration to update.
     */
    where: regesterationWhereUniqueInput
  }

  /**
   * regesteration updateMany
   */
  export type regesterationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regesterations.
     */
    data: XOR<regesterationUpdateManyMutationInput, regesterationUncheckedUpdateManyInput>
    /**
     * Filter which regesterations to update
     */
    where?: regesterationWhereInput
    /**
     * Limit how many regesterations to update.
     */
    limit?: number
  }

  /**
   * regesteration updateManyAndReturn
   */
  export type regesterationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * The data used to update regesterations.
     */
    data: XOR<regesterationUpdateManyMutationInput, regesterationUncheckedUpdateManyInput>
    /**
     * Filter which regesterations to update
     */
    where?: regesterationWhereInput
    /**
     * Limit how many regesterations to update.
     */
    limit?: number
  }

  /**
   * regesteration upsert
   */
  export type regesterationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * The filter to search for the regesteration to update in case it exists.
     */
    where: regesterationWhereUniqueInput
    /**
     * In case the regesteration found by the `where` argument doesn't exist, create a new regesteration with this data.
     */
    create: XOR<regesterationCreateInput, regesterationUncheckedCreateInput>
    /**
     * In case the regesteration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regesterationUpdateInput, regesterationUncheckedUpdateInput>
  }

  /**
   * regesteration delete
   */
  export type regesterationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
    /**
     * Filter which regesteration to delete.
     */
    where: regesterationWhereUniqueInput
  }

  /**
   * regesteration deleteMany
   */
  export type regesterationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regesterations to delete
     */
    where?: regesterationWhereInput
    /**
     * Limit how many regesterations to delete.
     */
    limit?: number
  }

  /**
   * regesteration without action
   */
  export type regesterationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regesteration
     */
    select?: regesterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regesteration
     */
    omit?: regesterationOmit<ExtArgs> | null
  }


  /**
   * Model classess
   */

  export type AggregateClassess = {
    _count: ClassessCountAggregateOutputType | null
    _avg: ClassessAvgAggregateOutputType | null
    _sum: ClassessSumAggregateOutputType | null
    _min: ClassessMinAggregateOutputType | null
    _max: ClassessMaxAggregateOutputType | null
  }

  export type ClassessAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassessSumAggregateOutputType = {
    id: number | null
  }

  export type ClassessMinAggregateOutputType = {
    id: number | null
    CourceName: string | null
    instructor: string | null
    category: string | null
    seats: string | null
    available_seats: string | null
    prerequisite: string | null
    validation: string | null
  }

  export type ClassessMaxAggregateOutputType = {
    id: number | null
    CourceName: string | null
    instructor: string | null
    category: string | null
    seats: string | null
    available_seats: string | null
    prerequisite: string | null
    validation: string | null
  }

  export type ClassessCountAggregateOutputType = {
    id: number
    CourceName: number
    instructor: number
    category: number
    seats: number
    available_seats: number
    prerequisite: number
    validation: number
    _all: number
  }


  export type ClassessAvgAggregateInputType = {
    id?: true
  }

  export type ClassessSumAggregateInputType = {
    id?: true
  }

  export type ClassessMinAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    category?: true
    seats?: true
    available_seats?: true
    prerequisite?: true
    validation?: true
  }

  export type ClassessMaxAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    category?: true
    seats?: true
    available_seats?: true
    prerequisite?: true
    validation?: true
  }

  export type ClassessCountAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    category?: true
    seats?: true
    available_seats?: true
    prerequisite?: true
    validation?: true
    _all?: true
  }

  export type ClassessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classess to aggregate.
     */
    where?: classessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classesses to fetch.
     */
    orderBy?: classessOrderByWithRelationInput | classessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: classessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned classesses
    **/
    _count?: true | ClassessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassessMaxAggregateInputType
  }

  export type GetClassessAggregateType<T extends ClassessAggregateArgs> = {
        [P in keyof T & keyof AggregateClassess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassess[P]>
      : GetScalarType<T[P], AggregateClassess[P]>
  }




  export type classessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: classessWhereInput
    orderBy?: classessOrderByWithAggregationInput | classessOrderByWithAggregationInput[]
    by: ClassessScalarFieldEnum[] | ClassessScalarFieldEnum
    having?: classessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassessCountAggregateInputType | true
    _avg?: ClassessAvgAggregateInputType
    _sum?: ClassessSumAggregateInputType
    _min?: ClassessMinAggregateInputType
    _max?: ClassessMaxAggregateInputType
  }

  export type ClassessGroupByOutputType = {
    id: number
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
    _count: ClassessCountAggregateOutputType | null
    _avg: ClassessAvgAggregateOutputType | null
    _sum: ClassessSumAggregateOutputType | null
    _min: ClassessMinAggregateOutputType | null
    _max: ClassessMaxAggregateOutputType | null
  }

  type GetClassessGroupByPayload<T extends classessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassessGroupByOutputType[P]>
            : GetScalarType<T[P], ClassessGroupByOutputType[P]>
        }
      >
    >


  export type classessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }, ExtArgs["result"]["classess"]>

  export type classessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }, ExtArgs["result"]["classess"]>

  export type classessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }, ExtArgs["result"]["classess"]>

  export type classessSelectScalar = {
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }

  export type classessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CourceName" | "instructor" | "category" | "seats" | "available_seats" | "prerequisite" | "validation", ExtArgs["result"]["classess"]>

  export type $classessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "classess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CourceName: string
      instructor: string
      category: string
      seats: string
      available_seats: string
      prerequisite: string
      validation: string
    }, ExtArgs["result"]["classess"]>
    composites: {}
  }

  type classessGetPayload<S extends boolean | null | undefined | classessDefaultArgs> = $Result.GetResult<Prisma.$classessPayload, S>

  type classessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<classessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassessCountAggregateInputType | true
    }

  export interface classessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['classess'], meta: { name: 'classess' } }
    /**
     * Find zero or one Classess that matches the filter.
     * @param {classessFindUniqueArgs} args - Arguments to find a Classess
     * @example
     * // Get one Classess
     * const classess = await prisma.classess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends classessFindUniqueArgs>(args: SelectSubset<T, classessFindUniqueArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {classessFindUniqueOrThrowArgs} args - Arguments to find a Classess
     * @example
     * // Get one Classess
     * const classess = await prisma.classess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends classessFindUniqueOrThrowArgs>(args: SelectSubset<T, classessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classessFindFirstArgs} args - Arguments to find a Classess
     * @example
     * // Get one Classess
     * const classess = await prisma.classess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends classessFindFirstArgs>(args?: SelectSubset<T, classessFindFirstArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classessFindFirstOrThrowArgs} args - Arguments to find a Classess
     * @example
     * // Get one Classess
     * const classess = await prisma.classess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends classessFindFirstOrThrowArgs>(args?: SelectSubset<T, classessFindFirstOrThrowArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classesses
     * const classesses = await prisma.classess.findMany()
     * 
     * // Get first 10 Classesses
     * const classesses = await prisma.classess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classessWithIdOnly = await prisma.classess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends classessFindManyArgs>(args?: SelectSubset<T, classessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classess.
     * @param {classessCreateArgs} args - Arguments to create a Classess.
     * @example
     * // Create one Classess
     * const Classess = await prisma.classess.create({
     *   data: {
     *     // ... data to create a Classess
     *   }
     * })
     * 
     */
    create<T extends classessCreateArgs>(args: SelectSubset<T, classessCreateArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classesses.
     * @param {classessCreateManyArgs} args - Arguments to create many Classesses.
     * @example
     * // Create many Classesses
     * const classess = await prisma.classess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends classessCreateManyArgs>(args?: SelectSubset<T, classessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classesses and returns the data saved in the database.
     * @param {classessCreateManyAndReturnArgs} args - Arguments to create many Classesses.
     * @example
     * // Create many Classesses
     * const classess = await prisma.classess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classesses and only return the `id`
     * const classessWithIdOnly = await prisma.classess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends classessCreateManyAndReturnArgs>(args?: SelectSubset<T, classessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classess.
     * @param {classessDeleteArgs} args - Arguments to delete one Classess.
     * @example
     * // Delete one Classess
     * const Classess = await prisma.classess.delete({
     *   where: {
     *     // ... filter to delete one Classess
     *   }
     * })
     * 
     */
    delete<T extends classessDeleteArgs>(args: SelectSubset<T, classessDeleteArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classess.
     * @param {classessUpdateArgs} args - Arguments to update one Classess.
     * @example
     * // Update one Classess
     * const classess = await prisma.classess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends classessUpdateArgs>(args: SelectSubset<T, classessUpdateArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classesses.
     * @param {classessDeleteManyArgs} args - Arguments to filter Classesses to delete.
     * @example
     * // Delete a few Classesses
     * const { count } = await prisma.classess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends classessDeleteManyArgs>(args?: SelectSubset<T, classessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classesses
     * const classess = await prisma.classess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends classessUpdateManyArgs>(args: SelectSubset<T, classessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classesses and returns the data updated in the database.
     * @param {classessUpdateManyAndReturnArgs} args - Arguments to update many Classesses.
     * @example
     * // Update many Classesses
     * const classess = await prisma.classess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classesses and only return the `id`
     * const classessWithIdOnly = await prisma.classess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends classessUpdateManyAndReturnArgs>(args: SelectSubset<T, classessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classess.
     * @param {classessUpsertArgs} args - Arguments to update or create a Classess.
     * @example
     * // Update or create a Classess
     * const classess = await prisma.classess.upsert({
     *   create: {
     *     // ... data to create a Classess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classess we want to update
     *   }
     * })
     */
    upsert<T extends classessUpsertArgs>(args: SelectSubset<T, classessUpsertArgs<ExtArgs>>): Prisma__classessClient<$Result.GetResult<Prisma.$classessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classessCountArgs} args - Arguments to filter Classesses to count.
     * @example
     * // Count the number of Classesses
     * const count = await prisma.classess.count({
     *   where: {
     *     // ... the filter for the Classesses we want to count
     *   }
     * })
    **/
    count<T extends classessCountArgs>(
      args?: Subset<T, classessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassessAggregateArgs>(args: Subset<T, ClassessAggregateArgs>): Prisma.PrismaPromise<GetClassessAggregateType<T>>

    /**
     * Group by Classess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {classessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends classessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: classessGroupByArgs['orderBy'] }
        : { orderBy?: classessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, classessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the classess model
   */
  readonly fields: classessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for classess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__classessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the classess model
   */
  interface classessFieldRefs {
    readonly id: FieldRef<"classess", 'Int'>
    readonly CourceName: FieldRef<"classess", 'String'>
    readonly instructor: FieldRef<"classess", 'String'>
    readonly category: FieldRef<"classess", 'String'>
    readonly seats: FieldRef<"classess", 'String'>
    readonly available_seats: FieldRef<"classess", 'String'>
    readonly prerequisite: FieldRef<"classess", 'String'>
    readonly validation: FieldRef<"classess", 'String'>
  }
    

  // Custom InputTypes
  /**
   * classess findUnique
   */
  export type classessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * Filter, which classess to fetch.
     */
    where: classessWhereUniqueInput
  }

  /**
   * classess findUniqueOrThrow
   */
  export type classessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * Filter, which classess to fetch.
     */
    where: classessWhereUniqueInput
  }

  /**
   * classess findFirst
   */
  export type classessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * Filter, which classess to fetch.
     */
    where?: classessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classesses to fetch.
     */
    orderBy?: classessOrderByWithRelationInput | classessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classesses.
     */
    cursor?: classessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classesses.
     */
    distinct?: ClassessScalarFieldEnum | ClassessScalarFieldEnum[]
  }

  /**
   * classess findFirstOrThrow
   */
  export type classessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * Filter, which classess to fetch.
     */
    where?: classessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classesses to fetch.
     */
    orderBy?: classessOrderByWithRelationInput | classessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for classesses.
     */
    cursor?: classessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of classesses.
     */
    distinct?: ClassessScalarFieldEnum | ClassessScalarFieldEnum[]
  }

  /**
   * classess findMany
   */
  export type classessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * Filter, which classesses to fetch.
     */
    where?: classessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of classesses to fetch.
     */
    orderBy?: classessOrderByWithRelationInput | classessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing classesses.
     */
    cursor?: classessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` classesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` classesses.
     */
    skip?: number
    distinct?: ClassessScalarFieldEnum | ClassessScalarFieldEnum[]
  }

  /**
   * classess create
   */
  export type classessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * The data needed to create a classess.
     */
    data: XOR<classessCreateInput, classessUncheckedCreateInput>
  }

  /**
   * classess createMany
   */
  export type classessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many classesses.
     */
    data: classessCreateManyInput | classessCreateManyInput[]
  }

  /**
   * classess createManyAndReturn
   */
  export type classessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * The data used to create many classesses.
     */
    data: classessCreateManyInput | classessCreateManyInput[]
  }

  /**
   * classess update
   */
  export type classessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * The data needed to update a classess.
     */
    data: XOR<classessUpdateInput, classessUncheckedUpdateInput>
    /**
     * Choose, which classess to update.
     */
    where: classessWhereUniqueInput
  }

  /**
   * classess updateMany
   */
  export type classessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update classesses.
     */
    data: XOR<classessUpdateManyMutationInput, classessUncheckedUpdateManyInput>
    /**
     * Filter which classesses to update
     */
    where?: classessWhereInput
    /**
     * Limit how many classesses to update.
     */
    limit?: number
  }

  /**
   * classess updateManyAndReturn
   */
  export type classessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * The data used to update classesses.
     */
    data: XOR<classessUpdateManyMutationInput, classessUncheckedUpdateManyInput>
    /**
     * Filter which classesses to update
     */
    where?: classessWhereInput
    /**
     * Limit how many classesses to update.
     */
    limit?: number
  }

  /**
   * classess upsert
   */
  export type classessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * The filter to search for the classess to update in case it exists.
     */
    where: classessWhereUniqueInput
    /**
     * In case the classess found by the `where` argument doesn't exist, create a new classess with this data.
     */
    create: XOR<classessCreateInput, classessUncheckedCreateInput>
    /**
     * In case the classess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<classessUpdateInput, classessUncheckedUpdateInput>
  }

  /**
   * classess delete
   */
  export type classessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
    /**
     * Filter which classess to delete.
     */
    where: classessWhereUniqueInput
  }

  /**
   * classess deleteMany
   */
  export type classessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which classesses to delete
     */
    where?: classessWhereInput
    /**
     * Limit how many classesses to delete.
     */
    limit?: number
  }

  /**
   * classess without action
   */
  export type classessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the classess
     */
    select?: classessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the classess
     */
    omit?: classessOmit<ExtArgs> | null
  }


  /**
   * Model Preclassess
   */

  export type AggregatePreclassess = {
    _count: PreclassessCountAggregateOutputType | null
    _avg: PreclassessAvgAggregateOutputType | null
    _sum: PreclassessSumAggregateOutputType | null
    _min: PreclassessMinAggregateOutputType | null
    _max: PreclassessMaxAggregateOutputType | null
  }

  export type PreclassessAvgAggregateOutputType = {
    id: number | null
  }

  export type PreclassessSumAggregateOutputType = {
    id: number | null
  }

  export type PreclassessMinAggregateOutputType = {
    id: number | null
    CourceName: string | null
    instructor: string | null
    category: string | null
    seats: string | null
    available_seats: string | null
    prerequisite: string | null
    validation: string | null
  }

  export type PreclassessMaxAggregateOutputType = {
    id: number | null
    CourceName: string | null
    instructor: string | null
    category: string | null
    seats: string | null
    available_seats: string | null
    prerequisite: string | null
    validation: string | null
  }

  export type PreclassessCountAggregateOutputType = {
    id: number
    CourceName: number
    instructor: number
    category: number
    seats: number
    available_seats: number
    prerequisite: number
    validation: number
    _all: number
  }


  export type PreclassessAvgAggregateInputType = {
    id?: true
  }

  export type PreclassessSumAggregateInputType = {
    id?: true
  }

  export type PreclassessMinAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    category?: true
    seats?: true
    available_seats?: true
    prerequisite?: true
    validation?: true
  }

  export type PreclassessMaxAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    category?: true
    seats?: true
    available_seats?: true
    prerequisite?: true
    validation?: true
  }

  export type PreclassessCountAggregateInputType = {
    id?: true
    CourceName?: true
    instructor?: true
    category?: true
    seats?: true
    available_seats?: true
    prerequisite?: true
    validation?: true
    _all?: true
  }

  export type PreclassessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preclassess to aggregate.
     */
    where?: PreclassessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preclassesses to fetch.
     */
    orderBy?: PreclassessOrderByWithRelationInput | PreclassessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreclassessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preclassesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preclassesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preclassesses
    **/
    _count?: true | PreclassessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreclassessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreclassessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreclassessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreclassessMaxAggregateInputType
  }

  export type GetPreclassessAggregateType<T extends PreclassessAggregateArgs> = {
        [P in keyof T & keyof AggregatePreclassess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreclassess[P]>
      : GetScalarType<T[P], AggregatePreclassess[P]>
  }




  export type PreclassessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreclassessWhereInput
    orderBy?: PreclassessOrderByWithAggregationInput | PreclassessOrderByWithAggregationInput[]
    by: PreclassessScalarFieldEnum[] | PreclassessScalarFieldEnum
    having?: PreclassessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreclassessCountAggregateInputType | true
    _avg?: PreclassessAvgAggregateInputType
    _sum?: PreclassessSumAggregateInputType
    _min?: PreclassessMinAggregateInputType
    _max?: PreclassessMaxAggregateInputType
  }

  export type PreclassessGroupByOutputType = {
    id: number
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
    _count: PreclassessCountAggregateOutputType | null
    _avg: PreclassessAvgAggregateOutputType | null
    _sum: PreclassessSumAggregateOutputType | null
    _min: PreclassessMinAggregateOutputType | null
    _max: PreclassessMaxAggregateOutputType | null
  }

  type GetPreclassessGroupByPayload<T extends PreclassessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreclassessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreclassessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreclassessGroupByOutputType[P]>
            : GetScalarType<T[P], PreclassessGroupByOutputType[P]>
        }
      >
    >


  export type PreclassessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }, ExtArgs["result"]["preclassess"]>

  export type PreclassessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }, ExtArgs["result"]["preclassess"]>

  export type PreclassessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }, ExtArgs["result"]["preclassess"]>

  export type PreclassessSelectScalar = {
    id?: boolean
    CourceName?: boolean
    instructor?: boolean
    category?: boolean
    seats?: boolean
    available_seats?: boolean
    prerequisite?: boolean
    validation?: boolean
  }

  export type PreclassessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CourceName" | "instructor" | "category" | "seats" | "available_seats" | "prerequisite" | "validation", ExtArgs["result"]["preclassess"]>

  export type $PreclassessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preclassess"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CourceName: string
      instructor: string
      category: string
      seats: string
      available_seats: string
      prerequisite: string
      validation: string
    }, ExtArgs["result"]["preclassess"]>
    composites: {}
  }

  type PreclassessGetPayload<S extends boolean | null | undefined | PreclassessDefaultArgs> = $Result.GetResult<Prisma.$PreclassessPayload, S>

  type PreclassessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreclassessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreclassessCountAggregateInputType | true
    }

  export interface PreclassessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preclassess'], meta: { name: 'Preclassess' } }
    /**
     * Find zero or one Preclassess that matches the filter.
     * @param {PreclassessFindUniqueArgs} args - Arguments to find a Preclassess
     * @example
     * // Get one Preclassess
     * const preclassess = await prisma.preclassess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreclassessFindUniqueArgs>(args: SelectSubset<T, PreclassessFindUniqueArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preclassess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreclassessFindUniqueOrThrowArgs} args - Arguments to find a Preclassess
     * @example
     * // Get one Preclassess
     * const preclassess = await prisma.preclassess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreclassessFindUniqueOrThrowArgs>(args: SelectSubset<T, PreclassessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preclassess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessFindFirstArgs} args - Arguments to find a Preclassess
     * @example
     * // Get one Preclassess
     * const preclassess = await prisma.preclassess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreclassessFindFirstArgs>(args?: SelectSubset<T, PreclassessFindFirstArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preclassess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessFindFirstOrThrowArgs} args - Arguments to find a Preclassess
     * @example
     * // Get one Preclassess
     * const preclassess = await prisma.preclassess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreclassessFindFirstOrThrowArgs>(args?: SelectSubset<T, PreclassessFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preclassesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preclassesses
     * const preclassesses = await prisma.preclassess.findMany()
     * 
     * // Get first 10 Preclassesses
     * const preclassesses = await prisma.preclassess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preclassessWithIdOnly = await prisma.preclassess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreclassessFindManyArgs>(args?: SelectSubset<T, PreclassessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preclassess.
     * @param {PreclassessCreateArgs} args - Arguments to create a Preclassess.
     * @example
     * // Create one Preclassess
     * const Preclassess = await prisma.preclassess.create({
     *   data: {
     *     // ... data to create a Preclassess
     *   }
     * })
     * 
     */
    create<T extends PreclassessCreateArgs>(args: SelectSubset<T, PreclassessCreateArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preclassesses.
     * @param {PreclassessCreateManyArgs} args - Arguments to create many Preclassesses.
     * @example
     * // Create many Preclassesses
     * const preclassess = await prisma.preclassess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreclassessCreateManyArgs>(args?: SelectSubset<T, PreclassessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preclassesses and returns the data saved in the database.
     * @param {PreclassessCreateManyAndReturnArgs} args - Arguments to create many Preclassesses.
     * @example
     * // Create many Preclassesses
     * const preclassess = await prisma.preclassess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preclassesses and only return the `id`
     * const preclassessWithIdOnly = await prisma.preclassess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreclassessCreateManyAndReturnArgs>(args?: SelectSubset<T, PreclassessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preclassess.
     * @param {PreclassessDeleteArgs} args - Arguments to delete one Preclassess.
     * @example
     * // Delete one Preclassess
     * const Preclassess = await prisma.preclassess.delete({
     *   where: {
     *     // ... filter to delete one Preclassess
     *   }
     * })
     * 
     */
    delete<T extends PreclassessDeleteArgs>(args: SelectSubset<T, PreclassessDeleteArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preclassess.
     * @param {PreclassessUpdateArgs} args - Arguments to update one Preclassess.
     * @example
     * // Update one Preclassess
     * const preclassess = await prisma.preclassess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreclassessUpdateArgs>(args: SelectSubset<T, PreclassessUpdateArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preclassesses.
     * @param {PreclassessDeleteManyArgs} args - Arguments to filter Preclassesses to delete.
     * @example
     * // Delete a few Preclassesses
     * const { count } = await prisma.preclassess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreclassessDeleteManyArgs>(args?: SelectSubset<T, PreclassessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preclassesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preclassesses
     * const preclassess = await prisma.preclassess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreclassessUpdateManyArgs>(args: SelectSubset<T, PreclassessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preclassesses and returns the data updated in the database.
     * @param {PreclassessUpdateManyAndReturnArgs} args - Arguments to update many Preclassesses.
     * @example
     * // Update many Preclassesses
     * const preclassess = await prisma.preclassess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preclassesses and only return the `id`
     * const preclassessWithIdOnly = await prisma.preclassess.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreclassessUpdateManyAndReturnArgs>(args: SelectSubset<T, PreclassessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preclassess.
     * @param {PreclassessUpsertArgs} args - Arguments to update or create a Preclassess.
     * @example
     * // Update or create a Preclassess
     * const preclassess = await prisma.preclassess.upsert({
     *   create: {
     *     // ... data to create a Preclassess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preclassess we want to update
     *   }
     * })
     */
    upsert<T extends PreclassessUpsertArgs>(args: SelectSubset<T, PreclassessUpsertArgs<ExtArgs>>): Prisma__PreclassessClient<$Result.GetResult<Prisma.$PreclassessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preclassesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessCountArgs} args - Arguments to filter Preclassesses to count.
     * @example
     * // Count the number of Preclassesses
     * const count = await prisma.preclassess.count({
     *   where: {
     *     // ... the filter for the Preclassesses we want to count
     *   }
     * })
    **/
    count<T extends PreclassessCountArgs>(
      args?: Subset<T, PreclassessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreclassessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preclassess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreclassessAggregateArgs>(args: Subset<T, PreclassessAggregateArgs>): Prisma.PrismaPromise<GetPreclassessAggregateType<T>>

    /**
     * Group by Preclassess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreclassessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreclassessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreclassessGroupByArgs['orderBy'] }
        : { orderBy?: PreclassessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreclassessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreclassessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preclassess model
   */
  readonly fields: PreclassessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preclassess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreclassessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preclassess model
   */
  interface PreclassessFieldRefs {
    readonly id: FieldRef<"Preclassess", 'Int'>
    readonly CourceName: FieldRef<"Preclassess", 'String'>
    readonly instructor: FieldRef<"Preclassess", 'String'>
    readonly category: FieldRef<"Preclassess", 'String'>
    readonly seats: FieldRef<"Preclassess", 'String'>
    readonly available_seats: FieldRef<"Preclassess", 'String'>
    readonly prerequisite: FieldRef<"Preclassess", 'String'>
    readonly validation: FieldRef<"Preclassess", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Preclassess findUnique
   */
  export type PreclassessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * Filter, which Preclassess to fetch.
     */
    where: PreclassessWhereUniqueInput
  }

  /**
   * Preclassess findUniqueOrThrow
   */
  export type PreclassessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * Filter, which Preclassess to fetch.
     */
    where: PreclassessWhereUniqueInput
  }

  /**
   * Preclassess findFirst
   */
  export type PreclassessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * Filter, which Preclassess to fetch.
     */
    where?: PreclassessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preclassesses to fetch.
     */
    orderBy?: PreclassessOrderByWithRelationInput | PreclassessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preclassesses.
     */
    cursor?: PreclassessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preclassesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preclassesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preclassesses.
     */
    distinct?: PreclassessScalarFieldEnum | PreclassessScalarFieldEnum[]
  }

  /**
   * Preclassess findFirstOrThrow
   */
  export type PreclassessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * Filter, which Preclassess to fetch.
     */
    where?: PreclassessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preclassesses to fetch.
     */
    orderBy?: PreclassessOrderByWithRelationInput | PreclassessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preclassesses.
     */
    cursor?: PreclassessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preclassesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preclassesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preclassesses.
     */
    distinct?: PreclassessScalarFieldEnum | PreclassessScalarFieldEnum[]
  }

  /**
   * Preclassess findMany
   */
  export type PreclassessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * Filter, which Preclassesses to fetch.
     */
    where?: PreclassessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preclassesses to fetch.
     */
    orderBy?: PreclassessOrderByWithRelationInput | PreclassessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preclassesses.
     */
    cursor?: PreclassessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preclassesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preclassesses.
     */
    skip?: number
    distinct?: PreclassessScalarFieldEnum | PreclassessScalarFieldEnum[]
  }

  /**
   * Preclassess create
   */
  export type PreclassessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * The data needed to create a Preclassess.
     */
    data: XOR<PreclassessCreateInput, PreclassessUncheckedCreateInput>
  }

  /**
   * Preclassess createMany
   */
  export type PreclassessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preclassesses.
     */
    data: PreclassessCreateManyInput | PreclassessCreateManyInput[]
  }

  /**
   * Preclassess createManyAndReturn
   */
  export type PreclassessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * The data used to create many Preclassesses.
     */
    data: PreclassessCreateManyInput | PreclassessCreateManyInput[]
  }

  /**
   * Preclassess update
   */
  export type PreclassessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * The data needed to update a Preclassess.
     */
    data: XOR<PreclassessUpdateInput, PreclassessUncheckedUpdateInput>
    /**
     * Choose, which Preclassess to update.
     */
    where: PreclassessWhereUniqueInput
  }

  /**
   * Preclassess updateMany
   */
  export type PreclassessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preclassesses.
     */
    data: XOR<PreclassessUpdateManyMutationInput, PreclassessUncheckedUpdateManyInput>
    /**
     * Filter which Preclassesses to update
     */
    where?: PreclassessWhereInput
    /**
     * Limit how many Preclassesses to update.
     */
    limit?: number
  }

  /**
   * Preclassess updateManyAndReturn
   */
  export type PreclassessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * The data used to update Preclassesses.
     */
    data: XOR<PreclassessUpdateManyMutationInput, PreclassessUncheckedUpdateManyInput>
    /**
     * Filter which Preclassesses to update
     */
    where?: PreclassessWhereInput
    /**
     * Limit how many Preclassesses to update.
     */
    limit?: number
  }

  /**
   * Preclassess upsert
   */
  export type PreclassessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * The filter to search for the Preclassess to update in case it exists.
     */
    where: PreclassessWhereUniqueInput
    /**
     * In case the Preclassess found by the `where` argument doesn't exist, create a new Preclassess with this data.
     */
    create: XOR<PreclassessCreateInput, PreclassessUncheckedCreateInput>
    /**
     * In case the Preclassess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreclassessUpdateInput, PreclassessUncheckedUpdateInput>
  }

  /**
   * Preclassess delete
   */
  export type PreclassessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
    /**
     * Filter which Preclassess to delete.
     */
    where: PreclassessWhereUniqueInput
  }

  /**
   * Preclassess deleteMany
   */
  export type PreclassessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preclassesses to delete
     */
    where?: PreclassessWhereInput
    /**
     * Limit how many Preclassesses to delete.
     */
    limit?: number
  }

  /**
   * Preclassess without action
   */
  export type PreclassessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preclassess
     */
    select?: PreclassessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preclassess
     */
    omit?: PreclassessOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const CourcesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    prerequisite: 'prerequisite'
  };

  export type CourcesScalarFieldEnum = (typeof CourcesScalarFieldEnum)[keyof typeof CourcesScalarFieldEnum]


  export const RegesterationScalarFieldEnum: {
    id: 'id',
    CourceName: 'CourceName',
    instructor: 'instructor',
    Studentname: 'Studentname',
    grade: 'grade',
    status: 'status'
  };

  export type RegesterationScalarFieldEnum = (typeof RegesterationScalarFieldEnum)[keyof typeof RegesterationScalarFieldEnum]


  export const ClassessScalarFieldEnum: {
    id: 'id',
    CourceName: 'CourceName',
    instructor: 'instructor',
    category: 'category',
    seats: 'seats',
    available_seats: 'available_seats',
    prerequisite: 'prerequisite',
    validation: 'validation'
  };

  export type ClassessScalarFieldEnum = (typeof ClassessScalarFieldEnum)[keyof typeof ClassessScalarFieldEnum]


  export const PreclassessScalarFieldEnum: {
    id: 'id',
    CourceName: 'CourceName',
    instructor: 'instructor',
    category: 'category',
    seats: 'seats',
    available_seats: 'available_seats',
    prerequisite: 'prerequisite',
    validation: 'validation'
  };

  export type PreclassessScalarFieldEnum = (typeof PreclassessScalarFieldEnum)[keyof typeof PreclassessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
  }, "id">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
  }

  export type courcesWhereInput = {
    AND?: courcesWhereInput | courcesWhereInput[]
    OR?: courcesWhereInput[]
    NOT?: courcesWhereInput | courcesWhereInput[]
    id?: IntFilter<"cources"> | number
    name?: StringFilter<"cources"> | string
    category?: StringFilter<"cources"> | string
    prerequisite?: StringFilter<"cources"> | string
  }

  export type courcesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    prerequisite?: SortOrder
  }

  export type courcesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: courcesWhereInput | courcesWhereInput[]
    OR?: courcesWhereInput[]
    NOT?: courcesWhereInput | courcesWhereInput[]
    name?: StringFilter<"cources"> | string
    category?: StringFilter<"cources"> | string
    prerequisite?: StringFilter<"cources"> | string
  }, "id">

  export type courcesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    prerequisite?: SortOrder
    _count?: courcesCountOrderByAggregateInput
    _avg?: courcesAvgOrderByAggregateInput
    _max?: courcesMaxOrderByAggregateInput
    _min?: courcesMinOrderByAggregateInput
    _sum?: courcesSumOrderByAggregateInput
  }

  export type courcesScalarWhereWithAggregatesInput = {
    AND?: courcesScalarWhereWithAggregatesInput | courcesScalarWhereWithAggregatesInput[]
    OR?: courcesScalarWhereWithAggregatesInput[]
    NOT?: courcesScalarWhereWithAggregatesInput | courcesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cources"> | number
    name?: StringWithAggregatesFilter<"cources"> | string
    category?: StringWithAggregatesFilter<"cources"> | string
    prerequisite?: StringWithAggregatesFilter<"cources"> | string
  }

  export type regesterationWhereInput = {
    AND?: regesterationWhereInput | regesterationWhereInput[]
    OR?: regesterationWhereInput[]
    NOT?: regesterationWhereInput | regesterationWhereInput[]
    id?: IntFilter<"regesteration"> | number
    CourceName?: StringFilter<"regesteration"> | string
    instructor?: StringFilter<"regesteration"> | string
    Studentname?: StringFilter<"regesteration"> | string
    grade?: StringFilter<"regesteration"> | string
    status?: StringFilter<"regesteration"> | string
  }

  export type regesterationOrderByWithRelationInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    Studentname?: SortOrder
    grade?: SortOrder
    status?: SortOrder
  }

  export type regesterationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: regesterationWhereInput | regesterationWhereInput[]
    OR?: regesterationWhereInput[]
    NOT?: regesterationWhereInput | regesterationWhereInput[]
    CourceName?: StringFilter<"regesteration"> | string
    instructor?: StringFilter<"regesteration"> | string
    Studentname?: StringFilter<"regesteration"> | string
    grade?: StringFilter<"regesteration"> | string
    status?: StringFilter<"regesteration"> | string
  }, "id">

  export type regesterationOrderByWithAggregationInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    Studentname?: SortOrder
    grade?: SortOrder
    status?: SortOrder
    _count?: regesterationCountOrderByAggregateInput
    _avg?: regesterationAvgOrderByAggregateInput
    _max?: regesterationMaxOrderByAggregateInput
    _min?: regesterationMinOrderByAggregateInput
    _sum?: regesterationSumOrderByAggregateInput
  }

  export type regesterationScalarWhereWithAggregatesInput = {
    AND?: regesterationScalarWhereWithAggregatesInput | regesterationScalarWhereWithAggregatesInput[]
    OR?: regesterationScalarWhereWithAggregatesInput[]
    NOT?: regesterationScalarWhereWithAggregatesInput | regesterationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"regesteration"> | number
    CourceName?: StringWithAggregatesFilter<"regesteration"> | string
    instructor?: StringWithAggregatesFilter<"regesteration"> | string
    Studentname?: StringWithAggregatesFilter<"regesteration"> | string
    grade?: StringWithAggregatesFilter<"regesteration"> | string
    status?: StringWithAggregatesFilter<"regesteration"> | string
  }

  export type classessWhereInput = {
    AND?: classessWhereInput | classessWhereInput[]
    OR?: classessWhereInput[]
    NOT?: classessWhereInput | classessWhereInput[]
    id?: IntFilter<"classess"> | number
    CourceName?: StringFilter<"classess"> | string
    instructor?: StringFilter<"classess"> | string
    category?: StringFilter<"classess"> | string
    seats?: StringFilter<"classess"> | string
    available_seats?: StringFilter<"classess"> | string
    prerequisite?: StringFilter<"classess"> | string
    validation?: StringFilter<"classess"> | string
  }

  export type classessOrderByWithRelationInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type classessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: classessWhereInput | classessWhereInput[]
    OR?: classessWhereInput[]
    NOT?: classessWhereInput | classessWhereInput[]
    CourceName?: StringFilter<"classess"> | string
    instructor?: StringFilter<"classess"> | string
    category?: StringFilter<"classess"> | string
    seats?: StringFilter<"classess"> | string
    available_seats?: StringFilter<"classess"> | string
    prerequisite?: StringFilter<"classess"> | string
    validation?: StringFilter<"classess"> | string
  }, "id">

  export type classessOrderByWithAggregationInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
    _count?: classessCountOrderByAggregateInput
    _avg?: classessAvgOrderByAggregateInput
    _max?: classessMaxOrderByAggregateInput
    _min?: classessMinOrderByAggregateInput
    _sum?: classessSumOrderByAggregateInput
  }

  export type classessScalarWhereWithAggregatesInput = {
    AND?: classessScalarWhereWithAggregatesInput | classessScalarWhereWithAggregatesInput[]
    OR?: classessScalarWhereWithAggregatesInput[]
    NOT?: classessScalarWhereWithAggregatesInput | classessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"classess"> | number
    CourceName?: StringWithAggregatesFilter<"classess"> | string
    instructor?: StringWithAggregatesFilter<"classess"> | string
    category?: StringWithAggregatesFilter<"classess"> | string
    seats?: StringWithAggregatesFilter<"classess"> | string
    available_seats?: StringWithAggregatesFilter<"classess"> | string
    prerequisite?: StringWithAggregatesFilter<"classess"> | string
    validation?: StringWithAggregatesFilter<"classess"> | string
  }

  export type PreclassessWhereInput = {
    AND?: PreclassessWhereInput | PreclassessWhereInput[]
    OR?: PreclassessWhereInput[]
    NOT?: PreclassessWhereInput | PreclassessWhereInput[]
    id?: IntFilter<"Preclassess"> | number
    CourceName?: StringFilter<"Preclassess"> | string
    instructor?: StringFilter<"Preclassess"> | string
    category?: StringFilter<"Preclassess"> | string
    seats?: StringFilter<"Preclassess"> | string
    available_seats?: StringFilter<"Preclassess"> | string
    prerequisite?: StringFilter<"Preclassess"> | string
    validation?: StringFilter<"Preclassess"> | string
  }

  export type PreclassessOrderByWithRelationInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type PreclassessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PreclassessWhereInput | PreclassessWhereInput[]
    OR?: PreclassessWhereInput[]
    NOT?: PreclassessWhereInput | PreclassessWhereInput[]
    CourceName?: StringFilter<"Preclassess"> | string
    instructor?: StringFilter<"Preclassess"> | string
    category?: StringFilter<"Preclassess"> | string
    seats?: StringFilter<"Preclassess"> | string
    available_seats?: StringFilter<"Preclassess"> | string
    prerequisite?: StringFilter<"Preclassess"> | string
    validation?: StringFilter<"Preclassess"> | string
  }, "id">

  export type PreclassessOrderByWithAggregationInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
    _count?: PreclassessCountOrderByAggregateInput
    _avg?: PreclassessAvgOrderByAggregateInput
    _max?: PreclassessMaxOrderByAggregateInput
    _min?: PreclassessMinOrderByAggregateInput
    _sum?: PreclassessSumOrderByAggregateInput
  }

  export type PreclassessScalarWhereWithAggregatesInput = {
    AND?: PreclassessScalarWhereWithAggregatesInput | PreclassessScalarWhereWithAggregatesInput[]
    OR?: PreclassessScalarWhereWithAggregatesInput[]
    NOT?: PreclassessScalarWhereWithAggregatesInput | PreclassessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Preclassess"> | number
    CourceName?: StringWithAggregatesFilter<"Preclassess"> | string
    instructor?: StringWithAggregatesFilter<"Preclassess"> | string
    category?: StringWithAggregatesFilter<"Preclassess"> | string
    seats?: StringWithAggregatesFilter<"Preclassess"> | string
    available_seats?: StringWithAggregatesFilter<"Preclassess"> | string
    prerequisite?: StringWithAggregatesFilter<"Preclassess"> | string
    validation?: StringWithAggregatesFilter<"Preclassess"> | string
  }

  export type usersCreateInput = {
    username: string
    password: string
    role: string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: string
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    role: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type courcesCreateInput = {
    name: string
    category: string
    prerequisite: string
  }

  export type courcesUncheckedCreateInput = {
    id?: number
    name: string
    category: string
    prerequisite: string
  }

  export type courcesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
  }

  export type courcesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
  }

  export type courcesCreateManyInput = {
    id?: number
    name: string
    category: string
    prerequisite: string
  }

  export type courcesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
  }

  export type courcesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
  }

  export type regesterationCreateInput = {
    CourceName: string
    instructor: string
    Studentname: string
    grade: string
    status: string
  }

  export type regesterationUncheckedCreateInput = {
    id?: number
    CourceName: string
    instructor: string
    Studentname: string
    grade: string
    status: string
  }

  export type regesterationUpdateInput = {
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    Studentname?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type regesterationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    Studentname?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type regesterationCreateManyInput = {
    id?: number
    CourceName: string
    instructor: string
    Studentname: string
    grade: string
    status: string
  }

  export type regesterationUpdateManyMutationInput = {
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    Studentname?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type regesterationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    Studentname?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type classessCreateInput = {
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
  }

  export type classessUncheckedCreateInput = {
    id?: number
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
  }

  export type classessUpdateInput = {
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type classessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type classessCreateManyInput = {
    id?: number
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
  }

  export type classessUpdateManyMutationInput = {
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type classessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type PreclassessCreateInput = {
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
  }

  export type PreclassessUncheckedCreateInput = {
    id?: number
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
  }

  export type PreclassessUpdateInput = {
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type PreclassessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type PreclassessCreateManyInput = {
    id?: number
    CourceName: string
    instructor: string
    category: string
    seats: string
    available_seats: string
    prerequisite: string
    validation: string
  }

  export type PreclassessUpdateManyMutationInput = {
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type PreclassessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CourceName?: StringFieldUpdateOperationsInput | string
    instructor?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    seats?: StringFieldUpdateOperationsInput | string
    available_seats?: StringFieldUpdateOperationsInput | string
    prerequisite?: StringFieldUpdateOperationsInput | string
    validation?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type courcesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    prerequisite?: SortOrder
  }

  export type courcesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type courcesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    prerequisite?: SortOrder
  }

  export type courcesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    prerequisite?: SortOrder
  }

  export type courcesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type regesterationCountOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    Studentname?: SortOrder
    grade?: SortOrder
    status?: SortOrder
  }

  export type regesterationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type regesterationMaxOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    Studentname?: SortOrder
    grade?: SortOrder
    status?: SortOrder
  }

  export type regesterationMinOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    Studentname?: SortOrder
    grade?: SortOrder
    status?: SortOrder
  }

  export type regesterationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type classessCountOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type classessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type classessMaxOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type classessMinOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type classessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PreclassessCountOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type PreclassessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PreclassessMaxOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type PreclassessMinOrderByAggregateInput = {
    id?: SortOrder
    CourceName?: SortOrder
    instructor?: SortOrder
    category?: SortOrder
    seats?: SortOrder
    available_seats?: SortOrder
    prerequisite?: SortOrder
    validation?: SortOrder
  }

  export type PreclassessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}