
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
 * Model DeviceHistory
 * 
 */
export type DeviceHistory = $Result.DefaultSelection<Prisma.$DeviceHistoryPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model UserLocation
 * 
 */
export type UserLocation = $Result.DefaultSelection<Prisma.$UserLocationPayload>
/**
 * Model SafeZone
 * 
 */
export type SafeZone = $Result.DefaultSelection<Prisma.$SafeZonePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model EmergencyContact
 * 
 */
export type EmergencyContact = $Result.DefaultSelection<Prisma.$EmergencyContactPayload>
/**
 * Model AlertPost
 * 
 */
export type AlertPost = $Result.DefaultSelection<Prisma.$AlertPostPayload>
/**
 * Model AlertPostLocation
 * 
 */
export type AlertPostLocation = $Result.DefaultSelection<Prisma.$AlertPostLocationPayload>
/**
 * Model Contents
 * 
 */
export type Contents = $Result.DefaultSelection<Prisma.$ContentsPayload>
/**
 * Model Package
 * 
 */
export type Package = $Result.DefaultSelection<Prisma.$PackagePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payments
 * 
 */
export type Payments = $Result.DefaultSelection<Prisma.$PaymentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const status: {
  active: 'active',
  blocked: 'blocked'
};

export type status = (typeof status)[keyof typeof status]


export const Role: {
  admin: 'admin',
  sub_admin: 'sub_admin',
  supper_admin: 'supper_admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type status = $Enums.status

export const status: typeof $Enums.status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

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
   * `prisma.deviceHistory`: Exposes CRUD operations for the **DeviceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceHistories
    * const deviceHistories = await prisma.deviceHistory.findMany()
    * ```
    */
  get deviceHistory(): Prisma.DeviceHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLocation`: Exposes CRUD operations for the **UserLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocations
    * const userLocations = await prisma.userLocation.findMany()
    * ```
    */
  get userLocation(): Prisma.UserLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.safeZone`: Exposes CRUD operations for the **SafeZone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SafeZones
    * const safeZones = await prisma.safeZone.findMany()
    * ```
    */
  get safeZone(): Prisma.SafeZoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emergencyContact`: Exposes CRUD operations for the **EmergencyContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyContacts
    * const emergencyContacts = await prisma.emergencyContact.findMany()
    * ```
    */
  get emergencyContact(): Prisma.EmergencyContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertPost`: Exposes CRUD operations for the **AlertPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertPosts
    * const alertPosts = await prisma.alertPost.findMany()
    * ```
    */
  get alertPost(): Prisma.AlertPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alertPostLocation`: Exposes CRUD operations for the **AlertPostLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertPostLocations
    * const alertPostLocations = await prisma.alertPostLocation.findMany()
    * ```
    */
  get alertPostLocation(): Prisma.AlertPostLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contents`: Exposes CRUD operations for the **Contents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.contents.findMany()
    * ```
    */
  get contents(): Prisma.ContentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.package`: Exposes CRUD operations for the **Package** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Packages
    * const packages = await prisma.package.findMany()
    * ```
    */
  get package(): Prisma.PackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.PaymentsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    DeviceHistory: 'DeviceHistory',
    Verification: 'Verification',
    UserLocation: 'UserLocation',
    SafeZone: 'SafeZone',
    Location: 'Location',
    EmergencyContact: 'EmergencyContact',
    AlertPost: 'AlertPost',
    AlertPostLocation: 'AlertPostLocation',
    Contents: 'Contents',
    Package: 'Package',
    Subscription: 'Subscription',
    Payments: 'Payments'
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
      modelProps: "user" | "deviceHistory" | "verification" | "userLocation" | "safeZone" | "location" | "emergencyContact" | "alertPost" | "alertPostLocation" | "contents" | "package" | "subscription" | "payments"
      txIsolationLevel: never
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DeviceHistory: {
        payload: Prisma.$DeviceHistoryPayload<ExtArgs>
        fields: Prisma.DeviceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>
          }
          findFirst: {
            args: Prisma.DeviceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>
          }
          findMany: {
            args: Prisma.DeviceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>[]
          }
          create: {
            args: Prisma.DeviceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>
          }
          createMany: {
            args: Prisma.DeviceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>
          }
          update: {
            args: Prisma.DeviceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.DeviceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceHistoryPayload>
          }
          aggregate: {
            args: Prisma.DeviceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceHistory>
          }
          groupBy: {
            args: Prisma.DeviceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DeviceHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DeviceHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DeviceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceHistoryCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VerificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VerificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      UserLocation: {
        payload: Prisma.$UserLocationPayload<ExtArgs>
        fields: Prisma.UserLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findFirst: {
            args: Prisma.UserLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findMany: {
            args: Prisma.UserLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          create: {
            args: Prisma.UserLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          createMany: {
            args: Prisma.UserLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          update: {
            args: Prisma.UserLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          deleteMany: {
            args: Prisma.UserLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          aggregate: {
            args: Prisma.UserLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocation>
          }
          groupBy: {
            args: Prisma.UserLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserLocationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserLocationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserLocationCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationCountAggregateOutputType> | number
          }
        }
      }
      SafeZone: {
        payload: Prisma.$SafeZonePayload<ExtArgs>
        fields: Prisma.SafeZoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SafeZoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SafeZoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>
          }
          findFirst: {
            args: Prisma.SafeZoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SafeZoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>
          }
          findMany: {
            args: Prisma.SafeZoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>[]
          }
          create: {
            args: Prisma.SafeZoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>
          }
          createMany: {
            args: Prisma.SafeZoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SafeZoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>
          }
          update: {
            args: Prisma.SafeZoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>
          }
          deleteMany: {
            args: Prisma.SafeZoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SafeZoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SafeZoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SafeZonePayload>
          }
          aggregate: {
            args: Prisma.SafeZoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSafeZone>
          }
          groupBy: {
            args: Prisma.SafeZoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<SafeZoneGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SafeZoneFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SafeZoneAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SafeZoneCountArgs<ExtArgs>
            result: $Utils.Optional<SafeZoneCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LocationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LocationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      EmergencyContact: {
        payload: Prisma.$EmergencyContactPayload<ExtArgs>
        fields: Prisma.EmergencyContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findFirst: {
            args: Prisma.EmergencyContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          findMany: {
            args: Prisma.EmergencyContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>[]
          }
          create: {
            args: Prisma.EmergencyContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          createMany: {
            args: Prisma.EmergencyContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmergencyContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          update: {
            args: Prisma.EmergencyContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmergencyContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyContactPayload>
          }
          aggregate: {
            args: Prisma.EmergencyContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyContact>
          }
          groupBy: {
            args: Prisma.EmergencyContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EmergencyContactFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EmergencyContactAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EmergencyContactCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyContactCountAggregateOutputType> | number
          }
        }
      }
      AlertPost: {
        payload: Prisma.$AlertPostPayload<ExtArgs>
        fields: Prisma.AlertPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>
          }
          findFirst: {
            args: Prisma.AlertPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>
          }
          findMany: {
            args: Prisma.AlertPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>[]
          }
          create: {
            args: Prisma.AlertPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>
          }
          createMany: {
            args: Prisma.AlertPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>
          }
          update: {
            args: Prisma.AlertPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>
          }
          deleteMany: {
            args: Prisma.AlertPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostPayload>
          }
          aggregate: {
            args: Prisma.AlertPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertPost>
          }
          groupBy: {
            args: Prisma.AlertPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlertPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlertPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AlertPostCountArgs<ExtArgs>
            result: $Utils.Optional<AlertPostCountAggregateOutputType> | number
          }
        }
      }
      AlertPostLocation: {
        payload: Prisma.$AlertPostLocationPayload<ExtArgs>
        fields: Prisma.AlertPostLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertPostLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertPostLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>
          }
          findFirst: {
            args: Prisma.AlertPostLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertPostLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>
          }
          findMany: {
            args: Prisma.AlertPostLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>[]
          }
          create: {
            args: Prisma.AlertPostLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>
          }
          createMany: {
            args: Prisma.AlertPostLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertPostLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>
          }
          update: {
            args: Prisma.AlertPostLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>
          }
          deleteMany: {
            args: Prisma.AlertPostLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertPostLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertPostLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPostLocationPayload>
          }
          aggregate: {
            args: Prisma.AlertPostLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertPostLocation>
          }
          groupBy: {
            args: Prisma.AlertPostLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertPostLocationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlertPostLocationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlertPostLocationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AlertPostLocationCountArgs<ExtArgs>
            result: $Utils.Optional<AlertPostLocationCountAggregateOutputType> | number
          }
        }
      }
      Contents: {
        payload: Prisma.$ContentsPayload<ExtArgs>
        fields: Prisma.ContentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          findFirst: {
            args: Prisma.ContentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          findMany: {
            args: Prisma.ContentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>[]
          }
          create: {
            args: Prisma.ContentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          createMany: {
            args: Prisma.ContentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          update: {
            args: Prisma.ContentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          deleteMany: {
            args: Prisma.ContentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentsPayload>
          }
          aggregate: {
            args: Prisma.ContentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContents>
          }
          groupBy: {
            args: Prisma.ContentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ContentsCountArgs<ExtArgs>
            result: $Utils.Optional<ContentsCountAggregateOutputType> | number
          }
        }
      }
      Package: {
        payload: Prisma.$PackagePayload<ExtArgs>
        fields: Prisma.PackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findFirst: {
            args: Prisma.PackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          findMany: {
            args: Prisma.PackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>[]
          }
          create: {
            args: Prisma.PackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          createMany: {
            args: Prisma.PackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          update: {
            args: Prisma.PackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          deleteMany: {
            args: Prisma.PackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePayload>
          }
          aggregate: {
            args: Prisma.PackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackage>
          }
          groupBy: {
            args: Prisma.PackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PackageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PackageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PackageCountArgs<ExtArgs>
            result: $Utils.Optional<PackageCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscriptionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscriptionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payments: {
        payload: Prisma.$PaymentsPayload<ExtArgs>
        fields: Prisma.PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          findMany: {
            args: Prisma.PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>[]
          }
          create: {
            args: Prisma.PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          createMany: {
            args: Prisma.PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          update: {
            args: Prisma.PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    deviceHistory?: DeviceHistoryOmit
    verification?: VerificationOmit
    userLocation?: UserLocationOmit
    safeZone?: SafeZoneOmit
    location?: LocationOmit
    emergencyContact?: EmergencyContactOmit
    alertPost?: AlertPostOmit
    alertPostLocation?: AlertPostLocationOmit
    contents?: ContentsOmit
    package?: PackageOmit
    subscription?: SubscriptionOmit
    payments?: PaymentsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emergencyContact: number
    alertPost: number
    subscription: number
    deviceHistory: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emergencyContact?: boolean | UserCountOutputTypeCountEmergencyContactArgs
    alertPost?: boolean | UserCountOutputTypeCountAlertPostArgs
    subscription?: boolean | UserCountOutputTypeCountSubscriptionArgs
    deviceHistory?: boolean | UserCountOutputTypeCountDeviceHistoryArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmergencyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeviceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    startZones: number
    endZones: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startZones?: boolean | LocationCountOutputTypeCountStartZonesArgs
    endZones?: boolean | LocationCountOutputTypeCountEndZonesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountStartZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafeZoneWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountEndZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafeZoneWhereInput
  }


  /**
   * Count Type PackageCountOutputType
   */

  export type PackageCountOutputType = {
    subscription: number
  }

  export type PackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | PackageCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes
  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageCountOutputType
     */
    select?: PackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageCountOutputType without action
   */
  export type PackageCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
  }


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
    status: $Enums.status | null
    role: $Enums.Role | null
    profile: string | null
    phoneNumber: string | null
    expireAt: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    status: $Enums.status | null
    role: $Enums.Role | null
    profile: string | null
    phoneNumber: string | null
    expireAt: Date | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    status: number
    role: number
    profile: number
    phoneNumber: number
    expireAt: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    role?: true
    profile?: true
    phoneNumber?: true
    expireAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    role?: true
    profile?: true
    phoneNumber?: true
    expireAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    status?: true
    role?: true
    profile?: true
    phoneNumber?: true
    expireAt?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
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
    status: $Enums.status
    role: $Enums.Role
    profile: string | null
    phoneNumber: string | null
    expireAt: Date | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
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
    status?: boolean
    role?: boolean
    profile?: boolean
    phoneNumber?: boolean
    expireAt?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    verification?: boolean | User$verificationArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    emergencyContact?: boolean | User$emergencyContactArgs<ExtArgs>
    alertPost?: boolean | User$alertPostArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    deviceHistory?: boolean | User$deviceHistoryArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    status?: boolean
    role?: boolean
    profile?: boolean
    phoneNumber?: boolean
    expireAt?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "status" | "role" | "profile" | "phoneNumber" | "expireAt" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verification?: boolean | User$verificationArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    emergencyContact?: boolean | User$emergencyContactArgs<ExtArgs>
    alertPost?: boolean | User$alertPostArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    deviceHistory?: boolean | User$deviceHistoryArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      verification: Prisma.$VerificationPayload<ExtArgs> | null
      location: Prisma.$UserLocationPayload<ExtArgs> | null
      emergencyContact: Prisma.$EmergencyContactPayload<ExtArgs>[]
      alertPost: Prisma.$AlertPostPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      deviceHistory: Prisma.$DeviceHistoryPayload<ExtArgs>[]
      payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      status: $Enums.status
      role: $Enums.Role
      profile: string | null
      phoneNumber: string | null
      expireAt: Date | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    verification<T extends User$verificationArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends User$locationArgs<ExtArgs> = {}>(args?: Subset<T, User$locationArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    emergencyContact<T extends User$emergencyContactArgs<ExtArgs> = {}>(args?: Subset<T, User$emergencyContactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alertPost<T extends User$alertPostArgs<ExtArgs> = {}>(args?: Subset<T, User$alertPostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deviceHistory<T extends User$deviceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$deviceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly status: FieldRef<"User", 'status'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profile: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly expireAt: FieldRef<"User", 'DateTime'>
    readonly isDeleted: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.verification
   */
  export type User$verificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    where?: VerificationWhereInput
  }

  /**
   * User.location
   */
  export type User$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
  }

  /**
   * User.emergencyContact
   */
  export type User$emergencyContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    cursor?: EmergencyContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * User.alertPost
   */
  export type User$alertPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    where?: AlertPostWhereInput
    orderBy?: AlertPostOrderByWithRelationInput | AlertPostOrderByWithRelationInput[]
    cursor?: AlertPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertPostScalarFieldEnum | AlertPostScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.deviceHistory
   */
  export type User$deviceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    where?: DeviceHistoryWhereInput
    orderBy?: DeviceHistoryOrderByWithRelationInput | DeviceHistoryOrderByWithRelationInput[]
    cursor?: DeviceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceHistoryScalarFieldEnum | DeviceHistoryScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DeviceHistory
   */

  export type AggregateDeviceHistory = {
    _count: DeviceHistoryCountAggregateOutputType | null
    _min: DeviceHistoryMinAggregateOutputType | null
    _max: DeviceHistoryMaxAggregateOutputType | null
  }

  export type DeviceHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    browser: string | null
    os: string | null
    device: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ip: string | null
    browser: string | null
    os: string | null
    device: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceHistoryCountAggregateOutputType = {
    id: number
    userId: number
    ip: number
    browser: number
    os: number
    device: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    browser?: true
    os?: true
    device?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    browser?: true
    os?: true
    device?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    ip?: true
    browser?: true
    os?: true
    device?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceHistory to aggregate.
     */
    where?: DeviceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceHistories to fetch.
     */
    orderBy?: DeviceHistoryOrderByWithRelationInput | DeviceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceHistories
    **/
    _count?: true | DeviceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceHistoryMaxAggregateInputType
  }

  export type GetDeviceHistoryAggregateType<T extends DeviceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceHistory[P]>
      : GetScalarType<T[P], AggregateDeviceHistory[P]>
  }




  export type DeviceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceHistoryWhereInput
    orderBy?: DeviceHistoryOrderByWithAggregationInput | DeviceHistoryOrderByWithAggregationInput[]
    by: DeviceHistoryScalarFieldEnum[] | DeviceHistoryScalarFieldEnum
    having?: DeviceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceHistoryCountAggregateInputType | true
    _min?: DeviceHistoryMinAggregateInputType
    _max?: DeviceHistoryMaxAggregateInputType
  }

  export type DeviceHistoryGroupByOutputType = {
    id: string
    userId: string
    ip: string | null
    browser: string | null
    os: string | null
    device: string | null
    createdAt: Date
    updatedAt: Date
    _count: DeviceHistoryCountAggregateOutputType | null
    _min: DeviceHistoryMinAggregateOutputType | null
    _max: DeviceHistoryMaxAggregateOutputType | null
  }

  type GetDeviceHistoryGroupByPayload<T extends DeviceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type DeviceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ip?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceHistory"]>



  export type DeviceHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    ip?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ip" | "browser" | "os" | "device" | "createdAt" | "updatedAt", ExtArgs["result"]["deviceHistory"]>
  export type DeviceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeviceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ip: string | null
      browser: string | null
      os: string | null
      device: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deviceHistory"]>
    composites: {}
  }

  type DeviceHistoryGetPayload<S extends boolean | null | undefined | DeviceHistoryDefaultArgs> = $Result.GetResult<Prisma.$DeviceHistoryPayload, S>

  type DeviceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceHistoryCountAggregateInputType | true
    }

  export interface DeviceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceHistory'], meta: { name: 'DeviceHistory' } }
    /**
     * Find zero or one DeviceHistory that matches the filter.
     * @param {DeviceHistoryFindUniqueArgs} args - Arguments to find a DeviceHistory
     * @example
     * // Get one DeviceHistory
     * const deviceHistory = await prisma.deviceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceHistoryFindUniqueArgs>(args: SelectSubset<T, DeviceHistoryFindUniqueArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceHistoryFindUniqueOrThrowArgs} args - Arguments to find a DeviceHistory
     * @example
     * // Get one DeviceHistory
     * const deviceHistory = await prisma.deviceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryFindFirstArgs} args - Arguments to find a DeviceHistory
     * @example
     * // Get one DeviceHistory
     * const deviceHistory = await prisma.deviceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceHistoryFindFirstArgs>(args?: SelectSubset<T, DeviceHistoryFindFirstArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryFindFirstOrThrowArgs} args - Arguments to find a DeviceHistory
     * @example
     * // Get one DeviceHistory
     * const deviceHistory = await prisma.deviceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceHistories
     * const deviceHistories = await prisma.deviceHistory.findMany()
     * 
     * // Get first 10 DeviceHistories
     * const deviceHistories = await prisma.deviceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceHistoryWithIdOnly = await prisma.deviceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceHistoryFindManyArgs>(args?: SelectSubset<T, DeviceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceHistory.
     * @param {DeviceHistoryCreateArgs} args - Arguments to create a DeviceHistory.
     * @example
     * // Create one DeviceHistory
     * const DeviceHistory = await prisma.deviceHistory.create({
     *   data: {
     *     // ... data to create a DeviceHistory
     *   }
     * })
     * 
     */
    create<T extends DeviceHistoryCreateArgs>(args: SelectSubset<T, DeviceHistoryCreateArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceHistories.
     * @param {DeviceHistoryCreateManyArgs} args - Arguments to create many DeviceHistories.
     * @example
     * // Create many DeviceHistories
     * const deviceHistory = await prisma.deviceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceHistoryCreateManyArgs>(args?: SelectSubset<T, DeviceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeviceHistory.
     * @param {DeviceHistoryDeleteArgs} args - Arguments to delete one DeviceHistory.
     * @example
     * // Delete one DeviceHistory
     * const DeviceHistory = await prisma.deviceHistory.delete({
     *   where: {
     *     // ... filter to delete one DeviceHistory
     *   }
     * })
     * 
     */
    delete<T extends DeviceHistoryDeleteArgs>(args: SelectSubset<T, DeviceHistoryDeleteArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceHistory.
     * @param {DeviceHistoryUpdateArgs} args - Arguments to update one DeviceHistory.
     * @example
     * // Update one DeviceHistory
     * const deviceHistory = await prisma.deviceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceHistoryUpdateArgs>(args: SelectSubset<T, DeviceHistoryUpdateArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceHistories.
     * @param {DeviceHistoryDeleteManyArgs} args - Arguments to filter DeviceHistories to delete.
     * @example
     * // Delete a few DeviceHistories
     * const { count } = await prisma.deviceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceHistoryDeleteManyArgs>(args?: SelectSubset<T, DeviceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceHistories
     * const deviceHistory = await prisma.deviceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceHistoryUpdateManyArgs>(args: SelectSubset<T, DeviceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceHistory.
     * @param {DeviceHistoryUpsertArgs} args - Arguments to update or create a DeviceHistory.
     * @example
     * // Update or create a DeviceHistory
     * const deviceHistory = await prisma.deviceHistory.upsert({
     *   create: {
     *     // ... data to create a DeviceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceHistory we want to update
     *   }
     * })
     */
    upsert<T extends DeviceHistoryUpsertArgs>(args: SelectSubset<T, DeviceHistoryUpsertArgs<ExtArgs>>): Prisma__DeviceHistoryClient<$Result.GetResult<Prisma.$DeviceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceHistories that matches the filter.
     * @param {DeviceHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const deviceHistory = await prisma.deviceHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DeviceHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DeviceHistory.
     * @param {DeviceHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const deviceHistory = await prisma.deviceHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DeviceHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DeviceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryCountArgs} args - Arguments to filter DeviceHistories to count.
     * @example
     * // Count the number of DeviceHistories
     * const count = await prisma.deviceHistory.count({
     *   where: {
     *     // ... the filter for the DeviceHistories we want to count
     *   }
     * })
    **/
    count<T extends DeviceHistoryCountArgs>(
      args?: Subset<T, DeviceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceHistoryAggregateArgs>(args: Subset<T, DeviceHistoryAggregateArgs>): Prisma.PrismaPromise<GetDeviceHistoryAggregateType<T>>

    /**
     * Group by DeviceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceHistoryGroupByArgs} args - Group by arguments.
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
      T extends DeviceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: DeviceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceHistory model
   */
  readonly fields: DeviceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DeviceHistory model
   */
  interface DeviceHistoryFieldRefs {
    readonly id: FieldRef<"DeviceHistory", 'String'>
    readonly userId: FieldRef<"DeviceHistory", 'String'>
    readonly ip: FieldRef<"DeviceHistory", 'String'>
    readonly browser: FieldRef<"DeviceHistory", 'String'>
    readonly os: FieldRef<"DeviceHistory", 'String'>
    readonly device: FieldRef<"DeviceHistory", 'String'>
    readonly createdAt: FieldRef<"DeviceHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"DeviceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceHistory findUnique
   */
  export type DeviceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceHistory to fetch.
     */
    where: DeviceHistoryWhereUniqueInput
  }

  /**
   * DeviceHistory findUniqueOrThrow
   */
  export type DeviceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceHistory to fetch.
     */
    where: DeviceHistoryWhereUniqueInput
  }

  /**
   * DeviceHistory findFirst
   */
  export type DeviceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceHistory to fetch.
     */
    where?: DeviceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceHistories to fetch.
     */
    orderBy?: DeviceHistoryOrderByWithRelationInput | DeviceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceHistories.
     */
    cursor?: DeviceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceHistories.
     */
    distinct?: DeviceHistoryScalarFieldEnum | DeviceHistoryScalarFieldEnum[]
  }

  /**
   * DeviceHistory findFirstOrThrow
   */
  export type DeviceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceHistory to fetch.
     */
    where?: DeviceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceHistories to fetch.
     */
    orderBy?: DeviceHistoryOrderByWithRelationInput | DeviceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceHistories.
     */
    cursor?: DeviceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceHistories.
     */
    distinct?: DeviceHistoryScalarFieldEnum | DeviceHistoryScalarFieldEnum[]
  }

  /**
   * DeviceHistory findMany
   */
  export type DeviceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DeviceHistories to fetch.
     */
    where?: DeviceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceHistories to fetch.
     */
    orderBy?: DeviceHistoryOrderByWithRelationInput | DeviceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceHistories.
     */
    cursor?: DeviceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceHistories.
     */
    skip?: number
    distinct?: DeviceHistoryScalarFieldEnum | DeviceHistoryScalarFieldEnum[]
  }

  /**
   * DeviceHistory create
   */
  export type DeviceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceHistory.
     */
    data: XOR<DeviceHistoryCreateInput, DeviceHistoryUncheckedCreateInput>
  }

  /**
   * DeviceHistory createMany
   */
  export type DeviceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceHistories.
     */
    data: DeviceHistoryCreateManyInput | DeviceHistoryCreateManyInput[]
  }

  /**
   * DeviceHistory update
   */
  export type DeviceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceHistory.
     */
    data: XOR<DeviceHistoryUpdateInput, DeviceHistoryUncheckedUpdateInput>
    /**
     * Choose, which DeviceHistory to update.
     */
    where: DeviceHistoryWhereUniqueInput
  }

  /**
   * DeviceHistory updateMany
   */
  export type DeviceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceHistories.
     */
    data: XOR<DeviceHistoryUpdateManyMutationInput, DeviceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DeviceHistories to update
     */
    where?: DeviceHistoryWhereInput
    /**
     * Limit how many DeviceHistories to update.
     */
    limit?: number
  }

  /**
   * DeviceHistory upsert
   */
  export type DeviceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceHistory to update in case it exists.
     */
    where: DeviceHistoryWhereUniqueInput
    /**
     * In case the DeviceHistory found by the `where` argument doesn't exist, create a new DeviceHistory with this data.
     */
    create: XOR<DeviceHistoryCreateInput, DeviceHistoryUncheckedCreateInput>
    /**
     * In case the DeviceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceHistoryUpdateInput, DeviceHistoryUncheckedUpdateInput>
  }

  /**
   * DeviceHistory delete
   */
  export type DeviceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
    /**
     * Filter which DeviceHistory to delete.
     */
    where: DeviceHistoryWhereUniqueInput
  }

  /**
   * DeviceHistory deleteMany
   */
  export type DeviceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceHistories to delete
     */
    where?: DeviceHistoryWhereInput
    /**
     * Limit how many DeviceHistories to delete.
     */
    limit?: number
  }

  /**
   * DeviceHistory findRaw
   */
  export type DeviceHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DeviceHistory aggregateRaw
   */
  export type DeviceHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DeviceHistory without action
   */
  export type DeviceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceHistory
     */
    select?: DeviceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceHistory
     */
    omit?: DeviceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationAvgAggregateOutputType = {
    otp: number | null
  }

  export type VerificationSumAggregateOutputType = {
    otp: number | null
  }

  export type VerificationMinAggregateOutputType = {
    userId: string | null
    otp: number | null
    expiredAt: Date | null
    status: boolean | null
  }

  export type VerificationMaxAggregateOutputType = {
    userId: string | null
    otp: number | null
    expiredAt: Date | null
    status: boolean | null
  }

  export type VerificationCountAggregateOutputType = {
    userId: number
    otp: number
    expiredAt: number
    status: number
    _all: number
  }


  export type VerificationAvgAggregateInputType = {
    otp?: true
  }

  export type VerificationSumAggregateInputType = {
    otp?: true
  }

  export type VerificationMinAggregateInputType = {
    userId?: true
    otp?: true
    expiredAt?: true
    status?: true
  }

  export type VerificationMaxAggregateInputType = {
    userId?: true
    otp?: true
    expiredAt?: true
    status?: true
  }

  export type VerificationCountAggregateInputType = {
    userId?: true
    otp?: true
    expiredAt?: true
    status?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _avg?: VerificationAvgAggregateInputType
    _sum?: VerificationSumAggregateInputType
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    userId: string
    otp: number
    expiredAt: Date | null
    status: boolean
    _count: VerificationCountAggregateOutputType | null
    _avg: VerificationAvgAggregateOutputType | null
    _sum: VerificationSumAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    otp?: boolean
    expiredAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>



  export type VerificationSelectScalar = {
    userId?: boolean
    otp?: boolean
    expiredAt?: boolean
    status?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "otp" | "expiredAt" | "status", ExtArgs["result"]["verification"]>
  export type VerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      otp: number
      expiredAt: Date | null
      status: boolean
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const verificationWithUserIdOnly = await prisma.verification.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * @param {VerificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const verification = await prisma.verification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VerificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Verification.
     * @param {VerificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const verification = await prisma.verification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VerificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly userId: FieldRef<"Verification", 'String'>
    readonly otp: FieldRef<"Verification", 'Int'>
    readonly expiredAt: FieldRef<"Verification", 'DateTime'>
    readonly status: FieldRef<"Verification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification findRaw
   */
  export type VerificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification aggregateRaw
   */
  export type VerificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
  }


  /**
   * Model UserLocation
   */

  export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null
    _avg: UserLocationAvgAggregateOutputType | null
    _sum: UserLocationSumAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  export type UserLocationAvgAggregateOutputType = {
    coordinates: number | null
  }

  export type UserLocationSumAggregateOutputType = {
    coordinates: number[]
  }

  export type UserLocationMinAggregateOutputType = {
    userId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLocationMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserLocationCountAggregateOutputType = {
    userId: number
    type: number
    coordinates: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserLocationAvgAggregateInputType = {
    coordinates?: true
  }

  export type UserLocationSumAggregateInputType = {
    coordinates?: true
  }

  export type UserLocationMinAggregateInputType = {
    userId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLocationMaxAggregateInputType = {
    userId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserLocationCountAggregateInputType = {
    userId?: true
    type?: true
    coordinates?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocation to aggregate.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocations
    **/
    _count?: true | UserLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationMaxAggregateInputType
  }

  export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocation[P]>
      : GetScalarType<T[P], AggregateUserLocation[P]>
  }




  export type UserLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithAggregationInput | UserLocationOrderByWithAggregationInput[]
    by: UserLocationScalarFieldEnum[] | UserLocationScalarFieldEnum
    having?: UserLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationCountAggregateInputType | true
    _avg?: UserLocationAvgAggregateInputType
    _sum?: UserLocationSumAggregateInputType
    _min?: UserLocationMinAggregateInputType
    _max?: UserLocationMaxAggregateInputType
  }

  export type UserLocationGroupByOutputType = {
    userId: string
    type: string
    coordinates: number[]
    createdAt: Date
    updatedAt: Date
    _count: UserLocationCountAggregateOutputType | null
    _avg: UserLocationAvgAggregateOutputType | null
    _sum: UserLocationSumAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>



  export type UserLocationSelectScalar = {
    userId?: boolean
    type?: boolean
    coordinates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "coordinates" | "createdAt" | "updatedAt", ExtArgs["result"]["userLocation"]>
  export type UserLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      coordinates: number[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userLocation"]>
    composites: {}
  }

  type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = $Result.GetResult<Prisma.$UserLocationPayload, S>

  type UserLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLocationCountAggregateInputType | true
    }

  export interface UserLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'], meta: { name: 'UserLocation' } }
    /**
     * Find zero or one UserLocation that matches the filter.
     * @param {UserLocationFindUniqueArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationFindUniqueArgs>(args: SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLocationFindUniqueOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationFindFirstArgs>(args?: SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocations
     * const userLocations = await prisma.userLocation.findMany()
     * 
     * // Get first 10 UserLocations
     * const userLocations = await prisma.userLocation.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userLocationWithUserIdOnly = await prisma.userLocation.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserLocationFindManyArgs>(args?: SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLocation.
     * @param {UserLocationCreateArgs} args - Arguments to create a UserLocation.
     * @example
     * // Create one UserLocation
     * const UserLocation = await prisma.userLocation.create({
     *   data: {
     *     // ... data to create a UserLocation
     *   }
     * })
     * 
     */
    create<T extends UserLocationCreateArgs>(args: SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLocations.
     * @param {UserLocationCreateManyArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationCreateManyArgs>(args?: SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLocation.
     * @param {UserLocationDeleteArgs} args - Arguments to delete one UserLocation.
     * @example
     * // Delete one UserLocation
     * const UserLocation = await prisma.userLocation.delete({
     *   where: {
     *     // ... filter to delete one UserLocation
     *   }
     * })
     * 
     */
    delete<T extends UserLocationDeleteArgs>(args: SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLocation.
     * @param {UserLocationUpdateArgs} args - Arguments to update one UserLocation.
     * @example
     * // Update one UserLocation
     * const userLocation = await prisma.userLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationUpdateArgs>(args: SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLocations.
     * @param {UserLocationDeleteManyArgs} args - Arguments to filter UserLocations to delete.
     * @example
     * // Delete a few UserLocations
     * const { count } = await prisma.userLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationUpdateManyArgs>(args: SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLocation.
     * @param {UserLocationUpsertArgs} args - Arguments to update or create a UserLocation.
     * @example
     * // Update or create a UserLocation
     * const userLocation = await prisma.userLocation.upsert({
     *   create: {
     *     // ... data to create a UserLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocation we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationUpsertArgs>(args: SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLocations that matches the filter.
     * @param {UserLocationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userLocation = await prisma.userLocation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserLocationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserLocation.
     * @param {UserLocationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userLocation = await prisma.userLocation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserLocationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationCountArgs} args - Arguments to filter UserLocations to count.
     * @example
     * // Count the number of UserLocations
     * const count = await prisma.userLocation.count({
     *   where: {
     *     // ... the filter for the UserLocations we want to count
     *   }
     * })
    **/
    count<T extends UserLocationCountArgs>(
      args?: Subset<T, UserLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLocationAggregateArgs>(args: Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>

    /**
     * Group by UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationGroupByArgs} args - Group by arguments.
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
      T extends UserLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocation model
   */
  readonly fields: UserLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLocation model
   */
  interface UserLocationFieldRefs {
    readonly userId: FieldRef<"UserLocation", 'String'>
    readonly type: FieldRef<"UserLocation", 'String'>
    readonly coordinates: FieldRef<"UserLocation", 'Float[]'>
    readonly createdAt: FieldRef<"UserLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"UserLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLocation findUnique
   */
  export type UserLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findUniqueOrThrow
   */
  export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findFirst
   */
  export type UserLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findFirstOrThrow
   */
  export type UserLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findMany
   */
  export type UserLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocations to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation create
   */
  export type UserLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLocation.
     */
    data: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
  }

  /**
   * UserLocation createMany
   */
  export type UserLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
  }

  /**
   * UserLocation update
   */
  export type UserLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLocation.
     */
    data: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
    /**
     * Choose, which UserLocation to update.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation updateMany
   */
  export type UserLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
  }

  /**
   * UserLocation upsert
   */
  export type UserLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLocation to update in case it exists.
     */
    where: UserLocationWhereUniqueInput
    /**
     * In case the UserLocation found by the `where` argument doesn't exist, create a new UserLocation with this data.
     */
    create: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
    /**
     * In case the UserLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
  }

  /**
   * UserLocation delete
   */
  export type UserLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter which UserLocation to delete.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation deleteMany
   */
  export type UserLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocations to delete
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to delete.
     */
    limit?: number
  }

  /**
   * UserLocation findRaw
   */
  export type UserLocationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLocation aggregateRaw
   */
  export type UserLocationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * UserLocation without action
   */
  export type UserLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
  }


  /**
   * Model SafeZone
   */

  export type AggregateSafeZone = {
    _count: SafeZoneCountAggregateOutputType | null
    _min: SafeZoneMinAggregateOutputType | null
    _max: SafeZoneMaxAggregateOutputType | null
  }

  export type SafeZoneMinAggregateOutputType = {
    id: string | null
    description: string | null
    expectedReturnTime: Date | null
    notification: boolean | null
    startLocationId: string | null
    endLocationId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SafeZoneMaxAggregateOutputType = {
    id: string | null
    description: string | null
    expectedReturnTime: Date | null
    notification: boolean | null
    startLocationId: string | null
    endLocationId: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SafeZoneCountAggregateOutputType = {
    id: number
    description: number
    expectedReturnTime: number
    notification: number
    startLocationId: number
    endLocationId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SafeZoneMinAggregateInputType = {
    id?: true
    description?: true
    expectedReturnTime?: true
    notification?: true
    startLocationId?: true
    endLocationId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SafeZoneMaxAggregateInputType = {
    id?: true
    description?: true
    expectedReturnTime?: true
    notification?: true
    startLocationId?: true
    endLocationId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SafeZoneCountAggregateInputType = {
    id?: true
    description?: true
    expectedReturnTime?: true
    notification?: true
    startLocationId?: true
    endLocationId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SafeZoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SafeZone to aggregate.
     */
    where?: SafeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafeZones to fetch.
     */
    orderBy?: SafeZoneOrderByWithRelationInput | SafeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SafeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafeZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SafeZones
    **/
    _count?: true | SafeZoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SafeZoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SafeZoneMaxAggregateInputType
  }

  export type GetSafeZoneAggregateType<T extends SafeZoneAggregateArgs> = {
        [P in keyof T & keyof AggregateSafeZone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSafeZone[P]>
      : GetScalarType<T[P], AggregateSafeZone[P]>
  }




  export type SafeZoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SafeZoneWhereInput
    orderBy?: SafeZoneOrderByWithAggregationInput | SafeZoneOrderByWithAggregationInput[]
    by: SafeZoneScalarFieldEnum[] | SafeZoneScalarFieldEnum
    having?: SafeZoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SafeZoneCountAggregateInputType | true
    _min?: SafeZoneMinAggregateInputType
    _max?: SafeZoneMaxAggregateInputType
  }

  export type SafeZoneGroupByOutputType = {
    id: string
    description: string
    expectedReturnTime: Date
    notification: boolean
    startLocationId: string | null
    endLocationId: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SafeZoneCountAggregateOutputType | null
    _min: SafeZoneMinAggregateOutputType | null
    _max: SafeZoneMaxAggregateOutputType | null
  }

  type GetSafeZoneGroupByPayload<T extends SafeZoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SafeZoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SafeZoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SafeZoneGroupByOutputType[P]>
            : GetScalarType<T[P], SafeZoneGroupByOutputType[P]>
        }
      >
    >


  export type SafeZoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    expectedReturnTime?: boolean
    notification?: boolean
    startLocationId?: boolean
    endLocationId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startLocation?: boolean | SafeZone$startLocationArgs<ExtArgs>
    endLocation?: boolean | SafeZone$endLocationArgs<ExtArgs>
  }, ExtArgs["result"]["safeZone"]>



  export type SafeZoneSelectScalar = {
    id?: boolean
    description?: boolean
    expectedReturnTime?: boolean
    notification?: boolean
    startLocationId?: boolean
    endLocationId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SafeZoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "expectedReturnTime" | "notification" | "startLocationId" | "endLocationId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["safeZone"]>
  export type SafeZoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startLocation?: boolean | SafeZone$startLocationArgs<ExtArgs>
    endLocation?: boolean | SafeZone$endLocationArgs<ExtArgs>
  }

  export type $SafeZonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SafeZone"
    objects: {
      startLocation: Prisma.$LocationPayload<ExtArgs> | null
      endLocation: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      expectedReturnTime: Date
      notification: boolean
      startLocationId: string | null
      endLocationId: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["safeZone"]>
    composites: {}
  }

  type SafeZoneGetPayload<S extends boolean | null | undefined | SafeZoneDefaultArgs> = $Result.GetResult<Prisma.$SafeZonePayload, S>

  type SafeZoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SafeZoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SafeZoneCountAggregateInputType | true
    }

  export interface SafeZoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SafeZone'], meta: { name: 'SafeZone' } }
    /**
     * Find zero or one SafeZone that matches the filter.
     * @param {SafeZoneFindUniqueArgs} args - Arguments to find a SafeZone
     * @example
     * // Get one SafeZone
     * const safeZone = await prisma.safeZone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SafeZoneFindUniqueArgs>(args: SelectSubset<T, SafeZoneFindUniqueArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SafeZone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SafeZoneFindUniqueOrThrowArgs} args - Arguments to find a SafeZone
     * @example
     * // Get one SafeZone
     * const safeZone = await prisma.safeZone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SafeZoneFindUniqueOrThrowArgs>(args: SelectSubset<T, SafeZoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SafeZone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneFindFirstArgs} args - Arguments to find a SafeZone
     * @example
     * // Get one SafeZone
     * const safeZone = await prisma.safeZone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SafeZoneFindFirstArgs>(args?: SelectSubset<T, SafeZoneFindFirstArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SafeZone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneFindFirstOrThrowArgs} args - Arguments to find a SafeZone
     * @example
     * // Get one SafeZone
     * const safeZone = await prisma.safeZone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SafeZoneFindFirstOrThrowArgs>(args?: SelectSubset<T, SafeZoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SafeZones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SafeZones
     * const safeZones = await prisma.safeZone.findMany()
     * 
     * // Get first 10 SafeZones
     * const safeZones = await prisma.safeZone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const safeZoneWithIdOnly = await prisma.safeZone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SafeZoneFindManyArgs>(args?: SelectSubset<T, SafeZoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SafeZone.
     * @param {SafeZoneCreateArgs} args - Arguments to create a SafeZone.
     * @example
     * // Create one SafeZone
     * const SafeZone = await prisma.safeZone.create({
     *   data: {
     *     // ... data to create a SafeZone
     *   }
     * })
     * 
     */
    create<T extends SafeZoneCreateArgs>(args: SelectSubset<T, SafeZoneCreateArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SafeZones.
     * @param {SafeZoneCreateManyArgs} args - Arguments to create many SafeZones.
     * @example
     * // Create many SafeZones
     * const safeZone = await prisma.safeZone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SafeZoneCreateManyArgs>(args?: SelectSubset<T, SafeZoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SafeZone.
     * @param {SafeZoneDeleteArgs} args - Arguments to delete one SafeZone.
     * @example
     * // Delete one SafeZone
     * const SafeZone = await prisma.safeZone.delete({
     *   where: {
     *     // ... filter to delete one SafeZone
     *   }
     * })
     * 
     */
    delete<T extends SafeZoneDeleteArgs>(args: SelectSubset<T, SafeZoneDeleteArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SafeZone.
     * @param {SafeZoneUpdateArgs} args - Arguments to update one SafeZone.
     * @example
     * // Update one SafeZone
     * const safeZone = await prisma.safeZone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SafeZoneUpdateArgs>(args: SelectSubset<T, SafeZoneUpdateArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SafeZones.
     * @param {SafeZoneDeleteManyArgs} args - Arguments to filter SafeZones to delete.
     * @example
     * // Delete a few SafeZones
     * const { count } = await prisma.safeZone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SafeZoneDeleteManyArgs>(args?: SelectSubset<T, SafeZoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SafeZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SafeZones
     * const safeZone = await prisma.safeZone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SafeZoneUpdateManyArgs>(args: SelectSubset<T, SafeZoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SafeZone.
     * @param {SafeZoneUpsertArgs} args - Arguments to update or create a SafeZone.
     * @example
     * // Update or create a SafeZone
     * const safeZone = await prisma.safeZone.upsert({
     *   create: {
     *     // ... data to create a SafeZone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SafeZone we want to update
     *   }
     * })
     */
    upsert<T extends SafeZoneUpsertArgs>(args: SelectSubset<T, SafeZoneUpsertArgs<ExtArgs>>): Prisma__SafeZoneClient<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SafeZones that matches the filter.
     * @param {SafeZoneFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const safeZone = await prisma.safeZone.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SafeZoneFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a SafeZone.
     * @param {SafeZoneAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const safeZone = await prisma.safeZone.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SafeZoneAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of SafeZones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneCountArgs} args - Arguments to filter SafeZones to count.
     * @example
     * // Count the number of SafeZones
     * const count = await prisma.safeZone.count({
     *   where: {
     *     // ... the filter for the SafeZones we want to count
     *   }
     * })
    **/
    count<T extends SafeZoneCountArgs>(
      args?: Subset<T, SafeZoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SafeZoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SafeZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SafeZoneAggregateArgs>(args: Subset<T, SafeZoneAggregateArgs>): Prisma.PrismaPromise<GetSafeZoneAggregateType<T>>

    /**
     * Group by SafeZone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SafeZoneGroupByArgs} args - Group by arguments.
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
      T extends SafeZoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SafeZoneGroupByArgs['orderBy'] }
        : { orderBy?: SafeZoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SafeZoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSafeZoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SafeZone model
   */
  readonly fields: SafeZoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SafeZone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SafeZoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startLocation<T extends SafeZone$startLocationArgs<ExtArgs> = {}>(args?: Subset<T, SafeZone$startLocationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    endLocation<T extends SafeZone$endLocationArgs<ExtArgs> = {}>(args?: Subset<T, SafeZone$endLocationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SafeZone model
   */
  interface SafeZoneFieldRefs {
    readonly id: FieldRef<"SafeZone", 'String'>
    readonly description: FieldRef<"SafeZone", 'String'>
    readonly expectedReturnTime: FieldRef<"SafeZone", 'DateTime'>
    readonly notification: FieldRef<"SafeZone", 'Boolean'>
    readonly startLocationId: FieldRef<"SafeZone", 'String'>
    readonly endLocationId: FieldRef<"SafeZone", 'String'>
    readonly isDeleted: FieldRef<"SafeZone", 'Boolean'>
    readonly createdAt: FieldRef<"SafeZone", 'DateTime'>
    readonly updatedAt: FieldRef<"SafeZone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SafeZone findUnique
   */
  export type SafeZoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * Filter, which SafeZone to fetch.
     */
    where: SafeZoneWhereUniqueInput
  }

  /**
   * SafeZone findUniqueOrThrow
   */
  export type SafeZoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * Filter, which SafeZone to fetch.
     */
    where: SafeZoneWhereUniqueInput
  }

  /**
   * SafeZone findFirst
   */
  export type SafeZoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * Filter, which SafeZone to fetch.
     */
    where?: SafeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafeZones to fetch.
     */
    orderBy?: SafeZoneOrderByWithRelationInput | SafeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SafeZones.
     */
    cursor?: SafeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafeZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SafeZones.
     */
    distinct?: SafeZoneScalarFieldEnum | SafeZoneScalarFieldEnum[]
  }

  /**
   * SafeZone findFirstOrThrow
   */
  export type SafeZoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * Filter, which SafeZone to fetch.
     */
    where?: SafeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafeZones to fetch.
     */
    orderBy?: SafeZoneOrderByWithRelationInput | SafeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SafeZones.
     */
    cursor?: SafeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafeZones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SafeZones.
     */
    distinct?: SafeZoneScalarFieldEnum | SafeZoneScalarFieldEnum[]
  }

  /**
   * SafeZone findMany
   */
  export type SafeZoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * Filter, which SafeZones to fetch.
     */
    where?: SafeZoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SafeZones to fetch.
     */
    orderBy?: SafeZoneOrderByWithRelationInput | SafeZoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SafeZones.
     */
    cursor?: SafeZoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SafeZones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SafeZones.
     */
    skip?: number
    distinct?: SafeZoneScalarFieldEnum | SafeZoneScalarFieldEnum[]
  }

  /**
   * SafeZone create
   */
  export type SafeZoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * The data needed to create a SafeZone.
     */
    data: XOR<SafeZoneCreateInput, SafeZoneUncheckedCreateInput>
  }

  /**
   * SafeZone createMany
   */
  export type SafeZoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SafeZones.
     */
    data: SafeZoneCreateManyInput | SafeZoneCreateManyInput[]
  }

  /**
   * SafeZone update
   */
  export type SafeZoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * The data needed to update a SafeZone.
     */
    data: XOR<SafeZoneUpdateInput, SafeZoneUncheckedUpdateInput>
    /**
     * Choose, which SafeZone to update.
     */
    where: SafeZoneWhereUniqueInput
  }

  /**
   * SafeZone updateMany
   */
  export type SafeZoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SafeZones.
     */
    data: XOR<SafeZoneUpdateManyMutationInput, SafeZoneUncheckedUpdateManyInput>
    /**
     * Filter which SafeZones to update
     */
    where?: SafeZoneWhereInput
    /**
     * Limit how many SafeZones to update.
     */
    limit?: number
  }

  /**
   * SafeZone upsert
   */
  export type SafeZoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * The filter to search for the SafeZone to update in case it exists.
     */
    where: SafeZoneWhereUniqueInput
    /**
     * In case the SafeZone found by the `where` argument doesn't exist, create a new SafeZone with this data.
     */
    create: XOR<SafeZoneCreateInput, SafeZoneUncheckedCreateInput>
    /**
     * In case the SafeZone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SafeZoneUpdateInput, SafeZoneUncheckedUpdateInput>
  }

  /**
   * SafeZone delete
   */
  export type SafeZoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    /**
     * Filter which SafeZone to delete.
     */
    where: SafeZoneWhereUniqueInput
  }

  /**
   * SafeZone deleteMany
   */
  export type SafeZoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SafeZones to delete
     */
    where?: SafeZoneWhereInput
    /**
     * Limit how many SafeZones to delete.
     */
    limit?: number
  }

  /**
   * SafeZone findRaw
   */
  export type SafeZoneFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SafeZone aggregateRaw
   */
  export type SafeZoneAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * SafeZone.startLocation
   */
  export type SafeZone$startLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * SafeZone.endLocation
   */
  export type SafeZone$endLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * SafeZone without action
   */
  export type SafeZoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    coordinates: number | null
  }

  export type LocationSumAggregateOutputType = {
    coordinates: number[]
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    type: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    type: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    type: number
    coordinates: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    coordinates?: true
  }

  export type LocationSumAggregateInputType = {
    coordinates?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    type?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    type?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    type?: true
    coordinates?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    type: string
    coordinates: number[]
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    coordinates?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    startZones?: boolean | Location$startZonesArgs<ExtArgs>
    endZones?: boolean | Location$endZonesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>



  export type LocationSelectScalar = {
    id?: boolean
    type?: boolean
    coordinates?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "coordinates" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startZones?: boolean | Location$startZonesArgs<ExtArgs>
    endZones?: boolean | Location$endZonesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      startZones: Prisma.$SafeZonePayload<ExtArgs>[]
      endZones: Prisma.$SafeZonePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      coordinates: number[]
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * @param {LocationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const location = await prisma.location.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LocationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Location.
     * @param {LocationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const location = await prisma.location.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LocationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startZones<T extends Location$startZonesArgs<ExtArgs> = {}>(args?: Subset<T, Location$startZonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    endZones<T extends Location$endZonesArgs<ExtArgs> = {}>(args?: Subset<T, Location$endZonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SafeZonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly type: FieldRef<"Location", 'String'>
    readonly coordinates: FieldRef<"Location", 'Float[]'>
    readonly isDeleted: FieldRef<"Location", 'Boolean'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location findRaw
   */
  export type LocationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Location aggregateRaw
   */
  export type LocationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Location.startZones
   */
  export type Location$startZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    where?: SafeZoneWhereInput
    orderBy?: SafeZoneOrderByWithRelationInput | SafeZoneOrderByWithRelationInput[]
    cursor?: SafeZoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SafeZoneScalarFieldEnum | SafeZoneScalarFieldEnum[]
  }

  /**
   * Location.endZones
   */
  export type Location$endZonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SafeZone
     */
    select?: SafeZoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SafeZone
     */
    omit?: SafeZoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SafeZoneInclude<ExtArgs> | null
    where?: SafeZoneWhereInput
    orderBy?: SafeZoneOrderByWithRelationInput | SafeZoneOrderByWithRelationInput[]
    cursor?: SafeZoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SafeZoneScalarFieldEnum | SafeZoneScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model EmergencyContact
   */

  export type AggregateEmergencyContact = {
    _count: EmergencyContactCountAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  export type EmergencyContactMinAggregateOutputType = {
    id: string | null
    userId: string | null
    profile: string | null
    name: string | null
    relation: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type EmergencyContactMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    profile: string | null
    name: string | null
    relation: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isDeleted: boolean | null
  }

  export type EmergencyContactCountAggregateOutputType = {
    id: number
    userId: number
    profile: number
    name: number
    relation: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    isDeleted: number
    _all: number
  }


  export type EmergencyContactMinAggregateInputType = {
    id?: true
    userId?: true
    profile?: true
    name?: true
    relation?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type EmergencyContactMaxAggregateInputType = {
    id?: true
    userId?: true
    profile?: true
    name?: true
    relation?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
  }

  export type EmergencyContactCountAggregateInputType = {
    id?: true
    userId?: true
    profile?: true
    name?: true
    relation?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    isDeleted?: true
    _all?: true
  }

  export type EmergencyContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContact to aggregate.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyContacts
    **/
    _count?: true | EmergencyContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type GetEmergencyContactAggregateType<T extends EmergencyContactAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyContact[P]>
      : GetScalarType<T[P], AggregateEmergencyContact[P]>
  }




  export type EmergencyContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyContactWhereInput
    orderBy?: EmergencyContactOrderByWithAggregationInput | EmergencyContactOrderByWithAggregationInput[]
    by: EmergencyContactScalarFieldEnum[] | EmergencyContactScalarFieldEnum
    having?: EmergencyContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyContactCountAggregateInputType | true
    _min?: EmergencyContactMinAggregateInputType
    _max?: EmergencyContactMaxAggregateInputType
  }

  export type EmergencyContactGroupByOutputType = {
    id: string
    userId: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    isDeleted: boolean
    _count: EmergencyContactCountAggregateOutputType | null
    _min: EmergencyContactMinAggregateOutputType | null
    _max: EmergencyContactMaxAggregateOutputType | null
  }

  type GetEmergencyContactGroupByPayload<T extends EmergencyContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyContactGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    profile?: boolean
    name?: boolean
    relation?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emergencyContact"]>



  export type EmergencyContactSelectScalar = {
    id?: boolean
    userId?: boolean
    profile?: boolean
    name?: boolean
    relation?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isDeleted?: boolean
  }

  export type EmergencyContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "profile" | "name" | "relation" | "phoneNumber" | "createdAt" | "updatedAt" | "isDeleted", ExtArgs["result"]["emergencyContact"]>
  export type EmergencyContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmergencyContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyContact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      profile: string
      name: string
      relation: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
      isDeleted: boolean
    }, ExtArgs["result"]["emergencyContact"]>
    composites: {}
  }

  type EmergencyContactGetPayload<S extends boolean | null | undefined | EmergencyContactDefaultArgs> = $Result.GetResult<Prisma.$EmergencyContactPayload, S>

  type EmergencyContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmergencyContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmergencyContactCountAggregateInputType | true
    }

  export interface EmergencyContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyContact'], meta: { name: 'EmergencyContact' } }
    /**
     * Find zero or one EmergencyContact that matches the filter.
     * @param {EmergencyContactFindUniqueArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyContactFindUniqueArgs>(args: SelectSubset<T, EmergencyContactFindUniqueArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmergencyContact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyContactFindUniqueOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyContactFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyContactFindFirstArgs>(args?: SelectSubset<T, EmergencyContactFindFirstArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmergencyContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindFirstOrThrowArgs} args - Arguments to find a EmergencyContact
     * @example
     * // Get one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyContactFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany()
     * 
     * // Get first 10 EmergencyContacts
     * const emergencyContacts = await prisma.emergencyContact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyContactWithIdOnly = await prisma.emergencyContact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyContactFindManyArgs>(args?: SelectSubset<T, EmergencyContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmergencyContact.
     * @param {EmergencyContactCreateArgs} args - Arguments to create a EmergencyContact.
     * @example
     * // Create one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.create({
     *   data: {
     *     // ... data to create a EmergencyContact
     *   }
     * })
     * 
     */
    create<T extends EmergencyContactCreateArgs>(args: SelectSubset<T, EmergencyContactCreateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmergencyContacts.
     * @param {EmergencyContactCreateManyArgs} args - Arguments to create many EmergencyContacts.
     * @example
     * // Create many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyContactCreateManyArgs>(args?: SelectSubset<T, EmergencyContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmergencyContact.
     * @param {EmergencyContactDeleteArgs} args - Arguments to delete one EmergencyContact.
     * @example
     * // Delete one EmergencyContact
     * const EmergencyContact = await prisma.emergencyContact.delete({
     *   where: {
     *     // ... filter to delete one EmergencyContact
     *   }
     * })
     * 
     */
    delete<T extends EmergencyContactDeleteArgs>(args: SelectSubset<T, EmergencyContactDeleteArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmergencyContact.
     * @param {EmergencyContactUpdateArgs} args - Arguments to update one EmergencyContact.
     * @example
     * // Update one EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyContactUpdateArgs>(args: SelectSubset<T, EmergencyContactUpdateArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmergencyContacts.
     * @param {EmergencyContactDeleteManyArgs} args - Arguments to filter EmergencyContacts to delete.
     * @example
     * // Delete a few EmergencyContacts
     * const { count } = await prisma.emergencyContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyContactDeleteManyArgs>(args?: SelectSubset<T, EmergencyContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyContacts
     * const emergencyContact = await prisma.emergencyContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyContactUpdateManyArgs>(args: SelectSubset<T, EmergencyContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmergencyContact.
     * @param {EmergencyContactUpsertArgs} args - Arguments to update or create a EmergencyContact.
     * @example
     * // Update or create a EmergencyContact
     * const emergencyContact = await prisma.emergencyContact.upsert({
     *   create: {
     *     // ... data to create a EmergencyContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyContact we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyContactUpsertArgs>(args: SelectSubset<T, EmergencyContactUpsertArgs<ExtArgs>>): Prisma__EmergencyContactClient<$Result.GetResult<Prisma.$EmergencyContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmergencyContacts that matches the filter.
     * @param {EmergencyContactFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const emergencyContact = await prisma.emergencyContact.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EmergencyContactFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EmergencyContact.
     * @param {EmergencyContactAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const emergencyContact = await prisma.emergencyContact.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EmergencyContactAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EmergencyContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactCountArgs} args - Arguments to filter EmergencyContacts to count.
     * @example
     * // Count the number of EmergencyContacts
     * const count = await prisma.emergencyContact.count({
     *   where: {
     *     // ... the filter for the EmergencyContacts we want to count
     *   }
     * })
    **/
    count<T extends EmergencyContactCountArgs>(
      args?: Subset<T, EmergencyContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmergencyContactAggregateArgs>(args: Subset<T, EmergencyContactAggregateArgs>): Prisma.PrismaPromise<GetEmergencyContactAggregateType<T>>

    /**
     * Group by EmergencyContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyContactGroupByArgs} args - Group by arguments.
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
      T extends EmergencyContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyContactGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmergencyContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyContact model
   */
  readonly fields: EmergencyContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmergencyContact model
   */
  interface EmergencyContactFieldRefs {
    readonly id: FieldRef<"EmergencyContact", 'String'>
    readonly userId: FieldRef<"EmergencyContact", 'String'>
    readonly profile: FieldRef<"EmergencyContact", 'String'>
    readonly name: FieldRef<"EmergencyContact", 'String'>
    readonly relation: FieldRef<"EmergencyContact", 'String'>
    readonly phoneNumber: FieldRef<"EmergencyContact", 'String'>
    readonly createdAt: FieldRef<"EmergencyContact", 'DateTime'>
    readonly updatedAt: FieldRef<"EmergencyContact", 'DateTime'>
    readonly isDeleted: FieldRef<"EmergencyContact", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyContact findUnique
   */
  export type EmergencyContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findUniqueOrThrow
   */
  export type EmergencyContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact findFirst
   */
  export type EmergencyContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findFirstOrThrow
   */
  export type EmergencyContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContact to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyContacts.
     */
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact findMany
   */
  export type EmergencyContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter, which EmergencyContacts to fetch.
     */
    where?: EmergencyContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyContacts to fetch.
     */
    orderBy?: EmergencyContactOrderByWithRelationInput | EmergencyContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyContacts.
     */
    cursor?: EmergencyContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyContacts.
     */
    skip?: number
    distinct?: EmergencyContactScalarFieldEnum | EmergencyContactScalarFieldEnum[]
  }

  /**
   * EmergencyContact create
   */
  export type EmergencyContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to create a EmergencyContact.
     */
    data: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
  }

  /**
   * EmergencyContact createMany
   */
  export type EmergencyContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyContacts.
     */
    data: EmergencyContactCreateManyInput | EmergencyContactCreateManyInput[]
  }

  /**
   * EmergencyContact update
   */
  export type EmergencyContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The data needed to update a EmergencyContact.
     */
    data: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
    /**
     * Choose, which EmergencyContact to update.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact updateMany
   */
  export type EmergencyContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyContacts.
     */
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyContacts to update
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to update.
     */
    limit?: number
  }

  /**
   * EmergencyContact upsert
   */
  export type EmergencyContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * The filter to search for the EmergencyContact to update in case it exists.
     */
    where: EmergencyContactWhereUniqueInput
    /**
     * In case the EmergencyContact found by the `where` argument doesn't exist, create a new EmergencyContact with this data.
     */
    create: XOR<EmergencyContactCreateInput, EmergencyContactUncheckedCreateInput>
    /**
     * In case the EmergencyContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyContactUpdateInput, EmergencyContactUncheckedUpdateInput>
  }

  /**
   * EmergencyContact delete
   */
  export type EmergencyContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
    /**
     * Filter which EmergencyContact to delete.
     */
    where: EmergencyContactWhereUniqueInput
  }

  /**
   * EmergencyContact deleteMany
   */
  export type EmergencyContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyContacts to delete
     */
    where?: EmergencyContactWhereInput
    /**
     * Limit how many EmergencyContacts to delete.
     */
    limit?: number
  }

  /**
   * EmergencyContact findRaw
   */
  export type EmergencyContactFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EmergencyContact aggregateRaw
   */
  export type EmergencyContactAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EmergencyContact without action
   */
  export type EmergencyContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyContact
     */
    select?: EmergencyContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmergencyContact
     */
    omit?: EmergencyContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmergencyContactInclude<ExtArgs> | null
  }


  /**
   * Model AlertPost
   */

  export type AggregateAlertPost = {
    _count: AlertPostCountAggregateOutputType | null
    _min: AlertPostMinAggregateOutputType | null
    _max: AlertPostMaxAggregateOutputType | null
  }

  export type AlertPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    alertType: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    alertType: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertPostCountAggregateOutputType = {
    id: number
    userId: number
    alertType: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertPostMinAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertPostMaxAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertPostCountAggregateInputType = {
    id?: true
    userId?: true
    alertType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertPost to aggregate.
     */
    where?: AlertPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPosts to fetch.
     */
    orderBy?: AlertPostOrderByWithRelationInput | AlertPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertPosts
    **/
    _count?: true | AlertPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertPostMaxAggregateInputType
  }

  export type GetAlertPostAggregateType<T extends AlertPostAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertPost[P]>
      : GetScalarType<T[P], AggregateAlertPost[P]>
  }




  export type AlertPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertPostWhereInput
    orderBy?: AlertPostOrderByWithAggregationInput | AlertPostOrderByWithAggregationInput[]
    by: AlertPostScalarFieldEnum[] | AlertPostScalarFieldEnum
    having?: AlertPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertPostCountAggregateInputType | true
    _min?: AlertPostMinAggregateInputType
    _max?: AlertPostMaxAggregateInputType
  }

  export type AlertPostGroupByOutputType = {
    id: string
    userId: string
    alertType: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: AlertPostCountAggregateOutputType | null
    _min: AlertPostMinAggregateOutputType | null
    _max: AlertPostMaxAggregateOutputType | null
  }

  type GetAlertPostGroupByPayload<T extends AlertPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertPostGroupByOutputType[P]>
            : GetScalarType<T[P], AlertPostGroupByOutputType[P]>
        }
      >
    >


  export type AlertPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    alertType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | AlertPost$locationArgs<ExtArgs>
  }, ExtArgs["result"]["alertPost"]>



  export type AlertPostSelectScalar = {
    id?: boolean
    userId?: boolean
    alertType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "alertType" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["alertPost"]>
  export type AlertPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    location?: boolean | AlertPost$locationArgs<ExtArgs>
  }

  export type $AlertPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      location: Prisma.$AlertPostLocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      alertType: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alertPost"]>
    composites: {}
  }

  type AlertPostGetPayload<S extends boolean | null | undefined | AlertPostDefaultArgs> = $Result.GetResult<Prisma.$AlertPostPayload, S>

  type AlertPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertPostCountAggregateInputType | true
    }

  export interface AlertPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertPost'], meta: { name: 'AlertPost' } }
    /**
     * Find zero or one AlertPost that matches the filter.
     * @param {AlertPostFindUniqueArgs} args - Arguments to find a AlertPost
     * @example
     * // Get one AlertPost
     * const alertPost = await prisma.alertPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertPostFindUniqueArgs>(args: SelectSubset<T, AlertPostFindUniqueArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertPostFindUniqueOrThrowArgs} args - Arguments to find a AlertPost
     * @example
     * // Get one AlertPost
     * const alertPost = await prisma.alertPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertPostFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostFindFirstArgs} args - Arguments to find a AlertPost
     * @example
     * // Get one AlertPost
     * const alertPost = await prisma.alertPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertPostFindFirstArgs>(args?: SelectSubset<T, AlertPostFindFirstArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostFindFirstOrThrowArgs} args - Arguments to find a AlertPost
     * @example
     * // Get one AlertPost
     * const alertPost = await prisma.alertPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertPostFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertPosts
     * const alertPosts = await prisma.alertPost.findMany()
     * 
     * // Get first 10 AlertPosts
     * const alertPosts = await prisma.alertPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertPostWithIdOnly = await prisma.alertPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertPostFindManyArgs>(args?: SelectSubset<T, AlertPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertPost.
     * @param {AlertPostCreateArgs} args - Arguments to create a AlertPost.
     * @example
     * // Create one AlertPost
     * const AlertPost = await prisma.alertPost.create({
     *   data: {
     *     // ... data to create a AlertPost
     *   }
     * })
     * 
     */
    create<T extends AlertPostCreateArgs>(args: SelectSubset<T, AlertPostCreateArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertPosts.
     * @param {AlertPostCreateManyArgs} args - Arguments to create many AlertPosts.
     * @example
     * // Create many AlertPosts
     * const alertPost = await prisma.alertPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertPostCreateManyArgs>(args?: SelectSubset<T, AlertPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlertPost.
     * @param {AlertPostDeleteArgs} args - Arguments to delete one AlertPost.
     * @example
     * // Delete one AlertPost
     * const AlertPost = await prisma.alertPost.delete({
     *   where: {
     *     // ... filter to delete one AlertPost
     *   }
     * })
     * 
     */
    delete<T extends AlertPostDeleteArgs>(args: SelectSubset<T, AlertPostDeleteArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertPost.
     * @param {AlertPostUpdateArgs} args - Arguments to update one AlertPost.
     * @example
     * // Update one AlertPost
     * const alertPost = await prisma.alertPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertPostUpdateArgs>(args: SelectSubset<T, AlertPostUpdateArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertPosts.
     * @param {AlertPostDeleteManyArgs} args - Arguments to filter AlertPosts to delete.
     * @example
     * // Delete a few AlertPosts
     * const { count } = await prisma.alertPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertPostDeleteManyArgs>(args?: SelectSubset<T, AlertPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertPosts
     * const alertPost = await prisma.alertPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertPostUpdateManyArgs>(args: SelectSubset<T, AlertPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlertPost.
     * @param {AlertPostUpsertArgs} args - Arguments to update or create a AlertPost.
     * @example
     * // Update or create a AlertPost
     * const alertPost = await prisma.alertPost.upsert({
     *   create: {
     *     // ... data to create a AlertPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertPost we want to update
     *   }
     * })
     */
    upsert<T extends AlertPostUpsertArgs>(args: SelectSubset<T, AlertPostUpsertArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertPosts that matches the filter.
     * @param {AlertPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const alertPost = await prisma.alertPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AlertPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AlertPost.
     * @param {AlertPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const alertPost = await prisma.alertPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AlertPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AlertPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostCountArgs} args - Arguments to filter AlertPosts to count.
     * @example
     * // Count the number of AlertPosts
     * const count = await prisma.alertPost.count({
     *   where: {
     *     // ... the filter for the AlertPosts we want to count
     *   }
     * })
    **/
    count<T extends AlertPostCountArgs>(
      args?: Subset<T, AlertPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertPostAggregateArgs>(args: Subset<T, AlertPostAggregateArgs>): Prisma.PrismaPromise<GetAlertPostAggregateType<T>>

    /**
     * Group by AlertPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostGroupByArgs} args - Group by arguments.
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
      T extends AlertPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertPostGroupByArgs['orderBy'] }
        : { orderBy?: AlertPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertPost model
   */
  readonly fields: AlertPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends AlertPost$locationArgs<ExtArgs> = {}>(args?: Subset<T, AlertPost$locationArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlertPost model
   */
  interface AlertPostFieldRefs {
    readonly id: FieldRef<"AlertPost", 'String'>
    readonly userId: FieldRef<"AlertPost", 'String'>
    readonly alertType: FieldRef<"AlertPost", 'String'>
    readonly isDeleted: FieldRef<"AlertPost", 'Boolean'>
    readonly createdAt: FieldRef<"AlertPost", 'DateTime'>
    readonly updatedAt: FieldRef<"AlertPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertPost findUnique
   */
  export type AlertPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * Filter, which AlertPost to fetch.
     */
    where: AlertPostWhereUniqueInput
  }

  /**
   * AlertPost findUniqueOrThrow
   */
  export type AlertPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * Filter, which AlertPost to fetch.
     */
    where: AlertPostWhereUniqueInput
  }

  /**
   * AlertPost findFirst
   */
  export type AlertPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * Filter, which AlertPost to fetch.
     */
    where?: AlertPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPosts to fetch.
     */
    orderBy?: AlertPostOrderByWithRelationInput | AlertPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertPosts.
     */
    cursor?: AlertPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertPosts.
     */
    distinct?: AlertPostScalarFieldEnum | AlertPostScalarFieldEnum[]
  }

  /**
   * AlertPost findFirstOrThrow
   */
  export type AlertPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * Filter, which AlertPost to fetch.
     */
    where?: AlertPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPosts to fetch.
     */
    orderBy?: AlertPostOrderByWithRelationInput | AlertPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertPosts.
     */
    cursor?: AlertPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertPosts.
     */
    distinct?: AlertPostScalarFieldEnum | AlertPostScalarFieldEnum[]
  }

  /**
   * AlertPost findMany
   */
  export type AlertPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * Filter, which AlertPosts to fetch.
     */
    where?: AlertPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPosts to fetch.
     */
    orderBy?: AlertPostOrderByWithRelationInput | AlertPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertPosts.
     */
    cursor?: AlertPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPosts.
     */
    skip?: number
    distinct?: AlertPostScalarFieldEnum | AlertPostScalarFieldEnum[]
  }

  /**
   * AlertPost create
   */
  export type AlertPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertPost.
     */
    data: XOR<AlertPostCreateInput, AlertPostUncheckedCreateInput>
  }

  /**
   * AlertPost createMany
   */
  export type AlertPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertPosts.
     */
    data: AlertPostCreateManyInput | AlertPostCreateManyInput[]
  }

  /**
   * AlertPost update
   */
  export type AlertPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertPost.
     */
    data: XOR<AlertPostUpdateInput, AlertPostUncheckedUpdateInput>
    /**
     * Choose, which AlertPost to update.
     */
    where: AlertPostWhereUniqueInput
  }

  /**
   * AlertPost updateMany
   */
  export type AlertPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertPosts.
     */
    data: XOR<AlertPostUpdateManyMutationInput, AlertPostUncheckedUpdateManyInput>
    /**
     * Filter which AlertPosts to update
     */
    where?: AlertPostWhereInput
    /**
     * Limit how many AlertPosts to update.
     */
    limit?: number
  }

  /**
   * AlertPost upsert
   */
  export type AlertPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertPost to update in case it exists.
     */
    where: AlertPostWhereUniqueInput
    /**
     * In case the AlertPost found by the `where` argument doesn't exist, create a new AlertPost with this data.
     */
    create: XOR<AlertPostCreateInput, AlertPostUncheckedCreateInput>
    /**
     * In case the AlertPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertPostUpdateInput, AlertPostUncheckedUpdateInput>
  }

  /**
   * AlertPost delete
   */
  export type AlertPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
    /**
     * Filter which AlertPost to delete.
     */
    where: AlertPostWhereUniqueInput
  }

  /**
   * AlertPost deleteMany
   */
  export type AlertPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertPosts to delete
     */
    where?: AlertPostWhereInput
    /**
     * Limit how many AlertPosts to delete.
     */
    limit?: number
  }

  /**
   * AlertPost findRaw
   */
  export type AlertPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AlertPost aggregateRaw
   */
  export type AlertPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AlertPost.location
   */
  export type AlertPost$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    where?: AlertPostLocationWhereInput
  }

  /**
   * AlertPost without action
   */
  export type AlertPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPost
     */
    select?: AlertPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPost
     */
    omit?: AlertPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostInclude<ExtArgs> | null
  }


  /**
   * Model AlertPostLocation
   */

  export type AggregateAlertPostLocation = {
    _count: AlertPostLocationCountAggregateOutputType | null
    _avg: AlertPostLocationAvgAggregateOutputType | null
    _sum: AlertPostLocationSumAggregateOutputType | null
    _min: AlertPostLocationMinAggregateOutputType | null
    _max: AlertPostLocationMaxAggregateOutputType | null
  }

  export type AlertPostLocationAvgAggregateOutputType = {
    coordinates: number | null
  }

  export type AlertPostLocationSumAggregateOutputType = {
    coordinates: number[]
  }

  export type AlertPostLocationMinAggregateOutputType = {
    id: string | null
    alertPostId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertPostLocationMaxAggregateOutputType = {
    id: string | null
    alertPostId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertPostLocationCountAggregateOutputType = {
    id: number
    alertPostId: number
    type: number
    coordinates: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertPostLocationAvgAggregateInputType = {
    coordinates?: true
  }

  export type AlertPostLocationSumAggregateInputType = {
    coordinates?: true
  }

  export type AlertPostLocationMinAggregateInputType = {
    id?: true
    alertPostId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertPostLocationMaxAggregateInputType = {
    id?: true
    alertPostId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertPostLocationCountAggregateInputType = {
    id?: true
    alertPostId?: true
    type?: true
    coordinates?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertPostLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertPostLocation to aggregate.
     */
    where?: AlertPostLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPostLocations to fetch.
     */
    orderBy?: AlertPostLocationOrderByWithRelationInput | AlertPostLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertPostLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPostLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPostLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertPostLocations
    **/
    _count?: true | AlertPostLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertPostLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertPostLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertPostLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertPostLocationMaxAggregateInputType
  }

  export type GetAlertPostLocationAggregateType<T extends AlertPostLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertPostLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertPostLocation[P]>
      : GetScalarType<T[P], AggregateAlertPostLocation[P]>
  }




  export type AlertPostLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertPostLocationWhereInput
    orderBy?: AlertPostLocationOrderByWithAggregationInput | AlertPostLocationOrderByWithAggregationInput[]
    by: AlertPostLocationScalarFieldEnum[] | AlertPostLocationScalarFieldEnum
    having?: AlertPostLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertPostLocationCountAggregateInputType | true
    _avg?: AlertPostLocationAvgAggregateInputType
    _sum?: AlertPostLocationSumAggregateInputType
    _min?: AlertPostLocationMinAggregateInputType
    _max?: AlertPostLocationMaxAggregateInputType
  }

  export type AlertPostLocationGroupByOutputType = {
    id: string
    alertPostId: string
    type: string
    coordinates: number[]
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: AlertPostLocationCountAggregateOutputType | null
    _avg: AlertPostLocationAvgAggregateOutputType | null
    _sum: AlertPostLocationSumAggregateOutputType | null
    _min: AlertPostLocationMinAggregateOutputType | null
    _max: AlertPostLocationMaxAggregateOutputType | null
  }

  type GetAlertPostLocationGroupByPayload<T extends AlertPostLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertPostLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertPostLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertPostLocationGroupByOutputType[P]>
            : GetScalarType<T[P], AlertPostLocationGroupByOutputType[P]>
        }
      >
    >


  export type AlertPostLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertPostId?: boolean
    type?: boolean
    coordinates?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alertPost?: boolean | AlertPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alertPostLocation"]>



  export type AlertPostLocationSelectScalar = {
    id?: boolean
    alertPostId?: boolean
    type?: boolean
    coordinates?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertPostLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertPostId" | "type" | "coordinates" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["alertPostLocation"]>
  export type AlertPostLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alertPost?: boolean | AlertPostDefaultArgs<ExtArgs>
  }

  export type $AlertPostLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertPostLocation"
    objects: {
      alertPost: Prisma.$AlertPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alertPostId: string
      type: string
      coordinates: number[]
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alertPostLocation"]>
    composites: {}
  }

  type AlertPostLocationGetPayload<S extends boolean | null | undefined | AlertPostLocationDefaultArgs> = $Result.GetResult<Prisma.$AlertPostLocationPayload, S>

  type AlertPostLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertPostLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertPostLocationCountAggregateInputType | true
    }

  export interface AlertPostLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertPostLocation'], meta: { name: 'AlertPostLocation' } }
    /**
     * Find zero or one AlertPostLocation that matches the filter.
     * @param {AlertPostLocationFindUniqueArgs} args - Arguments to find a AlertPostLocation
     * @example
     * // Get one AlertPostLocation
     * const alertPostLocation = await prisma.alertPostLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertPostLocationFindUniqueArgs>(args: SelectSubset<T, AlertPostLocationFindUniqueArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlertPostLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertPostLocationFindUniqueOrThrowArgs} args - Arguments to find a AlertPostLocation
     * @example
     * // Get one AlertPostLocation
     * const alertPostLocation = await prisma.alertPostLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertPostLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertPostLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertPostLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationFindFirstArgs} args - Arguments to find a AlertPostLocation
     * @example
     * // Get one AlertPostLocation
     * const alertPostLocation = await prisma.alertPostLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertPostLocationFindFirstArgs>(args?: SelectSubset<T, AlertPostLocationFindFirstArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlertPostLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationFindFirstOrThrowArgs} args - Arguments to find a AlertPostLocation
     * @example
     * // Get one AlertPostLocation
     * const alertPostLocation = await prisma.alertPostLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertPostLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertPostLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertPostLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertPostLocations
     * const alertPostLocations = await prisma.alertPostLocation.findMany()
     * 
     * // Get first 10 AlertPostLocations
     * const alertPostLocations = await prisma.alertPostLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertPostLocationWithIdOnly = await prisma.alertPostLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertPostLocationFindManyArgs>(args?: SelectSubset<T, AlertPostLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlertPostLocation.
     * @param {AlertPostLocationCreateArgs} args - Arguments to create a AlertPostLocation.
     * @example
     * // Create one AlertPostLocation
     * const AlertPostLocation = await prisma.alertPostLocation.create({
     *   data: {
     *     // ... data to create a AlertPostLocation
     *   }
     * })
     * 
     */
    create<T extends AlertPostLocationCreateArgs>(args: SelectSubset<T, AlertPostLocationCreateArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlertPostLocations.
     * @param {AlertPostLocationCreateManyArgs} args - Arguments to create many AlertPostLocations.
     * @example
     * // Create many AlertPostLocations
     * const alertPostLocation = await prisma.alertPostLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertPostLocationCreateManyArgs>(args?: SelectSubset<T, AlertPostLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlertPostLocation.
     * @param {AlertPostLocationDeleteArgs} args - Arguments to delete one AlertPostLocation.
     * @example
     * // Delete one AlertPostLocation
     * const AlertPostLocation = await prisma.alertPostLocation.delete({
     *   where: {
     *     // ... filter to delete one AlertPostLocation
     *   }
     * })
     * 
     */
    delete<T extends AlertPostLocationDeleteArgs>(args: SelectSubset<T, AlertPostLocationDeleteArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlertPostLocation.
     * @param {AlertPostLocationUpdateArgs} args - Arguments to update one AlertPostLocation.
     * @example
     * // Update one AlertPostLocation
     * const alertPostLocation = await prisma.alertPostLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertPostLocationUpdateArgs>(args: SelectSubset<T, AlertPostLocationUpdateArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlertPostLocations.
     * @param {AlertPostLocationDeleteManyArgs} args - Arguments to filter AlertPostLocations to delete.
     * @example
     * // Delete a few AlertPostLocations
     * const { count } = await prisma.alertPostLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertPostLocationDeleteManyArgs>(args?: SelectSubset<T, AlertPostLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertPostLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertPostLocations
     * const alertPostLocation = await prisma.alertPostLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertPostLocationUpdateManyArgs>(args: SelectSubset<T, AlertPostLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlertPostLocation.
     * @param {AlertPostLocationUpsertArgs} args - Arguments to update or create a AlertPostLocation.
     * @example
     * // Update or create a AlertPostLocation
     * const alertPostLocation = await prisma.alertPostLocation.upsert({
     *   create: {
     *     // ... data to create a AlertPostLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertPostLocation we want to update
     *   }
     * })
     */
    upsert<T extends AlertPostLocationUpsertArgs>(args: SelectSubset<T, AlertPostLocationUpsertArgs<ExtArgs>>): Prisma__AlertPostLocationClient<$Result.GetResult<Prisma.$AlertPostLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlertPostLocations that matches the filter.
     * @param {AlertPostLocationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const alertPostLocation = await prisma.alertPostLocation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AlertPostLocationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AlertPostLocation.
     * @param {AlertPostLocationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const alertPostLocation = await prisma.alertPostLocation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AlertPostLocationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AlertPostLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationCountArgs} args - Arguments to filter AlertPostLocations to count.
     * @example
     * // Count the number of AlertPostLocations
     * const count = await prisma.alertPostLocation.count({
     *   where: {
     *     // ... the filter for the AlertPostLocations we want to count
     *   }
     * })
    **/
    count<T extends AlertPostLocationCountArgs>(
      args?: Subset<T, AlertPostLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertPostLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertPostLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertPostLocationAggregateArgs>(args: Subset<T, AlertPostLocationAggregateArgs>): Prisma.PrismaPromise<GetAlertPostLocationAggregateType<T>>

    /**
     * Group by AlertPostLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertPostLocationGroupByArgs} args - Group by arguments.
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
      T extends AlertPostLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertPostLocationGroupByArgs['orderBy'] }
        : { orderBy?: AlertPostLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertPostLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertPostLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertPostLocation model
   */
  readonly fields: AlertPostLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertPostLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertPostLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alertPost<T extends AlertPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlertPostDefaultArgs<ExtArgs>>): Prisma__AlertPostClient<$Result.GetResult<Prisma.$AlertPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlertPostLocation model
   */
  interface AlertPostLocationFieldRefs {
    readonly id: FieldRef<"AlertPostLocation", 'String'>
    readonly alertPostId: FieldRef<"AlertPostLocation", 'String'>
    readonly type: FieldRef<"AlertPostLocation", 'String'>
    readonly coordinates: FieldRef<"AlertPostLocation", 'Float[]'>
    readonly images: FieldRef<"AlertPostLocation", 'String[]'>
    readonly createdAt: FieldRef<"AlertPostLocation", 'DateTime'>
    readonly updatedAt: FieldRef<"AlertPostLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertPostLocation findUnique
   */
  export type AlertPostLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * Filter, which AlertPostLocation to fetch.
     */
    where: AlertPostLocationWhereUniqueInput
  }

  /**
   * AlertPostLocation findUniqueOrThrow
   */
  export type AlertPostLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * Filter, which AlertPostLocation to fetch.
     */
    where: AlertPostLocationWhereUniqueInput
  }

  /**
   * AlertPostLocation findFirst
   */
  export type AlertPostLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * Filter, which AlertPostLocation to fetch.
     */
    where?: AlertPostLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPostLocations to fetch.
     */
    orderBy?: AlertPostLocationOrderByWithRelationInput | AlertPostLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertPostLocations.
     */
    cursor?: AlertPostLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPostLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPostLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertPostLocations.
     */
    distinct?: AlertPostLocationScalarFieldEnum | AlertPostLocationScalarFieldEnum[]
  }

  /**
   * AlertPostLocation findFirstOrThrow
   */
  export type AlertPostLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * Filter, which AlertPostLocation to fetch.
     */
    where?: AlertPostLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPostLocations to fetch.
     */
    orderBy?: AlertPostLocationOrderByWithRelationInput | AlertPostLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertPostLocations.
     */
    cursor?: AlertPostLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPostLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPostLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertPostLocations.
     */
    distinct?: AlertPostLocationScalarFieldEnum | AlertPostLocationScalarFieldEnum[]
  }

  /**
   * AlertPostLocation findMany
   */
  export type AlertPostLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * Filter, which AlertPostLocations to fetch.
     */
    where?: AlertPostLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertPostLocations to fetch.
     */
    orderBy?: AlertPostLocationOrderByWithRelationInput | AlertPostLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertPostLocations.
     */
    cursor?: AlertPostLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertPostLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertPostLocations.
     */
    skip?: number
    distinct?: AlertPostLocationScalarFieldEnum | AlertPostLocationScalarFieldEnum[]
  }

  /**
   * AlertPostLocation create
   */
  export type AlertPostLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a AlertPostLocation.
     */
    data: XOR<AlertPostLocationCreateInput, AlertPostLocationUncheckedCreateInput>
  }

  /**
   * AlertPostLocation createMany
   */
  export type AlertPostLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertPostLocations.
     */
    data: AlertPostLocationCreateManyInput | AlertPostLocationCreateManyInput[]
  }

  /**
   * AlertPostLocation update
   */
  export type AlertPostLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a AlertPostLocation.
     */
    data: XOR<AlertPostLocationUpdateInput, AlertPostLocationUncheckedUpdateInput>
    /**
     * Choose, which AlertPostLocation to update.
     */
    where: AlertPostLocationWhereUniqueInput
  }

  /**
   * AlertPostLocation updateMany
   */
  export type AlertPostLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertPostLocations.
     */
    data: XOR<AlertPostLocationUpdateManyMutationInput, AlertPostLocationUncheckedUpdateManyInput>
    /**
     * Filter which AlertPostLocations to update
     */
    where?: AlertPostLocationWhereInput
    /**
     * Limit how many AlertPostLocations to update.
     */
    limit?: number
  }

  /**
   * AlertPostLocation upsert
   */
  export type AlertPostLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the AlertPostLocation to update in case it exists.
     */
    where: AlertPostLocationWhereUniqueInput
    /**
     * In case the AlertPostLocation found by the `where` argument doesn't exist, create a new AlertPostLocation with this data.
     */
    create: XOR<AlertPostLocationCreateInput, AlertPostLocationUncheckedCreateInput>
    /**
     * In case the AlertPostLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertPostLocationUpdateInput, AlertPostLocationUncheckedUpdateInput>
  }

  /**
   * AlertPostLocation delete
   */
  export type AlertPostLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
    /**
     * Filter which AlertPostLocation to delete.
     */
    where: AlertPostLocationWhereUniqueInput
  }

  /**
   * AlertPostLocation deleteMany
   */
  export type AlertPostLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertPostLocations to delete
     */
    where?: AlertPostLocationWhereInput
    /**
     * Limit how many AlertPostLocations to delete.
     */
    limit?: number
  }

  /**
   * AlertPostLocation findRaw
   */
  export type AlertPostLocationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AlertPostLocation aggregateRaw
   */
  export type AlertPostLocationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AlertPostLocation without action
   */
  export type AlertPostLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertPostLocation
     */
    select?: AlertPostLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlertPostLocation
     */
    omit?: AlertPostLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertPostLocationInclude<ExtArgs> | null
  }


  /**
   * Model Contents
   */

  export type AggregateContents = {
    _count: ContentsCountAggregateOutputType | null
    _min: ContentsMinAggregateOutputType | null
    _max: ContentsMaxAggregateOutputType | null
  }

  export type ContentsMinAggregateOutputType = {
    id: string | null
    termsAndCondition: string | null
    privacyPolicy: string | null
    aboutUs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentsMaxAggregateOutputType = {
    id: string | null
    termsAndCondition: string | null
    privacyPolicy: string | null
    aboutUs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentsCountAggregateOutputType = {
    id: number
    termsAndCondition: number
    privacyPolicy: number
    aboutUs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentsMinAggregateInputType = {
    id?: true
    termsAndCondition?: true
    privacyPolicy?: true
    aboutUs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentsMaxAggregateInputType = {
    id?: true
    termsAndCondition?: true
    privacyPolicy?: true
    aboutUs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentsCountAggregateInputType = {
    id?: true
    termsAndCondition?: true
    privacyPolicy?: true
    aboutUs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to aggregate.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentsMaxAggregateInputType
  }

  export type GetContentsAggregateType<T extends ContentsAggregateArgs> = {
        [P in keyof T & keyof AggregateContents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContents[P]>
      : GetScalarType<T[P], AggregateContents[P]>
  }




  export type ContentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentsWhereInput
    orderBy?: ContentsOrderByWithAggregationInput | ContentsOrderByWithAggregationInput[]
    by: ContentsScalarFieldEnum[] | ContentsScalarFieldEnum
    having?: ContentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentsCountAggregateInputType | true
    _min?: ContentsMinAggregateInputType
    _max?: ContentsMaxAggregateInputType
  }

  export type ContentsGroupByOutputType = {
    id: string
    termsAndCondition: string
    privacyPolicy: string
    aboutUs: string
    createdAt: Date
    updatedAt: Date
    _count: ContentsCountAggregateOutputType | null
    _min: ContentsMinAggregateOutputType | null
    _max: ContentsMaxAggregateOutputType | null
  }

  type GetContentsGroupByPayload<T extends ContentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentsGroupByOutputType[P]>
            : GetScalarType<T[P], ContentsGroupByOutputType[P]>
        }
      >
    >


  export type ContentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    termsAndCondition?: boolean
    privacyPolicy?: boolean
    aboutUs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contents"]>



  export type ContentsSelectScalar = {
    id?: boolean
    termsAndCondition?: boolean
    privacyPolicy?: boolean
    aboutUs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "termsAndCondition" | "privacyPolicy" | "aboutUs" | "createdAt" | "updatedAt", ExtArgs["result"]["contents"]>

  export type $ContentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contents"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      termsAndCondition: string
      privacyPolicy: string
      aboutUs: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contents"]>
    composites: {}
  }

  type ContentsGetPayload<S extends boolean | null | undefined | ContentsDefaultArgs> = $Result.GetResult<Prisma.$ContentsPayload, S>

  type ContentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentsCountAggregateInputType | true
    }

  export interface ContentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contents'], meta: { name: 'Contents' } }
    /**
     * Find zero or one Contents that matches the filter.
     * @param {ContentsFindUniqueArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentsFindUniqueArgs>(args: SelectSubset<T, ContentsFindUniqueArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contents that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentsFindUniqueOrThrowArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsFindFirstArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentsFindFirstArgs>(args?: SelectSubset<T, ContentsFindFirstArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contents that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsFindFirstOrThrowArgs} args - Arguments to find a Contents
     * @example
     * // Get one Contents
     * const contents = await prisma.contents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.contents.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.contents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentsWithIdOnly = await prisma.contents.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentsFindManyArgs>(args?: SelectSubset<T, ContentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contents.
     * @param {ContentsCreateArgs} args - Arguments to create a Contents.
     * @example
     * // Create one Contents
     * const Contents = await prisma.contents.create({
     *   data: {
     *     // ... data to create a Contents
     *   }
     * })
     * 
     */
    create<T extends ContentsCreateArgs>(args: SelectSubset<T, ContentsCreateArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentsCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const contents = await prisma.contents.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentsCreateManyArgs>(args?: SelectSubset<T, ContentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contents.
     * @param {ContentsDeleteArgs} args - Arguments to delete one Contents.
     * @example
     * // Delete one Contents
     * const Contents = await prisma.contents.delete({
     *   where: {
     *     // ... filter to delete one Contents
     *   }
     * })
     * 
     */
    delete<T extends ContentsDeleteArgs>(args: SelectSubset<T, ContentsDeleteArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contents.
     * @param {ContentsUpdateArgs} args - Arguments to update one Contents.
     * @example
     * // Update one Contents
     * const contents = await prisma.contents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentsUpdateArgs>(args: SelectSubset<T, ContentsUpdateArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentsDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.contents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentsDeleteManyArgs>(args?: SelectSubset<T, ContentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const contents = await prisma.contents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentsUpdateManyArgs>(args: SelectSubset<T, ContentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contents.
     * @param {ContentsUpsertArgs} args - Arguments to update or create a Contents.
     * @example
     * // Update or create a Contents
     * const contents = await prisma.contents.upsert({
     *   create: {
     *     // ... data to create a Contents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contents we want to update
     *   }
     * })
     */
    upsert<T extends ContentsUpsertArgs>(args: SelectSubset<T, ContentsUpsertArgs<ExtArgs>>): Prisma__ContentsClient<$Result.GetResult<Prisma.$ContentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * @param {ContentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contents = await prisma.contents.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ContentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Contents.
     * @param {ContentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contents = await prisma.contents.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ContentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.contents.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentsCountArgs>(
      args?: Subset<T, ContentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentsAggregateArgs>(args: Subset<T, ContentsAggregateArgs>): Prisma.PrismaPromise<GetContentsAggregateType<T>>

    /**
     * Group by Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentsGroupByArgs} args - Group by arguments.
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
      T extends ContentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentsGroupByArgs['orderBy'] }
        : { orderBy?: ContentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contents model
   */
  readonly fields: ContentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contents model
   */
  interface ContentsFieldRefs {
    readonly id: FieldRef<"Contents", 'String'>
    readonly termsAndCondition: FieldRef<"Contents", 'String'>
    readonly privacyPolicy: FieldRef<"Contents", 'String'>
    readonly aboutUs: FieldRef<"Contents", 'String'>
    readonly createdAt: FieldRef<"Contents", 'DateTime'>
    readonly updatedAt: FieldRef<"Contents", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contents findUnique
   */
  export type ContentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents findUniqueOrThrow
   */
  export type ContentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents findFirst
   */
  export type ContentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * Contents findFirstOrThrow
   */
  export type ContentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * Contents findMany
   */
  export type ContentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentsOrderByWithRelationInput | ContentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentsScalarFieldEnum | ContentsScalarFieldEnum[]
  }

  /**
   * Contents create
   */
  export type ContentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * The data needed to create a Contents.
     */
    data: XOR<ContentsCreateInput, ContentsUncheckedCreateInput>
  }

  /**
   * Contents createMany
   */
  export type ContentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentsCreateManyInput | ContentsCreateManyInput[]
  }

  /**
   * Contents update
   */
  export type ContentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * The data needed to update a Contents.
     */
    data: XOR<ContentsUpdateInput, ContentsUncheckedUpdateInput>
    /**
     * Choose, which Contents to update.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents updateMany
   */
  export type ContentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentsUpdateManyMutationInput, ContentsUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentsWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Contents upsert
   */
  export type ContentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * The filter to search for the Contents to update in case it exists.
     */
    where: ContentsWhereUniqueInput
    /**
     * In case the Contents found by the `where` argument doesn't exist, create a new Contents with this data.
     */
    create: XOR<ContentsCreateInput, ContentsUncheckedCreateInput>
    /**
     * In case the Contents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentsUpdateInput, ContentsUncheckedUpdateInput>
  }

  /**
   * Contents delete
   */
  export type ContentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
    /**
     * Filter which Contents to delete.
     */
    where: ContentsWhereUniqueInput
  }

  /**
   * Contents deleteMany
   */
  export type ContentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentsWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Contents findRaw
   */
  export type ContentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contents aggregateRaw
   */
  export type ContentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Contents without action
   */
  export type ContentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contents
     */
    select?: ContentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contents
     */
    omit?: ContentsOmit<ExtArgs> | null
  }


  /**
   * Model Package
   */

  export type AggregatePackage = {
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  export type PackageAvgAggregateOutputType = {
    price: number | null
    durationDay: number | null
  }

  export type PackageSumAggregateOutputType = {
    price: number | null
    durationDay: number | null
  }

  export type PackageMinAggregateOutputType = {
    id: string | null
    title: string | null
    descriptions: string | null
    price: number | null
    durationDay: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    descriptions: string | null
    price: number | null
    durationDay: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageCountAggregateOutputType = {
    id: number
    title: number
    descriptions: number
    price: number
    durationDay: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageAvgAggregateInputType = {
    price?: true
    durationDay?: true
  }

  export type PackageSumAggregateInputType = {
    price?: true
    durationDay?: true
  }

  export type PackageMinAggregateInputType = {
    id?: true
    title?: true
    descriptions?: true
    price?: true
    durationDay?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageMaxAggregateInputType = {
    id?: true
    title?: true
    descriptions?: true
    price?: true
    durationDay?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageCountAggregateInputType = {
    id?: true
    title?: true
    descriptions?: true
    price?: true
    durationDay?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Package to aggregate.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Packages
    **/
    _count?: true | PackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageMaxAggregateInputType
  }

  export type GetPackageAggregateType<T extends PackageAggregateArgs> = {
        [P in keyof T & keyof AggregatePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackage[P]>
      : GetScalarType<T[P], AggregatePackage[P]>
  }




  export type PackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageWhereInput
    orderBy?: PackageOrderByWithAggregationInput | PackageOrderByWithAggregationInput[]
    by: PackageScalarFieldEnum[] | PackageScalarFieldEnum
    having?: PackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageCountAggregateInputType | true
    _avg?: PackageAvgAggregateInputType
    _sum?: PackageSumAggregateInputType
    _min?: PackageMinAggregateInputType
    _max?: PackageMaxAggregateInputType
  }

  export type PackageGroupByOutputType = {
    id: string
    title: string
    descriptions: string
    price: number
    durationDay: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PackageCountAggregateOutputType | null
    _avg: PackageAvgAggregateOutputType | null
    _sum: PackageSumAggregateOutputType | null
    _min: PackageMinAggregateOutputType | null
    _max: PackageMaxAggregateOutputType | null
  }

  type GetPackageGroupByPayload<T extends PackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageGroupByOutputType[P]>
            : GetScalarType<T[P], PackageGroupByOutputType[P]>
        }
      >
    >


  export type PackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descriptions?: boolean
    price?: boolean
    durationDay?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | Package$subscriptionArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["package"]>



  export type PackageSelectScalar = {
    id?: boolean
    title?: boolean
    descriptions?: boolean
    price?: boolean
    durationDay?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descriptions" | "price" | "durationDay" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["package"]>
  export type PackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | Package$subscriptionArgs<ExtArgs>
    _count?: boolean | PackageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Package"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      descriptions: string
      price: number
      durationDay: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["package"]>
    composites: {}
  }

  type PackageGetPayload<S extends boolean | null | undefined | PackageDefaultArgs> = $Result.GetResult<Prisma.$PackagePayload, S>

  type PackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageCountAggregateInputType | true
    }

  export interface PackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Package'], meta: { name: 'Package' } }
    /**
     * Find zero or one Package that matches the filter.
     * @param {PackageFindUniqueArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageFindUniqueArgs>(args: SelectSubset<T, PackageFindUniqueArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Package that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageFindUniqueOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageFindFirstArgs>(args?: SelectSubset<T, PackageFindFirstArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Package that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindFirstOrThrowArgs} args - Arguments to find a Package
     * @example
     * // Get one Package
     * const package = await prisma.package.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Packages
     * const packages = await prisma.package.findMany()
     * 
     * // Get first 10 Packages
     * const packages = await prisma.package.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageWithIdOnly = await prisma.package.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageFindManyArgs>(args?: SelectSubset<T, PackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Package.
     * @param {PackageCreateArgs} args - Arguments to create a Package.
     * @example
     * // Create one Package
     * const Package = await prisma.package.create({
     *   data: {
     *     // ... data to create a Package
     *   }
     * })
     * 
     */
    create<T extends PackageCreateArgs>(args: SelectSubset<T, PackageCreateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Packages.
     * @param {PackageCreateManyArgs} args - Arguments to create many Packages.
     * @example
     * // Create many Packages
     * const package = await prisma.package.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageCreateManyArgs>(args?: SelectSubset<T, PackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Package.
     * @param {PackageDeleteArgs} args - Arguments to delete one Package.
     * @example
     * // Delete one Package
     * const Package = await prisma.package.delete({
     *   where: {
     *     // ... filter to delete one Package
     *   }
     * })
     * 
     */
    delete<T extends PackageDeleteArgs>(args: SelectSubset<T, PackageDeleteArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Package.
     * @param {PackageUpdateArgs} args - Arguments to update one Package.
     * @example
     * // Update one Package
     * const package = await prisma.package.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageUpdateArgs>(args: SelectSubset<T, PackageUpdateArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Packages.
     * @param {PackageDeleteManyArgs} args - Arguments to filter Packages to delete.
     * @example
     * // Delete a few Packages
     * const { count } = await prisma.package.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageDeleteManyArgs>(args?: SelectSubset<T, PackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Packages
     * const package = await prisma.package.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageUpdateManyArgs>(args: SelectSubset<T, PackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Package.
     * @param {PackageUpsertArgs} args - Arguments to update or create a Package.
     * @example
     * // Update or create a Package
     * const package = await prisma.package.upsert({
     *   create: {
     *     // ... data to create a Package
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Package we want to update
     *   }
     * })
     */
    upsert<T extends PackageUpsertArgs>(args: SelectSubset<T, PackageUpsertArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Packages that matches the filter.
     * @param {PackageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const package = await prisma.package.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PackageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Package.
     * @param {PackageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const package = await prisma.package.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PackageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Packages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageCountArgs} args - Arguments to filter Packages to count.
     * @example
     * // Count the number of Packages
     * const count = await prisma.package.count({
     *   where: {
     *     // ... the filter for the Packages we want to count
     *   }
     * })
    **/
    count<T extends PackageCountArgs>(
      args?: Subset<T, PackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageAggregateArgs>(args: Subset<T, PackageAggregateArgs>): Prisma.PrismaPromise<GetPackageAggregateType<T>>

    /**
     * Group by Package.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageGroupByArgs} args - Group by arguments.
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
      T extends PackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageGroupByArgs['orderBy'] }
        : { orderBy?: PackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Package model
   */
  readonly fields: PackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Package.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends Package$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Package$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Package model
   */
  interface PackageFieldRefs {
    readonly id: FieldRef<"Package", 'String'>
    readonly title: FieldRef<"Package", 'String'>
    readonly descriptions: FieldRef<"Package", 'String'>
    readonly price: FieldRef<"Package", 'Float'>
    readonly durationDay: FieldRef<"Package", 'Int'>
    readonly isDeleted: FieldRef<"Package", 'Boolean'>
    readonly createdAt: FieldRef<"Package", 'DateTime'>
    readonly updatedAt: FieldRef<"Package", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Package findUnique
   */
  export type PackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findUniqueOrThrow
   */
  export type PackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package findFirst
   */
  export type PackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findFirstOrThrow
   */
  export type PackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Package to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Packages.
     */
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package findMany
   */
  export type PackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter, which Packages to fetch.
     */
    where?: PackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Packages to fetch.
     */
    orderBy?: PackageOrderByWithRelationInput | PackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Packages.
     */
    cursor?: PackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Packages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Packages.
     */
    skip?: number
    distinct?: PackageScalarFieldEnum | PackageScalarFieldEnum[]
  }

  /**
   * Package create
   */
  export type PackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to create a Package.
     */
    data: XOR<PackageCreateInput, PackageUncheckedCreateInput>
  }

  /**
   * Package createMany
   */
  export type PackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Packages.
     */
    data: PackageCreateManyInput | PackageCreateManyInput[]
  }

  /**
   * Package update
   */
  export type PackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The data needed to update a Package.
     */
    data: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
    /**
     * Choose, which Package to update.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package updateMany
   */
  export type PackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Packages.
     */
    data: XOR<PackageUpdateManyMutationInput, PackageUncheckedUpdateManyInput>
    /**
     * Filter which Packages to update
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to update.
     */
    limit?: number
  }

  /**
   * Package upsert
   */
  export type PackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * The filter to search for the Package to update in case it exists.
     */
    where: PackageWhereUniqueInput
    /**
     * In case the Package found by the `where` argument doesn't exist, create a new Package with this data.
     */
    create: XOR<PackageCreateInput, PackageUncheckedCreateInput>
    /**
     * In case the Package was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageUpdateInput, PackageUncheckedUpdateInput>
  }

  /**
   * Package delete
   */
  export type PackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
    /**
     * Filter which Package to delete.
     */
    where: PackageWhereUniqueInput
  }

  /**
   * Package deleteMany
   */
  export type PackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Packages to delete
     */
    where?: PackageWhereInput
    /**
     * Limit how many Packages to delete.
     */
    limit?: number
  }

  /**
   * Package findRaw
   */
  export type PackageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Package aggregateRaw
   */
  export type PackageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Package.subscription
   */
  export type Package$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Package without action
   */
  export type PackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Package
     */
    select?: PackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Package
     */
    omit?: PackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    packageId: string | null
    userId: string | null
    expiredAt: Date | null
    isActivate: boolean | null
    isPaid: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    packageId: string | null
    userId: string | null
    expiredAt: Date | null
    isActivate: boolean | null
    isPaid: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    packageId: number
    userId: number
    expiredAt: number
    isActivate: number
    isPaid: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    packageId?: true
    userId?: true
    expiredAt?: true
    isActivate?: true
    isPaid?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    packageId?: true
    userId?: true
    expiredAt?: true
    isActivate?: true
    isPaid?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    packageId?: true
    userId?: true
    expiredAt?: true
    isActivate?: true
    isPaid?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    packageId: string
    userId: string
    expiredAt: Date
    isActivate: boolean
    isPaid: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    packageId?: boolean
    userId?: boolean
    expiredAt?: boolean
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    package?: boolean | PackageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    packageId?: boolean
    userId?: boolean
    expiredAt?: boolean
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "packageId" | "userId" | "expiredAt" | "isActivate" | "isPaid" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    package?: boolean | PackageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      package: Prisma.$PackagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      packageId: string
      userId: string
      expiredAt: Date
      isActivate: boolean
      isPaid: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * @param {SubscriptionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscription = await prisma.subscription.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscriptionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subscription.
     * @param {SubscriptionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscription = await prisma.subscription.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscriptionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    package<T extends PackageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageDefaultArgs<ExtArgs>>): Prisma__PackageClient<$Result.GetResult<Prisma.$PackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly packageId: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly expiredAt: FieldRef<"Subscription", 'DateTime'>
    readonly isActivate: FieldRef<"Subscription", 'Boolean'>
    readonly isPaid: FieldRef<"Subscription", 'Boolean'>
    readonly isDeleted: FieldRef<"Subscription", 'Boolean'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription findRaw
   */
  export type SubscriptionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription aggregateRaw
   */
  export type SubscriptionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    cursor?: PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    price: number | null
  }

  export type PaymentsSumAggregateOutputType = {
    price: number | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    userId: string | null
    price: number | null
    trnId: string | null
    isPaid: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    userId: string | null
    price: number | null
    trnId: string | null
    isPaid: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    subscriptionId: number
    userId: number
    price: number
    trnId: number
    isPaid: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    price?: true
  }

  export type PaymentsSumAggregateInputType = {
    price?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
    price?: true
    trnId?: true
    isPaid?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
    price?: true
    trnId?: true
    isPaid?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
    price?: true
    trnId?: true
    isPaid?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to aggregate.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsWhereInput
    orderBy?: PaymentsOrderByWithAggregationInput | PaymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: string
    subscriptionId: string
    userId: string
    price: number
    trnId: string
    isPaid: boolean
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    userId?: boolean
    price?: boolean
    trnId?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>



  export type PaymentsSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    userId?: boolean
    price?: boolean
    trnId?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "userId" | "price" | "trnId" | "isPaid" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["payments"]>
  export type PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payments"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      userId: string
      price: number
      trnId: string
      isPaid: boolean
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type PaymentsGetPayload<S extends boolean | null | undefined | PaymentsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsPayload, S>

  type PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payments'], meta: { name: 'Payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {PaymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsFindUniqueArgs>(args: SelectSubset<T, PaymentsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsFindFirstArgs>(args?: SelectSubset<T, PaymentsFindFirstArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsFindManyArgs>(args?: SelectSubset<T, PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {PaymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends PaymentsCreateArgs>(args: SelectSubset<T, PaymentsCreateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsCreateManyArgs>(args?: SelectSubset<T, PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payments.
     * @param {PaymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends PaymentsDeleteArgs>(args: SelectSubset<T, PaymentsDeleteArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {PaymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsUpdateArgs>(args: SelectSubset<T, PaymentsUpdateArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsDeleteManyArgs>(args?: SelectSubset<T, PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsUpdateManyArgs>(args: SelectSubset<T, PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payments.
     * @param {PaymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsUpsertArgs>(args: SelectSubset<T, PaymentsUpsertArgs<ExtArgs>>): Prisma__PaymentsClient<$Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * @param {PaymentsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payments = await prisma.payments.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaymentsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payments.
     * @param {PaymentsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payments = await prisma.payments.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentsCountArgs>(
      args?: Subset<T, PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsGroupByArgs} args - Group by arguments.
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
      T extends PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payments model
   */
  readonly fields: PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payments model
   */
  interface PaymentsFieldRefs {
    readonly id: FieldRef<"Payments", 'String'>
    readonly subscriptionId: FieldRef<"Payments", 'String'>
    readonly userId: FieldRef<"Payments", 'String'>
    readonly price: FieldRef<"Payments", 'Float'>
    readonly trnId: FieldRef<"Payments", 'String'>
    readonly isPaid: FieldRef<"Payments", 'Boolean'>
    readonly isDeleted: FieldRef<"Payments", 'Boolean'>
    readonly createdAt: FieldRef<"Payments", 'DateTime'>
    readonly updatedAt: FieldRef<"Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payments findUnique
   */
  export type PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findUniqueOrThrow
   */
  export type PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments findFirst
   */
  export type PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findFirstOrThrow
   */
  export type PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments findMany
   */
  export type PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentsOrderByWithRelationInput | PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * Payments create
   */
  export type PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Payments.
     */
    data: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
  }

  /**
   * Payments createMany
   */
  export type PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentsCreateManyInput | PaymentsCreateManyInput[]
  }

  /**
   * Payments update
   */
  export type PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Payments.
     */
    data: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Payments to update.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments updateMany
   */
  export type PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payments upsert
   */
  export type PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Payments to update in case it exists.
     */
    where: PaymentsWhereUniqueInput
    /**
     * In case the Payments found by the `where` argument doesn't exist, create a new Payments with this data.
     */
    create: XOR<PaymentsCreateInput, PaymentsUncheckedCreateInput>
    /**
     * In case the Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsUpdateInput, PaymentsUncheckedUpdateInput>
  }

  /**
   * Payments delete
   */
  export type PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Payments to delete.
     */
    where: PaymentsWhereUniqueInput
  }

  /**
   * Payments deleteMany
   */
  export type PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentsWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payments findRaw
   */
  export type PaymentsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payments aggregateRaw
   */
  export type PaymentsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payments without action
   */
  export type PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payments
     */
    omit?: PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    status: 'status',
    role: 'role',
    profile: 'profile',
    phoneNumber: 'phoneNumber',
    expireAt: 'expireAt',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ip: 'ip',
    browser: 'browser',
    os: 'os',
    device: 'device',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceHistoryScalarFieldEnum = (typeof DeviceHistoryScalarFieldEnum)[keyof typeof DeviceHistoryScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    userId: 'userId',
    otp: 'otp',
    expiredAt: 'expiredAt',
    status: 'status'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const UserLocationScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    coordinates: 'coordinates',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum]


  export const SafeZoneScalarFieldEnum: {
    id: 'id',
    description: 'description',
    expectedReturnTime: 'expectedReturnTime',
    notification: 'notification',
    startLocationId: 'startLocationId',
    endLocationId: 'endLocationId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SafeZoneScalarFieldEnum = (typeof SafeZoneScalarFieldEnum)[keyof typeof SafeZoneScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    type: 'type',
    coordinates: 'coordinates',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const EmergencyContactScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    profile: 'profile',
    name: 'name',
    relation: 'relation',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isDeleted: 'isDeleted'
  };

  export type EmergencyContactScalarFieldEnum = (typeof EmergencyContactScalarFieldEnum)[keyof typeof EmergencyContactScalarFieldEnum]


  export const AlertPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    alertType: 'alertType',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertPostScalarFieldEnum = (typeof AlertPostScalarFieldEnum)[keyof typeof AlertPostScalarFieldEnum]


  export const AlertPostLocationScalarFieldEnum: {
    id: 'id',
    alertPostId: 'alertPostId',
    type: 'type',
    coordinates: 'coordinates',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertPostLocationScalarFieldEnum = (typeof AlertPostLocationScalarFieldEnum)[keyof typeof AlertPostLocationScalarFieldEnum]


  export const ContentsScalarFieldEnum: {
    id: 'id',
    termsAndCondition: 'termsAndCondition',
    privacyPolicy: 'privacyPolicy',
    aboutUs: 'aboutUs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentsScalarFieldEnum = (typeof ContentsScalarFieldEnum)[keyof typeof ContentsScalarFieldEnum]


  export const PackageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descriptions: 'descriptions',
    price: 'price',
    durationDay: 'durationDay',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageScalarFieldEnum = (typeof PackageScalarFieldEnum)[keyof typeof PackageScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    packageId: 'packageId',
    userId: 'userId',
    expiredAt: 'expiredAt',
    isActivate: 'isActivate',
    isPaid: 'isPaid',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    userId: 'userId',
    price: 'price',
    trnId: 'trnId',
    isPaid: 'isPaid',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


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
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
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
    status?: EnumstatusFilter<"User"> | $Enums.status
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    expireAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verification?: XOR<VerificationNullableScalarRelationFilter, VerificationWhereInput> | null
    location?: XOR<UserLocationNullableScalarRelationFilter, UserLocationWhereInput> | null
    emergencyContact?: EmergencyContactListRelationFilter
    alertPost?: AlertPostListRelationFilter
    subscription?: SubscriptionListRelationFilter
    deviceHistory?: DeviceHistoryListRelationFilter
    payments?: PaymentsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    profile?: SortOrder
    phoneNumber?: SortOrder
    expireAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    verification?: VerificationOrderByWithRelationInput
    location?: UserLocationOrderByWithRelationInput
    emergencyContact?: EmergencyContactOrderByRelationAggregateInput
    alertPost?: AlertPostOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByRelationAggregateInput
    deviceHistory?: DeviceHistoryOrderByRelationAggregateInput
    payments?: PaymentsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    status?: EnumstatusFilter<"User"> | $Enums.status
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    expireAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isDeleted?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    verification?: XOR<VerificationNullableScalarRelationFilter, VerificationWhereInput> | null
    location?: XOR<UserLocationNullableScalarRelationFilter, UserLocationWhereInput> | null
    emergencyContact?: EmergencyContactListRelationFilter
    alertPost?: AlertPostListRelationFilter
    subscription?: SubscriptionListRelationFilter
    deviceHistory?: DeviceHistoryListRelationFilter
    payments?: PaymentsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    profile?: SortOrder
    phoneNumber?: SortOrder
    expireAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    status?: EnumstatusWithAggregatesFilter<"User"> | $Enums.status
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    expireAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceHistoryWhereInput = {
    AND?: DeviceHistoryWhereInput | DeviceHistoryWhereInput[]
    OR?: DeviceHistoryWhereInput[]
    NOT?: DeviceHistoryWhereInput | DeviceHistoryWhereInput[]
    id?: StringFilter<"DeviceHistory"> | string
    userId?: StringFilter<"DeviceHistory"> | string
    ip?: StringNullableFilter<"DeviceHistory"> | string | null
    browser?: StringNullableFilter<"DeviceHistory"> | string | null
    os?: StringNullableFilter<"DeviceHistory"> | string | null
    device?: StringNullableFilter<"DeviceHistory"> | string | null
    createdAt?: DateTimeFilter<"DeviceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceHistoryWhereInput | DeviceHistoryWhereInput[]
    OR?: DeviceHistoryWhereInput[]
    NOT?: DeviceHistoryWhereInput | DeviceHistoryWhereInput[]
    userId?: StringFilter<"DeviceHistory"> | string
    ip?: StringNullableFilter<"DeviceHistory"> | string | null
    browser?: StringNullableFilter<"DeviceHistory"> | string | null
    os?: StringNullableFilter<"DeviceHistory"> | string | null
    device?: StringNullableFilter<"DeviceHistory"> | string | null
    createdAt?: DateTimeFilter<"DeviceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DeviceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceHistoryCountOrderByAggregateInput
    _max?: DeviceHistoryMaxOrderByAggregateInput
    _min?: DeviceHistoryMinOrderByAggregateInput
  }

  export type DeviceHistoryScalarWhereWithAggregatesInput = {
    AND?: DeviceHistoryScalarWhereWithAggregatesInput | DeviceHistoryScalarWhereWithAggregatesInput[]
    OR?: DeviceHistoryScalarWhereWithAggregatesInput[]
    NOT?: DeviceHistoryScalarWhereWithAggregatesInput | DeviceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceHistory"> | string
    userId?: StringWithAggregatesFilter<"DeviceHistory"> | string
    ip?: StringNullableWithAggregatesFilter<"DeviceHistory"> | string | null
    browser?: StringNullableWithAggregatesFilter<"DeviceHistory"> | string | null
    os?: StringNullableWithAggregatesFilter<"DeviceHistory"> | string | null
    device?: StringNullableWithAggregatesFilter<"DeviceHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DeviceHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeviceHistory"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    userId?: StringFilter<"Verification"> | string
    otp?: IntFilter<"Verification"> | number
    expiredAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    status?: BoolFilter<"Verification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationOrderByWithRelationInput = {
    userId?: SortOrder
    otp?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    otp?: IntFilter<"Verification"> | number
    expiredAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    status?: BoolFilter<"Verification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type VerificationOrderByWithAggregationInput = {
    userId?: SortOrder
    otp?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _avg?: VerificationAvgOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
    _sum?: VerificationSumOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Verification"> | string
    otp?: IntWithAggregatesFilter<"Verification"> | number
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    status?: BoolWithAggregatesFilter<"Verification"> | boolean
  }

  export type UserLocationWhereInput = {
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    userId?: StringFilter<"UserLocation"> | string
    type?: StringFilter<"UserLocation"> | string
    coordinates?: FloatNullableListFilter<"UserLocation">
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
    updatedAt?: DateTimeFilter<"UserLocation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserLocationOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    type?: StringFilter<"UserLocation"> | string
    coordinates?: FloatNullableListFilter<"UserLocation">
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
    updatedAt?: DateTimeFilter<"UserLocation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserLocationOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserLocationCountOrderByAggregateInput
    _avg?: UserLocationAvgOrderByAggregateInput
    _max?: UserLocationMaxOrderByAggregateInput
    _min?: UserLocationMinOrderByAggregateInput
    _sum?: UserLocationSumOrderByAggregateInput
  }

  export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    OR?: UserLocationScalarWhereWithAggregatesInput[]
    NOT?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserLocation"> | string
    type?: StringWithAggregatesFilter<"UserLocation"> | string
    coordinates?: FloatNullableListFilter<"UserLocation">
    createdAt?: DateTimeWithAggregatesFilter<"UserLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserLocation"> | Date | string
  }

  export type SafeZoneWhereInput = {
    AND?: SafeZoneWhereInput | SafeZoneWhereInput[]
    OR?: SafeZoneWhereInput[]
    NOT?: SafeZoneWhereInput | SafeZoneWhereInput[]
    id?: StringFilter<"SafeZone"> | string
    description?: StringFilter<"SafeZone"> | string
    expectedReturnTime?: DateTimeFilter<"SafeZone"> | Date | string
    notification?: BoolFilter<"SafeZone"> | boolean
    startLocationId?: StringNullableFilter<"SafeZone"> | string | null
    endLocationId?: StringNullableFilter<"SafeZone"> | string | null
    isDeleted?: BoolFilter<"SafeZone"> | boolean
    createdAt?: DateTimeFilter<"SafeZone"> | Date | string
    updatedAt?: DateTimeFilter<"SafeZone"> | Date | string
    startLocation?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    endLocation?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }

  export type SafeZoneOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    expectedReturnTime?: SortOrder
    notification?: SortOrder
    startLocationId?: SortOrder
    endLocationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startLocation?: LocationOrderByWithRelationInput
    endLocation?: LocationOrderByWithRelationInput
  }

  export type SafeZoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SafeZoneWhereInput | SafeZoneWhereInput[]
    OR?: SafeZoneWhereInput[]
    NOT?: SafeZoneWhereInput | SafeZoneWhereInput[]
    description?: StringFilter<"SafeZone"> | string
    expectedReturnTime?: DateTimeFilter<"SafeZone"> | Date | string
    notification?: BoolFilter<"SafeZone"> | boolean
    startLocationId?: StringNullableFilter<"SafeZone"> | string | null
    endLocationId?: StringNullableFilter<"SafeZone"> | string | null
    isDeleted?: BoolFilter<"SafeZone"> | boolean
    createdAt?: DateTimeFilter<"SafeZone"> | Date | string
    updatedAt?: DateTimeFilter<"SafeZone"> | Date | string
    startLocation?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    endLocation?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }, "id">

  export type SafeZoneOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    expectedReturnTime?: SortOrder
    notification?: SortOrder
    startLocationId?: SortOrder
    endLocationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SafeZoneCountOrderByAggregateInput
    _max?: SafeZoneMaxOrderByAggregateInput
    _min?: SafeZoneMinOrderByAggregateInput
  }

  export type SafeZoneScalarWhereWithAggregatesInput = {
    AND?: SafeZoneScalarWhereWithAggregatesInput | SafeZoneScalarWhereWithAggregatesInput[]
    OR?: SafeZoneScalarWhereWithAggregatesInput[]
    NOT?: SafeZoneScalarWhereWithAggregatesInput | SafeZoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SafeZone"> | string
    description?: StringWithAggregatesFilter<"SafeZone"> | string
    expectedReturnTime?: DateTimeWithAggregatesFilter<"SafeZone"> | Date | string
    notification?: BoolWithAggregatesFilter<"SafeZone"> | boolean
    startLocationId?: StringNullableWithAggregatesFilter<"SafeZone"> | string | null
    endLocationId?: StringNullableWithAggregatesFilter<"SafeZone"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"SafeZone"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SafeZone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SafeZone"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    type?: StringFilter<"Location"> | string
    coordinates?: FloatNullableListFilter<"Location">
    isDeleted?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    startZones?: SafeZoneListRelationFilter
    endZones?: SafeZoneListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    startZones?: SafeZoneOrderByRelationAggregateInput
    endZones?: SafeZoneOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    type?: StringFilter<"Location"> | string
    coordinates?: FloatNullableListFilter<"Location">
    isDeleted?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    startZones?: SafeZoneListRelationFilter
    endZones?: SafeZoneListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    type?: StringWithAggregatesFilter<"Location"> | string
    coordinates?: FloatNullableListFilter<"Location">
    isDeleted?: BoolWithAggregatesFilter<"Location"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type EmergencyContactWhereInput = {
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    id?: StringFilter<"EmergencyContact"> | string
    userId?: StringFilter<"EmergencyContact"> | string
    profile?: StringFilter<"EmergencyContact"> | string
    name?: StringFilter<"EmergencyContact"> | string
    relation?: StringFilter<"EmergencyContact"> | string
    phoneNumber?: StringFilter<"EmergencyContact"> | string
    createdAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    isDeleted?: BoolFilter<"EmergencyContact"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmergencyContactOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmergencyContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    OR?: EmergencyContactWhereInput[]
    NOT?: EmergencyContactWhereInput | EmergencyContactWhereInput[]
    userId?: StringFilter<"EmergencyContact"> | string
    profile?: StringFilter<"EmergencyContact"> | string
    name?: StringFilter<"EmergencyContact"> | string
    relation?: StringFilter<"EmergencyContact"> | string
    phoneNumber?: StringFilter<"EmergencyContact"> | string
    createdAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    isDeleted?: BoolFilter<"EmergencyContact"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmergencyContactOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
    _count?: EmergencyContactCountOrderByAggregateInput
    _max?: EmergencyContactMaxOrderByAggregateInput
    _min?: EmergencyContactMinOrderByAggregateInput
  }

  export type EmergencyContactScalarWhereWithAggregatesInput = {
    AND?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    OR?: EmergencyContactScalarWhereWithAggregatesInput[]
    NOT?: EmergencyContactScalarWhereWithAggregatesInput | EmergencyContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyContact"> | string
    userId?: StringWithAggregatesFilter<"EmergencyContact"> | string
    profile?: StringWithAggregatesFilter<"EmergencyContact"> | string
    name?: StringWithAggregatesFilter<"EmergencyContact"> | string
    relation?: StringWithAggregatesFilter<"EmergencyContact"> | string
    phoneNumber?: StringWithAggregatesFilter<"EmergencyContact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmergencyContact"> | Date | string
    isDeleted?: BoolWithAggregatesFilter<"EmergencyContact"> | boolean
  }

  export type AlertPostWhereInput = {
    AND?: AlertPostWhereInput | AlertPostWhereInput[]
    OR?: AlertPostWhereInput[]
    NOT?: AlertPostWhereInput | AlertPostWhereInput[]
    id?: StringFilter<"AlertPost"> | string
    userId?: StringFilter<"AlertPost"> | string
    alertType?: StringFilter<"AlertPost"> | string
    isDeleted?: BoolFilter<"AlertPost"> | boolean
    createdAt?: DateTimeFilter<"AlertPost"> | Date | string
    updatedAt?: DateTimeFilter<"AlertPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<AlertPostLocationNullableScalarRelationFilter, AlertPostLocationWhereInput> | null
  }

  export type AlertPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    location?: AlertPostLocationOrderByWithRelationInput
  }

  export type AlertPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertPostWhereInput | AlertPostWhereInput[]
    OR?: AlertPostWhereInput[]
    NOT?: AlertPostWhereInput | AlertPostWhereInput[]
    userId?: StringFilter<"AlertPost"> | string
    alertType?: StringFilter<"AlertPost"> | string
    isDeleted?: BoolFilter<"AlertPost"> | boolean
    createdAt?: DateTimeFilter<"AlertPost"> | Date | string
    updatedAt?: DateTimeFilter<"AlertPost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    location?: XOR<AlertPostLocationNullableScalarRelationFilter, AlertPostLocationWhereInput> | null
  }, "id">

  export type AlertPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertPostCountOrderByAggregateInput
    _max?: AlertPostMaxOrderByAggregateInput
    _min?: AlertPostMinOrderByAggregateInput
  }

  export type AlertPostScalarWhereWithAggregatesInput = {
    AND?: AlertPostScalarWhereWithAggregatesInput | AlertPostScalarWhereWithAggregatesInput[]
    OR?: AlertPostScalarWhereWithAggregatesInput[]
    NOT?: AlertPostScalarWhereWithAggregatesInput | AlertPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertPost"> | string
    userId?: StringWithAggregatesFilter<"AlertPost"> | string
    alertType?: StringWithAggregatesFilter<"AlertPost"> | string
    isDeleted?: BoolWithAggregatesFilter<"AlertPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AlertPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlertPost"> | Date | string
  }

  export type AlertPostLocationWhereInput = {
    AND?: AlertPostLocationWhereInput | AlertPostLocationWhereInput[]
    OR?: AlertPostLocationWhereInput[]
    NOT?: AlertPostLocationWhereInput | AlertPostLocationWhereInput[]
    id?: StringFilter<"AlertPostLocation"> | string
    alertPostId?: StringFilter<"AlertPostLocation"> | string
    type?: StringFilter<"AlertPostLocation"> | string
    coordinates?: FloatNullableListFilter<"AlertPostLocation">
    images?: StringNullableListFilter<"AlertPostLocation">
    createdAt?: DateTimeFilter<"AlertPostLocation"> | Date | string
    updatedAt?: DateTimeFilter<"AlertPostLocation"> | Date | string
    alertPost?: XOR<AlertPostScalarRelationFilter, AlertPostWhereInput>
  }

  export type AlertPostLocationOrderByWithRelationInput = {
    id?: SortOrder
    alertPostId?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alertPost?: AlertPostOrderByWithRelationInput
  }

  export type AlertPostLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alertPostId?: string
    AND?: AlertPostLocationWhereInput | AlertPostLocationWhereInput[]
    OR?: AlertPostLocationWhereInput[]
    NOT?: AlertPostLocationWhereInput | AlertPostLocationWhereInput[]
    type?: StringFilter<"AlertPostLocation"> | string
    coordinates?: FloatNullableListFilter<"AlertPostLocation">
    images?: StringNullableListFilter<"AlertPostLocation">
    createdAt?: DateTimeFilter<"AlertPostLocation"> | Date | string
    updatedAt?: DateTimeFilter<"AlertPostLocation"> | Date | string
    alertPost?: XOR<AlertPostScalarRelationFilter, AlertPostWhereInput>
  }, "id" | "alertPostId">

  export type AlertPostLocationOrderByWithAggregationInput = {
    id?: SortOrder
    alertPostId?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertPostLocationCountOrderByAggregateInput
    _avg?: AlertPostLocationAvgOrderByAggregateInput
    _max?: AlertPostLocationMaxOrderByAggregateInput
    _min?: AlertPostLocationMinOrderByAggregateInput
    _sum?: AlertPostLocationSumOrderByAggregateInput
  }

  export type AlertPostLocationScalarWhereWithAggregatesInput = {
    AND?: AlertPostLocationScalarWhereWithAggregatesInput | AlertPostLocationScalarWhereWithAggregatesInput[]
    OR?: AlertPostLocationScalarWhereWithAggregatesInput[]
    NOT?: AlertPostLocationScalarWhereWithAggregatesInput | AlertPostLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertPostLocation"> | string
    alertPostId?: StringWithAggregatesFilter<"AlertPostLocation"> | string
    type?: StringWithAggregatesFilter<"AlertPostLocation"> | string
    coordinates?: FloatNullableListFilter<"AlertPostLocation">
    images?: StringNullableListFilter<"AlertPostLocation">
    createdAt?: DateTimeWithAggregatesFilter<"AlertPostLocation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlertPostLocation"> | Date | string
  }

  export type ContentsWhereInput = {
    AND?: ContentsWhereInput | ContentsWhereInput[]
    OR?: ContentsWhereInput[]
    NOT?: ContentsWhereInput | ContentsWhereInput[]
    id?: StringFilter<"Contents"> | string
    termsAndCondition?: StringFilter<"Contents"> | string
    privacyPolicy?: StringFilter<"Contents"> | string
    aboutUs?: StringFilter<"Contents"> | string
    createdAt?: DateTimeFilter<"Contents"> | Date | string
    updatedAt?: DateTimeFilter<"Contents"> | Date | string
  }

  export type ContentsOrderByWithRelationInput = {
    id?: SortOrder
    termsAndCondition?: SortOrder
    privacyPolicy?: SortOrder
    aboutUs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentsWhereInput | ContentsWhereInput[]
    OR?: ContentsWhereInput[]
    NOT?: ContentsWhereInput | ContentsWhereInput[]
    termsAndCondition?: StringFilter<"Contents"> | string
    privacyPolicy?: StringFilter<"Contents"> | string
    aboutUs?: StringFilter<"Contents"> | string
    createdAt?: DateTimeFilter<"Contents"> | Date | string
    updatedAt?: DateTimeFilter<"Contents"> | Date | string
  }, "id">

  export type ContentsOrderByWithAggregationInput = {
    id?: SortOrder
    termsAndCondition?: SortOrder
    privacyPolicy?: SortOrder
    aboutUs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentsCountOrderByAggregateInput
    _max?: ContentsMaxOrderByAggregateInput
    _min?: ContentsMinOrderByAggregateInput
  }

  export type ContentsScalarWhereWithAggregatesInput = {
    AND?: ContentsScalarWhereWithAggregatesInput | ContentsScalarWhereWithAggregatesInput[]
    OR?: ContentsScalarWhereWithAggregatesInput[]
    NOT?: ContentsScalarWhereWithAggregatesInput | ContentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contents"> | string
    termsAndCondition?: StringWithAggregatesFilter<"Contents"> | string
    privacyPolicy?: StringWithAggregatesFilter<"Contents"> | string
    aboutUs?: StringWithAggregatesFilter<"Contents"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contents"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contents"> | Date | string
  }

  export type PackageWhereInput = {
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    id?: StringFilter<"Package"> | string
    title?: StringFilter<"Package"> | string
    descriptions?: StringFilter<"Package"> | string
    price?: FloatFilter<"Package"> | number
    durationDay?: IntFilter<"Package"> | number
    isDeleted?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    subscription?: SubscriptionListRelationFilter
  }

  export type PackageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    price?: SortOrder
    durationDay?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByRelationAggregateInput
  }

  export type PackageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageWhereInput | PackageWhereInput[]
    OR?: PackageWhereInput[]
    NOT?: PackageWhereInput | PackageWhereInput[]
    title?: StringFilter<"Package"> | string
    descriptions?: StringFilter<"Package"> | string
    price?: FloatFilter<"Package"> | number
    durationDay?: IntFilter<"Package"> | number
    isDeleted?: BoolFilter<"Package"> | boolean
    createdAt?: DateTimeFilter<"Package"> | Date | string
    updatedAt?: DateTimeFilter<"Package"> | Date | string
    subscription?: SubscriptionListRelationFilter
  }, "id">

  export type PackageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    price?: SortOrder
    durationDay?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageCountOrderByAggregateInput
    _avg?: PackageAvgOrderByAggregateInput
    _max?: PackageMaxOrderByAggregateInput
    _min?: PackageMinOrderByAggregateInput
    _sum?: PackageSumOrderByAggregateInput
  }

  export type PackageScalarWhereWithAggregatesInput = {
    AND?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    OR?: PackageScalarWhereWithAggregatesInput[]
    NOT?: PackageScalarWhereWithAggregatesInput | PackageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Package"> | string
    title?: StringWithAggregatesFilter<"Package"> | string
    descriptions?: StringWithAggregatesFilter<"Package"> | string
    price?: FloatWithAggregatesFilter<"Package"> | number
    durationDay?: IntWithAggregatesFilter<"Package"> | number
    isDeleted?: BoolWithAggregatesFilter<"Package"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Package"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    packageId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    expiredAt?: DateTimeFilter<"Subscription"> | Date | string
    isActivate?: BoolFilter<"Subscription"> | boolean
    isPaid?: BoolFilter<"Subscription"> | boolean
    isDeleted?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentsListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    isActivate?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    package?: PackageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    payments?: PaymentsOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    packageId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    expiredAt?: DateTimeFilter<"Subscription"> | Date | string
    isActivate?: BoolFilter<"Subscription"> | boolean
    isPaid?: BoolFilter<"Subscription"> | boolean
    isDeleted?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    package?: XOR<PackageScalarRelationFilter, PackageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentsListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    isActivate?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    packageId?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    isActivate?: BoolWithAggregatesFilter<"Subscription"> | boolean
    isPaid?: BoolWithAggregatesFilter<"Subscription"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Subscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentsWhereInput = {
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    id?: StringFilter<"Payments"> | string
    subscriptionId?: StringFilter<"Payments"> | string
    userId?: StringFilter<"Payments"> | string
    price?: FloatFilter<"Payments"> | number
    trnId?: StringFilter<"Payments"> | string
    isPaid?: BoolFilter<"Payments"> | boolean
    isDeleted?: BoolFilter<"Payments"> | boolean
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    trnId?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentsWhereInput | PaymentsWhereInput[]
    OR?: PaymentsWhereInput[]
    NOT?: PaymentsWhereInput | PaymentsWhereInput[]
    subscriptionId?: StringFilter<"Payments"> | string
    userId?: StringFilter<"Payments"> | string
    price?: FloatFilter<"Payments"> | number
    trnId?: StringFilter<"Payments"> | string
    isPaid?: BoolFilter<"Payments"> | boolean
    isDeleted?: BoolFilter<"Payments"> | boolean
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    trnId?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentsCountOrderByAggregateInput
    _avg?: PaymentsAvgOrderByAggregateInput
    _max?: PaymentsMaxOrderByAggregateInput
    _min?: PaymentsMinOrderByAggregateInput
    _sum?: PaymentsSumOrderByAggregateInput
  }

  export type PaymentsScalarWhereWithAggregatesInput = {
    AND?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    OR?: PaymentsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsScalarWhereWithAggregatesInput | PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payments"> | string
    subscriptionId?: StringWithAggregatesFilter<"Payments"> | string
    userId?: StringWithAggregatesFilter<"Payments"> | string
    price?: FloatWithAggregatesFilter<"Payments"> | number
    trnId?: StringWithAggregatesFilter<"Payments"> | string
    isPaid?: BoolWithAggregatesFilter<"Payments"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"Payments"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payments"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    location?: UserLocationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    location?: UserLocationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceHistoryCreateInput = {
    id?: string
    ip?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDeviceHistoryInput
  }

  export type DeviceHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    ip?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceHistoryUpdateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeviceHistoryNestedInput
  }

  export type DeviceHistoryUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceHistoryCreateManyInput = {
    id?: string
    userId: string
    ip?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceHistoryUpdateManyMutationInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceHistoryUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    otp: number
    expiredAt?: Date | string | null
    status?: boolean
    user: UserCreateNestedOneWithoutVerificationInput
  }

  export type VerificationUncheckedCreateInput = {
    userId: string
    otp: number
    expiredAt?: Date | string | null
    status?: boolean
  }

  export type VerificationUpdateInput = {
    otp?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVerificationNestedInput
  }

  export type VerificationUncheckedUpdateInput = {
    otp?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationCreateManyInput = {
    userId: string
    otp: number
    expiredAt?: Date | string | null
    status?: boolean
  }

  export type VerificationUpdateManyMutationInput = {
    otp?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationUncheckedUpdateManyInput = {
    otp?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLocationCreateInput = {
    type?: string
    coordinates?: UserLocationCreatecoordinatesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLocationInput
  }

  export type UserLocationUncheckedCreateInput = {
    userId: string
    type?: string
    coordinates?: UserLocationCreatecoordinatesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLocationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: UserLocationUpdatecoordinatesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationNestedInput
  }

  export type UserLocationUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: UserLocationUpdatecoordinatesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateManyInput = {
    userId: string
    type?: string
    coordinates?: UserLocationCreatecoordinatesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLocationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: UserLocationUpdatecoordinatesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: UserLocationUpdatecoordinatesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneCreateInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startLocation?: LocationCreateNestedOneWithoutStartZonesInput
    endLocation?: LocationCreateNestedOneWithoutEndZonesInput
  }

  export type SafeZoneUncheckedCreateInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    startLocationId?: string | null
    endLocationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafeZoneUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startLocation?: LocationUpdateOneWithoutStartZonesNestedInput
    endLocation?: LocationUpdateOneWithoutEndZonesNestedInput
  }

  export type SafeZoneUncheckedUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    startLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    endLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneCreateManyInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    startLocationId?: string | null
    endLocationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafeZoneUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneUncheckedUpdateManyInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    startLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    endLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startZones?: SafeZoneCreateNestedManyWithoutStartLocationInput
    endZones?: SafeZoneCreateNestedManyWithoutEndLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startZones?: SafeZoneUncheckedCreateNestedManyWithoutStartLocationInput
    endZones?: SafeZoneUncheckedCreateNestedManyWithoutEndLocationInput
  }

  export type LocationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startZones?: SafeZoneUpdateManyWithoutStartLocationNestedInput
    endZones?: SafeZoneUpdateManyWithoutEndLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startZones?: SafeZoneUncheckedUpdateManyWithoutStartLocationNestedInput
    endZones?: SafeZoneUncheckedUpdateManyWithoutEndLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactCreateInput = {
    id?: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
    user: UserCreateNestedOneWithoutEmergencyContactInput
  }

  export type EmergencyContactUncheckedCreateInput = {
    id?: string
    userId: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type EmergencyContactUpdateInput = {
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutEmergencyContactNestedInput
  }

  export type EmergencyContactUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmergencyContactCreateManyInput = {
    id?: string
    userId: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type EmergencyContactUpdateManyMutationInput = {
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmergencyContactUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertPostCreateInput = {
    id?: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlertPostInput
    location?: AlertPostLocationCreateNestedOneWithoutAlertPostInput
  }

  export type AlertPostUncheckedCreateInput = {
    id?: string
    userId: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: AlertPostLocationUncheckedCreateNestedOneWithoutAlertPostInput
  }

  export type AlertPostUpdateInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertPostNestedInput
    location?: AlertPostLocationUpdateOneWithoutAlertPostNestedInput
  }

  export type AlertPostUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: AlertPostLocationUncheckedUpdateOneWithoutAlertPostNestedInput
  }

  export type AlertPostCreateManyInput = {
    id?: string
    userId: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertPostUpdateManyMutationInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertPostUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertPostLocationCreateInput = {
    id?: string
    type?: string
    coordinates?: AlertPostLocationCreatecoordinatesInput | number[]
    images?: AlertPostLocationCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    alertPost: AlertPostCreateNestedOneWithoutLocationInput
  }

  export type AlertPostLocationUncheckedCreateInput = {
    id?: string
    alertPostId: string
    type?: string
    coordinates?: AlertPostLocationCreatecoordinatesInput | number[]
    images?: AlertPostLocationCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertPostLocationUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: AlertPostLocationUpdatecoordinatesInput | number[]
    images?: AlertPostLocationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alertPost?: AlertPostUpdateOneRequiredWithoutLocationNestedInput
  }

  export type AlertPostLocationUncheckedUpdateInput = {
    alertPostId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: AlertPostLocationUpdatecoordinatesInput | number[]
    images?: AlertPostLocationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertPostLocationCreateManyInput = {
    id?: string
    alertPostId: string
    type?: string
    coordinates?: AlertPostLocationCreatecoordinatesInput | number[]
    images?: AlertPostLocationCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertPostLocationUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: AlertPostLocationUpdatecoordinatesInput | number[]
    images?: AlertPostLocationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertPostLocationUncheckedUpdateManyInput = {
    alertPostId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: AlertPostLocationUpdatecoordinatesInput | number[]
    images?: AlertPostLocationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentsCreateInput = {
    id?: string
    termsAndCondition: string
    privacyPolicy: string
    aboutUs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentsUncheckedCreateInput = {
    id?: string
    termsAndCondition: string
    privacyPolicy: string
    aboutUs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentsUpdateInput = {
    termsAndCondition?: StringFieldUpdateOperationsInput | string
    privacyPolicy?: StringFieldUpdateOperationsInput | string
    aboutUs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentsUncheckedUpdateInput = {
    termsAndCondition?: StringFieldUpdateOperationsInput | string
    privacyPolicy?: StringFieldUpdateOperationsInput | string
    aboutUs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentsCreateManyInput = {
    id?: string
    termsAndCondition: string
    privacyPolicy: string
    aboutUs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentsUpdateManyMutationInput = {
    termsAndCondition?: StringFieldUpdateOperationsInput | string
    privacyPolicy?: StringFieldUpdateOperationsInput | string
    aboutUs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentsUncheckedUpdateManyInput = {
    termsAndCondition?: StringFieldUpdateOperationsInput | string
    privacyPolicy?: StringFieldUpdateOperationsInput | string
    aboutUs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageCreateInput = {
    id?: string
    title: string
    descriptions: string
    price: number
    durationDay: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedManyWithoutPackageInput
  }

  export type PackageUncheckedCreateInput = {
    id?: string
    title: string
    descriptions: string
    price: number
    durationDay: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type PackageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationDay?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateManyWithoutPackageNestedInput
  }

  export type PackageUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationDay?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type PackageCreateManyInput = {
    id?: string
    title: string
    descriptions: string
    price: number
    durationDay: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationDay?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationDay?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    package: PackageCreateNestedOneWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionInput
    payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    packageId: string
    userId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    packageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    packageId: string
    userId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    packageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateInput = {
    id?: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    userId: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateInput = {
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManyInput = {
    id?: string
    subscriptionId: string
    userId: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyInput = {
    subscriptionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type VerificationNullableScalarRelationFilter = {
    is?: VerificationWhereInput | null
    isNot?: VerificationWhereInput | null
  }

  export type UserLocationNullableScalarRelationFilter = {
    is?: UserLocationWhereInput | null
    isNot?: UserLocationWhereInput | null
  }

  export type EmergencyContactListRelationFilter = {
    every?: EmergencyContactWhereInput
    some?: EmergencyContactWhereInput
    none?: EmergencyContactWhereInput
  }

  export type AlertPostListRelationFilter = {
    every?: AlertPostWhereInput
    some?: AlertPostWhereInput
    none?: AlertPostWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type DeviceHistoryListRelationFilter = {
    every?: DeviceHistoryWhereInput
    some?: DeviceHistoryWhereInput
    none?: DeviceHistoryWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: PaymentsWhereInput
    some?: PaymentsWhereInput
    none?: PaymentsWhereInput
  }

  export type EmergencyContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    profile?: SortOrder
    phoneNumber?: SortOrder
    expireAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    profile?: SortOrder
    phoneNumber?: SortOrder
    expireAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    status?: SortOrder
    role?: SortOrder
    profile?: SortOrder
    phoneNumber?: SortOrder
    expireAt?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ip?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type VerificationCountOrderByAggregateInput = {
    userId?: SortOrder
    otp?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
  }

  export type VerificationAvgOrderByAggregateInput = {
    otp?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    userId?: SortOrder
    otp?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    userId?: SortOrder
    otp?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
  }

  export type VerificationSumOrderByAggregateInput = {
    otp?: SortOrder
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

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserLocationCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLocationAvgOrderByAggregateInput = {
    coordinates?: SortOrder
  }

  export type UserLocationMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLocationMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserLocationSumOrderByAggregateInput = {
    coordinates?: SortOrder
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type SafeZoneCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    expectedReturnTime?: SortOrder
    notification?: SortOrder
    startLocationId?: SortOrder
    endLocationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SafeZoneMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    expectedReturnTime?: SortOrder
    notification?: SortOrder
    startLocationId?: SortOrder
    endLocationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SafeZoneMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    expectedReturnTime?: SortOrder
    notification?: SortOrder
    startLocationId?: SortOrder
    endLocationId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SafeZoneListRelationFilter = {
    every?: SafeZoneWhereInput
    some?: SafeZoneWhereInput
    none?: SafeZoneWhereInput
  }

  export type SafeZoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    coordinates?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    coordinates?: SortOrder
  }

  export type EmergencyContactCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type EmergencyContactMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type EmergencyContactMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    profile?: SortOrder
    name?: SortOrder
    relation?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isDeleted?: SortOrder
  }

  export type AlertPostLocationNullableScalarRelationFilter = {
    is?: AlertPostLocationWhereInput | null
    isNot?: AlertPostLocationWhereInput | null
  }

  export type AlertPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    alertType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AlertPostScalarRelationFilter = {
    is?: AlertPostWhereInput
    isNot?: AlertPostWhereInput
  }

  export type AlertPostLocationCountOrderByAggregateInput = {
    id?: SortOrder
    alertPostId?: SortOrder
    type?: SortOrder
    coordinates?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertPostLocationAvgOrderByAggregateInput = {
    coordinates?: SortOrder
  }

  export type AlertPostLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    alertPostId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertPostLocationMinOrderByAggregateInput = {
    id?: SortOrder
    alertPostId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertPostLocationSumOrderByAggregateInput = {
    coordinates?: SortOrder
  }

  export type ContentsCountOrderByAggregateInput = {
    id?: SortOrder
    termsAndCondition?: SortOrder
    privacyPolicy?: SortOrder
    aboutUs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentsMaxOrderByAggregateInput = {
    id?: SortOrder
    termsAndCondition?: SortOrder
    privacyPolicy?: SortOrder
    aboutUs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentsMinOrderByAggregateInput = {
    id?: SortOrder
    termsAndCondition?: SortOrder
    privacyPolicy?: SortOrder
    aboutUs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PackageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    price?: SortOrder
    durationDay?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageAvgOrderByAggregateInput = {
    price?: SortOrder
    durationDay?: SortOrder
  }

  export type PackageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    price?: SortOrder
    durationDay?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descriptions?: SortOrder
    price?: SortOrder
    durationDay?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageSumOrderByAggregateInput = {
    price?: SortOrder
    durationDay?: SortOrder
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

  export type PackageScalarRelationFilter = {
    is?: PackageWhereInput
    isNot?: PackageWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    isActivate?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    isActivate?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    packageId?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    isActivate?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    trnId?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    trnId?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    trnId?: SortOrder
    isPaid?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type VerificationCreateNestedOneWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput
    connect?: VerificationWhereUniqueInput
  }

  export type UserLocationCreateNestedOneWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput
    connect?: UserLocationWhereUniqueInput
  }

  export type EmergencyContactCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type AlertPostCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertPostCreateWithoutUserInput, AlertPostUncheckedCreateWithoutUserInput> | AlertPostCreateWithoutUserInput[] | AlertPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertPostCreateOrConnectWithoutUserInput | AlertPostCreateOrConnectWithoutUserInput[]
    createMany?: AlertPostCreateManyUserInputEnvelope
    connect?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type DeviceHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceHistoryCreateWithoutUserInput, DeviceHistoryUncheckedCreateWithoutUserInput> | DeviceHistoryCreateWithoutUserInput[] | DeviceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceHistoryCreateOrConnectWithoutUserInput | DeviceHistoryCreateOrConnectWithoutUserInput[]
    createMany?: DeviceHistoryCreateManyUserInputEnvelope
    connect?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
  }

  export type PaymentsCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type VerificationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput
    connect?: VerificationWhereUniqueInput
  }

  export type UserLocationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput
    connect?: UserLocationWhereUniqueInput
  }

  export type EmergencyContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
  }

  export type AlertPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertPostCreateWithoutUserInput, AlertPostUncheckedCreateWithoutUserInput> | AlertPostCreateWithoutUserInput[] | AlertPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertPostCreateOrConnectWithoutUserInput | AlertPostCreateOrConnectWithoutUserInput[]
    createMany?: AlertPostCreateManyUserInputEnvelope
    connect?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type DeviceHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceHistoryCreateWithoutUserInput, DeviceHistoryUncheckedCreateWithoutUserInput> | DeviceHistoryCreateWithoutUserInput[] | DeviceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceHistoryCreateOrConnectWithoutUserInput | DeviceHistoryCreateOrConnectWithoutUserInput[]
    createMany?: DeviceHistoryCreateManyUserInputEnvelope
    connect?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VerificationUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput
    upsert?: VerificationUpsertWithoutUserInput
    disconnect?: VerificationWhereInput | boolean
    delete?: VerificationWhereInput | boolean
    connect?: VerificationWhereUniqueInput
    update?: XOR<XOR<VerificationUpdateToOneWithWhereWithoutUserInput, VerificationUpdateWithoutUserInput>, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type UserLocationUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput
    upsert?: UserLocationUpsertWithoutUserInput
    disconnect?: UserLocationWhereInput | boolean
    delete?: UserLocationWhereInput | boolean
    connect?: UserLocationWhereUniqueInput
    update?: XOR<XOR<UserLocationUpdateToOneWithWhereWithoutUserInput, UserLocationUpdateWithoutUserInput>, UserLocationUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutUserInput | EmergencyContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutUserInput | EmergencyContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutUserInput | EmergencyContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type AlertPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertPostCreateWithoutUserInput, AlertPostUncheckedCreateWithoutUserInput> | AlertPostCreateWithoutUserInput[] | AlertPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertPostCreateOrConnectWithoutUserInput | AlertPostCreateOrConnectWithoutUserInput[]
    upsert?: AlertPostUpsertWithWhereUniqueWithoutUserInput | AlertPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertPostCreateManyUserInputEnvelope
    set?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    disconnect?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    delete?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    connect?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    update?: AlertPostUpdateWithWhereUniqueWithoutUserInput | AlertPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertPostUpdateManyWithWhereWithoutUserInput | AlertPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertPostScalarWhereInput | AlertPostScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type DeviceHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceHistoryCreateWithoutUserInput, DeviceHistoryUncheckedCreateWithoutUserInput> | DeviceHistoryCreateWithoutUserInput[] | DeviceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceHistoryCreateOrConnectWithoutUserInput | DeviceHistoryCreateOrConnectWithoutUserInput[]
    upsert?: DeviceHistoryUpsertWithWhereUniqueWithoutUserInput | DeviceHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceHistoryCreateManyUserInputEnvelope
    set?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    disconnect?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    delete?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    connect?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    update?: DeviceHistoryUpdateWithWhereUniqueWithoutUserInput | DeviceHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceHistoryUpdateManyWithWhereWithoutUserInput | DeviceHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceHistoryScalarWhereInput | DeviceHistoryScalarWhereInput[]
  }

  export type PaymentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUserInput | PaymentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUserInput | PaymentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUserInput | PaymentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type VerificationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput
    upsert?: VerificationUpsertWithoutUserInput
    disconnect?: VerificationWhereInput | boolean
    delete?: VerificationWhereInput | boolean
    connect?: VerificationWhereUniqueInput
    update?: XOR<XOR<VerificationUpdateToOneWithWhereWithoutUserInput, VerificationUpdateWithoutUserInput>, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type UserLocationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput
    upsert?: UserLocationUpsertWithoutUserInput
    disconnect?: UserLocationWhereInput | boolean
    delete?: UserLocationWhereInput | boolean
    connect?: UserLocationWhereUniqueInput
    update?: XOR<XOR<UserLocationUpdateToOneWithWhereWithoutUserInput, UserLocationUpdateWithoutUserInput>, UserLocationUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput> | EmergencyContactCreateWithoutUserInput[] | EmergencyContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmergencyContactCreateOrConnectWithoutUserInput | EmergencyContactCreateOrConnectWithoutUserInput[]
    upsert?: EmergencyContactUpsertWithWhereUniqueWithoutUserInput | EmergencyContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmergencyContactCreateManyUserInputEnvelope
    set?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    disconnect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    delete?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    connect?: EmergencyContactWhereUniqueInput | EmergencyContactWhereUniqueInput[]
    update?: EmergencyContactUpdateWithWhereUniqueWithoutUserInput | EmergencyContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmergencyContactUpdateManyWithWhereWithoutUserInput | EmergencyContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
  }

  export type AlertPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertPostCreateWithoutUserInput, AlertPostUncheckedCreateWithoutUserInput> | AlertPostCreateWithoutUserInput[] | AlertPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertPostCreateOrConnectWithoutUserInput | AlertPostCreateOrConnectWithoutUserInput[]
    upsert?: AlertPostUpsertWithWhereUniqueWithoutUserInput | AlertPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertPostCreateManyUserInputEnvelope
    set?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    disconnect?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    delete?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    connect?: AlertPostWhereUniqueInput | AlertPostWhereUniqueInput[]
    update?: AlertPostUpdateWithWhereUniqueWithoutUserInput | AlertPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertPostUpdateManyWithWhereWithoutUserInput | AlertPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertPostScalarWhereInput | AlertPostScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceHistoryCreateWithoutUserInput, DeviceHistoryUncheckedCreateWithoutUserInput> | DeviceHistoryCreateWithoutUserInput[] | DeviceHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceHistoryCreateOrConnectWithoutUserInput | DeviceHistoryCreateOrConnectWithoutUserInput[]
    upsert?: DeviceHistoryUpsertWithWhereUniqueWithoutUserInput | DeviceHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceHistoryCreateManyUserInputEnvelope
    set?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    disconnect?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    delete?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    connect?: DeviceHistoryWhereUniqueInput | DeviceHistoryWhereUniqueInput[]
    update?: DeviceHistoryUpdateWithWhereUniqueWithoutUserInput | DeviceHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceHistoryUpdateManyWithWhereWithoutUserInput | DeviceHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceHistoryScalarWhereInput | DeviceHistoryScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput> | PaymentsCreateWithoutUserInput[] | PaymentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutUserInput | PaymentsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutUserInput | PaymentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsCreateManyUserInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutUserInput | PaymentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutUserInput | PaymentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDeviceHistoryInput = {
    create?: XOR<UserCreateWithoutDeviceHistoryInput, UserUncheckedCreateWithoutDeviceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeviceHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDeviceHistoryNestedInput = {
    create?: XOR<UserCreateWithoutDeviceHistoryInput, UserUncheckedCreateWithoutDeviceHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeviceHistoryInput
    upsert?: UserUpsertWithoutDeviceHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeviceHistoryInput, UserUpdateWithoutDeviceHistoryInput>, UserUncheckedUpdateWithoutDeviceHistoryInput>
  }

  export type UserCreateNestedOneWithoutVerificationInput = {
    create?: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVerificationNestedInput = {
    create?: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationInput
    upsert?: UserUpsertWithoutVerificationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationInput, UserUpdateWithoutVerificationInput>, UserUncheckedUpdateWithoutVerificationInput>
  }

  export type UserLocationCreatecoordinatesInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutLocationInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    connect?: UserWhereUniqueInput
  }

  export type UserLocationUpdatecoordinatesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    upsert?: UserUpsertWithoutLocationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationInput, UserUpdateWithoutLocationInput>, UserUncheckedUpdateWithoutLocationInput>
  }

  export type LocationCreateNestedOneWithoutStartZonesInput = {
    create?: XOR<LocationCreateWithoutStartZonesInput, LocationUncheckedCreateWithoutStartZonesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutStartZonesInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutEndZonesInput = {
    create?: XOR<LocationCreateWithoutEndZonesInput, LocationUncheckedCreateWithoutEndZonesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEndZonesInput
    connect?: LocationWhereUniqueInput
  }

  export type LocationUpdateOneWithoutStartZonesNestedInput = {
    create?: XOR<LocationCreateWithoutStartZonesInput, LocationUncheckedCreateWithoutStartZonesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutStartZonesInput
    upsert?: LocationUpsertWithoutStartZonesInput
    disconnect?: boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutStartZonesInput, LocationUpdateWithoutStartZonesInput>, LocationUncheckedUpdateWithoutStartZonesInput>
  }

  export type LocationUpdateOneWithoutEndZonesNestedInput = {
    create?: XOR<LocationCreateWithoutEndZonesInput, LocationUncheckedCreateWithoutEndZonesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEndZonesInput
    upsert?: LocationUpsertWithoutEndZonesInput
    disconnect?: boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutEndZonesInput, LocationUpdateWithoutEndZonesInput>, LocationUncheckedUpdateWithoutEndZonesInput>
  }

  export type LocationCreatecoordinatesInput = {
    set: number[]
  }

  export type SafeZoneCreateNestedManyWithoutStartLocationInput = {
    create?: XOR<SafeZoneCreateWithoutStartLocationInput, SafeZoneUncheckedCreateWithoutStartLocationInput> | SafeZoneCreateWithoutStartLocationInput[] | SafeZoneUncheckedCreateWithoutStartLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutStartLocationInput | SafeZoneCreateOrConnectWithoutStartLocationInput[]
    createMany?: SafeZoneCreateManyStartLocationInputEnvelope
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
  }

  export type SafeZoneCreateNestedManyWithoutEndLocationInput = {
    create?: XOR<SafeZoneCreateWithoutEndLocationInput, SafeZoneUncheckedCreateWithoutEndLocationInput> | SafeZoneCreateWithoutEndLocationInput[] | SafeZoneUncheckedCreateWithoutEndLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutEndLocationInput | SafeZoneCreateOrConnectWithoutEndLocationInput[]
    createMany?: SafeZoneCreateManyEndLocationInputEnvelope
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
  }

  export type SafeZoneUncheckedCreateNestedManyWithoutStartLocationInput = {
    create?: XOR<SafeZoneCreateWithoutStartLocationInput, SafeZoneUncheckedCreateWithoutStartLocationInput> | SafeZoneCreateWithoutStartLocationInput[] | SafeZoneUncheckedCreateWithoutStartLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutStartLocationInput | SafeZoneCreateOrConnectWithoutStartLocationInput[]
    createMany?: SafeZoneCreateManyStartLocationInputEnvelope
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
  }

  export type SafeZoneUncheckedCreateNestedManyWithoutEndLocationInput = {
    create?: XOR<SafeZoneCreateWithoutEndLocationInput, SafeZoneUncheckedCreateWithoutEndLocationInput> | SafeZoneCreateWithoutEndLocationInput[] | SafeZoneUncheckedCreateWithoutEndLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutEndLocationInput | SafeZoneCreateOrConnectWithoutEndLocationInput[]
    createMany?: SafeZoneCreateManyEndLocationInputEnvelope
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
  }

  export type LocationUpdatecoordinatesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type SafeZoneUpdateManyWithoutStartLocationNestedInput = {
    create?: XOR<SafeZoneCreateWithoutStartLocationInput, SafeZoneUncheckedCreateWithoutStartLocationInput> | SafeZoneCreateWithoutStartLocationInput[] | SafeZoneUncheckedCreateWithoutStartLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutStartLocationInput | SafeZoneCreateOrConnectWithoutStartLocationInput[]
    upsert?: SafeZoneUpsertWithWhereUniqueWithoutStartLocationInput | SafeZoneUpsertWithWhereUniqueWithoutStartLocationInput[]
    createMany?: SafeZoneCreateManyStartLocationInputEnvelope
    set?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    disconnect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    delete?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    update?: SafeZoneUpdateWithWhereUniqueWithoutStartLocationInput | SafeZoneUpdateWithWhereUniqueWithoutStartLocationInput[]
    updateMany?: SafeZoneUpdateManyWithWhereWithoutStartLocationInput | SafeZoneUpdateManyWithWhereWithoutStartLocationInput[]
    deleteMany?: SafeZoneScalarWhereInput | SafeZoneScalarWhereInput[]
  }

  export type SafeZoneUpdateManyWithoutEndLocationNestedInput = {
    create?: XOR<SafeZoneCreateWithoutEndLocationInput, SafeZoneUncheckedCreateWithoutEndLocationInput> | SafeZoneCreateWithoutEndLocationInput[] | SafeZoneUncheckedCreateWithoutEndLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutEndLocationInput | SafeZoneCreateOrConnectWithoutEndLocationInput[]
    upsert?: SafeZoneUpsertWithWhereUniqueWithoutEndLocationInput | SafeZoneUpsertWithWhereUniqueWithoutEndLocationInput[]
    createMany?: SafeZoneCreateManyEndLocationInputEnvelope
    set?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    disconnect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    delete?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    update?: SafeZoneUpdateWithWhereUniqueWithoutEndLocationInput | SafeZoneUpdateWithWhereUniqueWithoutEndLocationInput[]
    updateMany?: SafeZoneUpdateManyWithWhereWithoutEndLocationInput | SafeZoneUpdateManyWithWhereWithoutEndLocationInput[]
    deleteMany?: SafeZoneScalarWhereInput | SafeZoneScalarWhereInput[]
  }

  export type SafeZoneUncheckedUpdateManyWithoutStartLocationNestedInput = {
    create?: XOR<SafeZoneCreateWithoutStartLocationInput, SafeZoneUncheckedCreateWithoutStartLocationInput> | SafeZoneCreateWithoutStartLocationInput[] | SafeZoneUncheckedCreateWithoutStartLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutStartLocationInput | SafeZoneCreateOrConnectWithoutStartLocationInput[]
    upsert?: SafeZoneUpsertWithWhereUniqueWithoutStartLocationInput | SafeZoneUpsertWithWhereUniqueWithoutStartLocationInput[]
    createMany?: SafeZoneCreateManyStartLocationInputEnvelope
    set?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    disconnect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    delete?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    update?: SafeZoneUpdateWithWhereUniqueWithoutStartLocationInput | SafeZoneUpdateWithWhereUniqueWithoutStartLocationInput[]
    updateMany?: SafeZoneUpdateManyWithWhereWithoutStartLocationInput | SafeZoneUpdateManyWithWhereWithoutStartLocationInput[]
    deleteMany?: SafeZoneScalarWhereInput | SafeZoneScalarWhereInput[]
  }

  export type SafeZoneUncheckedUpdateManyWithoutEndLocationNestedInput = {
    create?: XOR<SafeZoneCreateWithoutEndLocationInput, SafeZoneUncheckedCreateWithoutEndLocationInput> | SafeZoneCreateWithoutEndLocationInput[] | SafeZoneUncheckedCreateWithoutEndLocationInput[]
    connectOrCreate?: SafeZoneCreateOrConnectWithoutEndLocationInput | SafeZoneCreateOrConnectWithoutEndLocationInput[]
    upsert?: SafeZoneUpsertWithWhereUniqueWithoutEndLocationInput | SafeZoneUpsertWithWhereUniqueWithoutEndLocationInput[]
    createMany?: SafeZoneCreateManyEndLocationInputEnvelope
    set?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    disconnect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    delete?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    connect?: SafeZoneWhereUniqueInput | SafeZoneWhereUniqueInput[]
    update?: SafeZoneUpdateWithWhereUniqueWithoutEndLocationInput | SafeZoneUpdateWithWhereUniqueWithoutEndLocationInput[]
    updateMany?: SafeZoneUpdateManyWithWhereWithoutEndLocationInput | SafeZoneUpdateManyWithWhereWithoutEndLocationInput[]
    deleteMany?: SafeZoneScalarWhereInput | SafeZoneScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmergencyContactInput = {
    create?: XOR<UserCreateWithoutEmergencyContactInput, UserUncheckedCreateWithoutEmergencyContactInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyContactInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmergencyContactNestedInput = {
    create?: XOR<UserCreateWithoutEmergencyContactInput, UserUncheckedCreateWithoutEmergencyContactInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmergencyContactInput
    upsert?: UserUpsertWithoutEmergencyContactInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmergencyContactInput, UserUpdateWithoutEmergencyContactInput>, UserUncheckedUpdateWithoutEmergencyContactInput>
  }

  export type UserCreateNestedOneWithoutAlertPostInput = {
    create?: XOR<UserCreateWithoutAlertPostInput, UserUncheckedCreateWithoutAlertPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertPostInput
    connect?: UserWhereUniqueInput
  }

  export type AlertPostLocationCreateNestedOneWithoutAlertPostInput = {
    create?: XOR<AlertPostLocationCreateWithoutAlertPostInput, AlertPostLocationUncheckedCreateWithoutAlertPostInput>
    connectOrCreate?: AlertPostLocationCreateOrConnectWithoutAlertPostInput
    connect?: AlertPostLocationWhereUniqueInput
  }

  export type AlertPostLocationUncheckedCreateNestedOneWithoutAlertPostInput = {
    create?: XOR<AlertPostLocationCreateWithoutAlertPostInput, AlertPostLocationUncheckedCreateWithoutAlertPostInput>
    connectOrCreate?: AlertPostLocationCreateOrConnectWithoutAlertPostInput
    connect?: AlertPostLocationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAlertPostNestedInput = {
    create?: XOR<UserCreateWithoutAlertPostInput, UserUncheckedCreateWithoutAlertPostInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertPostInput
    upsert?: UserUpsertWithoutAlertPostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertPostInput, UserUpdateWithoutAlertPostInput>, UserUncheckedUpdateWithoutAlertPostInput>
  }

  export type AlertPostLocationUpdateOneWithoutAlertPostNestedInput = {
    create?: XOR<AlertPostLocationCreateWithoutAlertPostInput, AlertPostLocationUncheckedCreateWithoutAlertPostInput>
    connectOrCreate?: AlertPostLocationCreateOrConnectWithoutAlertPostInput
    upsert?: AlertPostLocationUpsertWithoutAlertPostInput
    disconnect?: AlertPostLocationWhereInput | boolean
    delete?: AlertPostLocationWhereInput | boolean
    connect?: AlertPostLocationWhereUniqueInput
    update?: XOR<XOR<AlertPostLocationUpdateToOneWithWhereWithoutAlertPostInput, AlertPostLocationUpdateWithoutAlertPostInput>, AlertPostLocationUncheckedUpdateWithoutAlertPostInput>
  }

  export type AlertPostLocationUncheckedUpdateOneWithoutAlertPostNestedInput = {
    create?: XOR<AlertPostLocationCreateWithoutAlertPostInput, AlertPostLocationUncheckedCreateWithoutAlertPostInput>
    connectOrCreate?: AlertPostLocationCreateOrConnectWithoutAlertPostInput
    upsert?: AlertPostLocationUpsertWithoutAlertPostInput
    disconnect?: AlertPostLocationWhereInput | boolean
    delete?: AlertPostLocationWhereInput | boolean
    connect?: AlertPostLocationWhereUniqueInput
    update?: XOR<XOR<AlertPostLocationUpdateToOneWithWhereWithoutAlertPostInput, AlertPostLocationUpdateWithoutAlertPostInput>, AlertPostLocationUncheckedUpdateWithoutAlertPostInput>
  }

  export type AlertPostLocationCreatecoordinatesInput = {
    set: number[]
  }

  export type AlertPostLocationCreateimagesInput = {
    set: string[]
  }

  export type AlertPostCreateNestedOneWithoutLocationInput = {
    create?: XOR<AlertPostCreateWithoutLocationInput, AlertPostUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AlertPostCreateOrConnectWithoutLocationInput
    connect?: AlertPostWhereUniqueInput
  }

  export type AlertPostLocationUpdatecoordinatesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type AlertPostLocationUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlertPostUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<AlertPostCreateWithoutLocationInput, AlertPostUncheckedCreateWithoutLocationInput>
    connectOrCreate?: AlertPostCreateOrConnectWithoutLocationInput
    upsert?: AlertPostUpsertWithoutLocationInput
    connect?: AlertPostWhereUniqueInput
    update?: XOR<XOR<AlertPostUpdateToOneWithWhereWithoutLocationInput, AlertPostUpdateWithoutLocationInput>, AlertPostUncheckedUpdateWithoutLocationInput>
  }

  export type SubscriptionCreateNestedManyWithoutPackageInput = {
    create?: XOR<SubscriptionCreateWithoutPackageInput, SubscriptionUncheckedCreateWithoutPackageInput> | SubscriptionCreateWithoutPackageInput[] | SubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageInput | SubscriptionCreateOrConnectWithoutPackageInput[]
    createMany?: SubscriptionCreateManyPackageInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<SubscriptionCreateWithoutPackageInput, SubscriptionUncheckedCreateWithoutPackageInput> | SubscriptionCreateWithoutPackageInput[] | SubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageInput | SubscriptionCreateOrConnectWithoutPackageInput[]
    createMany?: SubscriptionCreateManyPackageInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubscriptionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPackageInput, SubscriptionUncheckedCreateWithoutPackageInput> | SubscriptionCreateWithoutPackageInput[] | SubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageInput | SubscriptionCreateOrConnectWithoutPackageInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPackageInput | SubscriptionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: SubscriptionCreateManyPackageInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPackageInput | SubscriptionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPackageInput | SubscriptionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPackageInput, SubscriptionUncheckedCreateWithoutPackageInput> | SubscriptionCreateWithoutPackageInput[] | SubscriptionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPackageInput | SubscriptionCreateOrConnectWithoutPackageInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPackageInput | SubscriptionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: SubscriptionCreateManyPackageInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPackageInput | SubscriptionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPackageInput | SubscriptionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PackageCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<PackageCreateWithoutSubscriptionInput, PackageUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PackageCreateOrConnectWithoutSubscriptionInput
    connect?: PackageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentsCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
  }

  export type PackageUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<PackageCreateWithoutSubscriptionInput, PackageUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: PackageCreateOrConnectWithoutSubscriptionInput
    upsert?: PackageUpsertWithoutSubscriptionInput
    connect?: PackageWhereUniqueInput
    update?: XOR<XOR<PackageUpdateToOneWithWhereWithoutSubscriptionInput, PackageUpdateWithoutSubscriptionInput>, PackageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSubscriptionInput | PaymentsUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput> | PaymentsCreateWithoutSubscriptionInput[] | PaymentsUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentsCreateOrConnectWithoutSubscriptionInput | PaymentsCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentsCreateManySubscriptionInputEnvelope
    set?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    disconnect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    delete?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    connect?: PaymentsWhereUniqueInput | PaymentsWhereUniqueInput[]
    update?: PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentsUpdateManyWithWhereWithoutSubscriptionInput | PaymentsUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VerificationCreateWithoutUserInput = {
    otp: number
    expiredAt?: Date | string | null
    status?: boolean
  }

  export type VerificationUncheckedCreateWithoutUserInput = {
    otp: number
    expiredAt?: Date | string | null
    status?: boolean
  }

  export type VerificationCreateOrConnectWithoutUserInput = {
    where: VerificationWhereUniqueInput
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationCreateWithoutUserInput = {
    type?: string
    coordinates?: UserLocationCreatecoordinatesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLocationUncheckedCreateWithoutUserInput = {
    type?: string
    coordinates?: UserLocationCreatecoordinatesInput | number[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLocationCreateOrConnectWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactCreateWithoutUserInput = {
    id?: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type EmergencyContactUncheckedCreateWithoutUserInput = {
    id?: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type EmergencyContactCreateOrConnectWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    create: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactCreateManyUserInputEnvelope = {
    data: EmergencyContactCreateManyUserInput | EmergencyContactCreateManyUserInput[]
  }

  export type AlertPostCreateWithoutUserInput = {
    id?: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: AlertPostLocationCreateNestedOneWithoutAlertPostInput
  }

  export type AlertPostUncheckedCreateWithoutUserInput = {
    id?: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: AlertPostLocationUncheckedCreateNestedOneWithoutAlertPostInput
  }

  export type AlertPostCreateOrConnectWithoutUserInput = {
    where: AlertPostWhereUniqueInput
    create: XOR<AlertPostCreateWithoutUserInput, AlertPostUncheckedCreateWithoutUserInput>
  }

  export type AlertPostCreateManyUserInputEnvelope = {
    data: AlertPostCreateManyUserInput | AlertPostCreateManyUserInput[]
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    package: PackageCreateNestedOneWithoutSubscriptionInput
    payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    packageId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
  }

  export type DeviceHistoryCreateWithoutUserInput = {
    id?: string
    ip?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    ip?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceHistoryCreateOrConnectWithoutUserInput = {
    where: DeviceHistoryWhereUniqueInput
    create: XOR<DeviceHistoryCreateWithoutUserInput, DeviceHistoryUncheckedCreateWithoutUserInput>
  }

  export type DeviceHistoryCreateManyUserInputEnvelope = {
    data: DeviceHistoryCreateManyUserInput | DeviceHistoryCreateManyUserInput[]
  }

  export type PaymentsCreateWithoutUserInput = {
    id?: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionId: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsCreateManyUserInputEnvelope = {
    data: PaymentsCreateManyUserInput | PaymentsCreateManyUserInput[]
  }

  export type VerificationUpsertWithoutUserInput = {
    update: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
    where?: VerificationWhereInput
  }

  export type VerificationUpdateToOneWithWhereWithoutUserInput = {
    where?: VerificationWhereInput
    data: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUpdateWithoutUserInput = {
    otp?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationUncheckedUpdateWithoutUserInput = {
    otp?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserLocationUpsertWithoutUserInput = {
    update: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
    where?: UserLocationWhereInput
  }

  export type UserLocationUpdateToOneWithWhereWithoutUserInput = {
    where?: UserLocationWhereInput
    data: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
  }

  export type UserLocationUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: UserLocationUpdatecoordinatesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: UserLocationUpdatecoordinatesInput | number[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyContactUpsertWithWhereUniqueWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    update: XOR<EmergencyContactUpdateWithoutUserInput, EmergencyContactUncheckedUpdateWithoutUserInput>
    create: XOR<EmergencyContactCreateWithoutUserInput, EmergencyContactUncheckedCreateWithoutUserInput>
  }

  export type EmergencyContactUpdateWithWhereUniqueWithoutUserInput = {
    where: EmergencyContactWhereUniqueInput
    data: XOR<EmergencyContactUpdateWithoutUserInput, EmergencyContactUncheckedUpdateWithoutUserInput>
  }

  export type EmergencyContactUpdateManyWithWhereWithoutUserInput = {
    where: EmergencyContactScalarWhereInput
    data: XOR<EmergencyContactUpdateManyMutationInput, EmergencyContactUncheckedUpdateManyWithoutUserInput>
  }

  export type EmergencyContactScalarWhereInput = {
    AND?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    OR?: EmergencyContactScalarWhereInput[]
    NOT?: EmergencyContactScalarWhereInput | EmergencyContactScalarWhereInput[]
    id?: StringFilter<"EmergencyContact"> | string
    userId?: StringFilter<"EmergencyContact"> | string
    profile?: StringFilter<"EmergencyContact"> | string
    name?: StringFilter<"EmergencyContact"> | string
    relation?: StringFilter<"EmergencyContact"> | string
    phoneNumber?: StringFilter<"EmergencyContact"> | string
    createdAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    updatedAt?: DateTimeFilter<"EmergencyContact"> | Date | string
    isDeleted?: BoolFilter<"EmergencyContact"> | boolean
  }

  export type AlertPostUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertPostWhereUniqueInput
    update: XOR<AlertPostUpdateWithoutUserInput, AlertPostUncheckedUpdateWithoutUserInput>
    create: XOR<AlertPostCreateWithoutUserInput, AlertPostUncheckedCreateWithoutUserInput>
  }

  export type AlertPostUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertPostWhereUniqueInput
    data: XOR<AlertPostUpdateWithoutUserInput, AlertPostUncheckedUpdateWithoutUserInput>
  }

  export type AlertPostUpdateManyWithWhereWithoutUserInput = {
    where: AlertPostScalarWhereInput
    data: XOR<AlertPostUpdateManyMutationInput, AlertPostUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertPostScalarWhereInput = {
    AND?: AlertPostScalarWhereInput | AlertPostScalarWhereInput[]
    OR?: AlertPostScalarWhereInput[]
    NOT?: AlertPostScalarWhereInput | AlertPostScalarWhereInput[]
    id?: StringFilter<"AlertPost"> | string
    userId?: StringFilter<"AlertPost"> | string
    alertType?: StringFilter<"AlertPost"> | string
    isDeleted?: BoolFilter<"AlertPost"> | boolean
    createdAt?: DateTimeFilter<"AlertPost"> | Date | string
    updatedAt?: DateTimeFilter<"AlertPost"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    packageId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    expiredAt?: DateTimeFilter<"Subscription"> | Date | string
    isActivate?: BoolFilter<"Subscription"> | boolean
    isPaid?: BoolFilter<"Subscription"> | boolean
    isDeleted?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type DeviceHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceHistoryWhereUniqueInput
    update: XOR<DeviceHistoryUpdateWithoutUserInput, DeviceHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceHistoryCreateWithoutUserInput, DeviceHistoryUncheckedCreateWithoutUserInput>
  }

  export type DeviceHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceHistoryWhereUniqueInput
    data: XOR<DeviceHistoryUpdateWithoutUserInput, DeviceHistoryUncheckedUpdateWithoutUserInput>
  }

  export type DeviceHistoryUpdateManyWithWhereWithoutUserInput = {
    where: DeviceHistoryScalarWhereInput
    data: XOR<DeviceHistoryUpdateManyMutationInput, DeviceHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceHistoryScalarWhereInput = {
    AND?: DeviceHistoryScalarWhereInput | DeviceHistoryScalarWhereInput[]
    OR?: DeviceHistoryScalarWhereInput[]
    NOT?: DeviceHistoryScalarWhereInput | DeviceHistoryScalarWhereInput[]
    id?: StringFilter<"DeviceHistory"> | string
    userId?: StringFilter<"DeviceHistory"> | string
    ip?: StringNullableFilter<"DeviceHistory"> | string | null
    browser?: StringNullableFilter<"DeviceHistory"> | string | null
    os?: StringNullableFilter<"DeviceHistory"> | string | null
    device?: StringNullableFilter<"DeviceHistory"> | string | null
    createdAt?: DateTimeFilter<"DeviceHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DeviceHistory"> | Date | string
  }

  export type PaymentsUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutUserInput, PaymentsUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentsCreateWithoutUserInput, PaymentsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutUserInput, PaymentsUncheckedUpdateWithoutUserInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutUserInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentsScalarWhereInput = {
    AND?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    OR?: PaymentsScalarWhereInput[]
    NOT?: PaymentsScalarWhereInput | PaymentsScalarWhereInput[]
    id?: StringFilter<"Payments"> | string
    subscriptionId?: StringFilter<"Payments"> | string
    userId?: StringFilter<"Payments"> | string
    price?: FloatFilter<"Payments"> | number
    trnId?: StringFilter<"Payments"> | string
    isPaid?: BoolFilter<"Payments"> | boolean
    isDeleted?: BoolFilter<"Payments"> | boolean
    createdAt?: DateTimeFilter<"Payments"> | Date | string
    updatedAt?: DateTimeFilter<"Payments"> | Date | string
  }

  export type UserCreateWithoutDeviceHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    location?: UserLocationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeviceHistoryInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeviceHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeviceHistoryInput, UserUncheckedCreateWithoutDeviceHistoryInput>
  }

  export type UserUpsertWithoutDeviceHistoryInput = {
    update: XOR<UserUpdateWithoutDeviceHistoryInput, UserUncheckedUpdateWithoutDeviceHistoryInput>
    create: XOR<UserCreateWithoutDeviceHistoryInput, UserUncheckedCreateWithoutDeviceHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeviceHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeviceHistoryInput, UserUncheckedUpdateWithoutDeviceHistoryInput>
  }

  export type UserUpdateWithoutDeviceHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    location?: UserLocationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeviceHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVerificationInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: UserLocationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
  }

  export type UserUpsertWithoutVerificationInput = {
    update: XOR<UserUpdateWithoutVerificationInput, UserUncheckedUpdateWithoutVerificationInput>
    create: XOR<UserCreateWithoutVerificationInput, UserUncheckedCreateWithoutVerificationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationInput, UserUncheckedUpdateWithoutVerificationInput>
  }

  export type UserUpdateWithoutVerificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: UserLocationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLocationInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserUpsertWithoutLocationInput = {
    update: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LocationCreateWithoutStartZonesInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endZones?: SafeZoneCreateNestedManyWithoutEndLocationInput
  }

  export type LocationUncheckedCreateWithoutStartZonesInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endZones?: SafeZoneUncheckedCreateNestedManyWithoutEndLocationInput
  }

  export type LocationCreateOrConnectWithoutStartZonesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutStartZonesInput, LocationUncheckedCreateWithoutStartZonesInput>
  }

  export type LocationCreateWithoutEndZonesInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startZones?: SafeZoneCreateNestedManyWithoutStartLocationInput
  }

  export type LocationUncheckedCreateWithoutEndZonesInput = {
    id?: string
    type?: string
    coordinates?: LocationCreatecoordinatesInput | number[]
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startZones?: SafeZoneUncheckedCreateNestedManyWithoutStartLocationInput
  }

  export type LocationCreateOrConnectWithoutEndZonesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutEndZonesInput, LocationUncheckedCreateWithoutEndZonesInput>
  }

  export type LocationUpsertWithoutStartZonesInput = {
    update: XOR<LocationUpdateWithoutStartZonesInput, LocationUncheckedUpdateWithoutStartZonesInput>
    create: XOR<LocationCreateWithoutStartZonesInput, LocationUncheckedCreateWithoutStartZonesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutStartZonesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutStartZonesInput, LocationUncheckedUpdateWithoutStartZonesInput>
  }

  export type LocationUpdateWithoutStartZonesInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endZones?: SafeZoneUpdateManyWithoutEndLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutStartZonesInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endZones?: SafeZoneUncheckedUpdateManyWithoutEndLocationNestedInput
  }

  export type LocationUpsertWithoutEndZonesInput = {
    update: XOR<LocationUpdateWithoutEndZonesInput, LocationUncheckedUpdateWithoutEndZonesInput>
    create: XOR<LocationCreateWithoutEndZonesInput, LocationUncheckedCreateWithoutEndZonesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutEndZonesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutEndZonesInput, LocationUncheckedUpdateWithoutEndZonesInput>
  }

  export type LocationUpdateWithoutEndZonesInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startZones?: SafeZoneUpdateManyWithoutStartLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutEndZonesInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: LocationUpdatecoordinatesInput | number[]
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startZones?: SafeZoneUncheckedUpdateManyWithoutStartLocationNestedInput
  }

  export type SafeZoneCreateWithoutStartLocationInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    endLocation?: LocationCreateNestedOneWithoutEndZonesInput
  }

  export type SafeZoneUncheckedCreateWithoutStartLocationInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    endLocationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafeZoneCreateOrConnectWithoutStartLocationInput = {
    where: SafeZoneWhereUniqueInput
    create: XOR<SafeZoneCreateWithoutStartLocationInput, SafeZoneUncheckedCreateWithoutStartLocationInput>
  }

  export type SafeZoneCreateManyStartLocationInputEnvelope = {
    data: SafeZoneCreateManyStartLocationInput | SafeZoneCreateManyStartLocationInput[]
  }

  export type SafeZoneCreateWithoutEndLocationInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    startLocation?: LocationCreateNestedOneWithoutStartZonesInput
  }

  export type SafeZoneUncheckedCreateWithoutEndLocationInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    startLocationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafeZoneCreateOrConnectWithoutEndLocationInput = {
    where: SafeZoneWhereUniqueInput
    create: XOR<SafeZoneCreateWithoutEndLocationInput, SafeZoneUncheckedCreateWithoutEndLocationInput>
  }

  export type SafeZoneCreateManyEndLocationInputEnvelope = {
    data: SafeZoneCreateManyEndLocationInput | SafeZoneCreateManyEndLocationInput[]
  }

  export type SafeZoneUpsertWithWhereUniqueWithoutStartLocationInput = {
    where: SafeZoneWhereUniqueInput
    update: XOR<SafeZoneUpdateWithoutStartLocationInput, SafeZoneUncheckedUpdateWithoutStartLocationInput>
    create: XOR<SafeZoneCreateWithoutStartLocationInput, SafeZoneUncheckedCreateWithoutStartLocationInput>
  }

  export type SafeZoneUpdateWithWhereUniqueWithoutStartLocationInput = {
    where: SafeZoneWhereUniqueInput
    data: XOR<SafeZoneUpdateWithoutStartLocationInput, SafeZoneUncheckedUpdateWithoutStartLocationInput>
  }

  export type SafeZoneUpdateManyWithWhereWithoutStartLocationInput = {
    where: SafeZoneScalarWhereInput
    data: XOR<SafeZoneUpdateManyMutationInput, SafeZoneUncheckedUpdateManyWithoutStartLocationInput>
  }

  export type SafeZoneScalarWhereInput = {
    AND?: SafeZoneScalarWhereInput | SafeZoneScalarWhereInput[]
    OR?: SafeZoneScalarWhereInput[]
    NOT?: SafeZoneScalarWhereInput | SafeZoneScalarWhereInput[]
    id?: StringFilter<"SafeZone"> | string
    description?: StringFilter<"SafeZone"> | string
    expectedReturnTime?: DateTimeFilter<"SafeZone"> | Date | string
    notification?: BoolFilter<"SafeZone"> | boolean
    startLocationId?: StringNullableFilter<"SafeZone"> | string | null
    endLocationId?: StringNullableFilter<"SafeZone"> | string | null
    isDeleted?: BoolFilter<"SafeZone"> | boolean
    createdAt?: DateTimeFilter<"SafeZone"> | Date | string
    updatedAt?: DateTimeFilter<"SafeZone"> | Date | string
  }

  export type SafeZoneUpsertWithWhereUniqueWithoutEndLocationInput = {
    where: SafeZoneWhereUniqueInput
    update: XOR<SafeZoneUpdateWithoutEndLocationInput, SafeZoneUncheckedUpdateWithoutEndLocationInput>
    create: XOR<SafeZoneCreateWithoutEndLocationInput, SafeZoneUncheckedCreateWithoutEndLocationInput>
  }

  export type SafeZoneUpdateWithWhereUniqueWithoutEndLocationInput = {
    where: SafeZoneWhereUniqueInput
    data: XOR<SafeZoneUpdateWithoutEndLocationInput, SafeZoneUncheckedUpdateWithoutEndLocationInput>
  }

  export type SafeZoneUpdateManyWithWhereWithoutEndLocationInput = {
    where: SafeZoneScalarWhereInput
    data: XOR<SafeZoneUpdateManyMutationInput, SafeZoneUncheckedUpdateManyWithoutEndLocationInput>
  }

  export type UserCreateWithoutEmergencyContactInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    location?: UserLocationCreateNestedOneWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmergencyContactInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmergencyContactInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmergencyContactInput, UserUncheckedCreateWithoutEmergencyContactInput>
  }

  export type UserUpsertWithoutEmergencyContactInput = {
    update: XOR<UserUpdateWithoutEmergencyContactInput, UserUncheckedUpdateWithoutEmergencyContactInput>
    create: XOR<UserCreateWithoutEmergencyContactInput, UserUncheckedCreateWithoutEmergencyContactInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmergencyContactInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmergencyContactInput, UserUncheckedUpdateWithoutEmergencyContactInput>
  }

  export type UserUpdateWithoutEmergencyContactInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    location?: UserLocationUpdateOneWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmergencyContactInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAlertPostInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    location?: UserLocationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlertPostInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlertPostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertPostInput, UserUncheckedCreateWithoutAlertPostInput>
  }

  export type AlertPostLocationCreateWithoutAlertPostInput = {
    id?: string
    type?: string
    coordinates?: AlertPostLocationCreatecoordinatesInput | number[]
    images?: AlertPostLocationCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertPostLocationUncheckedCreateWithoutAlertPostInput = {
    id?: string
    type?: string
    coordinates?: AlertPostLocationCreatecoordinatesInput | number[]
    images?: AlertPostLocationCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertPostLocationCreateOrConnectWithoutAlertPostInput = {
    where: AlertPostLocationWhereUniqueInput
    create: XOR<AlertPostLocationCreateWithoutAlertPostInput, AlertPostLocationUncheckedCreateWithoutAlertPostInput>
  }

  export type UserUpsertWithoutAlertPostInput = {
    update: XOR<UserUpdateWithoutAlertPostInput, UserUncheckedUpdateWithoutAlertPostInput>
    create: XOR<UserCreateWithoutAlertPostInput, UserUncheckedCreateWithoutAlertPostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertPostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertPostInput, UserUncheckedUpdateWithoutAlertPostInput>
  }

  export type UserUpdateWithoutAlertPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    location?: UserLocationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlertPostLocationUpsertWithoutAlertPostInput = {
    update: XOR<AlertPostLocationUpdateWithoutAlertPostInput, AlertPostLocationUncheckedUpdateWithoutAlertPostInput>
    create: XOR<AlertPostLocationCreateWithoutAlertPostInput, AlertPostLocationUncheckedCreateWithoutAlertPostInput>
    where?: AlertPostLocationWhereInput
  }

  export type AlertPostLocationUpdateToOneWithWhereWithoutAlertPostInput = {
    where?: AlertPostLocationWhereInput
    data: XOR<AlertPostLocationUpdateWithoutAlertPostInput, AlertPostLocationUncheckedUpdateWithoutAlertPostInput>
  }

  export type AlertPostLocationUpdateWithoutAlertPostInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: AlertPostLocationUpdatecoordinatesInput | number[]
    images?: AlertPostLocationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertPostLocationUncheckedUpdateWithoutAlertPostInput = {
    type?: StringFieldUpdateOperationsInput | string
    coordinates?: AlertPostLocationUpdatecoordinatesInput | number[]
    images?: AlertPostLocationUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertPostCreateWithoutLocationInput = {
    id?: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAlertPostInput
  }

  export type AlertPostUncheckedCreateWithoutLocationInput = {
    id?: string
    userId: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertPostCreateOrConnectWithoutLocationInput = {
    where: AlertPostWhereUniqueInput
    create: XOR<AlertPostCreateWithoutLocationInput, AlertPostUncheckedCreateWithoutLocationInput>
  }

  export type AlertPostUpsertWithoutLocationInput = {
    update: XOR<AlertPostUpdateWithoutLocationInput, AlertPostUncheckedUpdateWithoutLocationInput>
    create: XOR<AlertPostCreateWithoutLocationInput, AlertPostUncheckedCreateWithoutLocationInput>
    where?: AlertPostWhereInput
  }

  export type AlertPostUpdateToOneWithWhereWithoutLocationInput = {
    where?: AlertPostWhereInput
    data: XOR<AlertPostUpdateWithoutLocationInput, AlertPostUncheckedUpdateWithoutLocationInput>
  }

  export type AlertPostUpdateWithoutLocationInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertPostNestedInput
  }

  export type AlertPostUncheckedUpdateWithoutLocationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateWithoutPackageInput = {
    id?: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    payments?: PaymentsCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPackageInput = {
    id?: string
    userId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentsUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPackageInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPackageInput, SubscriptionUncheckedCreateWithoutPackageInput>
  }

  export type SubscriptionCreateManyPackageInputEnvelope = {
    data: SubscriptionCreateManyPackageInput | SubscriptionCreateManyPackageInput[]
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPackageInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPackageInput, SubscriptionUncheckedUpdateWithoutPackageInput>
    create: XOR<SubscriptionCreateWithoutPackageInput, SubscriptionUncheckedCreateWithoutPackageInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPackageInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPackageInput, SubscriptionUncheckedUpdateWithoutPackageInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPackageInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPackageInput>
  }

  export type PackageCreateWithoutSubscriptionInput = {
    id?: string
    title: string
    descriptions: string
    price: number
    durationDay: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    title: string
    descriptions: string
    price: number
    durationDay: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageCreateOrConnectWithoutSubscriptionInput = {
    where: PackageWhereUniqueInput
    create: XOR<PackageCreateWithoutSubscriptionInput, PackageUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    location?: UserLocationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
    payments?: PaymentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsCreateWithoutSubscriptionInput = {
    id?: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    userId: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    create: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsCreateManySubscriptionInputEnvelope = {
    data: PaymentsCreateManySubscriptionInput | PaymentsCreateManySubscriptionInput[]
  }

  export type PackageUpsertWithoutSubscriptionInput = {
    update: XOR<PackageUpdateWithoutSubscriptionInput, PackageUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PackageCreateWithoutSubscriptionInput, PackageUncheckedCreateWithoutSubscriptionInput>
    where?: PackageWhereInput
  }

  export type PackageUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: PackageWhereInput
    data: XOR<PackageUpdateWithoutSubscriptionInput, PackageUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PackageUpdateWithoutSubscriptionInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationDay?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageUncheckedUpdateWithoutSubscriptionInput = {
    title?: StringFieldUpdateOperationsInput | string
    descriptions?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    durationDay?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    location?: UserLocationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
    payments?: PaymentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentsUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    update: XOR<PaymentsUpdateWithoutSubscriptionInput, PaymentsUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentsCreateWithoutSubscriptionInput, PaymentsUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentsWhereUniqueInput
    data: XOR<PaymentsUpdateWithoutSubscriptionInput, PaymentsUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentsUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentsScalarWhereInput
    data: XOR<PaymentsUpdateManyMutationInput, PaymentsUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    id?: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    package: PackageCreateNestedOneWithoutSubscriptionInput
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string
    packageId: string
    userId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationCreateNestedOneWithoutUserInput
    location?: UserLocationCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactCreateNestedManyWithoutUserInput
    alertPost?: AlertPostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    status?: $Enums.status
    role?: $Enums.Role
    profile?: string | null
    phoneNumber?: string | null
    expireAt?: Date | string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    verification?: VerificationUncheckedCreateNestedOneWithoutUserInput
    location?: UserLocationUncheckedCreateNestedOneWithoutUserInput
    emergencyContact?: EmergencyContactUncheckedCreateNestedManyWithoutUserInput
    alertPost?: AlertPostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    deviceHistory?: DeviceHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutSubscriptionNestedInput
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    packageId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUpdateOneWithoutUserNestedInput
    location?: UserLocationUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verification?: VerificationUncheckedUpdateOneWithoutUserNestedInput
    location?: UserLocationUncheckedUpdateOneWithoutUserNestedInput
    emergencyContact?: EmergencyContactUncheckedUpdateManyWithoutUserNestedInput
    alertPost?: AlertPostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    deviceHistory?: DeviceHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EmergencyContactCreateManyUserInput = {
    id?: string
    profile: string
    name: string
    relation: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isDeleted?: boolean
  }

  export type AlertPostCreateManyUserInput = {
    id?: string
    alertType: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    packageId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceHistoryCreateManyUserInput = {
    id?: string
    ip?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsCreateManyUserInput = {
    id?: string
    subscriptionId: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmergencyContactUpdateWithoutUserInput = {
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmergencyContactUncheckedUpdateWithoutUserInput = {
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmergencyContactUncheckedUpdateManyWithoutUserInput = {
    profile?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    relation?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertPostUpdateWithoutUserInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: AlertPostLocationUpdateOneWithoutAlertPostNestedInput
  }

  export type AlertPostUncheckedUpdateWithoutUserInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: AlertPostLocationUncheckedUpdateOneWithoutAlertPostNestedInput
  }

  export type AlertPostUncheckedUpdateManyWithoutUserInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    package?: PackageUpdateOneRequiredWithoutSubscriptionNestedInput
    payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    packageId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    packageId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceHistoryUpdateWithoutUserInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceHistoryUncheckedUpdateWithoutUserInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceHistoryUncheckedUpdateManyWithoutUserInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUpdateWithoutUserInput = {
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutUserInput = {
    subscriptionId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutUserInput = {
    subscriptionId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneCreateManyStartLocationInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    endLocationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafeZoneCreateManyEndLocationInput = {
    id?: string
    description: string
    expectedReturnTime: Date | string
    notification?: boolean
    startLocationId?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SafeZoneUpdateWithoutStartLocationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endLocation?: LocationUpdateOneWithoutEndZonesNestedInput
  }

  export type SafeZoneUncheckedUpdateWithoutStartLocationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    endLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneUncheckedUpdateManyWithoutStartLocationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    endLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneUpdateWithoutEndLocationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startLocation?: LocationUpdateOneWithoutStartZonesNestedInput
  }

  export type SafeZoneUncheckedUpdateWithoutEndLocationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    startLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SafeZoneUncheckedUpdateManyWithoutEndLocationInput = {
    description?: StringFieldUpdateOperationsInput | string
    expectedReturnTime?: DateTimeFieldUpdateOperationsInput | Date | string
    notification?: BoolFieldUpdateOperationsInput | boolean
    startLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPackageInput = {
    id?: string
    userId: string
    expiredAt: Date | string
    isActivate?: boolean
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPackageInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    payments?: PaymentsUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPackageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentsUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPackageInput = {
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActivate?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsCreateManySubscriptionInput = {
    id?: string
    userId: string
    price: number
    trnId: string
    isPaid?: boolean
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentsUpdateWithoutSubscriptionInput = {
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsUncheckedUpdateWithoutSubscriptionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentsUncheckedUpdateManyWithoutSubscriptionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    trnId?: StringFieldUpdateOperationsInput | string
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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