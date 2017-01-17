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

        it("Space in the method description", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api01.raml");
        });

        it("Changing response code in the main tree", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api02.raml");
        });

        it("Response body type switch", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api03.raml", false);
        });

        it("Root media type switch", function () {
            test("ASTReuseTests/BasicTests/api.raml", "ASTReuseTests/BasicTests/api04.raml");
        });

        it("Resource type switch", function () {
            test("ASTReuseTests/test01/api.raml", "ASTReuseTests/test01/api01.raml");
        });

        it("Trait switch", function () {
            test("ASTReuseTests/test01/api.raml", "ASTReuseTests/test01/api02.raml");
        });

        it("Additional trait", function () {
            test("ASTReuseTests/test01/api.raml", "ASTReuseTests/test01/api03.raml");
        });

        it("Super type switch", function () {
            test("ASTReuseTests/test02/api.raml", "ASTReuseTests/test02/api01.raml", false);
        });

        it("Additional properties for a response mime type", function () {
            test("ASTReuseTests/test03/api.raml", "ASTReuseTests/test03/api01.raml");
        });

        it("uriParameter facet value change", function () {
            test("ASTReuseTests/test04/api.raml", "ASTReuseTests/test04/api01.raml",false);
        });

        it("resource description change", function () {
            test("ASTReuseTests/test05/api.raml", "ASTReuseTests/test05/api01.raml");
        });

        it("header name change in the method", function () {
            test("ASTReuseTests/test06/api.raml", "ASTReuseTests/test06/api01.raml", false);
        });

        it("trait parameter value change", function () {
            test("ASTReuseTests/test07/api.raml", "ASTReuseTests/test07/api01.raml", false);
        });

        it("Method securedBy value change", function () {
            test("ASTReuseTests/test08/api.raml", "ASTReuseTests/test08/api01.raml");
        });

        it("Resource annotation change", function () {
            test("ASTReuseTests/test09/api.raml", "ASTReuseTests/test09/api01.raml");
        });

        it("Method annotation change", function () {
            test("ASTReuseTests/test09/api.raml", "ASTReuseTests/test09/api02.raml");
        });

        it("Resource annotation string value change", function () {
            test("ASTReuseTests/test09/api.raml", "ASTReuseTests/test09/api03.raml");
        });

        it("Resource annotation object value change", function () {
            test("ASTReuseTests/test09/api.raml", "ASTReuseTests/test09/api04.raml");
        });

        it("Method annotation value change", function () {
            test("ASTReuseTests/test09/api.raml", "ASTReuseTests/test09/api05.raml");
        });

        it("Resource type annotation for a resource with the same annotation", function () {
            test("ASTReuseTests/test10/api.raml", "ASTReuseTests/test10/api01.raml");
        });

        it("Resource type annotation for a resource", function () {
            test("ASTReuseTests/test10/api.raml", "ASTReuseTests/test09/api02.raml");
        });
    });
});

function test(path1:string,path2:string,doReuse=true) {

    var path1Res = util.data(path1).replace(/\\/g,'/');
    var path2Res = util.data(path2).replace(/\\/g,'/');
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

    var diff = util.compare(payload1,payload2);


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
