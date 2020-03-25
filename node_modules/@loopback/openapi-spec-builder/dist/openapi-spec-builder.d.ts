import { CallbackObject, ComponentsObject, ExampleObject, HeaderObject, ISpecificationExtension, LinkObject, OpenAPIObject, OperationObject, ParameterObject, ReferenceObject, RequestBodyObject, ResponseObject, SchemaObject, SecuritySchemeObject } from 'openapi3-ts';
/**
 * Create a new instance of OpenApiSpecBuilder.
 *
 * @param basePath - The base path on which the API is served.
 */
export declare function anOpenApiSpec(): OpenApiSpecBuilder;
/**
 * Create a new instance of OperationSpecBuilder.
 */
export declare function anOperationSpec(): OperationSpecBuilder;
/**
 * Create a new instance of ComponentsSpecBuilder.
 */
export declare function aComponentsSpec(): ComponentsSpecBuilder;
export declare class BuilderBase<T extends ISpecificationExtension> {
    protected _spec: T;
    constructor(initialSpec: T);
    /**
     * Add a custom (extension) property to the spec object.
     *
     * @param key - The property name starting with "x-".
     * @param value - The property value.
     */
    withExtension(key: string, value: any): this;
    /**
     * Build the spec object.
     */
    build(): T;
}
/**
 * A builder for creating OpenApiSpec documents.
 */
export declare class OpenApiSpecBuilder extends BuilderBase<OpenAPIObject> {
    /**
     * @param basePath - The base path on which the API is served.
     */
    constructor();
    /**
     * Define a new OperationObject at the given path and verb (method).
     *
     * @param verb - The HTTP verb.
     * @param path - The path relative to basePath.
     * @param spec - Additional specification of the operation.
     */
    withOperation(verb: string, path: string, spec: OperationObject | OperationSpecBuilder): this;
    /**
     * Define a new operation that returns a string response.
     *
     * @param verb - The HTTP verb.
     * @param path - The path relative to basePath.
     * @param operationName - The name of the controller method implementing
     * this operation (`x-operation-name` field).
     */
    withOperationReturningString(verb: string, path: string, operationName?: string): this;
    /**
     * Define a new ComponentsObject.
     *
     * @param spec - Specification of the components.
     */
    withComponents(spec: ComponentsObject | ComponentsSpecBuilder): this;
}
/**
 * A builder for creating OperationObject specifications.
 */
export declare class OperationSpecBuilder extends BuilderBase<OperationObject> {
    constructor();
    /**
     * Describe a response for a given HTTP status code.
     * @param status - HTTP status code or string "default"
     * @param responseSpec - Specification of the response
     */
    withResponse(status: number | 'default', responseSpec: ResponseObject): this;
    withStringResponse(status?: number | 'default'): this;
    /**
     * Describe one more parameters accepted by the operation.
     * Note that parameters are positional in OpenAPI Spec, therefore
     * the first call of `withParameter` defines the first parameter,
     * the second call defines the second parameter, etc.
     * @param parameterSpecs
     */
    withParameter(...parameterSpecs: ParameterObject[]): this;
    withRequestBody(requestBodySpec: RequestBodyObject): this;
    /**
     * Define the operation name (controller method name).
     *
     * @param name - The name of the controller method implementing this operation.
     */
    withOperationName(name: string): this;
    /**
     * Define the controller name (controller name).
     *
     * @param name - The name of the controller containing this operation.
     */
    withControllerName(name: string): this;
    /**
     * Set up the `operationId` if not configured
     */
    private setupOperationId;
    /**
     * Define the operationId
     * @param operationId - Operation id
     */
    withOperationId(operationId: string): this;
    /**
     * Describe tags associated with the operation
     * @param tags
     */
    withTags(tags: string | string[]): this;
}
/**
 * A builder for creating ComponentsObject specifications.
 */
export declare class ComponentsSpecBuilder extends BuilderBase<ComponentsObject> {
    constructor();
    /**
     * Define a component schema.
     *
     * @param name - The name of the schema
     * @param schema - Specification of the schema
     *
     */
    withSchema(name: string, schema: SchemaObject | ReferenceObject): this;
    /**
     * Define a component response.
     *
     * @param name - The name of the response
     * @param response - Specification of the response
     *
     */
    withResponse(name: string, response: ResponseObject | ReferenceObject): this;
    /**
     * Define a component parameter.
     *
     * @param name - The name of the parameter
     * @param parameter - Specification of the parameter
     *
     */
    withParameter(name: string, parameter: ParameterObject | ReferenceObject): this;
    /**
     * Define a component example.
     *
     * @param name - The name of the example
     * @param example - Specification of the example
     *
     */
    withExample(name: string, example: ExampleObject | ReferenceObject): this;
    /**
     * Define a component request body.
     *
     * @param name - The name of the request body
     * @param requestBody - Specification of the request body
     *
     */
    withRequestBody(name: string, requestBody: RequestBodyObject | ReferenceObject): this;
    /**
     * Define a component header.
     *
     * @param name - The name of the header
     * @param header - Specification of the header
     *
     */
    withHeader(name: string, header: HeaderObject | ReferenceObject): this;
    /**
     * Define a component security scheme.
     *
     * @param name - The name of the security scheme
     * @param securityScheme - Specification of the security scheme
     *
     */
    withSecurityScheme(name: string, securityScheme: SecuritySchemeObject | ReferenceObject): this;
    /**
     * Define a component link.
     *
     * @param name - The name of the link
     * @param link - Specification of the link
     *
     */
    withLink(name: string, link: LinkObject | ReferenceObject): this;
    /**
     * Define a component callback.
     *
     * @param name - The name of the callback
     * @param callback - Specification of the callback
     *
     */
    withCallback(name: string, callback: CallbackObject | ReferenceObject): this;
}
