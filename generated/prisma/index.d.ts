
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BLPlayer
 * 
 */
export type BLPlayer = $Result.DefaultSelection<Prisma.$BLPlayerPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bLPlayer`: Exposes CRUD operations for the **BLPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BLPlayers
    * const bLPlayers = await prisma.bLPlayer.findMany()
    * ```
    */
  get bLPlayer(): Prisma.BLPlayerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    BLPlayer: 'BLPlayer'
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
      modelProps: "user" | "bLPlayer"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BLPlayer: {
        payload: Prisma.$BLPlayerPayload<ExtArgs>
        fields: Prisma.BLPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BLPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BLPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>
          }
          findFirst: {
            args: Prisma.BLPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BLPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>
          }
          findMany: {
            args: Prisma.BLPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>[]
          }
          create: {
            args: Prisma.BLPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>
          }
          createMany: {
            args: Prisma.BLPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BLPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>[]
          }
          delete: {
            args: Prisma.BLPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>
          }
          update: {
            args: Prisma.BLPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>
          }
          deleteMany: {
            args: Prisma.BLPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BLPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BLPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>[]
          }
          upsert: {
            args: Prisma.BLPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BLPlayerPayload>
          }
          aggregate: {
            args: Prisma.BLPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBLPlayer>
          }
          groupBy: {
            args: Prisma.BLPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BLPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BLPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<BLPlayerCountAggregateOutputType> | number
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
    user?: UserOmit
    bLPlayer?: BLPlayerOmit
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    favBLPlayer: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    favBLPlayer: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    favBLPlayer: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    favBLPlayer?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    favBLPlayer?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    favBLPlayer?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    favBLPlayer: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    favBLPlayer?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    favBLPlayer?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    favBLPlayer?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    favBLPlayer?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "favBLPlayer", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      favBLPlayer: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly favBLPlayer: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model BLPlayer
   */

  export type AggregateBLPlayer = {
    _count: BLPlayerCountAggregateOutputType | null
    _avg: BLPlayerAvgAggregateOutputType | null
    _sum: BLPlayerSumAggregateOutputType | null
    _min: BLPlayerMinAggregateOutputType | null
    _max: BLPlayerMaxAggregateOutputType | null
  }

  export type BLPlayerAvgAggregateOutputType = {
    height: number | null
    shoeSize: number | null
    vision: number | null
  }

  export type BLPlayerSumAggregateOutputType = {
    height: number | null
    shoeSize: number | null
    vision: number | null
  }

  export type BLPlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    birthDate: string | null
    zodiac: string | null
    birthPlace: string | null
    family: string | null
    height: number | null
    shoeSize: number | null
    vision: number | null
    bloodType: string | null
    proTeam: string | null
    domLeg: string | null
    favPlayer: string | null
    startAge: string | null
    motto: string | null
    nickname: string | null
    quality: string | null
    defect: string | null
    favFood: string | null
    hateFood: string | null
    riceSideDish: string | null
    hobbies: string | null
    favSeason: string | null
    favStrong: string | null
    favMovie: string | null
    favColor: string | null
    favFamous: string | null
    favAnimal: string | null
    favSubject: string | null
    hateSubject: string | null
    freqMagazine: string | null
    fetish: string | null
    makesHappy: string | null
    makesSad: string | null
    partnerType: string | null
    firstLoveAge: string | null
    firstConfession: string | null
    valentineChoco: string | null
    sleepTime: string | null
    firstWash: string | null
    alwaysBuy: string | null
    criedRecently: string | null
    disbeliefSanta: string | null
    giftSanta: string | null
    lastDayPlan: string | null
    richPlan: string | null
    weekendPlan: string | null
    altCareer: string | null
    favHistoryChar: string | null
    oneObject: string | null
    timeMachine: string | null
  }

  export type BLPlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    birthDate: string | null
    zodiac: string | null
    birthPlace: string | null
    family: string | null
    height: number | null
    shoeSize: number | null
    vision: number | null
    bloodType: string | null
    proTeam: string | null
    domLeg: string | null
    favPlayer: string | null
    startAge: string | null
    motto: string | null
    nickname: string | null
    quality: string | null
    defect: string | null
    favFood: string | null
    hateFood: string | null
    riceSideDish: string | null
    hobbies: string | null
    favSeason: string | null
    favStrong: string | null
    favMovie: string | null
    favColor: string | null
    favFamous: string | null
    favAnimal: string | null
    favSubject: string | null
    hateSubject: string | null
    freqMagazine: string | null
    fetish: string | null
    makesHappy: string | null
    makesSad: string | null
    partnerType: string | null
    firstLoveAge: string | null
    firstConfession: string | null
    valentineChoco: string | null
    sleepTime: string | null
    firstWash: string | null
    alwaysBuy: string | null
    criedRecently: string | null
    disbeliefSanta: string | null
    giftSanta: string | null
    lastDayPlan: string | null
    richPlan: string | null
    weekendPlan: string | null
    altCareer: string | null
    favHistoryChar: string | null
    oneObject: string | null
    timeMachine: string | null
  }

  export type BLPlayerCountAggregateOutputType = {
    id: number
    name: number
    birthDate: number
    zodiac: number
    birthPlace: number
    family: number
    height: number
    shoeSize: number
    vision: number
    bloodType: number
    proTeam: number
    domLeg: number
    favPlayer: number
    startAge: number
    motto: number
    nickname: number
    quality: number
    defect: number
    favFood: number
    hateFood: number
    riceSideDish: number
    hobbies: number
    favSeason: number
    favStrong: number
    favMovie: number
    favColor: number
    favFamous: number
    favAnimal: number
    favSubject: number
    hateSubject: number
    freqMagazine: number
    fetish: number
    makesHappy: number
    makesSad: number
    partnerType: number
    firstLoveAge: number
    firstConfession: number
    valentineChoco: number
    sleepTime: number
    firstWash: number
    alwaysBuy: number
    criedRecently: number
    disbeliefSanta: number
    giftSanta: number
    lastDayPlan: number
    richPlan: number
    weekendPlan: number
    altCareer: number
    favHistoryChar: number
    oneObject: number
    timeMachine: number
    _all: number
  }


  export type BLPlayerAvgAggregateInputType = {
    height?: true
    shoeSize?: true
    vision?: true
  }

  export type BLPlayerSumAggregateInputType = {
    height?: true
    shoeSize?: true
    vision?: true
  }

  export type BLPlayerMinAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    zodiac?: true
    birthPlace?: true
    family?: true
    height?: true
    shoeSize?: true
    vision?: true
    bloodType?: true
    proTeam?: true
    domLeg?: true
    favPlayer?: true
    startAge?: true
    motto?: true
    nickname?: true
    quality?: true
    defect?: true
    favFood?: true
    hateFood?: true
    riceSideDish?: true
    hobbies?: true
    favSeason?: true
    favStrong?: true
    favMovie?: true
    favColor?: true
    favFamous?: true
    favAnimal?: true
    favSubject?: true
    hateSubject?: true
    freqMagazine?: true
    fetish?: true
    makesHappy?: true
    makesSad?: true
    partnerType?: true
    firstLoveAge?: true
    firstConfession?: true
    valentineChoco?: true
    sleepTime?: true
    firstWash?: true
    alwaysBuy?: true
    criedRecently?: true
    disbeliefSanta?: true
    giftSanta?: true
    lastDayPlan?: true
    richPlan?: true
    weekendPlan?: true
    altCareer?: true
    favHistoryChar?: true
    oneObject?: true
    timeMachine?: true
  }

  export type BLPlayerMaxAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    zodiac?: true
    birthPlace?: true
    family?: true
    height?: true
    shoeSize?: true
    vision?: true
    bloodType?: true
    proTeam?: true
    domLeg?: true
    favPlayer?: true
    startAge?: true
    motto?: true
    nickname?: true
    quality?: true
    defect?: true
    favFood?: true
    hateFood?: true
    riceSideDish?: true
    hobbies?: true
    favSeason?: true
    favStrong?: true
    favMovie?: true
    favColor?: true
    favFamous?: true
    favAnimal?: true
    favSubject?: true
    hateSubject?: true
    freqMagazine?: true
    fetish?: true
    makesHappy?: true
    makesSad?: true
    partnerType?: true
    firstLoveAge?: true
    firstConfession?: true
    valentineChoco?: true
    sleepTime?: true
    firstWash?: true
    alwaysBuy?: true
    criedRecently?: true
    disbeliefSanta?: true
    giftSanta?: true
    lastDayPlan?: true
    richPlan?: true
    weekendPlan?: true
    altCareer?: true
    favHistoryChar?: true
    oneObject?: true
    timeMachine?: true
  }

  export type BLPlayerCountAggregateInputType = {
    id?: true
    name?: true
    birthDate?: true
    zodiac?: true
    birthPlace?: true
    family?: true
    height?: true
    shoeSize?: true
    vision?: true
    bloodType?: true
    proTeam?: true
    domLeg?: true
    favPlayer?: true
    startAge?: true
    motto?: true
    nickname?: true
    quality?: true
    defect?: true
    favFood?: true
    hateFood?: true
    riceSideDish?: true
    hobbies?: true
    favSeason?: true
    favStrong?: true
    favMovie?: true
    favColor?: true
    favFamous?: true
    favAnimal?: true
    favSubject?: true
    hateSubject?: true
    freqMagazine?: true
    fetish?: true
    makesHappy?: true
    makesSad?: true
    partnerType?: true
    firstLoveAge?: true
    firstConfession?: true
    valentineChoco?: true
    sleepTime?: true
    firstWash?: true
    alwaysBuy?: true
    criedRecently?: true
    disbeliefSanta?: true
    giftSanta?: true
    lastDayPlan?: true
    richPlan?: true
    weekendPlan?: true
    altCareer?: true
    favHistoryChar?: true
    oneObject?: true
    timeMachine?: true
    _all?: true
  }

  export type BLPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BLPlayer to aggregate.
     */
    where?: BLPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLPlayers to fetch.
     */
    orderBy?: BLPlayerOrderByWithRelationInput | BLPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BLPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BLPlayers
    **/
    _count?: true | BLPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BLPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BLPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BLPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BLPlayerMaxAggregateInputType
  }

  export type GetBLPlayerAggregateType<T extends BLPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateBLPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBLPlayer[P]>
      : GetScalarType<T[P], AggregateBLPlayer[P]>
  }




  export type BLPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BLPlayerWhereInput
    orderBy?: BLPlayerOrderByWithAggregationInput | BLPlayerOrderByWithAggregationInput[]
    by: BLPlayerScalarFieldEnum[] | BLPlayerScalarFieldEnum
    having?: BLPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BLPlayerCountAggregateInputType | true
    _avg?: BLPlayerAvgAggregateInputType
    _sum?: BLPlayerSumAggregateInputType
    _min?: BLPlayerMinAggregateInputType
    _max?: BLPlayerMaxAggregateInputType
  }

  export type BLPlayerGroupByOutputType = {
    id: string
    name: string
    birthDate: string
    zodiac: string
    birthPlace: string
    family: string
    height: number
    shoeSize: number
    vision: number
    bloodType: string
    proTeam: string
    domLeg: string
    favPlayer: string
    startAge: string
    motto: string
    nickname: string
    quality: string
    defect: string
    favFood: string
    hateFood: string
    riceSideDish: string
    hobbies: string
    favSeason: string
    favStrong: string
    favMovie: string
    favColor: string
    favFamous: string
    favAnimal: string
    favSubject: string
    hateSubject: string
    freqMagazine: string
    fetish: string
    makesHappy: string
    makesSad: string
    partnerType: string
    firstLoveAge: string
    firstConfession: string
    valentineChoco: string
    sleepTime: string
    firstWash: string
    alwaysBuy: string
    criedRecently: string
    disbeliefSanta: string
    giftSanta: string
    lastDayPlan: string
    richPlan: string
    weekendPlan: string
    altCareer: string
    favHistoryChar: string
    oneObject: string
    timeMachine: string
    _count: BLPlayerCountAggregateOutputType | null
    _avg: BLPlayerAvgAggregateOutputType | null
    _sum: BLPlayerSumAggregateOutputType | null
    _min: BLPlayerMinAggregateOutputType | null
    _max: BLPlayerMaxAggregateOutputType | null
  }

  type GetBLPlayerGroupByPayload<T extends BLPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BLPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BLPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BLPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], BLPlayerGroupByOutputType[P]>
        }
      >
    >


  export type BLPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthDate?: boolean
    zodiac?: boolean
    birthPlace?: boolean
    family?: boolean
    height?: boolean
    shoeSize?: boolean
    vision?: boolean
    bloodType?: boolean
    proTeam?: boolean
    domLeg?: boolean
    favPlayer?: boolean
    startAge?: boolean
    motto?: boolean
    nickname?: boolean
    quality?: boolean
    defect?: boolean
    favFood?: boolean
    hateFood?: boolean
    riceSideDish?: boolean
    hobbies?: boolean
    favSeason?: boolean
    favStrong?: boolean
    favMovie?: boolean
    favColor?: boolean
    favFamous?: boolean
    favAnimal?: boolean
    favSubject?: boolean
    hateSubject?: boolean
    freqMagazine?: boolean
    fetish?: boolean
    makesHappy?: boolean
    makesSad?: boolean
    partnerType?: boolean
    firstLoveAge?: boolean
    firstConfession?: boolean
    valentineChoco?: boolean
    sleepTime?: boolean
    firstWash?: boolean
    alwaysBuy?: boolean
    criedRecently?: boolean
    disbeliefSanta?: boolean
    giftSanta?: boolean
    lastDayPlan?: boolean
    richPlan?: boolean
    weekendPlan?: boolean
    altCareer?: boolean
    favHistoryChar?: boolean
    oneObject?: boolean
    timeMachine?: boolean
  }, ExtArgs["result"]["bLPlayer"]>

  export type BLPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthDate?: boolean
    zodiac?: boolean
    birthPlace?: boolean
    family?: boolean
    height?: boolean
    shoeSize?: boolean
    vision?: boolean
    bloodType?: boolean
    proTeam?: boolean
    domLeg?: boolean
    favPlayer?: boolean
    startAge?: boolean
    motto?: boolean
    nickname?: boolean
    quality?: boolean
    defect?: boolean
    favFood?: boolean
    hateFood?: boolean
    riceSideDish?: boolean
    hobbies?: boolean
    favSeason?: boolean
    favStrong?: boolean
    favMovie?: boolean
    favColor?: boolean
    favFamous?: boolean
    favAnimal?: boolean
    favSubject?: boolean
    hateSubject?: boolean
    freqMagazine?: boolean
    fetish?: boolean
    makesHappy?: boolean
    makesSad?: boolean
    partnerType?: boolean
    firstLoveAge?: boolean
    firstConfession?: boolean
    valentineChoco?: boolean
    sleepTime?: boolean
    firstWash?: boolean
    alwaysBuy?: boolean
    criedRecently?: boolean
    disbeliefSanta?: boolean
    giftSanta?: boolean
    lastDayPlan?: boolean
    richPlan?: boolean
    weekendPlan?: boolean
    altCareer?: boolean
    favHistoryChar?: boolean
    oneObject?: boolean
    timeMachine?: boolean
  }, ExtArgs["result"]["bLPlayer"]>

  export type BLPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birthDate?: boolean
    zodiac?: boolean
    birthPlace?: boolean
    family?: boolean
    height?: boolean
    shoeSize?: boolean
    vision?: boolean
    bloodType?: boolean
    proTeam?: boolean
    domLeg?: boolean
    favPlayer?: boolean
    startAge?: boolean
    motto?: boolean
    nickname?: boolean
    quality?: boolean
    defect?: boolean
    favFood?: boolean
    hateFood?: boolean
    riceSideDish?: boolean
    hobbies?: boolean
    favSeason?: boolean
    favStrong?: boolean
    favMovie?: boolean
    favColor?: boolean
    favFamous?: boolean
    favAnimal?: boolean
    favSubject?: boolean
    hateSubject?: boolean
    freqMagazine?: boolean
    fetish?: boolean
    makesHappy?: boolean
    makesSad?: boolean
    partnerType?: boolean
    firstLoveAge?: boolean
    firstConfession?: boolean
    valentineChoco?: boolean
    sleepTime?: boolean
    firstWash?: boolean
    alwaysBuy?: boolean
    criedRecently?: boolean
    disbeliefSanta?: boolean
    giftSanta?: boolean
    lastDayPlan?: boolean
    richPlan?: boolean
    weekendPlan?: boolean
    altCareer?: boolean
    favHistoryChar?: boolean
    oneObject?: boolean
    timeMachine?: boolean
  }, ExtArgs["result"]["bLPlayer"]>

  export type BLPlayerSelectScalar = {
    id?: boolean
    name?: boolean
    birthDate?: boolean
    zodiac?: boolean
    birthPlace?: boolean
    family?: boolean
    height?: boolean
    shoeSize?: boolean
    vision?: boolean
    bloodType?: boolean
    proTeam?: boolean
    domLeg?: boolean
    favPlayer?: boolean
    startAge?: boolean
    motto?: boolean
    nickname?: boolean
    quality?: boolean
    defect?: boolean
    favFood?: boolean
    hateFood?: boolean
    riceSideDish?: boolean
    hobbies?: boolean
    favSeason?: boolean
    favStrong?: boolean
    favMovie?: boolean
    favColor?: boolean
    favFamous?: boolean
    favAnimal?: boolean
    favSubject?: boolean
    hateSubject?: boolean
    freqMagazine?: boolean
    fetish?: boolean
    makesHappy?: boolean
    makesSad?: boolean
    partnerType?: boolean
    firstLoveAge?: boolean
    firstConfession?: boolean
    valentineChoco?: boolean
    sleepTime?: boolean
    firstWash?: boolean
    alwaysBuy?: boolean
    criedRecently?: boolean
    disbeliefSanta?: boolean
    giftSanta?: boolean
    lastDayPlan?: boolean
    richPlan?: boolean
    weekendPlan?: boolean
    altCareer?: boolean
    favHistoryChar?: boolean
    oneObject?: boolean
    timeMachine?: boolean
  }

  export type BLPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birthDate" | "zodiac" | "birthPlace" | "family" | "height" | "shoeSize" | "vision" | "bloodType" | "proTeam" | "domLeg" | "favPlayer" | "startAge" | "motto" | "nickname" | "quality" | "defect" | "favFood" | "hateFood" | "riceSideDish" | "hobbies" | "favSeason" | "favStrong" | "favMovie" | "favColor" | "favFamous" | "favAnimal" | "favSubject" | "hateSubject" | "freqMagazine" | "fetish" | "makesHappy" | "makesSad" | "partnerType" | "firstLoveAge" | "firstConfession" | "valentineChoco" | "sleepTime" | "firstWash" | "alwaysBuy" | "criedRecently" | "disbeliefSanta" | "giftSanta" | "lastDayPlan" | "richPlan" | "weekendPlan" | "altCareer" | "favHistoryChar" | "oneObject" | "timeMachine", ExtArgs["result"]["bLPlayer"]>

  export type $BLPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BLPlayer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      birthDate: string
      zodiac: string
      birthPlace: string
      family: string
      height: number
      shoeSize: number
      vision: number
      bloodType: string
      proTeam: string
      domLeg: string
      favPlayer: string
      startAge: string
      motto: string
      nickname: string
      quality: string
      defect: string
      favFood: string
      hateFood: string
      riceSideDish: string
      hobbies: string
      favSeason: string
      favStrong: string
      favMovie: string
      favColor: string
      favFamous: string
      favAnimal: string
      favSubject: string
      hateSubject: string
      freqMagazine: string
      fetish: string
      makesHappy: string
      makesSad: string
      partnerType: string
      firstLoveAge: string
      firstConfession: string
      valentineChoco: string
      sleepTime: string
      firstWash: string
      alwaysBuy: string
      criedRecently: string
      disbeliefSanta: string
      giftSanta: string
      lastDayPlan: string
      richPlan: string
      weekendPlan: string
      altCareer: string
      favHistoryChar: string
      oneObject: string
      timeMachine: string
    }, ExtArgs["result"]["bLPlayer"]>
    composites: {}
  }

  type BLPlayerGetPayload<S extends boolean | null | undefined | BLPlayerDefaultArgs> = $Result.GetResult<Prisma.$BLPlayerPayload, S>

  type BLPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BLPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BLPlayerCountAggregateInputType | true
    }

  export interface BLPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BLPlayer'], meta: { name: 'BLPlayer' } }
    /**
     * Find zero or one BLPlayer that matches the filter.
     * @param {BLPlayerFindUniqueArgs} args - Arguments to find a BLPlayer
     * @example
     * // Get one BLPlayer
     * const bLPlayer = await prisma.bLPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BLPlayerFindUniqueArgs>(args: SelectSubset<T, BLPlayerFindUniqueArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BLPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BLPlayerFindUniqueOrThrowArgs} args - Arguments to find a BLPlayer
     * @example
     * // Get one BLPlayer
     * const bLPlayer = await prisma.bLPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BLPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, BLPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BLPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerFindFirstArgs} args - Arguments to find a BLPlayer
     * @example
     * // Get one BLPlayer
     * const bLPlayer = await prisma.bLPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BLPlayerFindFirstArgs>(args?: SelectSubset<T, BLPlayerFindFirstArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BLPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerFindFirstOrThrowArgs} args - Arguments to find a BLPlayer
     * @example
     * // Get one BLPlayer
     * const bLPlayer = await prisma.bLPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BLPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, BLPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BLPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BLPlayers
     * const bLPlayers = await prisma.bLPlayer.findMany()
     * 
     * // Get first 10 BLPlayers
     * const bLPlayers = await prisma.bLPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bLPlayerWithIdOnly = await prisma.bLPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BLPlayerFindManyArgs>(args?: SelectSubset<T, BLPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BLPlayer.
     * @param {BLPlayerCreateArgs} args - Arguments to create a BLPlayer.
     * @example
     * // Create one BLPlayer
     * const BLPlayer = await prisma.bLPlayer.create({
     *   data: {
     *     // ... data to create a BLPlayer
     *   }
     * })
     * 
     */
    create<T extends BLPlayerCreateArgs>(args: SelectSubset<T, BLPlayerCreateArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BLPlayers.
     * @param {BLPlayerCreateManyArgs} args - Arguments to create many BLPlayers.
     * @example
     * // Create many BLPlayers
     * const bLPlayer = await prisma.bLPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BLPlayerCreateManyArgs>(args?: SelectSubset<T, BLPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BLPlayers and returns the data saved in the database.
     * @param {BLPlayerCreateManyAndReturnArgs} args - Arguments to create many BLPlayers.
     * @example
     * // Create many BLPlayers
     * const bLPlayer = await prisma.bLPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BLPlayers and only return the `id`
     * const bLPlayerWithIdOnly = await prisma.bLPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BLPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, BLPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BLPlayer.
     * @param {BLPlayerDeleteArgs} args - Arguments to delete one BLPlayer.
     * @example
     * // Delete one BLPlayer
     * const BLPlayer = await prisma.bLPlayer.delete({
     *   where: {
     *     // ... filter to delete one BLPlayer
     *   }
     * })
     * 
     */
    delete<T extends BLPlayerDeleteArgs>(args: SelectSubset<T, BLPlayerDeleteArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BLPlayer.
     * @param {BLPlayerUpdateArgs} args - Arguments to update one BLPlayer.
     * @example
     * // Update one BLPlayer
     * const bLPlayer = await prisma.bLPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BLPlayerUpdateArgs>(args: SelectSubset<T, BLPlayerUpdateArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BLPlayers.
     * @param {BLPlayerDeleteManyArgs} args - Arguments to filter BLPlayers to delete.
     * @example
     * // Delete a few BLPlayers
     * const { count } = await prisma.bLPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BLPlayerDeleteManyArgs>(args?: SelectSubset<T, BLPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BLPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BLPlayers
     * const bLPlayer = await prisma.bLPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BLPlayerUpdateManyArgs>(args: SelectSubset<T, BLPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BLPlayers and returns the data updated in the database.
     * @param {BLPlayerUpdateManyAndReturnArgs} args - Arguments to update many BLPlayers.
     * @example
     * // Update many BLPlayers
     * const bLPlayer = await prisma.bLPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BLPlayers and only return the `id`
     * const bLPlayerWithIdOnly = await prisma.bLPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends BLPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, BLPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BLPlayer.
     * @param {BLPlayerUpsertArgs} args - Arguments to update or create a BLPlayer.
     * @example
     * // Update or create a BLPlayer
     * const bLPlayer = await prisma.bLPlayer.upsert({
     *   create: {
     *     // ... data to create a BLPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BLPlayer we want to update
     *   }
     * })
     */
    upsert<T extends BLPlayerUpsertArgs>(args: SelectSubset<T, BLPlayerUpsertArgs<ExtArgs>>): Prisma__BLPlayerClient<$Result.GetResult<Prisma.$BLPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BLPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerCountArgs} args - Arguments to filter BLPlayers to count.
     * @example
     * // Count the number of BLPlayers
     * const count = await prisma.bLPlayer.count({
     *   where: {
     *     // ... the filter for the BLPlayers we want to count
     *   }
     * })
    **/
    count<T extends BLPlayerCountArgs>(
      args?: Subset<T, BLPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BLPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BLPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BLPlayerAggregateArgs>(args: Subset<T, BLPlayerAggregateArgs>): Prisma.PrismaPromise<GetBLPlayerAggregateType<T>>

    /**
     * Group by BLPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BLPlayerGroupByArgs} args - Group by arguments.
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
      T extends BLPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BLPlayerGroupByArgs['orderBy'] }
        : { orderBy?: BLPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BLPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBLPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BLPlayer model
   */
  readonly fields: BLPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BLPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BLPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BLPlayer model
   */
  interface BLPlayerFieldRefs {
    readonly id: FieldRef<"BLPlayer", 'String'>
    readonly name: FieldRef<"BLPlayer", 'String'>
    readonly birthDate: FieldRef<"BLPlayer", 'String'>
    readonly zodiac: FieldRef<"BLPlayer", 'String'>
    readonly birthPlace: FieldRef<"BLPlayer", 'String'>
    readonly family: FieldRef<"BLPlayer", 'String'>
    readonly height: FieldRef<"BLPlayer", 'Float'>
    readonly shoeSize: FieldRef<"BLPlayer", 'Int'>
    readonly vision: FieldRef<"BLPlayer", 'Float'>
    readonly bloodType: FieldRef<"BLPlayer", 'String'>
    readonly proTeam: FieldRef<"BLPlayer", 'String'>
    readonly domLeg: FieldRef<"BLPlayer", 'String'>
    readonly favPlayer: FieldRef<"BLPlayer", 'String'>
    readonly startAge: FieldRef<"BLPlayer", 'String'>
    readonly motto: FieldRef<"BLPlayer", 'String'>
    readonly nickname: FieldRef<"BLPlayer", 'String'>
    readonly quality: FieldRef<"BLPlayer", 'String'>
    readonly defect: FieldRef<"BLPlayer", 'String'>
    readonly favFood: FieldRef<"BLPlayer", 'String'>
    readonly hateFood: FieldRef<"BLPlayer", 'String'>
    readonly riceSideDish: FieldRef<"BLPlayer", 'String'>
    readonly hobbies: FieldRef<"BLPlayer", 'String'>
    readonly favSeason: FieldRef<"BLPlayer", 'String'>
    readonly favStrong: FieldRef<"BLPlayer", 'String'>
    readonly favMovie: FieldRef<"BLPlayer", 'String'>
    readonly favColor: FieldRef<"BLPlayer", 'String'>
    readonly favFamous: FieldRef<"BLPlayer", 'String'>
    readonly favAnimal: FieldRef<"BLPlayer", 'String'>
    readonly favSubject: FieldRef<"BLPlayer", 'String'>
    readonly hateSubject: FieldRef<"BLPlayer", 'String'>
    readonly freqMagazine: FieldRef<"BLPlayer", 'String'>
    readonly fetish: FieldRef<"BLPlayer", 'String'>
    readonly makesHappy: FieldRef<"BLPlayer", 'String'>
    readonly makesSad: FieldRef<"BLPlayer", 'String'>
    readonly partnerType: FieldRef<"BLPlayer", 'String'>
    readonly firstLoveAge: FieldRef<"BLPlayer", 'String'>
    readonly firstConfession: FieldRef<"BLPlayer", 'String'>
    readonly valentineChoco: FieldRef<"BLPlayer", 'String'>
    readonly sleepTime: FieldRef<"BLPlayer", 'String'>
    readonly firstWash: FieldRef<"BLPlayer", 'String'>
    readonly alwaysBuy: FieldRef<"BLPlayer", 'String'>
    readonly criedRecently: FieldRef<"BLPlayer", 'String'>
    readonly disbeliefSanta: FieldRef<"BLPlayer", 'String'>
    readonly giftSanta: FieldRef<"BLPlayer", 'String'>
    readonly lastDayPlan: FieldRef<"BLPlayer", 'String'>
    readonly richPlan: FieldRef<"BLPlayer", 'String'>
    readonly weekendPlan: FieldRef<"BLPlayer", 'String'>
    readonly altCareer: FieldRef<"BLPlayer", 'String'>
    readonly favHistoryChar: FieldRef<"BLPlayer", 'String'>
    readonly oneObject: FieldRef<"BLPlayer", 'String'>
    readonly timeMachine: FieldRef<"BLPlayer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BLPlayer findUnique
   */
  export type BLPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * Filter, which BLPlayer to fetch.
     */
    where: BLPlayerWhereUniqueInput
  }

  /**
   * BLPlayer findUniqueOrThrow
   */
  export type BLPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * Filter, which BLPlayer to fetch.
     */
    where: BLPlayerWhereUniqueInput
  }

  /**
   * BLPlayer findFirst
   */
  export type BLPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * Filter, which BLPlayer to fetch.
     */
    where?: BLPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLPlayers to fetch.
     */
    orderBy?: BLPlayerOrderByWithRelationInput | BLPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BLPlayers.
     */
    cursor?: BLPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BLPlayers.
     */
    distinct?: BLPlayerScalarFieldEnum | BLPlayerScalarFieldEnum[]
  }

  /**
   * BLPlayer findFirstOrThrow
   */
  export type BLPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * Filter, which BLPlayer to fetch.
     */
    where?: BLPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLPlayers to fetch.
     */
    orderBy?: BLPlayerOrderByWithRelationInput | BLPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BLPlayers.
     */
    cursor?: BLPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BLPlayers.
     */
    distinct?: BLPlayerScalarFieldEnum | BLPlayerScalarFieldEnum[]
  }

  /**
   * BLPlayer findMany
   */
  export type BLPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * Filter, which BLPlayers to fetch.
     */
    where?: BLPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BLPlayers to fetch.
     */
    orderBy?: BLPlayerOrderByWithRelationInput | BLPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BLPlayers.
     */
    cursor?: BLPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BLPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BLPlayers.
     */
    skip?: number
    distinct?: BLPlayerScalarFieldEnum | BLPlayerScalarFieldEnum[]
  }

  /**
   * BLPlayer create
   */
  export type BLPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * The data needed to create a BLPlayer.
     */
    data: XOR<BLPlayerCreateInput, BLPlayerUncheckedCreateInput>
  }

  /**
   * BLPlayer createMany
   */
  export type BLPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BLPlayers.
     */
    data: BLPlayerCreateManyInput | BLPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BLPlayer createManyAndReturn
   */
  export type BLPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many BLPlayers.
     */
    data: BLPlayerCreateManyInput | BLPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BLPlayer update
   */
  export type BLPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * The data needed to update a BLPlayer.
     */
    data: XOR<BLPlayerUpdateInput, BLPlayerUncheckedUpdateInput>
    /**
     * Choose, which BLPlayer to update.
     */
    where: BLPlayerWhereUniqueInput
  }

  /**
   * BLPlayer updateMany
   */
  export type BLPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BLPlayers.
     */
    data: XOR<BLPlayerUpdateManyMutationInput, BLPlayerUncheckedUpdateManyInput>
    /**
     * Filter which BLPlayers to update
     */
    where?: BLPlayerWhereInput
    /**
     * Limit how many BLPlayers to update.
     */
    limit?: number
  }

  /**
   * BLPlayer updateManyAndReturn
   */
  export type BLPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * The data used to update BLPlayers.
     */
    data: XOR<BLPlayerUpdateManyMutationInput, BLPlayerUncheckedUpdateManyInput>
    /**
     * Filter which BLPlayers to update
     */
    where?: BLPlayerWhereInput
    /**
     * Limit how many BLPlayers to update.
     */
    limit?: number
  }

  /**
   * BLPlayer upsert
   */
  export type BLPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * The filter to search for the BLPlayer to update in case it exists.
     */
    where: BLPlayerWhereUniqueInput
    /**
     * In case the BLPlayer found by the `where` argument doesn't exist, create a new BLPlayer with this data.
     */
    create: XOR<BLPlayerCreateInput, BLPlayerUncheckedCreateInput>
    /**
     * In case the BLPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BLPlayerUpdateInput, BLPlayerUncheckedUpdateInput>
  }

  /**
   * BLPlayer delete
   */
  export type BLPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
    /**
     * Filter which BLPlayer to delete.
     */
    where: BLPlayerWhereUniqueInput
  }

  /**
   * BLPlayer deleteMany
   */
  export type BLPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BLPlayers to delete
     */
    where?: BLPlayerWhereInput
    /**
     * Limit how many BLPlayers to delete.
     */
    limit?: number
  }

  /**
   * BLPlayer without action
   */
  export type BLPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BLPlayer
     */
    select?: BLPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BLPlayer
     */
    omit?: BLPlayerOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    favBLPlayer: 'favBLPlayer'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BLPlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birthDate: 'birthDate',
    zodiac: 'zodiac',
    birthPlace: 'birthPlace',
    family: 'family',
    height: 'height',
    shoeSize: 'shoeSize',
    vision: 'vision',
    bloodType: 'bloodType',
    proTeam: 'proTeam',
    domLeg: 'domLeg',
    favPlayer: 'favPlayer',
    startAge: 'startAge',
    motto: 'motto',
    nickname: 'nickname',
    quality: 'quality',
    defect: 'defect',
    favFood: 'favFood',
    hateFood: 'hateFood',
    riceSideDish: 'riceSideDish',
    hobbies: 'hobbies',
    favSeason: 'favSeason',
    favStrong: 'favStrong',
    favMovie: 'favMovie',
    favColor: 'favColor',
    favFamous: 'favFamous',
    favAnimal: 'favAnimal',
    favSubject: 'favSubject',
    hateSubject: 'hateSubject',
    freqMagazine: 'freqMagazine',
    fetish: 'fetish',
    makesHappy: 'makesHappy',
    makesSad: 'makesSad',
    partnerType: 'partnerType',
    firstLoveAge: 'firstLoveAge',
    firstConfession: 'firstConfession',
    valentineChoco: 'valentineChoco',
    sleepTime: 'sleepTime',
    firstWash: 'firstWash',
    alwaysBuy: 'alwaysBuy',
    criedRecently: 'criedRecently',
    disbeliefSanta: 'disbeliefSanta',
    giftSanta: 'giftSanta',
    lastDayPlan: 'lastDayPlan',
    richPlan: 'richPlan',
    weekendPlan: 'weekendPlan',
    altCareer: 'altCareer',
    favHistoryChar: 'favHistoryChar',
    oneObject: 'oneObject',
    timeMachine: 'timeMachine'
  };

  export type BLPlayerScalarFieldEnum = (typeof BLPlayerScalarFieldEnum)[keyof typeof BLPlayerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    favBLPlayer?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    favBLPlayer?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    favBLPlayer?: StringNullableFilter<"User"> | string | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    favBLPlayer?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    favBLPlayer?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type BLPlayerWhereInput = {
    AND?: BLPlayerWhereInput | BLPlayerWhereInput[]
    OR?: BLPlayerWhereInput[]
    NOT?: BLPlayerWhereInput | BLPlayerWhereInput[]
    id?: StringFilter<"BLPlayer"> | string
    name?: StringFilter<"BLPlayer"> | string
    birthDate?: StringFilter<"BLPlayer"> | string
    zodiac?: StringFilter<"BLPlayer"> | string
    birthPlace?: StringFilter<"BLPlayer"> | string
    family?: StringFilter<"BLPlayer"> | string
    height?: FloatFilter<"BLPlayer"> | number
    shoeSize?: IntFilter<"BLPlayer"> | number
    vision?: FloatFilter<"BLPlayer"> | number
    bloodType?: StringFilter<"BLPlayer"> | string
    proTeam?: StringFilter<"BLPlayer"> | string
    domLeg?: StringFilter<"BLPlayer"> | string
    favPlayer?: StringFilter<"BLPlayer"> | string
    startAge?: StringFilter<"BLPlayer"> | string
    motto?: StringFilter<"BLPlayer"> | string
    nickname?: StringFilter<"BLPlayer"> | string
    quality?: StringFilter<"BLPlayer"> | string
    defect?: StringFilter<"BLPlayer"> | string
    favFood?: StringFilter<"BLPlayer"> | string
    hateFood?: StringFilter<"BLPlayer"> | string
    riceSideDish?: StringFilter<"BLPlayer"> | string
    hobbies?: StringFilter<"BLPlayer"> | string
    favSeason?: StringFilter<"BLPlayer"> | string
    favStrong?: StringFilter<"BLPlayer"> | string
    favMovie?: StringFilter<"BLPlayer"> | string
    favColor?: StringFilter<"BLPlayer"> | string
    favFamous?: StringFilter<"BLPlayer"> | string
    favAnimal?: StringFilter<"BLPlayer"> | string
    favSubject?: StringFilter<"BLPlayer"> | string
    hateSubject?: StringFilter<"BLPlayer"> | string
    freqMagazine?: StringFilter<"BLPlayer"> | string
    fetish?: StringFilter<"BLPlayer"> | string
    makesHappy?: StringFilter<"BLPlayer"> | string
    makesSad?: StringFilter<"BLPlayer"> | string
    partnerType?: StringFilter<"BLPlayer"> | string
    firstLoveAge?: StringFilter<"BLPlayer"> | string
    firstConfession?: StringFilter<"BLPlayer"> | string
    valentineChoco?: StringFilter<"BLPlayer"> | string
    sleepTime?: StringFilter<"BLPlayer"> | string
    firstWash?: StringFilter<"BLPlayer"> | string
    alwaysBuy?: StringFilter<"BLPlayer"> | string
    criedRecently?: StringFilter<"BLPlayer"> | string
    disbeliefSanta?: StringFilter<"BLPlayer"> | string
    giftSanta?: StringFilter<"BLPlayer"> | string
    lastDayPlan?: StringFilter<"BLPlayer"> | string
    richPlan?: StringFilter<"BLPlayer"> | string
    weekendPlan?: StringFilter<"BLPlayer"> | string
    altCareer?: StringFilter<"BLPlayer"> | string
    favHistoryChar?: StringFilter<"BLPlayer"> | string
    oneObject?: StringFilter<"BLPlayer"> | string
    timeMachine?: StringFilter<"BLPlayer"> | string
  }

  export type BLPlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    zodiac?: SortOrder
    birthPlace?: SortOrder
    family?: SortOrder
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
    bloodType?: SortOrder
    proTeam?: SortOrder
    domLeg?: SortOrder
    favPlayer?: SortOrder
    startAge?: SortOrder
    motto?: SortOrder
    nickname?: SortOrder
    quality?: SortOrder
    defect?: SortOrder
    favFood?: SortOrder
    hateFood?: SortOrder
    riceSideDish?: SortOrder
    hobbies?: SortOrder
    favSeason?: SortOrder
    favStrong?: SortOrder
    favMovie?: SortOrder
    favColor?: SortOrder
    favFamous?: SortOrder
    favAnimal?: SortOrder
    favSubject?: SortOrder
    hateSubject?: SortOrder
    freqMagazine?: SortOrder
    fetish?: SortOrder
    makesHappy?: SortOrder
    makesSad?: SortOrder
    partnerType?: SortOrder
    firstLoveAge?: SortOrder
    firstConfession?: SortOrder
    valentineChoco?: SortOrder
    sleepTime?: SortOrder
    firstWash?: SortOrder
    alwaysBuy?: SortOrder
    criedRecently?: SortOrder
    disbeliefSanta?: SortOrder
    giftSanta?: SortOrder
    lastDayPlan?: SortOrder
    richPlan?: SortOrder
    weekendPlan?: SortOrder
    altCareer?: SortOrder
    favHistoryChar?: SortOrder
    oneObject?: SortOrder
    timeMachine?: SortOrder
  }

  export type BLPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BLPlayerWhereInput | BLPlayerWhereInput[]
    OR?: BLPlayerWhereInput[]
    NOT?: BLPlayerWhereInput | BLPlayerWhereInput[]
    name?: StringFilter<"BLPlayer"> | string
    birthDate?: StringFilter<"BLPlayer"> | string
    zodiac?: StringFilter<"BLPlayer"> | string
    birthPlace?: StringFilter<"BLPlayer"> | string
    family?: StringFilter<"BLPlayer"> | string
    height?: FloatFilter<"BLPlayer"> | number
    shoeSize?: IntFilter<"BLPlayer"> | number
    vision?: FloatFilter<"BLPlayer"> | number
    bloodType?: StringFilter<"BLPlayer"> | string
    proTeam?: StringFilter<"BLPlayer"> | string
    domLeg?: StringFilter<"BLPlayer"> | string
    favPlayer?: StringFilter<"BLPlayer"> | string
    startAge?: StringFilter<"BLPlayer"> | string
    motto?: StringFilter<"BLPlayer"> | string
    nickname?: StringFilter<"BLPlayer"> | string
    quality?: StringFilter<"BLPlayer"> | string
    defect?: StringFilter<"BLPlayer"> | string
    favFood?: StringFilter<"BLPlayer"> | string
    hateFood?: StringFilter<"BLPlayer"> | string
    riceSideDish?: StringFilter<"BLPlayer"> | string
    hobbies?: StringFilter<"BLPlayer"> | string
    favSeason?: StringFilter<"BLPlayer"> | string
    favStrong?: StringFilter<"BLPlayer"> | string
    favMovie?: StringFilter<"BLPlayer"> | string
    favColor?: StringFilter<"BLPlayer"> | string
    favFamous?: StringFilter<"BLPlayer"> | string
    favAnimal?: StringFilter<"BLPlayer"> | string
    favSubject?: StringFilter<"BLPlayer"> | string
    hateSubject?: StringFilter<"BLPlayer"> | string
    freqMagazine?: StringFilter<"BLPlayer"> | string
    fetish?: StringFilter<"BLPlayer"> | string
    makesHappy?: StringFilter<"BLPlayer"> | string
    makesSad?: StringFilter<"BLPlayer"> | string
    partnerType?: StringFilter<"BLPlayer"> | string
    firstLoveAge?: StringFilter<"BLPlayer"> | string
    firstConfession?: StringFilter<"BLPlayer"> | string
    valentineChoco?: StringFilter<"BLPlayer"> | string
    sleepTime?: StringFilter<"BLPlayer"> | string
    firstWash?: StringFilter<"BLPlayer"> | string
    alwaysBuy?: StringFilter<"BLPlayer"> | string
    criedRecently?: StringFilter<"BLPlayer"> | string
    disbeliefSanta?: StringFilter<"BLPlayer"> | string
    giftSanta?: StringFilter<"BLPlayer"> | string
    lastDayPlan?: StringFilter<"BLPlayer"> | string
    richPlan?: StringFilter<"BLPlayer"> | string
    weekendPlan?: StringFilter<"BLPlayer"> | string
    altCareer?: StringFilter<"BLPlayer"> | string
    favHistoryChar?: StringFilter<"BLPlayer"> | string
    oneObject?: StringFilter<"BLPlayer"> | string
    timeMachine?: StringFilter<"BLPlayer"> | string
  }, "id">

  export type BLPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    zodiac?: SortOrder
    birthPlace?: SortOrder
    family?: SortOrder
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
    bloodType?: SortOrder
    proTeam?: SortOrder
    domLeg?: SortOrder
    favPlayer?: SortOrder
    startAge?: SortOrder
    motto?: SortOrder
    nickname?: SortOrder
    quality?: SortOrder
    defect?: SortOrder
    favFood?: SortOrder
    hateFood?: SortOrder
    riceSideDish?: SortOrder
    hobbies?: SortOrder
    favSeason?: SortOrder
    favStrong?: SortOrder
    favMovie?: SortOrder
    favColor?: SortOrder
    favFamous?: SortOrder
    favAnimal?: SortOrder
    favSubject?: SortOrder
    hateSubject?: SortOrder
    freqMagazine?: SortOrder
    fetish?: SortOrder
    makesHappy?: SortOrder
    makesSad?: SortOrder
    partnerType?: SortOrder
    firstLoveAge?: SortOrder
    firstConfession?: SortOrder
    valentineChoco?: SortOrder
    sleepTime?: SortOrder
    firstWash?: SortOrder
    alwaysBuy?: SortOrder
    criedRecently?: SortOrder
    disbeliefSanta?: SortOrder
    giftSanta?: SortOrder
    lastDayPlan?: SortOrder
    richPlan?: SortOrder
    weekendPlan?: SortOrder
    altCareer?: SortOrder
    favHistoryChar?: SortOrder
    oneObject?: SortOrder
    timeMachine?: SortOrder
    _count?: BLPlayerCountOrderByAggregateInput
    _avg?: BLPlayerAvgOrderByAggregateInput
    _max?: BLPlayerMaxOrderByAggregateInput
    _min?: BLPlayerMinOrderByAggregateInput
    _sum?: BLPlayerSumOrderByAggregateInput
  }

  export type BLPlayerScalarWhereWithAggregatesInput = {
    AND?: BLPlayerScalarWhereWithAggregatesInput | BLPlayerScalarWhereWithAggregatesInput[]
    OR?: BLPlayerScalarWhereWithAggregatesInput[]
    NOT?: BLPlayerScalarWhereWithAggregatesInput | BLPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BLPlayer"> | string
    name?: StringWithAggregatesFilter<"BLPlayer"> | string
    birthDate?: StringWithAggregatesFilter<"BLPlayer"> | string
    zodiac?: StringWithAggregatesFilter<"BLPlayer"> | string
    birthPlace?: StringWithAggregatesFilter<"BLPlayer"> | string
    family?: StringWithAggregatesFilter<"BLPlayer"> | string
    height?: FloatWithAggregatesFilter<"BLPlayer"> | number
    shoeSize?: IntWithAggregatesFilter<"BLPlayer"> | number
    vision?: FloatWithAggregatesFilter<"BLPlayer"> | number
    bloodType?: StringWithAggregatesFilter<"BLPlayer"> | string
    proTeam?: StringWithAggregatesFilter<"BLPlayer"> | string
    domLeg?: StringWithAggregatesFilter<"BLPlayer"> | string
    favPlayer?: StringWithAggregatesFilter<"BLPlayer"> | string
    startAge?: StringWithAggregatesFilter<"BLPlayer"> | string
    motto?: StringWithAggregatesFilter<"BLPlayer"> | string
    nickname?: StringWithAggregatesFilter<"BLPlayer"> | string
    quality?: StringWithAggregatesFilter<"BLPlayer"> | string
    defect?: StringWithAggregatesFilter<"BLPlayer"> | string
    favFood?: StringWithAggregatesFilter<"BLPlayer"> | string
    hateFood?: StringWithAggregatesFilter<"BLPlayer"> | string
    riceSideDish?: StringWithAggregatesFilter<"BLPlayer"> | string
    hobbies?: StringWithAggregatesFilter<"BLPlayer"> | string
    favSeason?: StringWithAggregatesFilter<"BLPlayer"> | string
    favStrong?: StringWithAggregatesFilter<"BLPlayer"> | string
    favMovie?: StringWithAggregatesFilter<"BLPlayer"> | string
    favColor?: StringWithAggregatesFilter<"BLPlayer"> | string
    favFamous?: StringWithAggregatesFilter<"BLPlayer"> | string
    favAnimal?: StringWithAggregatesFilter<"BLPlayer"> | string
    favSubject?: StringWithAggregatesFilter<"BLPlayer"> | string
    hateSubject?: StringWithAggregatesFilter<"BLPlayer"> | string
    freqMagazine?: StringWithAggregatesFilter<"BLPlayer"> | string
    fetish?: StringWithAggregatesFilter<"BLPlayer"> | string
    makesHappy?: StringWithAggregatesFilter<"BLPlayer"> | string
    makesSad?: StringWithAggregatesFilter<"BLPlayer"> | string
    partnerType?: StringWithAggregatesFilter<"BLPlayer"> | string
    firstLoveAge?: StringWithAggregatesFilter<"BLPlayer"> | string
    firstConfession?: StringWithAggregatesFilter<"BLPlayer"> | string
    valentineChoco?: StringWithAggregatesFilter<"BLPlayer"> | string
    sleepTime?: StringWithAggregatesFilter<"BLPlayer"> | string
    firstWash?: StringWithAggregatesFilter<"BLPlayer"> | string
    alwaysBuy?: StringWithAggregatesFilter<"BLPlayer"> | string
    criedRecently?: StringWithAggregatesFilter<"BLPlayer"> | string
    disbeliefSanta?: StringWithAggregatesFilter<"BLPlayer"> | string
    giftSanta?: StringWithAggregatesFilter<"BLPlayer"> | string
    lastDayPlan?: StringWithAggregatesFilter<"BLPlayer"> | string
    richPlan?: StringWithAggregatesFilter<"BLPlayer"> | string
    weekendPlan?: StringWithAggregatesFilter<"BLPlayer"> | string
    altCareer?: StringWithAggregatesFilter<"BLPlayer"> | string
    favHistoryChar?: StringWithAggregatesFilter<"BLPlayer"> | string
    oneObject?: StringWithAggregatesFilter<"BLPlayer"> | string
    timeMachine?: StringWithAggregatesFilter<"BLPlayer"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    favBLPlayer?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    favBLPlayer?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    favBLPlayer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    favBLPlayer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    favBLPlayer?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    favBLPlayer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    favBLPlayer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BLPlayerCreateInput = {
    id?: string
    name: string
    birthDate: string
    zodiac: string
    birthPlace: string
    family: string
    height: number
    shoeSize: number
    vision: number
    bloodType: string
    proTeam: string
    domLeg: string
    favPlayer: string
    startAge: string
    motto: string
    nickname: string
    quality: string
    defect: string
    favFood: string
    hateFood: string
    riceSideDish: string
    hobbies: string
    favSeason: string
    favStrong: string
    favMovie: string
    favColor: string
    favFamous: string
    favAnimal: string
    favSubject: string
    hateSubject: string
    freqMagazine: string
    fetish: string
    makesHappy: string
    makesSad: string
    partnerType: string
    firstLoveAge: string
    firstConfession: string
    valentineChoco: string
    sleepTime: string
    firstWash: string
    alwaysBuy: string
    criedRecently: string
    disbeliefSanta: string
    giftSanta: string
    lastDayPlan: string
    richPlan: string
    weekendPlan: string
    altCareer: string
    favHistoryChar: string
    oneObject: string
    timeMachine: string
  }

  export type BLPlayerUncheckedCreateInput = {
    id?: string
    name: string
    birthDate: string
    zodiac: string
    birthPlace: string
    family: string
    height: number
    shoeSize: number
    vision: number
    bloodType: string
    proTeam: string
    domLeg: string
    favPlayer: string
    startAge: string
    motto: string
    nickname: string
    quality: string
    defect: string
    favFood: string
    hateFood: string
    riceSideDish: string
    hobbies: string
    favSeason: string
    favStrong: string
    favMovie: string
    favColor: string
    favFamous: string
    favAnimal: string
    favSubject: string
    hateSubject: string
    freqMagazine: string
    fetish: string
    makesHappy: string
    makesSad: string
    partnerType: string
    firstLoveAge: string
    firstConfession: string
    valentineChoco: string
    sleepTime: string
    firstWash: string
    alwaysBuy: string
    criedRecently: string
    disbeliefSanta: string
    giftSanta: string
    lastDayPlan: string
    richPlan: string
    weekendPlan: string
    altCareer: string
    favHistoryChar: string
    oneObject: string
    timeMachine: string
  }

  export type BLPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    zodiac?: StringFieldUpdateOperationsInput | string
    birthPlace?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    shoeSize?: IntFieldUpdateOperationsInput | number
    vision?: FloatFieldUpdateOperationsInput | number
    bloodType?: StringFieldUpdateOperationsInput | string
    proTeam?: StringFieldUpdateOperationsInput | string
    domLeg?: StringFieldUpdateOperationsInput | string
    favPlayer?: StringFieldUpdateOperationsInput | string
    startAge?: StringFieldUpdateOperationsInput | string
    motto?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    favFood?: StringFieldUpdateOperationsInput | string
    hateFood?: StringFieldUpdateOperationsInput | string
    riceSideDish?: StringFieldUpdateOperationsInput | string
    hobbies?: StringFieldUpdateOperationsInput | string
    favSeason?: StringFieldUpdateOperationsInput | string
    favStrong?: StringFieldUpdateOperationsInput | string
    favMovie?: StringFieldUpdateOperationsInput | string
    favColor?: StringFieldUpdateOperationsInput | string
    favFamous?: StringFieldUpdateOperationsInput | string
    favAnimal?: StringFieldUpdateOperationsInput | string
    favSubject?: StringFieldUpdateOperationsInput | string
    hateSubject?: StringFieldUpdateOperationsInput | string
    freqMagazine?: StringFieldUpdateOperationsInput | string
    fetish?: StringFieldUpdateOperationsInput | string
    makesHappy?: StringFieldUpdateOperationsInput | string
    makesSad?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    firstLoveAge?: StringFieldUpdateOperationsInput | string
    firstConfession?: StringFieldUpdateOperationsInput | string
    valentineChoco?: StringFieldUpdateOperationsInput | string
    sleepTime?: StringFieldUpdateOperationsInput | string
    firstWash?: StringFieldUpdateOperationsInput | string
    alwaysBuy?: StringFieldUpdateOperationsInput | string
    criedRecently?: StringFieldUpdateOperationsInput | string
    disbeliefSanta?: StringFieldUpdateOperationsInput | string
    giftSanta?: StringFieldUpdateOperationsInput | string
    lastDayPlan?: StringFieldUpdateOperationsInput | string
    richPlan?: StringFieldUpdateOperationsInput | string
    weekendPlan?: StringFieldUpdateOperationsInput | string
    altCareer?: StringFieldUpdateOperationsInput | string
    favHistoryChar?: StringFieldUpdateOperationsInput | string
    oneObject?: StringFieldUpdateOperationsInput | string
    timeMachine?: StringFieldUpdateOperationsInput | string
  }

  export type BLPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    zodiac?: StringFieldUpdateOperationsInput | string
    birthPlace?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    shoeSize?: IntFieldUpdateOperationsInput | number
    vision?: FloatFieldUpdateOperationsInput | number
    bloodType?: StringFieldUpdateOperationsInput | string
    proTeam?: StringFieldUpdateOperationsInput | string
    domLeg?: StringFieldUpdateOperationsInput | string
    favPlayer?: StringFieldUpdateOperationsInput | string
    startAge?: StringFieldUpdateOperationsInput | string
    motto?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    favFood?: StringFieldUpdateOperationsInput | string
    hateFood?: StringFieldUpdateOperationsInput | string
    riceSideDish?: StringFieldUpdateOperationsInput | string
    hobbies?: StringFieldUpdateOperationsInput | string
    favSeason?: StringFieldUpdateOperationsInput | string
    favStrong?: StringFieldUpdateOperationsInput | string
    favMovie?: StringFieldUpdateOperationsInput | string
    favColor?: StringFieldUpdateOperationsInput | string
    favFamous?: StringFieldUpdateOperationsInput | string
    favAnimal?: StringFieldUpdateOperationsInput | string
    favSubject?: StringFieldUpdateOperationsInput | string
    hateSubject?: StringFieldUpdateOperationsInput | string
    freqMagazine?: StringFieldUpdateOperationsInput | string
    fetish?: StringFieldUpdateOperationsInput | string
    makesHappy?: StringFieldUpdateOperationsInput | string
    makesSad?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    firstLoveAge?: StringFieldUpdateOperationsInput | string
    firstConfession?: StringFieldUpdateOperationsInput | string
    valentineChoco?: StringFieldUpdateOperationsInput | string
    sleepTime?: StringFieldUpdateOperationsInput | string
    firstWash?: StringFieldUpdateOperationsInput | string
    alwaysBuy?: StringFieldUpdateOperationsInput | string
    criedRecently?: StringFieldUpdateOperationsInput | string
    disbeliefSanta?: StringFieldUpdateOperationsInput | string
    giftSanta?: StringFieldUpdateOperationsInput | string
    lastDayPlan?: StringFieldUpdateOperationsInput | string
    richPlan?: StringFieldUpdateOperationsInput | string
    weekendPlan?: StringFieldUpdateOperationsInput | string
    altCareer?: StringFieldUpdateOperationsInput | string
    favHistoryChar?: StringFieldUpdateOperationsInput | string
    oneObject?: StringFieldUpdateOperationsInput | string
    timeMachine?: StringFieldUpdateOperationsInput | string
  }

  export type BLPlayerCreateManyInput = {
    id?: string
    name: string
    birthDate: string
    zodiac: string
    birthPlace: string
    family: string
    height: number
    shoeSize: number
    vision: number
    bloodType: string
    proTeam: string
    domLeg: string
    favPlayer: string
    startAge: string
    motto: string
    nickname: string
    quality: string
    defect: string
    favFood: string
    hateFood: string
    riceSideDish: string
    hobbies: string
    favSeason: string
    favStrong: string
    favMovie: string
    favColor: string
    favFamous: string
    favAnimal: string
    favSubject: string
    hateSubject: string
    freqMagazine: string
    fetish: string
    makesHappy: string
    makesSad: string
    partnerType: string
    firstLoveAge: string
    firstConfession: string
    valentineChoco: string
    sleepTime: string
    firstWash: string
    alwaysBuy: string
    criedRecently: string
    disbeliefSanta: string
    giftSanta: string
    lastDayPlan: string
    richPlan: string
    weekendPlan: string
    altCareer: string
    favHistoryChar: string
    oneObject: string
    timeMachine: string
  }

  export type BLPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    zodiac?: StringFieldUpdateOperationsInput | string
    birthPlace?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    shoeSize?: IntFieldUpdateOperationsInput | number
    vision?: FloatFieldUpdateOperationsInput | number
    bloodType?: StringFieldUpdateOperationsInput | string
    proTeam?: StringFieldUpdateOperationsInput | string
    domLeg?: StringFieldUpdateOperationsInput | string
    favPlayer?: StringFieldUpdateOperationsInput | string
    startAge?: StringFieldUpdateOperationsInput | string
    motto?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    favFood?: StringFieldUpdateOperationsInput | string
    hateFood?: StringFieldUpdateOperationsInput | string
    riceSideDish?: StringFieldUpdateOperationsInput | string
    hobbies?: StringFieldUpdateOperationsInput | string
    favSeason?: StringFieldUpdateOperationsInput | string
    favStrong?: StringFieldUpdateOperationsInput | string
    favMovie?: StringFieldUpdateOperationsInput | string
    favColor?: StringFieldUpdateOperationsInput | string
    favFamous?: StringFieldUpdateOperationsInput | string
    favAnimal?: StringFieldUpdateOperationsInput | string
    favSubject?: StringFieldUpdateOperationsInput | string
    hateSubject?: StringFieldUpdateOperationsInput | string
    freqMagazine?: StringFieldUpdateOperationsInput | string
    fetish?: StringFieldUpdateOperationsInput | string
    makesHappy?: StringFieldUpdateOperationsInput | string
    makesSad?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    firstLoveAge?: StringFieldUpdateOperationsInput | string
    firstConfession?: StringFieldUpdateOperationsInput | string
    valentineChoco?: StringFieldUpdateOperationsInput | string
    sleepTime?: StringFieldUpdateOperationsInput | string
    firstWash?: StringFieldUpdateOperationsInput | string
    alwaysBuy?: StringFieldUpdateOperationsInput | string
    criedRecently?: StringFieldUpdateOperationsInput | string
    disbeliefSanta?: StringFieldUpdateOperationsInput | string
    giftSanta?: StringFieldUpdateOperationsInput | string
    lastDayPlan?: StringFieldUpdateOperationsInput | string
    richPlan?: StringFieldUpdateOperationsInput | string
    weekendPlan?: StringFieldUpdateOperationsInput | string
    altCareer?: StringFieldUpdateOperationsInput | string
    favHistoryChar?: StringFieldUpdateOperationsInput | string
    oneObject?: StringFieldUpdateOperationsInput | string
    timeMachine?: StringFieldUpdateOperationsInput | string
  }

  export type BLPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    zodiac?: StringFieldUpdateOperationsInput | string
    birthPlace?: StringFieldUpdateOperationsInput | string
    family?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    shoeSize?: IntFieldUpdateOperationsInput | number
    vision?: FloatFieldUpdateOperationsInput | number
    bloodType?: StringFieldUpdateOperationsInput | string
    proTeam?: StringFieldUpdateOperationsInput | string
    domLeg?: StringFieldUpdateOperationsInput | string
    favPlayer?: StringFieldUpdateOperationsInput | string
    startAge?: StringFieldUpdateOperationsInput | string
    motto?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    quality?: StringFieldUpdateOperationsInput | string
    defect?: StringFieldUpdateOperationsInput | string
    favFood?: StringFieldUpdateOperationsInput | string
    hateFood?: StringFieldUpdateOperationsInput | string
    riceSideDish?: StringFieldUpdateOperationsInput | string
    hobbies?: StringFieldUpdateOperationsInput | string
    favSeason?: StringFieldUpdateOperationsInput | string
    favStrong?: StringFieldUpdateOperationsInput | string
    favMovie?: StringFieldUpdateOperationsInput | string
    favColor?: StringFieldUpdateOperationsInput | string
    favFamous?: StringFieldUpdateOperationsInput | string
    favAnimal?: StringFieldUpdateOperationsInput | string
    favSubject?: StringFieldUpdateOperationsInput | string
    hateSubject?: StringFieldUpdateOperationsInput | string
    freqMagazine?: StringFieldUpdateOperationsInput | string
    fetish?: StringFieldUpdateOperationsInput | string
    makesHappy?: StringFieldUpdateOperationsInput | string
    makesSad?: StringFieldUpdateOperationsInput | string
    partnerType?: StringFieldUpdateOperationsInput | string
    firstLoveAge?: StringFieldUpdateOperationsInput | string
    firstConfession?: StringFieldUpdateOperationsInput | string
    valentineChoco?: StringFieldUpdateOperationsInput | string
    sleepTime?: StringFieldUpdateOperationsInput | string
    firstWash?: StringFieldUpdateOperationsInput | string
    alwaysBuy?: StringFieldUpdateOperationsInput | string
    criedRecently?: StringFieldUpdateOperationsInput | string
    disbeliefSanta?: StringFieldUpdateOperationsInput | string
    giftSanta?: StringFieldUpdateOperationsInput | string
    lastDayPlan?: StringFieldUpdateOperationsInput | string
    richPlan?: StringFieldUpdateOperationsInput | string
    weekendPlan?: StringFieldUpdateOperationsInput | string
    altCareer?: StringFieldUpdateOperationsInput | string
    favHistoryChar?: StringFieldUpdateOperationsInput | string
    oneObject?: StringFieldUpdateOperationsInput | string
    timeMachine?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    favBLPlayer?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    favBLPlayer?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    favBLPlayer?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BLPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    zodiac?: SortOrder
    birthPlace?: SortOrder
    family?: SortOrder
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
    bloodType?: SortOrder
    proTeam?: SortOrder
    domLeg?: SortOrder
    favPlayer?: SortOrder
    startAge?: SortOrder
    motto?: SortOrder
    nickname?: SortOrder
    quality?: SortOrder
    defect?: SortOrder
    favFood?: SortOrder
    hateFood?: SortOrder
    riceSideDish?: SortOrder
    hobbies?: SortOrder
    favSeason?: SortOrder
    favStrong?: SortOrder
    favMovie?: SortOrder
    favColor?: SortOrder
    favFamous?: SortOrder
    favAnimal?: SortOrder
    favSubject?: SortOrder
    hateSubject?: SortOrder
    freqMagazine?: SortOrder
    fetish?: SortOrder
    makesHappy?: SortOrder
    makesSad?: SortOrder
    partnerType?: SortOrder
    firstLoveAge?: SortOrder
    firstConfession?: SortOrder
    valentineChoco?: SortOrder
    sleepTime?: SortOrder
    firstWash?: SortOrder
    alwaysBuy?: SortOrder
    criedRecently?: SortOrder
    disbeliefSanta?: SortOrder
    giftSanta?: SortOrder
    lastDayPlan?: SortOrder
    richPlan?: SortOrder
    weekendPlan?: SortOrder
    altCareer?: SortOrder
    favHistoryChar?: SortOrder
    oneObject?: SortOrder
    timeMachine?: SortOrder
  }

  export type BLPlayerAvgOrderByAggregateInput = {
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
  }

  export type BLPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    zodiac?: SortOrder
    birthPlace?: SortOrder
    family?: SortOrder
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
    bloodType?: SortOrder
    proTeam?: SortOrder
    domLeg?: SortOrder
    favPlayer?: SortOrder
    startAge?: SortOrder
    motto?: SortOrder
    nickname?: SortOrder
    quality?: SortOrder
    defect?: SortOrder
    favFood?: SortOrder
    hateFood?: SortOrder
    riceSideDish?: SortOrder
    hobbies?: SortOrder
    favSeason?: SortOrder
    favStrong?: SortOrder
    favMovie?: SortOrder
    favColor?: SortOrder
    favFamous?: SortOrder
    favAnimal?: SortOrder
    favSubject?: SortOrder
    hateSubject?: SortOrder
    freqMagazine?: SortOrder
    fetish?: SortOrder
    makesHappy?: SortOrder
    makesSad?: SortOrder
    partnerType?: SortOrder
    firstLoveAge?: SortOrder
    firstConfession?: SortOrder
    valentineChoco?: SortOrder
    sleepTime?: SortOrder
    firstWash?: SortOrder
    alwaysBuy?: SortOrder
    criedRecently?: SortOrder
    disbeliefSanta?: SortOrder
    giftSanta?: SortOrder
    lastDayPlan?: SortOrder
    richPlan?: SortOrder
    weekendPlan?: SortOrder
    altCareer?: SortOrder
    favHistoryChar?: SortOrder
    oneObject?: SortOrder
    timeMachine?: SortOrder
  }

  export type BLPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birthDate?: SortOrder
    zodiac?: SortOrder
    birthPlace?: SortOrder
    family?: SortOrder
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
    bloodType?: SortOrder
    proTeam?: SortOrder
    domLeg?: SortOrder
    favPlayer?: SortOrder
    startAge?: SortOrder
    motto?: SortOrder
    nickname?: SortOrder
    quality?: SortOrder
    defect?: SortOrder
    favFood?: SortOrder
    hateFood?: SortOrder
    riceSideDish?: SortOrder
    hobbies?: SortOrder
    favSeason?: SortOrder
    favStrong?: SortOrder
    favMovie?: SortOrder
    favColor?: SortOrder
    favFamous?: SortOrder
    favAnimal?: SortOrder
    favSubject?: SortOrder
    hateSubject?: SortOrder
    freqMagazine?: SortOrder
    fetish?: SortOrder
    makesHappy?: SortOrder
    makesSad?: SortOrder
    partnerType?: SortOrder
    firstLoveAge?: SortOrder
    firstConfession?: SortOrder
    valentineChoco?: SortOrder
    sleepTime?: SortOrder
    firstWash?: SortOrder
    alwaysBuy?: SortOrder
    criedRecently?: SortOrder
    disbeliefSanta?: SortOrder
    giftSanta?: SortOrder
    lastDayPlan?: SortOrder
    richPlan?: SortOrder
    weekendPlan?: SortOrder
    altCareer?: SortOrder
    favHistoryChar?: SortOrder
    oneObject?: SortOrder
    timeMachine?: SortOrder
  }

  export type BLPlayerSumOrderByAggregateInput = {
    height?: SortOrder
    shoeSize?: SortOrder
    vision?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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