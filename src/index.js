/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
console.warn( "WARNING: The 'forge-oss' npm package is deprecated in favor of the 'forge-apis' npm package, please upgrade.");

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Bucket', 'model/BucketPermissions', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse200Items', 'model/InputStream', 'model/ObjectDetails', 'model/ObjectFullDetails', 'model/ObjectFullDetailsDeltas', 'model/PostBucketsPayload', 'model/PostBucketsPayloadAllow', 'model/PostBucketsSigned', 'model/PostObjectSigned', 'model/Reason', 'api/BucketsApi', 'api/ObjectsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Bucket'), require('./model/BucketPermissions'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse200Items'), require('./model/InputStream'), require('./model/ObjectDetails'), require('./model/ObjectFullDetails'), require('./model/ObjectFullDetailsDeltas'), require('./model/PostBucketsPayload'), require('./model/PostBucketsPayloadAllow'), require('./model/PostBucketsSigned'), require('./model/PostObjectSigned'), require('./model/Reason'), require('./api/BucketsApi'), require('./api/ObjectsApi'));
  }
}(function(ApiClient, Bucket, BucketPermissions, InlineResponse200, InlineResponse2001, InlineResponse200Items, InputStream, ObjectDetails, ObjectFullDetails, ObjectFullDetailsDeltas, PostBucketsPayload, PostBucketsPayloadAllow, PostBucketsSigned, PostObjectSigned, Reason, BucketsApi, ObjectsApi) {
  'use strict';

  /**
   * Asynchronous Javascript/Node.js library for the Autodesk Forge OSS API..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ForgeOss = require('index'); // See note below*.
   * var xxxSvc = new ForgeOss.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ForgeOss.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ForgeOss.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ForgeOss.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Bucket model constructor.
     * @property {module:model/Bucket}
     */
    Bucket: Bucket,
    /**
     * The BucketPermissions model constructor.
     * @property {module:model/BucketPermissions}
     */
    BucketPermissions: BucketPermissions,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse200Items model constructor.
     * @property {module:model/InlineResponse200Items}
     */
    InlineResponse200Items: InlineResponse200Items,
    /**
     * The InputStream model constructor.
     * @property {module:model/InputStream}
     */
    InputStream: InputStream,
    /**
     * The ObjectDetails model constructor.
     * @property {module:model/ObjectDetails}
     */
    ObjectDetails: ObjectDetails,
    /**
     * The ObjectFullDetails model constructor.
     * @property {module:model/ObjectFullDetails}
     */
    ObjectFullDetails: ObjectFullDetails,
    /**
     * The ObjectFullDetailsDeltas model constructor.
     * @property {module:model/ObjectFullDetailsDeltas}
     */
    ObjectFullDetailsDeltas: ObjectFullDetailsDeltas,
    /**
     * The PostBucketsPayload model constructor.
     * @property {module:model/PostBucketsPayload}
     */
    PostBucketsPayload: PostBucketsPayload,
    /**
     * The PostBucketsPayloadAllow model constructor.
     * @property {module:model/PostBucketsPayloadAllow}
     */
    PostBucketsPayloadAllow: PostBucketsPayloadAllow,
    /**
     * The PostBucketsSigned model constructor.
     * @property {module:model/PostBucketsSigned}
     */
    PostBucketsSigned: PostBucketsSigned,
    /**
     * The PostObjectSigned model constructor.
     * @property {module:model/PostObjectSigned}
     */
    PostObjectSigned: PostObjectSigned,
    /**
     * The Reason model constructor.
     * @property {module:model/Reason}
     */
    Reason: Reason,
    /**
     * The BucketsApi service constructor.
     * @property {module:api/BucketsApi}
     */
    BucketsApi: BucketsApi,
    /**
     * The ObjectsApi service constructor.
     * @property {module:api/ObjectsApi}
     */
    ObjectsApi: ObjectsApi
  };

  return exports;
}));
