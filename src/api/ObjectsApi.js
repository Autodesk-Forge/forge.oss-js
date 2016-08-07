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
    define(['ApiClient', 'model/Reason', 'model/ObjectDetails', 'model/PostObjectSigned', 'model/PostBucketsSigned', 'model/InputStream', 'model/ObjectFullDetails', 'model/InlineResponse2001'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Reason'), require('../model/ObjectDetails'), require('../model/PostObjectSigned'), require('../model/PostBucketsSigned'), require('../model/InputStream'), require('../model/ObjectFullDetails'), require('../model/InlineResponse2001'));
  } else {
    // Browser globals (root is window)
    if (!root.ForgeOss) {
      root.ForgeOss = {};
    }
    root.ForgeOss.ObjectsApi = factory(root.ForgeOss.ApiClient, root.ForgeOss.Reason, root.ForgeOss.ObjectDetails, root.ForgeOss.PostObjectSigned, root.ForgeOss.PostBucketsSigned, root.ForgeOss.InputStream, root.ForgeOss.ObjectFullDetails, root.ForgeOss.InlineResponse2001);
  }
}(this, function(ApiClient, Reason, ObjectDetails, PostObjectSigned, PostBucketsSigned, InputStream, ObjectFullDetails, InlineResponse2001) {
  'use strict';

  /**
   * Objects service.
   * @module api/ObjectsApi
   */

  /**
   * Constructs a new ObjectsApi. 
   * @alias module:api/ObjectsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the copyTo operation.
     * @callback module:api/ObjectsApi~copyToCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copies an object to another object name in the same bucket.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {String} newObjName URL-encoded Object key to use as the destination
     * @param {module:api/ObjectsApi~copyToCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectDetails}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDetails}
     */
    this.copyTo = function(bucketKey, objectName, newObjName, callback) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling copyTo";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling copyTo";
      }

      // verify the required parameter 'newObjName' is set
      if (newObjName == undefined || newObjName == null) {
        throw "Missing the required parameter 'newObjName' when calling copyTo";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName,
        'newObjName': newObjName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/copyTo/{newObjName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSignedResource operation.
     * @callback module:api/ObjectsApi~createSignedResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostObjectSigned} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint creates a signed URL that can be used to download an object within the specified expiration time. Be aware that if the object the signed URL points to is deleted or expires before the signed URL expires, then the signed URL will no longer be valid. A successful call to this endpoint requires bucket owner access.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {module:model/PostBucketsSigned} postBucketsSigned Body Structure
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.access Access for signed resource Acceptable values: &#x60;read&#x60;, &#x60;write&#x60;, &#x60;readwrite&#x60;. Default value: &#x60;read&#x60;  (default to read)
     * @param {module:api/ObjectsApi~createSignedResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostObjectSigned}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostObjectSigned}
     */
    this.createSignedResource = function(bucketKey, objectName, postBucketsSigned, opts, callback) {
      opts = opts || {};
      var postBody = postBucketsSigned;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling createSignedResource";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling createSignedResource";
      }

      // verify the required parameter 'postBucketsSigned' is set
      if (postBucketsSigned == undefined || postBucketsSigned == null) {
        throw "Missing the required parameter 'postBucketsSigned' when calling createSignedResource";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'access': opts['access']
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PostObjectSigned;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/signed', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteObject operation.
     * @callback module:api/ObjectsApi~deleteObjectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an object from the bucket.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {module:api/ObjectsApi~deleteObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteObject = function(bucketKey, objectName, callback) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling deleteObject";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling deleteObject";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSignedResource operation.
     * @callback module:api/ObjectsApi~deleteSignedResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InputStream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a signed URL. A successful call to this endpoint requires bucket owner access.
     * @param {String} id Id of signed resource
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.region The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  (default to US)
     * @param {module:api/ObjectsApi~deleteSignedResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InputStream}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InputStream}
     */
    this.deleteSignedResource = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteSignedResource";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'region': opts['region']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['text/plain'];
      var returnType = InputStream;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getObject operation.
     * @callback module:api/ObjectsApi~getObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InputStream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download an object.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Object} opts Optional parameters
     * @param {String} opts.range A range of bytes to download from the specified object.
     * @param {String} opts.ifNoneMatch The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
     * @param {Date} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
     * @param {String} opts.acceptEncoding When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used. 
     * @param {module:api/ObjectsApi~getObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InputStream}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InputStream}
     */
    this.getObject = function(bucketKey, objectName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling getObject";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling getObject";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'Range': opts['range'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = InputStream;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getObjectDetails operation.
     * @callback module:api/ObjectsApi~getObjectDetailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectFullDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns object details in JSON format.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Object} opts Optional parameters
     * @param {Date} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
     * @param {module:model/String} opts._with Extra information in details; multiple uses are supported Acceptable values: &#x60;createdDate&#x60;, &#x60;lastAccessedDate&#x60;, &#x60;lastModifiedDate&#x60; 
     * @param {module:api/ObjectsApi~getObjectDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectFullDetails}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectFullDetails}
     */
    this.getObjectDetails = function(bucketKey, objectName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling getObjectDetails";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling getObjectDetails";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
        'with': opts['_with']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ObjectFullDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getObjects operation.
     * @callback module:api/ObjectsApi~getObjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List objects in a bucket. It is only available to the bucket creator.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit Limit to the response size, Acceptable values: 1-100 Default &#x3D; 10  (default to 10)
     * @param {String} opts.beginsWith Provides a way to filter the based on object key name
     * @param {String} opts.startAt Key to use as an offset to continue pagination This is typically the last bucket key found in a preceding GET buckets response 
     * @param {module:api/ObjectsApi~getObjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    this.getObjects = function(bucketKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling getObjects";
      }


      var pathParams = {
        'bucketKey': bucketKey
      };
      var queryParams = {
        'limit': opts['limit'],
        'beginsWith': opts['beginsWith'],
        'startAt': opts['startAt']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSessionid operation.
     * @callback module:api/ObjectsApi~getSessionidCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint returns status information about a resumable upload.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {String} sessionId Unique identifier of a session of a file being uploaded
     * @param {module:api/ObjectsApi~getSessionidCallback} callback The callback function, accepting three arguments: error, data, response
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.getSessionid = function(bucketKey, objectName, sessionId, callback) {
      var postBody = null;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling getSessionid";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling getSessionid";
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        throw "Missing the required parameter 'sessionId' when calling getSessionid";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName,
        'sessionId': sessionId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/status/{sessionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSignedResource operation.
     * @callback module:api/ObjectsApi~getSignedResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InputStream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download an object using a signed URL.
     * @param {String} id Id of signed resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.range A range of bytes to download from the specified object.
     * @param {String} opts.ifNoneMatch The value of this header is compared to the ETAG of the object. If they match, the body will not be included in the response. Only the object information will be included.
     * @param {Date} opts.ifModifiedSince If the requested object has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message body. 
     * @param {String} opts.acceptEncoding When gzip is specified, a gzip compressed stream of the object’s bytes will be returned in the response. Cannot use “Accept-Encoding:gzip” with Range header containing an end byte range. End byte range will not be honored if “Accept-Encoding: gzip” header is used. 
     * @param {module:model/String} opts.region The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  (default to US)
     * @param {module:api/ObjectsApi~getSignedResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InputStream}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InputStream}
     */
    this.getSignedResource = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getSignedResource";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'region': opts['region']
      };
      var headerParams = {
        'Range': opts['range'],
        'If-None-Match': opts['ifNoneMatch'],
        'If-Modified-Since': opts['ifModifiedSince'],
        'Accept-Encoding': opts['acceptEncoding']
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = InputStream;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadChunk operation.
     * @callback module:api/ObjectsApi~uploadChunkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint allows resumable uploads for large files in chunks.
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Integer} contentLength Indicates the size of the request body.
     * @param {String} contentRange Byte range of a segment being uploaded
     * @param {String} sessionId Unique identifier of a session of a file being uploaded
     * @param {module:model/InputStream} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {String} opts.ifMatch If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
     * @param {module:api/ObjectsApi~uploadChunkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectDetails}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDetails}
     */
    this.uploadChunk = function(bucketKey, objectName, contentLength, contentRange, sessionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling uploadChunk";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling uploadChunk";
      }

      // verify the required parameter 'contentLength' is set
      if (contentLength == undefined || contentLength == null) {
        throw "Missing the required parameter 'contentLength' when calling uploadChunk";
      }

      // verify the required parameter 'contentRange' is set
      if (contentRange == undefined || contentRange == null) {
        throw "Missing the required parameter 'contentRange' when calling uploadChunk";
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        throw "Missing the required parameter 'sessionId' when calling uploadChunk";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling uploadChunk";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Length': contentLength,
        'Content-Range': contentRange,
        'Content-Disposition': opts['contentDisposition'],
        'If-Match': opts['ifMatch'],
        'Session-Id': sessionId
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}/resumable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadObject operation.
     * @callback module:api/ObjectsApi~uploadObjectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload an object. If the specified object name already exists in the bucket, the uploaded content will overwrite the existing content for the bucket name/object name combination. 
     * @param {String} bucketKey URL-encoded bucket key
     * @param {String} objectName URL-encoded object name
     * @param {Integer} contentLength Indicates the size of the request body.
     * @param {module:model/InputStream} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {String} opts.ifMatch If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
     * @param {module:api/ObjectsApi~uploadObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ObjectDetails}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDetails}
     */
    this.uploadObject = function(bucketKey, objectName, contentLength, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'bucketKey' is set
      if (bucketKey == undefined || bucketKey == null) {
        throw "Missing the required parameter 'bucketKey' when calling uploadObject";
      }

      // verify the required parameter 'objectName' is set
      if (objectName == undefined || objectName == null) {
        throw "Missing the required parameter 'objectName' when calling uploadObject";
      }

      // verify the required parameter 'contentLength' is set
      if (contentLength == undefined || contentLength == null) {
        throw "Missing the required parameter 'contentLength' when calling uploadObject";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling uploadObject";
      }


      var pathParams = {
        'bucketKey': bucketKey,
        'objectName': objectName
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Length': contentLength,
        'Content-Disposition': opts['contentDisposition'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = ObjectDetails;

      return this.apiClient.callApi(
        '/oss/v2/buckets/{bucketKey}/objects/{objectName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadSignedResource operation.
     * @callback module:api/ObjectsApi~uploadSignedResourceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostObjectSigned} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Overwrite a existing object using a signed URL.  Conditions to call this operation:  Object is available Expiration period is valid Signed URL should be created with &#x60;write&#x60; or &#x60;readwrite&#x60; 
     * @param {String} id Id of signed resource
     * @param {Integer} contentLength Indicates the size of the request body.
     * @param {module:model/InputStream} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {module:model/String} opts.xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  (default to US)
     * @param {String} opts.ifMatch If-Match header containing a SHA-1 hash of the bytes in the request body can be sent by the calling service or client application with the request. If present, OSS will use the value of If-Match header to verify that a SHA-1 calculated for the uploaded bytes server side matches what was sent in the header. If not, the request is failed with a status 412 Precondition Failed and the data is not written. 
     * @param {module:api/ObjectsApi~uploadSignedResourceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostObjectSigned}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostObjectSigned}
     */
    this.uploadSignedResource = function(id, contentLength, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling uploadSignedResource";
      }

      // verify the required parameter 'contentLength' is set
      if (contentLength == undefined || contentLength == null) {
        throw "Missing the required parameter 'contentLength' when calling uploadSignedResource";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling uploadSignedResource";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Length': contentLength,
        'Content-Disposition': opts['contentDisposition'],
        'x-ads-region': opts['xAdsRegion'],
        'If-Match': opts['ifMatch']
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = PostObjectSigned;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadSignedResourcesChunk operation.
     * @callback module:api/ObjectsApi~uploadSignedResourcesChunkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostObjectSigned} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resumable upload for signed URLs.
     * @param {String} id Id of signed resource
     * @param {String} contentRange Byte range of a segment being uploaded
     * @param {String} sessionId Unique identifier of a session of a file being uploaded
     * @param {module:model/InputStream} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contentDisposition The suggested default filename when downloading this object to a file after it has been uploaded.
     * @param {module:model/String} opts.xAdsRegion The region where the bucket resides Acceptable values: &#x60;US&#x60;, &#x60;EMEA&#x60; Default is &#x60;US&#x60;  (default to US)
     * @param {module:api/ObjectsApi~uploadSignedResourcesChunkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostObjectSigned}
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PostObjectSigned}
     */
    this.uploadSignedResourcesChunk = function(id, contentRange, sessionId, body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling uploadSignedResourcesChunk";
      }

      // verify the required parameter 'contentRange' is set
      if (contentRange == undefined || contentRange == null) {
        throw "Missing the required parameter 'contentRange' when calling uploadSignedResourcesChunk";
      }

      // verify the required parameter 'sessionId' is set
      if (sessionId == undefined || sessionId == null) {
        throw "Missing the required parameter 'sessionId' when calling uploadSignedResourcesChunk";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling uploadSignedResourcesChunk";
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Content-Range': contentRange,
        'Content-Disposition': opts['contentDisposition'],
        'x-ads-region': opts['xAdsRegion'],
        'Session-Id': sessionId
      };
      var formParams = {
      };

      var authNames = ['oauth2_application'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = PostObjectSigned;

      return this.apiClient.callApi(
        '/oss/v2/signedresources/{id}/resumable', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
