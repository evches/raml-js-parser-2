import RamlWrapper = require("./device-profiles-parser");
import hl = require("../../raml1/highLevelAST")

function getWrapperConstructor(definition : hl.INodeDefinition) {
    if (!definition.isBuiltIn()) return null;

    return classMap[definition.nameId()];
}

/**
 * @hidden
 * Build Wrapper node corresponding to the High Level node
 **/
export function buildWrapperNode(node:hl.IHighLevelNode,setAsTopLevel:boolean=true){

    var definition = node.definition();
    var nodeClassName = definition.nameId();

    var wrapperConstructor = getWrapperConstructor(definition);

    if(!wrapperConstructor){
        var priorities = determineSuperclassesPriorities(definition);
        var superTypes = definition.allSuperTypes().sort((x,y)=>priorities[x.nameId()]-priorities[y.nameId()]);
        var wr=null;
        for (var i=0;i<superTypes.length;i++){
            var superTypeName=superTypes[i].nameId();
            wrapperConstructor = getWrapperConstructor(superTypes[i]);
            if (superTypeName=="DataElement"){
                wr=superTypeName;
                //This is only case of nested hierarchy
                continue;
            }
            if (superTypeName=="hl.BasicNode"){
                //depth first
                continue;
            }
            if (wrapperConstructor){
                break;
            }
        }
        if (!wrapperConstructor){
            wr=superTypeName;
        }
    }
    if (!wrapperConstructor){
        wrapperConstructor = classMap["hl.BasicNode"]

    }
    return wrapperConstructor(node,setAsTopLevel);
}

function determineSuperclassesPriorities(
    td:hl.ITypeDefinition,
    priorities:{[key:string]:number}={},
    path:{[key:string]:boolean}={}):any{

    var typeName = td.nameId();
    if(path[typeName]){
        return;
    }
    path[typeName] = true;
    var rank = (priorities[typeName]!=null && priorities[typeName] + 1 )|| 0;
    var superTypes = td.superTypes();
    superTypes.forEach(x=>{
        var name = x.nameId();
        var r = priorities[name];
        if(r==null||rank>r){
            priorities[name] = rank;
            determineSuperclassesPriorities(x,priorities,path);
        }
    });
    delete path[typeName];
    return priorities;
}

var classMap = {

    "Api": (x,y)=>{return new RamlWrapper.ApiImpl(x,y)},

    "ConfigTemplate": (x,y)=>{return new RamlWrapper.ConfigTemplateImpl(x,y)},

    "DeviceProfileBase": (x,y)=>{return new RamlWrapper.DeviceProfileBaseImpl(x,y)},

    "DeviceProfileOutput": (x,y)=>{return new RamlWrapper.DeviceProfileOutputImpl(x,y)},

    "ExtendsContainer": (x,y)=>{return new RamlWrapper.ExtendsContainerImpl(x,y)},

    "GlobalParameter": (x,y)=>{return new RamlWrapper.GlobalParameterImpl(x,y)},

    "ParamValue": (x,y)=>{return new RamlWrapper.ParamValueImpl(x,y)},

    "Parameter": (x,y)=>{return new RamlWrapper.ParameterImpl(x,y)},

    "Resource": (x,y)=>{return new RamlWrapper.ResourceImpl(x,y)},

    "RestApi": (x,y)=>{return new RamlWrapper.RestApiImpl(x,y)},

    "Workflow": (x,y)=>{return new RamlWrapper.WorkflowImpl(x,y)}

};
