/*
 * Echo Server API
 * Echo Server API
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: team@openapitools.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.model.Pet;
import org.junit.Test;
import org.junit.Ignore;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for BodyApi
 */
@Ignore
public class BodyApiTest {

    private final BodyApi api = new BodyApi();

    
    /**
     * Test body parameter(s)
     *
     * Test body parameter(s)
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void testEchoBodyPetTest() {
        Pet pet = null;
        Pet response = api.testEchoBodyPet(pet);

        // TODO: test validations
    }
    
}
