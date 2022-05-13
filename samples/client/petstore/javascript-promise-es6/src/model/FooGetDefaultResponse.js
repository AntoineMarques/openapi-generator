/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Foo from './Foo';

/**
 * The FooGetDefaultResponse model module.
 * @module model/FooGetDefaultResponse
 * @version 1.0.0
 */
class FooGetDefaultResponse {
    /**
     * Constructs a new <code>FooGetDefaultResponse</code>.
     * @alias module:model/FooGetDefaultResponse
     */
    constructor() { 
        
        FooGetDefaultResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FooGetDefaultResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FooGetDefaultResponse} obj Optional instance to populate.
     * @return {module:model/FooGetDefaultResponse} The populated <code>FooGetDefaultResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FooGetDefaultResponse();

            if (data.hasOwnProperty('string')) {
                obj['string'] = Foo.constructFromObject(data['string']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Foo} string
 */
FooGetDefaultResponse.prototype['string'] = undefined;






export default FooGetDefaultResponse;

