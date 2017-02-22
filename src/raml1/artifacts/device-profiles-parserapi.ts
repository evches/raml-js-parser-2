
import hl=require("../../raml1/highLevelAST");
import core=require("../../raml1/wrapped-ast/parserCoreApi");

export interface Api extends core.BasicNode{
"device-profile"(  ):DeviceProfileBase[]
}


/**
 * Grouping for device-profile
 **/
export interface DeviceProfileBase extends core.BasicNode{
_uuid(  ):string

uuid(  ):string

name(  ):string


        /**
         * Description about this device profile
         **/
description(  ):string


        /**
         * device family name that this device profile is designed for
         **/
device_family(  ):string

extends(  ):ExtendsContainer

global_parameters(  ):GlobalParameter[]

workflows(  ):Workflow[]
}


/**
 * Mechanism to inherit from a parent profile. You can define a
 * device-profile to inherit from a single other parent profile.
 * 1. All workflows are inherited from the parent profile.
 * 2. You can exclude a set of workflows from being inherited by
 * specifying their names in the excluded_workflows list.
 * 3. You can redefine any of the inherited workflows by specifying
 * their names in the redefined_workflows list.
 * 4. When redefining a workflow, you must follow the following rules:
 * A) Leave the parameters list empty. It will be the same as the
 * parameter list from the workflow in the parent profile.
 * B) All resources from the workflow in the parent inheritance chain
 * will be available in the redefined workflow.
 * C) You can add resources with new names - i.e. names not conflicting
 * with any other resource for the same workflow in the parent
 * inheritance chain.
 * D) You can redefine a resource - i.e. define a resource with the
 * same name in this workflow and provide a body. In this case the
 * workflow in the sub-profile must provide the complete resource
 * definition.
 * E) You must define the output of the workflow completely in the
 * sub-profile. It is not inherited from the parent workflow.
 * 5. You can add any number of new workflows into the sub-profile.
 **/
export interface ExtendsContainer extends core.BasicNode{

        /**
         * Name of the device-profile which is being inherited
         **/
parent_profile(  ):string


        /**
         * List of workflows that are not inherited from this parent profile
         **/
excluded_workflows(  ):string[]


        /**
         * List of workflows that are being redefined in this sub-profile
         **/
redefined_workflows(  ):string[]
}


/**
 * Global customizable parameters that can be used in all workflows
 **/
export interface GlobalParameter extends core.BasicNode{
_name(  ):string


        /**
         * Parameter name
         **/
name(  ):string


        /**
         * Description for this parameter
         **/
description(  ):string

value(  ):ParamValue
}

export interface ParamValue extends core.BasicNode{
str_value(  ):string

num_value(  ):number

bool_value(  ):boolean

obj_value(  ):any
}


/**
 * Workflow input data that are used by workflow implementations to
 * customerize the workflow with input resources and config templates.
 **/
export interface Workflow extends core.BasicNode{
_name(  ):string


        /**
         * Name of the workflow that can used by workflow implementation to
         * look up the specific workflow input data defined in this device
         * profile.
         **/
workflow_name(  ):string

parameters(  ):Parameter[]

resources(  ):Resource[]

output(  ):DeviceProfileOutput
}


/**
 * Input parameters to resolve the resources defined in this workflow
 **/
export interface Parameter extends core.BasicNode{
_name(  ):string


        /**
         * Parameter name
         **/
name(  ):string


        /**
         * Description for this parameter
         **/
description(  ):string


        /**
         * parameter type
         **/
"type"(  ):string


        /**
         * Default value for this parameter
         **/
default_value(  ):string
}


/**
 * List of resource objects that can be defined or constructed via REST API
 **/
export interface Resource extends core.BasicNode{
_name(  ):string


        /**
         * Resource name has to be a valid python variable name. This
         * is because the resources are used as the jinja input parameters
         **/
resource_name(  ):string


        /**
         * List of resources defined in this workflow that are served as input
         * to resolve this resource. The input resources needs to be resolved
         * first before this resource can be resolved. There should not be
         * circular dependency between the resources defined in the same
         * workflow. This chained resource resolution allows someone to resolve
         * resource by traversing the CSP topology. For example, one can get
         * tenant by a uCPE device id by creating following resource chain:
         * dev_uuid => device node in the topology => site node in the topology
         * => tenant in the topology
         **/
input_resources(  ):string[]

rest_api(  ):RestApi


        /**
         * Jinja template that can be used to construct the resource object from the workflow parameters
         **/
json_value(  ):string
}


/**
 * REST API info that can be used to construct resource
 * object. The returned JSON from the API call is assigned
 * to this resource.
 **/
export interface RestApi extends core.BasicNode{

        /**
         * Jinja template to construct the Service name that can be used
         * for service discovery, such as 'local.csp-dms-central',
         * '{{region_name}}.csp-dms-regional'
         **/
service_name(  ):string


        /**
         * REST methods
         **/
method(  ):string


        /**
         * Jinja template to construct URI for the REST API
         **/
uri(  ):string


        /**
         * Jinja template that can be used to construct the HTTP body
         * for the REST API call. The input parameter for this jinja
         * template are parameters defined in the workflow parameters
         * or other resources defined in this workflow
         **/
http_body(  ):string
}


/**
 * grouping device-profile-output
 **/
export interface DeviceProfileOutput extends core.BasicNode{

        /**
         * list of resources to return after they gets resolved
         **/
resources(  ):string[]


        /**
         * List of config templates used in the workflow
         **/
config_templates(  ):ConfigTemplate[]
}

export interface ConfigTemplate extends core.BasicNode{

        /**
         * Config name
         **/
name(  ):string


        /**
         * Display name in the UI for this template
         **/
display_name(  ):string


        /**
         * Do not show this template in the UI
         **/
hide(  ):boolean


        /**
         * device component name such as 'JDM', 'JCP', or 'gw-router'
         **/
device_component_name(  ):string


        /**
         * UUID of the config template
         **/
template_uuid(  ):string
}

/**
 * Custom type guard for Api. Returns true if node is instance of Api. Returns false otherwise.
 * Also returns false for super interfaces of Api.
 */
export function isApi(node: core.AbstractWrapperNode) : node is Api {
    return node.kind() == "Api" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for DeviceProfileBase. Returns true if node is instance of DeviceProfileBase. Returns false otherwise.
 * Also returns false for super interfaces of DeviceProfileBase.
 */
export function isDeviceProfileBase(node: core.AbstractWrapperNode) : node is DeviceProfileBase {
    return node.kind() == "DeviceProfileBase" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for ExtendsContainer. Returns true if node is instance of ExtendsContainer. Returns false otherwise.
 * Also returns false for super interfaces of ExtendsContainer.
 */
export function isExtendsContainer(node: core.AbstractWrapperNode) : node is ExtendsContainer {
    return node.kind() == "ExtendsContainer" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for GlobalParameter. Returns true if node is instance of GlobalParameter. Returns false otherwise.
 * Also returns false for super interfaces of GlobalParameter.
 */
export function isGlobalParameter(node: core.AbstractWrapperNode) : node is GlobalParameter {
    return node.kind() == "GlobalParameter" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for ParamValue. Returns true if node is instance of ParamValue. Returns false otherwise.
 * Also returns false for super interfaces of ParamValue.
 */
export function isParamValue(node: core.AbstractWrapperNode) : node is ParamValue {
    return node.kind() == "ParamValue" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for Workflow. Returns true if node is instance of Workflow. Returns false otherwise.
 * Also returns false for super interfaces of Workflow.
 */
export function isWorkflow(node: core.AbstractWrapperNode) : node is Workflow {
    return node.kind() == "Workflow" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for Parameter. Returns true if node is instance of Parameter. Returns false otherwise.
 * Also returns false for super interfaces of Parameter.
 */
export function isParameter(node: core.AbstractWrapperNode) : node is Parameter {
    return node.kind() == "Parameter" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for Resource. Returns true if node is instance of Resource. Returns false otherwise.
 * Also returns false for super interfaces of Resource.
 */
export function isResource(node: core.AbstractWrapperNode) : node is Resource {
    return node.kind() == "Resource" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for RestApi. Returns true if node is instance of RestApi. Returns false otherwise.
 * Also returns false for super interfaces of RestApi.
 */
export function isRestApi(node: core.AbstractWrapperNode) : node is RestApi {
    return node.kind() == "RestApi" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for DeviceProfileOutput. Returns true if node is instance of DeviceProfileOutput. Returns false otherwise.
 * Also returns false for super interfaces of DeviceProfileOutput.
 */
export function isDeviceProfileOutput(node: core.AbstractWrapperNode) : node is DeviceProfileOutput {
    return node.kind() == "DeviceProfileOutput" && node.RAMLVersion() == "device-profiles";
}


/**
 * Custom type guard for ConfigTemplate. Returns true if node is instance of ConfigTemplate. Returns false otherwise.
 * Also returns false for super interfaces of ConfigTemplate.
 */
export function isConfigTemplate(node: core.AbstractWrapperNode) : node is ConfigTemplate {
    return node.kind() == "ConfigTemplate" && node.RAMLVersion() == "device-profiles";
}

