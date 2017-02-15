/// <reference path="../../typings/main.d.ts" />
/***
 *
 *
 * ATTENTION! The script is used by the gulp build
 *
 *
 **/
import fs=require("fs")
import wrapped=require("./wrappedParserGen")
import def = require("raml-definition-system");
import path = require("path")

//target paths

var artifactsFolderPath = "../../src/raml1/artifacts";

function processApi(parserName, factoryTs, universeName) {
    var parserInterfaceTargetPath=path.join(__dirname, artifactsFolderPath + "/" + parserName + "api.ts").toString();
    var parserImplementationTargetPath=path.join(__dirname, artifactsFolderPath + "/" + parserName + ".ts").toString();
    var factoryTargetPath=path.join(__dirname, artifactsFolderPath + factoryTs).toString();

//generation

    var universe = def.getUniverse(universeName);
    var apiType = universe.type("Api");
    var parserGenerator = wrapped.def2Parser(parserName + "api.ts", apiType);
    var parserInterfaceContent = parserGenerator.serializeInterfaceToString();
    var parserImplementationContent = parserGenerator.serializeImplementationToString();
    var factoryContent = parserGenerator.nodeFactory("../../raml1/highLevelAST","./" + parserName);
    if (!fs.existsSync(path.dirname(parserInterfaceTargetPath))) {
        fs.mkdirSync(path.dirname(parserInterfaceTargetPath));
    }
    fs.writeFileSync(parserInterfaceTargetPath, parserInterfaceContent);
    fs.writeFileSync(parserImplementationTargetPath, parserImplementationContent);
    fs.writeFileSync(factoryTargetPath, factoryContent);
}

processApi("raml10parser", "/raml10factory.ts", "RAML10");
processApi("raml08parser", "/raml08factory.ts", "RAML08");
processApi("device-profiles-parser", "/device-profiles-factory.ts", "device-profiles");
