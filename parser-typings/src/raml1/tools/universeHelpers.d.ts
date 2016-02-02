/// <reference path="../../../typings/main.d.ts" />
import hl = require("../../raml1/highLevelAST");
export declare function isDocumentationProperty(p: hl.IProperty): boolean;
export declare function isUsagePropertyName(name: string): boolean;
export declare function isUsageProperty(p: hl.IProperty): boolean;
export declare function isMasterRefProperty(p: hl.IProperty): boolean;
export declare function isDescriptionPropertyName(name: string): boolean;
export declare function isDescriptionProperty(p: hl.IProperty): boolean;
export declare function isDisplayNamePropertyName(name: string): boolean;
export declare function isDisplayNameProperty(p: hl.IProperty): boolean;
export declare function isTitlePropertyName(name: string): boolean;
export declare function isTitleProperty(p: hl.IProperty): boolean;
export declare function isAnnotationsProperty(p: hl.IProperty): boolean;
export declare function isIsProperty(p: hl.IProperty): boolean;
export declare function isSecuredByProperty(p: hl.IProperty): boolean;
export declare function isTypeProperty(p: hl.IProperty): boolean;
export declare function isProtocolsProperty(p: hl.IProperty): boolean;
export declare function isNameProperty(p: hl.IProperty): boolean;
export declare function isBodyProperty(p: hl.IProperty): boolean;
export declare function isSchemaProperty(p: hl.IProperty): boolean;
export declare function isSchemasProperty(p: hl.IProperty): boolean;
export declare function isResourcesProperty(p: hl.IProperty): boolean;
export declare function isTypesProperty(p: hl.IProperty): boolean;
export declare function isExampleProperty(p: hl.IProperty): boolean;
export declare function isExamplesProperty(p: hl.IProperty): boolean;
export declare function isValueProperty(p: hl.IProperty): boolean;
export declare function isUriParametersProperty(p: hl.IProperty): boolean;
export declare function isBaseUriParametersProperty(p: hl.IProperty): boolean;
export declare function isUsesProperty(p: hl.IProperty): boolean;
export declare function isAnnotationTypesProperty(p: hl.IProperty): boolean;
export declare function isRepeatProperty(p: hl.IProperty): boolean;
export declare function isMethodType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isApiType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isBooleanTypeType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isMarkdownStringType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isResourceType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isTraitType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isGlobalSchemaType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isSecuritySchemaType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isTypeDeclarationType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isResponseType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isBodyLikeType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isOverlayType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isAnnotationTypeType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isResourceTypeType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isSchemaStringType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isMethodBaseType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isPointerType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isRamlExpressionType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isRamlSelectorType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isLibraryType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isStringTypeType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isExampleSpecType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isExtensionType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isTypeDeclarationTypeOrDescendant(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isDocumentationType(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
export declare function isAnnotationRefTypeOrDescendant(type: hl.INodeDefinition | hl.ITypeDefinition): boolean;
