
import hl=require("../../raml1/highLevelAST");
import stubs=require("../../raml1/stubs");
import hlImpl=require("../../raml1/highLevelImpl");
import jsyaml=require("../../raml1/jsyaml/jsyaml2lowLevel");
import json2lowlevel = require('../../raml1/jsyaml/json2lowLevel');
import def=require("raml-definition-system");
import services=require("../../raml1/definition-system/ramlServices");
import core=require("../../raml1/wrapped-ast/parserCore");
import apiLoader=require("../../raml1/apiLoader");
import coreApi=require("../../raml1/wrapped-ast/parserCoreApi");
import pApi = require("./device-profiles-parserapi.ts");


import Api = pApi.Api;
import DeviceProfileBase = pApi.DeviceProfileBase;
import GlobalParameter = pApi.GlobalParameter;
import ParamValue = pApi.ParamValue;
import Workflow = pApi.Workflow;
import Parameter = pApi.Parameter;
import Resource = pApi.Resource;
import RestApi = pApi.RestApi;
import DeviceProfileOutput = pApi.DeviceProfileOutput;
import ConfigTemplate = pApi.ConfigTemplate;
export class ApiImpl extends core.BasicNodeImpl implements Api{
"device-profile"(  ):DeviceProfileBase[]{
             return <DeviceProfileBase[]>super.elements('device-profile');
         }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "ApiImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "Api";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("Api");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.ApiImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.ApiImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
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
export class DeviceProfileBaseImpl extends core.BasicNodeImpl implements DeviceProfileBase{

        /**
         * Name of the device-profile which is being inherited
         **/
parent_profile(  ):string{
             return <string>super.attribute('parent_profile', this.toString);
         }


        /**
         * @hidden
         * Set parent_profile value
         **/
setParent_profile( param:string ){
            this.highLevel().attrOrCreate("parent_profile").setValue(""+param);
            return this;
        }


        /**
         * List of workflows that are not inherited from this parent profile
         **/
excluded_workflows(  ):string[]{
             return <string[]>super.attributes('excluded_workflows', this.toString);
         }


        /**
         * @hidden
         * Set excluded_workflows value
         **/
setExcluded_workflows( param:string ){
            this.highLevel().attrOrCreate("excluded_workflows").setValue(""+param);
            return this;
        }


        /**
         * List of workflows that are being redefined in this sub-profile
         **/
redefined_workflows(  ):string[]{
             return <string[]>super.attributes('redefined_workflows', this.toString);
         }


        /**
         * @hidden
         * Set redefined_workflows value
         **/
setRedefined_workflows( param:string ){
            this.highLevel().attrOrCreate("redefined_workflows").setValue(""+param);
            return this;
        }

global_parameters(  ):GlobalParameter[]{
             return <GlobalParameter[]>super.elements('global_parameters');
         }

workflows(  ):Workflow[]{
             return <Workflow[]>super.elements('workflows');
         }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "DeviceProfileBaseImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "DeviceProfileBase";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("DeviceProfileBase");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.DeviceProfileBaseImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.DeviceProfileBaseImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}


/**
 * Global customizable parameters that can be used in all workflows
 **/
export class GlobalParameterImpl extends core.BasicNodeImpl implements GlobalParameter{

        /**
         * Parameter name
         **/
name(  ):string{
             return <string>super.attribute('name', this.toString);
         }


        /**
         * @hidden
         * Set name value
         **/
setName( param:string ){
            this.highLevel().attrOrCreate("name").setValue(""+param);
            return this;
        }


        /**
         * Description for this parameter
         **/
description(  ):string{
             return <string>super.attribute('description', this.toString);
         }


        /**
         * @hidden
         * Set description value
         **/
setDescription( param:string ){
            this.highLevel().attrOrCreate("description").setValue(""+param);
            return this;
        }

value(  ):ParamValue{
             return <ParamValue>super.element('value');
         }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "GlobalParameterImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "GlobalParameter";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("GlobalParameter");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.GlobalParameterImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.GlobalParameterImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}

export class ParamValueImpl extends core.BasicNodeImpl implements ParamValue{
str_value(  ):string{
             return <string>super.attribute('str_value', this.toString);
         }


        /**
         * @hidden
         * Set str_value value
         **/
setStr_value( param:string ){
            this.highLevel().attrOrCreate("str_value").setValue(""+param);
            return this;
        }

num_value(  ):number{
             return <number>super.attribute('num_value', this.toNumber);
         }


        /**
         * @hidden
         * Set num_value value
         **/
setNum_value( param:number ){
            this.highLevel().attrOrCreate("num_value").setValue(""+param);
            return this;
        }

bool_value(  ):boolean{
             return <boolean>super.attribute('bool_value', this.toBoolean);
         }


        /**
         * @hidden
         * Set bool_value value
         **/
setBool_value( param:boolean ){
            this.highLevel().attrOrCreate("bool_value").setValue(""+param);
            return this;
        }

obj_value(  ):any{
             return <any>super.attribute('obj_value', this.toAny);
         }


        /**
         * @hidden
         * Set obj_value value
         **/
setObj_value( param:any ){
            this.highLevel().attrOrCreate("obj_value").setValue(""+param);
            return this;
        }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "ParamValueImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "ParamValue";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("ParamValue");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("undefined.ParamValueImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "undefined.ParamValueImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "undefined";}
}


/**
 * Workflow input data that are used by workflow implementations to
 * customerize the workflow with input resources and config templates.
 **/
export class WorkflowImpl extends core.BasicNodeImpl implements Workflow{

        /**
         * Name of the workflow that can used by workflow implementation to
         * look up the specific workflow input data defined in this device
         * profile.
         **/
workflow_name(  ):string{
             return <string>super.attribute('workflow_name', this.toString);
         }


        /**
         * @hidden
         * Set workflow_name value
         **/
setWorkflow_name( param:string ){
            this.highLevel().attrOrCreate("workflow_name").setValue(""+param);
            return this;
        }

parameters(  ):Parameter[]{
             return <Parameter[]>super.elements('parameters');
         }

resources(  ):Resource[]{
             return <Resource[]>super.elements('resources');
         }

output(  ):DeviceProfileOutput{
             return <DeviceProfileOutput>super.element('output');
         }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "WorkflowImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "Workflow";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("Workflow");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.WorkflowImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.WorkflowImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}


/**
 * Input parameters to resolve the resources defined in this workflow
 **/
export class ParameterImpl extends core.BasicNodeImpl implements Parameter{

        /**
         * Parameter name
         **/
name(  ):string{
             return <string>super.attribute('name', this.toString);
         }


        /**
         * @hidden
         * Set name value
         **/
setName( param:string ){
            this.highLevel().attrOrCreate("name").setValue(""+param);
            return this;
        }


        /**
         * Description for this parameter
         **/
description(  ):string{
             return <string>super.attribute('description', this.toString);
         }


        /**
         * @hidden
         * Set description value
         **/
setDescription( param:string ){
            this.highLevel().attrOrCreate("description").setValue(""+param);
            return this;
        }


        /**
         * parameter type
         **/
"type"(  ):string{
             return <string>super.attribute('type', this.toString);
         }


        /**
         * @hidden
         * Set type value
         **/
setType( param:string ){
            this.highLevel().attrOrCreate("type").setValue(""+param);
            return this;
        }


        /**
         * Default value for this parameter
         **/
default_value(  ):string{
             return <string>super.attribute('default_value', this.toString);
         }


        /**
         * @hidden
         * Set default_value value
         **/
setDefault_value( param:string ){
            this.highLevel().attrOrCreate("default_value").setValue(""+param);
            return this;
        }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "ParameterImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "Parameter";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("Parameter");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.ParameterImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.ParameterImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}


/**
 * List of resource objects that can be defined or constructed via REST API
 **/
export class ResourceImpl extends core.BasicNodeImpl implements Resource{

        /**
         * Resource name has to be a valid python variable name. This
         * is because the resources are used as the jinja input parameters
         **/
resource_name(  ):string{
             return <string>super.attribute('resource_name', this.toString);
         }


        /**
         * @hidden
         * Set resource_name value
         **/
setResource_name( param:string ){
            this.highLevel().attrOrCreate("resource_name").setValue(""+param);
            return this;
        }


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
input_resources(  ):string[]{
             return <string[]>super.attributes('input_resources', this.toString);
         }


        /**
         * @hidden
         * Set input_resources value
         **/
setInput_resources( param:string ){
            this.highLevel().attrOrCreate("input_resources").setValue(""+param);
            return this;
        }

rest_api(  ):RestApi{
             return <RestApi>super.element('rest_api');
         }


        /**
         * Jinja template that can be used to construct the resource object from the workflow parameters
         **/
json_value(  ):string{
             return <string>super.attribute('json_value', this.toString);
         }


        /**
         * @hidden
         * Set json_value value
         **/
setJson_value( param:string ){
            this.highLevel().attrOrCreate("json_value").setValue(""+param);
            return this;
        }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "ResourceImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "Resource";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("Resource");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.ResourceImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.ResourceImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}


/**
 * REST API info that can be used to construct resource
 * object. The returned JSON from the API call is assigned
 * to this resource.
 **/
export class RestApiImpl extends core.BasicNodeImpl implements RestApi{

        /**
         * Jinja template to construct the Service name that can be used
         * for service discovery, such as 'local.csp-dms-central',
         * '{{region_name}}.csp-dms-regional'
         **/
service_name(  ):string{
             return <string>super.attribute('service_name', this.toString);
         }


        /**
         * @hidden
         * Set service_name value
         **/
setService_name( param:string ){
            this.highLevel().attrOrCreate("service_name").setValue(""+param);
            return this;
        }


        /**
         * REST methods
         **/
method(  ):string{
             return <string>super.attribute('method', this.toString);
         }


        /**
         * @hidden
         * Set method value
         **/
setMethod( param:string ){
            this.highLevel().attrOrCreate("method").setValue(""+param);
            return this;
        }


        /**
         * Jinja template to construct URI for the REST API
         **/
uri(  ):string{
             return <string>super.attribute('uri', this.toString);
         }


        /**
         * @hidden
         * Set uri value
         **/
setUri( param:string ){
            this.highLevel().attrOrCreate("uri").setValue(""+param);
            return this;
        }


        /**
         * Jinja template that can be used to construct the HTTP body
         * for the REST API call. The input parameter for this jinja
         * template are parameters defined in the workflow parameters
         * or other resources defined in this workflow
         **/
http_body(  ):string{
             return <string>super.attribute('http_body', this.toString);
         }


        /**
         * @hidden
         * Set http_body value
         **/
setHttp_body( param:string ){
            this.highLevel().attrOrCreate("http_body").setValue(""+param);
            return this;
        }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "RestApiImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "RestApi";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("RestApi");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.RestApiImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.RestApiImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}


/**
 * grouping device-profile-output
 **/
export class DeviceProfileOutputImpl extends core.BasicNodeImpl implements DeviceProfileOutput{

        /**
         * list of resources to return after they gets resolved
         **/
resources(  ):string[]{
             return <string[]>super.attributes('resources', this.toString);
         }


        /**
         * @hidden
         * Set resources value
         **/
setResources( param:string ){
            this.highLevel().attrOrCreate("resources").setValue(""+param);
            return this;
        }


        /**
         * List of config templates used in the workflow
         **/
config_templates(  ):ConfigTemplate[]{
             return <ConfigTemplate[]>super.elements('config_templates');
         }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "DeviceProfileOutputImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "DeviceProfileOutput";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("DeviceProfileOutput");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.DeviceProfileOutputImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.DeviceProfileOutputImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}

export class ConfigTemplateImpl extends core.BasicNodeImpl implements ConfigTemplate{

        /**
         * Config name
         **/
name(  ):string{
             return <string>super.attribute('name', this.toString);
         }


        /**
         * @hidden
         * Set name value
         **/
setName( param:string ){
            this.highLevel().attrOrCreate("name").setValue(""+param);
            return this;
        }


        /**
         * Display name in the UI for this template
         **/
display_name(  ):string{
             return <string>super.attribute('display_name', this.toString);
         }


        /**
         * @hidden
         * Set display_name value
         **/
setDisplay_name( param:string ){
            this.highLevel().attrOrCreate("display_name").setValue(""+param);
            return this;
        }


        /**
         * Do not show this template in the UI
         **/
hide(  ):boolean{
             return <boolean>super.attribute('hide', this.toBoolean);
         }


        /**
         * @hidden
         * Set hide value
         **/
setHide( param:boolean ){
            this.highLevel().attrOrCreate("hide").setValue(""+param);
            return this;
        }


        /**
         * device component name such as 'JDM', 'JCP', or 'gw-router'
         **/
device_component_name(  ):string{
             return <string>super.attribute('device_component_name', this.toString);
         }


        /**
         * @hidden
         * Set device_component_name value
         **/
setDevice_component_name( param:string ){
            this.highLevel().attrOrCreate("device_component_name").setValue(""+param);
            return this;
        }


        /**
         * UUID of the config template
         **/
template_uuid(  ):string{
             return <string>super.attribute('template_uuid', this.toString);
         }


        /**
         * @hidden
         * Set template_uuid value
         **/
setTemplate_uuid( param:string ){
            this.highLevel().attrOrCreate("template_uuid").setValue(""+param);
            return this;
        }


        /**
         * @hidden
         * @return Actual name of instance class
         **/
wrapperClassName(  ):string{return "ConfigTemplateImpl";}


        /**
         * @return Actual name of instance interface
         **/
kind(  ):string{return "ConfigTemplate";}


        /**
         * @return Actual name of instance interface and all of its superinterfaces
         **/
allKinds(  ):string[]{return super.allKinds().concat("ConfigTemplate");}


        /**
         * @return Actual name of instance class and all of its superclasses
         **/
allWrapperClassNames(  ):string[]{return super.allWrapperClassNames().concat("device-profiles.ConfigTemplateImpl");}


        /**
         * @return Whether specified object is an instance of this class
         **/
static isInstance( instance:any ):boolean{
        if(instance != null && instance.allWrapperClassNames
            && typeof(instance.allWrapperClassNames) == "function"){

            for (let currentIdentifier of instance.allWrapperClassNames()){
                if(currentIdentifier == "device-profiles.ConfigTemplateImpl") return true;
            }
        }

        return false;
}


        /**
         * @return RAML version of the node
         **/
RAMLVersion(  ):string{return "device-profiles";}
}

/**
 * @hidden
 **/
function createApi(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("Api");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createDeviceProfileBase(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("DeviceProfileBase");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createGlobalParameter(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("GlobalParameter");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createParamValue(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("ParamValue");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createWorkflow(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("Workflow");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createParameter(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("Parameter");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createResource(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("Resource");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createRestApi(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("RestApi");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createDeviceProfileOutput(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("DeviceProfileOutput");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * @hidden
 **/
function createConfigTemplate(key:string){
    var universe=def.getUniverse("device-profiles");
    var nc=<def.NodeClass>universe.type("ConfigTemplate");
    var node=stubs.createStubNode(nc,null,key);
    return node;
}

/**
 * Load API synchronously. If the 'rejectOnErrors' option is set to true, [[ApiLoadingError]] is thrown for Api which contains errors.
 * @param apiPath Path to API: local file system path or Web URL
 * @param options Load options
 * @return Api instance.
 **/
export function loadApiSync(apiPath:string, options?:coreApi.Options):Api

export function loadApiSync(apiPath:string, arg1?:string[]|coreApi.Options, arg2?:coreApi.Options):Api{

        return <Api>apiLoader.loadApi(apiPath,arg1,arg2).getOrElse(null);
}


export function loadRAMLSync(ramlPath:string, arg1?:string[]|coreApi.Options, arg2?:coreApi.Options):hl.BasicNode{

        return <any>apiLoader.loadApi(ramlPath,arg1,arg2).getOrElse(null);
}

/**
 * Load API asynchronously. The Promise is rejected with [[ApiLoadingError]] if the resulting Api contains errors and the 'rejectOnErrors' option is set to 'true'.
 * @param apiPath Path to API: local file system path or Web URL
 * @param options Load options
 * @return Promise&lt;Api&gt;.
 **/
export function loadApi(apiPath:string, options?:coreApi.Options):Promise<Api>;

export function loadApi(apiPath:string, arg1?:string[]|coreApi.Options, arg2?:coreApi.Options):Promise<Api>{

        return apiLoader.loadApiAsync(apiPath,arg1,arg2);
}


export function loadRAML(ramlPath:string, arg1?:string[]|coreApi.Options, arg2?:coreApi.Options):Promise<hl.BasicNode>{

        return apiLoader.loadRAMLAsync(ramlPath,arg1,arg2);
}

/**
 * Gets AST node by runtime type, if runtime type matches any.
 * @param runtimeType - runtime type to find the match for
 */
export function getLanguageElementByRuntimeType(runtimeType : hl.ITypeDefinition) : core.BasicNode {
    return apiLoader.getLanguageElementByRuntimeType(runtimeType);
}
