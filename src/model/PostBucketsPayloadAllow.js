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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeOss) {
      root.ForgeOss = {};
    }
    root.ForgeOss.PostBucketsPayloadAllow = factory(root.ForgeOss.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PostBucketsPayloadAllow model module.
   * @module model/PostBucketsPayloadAllow
   */

  /**
   * Constructs a new <code>PostBucketsPayloadAllow</code>.
   * @alias module:model/PostBucketsPayloadAllow
   * @class
   * @param authId {String} The application key to grant access to
   * @param access {module:model/PostBucketsPayloadAllow.AccessEnum} Acceptable values: `full` or `read` 
   */
  var exports = function(authId, access) {
    var _this = this;

    _this['authId'] = authId;
    _this['access'] = access;
  };

  /**
   * Constructs a <code>PostBucketsPayloadAllow</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostBucketsPayloadAllow} obj Optional instance to populate.
   * @return {module:model/PostBucketsPayloadAllow} The populated <code>PostBucketsPayloadAllow</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authId')) {
        obj['authId'] = ApiClient.convertToType(data['authId'], 'String');
      }
      if (data.hasOwnProperty('access')) {
        obj['access'] = ApiClient.convertToType(data['access'], 'String');
      }
    }
    return obj;
  }

  /**
   * The application key to grant access to
   * @member {String} authId
   */
  exports.prototype['authId'] = undefined;
  /**
   * Acceptable values: `full` or `read` 
   * @member {module:model/PostBucketsPayloadAllow.AccessEnum} access
   */
  exports.prototype['access'] = undefined;


  /**
   * Allowed values for the <code>access</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessEnum = {
    /**
     * value: "full"
     * @const
     */
    "full": "full",
    /**
     * value: "read"
     * @const
     */
    "read": "read"  };


  return exports;
}));


