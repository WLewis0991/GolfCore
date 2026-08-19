
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Tee
 * 
 */
export type Tee = $Result.DefaultSelection<Prisma.$TeePayload>
/**
 * Model TeeHole
 * 
 */
export type TeeHole = $Result.DefaultSelection<Prisma.$TeeHolePayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model HoleScore
 * 
 */
export type HoleScore = $Result.DefaultSelection<Prisma.$HoleScorePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MENS: 'MENS',
  WOMENS: 'WOMENS'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const CourseSource: {
  OVERPASS: 'OVERPASS',
  GOLF_COURSE_API: 'GOLF_COURSE_API',
  MANUAL: 'MANUAL'
};

export type CourseSource = (typeof CourseSource)[keyof typeof CourseSource]


export const CourseHandicapSource: {
  INDEX: 'INDEX',
  MANUAL: 'MANUAL'
};

export type CourseHandicapSource = (typeof CourseHandicapSource)[keyof typeof CourseHandicapSource]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type CourseSource = $Enums.CourseSource

export const CourseSource: typeof $Enums.CourseSource

export type CourseHandicapSource = $Enums.CourseHandicapSource

export const CourseHandicapSource: typeof $Enums.CourseHandicapSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tee`: Exposes CRUD operations for the **Tee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tees
    * const tees = await prisma.tee.findMany()
    * ```
    */
  get tee(): Prisma.TeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teeHole`: Exposes CRUD operations for the **TeeHole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeeHoles
    * const teeHoles = await prisma.teeHole.findMany()
    * ```
    */
  get teeHole(): Prisma.TeeHoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holeScore`: Exposes CRUD operations for the **HoleScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HoleScores
    * const holeScores = await prisma.holeScore.findMany()
    * ```
    */
  get holeScore(): Prisma.HoleScoreDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Course: 'Course',
    Tee: 'Tee',
    TeeHole: 'TeeHole',
    Round: 'Round',
    HoleScore: 'HoleScore'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "course" | "tee" | "teeHole" | "round" | "holeScore"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Tee: {
        payload: Prisma.$TeePayload<ExtArgs>
        fields: Prisma.TeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>
          }
          findFirst: {
            args: Prisma.TeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>
          }
          findMany: {
            args: Prisma.TeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>[]
          }
          create: {
            args: Prisma.TeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>
          }
          createMany: {
            args: Prisma.TeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>[]
          }
          delete: {
            args: Prisma.TeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>
          }
          update: {
            args: Prisma.TeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>
          }
          deleteMany: {
            args: Prisma.TeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>[]
          }
          upsert: {
            args: Prisma.TeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeePayload>
          }
          aggregate: {
            args: Prisma.TeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTee>
          }
          groupBy: {
            args: Prisma.TeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeeCountArgs<ExtArgs>
            result: $Utils.Optional<TeeCountAggregateOutputType> | number
          }
        }
      }
      TeeHole: {
        payload: Prisma.$TeeHolePayload<ExtArgs>
        fields: Prisma.TeeHoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeeHoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeeHoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>
          }
          findFirst: {
            args: Prisma.TeeHoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeeHoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>
          }
          findMany: {
            args: Prisma.TeeHoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>[]
          }
          create: {
            args: Prisma.TeeHoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>
          }
          createMany: {
            args: Prisma.TeeHoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeeHoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>[]
          }
          delete: {
            args: Prisma.TeeHoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>
          }
          update: {
            args: Prisma.TeeHoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>
          }
          deleteMany: {
            args: Prisma.TeeHoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeeHoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeeHoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>[]
          }
          upsert: {
            args: Prisma.TeeHoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeeHolePayload>
          }
          aggregate: {
            args: Prisma.TeeHoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeeHole>
          }
          groupBy: {
            args: Prisma.TeeHoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeeHoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeeHoleCountArgs<ExtArgs>
            result: $Utils.Optional<TeeHoleCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      HoleScore: {
        payload: Prisma.$HoleScorePayload<ExtArgs>
        fields: Prisma.HoleScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoleScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoleScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          findFirst: {
            args: Prisma.HoleScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoleScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          findMany: {
            args: Prisma.HoleScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>[]
          }
          create: {
            args: Prisma.HoleScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          createMany: {
            args: Prisma.HoleScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoleScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>[]
          }
          delete: {
            args: Prisma.HoleScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          update: {
            args: Prisma.HoleScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          deleteMany: {
            args: Prisma.HoleScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoleScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoleScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>[]
          }
          upsert: {
            args: Prisma.HoleScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoleScorePayload>
          }
          aggregate: {
            args: Prisma.HoleScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoleScore>
          }
          groupBy: {
            args: Prisma.HoleScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoleScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoleScoreCountArgs<ExtArgs>
            result: $Utils.Optional<HoleScoreCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    course?: CourseOmit
    tee?: TeeOmit
    teeHole?: TeeHoleOmit
    round?: RoundOmit
    holeScore?: HoleScoreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    tees: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tees?: boolean | CourseCountOutputTypeCountTeesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeeWhereInput
  }


  /**
   * Count Type TeeCountOutputType
   */

  export type TeeCountOutputType = {
    holes: number
    rounds: number
  }

  export type TeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holes?: boolean | TeeCountOutputTypeCountHolesArgs
    rounds?: boolean | TeeCountOutputTypeCountRoundsArgs
  }

  // Custom InputTypes
  /**
   * TeeCountOutputType without action
   */
  export type TeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeCountOutputType
     */
    select?: TeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeeCountOutputType without action
   */
  export type TeeCountOutputTypeCountHolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeeHoleWhereInput
  }

  /**
   * TeeCountOutputType without action
   */
  export type TeeCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    holeScores: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holeScores?: boolean | RoundCountOutputTypeCountHoleScoresArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountHoleScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleScoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CourseSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    club: string | null
    city: string | null
    state: string | null
    country: string | null
    lat: number | null
    lng: number | null
    slug: string | null
    source: $Enums.CourseSource | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    club: string | null
    city: string | null
    state: string | null
    country: string | null
    lat: number | null
    lng: number | null
    slug: string | null
    source: $Enums.CourseSource | null
    externalId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    club: number
    city: number
    state: number
    country: number
    lat: number
    lng: number
    slug: number
    source: number
    externalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CourseSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    club?: true
    city?: true
    state?: true
    country?: true
    lat?: true
    lng?: true
    slug?: true
    source?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    club?: true
    city?: true
    state?: true
    country?: true
    lat?: true
    lng?: true
    slug?: true
    source?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    club?: true
    city?: true
    state?: true
    country?: true
    lat?: true
    lng?: true
    slug?: true
    source?: true
    externalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    club: string | null
    city: string | null
    state: string | null
    country: string | null
    lat: number | null
    lng: number | null
    slug: string | null
    source: $Enums.CourseSource
    externalId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    club?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    lat?: boolean
    lng?: boolean
    slug?: boolean
    source?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tees?: boolean | Course$teesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    club?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    lat?: boolean
    lng?: boolean
    slug?: boolean
    source?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    club?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    lat?: boolean
    lng?: boolean
    slug?: boolean
    source?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    club?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    lat?: boolean
    lng?: boolean
    slug?: boolean
    source?: boolean
    externalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "club" | "city" | "state" | "country" | "lat" | "lng" | "slug" | "source" | "externalId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tees?: boolean | Course$teesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      tees: Prisma.$TeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      club: string | null
      city: string | null
      state: string | null
      country: string | null
      lat: number | null
      lng: number | null
      slug: string | null
      source: $Enums.CourseSource
      externalId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tees<T extends Course$teesArgs<ExtArgs> = {}>(args?: Subset<T, Course$teesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly club: FieldRef<"Course", 'String'>
    readonly city: FieldRef<"Course", 'String'>
    readonly state: FieldRef<"Course", 'String'>
    readonly country: FieldRef<"Course", 'String'>
    readonly lat: FieldRef<"Course", 'Float'>
    readonly lng: FieldRef<"Course", 'Float'>
    readonly slug: FieldRef<"Course", 'String'>
    readonly source: FieldRef<"Course", 'CourseSource'>
    readonly externalId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.tees
   */
  export type Course$teesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    where?: TeeWhereInput
    orderBy?: TeeOrderByWithRelationInput | TeeOrderByWithRelationInput[]
    cursor?: TeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeeScalarFieldEnum | TeeScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Tee
   */

  export type AggregateTee = {
    _count: TeeCountAggregateOutputType | null
    _avg: TeeAvgAggregateOutputType | null
    _sum: TeeSumAggregateOutputType | null
    _min: TeeMinAggregateOutputType | null
    _max: TeeMaxAggregateOutputType | null
  }

  export type TeeAvgAggregateOutputType = {
    rating: number | null
    slope: number | null
    par: number | null
  }

  export type TeeSumAggregateOutputType = {
    rating: number | null
    slope: number | null
    par: number | null
  }

  export type TeeMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    gender: $Enums.Gender | null
    rating: number | null
    slope: number | null
    par: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeeMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    name: string | null
    gender: $Enums.Gender | null
    rating: number | null
    slope: number | null
    par: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeeCountAggregateOutputType = {
    id: number
    courseId: number
    name: number
    gender: number
    rating: number
    slope: number
    par: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeeAvgAggregateInputType = {
    rating?: true
    slope?: true
    par?: true
  }

  export type TeeSumAggregateInputType = {
    rating?: true
    slope?: true
    par?: true
  }

  export type TeeMinAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    gender?: true
    rating?: true
    slope?: true
    par?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeeMaxAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    gender?: true
    rating?: true
    slope?: true
    par?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeeCountAggregateInputType = {
    id?: true
    courseId?: true
    name?: true
    gender?: true
    rating?: true
    slope?: true
    par?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tee to aggregate.
     */
    where?: TeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tees to fetch.
     */
    orderBy?: TeeOrderByWithRelationInput | TeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tees
    **/
    _count?: true | TeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeeMaxAggregateInputType
  }

  export type GetTeeAggregateType<T extends TeeAggregateArgs> = {
        [P in keyof T & keyof AggregateTee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTee[P]>
      : GetScalarType<T[P], AggregateTee[P]>
  }




  export type TeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeeWhereInput
    orderBy?: TeeOrderByWithAggregationInput | TeeOrderByWithAggregationInput[]
    by: TeeScalarFieldEnum[] | TeeScalarFieldEnum
    having?: TeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeeCountAggregateInputType | true
    _avg?: TeeAvgAggregateInputType
    _sum?: TeeSumAggregateInputType
    _min?: TeeMinAggregateInputType
    _max?: TeeMaxAggregateInputType
  }

  export type TeeGroupByOutputType = {
    id: string
    courseId: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt: Date
    updatedAt: Date
    _count: TeeCountAggregateOutputType | null
    _avg: TeeAvgAggregateOutputType | null
    _sum: TeeSumAggregateOutputType | null
    _min: TeeMinAggregateOutputType | null
    _max: TeeMaxAggregateOutputType | null
  }

  type GetTeeGroupByPayload<T extends TeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeeGroupByOutputType[P]>
            : GetScalarType<T[P], TeeGroupByOutputType[P]>
        }
      >
    >


  export type TeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    gender?: boolean
    rating?: boolean
    slope?: boolean
    par?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    holes?: boolean | Tee$holesArgs<ExtArgs>
    rounds?: boolean | Tee$roundsArgs<ExtArgs>
    _count?: boolean | TeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tee"]>

  export type TeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    gender?: boolean
    rating?: boolean
    slope?: boolean
    par?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tee"]>

  export type TeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    name?: boolean
    gender?: boolean
    rating?: boolean
    slope?: boolean
    par?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tee"]>

  export type TeeSelectScalar = {
    id?: boolean
    courseId?: boolean
    name?: boolean
    gender?: boolean
    rating?: boolean
    slope?: boolean
    par?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "name" | "gender" | "rating" | "slope" | "par" | "createdAt" | "updatedAt", ExtArgs["result"]["tee"]>
  export type TeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    holes?: boolean | Tee$holesArgs<ExtArgs>
    rounds?: boolean | Tee$roundsArgs<ExtArgs>
    _count?: boolean | TeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tee"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      holes: Prisma.$TeeHolePayload<ExtArgs>[]
      rounds: Prisma.$RoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      name: string
      gender: $Enums.Gender
      rating: number
      slope: number
      par: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tee"]>
    composites: {}
  }

  type TeeGetPayload<S extends boolean | null | undefined | TeeDefaultArgs> = $Result.GetResult<Prisma.$TeePayload, S>

  type TeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeeCountAggregateInputType | true
    }

  export interface TeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tee'], meta: { name: 'Tee' } }
    /**
     * Find zero or one Tee that matches the filter.
     * @param {TeeFindUniqueArgs} args - Arguments to find a Tee
     * @example
     * // Get one Tee
     * const tee = await prisma.tee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeeFindUniqueArgs>(args: SelectSubset<T, TeeFindUniqueArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeeFindUniqueOrThrowArgs} args - Arguments to find a Tee
     * @example
     * // Get one Tee
     * const tee = await prisma.tee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeeFindUniqueOrThrowArgs>(args: SelectSubset<T, TeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeFindFirstArgs} args - Arguments to find a Tee
     * @example
     * // Get one Tee
     * const tee = await prisma.tee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeeFindFirstArgs>(args?: SelectSubset<T, TeeFindFirstArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeFindFirstOrThrowArgs} args - Arguments to find a Tee
     * @example
     * // Get one Tee
     * const tee = await prisma.tee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeeFindFirstOrThrowArgs>(args?: SelectSubset<T, TeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tees
     * const tees = await prisma.tee.findMany()
     * 
     * // Get first 10 Tees
     * const tees = await prisma.tee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teeWithIdOnly = await prisma.tee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeeFindManyArgs>(args?: SelectSubset<T, TeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tee.
     * @param {TeeCreateArgs} args - Arguments to create a Tee.
     * @example
     * // Create one Tee
     * const Tee = await prisma.tee.create({
     *   data: {
     *     // ... data to create a Tee
     *   }
     * })
     * 
     */
    create<T extends TeeCreateArgs>(args: SelectSubset<T, TeeCreateArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tees.
     * @param {TeeCreateManyArgs} args - Arguments to create many Tees.
     * @example
     * // Create many Tees
     * const tee = await prisma.tee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeeCreateManyArgs>(args?: SelectSubset<T, TeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tees and returns the data saved in the database.
     * @param {TeeCreateManyAndReturnArgs} args - Arguments to create many Tees.
     * @example
     * // Create many Tees
     * const tee = await prisma.tee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tees and only return the `id`
     * const teeWithIdOnly = await prisma.tee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeeCreateManyAndReturnArgs>(args?: SelectSubset<T, TeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tee.
     * @param {TeeDeleteArgs} args - Arguments to delete one Tee.
     * @example
     * // Delete one Tee
     * const Tee = await prisma.tee.delete({
     *   where: {
     *     // ... filter to delete one Tee
     *   }
     * })
     * 
     */
    delete<T extends TeeDeleteArgs>(args: SelectSubset<T, TeeDeleteArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tee.
     * @param {TeeUpdateArgs} args - Arguments to update one Tee.
     * @example
     * // Update one Tee
     * const tee = await prisma.tee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeeUpdateArgs>(args: SelectSubset<T, TeeUpdateArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tees.
     * @param {TeeDeleteManyArgs} args - Arguments to filter Tees to delete.
     * @example
     * // Delete a few Tees
     * const { count } = await prisma.tee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeeDeleteManyArgs>(args?: SelectSubset<T, TeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tees
     * const tee = await prisma.tee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeeUpdateManyArgs>(args: SelectSubset<T, TeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tees and returns the data updated in the database.
     * @param {TeeUpdateManyAndReturnArgs} args - Arguments to update many Tees.
     * @example
     * // Update many Tees
     * const tee = await prisma.tee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tees and only return the `id`
     * const teeWithIdOnly = await prisma.tee.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeeUpdateManyAndReturnArgs>(args: SelectSubset<T, TeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tee.
     * @param {TeeUpsertArgs} args - Arguments to update or create a Tee.
     * @example
     * // Update or create a Tee
     * const tee = await prisma.tee.upsert({
     *   create: {
     *     // ... data to create a Tee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tee we want to update
     *   }
     * })
     */
    upsert<T extends TeeUpsertArgs>(args: SelectSubset<T, TeeUpsertArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeCountArgs} args - Arguments to filter Tees to count.
     * @example
     * // Count the number of Tees
     * const count = await prisma.tee.count({
     *   where: {
     *     // ... the filter for the Tees we want to count
     *   }
     * })
    **/
    count<T extends TeeCountArgs>(
      args?: Subset<T, TeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeeAggregateArgs>(args: Subset<T, TeeAggregateArgs>): Prisma.PrismaPromise<GetTeeAggregateType<T>>

    /**
     * Group by Tee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeGroupByArgs} args - Group by arguments.
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
      T extends TeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeeGroupByArgs['orderBy'] }
        : { orderBy?: TeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tee model
   */
  readonly fields: TeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    holes<T extends Tee$holesArgs<ExtArgs> = {}>(args?: Subset<T, Tee$holesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rounds<T extends Tee$roundsArgs<ExtArgs> = {}>(args?: Subset<T, Tee$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tee model
   */
  interface TeeFieldRefs {
    readonly id: FieldRef<"Tee", 'String'>
    readonly courseId: FieldRef<"Tee", 'String'>
    readonly name: FieldRef<"Tee", 'String'>
    readonly gender: FieldRef<"Tee", 'Gender'>
    readonly rating: FieldRef<"Tee", 'Float'>
    readonly slope: FieldRef<"Tee", 'Int'>
    readonly par: FieldRef<"Tee", 'Int'>
    readonly createdAt: FieldRef<"Tee", 'DateTime'>
    readonly updatedAt: FieldRef<"Tee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tee findUnique
   */
  export type TeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * Filter, which Tee to fetch.
     */
    where: TeeWhereUniqueInput
  }

  /**
   * Tee findUniqueOrThrow
   */
  export type TeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * Filter, which Tee to fetch.
     */
    where: TeeWhereUniqueInput
  }

  /**
   * Tee findFirst
   */
  export type TeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * Filter, which Tee to fetch.
     */
    where?: TeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tees to fetch.
     */
    orderBy?: TeeOrderByWithRelationInput | TeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tees.
     */
    cursor?: TeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tees.
     */
    distinct?: TeeScalarFieldEnum | TeeScalarFieldEnum[]
  }

  /**
   * Tee findFirstOrThrow
   */
  export type TeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * Filter, which Tee to fetch.
     */
    where?: TeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tees to fetch.
     */
    orderBy?: TeeOrderByWithRelationInput | TeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tees.
     */
    cursor?: TeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tees.
     */
    distinct?: TeeScalarFieldEnum | TeeScalarFieldEnum[]
  }

  /**
   * Tee findMany
   */
  export type TeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * Filter, which Tees to fetch.
     */
    where?: TeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tees to fetch.
     */
    orderBy?: TeeOrderByWithRelationInput | TeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tees.
     */
    cursor?: TeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tees.
     */
    distinct?: TeeScalarFieldEnum | TeeScalarFieldEnum[]
  }

  /**
   * Tee create
   */
  export type TeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Tee.
     */
    data: XOR<TeeCreateInput, TeeUncheckedCreateInput>
  }

  /**
   * Tee createMany
   */
  export type TeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tees.
     */
    data: TeeCreateManyInput | TeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tee createManyAndReturn
   */
  export type TeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * The data used to create many Tees.
     */
    data: TeeCreateManyInput | TeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tee update
   */
  export type TeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Tee.
     */
    data: XOR<TeeUpdateInput, TeeUncheckedUpdateInput>
    /**
     * Choose, which Tee to update.
     */
    where: TeeWhereUniqueInput
  }

  /**
   * Tee updateMany
   */
  export type TeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tees.
     */
    data: XOR<TeeUpdateManyMutationInput, TeeUncheckedUpdateManyInput>
    /**
     * Filter which Tees to update
     */
    where?: TeeWhereInput
    /**
     * Limit how many Tees to update.
     */
    limit?: number
  }

  /**
   * Tee updateManyAndReturn
   */
  export type TeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * The data used to update Tees.
     */
    data: XOR<TeeUpdateManyMutationInput, TeeUncheckedUpdateManyInput>
    /**
     * Filter which Tees to update
     */
    where?: TeeWhereInput
    /**
     * Limit how many Tees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tee upsert
   */
  export type TeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Tee to update in case it exists.
     */
    where: TeeWhereUniqueInput
    /**
     * In case the Tee found by the `where` argument doesn't exist, create a new Tee with this data.
     */
    create: XOR<TeeCreateInput, TeeUncheckedCreateInput>
    /**
     * In case the Tee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeeUpdateInput, TeeUncheckedUpdateInput>
  }

  /**
   * Tee delete
   */
  export type TeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
    /**
     * Filter which Tee to delete.
     */
    where: TeeWhereUniqueInput
  }

  /**
   * Tee deleteMany
   */
  export type TeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tees to delete
     */
    where?: TeeWhereInput
    /**
     * Limit how many Tees to delete.
     */
    limit?: number
  }

  /**
   * Tee.holes
   */
  export type Tee$holesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    where?: TeeHoleWhereInput
    orderBy?: TeeHoleOrderByWithRelationInput | TeeHoleOrderByWithRelationInput[]
    cursor?: TeeHoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeeHoleScalarFieldEnum | TeeHoleScalarFieldEnum[]
  }

  /**
   * Tee.rounds
   */
  export type Tee$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Tee without action
   */
  export type TeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tee
     */
    select?: TeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tee
     */
    omit?: TeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeInclude<ExtArgs> | null
  }


  /**
   * Model TeeHole
   */

  export type AggregateTeeHole = {
    _count: TeeHoleCountAggregateOutputType | null
    _avg: TeeHoleAvgAggregateOutputType | null
    _sum: TeeHoleSumAggregateOutputType | null
    _min: TeeHoleMinAggregateOutputType | null
    _max: TeeHoleMaxAggregateOutputType | null
  }

  export type TeeHoleAvgAggregateOutputType = {
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    yards: number | null
  }

  export type TeeHoleSumAggregateOutputType = {
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    yards: number | null
  }

  export type TeeHoleMinAggregateOutputType = {
    id: string | null
    teeId: string | null
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    yards: number | null
  }

  export type TeeHoleMaxAggregateOutputType = {
    id: string | null
    teeId: string | null
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    yards: number | null
  }

  export type TeeHoleCountAggregateOutputType = {
    id: number
    teeId: number
    holeNumber: number
    par: number
    strokeIndex: number
    yards: number
    _all: number
  }


  export type TeeHoleAvgAggregateInputType = {
    holeNumber?: true
    par?: true
    strokeIndex?: true
    yards?: true
  }

  export type TeeHoleSumAggregateInputType = {
    holeNumber?: true
    par?: true
    strokeIndex?: true
    yards?: true
  }

  export type TeeHoleMinAggregateInputType = {
    id?: true
    teeId?: true
    holeNumber?: true
    par?: true
    strokeIndex?: true
    yards?: true
  }

  export type TeeHoleMaxAggregateInputType = {
    id?: true
    teeId?: true
    holeNumber?: true
    par?: true
    strokeIndex?: true
    yards?: true
  }

  export type TeeHoleCountAggregateInputType = {
    id?: true
    teeId?: true
    holeNumber?: true
    par?: true
    strokeIndex?: true
    yards?: true
    _all?: true
  }

  export type TeeHoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeeHole to aggregate.
     */
    where?: TeeHoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeHoles to fetch.
     */
    orderBy?: TeeHoleOrderByWithRelationInput | TeeHoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeeHoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeHoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeHoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeeHoles
    **/
    _count?: true | TeeHoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeeHoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeeHoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeeHoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeeHoleMaxAggregateInputType
  }

  export type GetTeeHoleAggregateType<T extends TeeHoleAggregateArgs> = {
        [P in keyof T & keyof AggregateTeeHole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeeHole[P]>
      : GetScalarType<T[P], AggregateTeeHole[P]>
  }




  export type TeeHoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeeHoleWhereInput
    orderBy?: TeeHoleOrderByWithAggregationInput | TeeHoleOrderByWithAggregationInput[]
    by: TeeHoleScalarFieldEnum[] | TeeHoleScalarFieldEnum
    having?: TeeHoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeeHoleCountAggregateInputType | true
    _avg?: TeeHoleAvgAggregateInputType
    _sum?: TeeHoleSumAggregateInputType
    _min?: TeeHoleMinAggregateInputType
    _max?: TeeHoleMaxAggregateInputType
  }

  export type TeeHoleGroupByOutputType = {
    id: string
    teeId: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards: number | null
    _count: TeeHoleCountAggregateOutputType | null
    _avg: TeeHoleAvgAggregateOutputType | null
    _sum: TeeHoleSumAggregateOutputType | null
    _min: TeeHoleMinAggregateOutputType | null
    _max: TeeHoleMaxAggregateOutputType | null
  }

  type GetTeeHoleGroupByPayload<T extends TeeHoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeeHoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeeHoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeeHoleGroupByOutputType[P]>
            : GetScalarType<T[P], TeeHoleGroupByOutputType[P]>
        }
      >
    >


  export type TeeHoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teeId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    yards?: boolean
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teeHole"]>

  export type TeeHoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teeId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    yards?: boolean
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teeHole"]>

  export type TeeHoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teeId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    yards?: boolean
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teeHole"]>

  export type TeeHoleSelectScalar = {
    id?: boolean
    teeId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    yards?: boolean
  }

  export type TeeHoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teeId" | "holeNumber" | "par" | "strokeIndex" | "yards", ExtArgs["result"]["teeHole"]>
  export type TeeHoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }
  export type TeeHoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }
  export type TeeHoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }

  export type $TeeHolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeeHole"
    objects: {
      tee: Prisma.$TeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teeId: string
      holeNumber: number
      par: number
      strokeIndex: number
      yards: number | null
    }, ExtArgs["result"]["teeHole"]>
    composites: {}
  }

  type TeeHoleGetPayload<S extends boolean | null | undefined | TeeHoleDefaultArgs> = $Result.GetResult<Prisma.$TeeHolePayload, S>

  type TeeHoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeeHoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeeHoleCountAggregateInputType | true
    }

  export interface TeeHoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeeHole'], meta: { name: 'TeeHole' } }
    /**
     * Find zero or one TeeHole that matches the filter.
     * @param {TeeHoleFindUniqueArgs} args - Arguments to find a TeeHole
     * @example
     * // Get one TeeHole
     * const teeHole = await prisma.teeHole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeeHoleFindUniqueArgs>(args: SelectSubset<T, TeeHoleFindUniqueArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeeHole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeeHoleFindUniqueOrThrowArgs} args - Arguments to find a TeeHole
     * @example
     * // Get one TeeHole
     * const teeHole = await prisma.teeHole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeeHoleFindUniqueOrThrowArgs>(args: SelectSubset<T, TeeHoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeeHole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleFindFirstArgs} args - Arguments to find a TeeHole
     * @example
     * // Get one TeeHole
     * const teeHole = await prisma.teeHole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeeHoleFindFirstArgs>(args?: SelectSubset<T, TeeHoleFindFirstArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeeHole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleFindFirstOrThrowArgs} args - Arguments to find a TeeHole
     * @example
     * // Get one TeeHole
     * const teeHole = await prisma.teeHole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeeHoleFindFirstOrThrowArgs>(args?: SelectSubset<T, TeeHoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeeHoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeeHoles
     * const teeHoles = await prisma.teeHole.findMany()
     * 
     * // Get first 10 TeeHoles
     * const teeHoles = await prisma.teeHole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teeHoleWithIdOnly = await prisma.teeHole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeeHoleFindManyArgs>(args?: SelectSubset<T, TeeHoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeeHole.
     * @param {TeeHoleCreateArgs} args - Arguments to create a TeeHole.
     * @example
     * // Create one TeeHole
     * const TeeHole = await prisma.teeHole.create({
     *   data: {
     *     // ... data to create a TeeHole
     *   }
     * })
     * 
     */
    create<T extends TeeHoleCreateArgs>(args: SelectSubset<T, TeeHoleCreateArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeeHoles.
     * @param {TeeHoleCreateManyArgs} args - Arguments to create many TeeHoles.
     * @example
     * // Create many TeeHoles
     * const teeHole = await prisma.teeHole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeeHoleCreateManyArgs>(args?: SelectSubset<T, TeeHoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeeHoles and returns the data saved in the database.
     * @param {TeeHoleCreateManyAndReturnArgs} args - Arguments to create many TeeHoles.
     * @example
     * // Create many TeeHoles
     * const teeHole = await prisma.teeHole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeeHoles and only return the `id`
     * const teeHoleWithIdOnly = await prisma.teeHole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeeHoleCreateManyAndReturnArgs>(args?: SelectSubset<T, TeeHoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeeHole.
     * @param {TeeHoleDeleteArgs} args - Arguments to delete one TeeHole.
     * @example
     * // Delete one TeeHole
     * const TeeHole = await prisma.teeHole.delete({
     *   where: {
     *     // ... filter to delete one TeeHole
     *   }
     * })
     * 
     */
    delete<T extends TeeHoleDeleteArgs>(args: SelectSubset<T, TeeHoleDeleteArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeeHole.
     * @param {TeeHoleUpdateArgs} args - Arguments to update one TeeHole.
     * @example
     * // Update one TeeHole
     * const teeHole = await prisma.teeHole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeeHoleUpdateArgs>(args: SelectSubset<T, TeeHoleUpdateArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeeHoles.
     * @param {TeeHoleDeleteManyArgs} args - Arguments to filter TeeHoles to delete.
     * @example
     * // Delete a few TeeHoles
     * const { count } = await prisma.teeHole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeeHoleDeleteManyArgs>(args?: SelectSubset<T, TeeHoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeeHoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeeHoles
     * const teeHole = await prisma.teeHole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeeHoleUpdateManyArgs>(args: SelectSubset<T, TeeHoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeeHoles and returns the data updated in the database.
     * @param {TeeHoleUpdateManyAndReturnArgs} args - Arguments to update many TeeHoles.
     * @example
     * // Update many TeeHoles
     * const teeHole = await prisma.teeHole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeeHoles and only return the `id`
     * const teeHoleWithIdOnly = await prisma.teeHole.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeeHoleUpdateManyAndReturnArgs>(args: SelectSubset<T, TeeHoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeeHole.
     * @param {TeeHoleUpsertArgs} args - Arguments to update or create a TeeHole.
     * @example
     * // Update or create a TeeHole
     * const teeHole = await prisma.teeHole.upsert({
     *   create: {
     *     // ... data to create a TeeHole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeeHole we want to update
     *   }
     * })
     */
    upsert<T extends TeeHoleUpsertArgs>(args: SelectSubset<T, TeeHoleUpsertArgs<ExtArgs>>): Prisma__TeeHoleClient<$Result.GetResult<Prisma.$TeeHolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeeHoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleCountArgs} args - Arguments to filter TeeHoles to count.
     * @example
     * // Count the number of TeeHoles
     * const count = await prisma.teeHole.count({
     *   where: {
     *     // ... the filter for the TeeHoles we want to count
     *   }
     * })
    **/
    count<T extends TeeHoleCountArgs>(
      args?: Subset<T, TeeHoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeeHoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeeHole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeeHoleAggregateArgs>(args: Subset<T, TeeHoleAggregateArgs>): Prisma.PrismaPromise<GetTeeHoleAggregateType<T>>

    /**
     * Group by TeeHole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeeHoleGroupByArgs} args - Group by arguments.
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
      T extends TeeHoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeeHoleGroupByArgs['orderBy'] }
        : { orderBy?: TeeHoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeeHoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeeHoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeeHole model
   */
  readonly fields: TeeHoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeeHole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeeHoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tee<T extends TeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeeDefaultArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeeHole model
   */
  interface TeeHoleFieldRefs {
    readonly id: FieldRef<"TeeHole", 'String'>
    readonly teeId: FieldRef<"TeeHole", 'String'>
    readonly holeNumber: FieldRef<"TeeHole", 'Int'>
    readonly par: FieldRef<"TeeHole", 'Int'>
    readonly strokeIndex: FieldRef<"TeeHole", 'Int'>
    readonly yards: FieldRef<"TeeHole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeeHole findUnique
   */
  export type TeeHoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * Filter, which TeeHole to fetch.
     */
    where: TeeHoleWhereUniqueInput
  }

  /**
   * TeeHole findUniqueOrThrow
   */
  export type TeeHoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * Filter, which TeeHole to fetch.
     */
    where: TeeHoleWhereUniqueInput
  }

  /**
   * TeeHole findFirst
   */
  export type TeeHoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * Filter, which TeeHole to fetch.
     */
    where?: TeeHoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeHoles to fetch.
     */
    orderBy?: TeeHoleOrderByWithRelationInput | TeeHoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeeHoles.
     */
    cursor?: TeeHoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeHoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeHoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeeHoles.
     */
    distinct?: TeeHoleScalarFieldEnum | TeeHoleScalarFieldEnum[]
  }

  /**
   * TeeHole findFirstOrThrow
   */
  export type TeeHoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * Filter, which TeeHole to fetch.
     */
    where?: TeeHoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeHoles to fetch.
     */
    orderBy?: TeeHoleOrderByWithRelationInput | TeeHoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeeHoles.
     */
    cursor?: TeeHoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeHoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeHoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeeHoles.
     */
    distinct?: TeeHoleScalarFieldEnum | TeeHoleScalarFieldEnum[]
  }

  /**
   * TeeHole findMany
   */
  export type TeeHoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * Filter, which TeeHoles to fetch.
     */
    where?: TeeHoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeeHoles to fetch.
     */
    orderBy?: TeeHoleOrderByWithRelationInput | TeeHoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeeHoles.
     */
    cursor?: TeeHoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeeHoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeeHoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeeHoles.
     */
    distinct?: TeeHoleScalarFieldEnum | TeeHoleScalarFieldEnum[]
  }

  /**
   * TeeHole create
   */
  export type TeeHoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * The data needed to create a TeeHole.
     */
    data: XOR<TeeHoleCreateInput, TeeHoleUncheckedCreateInput>
  }

  /**
   * TeeHole createMany
   */
  export type TeeHoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeeHoles.
     */
    data: TeeHoleCreateManyInput | TeeHoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeeHole createManyAndReturn
   */
  export type TeeHoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * The data used to create many TeeHoles.
     */
    data: TeeHoleCreateManyInput | TeeHoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeeHole update
   */
  export type TeeHoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * The data needed to update a TeeHole.
     */
    data: XOR<TeeHoleUpdateInput, TeeHoleUncheckedUpdateInput>
    /**
     * Choose, which TeeHole to update.
     */
    where: TeeHoleWhereUniqueInput
  }

  /**
   * TeeHole updateMany
   */
  export type TeeHoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeeHoles.
     */
    data: XOR<TeeHoleUpdateManyMutationInput, TeeHoleUncheckedUpdateManyInput>
    /**
     * Filter which TeeHoles to update
     */
    where?: TeeHoleWhereInput
    /**
     * Limit how many TeeHoles to update.
     */
    limit?: number
  }

  /**
   * TeeHole updateManyAndReturn
   */
  export type TeeHoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * The data used to update TeeHoles.
     */
    data: XOR<TeeHoleUpdateManyMutationInput, TeeHoleUncheckedUpdateManyInput>
    /**
     * Filter which TeeHoles to update
     */
    where?: TeeHoleWhereInput
    /**
     * Limit how many TeeHoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeeHole upsert
   */
  export type TeeHoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * The filter to search for the TeeHole to update in case it exists.
     */
    where: TeeHoleWhereUniqueInput
    /**
     * In case the TeeHole found by the `where` argument doesn't exist, create a new TeeHole with this data.
     */
    create: XOR<TeeHoleCreateInput, TeeHoleUncheckedCreateInput>
    /**
     * In case the TeeHole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeeHoleUpdateInput, TeeHoleUncheckedUpdateInput>
  }

  /**
   * TeeHole delete
   */
  export type TeeHoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
    /**
     * Filter which TeeHole to delete.
     */
    where: TeeHoleWhereUniqueInput
  }

  /**
   * TeeHole deleteMany
   */
  export type TeeHoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeeHoles to delete
     */
    where?: TeeHoleWhereInput
    /**
     * Limit how many TeeHoles to delete.
     */
    limit?: number
  }

  /**
   * TeeHole without action
   */
  export type TeeHoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeeHole
     */
    select?: TeeHoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeeHole
     */
    omit?: TeeHoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeeHoleInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    holesPlayed: number | null
    adjustedGrossScore: number | null
    differential: number | null
    courseHandicap: number | null
  }

  export type RoundSumAggregateOutputType = {
    holesPlayed: number | null
    adjustedGrossScore: number | null
    differential: number | null
    courseHandicap: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teeId: string | null
    datePlayed: Date | null
    notes: string | null
    holesPlayed: number | null
    adjustedGrossScore: number | null
    differential: number | null
    courseHandicap: number | null
    courseHandicapSource: $Enums.CourseHandicapSource | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teeId: string | null
    datePlayed: Date | null
    notes: string | null
    holesPlayed: number | null
    adjustedGrossScore: number | null
    differential: number | null
    courseHandicap: number | null
    courseHandicapSource: $Enums.CourseHandicapSource | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    userId: number
    teeId: number
    datePlayed: number
    notes: number
    holesPlayed: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    holesPlayed?: true
    adjustedGrossScore?: true
    differential?: true
    courseHandicap?: true
  }

  export type RoundSumAggregateInputType = {
    holesPlayed?: true
    adjustedGrossScore?: true
    differential?: true
    courseHandicap?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    userId?: true
    teeId?: true
    datePlayed?: true
    notes?: true
    holesPlayed?: true
    adjustedGrossScore?: true
    differential?: true
    courseHandicap?: true
    courseHandicapSource?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    userId?: true
    teeId?: true
    datePlayed?: true
    notes?: true
    holesPlayed?: true
    adjustedGrossScore?: true
    differential?: true
    courseHandicap?: true
    courseHandicapSource?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    userId?: true
    teeId?: true
    datePlayed?: true
    notes?: true
    holesPlayed?: true
    adjustedGrossScore?: true
    differential?: true
    courseHandicap?: true
    courseHandicapSource?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    userId: string
    teeId: string
    datePlayed: Date
    notes: string | null
    holesPlayed: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt: Date
    updatedAt: Date
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teeId?: boolean
    datePlayed?: boolean
    notes?: boolean
    holesPlayed?: boolean
    adjustedGrossScore?: boolean
    differential?: boolean
    courseHandicap?: boolean
    courseHandicapSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tee?: boolean | TeeDefaultArgs<ExtArgs>
    holeScores?: boolean | Round$holeScoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teeId?: boolean
    datePlayed?: boolean
    notes?: boolean
    holesPlayed?: boolean
    adjustedGrossScore?: boolean
    differential?: boolean
    courseHandicap?: boolean
    courseHandicapSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teeId?: boolean
    datePlayed?: boolean
    notes?: boolean
    holesPlayed?: boolean
    adjustedGrossScore?: boolean
    differential?: boolean
    courseHandicap?: boolean
    courseHandicapSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    userId?: boolean
    teeId?: boolean
    datePlayed?: boolean
    notes?: boolean
    holesPlayed?: boolean
    adjustedGrossScore?: boolean
    differential?: boolean
    courseHandicap?: boolean
    courseHandicapSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teeId" | "datePlayed" | "notes" | "holesPlayed" | "adjustedGrossScore" | "differential" | "courseHandicap" | "courseHandicapSource" | "createdAt" | "updatedAt", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tee?: boolean | TeeDefaultArgs<ExtArgs>
    holeScores?: boolean | Round$holeScoresArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tee?: boolean | TeeDefaultArgs<ExtArgs>
  }

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      tee: Prisma.$TeePayload<ExtArgs>
      holeScores: Prisma.$HoleScorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teeId: string
      datePlayed: Date
      notes: string | null
      holesPlayed: number
      adjustedGrossScore: number
      differential: number
      courseHandicap: number
      courseHandicapSource: $Enums.CourseHandicapSource
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tee<T extends TeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeeDefaultArgs<ExtArgs>>): Prisma__TeeClient<$Result.GetResult<Prisma.$TeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    holeScores<T extends Round$holeScoresArgs<ExtArgs> = {}>(args?: Subset<T, Round$holeScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly userId: FieldRef<"Round", 'String'>
    readonly teeId: FieldRef<"Round", 'String'>
    readonly datePlayed: FieldRef<"Round", 'DateTime'>
    readonly notes: FieldRef<"Round", 'String'>
    readonly holesPlayed: FieldRef<"Round", 'Int'>
    readonly adjustedGrossScore: FieldRef<"Round", 'Int'>
    readonly differential: FieldRef<"Round", 'Float'>
    readonly courseHandicap: FieldRef<"Round", 'Int'>
    readonly courseHandicapSource: FieldRef<"Round", 'CourseHandicapSource'>
    readonly createdAt: FieldRef<"Round", 'DateTime'>
    readonly updatedAt: FieldRef<"Round", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.holeScores
   */
  export type Round$holeScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    where?: HoleScoreWhereInput
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    cursor?: HoleScoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model HoleScore
   */

  export type AggregateHoleScore = {
    _count: HoleScoreCountAggregateOutputType | null
    _avg: HoleScoreAvgAggregateOutputType | null
    _sum: HoleScoreSumAggregateOutputType | null
    _min: HoleScoreMinAggregateOutputType | null
    _max: HoleScoreMaxAggregateOutputType | null
  }

  export type HoleScoreAvgAggregateOutputType = {
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    score: number | null
  }

  export type HoleScoreSumAggregateOutputType = {
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    score: number | null
  }

  export type HoleScoreMinAggregateOutputType = {
    id: string | null
    roundId: string | null
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    score: number | null
  }

  export type HoleScoreMaxAggregateOutputType = {
    id: string | null
    roundId: string | null
    holeNumber: number | null
    par: number | null
    strokeIndex: number | null
    score: number | null
  }

  export type HoleScoreCountAggregateOutputType = {
    id: number
    roundId: number
    holeNumber: number
    par: number
    strokeIndex: number
    score: number
    _all: number
  }


  export type HoleScoreAvgAggregateInputType = {
    holeNumber?: true
    par?: true
    strokeIndex?: true
    score?: true
  }

  export type HoleScoreSumAggregateInputType = {
    holeNumber?: true
    par?: true
    strokeIndex?: true
    score?: true
  }

  export type HoleScoreMinAggregateInputType = {
    id?: true
    roundId?: true
    holeNumber?: true
    par?: true
    strokeIndex?: true
    score?: true
  }

  export type HoleScoreMaxAggregateInputType = {
    id?: true
    roundId?: true
    holeNumber?: true
    par?: true
    strokeIndex?: true
    score?: true
  }

  export type HoleScoreCountAggregateInputType = {
    id?: true
    roundId?: true
    holeNumber?: true
    par?: true
    strokeIndex?: true
    score?: true
    _all?: true
  }

  export type HoleScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoleScore to aggregate.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HoleScores
    **/
    _count?: true | HoleScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoleScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoleScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoleScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoleScoreMaxAggregateInputType
  }

  export type GetHoleScoreAggregateType<T extends HoleScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateHoleScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoleScore[P]>
      : GetScalarType<T[P], AggregateHoleScore[P]>
  }




  export type HoleScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoleScoreWhereInput
    orderBy?: HoleScoreOrderByWithAggregationInput | HoleScoreOrderByWithAggregationInput[]
    by: HoleScoreScalarFieldEnum[] | HoleScoreScalarFieldEnum
    having?: HoleScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoleScoreCountAggregateInputType | true
    _avg?: HoleScoreAvgAggregateInputType
    _sum?: HoleScoreSumAggregateInputType
    _min?: HoleScoreMinAggregateInputType
    _max?: HoleScoreMaxAggregateInputType
  }

  export type HoleScoreGroupByOutputType = {
    id: string
    roundId: string
    holeNumber: number
    par: number
    strokeIndex: number
    score: number | null
    _count: HoleScoreCountAggregateOutputType | null
    _avg: HoleScoreAvgAggregateOutputType | null
    _sum: HoleScoreSumAggregateOutputType | null
    _min: HoleScoreMinAggregateOutputType | null
    _max: HoleScoreMaxAggregateOutputType | null
  }

  type GetHoleScoreGroupByPayload<T extends HoleScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoleScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoleScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoleScoreGroupByOutputType[P]>
            : GetScalarType<T[P], HoleScoreGroupByOutputType[P]>
        }
      >
    >


  export type HoleScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    score?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeScore"]>

  export type HoleScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    score?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeScore"]>

  export type HoleScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    score?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holeScore"]>

  export type HoleScoreSelectScalar = {
    id?: boolean
    roundId?: boolean
    holeNumber?: boolean
    par?: boolean
    strokeIndex?: boolean
    score?: boolean
  }

  export type HoleScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roundId" | "holeNumber" | "par" | "strokeIndex" | "score", ExtArgs["result"]["holeScore"]>
  export type HoleScoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
  }
  export type HoleScoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
  }
  export type HoleScoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
  }

  export type $HoleScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HoleScore"
    objects: {
      round: Prisma.$RoundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roundId: string
      holeNumber: number
      par: number
      strokeIndex: number
      score: number | null
    }, ExtArgs["result"]["holeScore"]>
    composites: {}
  }

  type HoleScoreGetPayload<S extends boolean | null | undefined | HoleScoreDefaultArgs> = $Result.GetResult<Prisma.$HoleScorePayload, S>

  type HoleScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoleScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoleScoreCountAggregateInputType | true
    }

  export interface HoleScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HoleScore'], meta: { name: 'HoleScore' } }
    /**
     * Find zero or one HoleScore that matches the filter.
     * @param {HoleScoreFindUniqueArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoleScoreFindUniqueArgs>(args: SelectSubset<T, HoleScoreFindUniqueArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HoleScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoleScoreFindUniqueOrThrowArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoleScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, HoleScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoleScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreFindFirstArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoleScoreFindFirstArgs>(args?: SelectSubset<T, HoleScoreFindFirstArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HoleScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreFindFirstOrThrowArgs} args - Arguments to find a HoleScore
     * @example
     * // Get one HoleScore
     * const holeScore = await prisma.holeScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoleScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, HoleScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HoleScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HoleScores
     * const holeScores = await prisma.holeScore.findMany()
     * 
     * // Get first 10 HoleScores
     * const holeScores = await prisma.holeScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holeScoreWithIdOnly = await prisma.holeScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoleScoreFindManyArgs>(args?: SelectSubset<T, HoleScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HoleScore.
     * @param {HoleScoreCreateArgs} args - Arguments to create a HoleScore.
     * @example
     * // Create one HoleScore
     * const HoleScore = await prisma.holeScore.create({
     *   data: {
     *     // ... data to create a HoleScore
     *   }
     * })
     * 
     */
    create<T extends HoleScoreCreateArgs>(args: SelectSubset<T, HoleScoreCreateArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HoleScores.
     * @param {HoleScoreCreateManyArgs} args - Arguments to create many HoleScores.
     * @example
     * // Create many HoleScores
     * const holeScore = await prisma.holeScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoleScoreCreateManyArgs>(args?: SelectSubset<T, HoleScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HoleScores and returns the data saved in the database.
     * @param {HoleScoreCreateManyAndReturnArgs} args - Arguments to create many HoleScores.
     * @example
     * // Create many HoleScores
     * const holeScore = await prisma.holeScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HoleScores and only return the `id`
     * const holeScoreWithIdOnly = await prisma.holeScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoleScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, HoleScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HoleScore.
     * @param {HoleScoreDeleteArgs} args - Arguments to delete one HoleScore.
     * @example
     * // Delete one HoleScore
     * const HoleScore = await prisma.holeScore.delete({
     *   where: {
     *     // ... filter to delete one HoleScore
     *   }
     * })
     * 
     */
    delete<T extends HoleScoreDeleteArgs>(args: SelectSubset<T, HoleScoreDeleteArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HoleScore.
     * @param {HoleScoreUpdateArgs} args - Arguments to update one HoleScore.
     * @example
     * // Update one HoleScore
     * const holeScore = await prisma.holeScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoleScoreUpdateArgs>(args: SelectSubset<T, HoleScoreUpdateArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HoleScores.
     * @param {HoleScoreDeleteManyArgs} args - Arguments to filter HoleScores to delete.
     * @example
     * // Delete a few HoleScores
     * const { count } = await prisma.holeScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoleScoreDeleteManyArgs>(args?: SelectSubset<T, HoleScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoleScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HoleScores
     * const holeScore = await prisma.holeScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoleScoreUpdateManyArgs>(args: SelectSubset<T, HoleScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HoleScores and returns the data updated in the database.
     * @param {HoleScoreUpdateManyAndReturnArgs} args - Arguments to update many HoleScores.
     * @example
     * // Update many HoleScores
     * const holeScore = await prisma.holeScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HoleScores and only return the `id`
     * const holeScoreWithIdOnly = await prisma.holeScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends HoleScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, HoleScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HoleScore.
     * @param {HoleScoreUpsertArgs} args - Arguments to update or create a HoleScore.
     * @example
     * // Update or create a HoleScore
     * const holeScore = await prisma.holeScore.upsert({
     *   create: {
     *     // ... data to create a HoleScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HoleScore we want to update
     *   }
     * })
     */
    upsert<T extends HoleScoreUpsertArgs>(args: SelectSubset<T, HoleScoreUpsertArgs<ExtArgs>>): Prisma__HoleScoreClient<$Result.GetResult<Prisma.$HoleScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HoleScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreCountArgs} args - Arguments to filter HoleScores to count.
     * @example
     * // Count the number of HoleScores
     * const count = await prisma.holeScore.count({
     *   where: {
     *     // ... the filter for the HoleScores we want to count
     *   }
     * })
    **/
    count<T extends HoleScoreCountArgs>(
      args?: Subset<T, HoleScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoleScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HoleScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoleScoreAggregateArgs>(args: Subset<T, HoleScoreAggregateArgs>): Prisma.PrismaPromise<GetHoleScoreAggregateType<T>>

    /**
     * Group by HoleScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoleScoreGroupByArgs} args - Group by arguments.
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
      T extends HoleScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoleScoreGroupByArgs['orderBy'] }
        : { orderBy?: HoleScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoleScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoleScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HoleScore model
   */
  readonly fields: HoleScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HoleScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoleScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HoleScore model
   */
  interface HoleScoreFieldRefs {
    readonly id: FieldRef<"HoleScore", 'String'>
    readonly roundId: FieldRef<"HoleScore", 'String'>
    readonly holeNumber: FieldRef<"HoleScore", 'Int'>
    readonly par: FieldRef<"HoleScore", 'Int'>
    readonly strokeIndex: FieldRef<"HoleScore", 'Int'>
    readonly score: FieldRef<"HoleScore", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HoleScore findUnique
   */
  export type HoleScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore findUniqueOrThrow
   */
  export type HoleScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore findFirst
   */
  export type HoleScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoleScores.
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleScores.
     */
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * HoleScore findFirstOrThrow
   */
  export type HoleScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScore to fetch.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HoleScores.
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleScores.
     */
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * HoleScore findMany
   */
  export type HoleScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter, which HoleScores to fetch.
     */
    where?: HoleScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HoleScores to fetch.
     */
    orderBy?: HoleScoreOrderByWithRelationInput | HoleScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HoleScores.
     */
    cursor?: HoleScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HoleScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HoleScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HoleScores.
     */
    distinct?: HoleScoreScalarFieldEnum | HoleScoreScalarFieldEnum[]
  }

  /**
   * HoleScore create
   */
  export type HoleScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * The data needed to create a HoleScore.
     */
    data: XOR<HoleScoreCreateInput, HoleScoreUncheckedCreateInput>
  }

  /**
   * HoleScore createMany
   */
  export type HoleScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HoleScores.
     */
    data: HoleScoreCreateManyInput | HoleScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HoleScore createManyAndReturn
   */
  export type HoleScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * The data used to create many HoleScores.
     */
    data: HoleScoreCreateManyInput | HoleScoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoleScore update
   */
  export type HoleScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * The data needed to update a HoleScore.
     */
    data: XOR<HoleScoreUpdateInput, HoleScoreUncheckedUpdateInput>
    /**
     * Choose, which HoleScore to update.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore updateMany
   */
  export type HoleScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HoleScores.
     */
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyInput>
    /**
     * Filter which HoleScores to update
     */
    where?: HoleScoreWhereInput
    /**
     * Limit how many HoleScores to update.
     */
    limit?: number
  }

  /**
   * HoleScore updateManyAndReturn
   */
  export type HoleScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * The data used to update HoleScores.
     */
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyInput>
    /**
     * Filter which HoleScores to update
     */
    where?: HoleScoreWhereInput
    /**
     * Limit how many HoleScores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HoleScore upsert
   */
  export type HoleScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * The filter to search for the HoleScore to update in case it exists.
     */
    where: HoleScoreWhereUniqueInput
    /**
     * In case the HoleScore found by the `where` argument doesn't exist, create a new HoleScore with this data.
     */
    create: XOR<HoleScoreCreateInput, HoleScoreUncheckedCreateInput>
    /**
     * In case the HoleScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoleScoreUpdateInput, HoleScoreUncheckedUpdateInput>
  }

  /**
   * HoleScore delete
   */
  export type HoleScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
    /**
     * Filter which HoleScore to delete.
     */
    where: HoleScoreWhereUniqueInput
  }

  /**
   * HoleScore deleteMany
   */
  export type HoleScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HoleScores to delete
     */
    where?: HoleScoreWhereInput
    /**
     * Limit how many HoleScores to delete.
     */
    limit?: number
  }

  /**
   * HoleScore without action
   */
  export type HoleScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HoleScore
     */
    select?: HoleScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HoleScore
     */
    omit?: HoleScoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoleScoreInclude<ExtArgs> | null
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


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    club: 'club',
    city: 'city',
    state: 'state',
    country: 'country',
    lat: 'lat',
    lng: 'lng',
    slug: 'slug',
    source: 'source',
    externalId: 'externalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const TeeScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    name: 'name',
    gender: 'gender',
    rating: 'rating',
    slope: 'slope',
    par: 'par',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeeScalarFieldEnum = (typeof TeeScalarFieldEnum)[keyof typeof TeeScalarFieldEnum]


  export const TeeHoleScalarFieldEnum: {
    id: 'id',
    teeId: 'teeId',
    holeNumber: 'holeNumber',
    par: 'par',
    strokeIndex: 'strokeIndex',
    yards: 'yards'
  };

  export type TeeHoleScalarFieldEnum = (typeof TeeHoleScalarFieldEnum)[keyof typeof TeeHoleScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teeId: 'teeId',
    datePlayed: 'datePlayed',
    notes: 'notes',
    holesPlayed: 'holesPlayed',
    adjustedGrossScore: 'adjustedGrossScore',
    differential: 'differential',
    courseHandicap: 'courseHandicap',
    courseHandicapSource: 'courseHandicapSource',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const HoleScoreScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    holeNumber: 'holeNumber',
    par: 'par',
    strokeIndex: 'strokeIndex',
    score: 'score'
  };

  export type HoleScoreScalarFieldEnum = (typeof HoleScoreScalarFieldEnum)[keyof typeof HoleScoreScalarFieldEnum]


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
   * Reference to a field of type 'CourseSource'
   */
  export type EnumCourseSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseSource'>
    


  /**
   * Reference to a field of type 'CourseSource[]'
   */
  export type ListEnumCourseSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseSource[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CourseHandicapSource'
   */
  export type EnumCourseHandicapSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseHandicapSource'>
    


  /**
   * Reference to a field of type 'CourseHandicapSource[]'
   */
  export type ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseHandicapSource[]'>
    
  /**
   * Deep Input Types
   */


  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    club?: StringNullableFilter<"Course"> | string | null
    city?: StringNullableFilter<"Course"> | string | null
    state?: StringNullableFilter<"Course"> | string | null
    country?: StringNullableFilter<"Course"> | string | null
    lat?: FloatNullableFilter<"Course"> | number | null
    lng?: FloatNullableFilter<"Course"> | number | null
    slug?: StringNullableFilter<"Course"> | string | null
    source?: EnumCourseSourceFilter<"Course"> | $Enums.CourseSource
    externalId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    tees?: TeeListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    club?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    source?: SortOrder
    externalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tees?: TeeOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    source_externalId?: CourseSourceExternalIdCompoundUniqueInput
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    club?: StringNullableFilter<"Course"> | string | null
    city?: StringNullableFilter<"Course"> | string | null
    state?: StringNullableFilter<"Course"> | string | null
    country?: StringNullableFilter<"Course"> | string | null
    lat?: FloatNullableFilter<"Course"> | number | null
    lng?: FloatNullableFilter<"Course"> | number | null
    source?: EnumCourseSourceFilter<"Course"> | $Enums.CourseSource
    externalId?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    tees?: TeeListRelationFilter
  }, "id" | "slug" | "source_externalId">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    club?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    source?: SortOrder
    externalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    club?: StringNullableWithAggregatesFilter<"Course"> | string | null
    city?: StringNullableWithAggregatesFilter<"Course"> | string | null
    state?: StringNullableWithAggregatesFilter<"Course"> | string | null
    country?: StringNullableWithAggregatesFilter<"Course"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Course"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Course"> | number | null
    slug?: StringNullableWithAggregatesFilter<"Course"> | string | null
    source?: EnumCourseSourceWithAggregatesFilter<"Course"> | $Enums.CourseSource
    externalId?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type TeeWhereInput = {
    AND?: TeeWhereInput | TeeWhereInput[]
    OR?: TeeWhereInput[]
    NOT?: TeeWhereInput | TeeWhereInput[]
    id?: StringFilter<"Tee"> | string
    courseId?: StringFilter<"Tee"> | string
    name?: StringFilter<"Tee"> | string
    gender?: EnumGenderFilter<"Tee"> | $Enums.Gender
    rating?: FloatFilter<"Tee"> | number
    slope?: IntFilter<"Tee"> | number
    par?: IntFilter<"Tee"> | number
    createdAt?: DateTimeFilter<"Tee"> | Date | string
    updatedAt?: DateTimeFilter<"Tee"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    holes?: TeeHoleListRelationFilter
    rounds?: RoundListRelationFilter
  }

  export type TeeOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    holes?: TeeHoleOrderByRelationAggregateInput
    rounds?: RoundOrderByRelationAggregateInput
  }

  export type TeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_name_gender?: TeeCourseIdNameGenderCompoundUniqueInput
    AND?: TeeWhereInput | TeeWhereInput[]
    OR?: TeeWhereInput[]
    NOT?: TeeWhereInput | TeeWhereInput[]
    courseId?: StringFilter<"Tee"> | string
    name?: StringFilter<"Tee"> | string
    gender?: EnumGenderFilter<"Tee"> | $Enums.Gender
    rating?: FloatFilter<"Tee"> | number
    slope?: IntFilter<"Tee"> | number
    par?: IntFilter<"Tee"> | number
    createdAt?: DateTimeFilter<"Tee"> | Date | string
    updatedAt?: DateTimeFilter<"Tee"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    holes?: TeeHoleListRelationFilter
    rounds?: RoundListRelationFilter
  }, "id" | "courseId_name_gender">

  export type TeeOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeeCountOrderByAggregateInput
    _avg?: TeeAvgOrderByAggregateInput
    _max?: TeeMaxOrderByAggregateInput
    _min?: TeeMinOrderByAggregateInput
    _sum?: TeeSumOrderByAggregateInput
  }

  export type TeeScalarWhereWithAggregatesInput = {
    AND?: TeeScalarWhereWithAggregatesInput | TeeScalarWhereWithAggregatesInput[]
    OR?: TeeScalarWhereWithAggregatesInput[]
    NOT?: TeeScalarWhereWithAggregatesInput | TeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tee"> | string
    courseId?: StringWithAggregatesFilter<"Tee"> | string
    name?: StringWithAggregatesFilter<"Tee"> | string
    gender?: EnumGenderWithAggregatesFilter<"Tee"> | $Enums.Gender
    rating?: FloatWithAggregatesFilter<"Tee"> | number
    slope?: IntWithAggregatesFilter<"Tee"> | number
    par?: IntWithAggregatesFilter<"Tee"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tee"> | Date | string
  }

  export type TeeHoleWhereInput = {
    AND?: TeeHoleWhereInput | TeeHoleWhereInput[]
    OR?: TeeHoleWhereInput[]
    NOT?: TeeHoleWhereInput | TeeHoleWhereInput[]
    id?: StringFilter<"TeeHole"> | string
    teeId?: StringFilter<"TeeHole"> | string
    holeNumber?: IntFilter<"TeeHole"> | number
    par?: IntFilter<"TeeHole"> | number
    strokeIndex?: IntFilter<"TeeHole"> | number
    yards?: IntNullableFilter<"TeeHole"> | number | null
    tee?: XOR<TeeScalarRelationFilter, TeeWhereInput>
  }

  export type TeeHoleOrderByWithRelationInput = {
    id?: SortOrder
    teeId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrderInput | SortOrder
    tee?: TeeOrderByWithRelationInput
  }

  export type TeeHoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teeId_holeNumber?: TeeHoleTeeIdHoleNumberCompoundUniqueInput
    AND?: TeeHoleWhereInput | TeeHoleWhereInput[]
    OR?: TeeHoleWhereInput[]
    NOT?: TeeHoleWhereInput | TeeHoleWhereInput[]
    teeId?: StringFilter<"TeeHole"> | string
    holeNumber?: IntFilter<"TeeHole"> | number
    par?: IntFilter<"TeeHole"> | number
    strokeIndex?: IntFilter<"TeeHole"> | number
    yards?: IntNullableFilter<"TeeHole"> | number | null
    tee?: XOR<TeeScalarRelationFilter, TeeWhereInput>
  }, "id" | "teeId_holeNumber">

  export type TeeHoleOrderByWithAggregationInput = {
    id?: SortOrder
    teeId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrderInput | SortOrder
    _count?: TeeHoleCountOrderByAggregateInput
    _avg?: TeeHoleAvgOrderByAggregateInput
    _max?: TeeHoleMaxOrderByAggregateInput
    _min?: TeeHoleMinOrderByAggregateInput
    _sum?: TeeHoleSumOrderByAggregateInput
  }

  export type TeeHoleScalarWhereWithAggregatesInput = {
    AND?: TeeHoleScalarWhereWithAggregatesInput | TeeHoleScalarWhereWithAggregatesInput[]
    OR?: TeeHoleScalarWhereWithAggregatesInput[]
    NOT?: TeeHoleScalarWhereWithAggregatesInput | TeeHoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeeHole"> | string
    teeId?: StringWithAggregatesFilter<"TeeHole"> | string
    holeNumber?: IntWithAggregatesFilter<"TeeHole"> | number
    par?: IntWithAggregatesFilter<"TeeHole"> | number
    strokeIndex?: IntWithAggregatesFilter<"TeeHole"> | number
    yards?: IntNullableWithAggregatesFilter<"TeeHole"> | number | null
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    userId?: StringFilter<"Round"> | string
    teeId?: StringFilter<"Round"> | string
    datePlayed?: DateTimeFilter<"Round"> | Date | string
    notes?: StringNullableFilter<"Round"> | string | null
    holesPlayed?: IntFilter<"Round"> | number
    adjustedGrossScore?: IntFilter<"Round"> | number
    differential?: FloatFilter<"Round"> | number
    courseHandicap?: IntFilter<"Round"> | number
    courseHandicapSource?: EnumCourseHandicapSourceFilter<"Round"> | $Enums.CourseHandicapSource
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
    tee?: XOR<TeeScalarRelationFilter, TeeWhereInput>
    holeScores?: HoleScoreListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teeId?: SortOrder
    datePlayed?: SortOrder
    notes?: SortOrderInput | SortOrder
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
    courseHandicapSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tee?: TeeOrderByWithRelationInput
    holeScores?: HoleScoreOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    userId?: StringFilter<"Round"> | string
    teeId?: StringFilter<"Round"> | string
    datePlayed?: DateTimeFilter<"Round"> | Date | string
    notes?: StringNullableFilter<"Round"> | string | null
    holesPlayed?: IntFilter<"Round"> | number
    adjustedGrossScore?: IntFilter<"Round"> | number
    differential?: FloatFilter<"Round"> | number
    courseHandicap?: IntFilter<"Round"> | number
    courseHandicapSource?: EnumCourseHandicapSourceFilter<"Round"> | $Enums.CourseHandicapSource
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
    tee?: XOR<TeeScalarRelationFilter, TeeWhereInput>
    holeScores?: HoleScoreListRelationFilter
  }, "id">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teeId?: SortOrder
    datePlayed?: SortOrder
    notes?: SortOrderInput | SortOrder
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
    courseHandicapSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    userId?: StringWithAggregatesFilter<"Round"> | string
    teeId?: StringWithAggregatesFilter<"Round"> | string
    datePlayed?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Round"> | string | null
    holesPlayed?: IntWithAggregatesFilter<"Round"> | number
    adjustedGrossScore?: IntWithAggregatesFilter<"Round"> | number
    differential?: FloatWithAggregatesFilter<"Round"> | number
    courseHandicap?: IntWithAggregatesFilter<"Round"> | number
    courseHandicapSource?: EnumCourseHandicapSourceWithAggregatesFilter<"Round"> | $Enums.CourseHandicapSource
    createdAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
  }

  export type HoleScoreWhereInput = {
    AND?: HoleScoreWhereInput | HoleScoreWhereInput[]
    OR?: HoleScoreWhereInput[]
    NOT?: HoleScoreWhereInput | HoleScoreWhereInput[]
    id?: StringFilter<"HoleScore"> | string
    roundId?: StringFilter<"HoleScore"> | string
    holeNumber?: IntFilter<"HoleScore"> | number
    par?: IntFilter<"HoleScore"> | number
    strokeIndex?: IntFilter<"HoleScore"> | number
    score?: IntNullableFilter<"HoleScore"> | number | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
  }

  export type HoleScoreOrderByWithRelationInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrderInput | SortOrder
    round?: RoundOrderByWithRelationInput
  }

  export type HoleScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roundId_holeNumber?: HoleScoreRoundIdHoleNumberCompoundUniqueInput
    AND?: HoleScoreWhereInput | HoleScoreWhereInput[]
    OR?: HoleScoreWhereInput[]
    NOT?: HoleScoreWhereInput | HoleScoreWhereInput[]
    roundId?: StringFilter<"HoleScore"> | string
    holeNumber?: IntFilter<"HoleScore"> | number
    par?: IntFilter<"HoleScore"> | number
    strokeIndex?: IntFilter<"HoleScore"> | number
    score?: IntNullableFilter<"HoleScore"> | number | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
  }, "id" | "roundId_holeNumber">

  export type HoleScoreOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrderInput | SortOrder
    _count?: HoleScoreCountOrderByAggregateInput
    _avg?: HoleScoreAvgOrderByAggregateInput
    _max?: HoleScoreMaxOrderByAggregateInput
    _min?: HoleScoreMinOrderByAggregateInput
    _sum?: HoleScoreSumOrderByAggregateInput
  }

  export type HoleScoreScalarWhereWithAggregatesInput = {
    AND?: HoleScoreScalarWhereWithAggregatesInput | HoleScoreScalarWhereWithAggregatesInput[]
    OR?: HoleScoreScalarWhereWithAggregatesInput[]
    NOT?: HoleScoreScalarWhereWithAggregatesInput | HoleScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HoleScore"> | string
    roundId?: StringWithAggregatesFilter<"HoleScore"> | string
    holeNumber?: IntWithAggregatesFilter<"HoleScore"> | number
    par?: IntWithAggregatesFilter<"HoleScore"> | number
    strokeIndex?: IntWithAggregatesFilter<"HoleScore"> | number
    score?: IntNullableWithAggregatesFilter<"HoleScore"> | number | null
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    club?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    slug?: string | null
    source?: $Enums.CourseSource
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tees?: TeeCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    club?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    slug?: string | null
    source?: $Enums.CourseSource
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tees?: TeeUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    club?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumCourseSourceFieldUpdateOperationsInput | $Enums.CourseSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tees?: TeeUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    club?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumCourseSourceFieldUpdateOperationsInput | $Enums.CourseSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tees?: TeeUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    club?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    slug?: string | null
    source?: $Enums.CourseSource
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    club?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumCourseSourceFieldUpdateOperationsInput | $Enums.CourseSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    club?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumCourseSourceFieldUpdateOperationsInput | $Enums.CourseSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeeCreateInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTeesInput
    holes?: TeeHoleCreateNestedManyWithoutTeeInput
    rounds?: RoundCreateNestedManyWithoutTeeInput
  }

  export type TeeUncheckedCreateInput = {
    id?: string
    courseId: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holes?: TeeHoleUncheckedCreateNestedManyWithoutTeeInput
    rounds?: RoundUncheckedCreateNestedManyWithoutTeeInput
  }

  export type TeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTeesNestedInput
    holes?: TeeHoleUpdateManyWithoutTeeNestedInput
    rounds?: RoundUpdateManyWithoutTeeNestedInput
  }

  export type TeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holes?: TeeHoleUncheckedUpdateManyWithoutTeeNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutTeeNestedInput
  }

  export type TeeCreateManyInput = {
    id?: string
    courseId: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeeHoleCreateInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards?: number | null
    tee: TeeCreateNestedOneWithoutHolesInput
  }

  export type TeeHoleUncheckedCreateInput = {
    id?: string
    teeId: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards?: number | null
  }

  export type TeeHoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
    tee?: TeeUpdateOneRequiredWithoutHolesNestedInput
  }

  export type TeeHoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teeId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeeHoleCreateManyInput = {
    id?: string
    teeId: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards?: number | null
  }

  export type TeeHoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeeHoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teeId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundCreateInput = {
    id?: string
    userId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
    tee: TeeCreateNestedOneWithoutRoundsInput
    holeScores?: HoleScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: string
    userId: string
    teeId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
    holeScores?: HoleScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tee?: TeeUpdateOneRequiredWithoutRoundsNestedInput
    holeScores?: HoleScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teeId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holeScores?: HoleScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: string
    userId: string
    teeId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teeId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleScoreCreateInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    score?: number | null
    round: RoundCreateNestedOneWithoutHoleScoresInput
  }

  export type HoleScoreUncheckedCreateInput = {
    id?: string
    roundId: string
    holeNumber: number
    par: number
    strokeIndex: number
    score?: number | null
  }

  export type HoleScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
    round?: RoundUpdateOneRequiredWithoutHoleScoresNestedInput
  }

  export type HoleScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreCreateManyInput = {
    id?: string
    roundId: string
    holeNumber: number
    par: number
    strokeIndex: number
    score?: number | null
  }

  export type HoleScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumCourseSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseSource | EnumCourseSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseSourceFilter<$PrismaModel> | $Enums.CourseSource
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeeListRelationFilter = {
    every?: TeeWhereInput
    some?: TeeWhereInput
    none?: TeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseSourceExternalIdCompoundUniqueInput = {
    source: $Enums.CourseSource
    externalId: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    club?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    slug?: SortOrder
    source?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    club?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    slug?: SortOrder
    source?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    club?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    slug?: SortOrder
    source?: SortOrder
    externalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumCourseSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseSource | EnumCourseSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseSourceWithAggregatesFilter<$PrismaModel> | $Enums.CourseSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseSourceFilter<$PrismaModel>
    _max?: NestedEnumCourseSourceFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type TeeHoleListRelationFilter = {
    every?: TeeHoleWhereInput
    some?: TeeHoleWhereInput
    none?: TeeHoleWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type TeeHoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeeCourseIdNameGenderCompoundUniqueInput = {
    courseId: string
    name: string
    gender: $Enums.Gender
  }

  export type TeeCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeeAvgOrderByAggregateInput = {
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
  }

  export type TeeMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeeMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeeSumOrderByAggregateInput = {
    rating?: SortOrder
    slope?: SortOrder
    par?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeeScalarRelationFilter = {
    is?: TeeWhereInput
    isNot?: TeeWhereInput
  }

  export type TeeHoleTeeIdHoleNumberCompoundUniqueInput = {
    teeId: string
    holeNumber: number
  }

  export type TeeHoleCountOrderByAggregateInput = {
    id?: SortOrder
    teeId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrder
  }

  export type TeeHoleAvgOrderByAggregateInput = {
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrder
  }

  export type TeeHoleMaxOrderByAggregateInput = {
    id?: SortOrder
    teeId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrder
  }

  export type TeeHoleMinOrderByAggregateInput = {
    id?: SortOrder
    teeId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrder
  }

  export type TeeHoleSumOrderByAggregateInput = {
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    yards?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumCourseHandicapSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseHandicapSource | EnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseHandicapSourceFilter<$PrismaModel> | $Enums.CourseHandicapSource
  }

  export type HoleScoreListRelationFilter = {
    every?: HoleScoreWhereInput
    some?: HoleScoreWhereInput
    none?: HoleScoreWhereInput
  }

  export type HoleScoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teeId?: SortOrder
    datePlayed?: SortOrder
    notes?: SortOrder
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
    courseHandicapSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teeId?: SortOrder
    datePlayed?: SortOrder
    notes?: SortOrder
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
    courseHandicapSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teeId?: SortOrder
    datePlayed?: SortOrder
    notes?: SortOrder
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
    courseHandicapSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    holesPlayed?: SortOrder
    adjustedGrossScore?: SortOrder
    differential?: SortOrder
    courseHandicap?: SortOrder
  }

  export type EnumCourseHandicapSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseHandicapSource | EnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseHandicapSourceWithAggregatesFilter<$PrismaModel> | $Enums.CourseHandicapSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseHandicapSourceFilter<$PrismaModel>
    _max?: NestedEnumCourseHandicapSourceFilter<$PrismaModel>
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type HoleScoreRoundIdHoleNumberCompoundUniqueInput = {
    roundId: string
    holeNumber: number
  }

  export type HoleScoreCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrder
  }

  export type HoleScoreAvgOrderByAggregateInput = {
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrder
  }

  export type HoleScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrder
  }

  export type HoleScoreMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrder
  }

  export type HoleScoreSumOrderByAggregateInput = {
    holeNumber?: SortOrder
    par?: SortOrder
    strokeIndex?: SortOrder
    score?: SortOrder
  }

  export type TeeCreateNestedManyWithoutCourseInput = {
    create?: XOR<TeeCreateWithoutCourseInput, TeeUncheckedCreateWithoutCourseInput> | TeeCreateWithoutCourseInput[] | TeeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeCreateOrConnectWithoutCourseInput | TeeCreateOrConnectWithoutCourseInput[]
    createMany?: TeeCreateManyCourseInputEnvelope
    connect?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
  }

  export type TeeUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TeeCreateWithoutCourseInput, TeeUncheckedCreateWithoutCourseInput> | TeeCreateWithoutCourseInput[] | TeeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeCreateOrConnectWithoutCourseInput | TeeCreateOrConnectWithoutCourseInput[]
    createMany?: TeeCreateManyCourseInputEnvelope
    connect?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCourseSourceFieldUpdateOperationsInput = {
    set?: $Enums.CourseSource
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeeUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TeeCreateWithoutCourseInput, TeeUncheckedCreateWithoutCourseInput> | TeeCreateWithoutCourseInput[] | TeeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeCreateOrConnectWithoutCourseInput | TeeCreateOrConnectWithoutCourseInput[]
    upsert?: TeeUpsertWithWhereUniqueWithoutCourseInput | TeeUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TeeCreateManyCourseInputEnvelope
    set?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    disconnect?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    delete?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    connect?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    update?: TeeUpdateWithWhereUniqueWithoutCourseInput | TeeUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TeeUpdateManyWithWhereWithoutCourseInput | TeeUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TeeScalarWhereInput | TeeScalarWhereInput[]
  }

  export type TeeUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TeeCreateWithoutCourseInput, TeeUncheckedCreateWithoutCourseInput> | TeeCreateWithoutCourseInput[] | TeeUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TeeCreateOrConnectWithoutCourseInput | TeeCreateOrConnectWithoutCourseInput[]
    upsert?: TeeUpsertWithWhereUniqueWithoutCourseInput | TeeUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TeeCreateManyCourseInputEnvelope
    set?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    disconnect?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    delete?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    connect?: TeeWhereUniqueInput | TeeWhereUniqueInput[]
    update?: TeeUpdateWithWhereUniqueWithoutCourseInput | TeeUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TeeUpdateManyWithWhereWithoutCourseInput | TeeUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TeeScalarWhereInput | TeeScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutTeesInput = {
    create?: XOR<CourseCreateWithoutTeesInput, CourseUncheckedCreateWithoutTeesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTeesInput
    connect?: CourseWhereUniqueInput
  }

  export type TeeHoleCreateNestedManyWithoutTeeInput = {
    create?: XOR<TeeHoleCreateWithoutTeeInput, TeeHoleUncheckedCreateWithoutTeeInput> | TeeHoleCreateWithoutTeeInput[] | TeeHoleUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: TeeHoleCreateOrConnectWithoutTeeInput | TeeHoleCreateOrConnectWithoutTeeInput[]
    createMany?: TeeHoleCreateManyTeeInputEnvelope
    connect?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutTeeInput = {
    create?: XOR<RoundCreateWithoutTeeInput, RoundUncheckedCreateWithoutTeeInput> | RoundCreateWithoutTeeInput[] | RoundUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeInput | RoundCreateOrConnectWithoutTeeInput[]
    createMany?: RoundCreateManyTeeInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type TeeHoleUncheckedCreateNestedManyWithoutTeeInput = {
    create?: XOR<TeeHoleCreateWithoutTeeInput, TeeHoleUncheckedCreateWithoutTeeInput> | TeeHoleCreateWithoutTeeInput[] | TeeHoleUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: TeeHoleCreateOrConnectWithoutTeeInput | TeeHoleCreateOrConnectWithoutTeeInput[]
    createMany?: TeeHoleCreateManyTeeInputEnvelope
    connect?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutTeeInput = {
    create?: XOR<RoundCreateWithoutTeeInput, RoundUncheckedCreateWithoutTeeInput> | RoundCreateWithoutTeeInput[] | RoundUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeInput | RoundCreateOrConnectWithoutTeeInput[]
    createMany?: RoundCreateManyTeeInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
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

  export type CourseUpdateOneRequiredWithoutTeesNestedInput = {
    create?: XOR<CourseCreateWithoutTeesInput, CourseUncheckedCreateWithoutTeesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTeesInput
    upsert?: CourseUpsertWithoutTeesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTeesInput, CourseUpdateWithoutTeesInput>, CourseUncheckedUpdateWithoutTeesInput>
  }

  export type TeeHoleUpdateManyWithoutTeeNestedInput = {
    create?: XOR<TeeHoleCreateWithoutTeeInput, TeeHoleUncheckedCreateWithoutTeeInput> | TeeHoleCreateWithoutTeeInput[] | TeeHoleUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: TeeHoleCreateOrConnectWithoutTeeInput | TeeHoleCreateOrConnectWithoutTeeInput[]
    upsert?: TeeHoleUpsertWithWhereUniqueWithoutTeeInput | TeeHoleUpsertWithWhereUniqueWithoutTeeInput[]
    createMany?: TeeHoleCreateManyTeeInputEnvelope
    set?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    disconnect?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    delete?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    connect?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    update?: TeeHoleUpdateWithWhereUniqueWithoutTeeInput | TeeHoleUpdateWithWhereUniqueWithoutTeeInput[]
    updateMany?: TeeHoleUpdateManyWithWhereWithoutTeeInput | TeeHoleUpdateManyWithWhereWithoutTeeInput[]
    deleteMany?: TeeHoleScalarWhereInput | TeeHoleScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutTeeNestedInput = {
    create?: XOR<RoundCreateWithoutTeeInput, RoundUncheckedCreateWithoutTeeInput> | RoundCreateWithoutTeeInput[] | RoundUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeInput | RoundCreateOrConnectWithoutTeeInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutTeeInput | RoundUpsertWithWhereUniqueWithoutTeeInput[]
    createMany?: RoundCreateManyTeeInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutTeeInput | RoundUpdateWithWhereUniqueWithoutTeeInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutTeeInput | RoundUpdateManyWithWhereWithoutTeeInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeeHoleUncheckedUpdateManyWithoutTeeNestedInput = {
    create?: XOR<TeeHoleCreateWithoutTeeInput, TeeHoleUncheckedCreateWithoutTeeInput> | TeeHoleCreateWithoutTeeInput[] | TeeHoleUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: TeeHoleCreateOrConnectWithoutTeeInput | TeeHoleCreateOrConnectWithoutTeeInput[]
    upsert?: TeeHoleUpsertWithWhereUniqueWithoutTeeInput | TeeHoleUpsertWithWhereUniqueWithoutTeeInput[]
    createMany?: TeeHoleCreateManyTeeInputEnvelope
    set?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    disconnect?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    delete?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    connect?: TeeHoleWhereUniqueInput | TeeHoleWhereUniqueInput[]
    update?: TeeHoleUpdateWithWhereUniqueWithoutTeeInput | TeeHoleUpdateWithWhereUniqueWithoutTeeInput[]
    updateMany?: TeeHoleUpdateManyWithWhereWithoutTeeInput | TeeHoleUpdateManyWithWhereWithoutTeeInput[]
    deleteMany?: TeeHoleScalarWhereInput | TeeHoleScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutTeeNestedInput = {
    create?: XOR<RoundCreateWithoutTeeInput, RoundUncheckedCreateWithoutTeeInput> | RoundCreateWithoutTeeInput[] | RoundUncheckedCreateWithoutTeeInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTeeInput | RoundCreateOrConnectWithoutTeeInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutTeeInput | RoundUpsertWithWhereUniqueWithoutTeeInput[]
    createMany?: RoundCreateManyTeeInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutTeeInput | RoundUpdateWithWhereUniqueWithoutTeeInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutTeeInput | RoundUpdateManyWithWhereWithoutTeeInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeeCreateNestedOneWithoutHolesInput = {
    create?: XOR<TeeCreateWithoutHolesInput, TeeUncheckedCreateWithoutHolesInput>
    connectOrCreate?: TeeCreateOrConnectWithoutHolesInput
    connect?: TeeWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeeUpdateOneRequiredWithoutHolesNestedInput = {
    create?: XOR<TeeCreateWithoutHolesInput, TeeUncheckedCreateWithoutHolesInput>
    connectOrCreate?: TeeCreateOrConnectWithoutHolesInput
    upsert?: TeeUpsertWithoutHolesInput
    connect?: TeeWhereUniqueInput
    update?: XOR<XOR<TeeUpdateToOneWithWhereWithoutHolesInput, TeeUpdateWithoutHolesInput>, TeeUncheckedUpdateWithoutHolesInput>
  }

  export type TeeCreateNestedOneWithoutRoundsInput = {
    create?: XOR<TeeCreateWithoutRoundsInput, TeeUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TeeCreateOrConnectWithoutRoundsInput
    connect?: TeeWhereUniqueInput
  }

  export type HoleScoreCreateNestedManyWithoutRoundInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
  }

  export type HoleScoreUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
  }

  export type EnumCourseHandicapSourceFieldUpdateOperationsInput = {
    set?: $Enums.CourseHandicapSource
  }

  export type TeeUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<TeeCreateWithoutRoundsInput, TeeUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: TeeCreateOrConnectWithoutRoundsInput
    upsert?: TeeUpsertWithoutRoundsInput
    connect?: TeeWhereUniqueInput
    update?: XOR<XOR<TeeUpdateToOneWithWhereWithoutRoundsInput, TeeUpdateWithoutRoundsInput>, TeeUncheckedUpdateWithoutRoundsInput>
  }

  export type HoleScoreUpdateManyWithoutRoundNestedInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    upsert?: HoleScoreUpsertWithWhereUniqueWithoutRoundInput | HoleScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    set?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    disconnect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    delete?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    update?: HoleScoreUpdateWithWhereUniqueWithoutRoundInput | HoleScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: HoleScoreUpdateManyWithWhereWithoutRoundInput | HoleScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
  }

  export type HoleScoreUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput> | HoleScoreCreateWithoutRoundInput[] | HoleScoreUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: HoleScoreCreateOrConnectWithoutRoundInput | HoleScoreCreateOrConnectWithoutRoundInput[]
    upsert?: HoleScoreUpsertWithWhereUniqueWithoutRoundInput | HoleScoreUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: HoleScoreCreateManyRoundInputEnvelope
    set?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    disconnect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    delete?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    connect?: HoleScoreWhereUniqueInput | HoleScoreWhereUniqueInput[]
    update?: HoleScoreUpdateWithWhereUniqueWithoutRoundInput | HoleScoreUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: HoleScoreUpdateManyWithWhereWithoutRoundInput | HoleScoreUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
  }

  export type RoundCreateNestedOneWithoutHoleScoresInput = {
    create?: XOR<RoundCreateWithoutHoleScoresInput, RoundUncheckedCreateWithoutHoleScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutHoleScoresInput
    connect?: RoundWhereUniqueInput
  }

  export type RoundUpdateOneRequiredWithoutHoleScoresNestedInput = {
    create?: XOR<RoundCreateWithoutHoleScoresInput, RoundUncheckedCreateWithoutHoleScoresInput>
    connectOrCreate?: RoundCreateOrConnectWithoutHoleScoresInput
    upsert?: RoundUpsertWithoutHoleScoresInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutHoleScoresInput, RoundUpdateWithoutHoleScoresInput>, RoundUncheckedUpdateWithoutHoleScoresInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCourseSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseSource | EnumCourseSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseSourceFilter<$PrismaModel> | $Enums.CourseSource
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumCourseSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseSource | EnumCourseSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseSource[] | ListEnumCourseSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseSourceWithAggregatesFilter<$PrismaModel> | $Enums.CourseSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseSourceFilter<$PrismaModel>
    _max?: NestedEnumCourseSourceFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumCourseHandicapSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseHandicapSource | EnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseHandicapSourceFilter<$PrismaModel> | $Enums.CourseHandicapSource
  }

  export type NestedEnumCourseHandicapSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseHandicapSource | EnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    in?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseHandicapSource[] | ListEnumCourseHandicapSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseHandicapSourceWithAggregatesFilter<$PrismaModel> | $Enums.CourseHandicapSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseHandicapSourceFilter<$PrismaModel>
    _max?: NestedEnumCourseHandicapSourceFilter<$PrismaModel>
  }

  export type TeeCreateWithoutCourseInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holes?: TeeHoleCreateNestedManyWithoutTeeInput
    rounds?: RoundCreateNestedManyWithoutTeeInput
  }

  export type TeeUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holes?: TeeHoleUncheckedCreateNestedManyWithoutTeeInput
    rounds?: RoundUncheckedCreateNestedManyWithoutTeeInput
  }

  export type TeeCreateOrConnectWithoutCourseInput = {
    where: TeeWhereUniqueInput
    create: XOR<TeeCreateWithoutCourseInput, TeeUncheckedCreateWithoutCourseInput>
  }

  export type TeeCreateManyCourseInputEnvelope = {
    data: TeeCreateManyCourseInput | TeeCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TeeUpsertWithWhereUniqueWithoutCourseInput = {
    where: TeeWhereUniqueInput
    update: XOR<TeeUpdateWithoutCourseInput, TeeUncheckedUpdateWithoutCourseInput>
    create: XOR<TeeCreateWithoutCourseInput, TeeUncheckedCreateWithoutCourseInput>
  }

  export type TeeUpdateWithWhereUniqueWithoutCourseInput = {
    where: TeeWhereUniqueInput
    data: XOR<TeeUpdateWithoutCourseInput, TeeUncheckedUpdateWithoutCourseInput>
  }

  export type TeeUpdateManyWithWhereWithoutCourseInput = {
    where: TeeScalarWhereInput
    data: XOR<TeeUpdateManyMutationInput, TeeUncheckedUpdateManyWithoutCourseInput>
  }

  export type TeeScalarWhereInput = {
    AND?: TeeScalarWhereInput | TeeScalarWhereInput[]
    OR?: TeeScalarWhereInput[]
    NOT?: TeeScalarWhereInput | TeeScalarWhereInput[]
    id?: StringFilter<"Tee"> | string
    courseId?: StringFilter<"Tee"> | string
    name?: StringFilter<"Tee"> | string
    gender?: EnumGenderFilter<"Tee"> | $Enums.Gender
    rating?: FloatFilter<"Tee"> | number
    slope?: IntFilter<"Tee"> | number
    par?: IntFilter<"Tee"> | number
    createdAt?: DateTimeFilter<"Tee"> | Date | string
    updatedAt?: DateTimeFilter<"Tee"> | Date | string
  }

  export type CourseCreateWithoutTeesInput = {
    id?: string
    name: string
    club?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    slug?: string | null
    source?: $Enums.CourseSource
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateWithoutTeesInput = {
    id?: string
    name: string
    club?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    lat?: number | null
    lng?: number | null
    slug?: string | null
    source?: $Enums.CourseSource
    externalId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutTeesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeesInput, CourseUncheckedCreateWithoutTeesInput>
  }

  export type TeeHoleCreateWithoutTeeInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards?: number | null
  }

  export type TeeHoleUncheckedCreateWithoutTeeInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards?: number | null
  }

  export type TeeHoleCreateOrConnectWithoutTeeInput = {
    where: TeeHoleWhereUniqueInput
    create: XOR<TeeHoleCreateWithoutTeeInput, TeeHoleUncheckedCreateWithoutTeeInput>
  }

  export type TeeHoleCreateManyTeeInputEnvelope = {
    data: TeeHoleCreateManyTeeInput | TeeHoleCreateManyTeeInput[]
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutTeeInput = {
    id?: string
    userId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
    holeScores?: HoleScoreCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutTeeInput = {
    id?: string
    userId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
    holeScores?: HoleScoreUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutTeeInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutTeeInput, RoundUncheckedCreateWithoutTeeInput>
  }

  export type RoundCreateManyTeeInputEnvelope = {
    data: RoundCreateManyTeeInput | RoundCreateManyTeeInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutTeesInput = {
    update: XOR<CourseUpdateWithoutTeesInput, CourseUncheckedUpdateWithoutTeesInput>
    create: XOR<CourseCreateWithoutTeesInput, CourseUncheckedCreateWithoutTeesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTeesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTeesInput, CourseUncheckedUpdateWithoutTeesInput>
  }

  export type CourseUpdateWithoutTeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    club?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumCourseSourceFieldUpdateOperationsInput | $Enums.CourseSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateWithoutTeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    club?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumCourseSourceFieldUpdateOperationsInput | $Enums.CourseSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeeHoleUpsertWithWhereUniqueWithoutTeeInput = {
    where: TeeHoleWhereUniqueInput
    update: XOR<TeeHoleUpdateWithoutTeeInput, TeeHoleUncheckedUpdateWithoutTeeInput>
    create: XOR<TeeHoleCreateWithoutTeeInput, TeeHoleUncheckedCreateWithoutTeeInput>
  }

  export type TeeHoleUpdateWithWhereUniqueWithoutTeeInput = {
    where: TeeHoleWhereUniqueInput
    data: XOR<TeeHoleUpdateWithoutTeeInput, TeeHoleUncheckedUpdateWithoutTeeInput>
  }

  export type TeeHoleUpdateManyWithWhereWithoutTeeInput = {
    where: TeeHoleScalarWhereInput
    data: XOR<TeeHoleUpdateManyMutationInput, TeeHoleUncheckedUpdateManyWithoutTeeInput>
  }

  export type TeeHoleScalarWhereInput = {
    AND?: TeeHoleScalarWhereInput | TeeHoleScalarWhereInput[]
    OR?: TeeHoleScalarWhereInput[]
    NOT?: TeeHoleScalarWhereInput | TeeHoleScalarWhereInput[]
    id?: StringFilter<"TeeHole"> | string
    teeId?: StringFilter<"TeeHole"> | string
    holeNumber?: IntFilter<"TeeHole"> | number
    par?: IntFilter<"TeeHole"> | number
    strokeIndex?: IntFilter<"TeeHole"> | number
    yards?: IntNullableFilter<"TeeHole"> | number | null
  }

  export type RoundUpsertWithWhereUniqueWithoutTeeInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutTeeInput, RoundUncheckedUpdateWithoutTeeInput>
    create: XOR<RoundCreateWithoutTeeInput, RoundUncheckedCreateWithoutTeeInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutTeeInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutTeeInput, RoundUncheckedUpdateWithoutTeeInput>
  }

  export type RoundUpdateManyWithWhereWithoutTeeInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutTeeInput>
  }

  export type RoundScalarWhereInput = {
    AND?: RoundScalarWhereInput | RoundScalarWhereInput[]
    OR?: RoundScalarWhereInput[]
    NOT?: RoundScalarWhereInput | RoundScalarWhereInput[]
    id?: StringFilter<"Round"> | string
    userId?: StringFilter<"Round"> | string
    teeId?: StringFilter<"Round"> | string
    datePlayed?: DateTimeFilter<"Round"> | Date | string
    notes?: StringNullableFilter<"Round"> | string | null
    holesPlayed?: IntFilter<"Round"> | number
    adjustedGrossScore?: IntFilter<"Round"> | number
    differential?: FloatFilter<"Round"> | number
    courseHandicap?: IntFilter<"Round"> | number
    courseHandicapSource?: EnumCourseHandicapSourceFilter<"Round"> | $Enums.CourseHandicapSource
    createdAt?: DateTimeFilter<"Round"> | Date | string
    updatedAt?: DateTimeFilter<"Round"> | Date | string
  }

  export type TeeCreateWithoutHolesInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTeesInput
    rounds?: RoundCreateNestedManyWithoutTeeInput
  }

  export type TeeUncheckedCreateWithoutHolesInput = {
    id?: string
    courseId: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutTeeInput
  }

  export type TeeCreateOrConnectWithoutHolesInput = {
    where: TeeWhereUniqueInput
    create: XOR<TeeCreateWithoutHolesInput, TeeUncheckedCreateWithoutHolesInput>
  }

  export type TeeUpsertWithoutHolesInput = {
    update: XOR<TeeUpdateWithoutHolesInput, TeeUncheckedUpdateWithoutHolesInput>
    create: XOR<TeeCreateWithoutHolesInput, TeeUncheckedCreateWithoutHolesInput>
    where?: TeeWhereInput
  }

  export type TeeUpdateToOneWithWhereWithoutHolesInput = {
    where?: TeeWhereInput
    data: XOR<TeeUpdateWithoutHolesInput, TeeUncheckedUpdateWithoutHolesInput>
  }

  export type TeeUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTeesNestedInput
    rounds?: RoundUpdateManyWithoutTeeNestedInput
  }

  export type TeeUncheckedUpdateWithoutHolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutTeeNestedInput
  }

  export type TeeCreateWithoutRoundsInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutTeesInput
    holes?: TeeHoleCreateNestedManyWithoutTeeInput
  }

  export type TeeUncheckedCreateWithoutRoundsInput = {
    id?: string
    courseId: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
    holes?: TeeHoleUncheckedCreateNestedManyWithoutTeeInput
  }

  export type TeeCreateOrConnectWithoutRoundsInput = {
    where: TeeWhereUniqueInput
    create: XOR<TeeCreateWithoutRoundsInput, TeeUncheckedCreateWithoutRoundsInput>
  }

  export type HoleScoreCreateWithoutRoundInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    score?: number | null
  }

  export type HoleScoreUncheckedCreateWithoutRoundInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    score?: number | null
  }

  export type HoleScoreCreateOrConnectWithoutRoundInput = {
    where: HoleScoreWhereUniqueInput
    create: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput>
  }

  export type HoleScoreCreateManyRoundInputEnvelope = {
    data: HoleScoreCreateManyRoundInput | HoleScoreCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type TeeUpsertWithoutRoundsInput = {
    update: XOR<TeeUpdateWithoutRoundsInput, TeeUncheckedUpdateWithoutRoundsInput>
    create: XOR<TeeCreateWithoutRoundsInput, TeeUncheckedCreateWithoutRoundsInput>
    where?: TeeWhereInput
  }

  export type TeeUpdateToOneWithWhereWithoutRoundsInput = {
    where?: TeeWhereInput
    data: XOR<TeeUpdateWithoutRoundsInput, TeeUncheckedUpdateWithoutRoundsInput>
  }

  export type TeeUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTeesNestedInput
    holes?: TeeHoleUpdateManyWithoutTeeNestedInput
  }

  export type TeeUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holes?: TeeHoleUncheckedUpdateManyWithoutTeeNestedInput
  }

  export type HoleScoreUpsertWithWhereUniqueWithoutRoundInput = {
    where: HoleScoreWhereUniqueInput
    update: XOR<HoleScoreUpdateWithoutRoundInput, HoleScoreUncheckedUpdateWithoutRoundInput>
    create: XOR<HoleScoreCreateWithoutRoundInput, HoleScoreUncheckedCreateWithoutRoundInput>
  }

  export type HoleScoreUpdateWithWhereUniqueWithoutRoundInput = {
    where: HoleScoreWhereUniqueInput
    data: XOR<HoleScoreUpdateWithoutRoundInput, HoleScoreUncheckedUpdateWithoutRoundInput>
  }

  export type HoleScoreUpdateManyWithWhereWithoutRoundInput = {
    where: HoleScoreScalarWhereInput
    data: XOR<HoleScoreUpdateManyMutationInput, HoleScoreUncheckedUpdateManyWithoutRoundInput>
  }

  export type HoleScoreScalarWhereInput = {
    AND?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
    OR?: HoleScoreScalarWhereInput[]
    NOT?: HoleScoreScalarWhereInput | HoleScoreScalarWhereInput[]
    id?: StringFilter<"HoleScore"> | string
    roundId?: StringFilter<"HoleScore"> | string
    holeNumber?: IntFilter<"HoleScore"> | number
    par?: IntFilter<"HoleScore"> | number
    strokeIndex?: IntFilter<"HoleScore"> | number
    score?: IntNullableFilter<"HoleScore"> | number | null
  }

  export type RoundCreateWithoutHoleScoresInput = {
    id?: string
    userId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
    tee: TeeCreateNestedOneWithoutRoundsInput
  }

  export type RoundUncheckedCreateWithoutHoleScoresInput = {
    id?: string
    userId: string
    teeId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutHoleScoresInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutHoleScoresInput, RoundUncheckedCreateWithoutHoleScoresInput>
  }

  export type RoundUpsertWithoutHoleScoresInput = {
    update: XOR<RoundUpdateWithoutHoleScoresInput, RoundUncheckedUpdateWithoutHoleScoresInput>
    create: XOR<RoundCreateWithoutHoleScoresInput, RoundUncheckedCreateWithoutHoleScoresInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutHoleScoresInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutHoleScoresInput, RoundUncheckedUpdateWithoutHoleScoresInput>
  }

  export type RoundUpdateWithoutHoleScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tee?: TeeUpdateOneRequiredWithoutRoundsNestedInput
  }

  export type RoundUncheckedUpdateWithoutHoleScoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teeId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeeCreateManyCourseInput = {
    id?: string
    name: string
    gender: $Enums.Gender
    rating: number
    slope: number
    par: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeeUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holes?: TeeHoleUpdateManyWithoutTeeNestedInput
    rounds?: RoundUpdateManyWithoutTeeNestedInput
  }

  export type TeeUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holes?: TeeHoleUncheckedUpdateManyWithoutTeeNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutTeeNestedInput
  }

  export type TeeUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    rating?: FloatFieldUpdateOperationsInput | number
    slope?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeeHoleCreateManyTeeInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    yards?: number | null
  }

  export type RoundCreateManyTeeInput = {
    id?: string
    userId: string
    datePlayed: Date | string
    notes?: string | null
    holesPlayed?: number
    adjustedGrossScore: number
    differential: number
    courseHandicap: number
    courseHandicapSource: $Enums.CourseHandicapSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeeHoleUpdateWithoutTeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeeHoleUncheckedUpdateWithoutTeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeeHoleUncheckedUpdateManyWithoutTeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    yards?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoundUpdateWithoutTeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holeScores?: HoleScoreUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutTeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holeScores?: HoleScoreUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutTeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    datePlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    holesPlayed?: IntFieldUpdateOperationsInput | number
    adjustedGrossScore?: IntFieldUpdateOperationsInput | number
    differential?: FloatFieldUpdateOperationsInput | number
    courseHandicap?: IntFieldUpdateOperationsInput | number
    courseHandicapSource?: EnumCourseHandicapSourceFieldUpdateOperationsInput | $Enums.CourseHandicapSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoleScoreCreateManyRoundInput = {
    id?: string
    holeNumber: number
    par: number
    strokeIndex: number
    score?: number | null
  }

  export type HoleScoreUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HoleScoreUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    holeNumber?: IntFieldUpdateOperationsInput | number
    par?: IntFieldUpdateOperationsInput | number
    strokeIndex?: IntFieldUpdateOperationsInput | number
    score?: NullableIntFieldUpdateOperationsInput | number | null
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