/// <reference path="../../../typings/main.d.ts" />
import index = require("../../index");
import assert = require("assert");
import ramlWrapper = require("../artifacts/raml10parser");
import jsyaml = require("../jsyaml/jsyaml2lowLevel");
import hlimpl = require("../highLevelImpl");
import util = require("./test-utils");

describe('AST Reuse Test Set',function() {
    this.timeout(15000);
    describe('Basic Tests', function () {

        it("Space in the method descrription", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api01.raml");
        });

        it("Changing response code in the main tree", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api02.raml");
        });

        it("Response body type switch", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api03.raml", false);
        });

    });
});

function test(path1:string,path2:string,doReuse=true) {

    var path1Res = util.data(path1);
    var path2Res = util.data(path2);
    let api1 = (<ramlWrapper.ApiImpl>index.loadRAMLSync(path1Res, [])).expand();

    var resolver = new jsyaml.FSResolverImpl();
    var fsResolver = {
        content: (path) => {
            if (path == path1Res) {
                return resolver.content(path2Res)
            }
            return resolver.content(path);
        },
        contentAsync: (path) => {
            return Promise.resolve("");
        }
    };

    let api2 = (<ramlWrapper.ApiImpl>index.loadRAMLSync(path1Res, [], {
        reusedNode: api1.highLevel(),
        fsResolver: fsResolver
    })).expand();
    var payload1 = api2.toJSON({rootNodeDetails: true});

    let api3 = (<ramlWrapper.ApiImpl>index.loadRAMLSync(path1Res, [], {
        fsResolver: fsResolver
    })).expand();
    var payload2 = api3.toJSON({rootNodeDetails: true});

    var diff = util.compare(payload2,payload1);


    if(diff.length!=0){
        console.warn("DIFFERENCE DETECTED FOR " + path2Res);
        console.warn(diff.map(x=>x.message("actual","expected")).join("\n\n"));
        assert(false);
    }
    if(doReuse){
        assert((<hlimpl.ASTNodeImpl>api2.highLevel()).reusedNode()!=null,"Reuse is expected");
    }
    else {
        assert((<hlimpl.ASTNodeImpl>api2.highLevel()).reusedNode()==null,"Reuse is not expected");
    }
    
}
