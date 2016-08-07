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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BucketsPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BucketsPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeOss) {
      root.ForgeOss = {};
    }
    root.ForgeOss.Buckets = factory(root.ForgeOss.ApiClient, root.ForgeOss.BucketsPermissions);
  }
}(this, function(ApiClient, BucketsPermissions) {
  'use strict';




  /**
   * The Buckets model module.
   * @module model/Buckets
   */

  /**
   * Constructs a new <code>Buckets</code>.
   * Bucket json response
   * @alias module:model/Buckets
   * @class
   * @param bucketKey {String} The key for the created bucket
   * @param bucketOwner {String} Owner of the bucket
   * @param createdDate {Integer} Timestamp in epoch time
   * @param permissions {Array.<module:model/BucketsPermissions>} Array of objects representing the applications with access granted at bucket creation
   * @param policyKey {module:model/Buckets.PolicyKeyEnum} [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent` 
   */
  var exports = function(bucketKey, bucketOwner, createdDate, permissions, policyKey) {
    var _this = this;

    _this['bucketKey'] = bucketKey;
    _this['bucketOwner'] = bucketOwner;
    _this['createdDate'] = createdDate;
    _this['permissions'] = permissions;
    _this['policyKey'] = policyKey;
  };

  /**
   * Constructs a <code>Buckets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buckets} obj Optional instance to populate.
   * @return {module:model/Buckets} The populated <code>Buckets</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bucketKey')) {
        obj['bucketKey'] = ApiClient.convertToType(data['bucketKey'], 'String');
      }
      if (data.hasOwnProperty('bucketOwner')) {
        obj['bucketOwner'] = ApiClient.convertToType(data['bucketOwner'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Integer');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], [BucketsPermissions]);
      }
      if (data.hasOwnProperty('policyKey')) {
        obj['policyKey'] = ApiClient.convertToType(data['policyKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * The key for the created bucket
   * @member {String} bucketKey
   */
  exports.prototype['bucketKey'] = undefined;
  /**
   * Owner of the bucket
   * @member {String} bucketOwner
   */
  exports.prototype['bucketOwner'] = undefined;
  /**
   * Timestamp in epoch time
   * @member {Integer} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * Array of objects representing the applications with access granted at bucket creation
   * @member {Array.<module:model/BucketsPermissions>} permissions
   */
  exports.prototype['permissions'] = undefined;
  /**
   * [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent` 
   * @member {module:model/Buckets.PolicyKeyEnum} policyKey
   */
  exports.prototype['policyKey'] = undefined;


  /**
   * Allowed values for the <code>policyKey</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PolicyKeyEnum = {
    /**
     * value: "transient"
     * @const
     */
    "transient": "transient",
    /**
     * value: "temporary"
     * @const
     */
    "temporary": "temporary",
    /**
     * value: "persistent"
     * @const
     */
    "persistent": "persistent"  };


  return exports;
}));


