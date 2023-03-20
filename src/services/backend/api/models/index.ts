/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AbpLoginResult
 */
export interface AbpLoginResult {
    /**
     * 
     * @type {LoginResultType}
     * @memberof AbpLoginResult
     */
    result?: LoginResultType;
    /**
     * 
     * @type {string}
     * @memberof AbpLoginResult
     */
    readonly description?: string | null;
}
/**
 * 
 * @export
 * @interface ActionApiDescriptionModel
 */
export interface ActionApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof ActionApiDescriptionModel
     */
    uniqueName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActionApiDescriptionModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActionApiDescriptionModel
     */
    httpMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActionApiDescriptionModel
     */
    url?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ActionApiDescriptionModel
     */
    supportedVersions?: Array<string> | null;
    /**
     * 
     * @type {Array<MethodParameterApiDescriptionModel>}
     * @memberof ActionApiDescriptionModel
     */
    parametersOnMethod?: Array<MethodParameterApiDescriptionModel> | null;
    /**
     * 
     * @type {Array<ParameterApiDescriptionModel>}
     * @memberof ActionApiDescriptionModel
     */
    parameters?: Array<ParameterApiDescriptionModel> | null;
    /**
     * 
     * @type {ReturnValueApiDescriptionModel}
     * @memberof ActionApiDescriptionModel
     */
    returnValue?: ReturnValueApiDescriptionModel;
    /**
     * 
     * @type {boolean}
     * @memberof ActionApiDescriptionModel
     */
    allowAnonymous?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ActionApiDescriptionModel
     */
    implementFrom?: string | null;
}
/**
 * 
 * @export
 * @interface ApplicationApiDescriptionModel
 */
export interface ApplicationApiDescriptionModel {
    /**
     * 
     * @type {{ [key: string]: ModuleApiDescriptionModel; }}
     * @memberof ApplicationApiDescriptionModel
     */
    modules?: { [key: string]: ModuleApiDescriptionModel; } | null;
    /**
     * 
     * @type {{ [key: string]: TypeApiDescriptionModel; }}
     * @memberof ApplicationApiDescriptionModel
     */
    types?: { [key: string]: TypeApiDescriptionModel; } | null;
}
/**
 * 
 * @export
 * @interface ApplicationAuthConfigurationDto
 */
export interface ApplicationAuthConfigurationDto {
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof ApplicationAuthConfigurationDto
     */
    grantedPolicies?: { [key: string]: boolean; } | null;
}
/**
 * 
 * @export
 * @interface ApplicationConfigurationDto
 */
export interface ApplicationConfigurationDto {
    /**
     * 
     * @type {ApplicationLocalizationConfigurationDto}
     * @memberof ApplicationConfigurationDto
     */
    localization?: ApplicationLocalizationConfigurationDto;
    /**
     * 
     * @type {ApplicationAuthConfigurationDto}
     * @memberof ApplicationConfigurationDto
     */
    auth?: ApplicationAuthConfigurationDto;
    /**
     * 
     * @type {ApplicationSettingConfigurationDto}
     * @memberof ApplicationConfigurationDto
     */
    setting?: ApplicationSettingConfigurationDto;
    /**
     * 
     * @type {CurrentUserDto}
     * @memberof ApplicationConfigurationDto
     */
    currentUser?: CurrentUserDto;
    /**
     * 
     * @type {ApplicationFeatureConfigurationDto}
     * @memberof ApplicationConfigurationDto
     */
    features?: ApplicationFeatureConfigurationDto;
    /**
     * 
     * @type {ApplicationGlobalFeatureConfigurationDto}
     * @memberof ApplicationConfigurationDto
     */
    globalFeatures?: ApplicationGlobalFeatureConfigurationDto;
    /**
     * 
     * @type {MultiTenancyInfoDto}
     * @memberof ApplicationConfigurationDto
     */
    multiTenancy?: MultiTenancyInfoDto;
    /**
     * 
     * @type {CurrentTenantDto}
     * @memberof ApplicationConfigurationDto
     */
    currentTenant?: CurrentTenantDto;
    /**
     * 
     * @type {TimingDto}
     * @memberof ApplicationConfigurationDto
     */
    timing?: TimingDto;
    /**
     * 
     * @type {ClockDto}
     * @memberof ApplicationConfigurationDto
     */
    clock?: ClockDto;
    /**
     * 
     * @type {ObjectExtensionsDto}
     * @memberof ApplicationConfigurationDto
     */
    objectExtensions?: ObjectExtensionsDto;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ApplicationConfigurationDto
     */
    extraProperties?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface ApplicationFeatureConfigurationDto
 */
export interface ApplicationFeatureConfigurationDto {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationFeatureConfigurationDto
     */
    values?: { [key: string]: string; } | null;
}
/**
 * 
 * @export
 * @interface ApplicationGlobalFeatureConfigurationDto
 */
export interface ApplicationGlobalFeatureConfigurationDto {
    /**
     * 
     * @type {Set<string>}
     * @memberof ApplicationGlobalFeatureConfigurationDto
     */
    enabledFeatures?: Set<string> | null;
}
/**
 * 
 * @export
 * @interface ApplicationLocalizationConfigurationDto
 */
export interface ApplicationLocalizationConfigurationDto {
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    values?: { [key: string]: { [key: string]: string; }; } | null;
    /**
     * 
     * @type {{ [key: string]: ApplicationLocalizationResourceDto; }}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    resources?: { [key: string]: ApplicationLocalizationResourceDto; } | null;
    /**
     * 
     * @type {Array<LanguageInfo>}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    languages?: Array<LanguageInfo> | null;
    /**
     * 
     * @type {CurrentCultureDto}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    currentCulture?: CurrentCultureDto;
    /**
     * 
     * @type {string}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    defaultResourceName?: string | null;
    /**
     * 
     * @type {{ [key: string]: Array<NameValue>; }}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    languagesMap?: { [key: string]: Array<NameValue>; } | null;
    /**
     * 
     * @type {{ [key: string]: Array<NameValue>; }}
     * @memberof ApplicationLocalizationConfigurationDto
     */
    languageFilesMap?: { [key: string]: Array<NameValue>; } | null;
}
/**
 * 
 * @export
 * @interface ApplicationLocalizationDto
 */
export interface ApplicationLocalizationDto {
    /**
     * 
     * @type {{ [key: string]: ApplicationLocalizationResourceDto; }}
     * @memberof ApplicationLocalizationDto
     */
    resources?: { [key: string]: ApplicationLocalizationResourceDto; } | null;
}
/**
 * 
 * @export
 * @interface ApplicationLocalizationResourceDto
 */
export interface ApplicationLocalizationResourceDto {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationLocalizationResourceDto
     */
    texts?: { [key: string]: string; } | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationLocalizationResourceDto
     */
    baseResources?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ApplicationSettingConfigurationDto
 */
export interface ApplicationSettingConfigurationDto {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationSettingConfigurationDto
     */
    values?: { [key: string]: string; } | null;
}
/**
 * 
 * @export
 * @interface ChangePasswordInput
 */
export interface ChangePasswordInput {
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordInput
     */
    currentPassword?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordInput
     */
    newPassword: string;
}
/**
 * 
 * @export
 * @interface ClockDto
 */
export interface ClockDto {
    /**
     * 
     * @type {string}
     * @memberof ClockDto
     */
    kind?: string | null;
}
/**
 * 
 * @export
 * @interface ControllerApiDescriptionModel
 */
export interface ControllerApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof ControllerApiDescriptionModel
     */
    controllerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ControllerApiDescriptionModel
     */
    controllerGroupName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ControllerApiDescriptionModel
     */
    isRemoteService?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ControllerApiDescriptionModel
     */
    isIntegrationService?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ControllerApiDescriptionModel
     */
    apiVersion?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ControllerApiDescriptionModel
     */
    type?: string | null;
    /**
     * 
     * @type {Array<ControllerInterfaceApiDescriptionModel>}
     * @memberof ControllerApiDescriptionModel
     */
    interfaces?: Array<ControllerInterfaceApiDescriptionModel> | null;
    /**
     * 
     * @type {{ [key: string]: ActionApiDescriptionModel; }}
     * @memberof ControllerApiDescriptionModel
     */
    actions?: { [key: string]: ActionApiDescriptionModel; } | null;
}
/**
 * 
 * @export
 * @interface ControllerInterfaceApiDescriptionModel
 */
export interface ControllerInterfaceApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof ControllerInterfaceApiDescriptionModel
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ControllerInterfaceApiDescriptionModel
     */
    name?: string | null;
    /**
     * 
     * @type {Array<InterfaceMethodApiDescriptionModel>}
     * @memberof ControllerInterfaceApiDescriptionModel
     */
    methods?: Array<InterfaceMethodApiDescriptionModel> | null;
}
/**
 * 
 * @export
 * @interface CurrentCultureDto
 */
export interface CurrentCultureDto {
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    englishName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    threeLetterIsoLanguageName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    twoLetterIsoLanguageName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentCultureDto
     */
    isRightToLeft?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    cultureName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentCultureDto
     */
    nativeName?: string | null;
    /**
     * 
     * @type {DateTimeFormatDto}
     * @memberof CurrentCultureDto
     */
    dateTimeFormat?: DateTimeFormatDto;
}
/**
 * 
 * @export
 * @interface CurrentTenantDto
 */
export interface CurrentTenantDto {
    /**
     * 
     * @type {string}
     * @memberof CurrentTenantDto
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentTenantDto
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentTenantDto
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface CurrentUserDto
 */
export interface CurrentUserDto {
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserDto
     */
    isAuthenticated?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    id?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    tenantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    impersonatorUserId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    impersonatorTenantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    impersonatorUserName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    impersonatorTenantName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    surName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserDto
     */
    emailVerified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CurrentUserDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentUserDto
     */
    phoneNumberVerified?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CurrentUserDto
     */
    roles?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface DateTimeFormatDto
 */
export interface DateTimeFormatDto {
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    calendarAlgorithmType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    dateTimeFormatLong?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    shortDatePattern?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    fullDateTimePattern?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    dateSeparator?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    shortTimePattern?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DateTimeFormatDto
     */
    longTimePattern?: string | null;
}
/**
 * 
 * @export
 * @interface EmailSettingsDto
 */
export interface EmailSettingsDto {
    /**
     * 
     * @type {string}
     * @memberof EmailSettingsDto
     */
    smtpHost?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EmailSettingsDto
     */
    smtpPort?: number;
    /**
     * 
     * @type {string}
     * @memberof EmailSettingsDto
     */
    smtpUserName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailSettingsDto
     */
    smtpPassword?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailSettingsDto
     */
    smtpDomain?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof EmailSettingsDto
     */
    smtpEnableSsl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailSettingsDto
     */
    smtpUseDefaultCredentials?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailSettingsDto
     */
    defaultFromAddress?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmailSettingsDto
     */
    defaultFromDisplayName?: string | null;
}
/**
 * 
 * @export
 * @interface EntityExtensionDto
 */
export interface EntityExtensionDto {
    /**
     * 
     * @type {{ [key: string]: ExtensionPropertyDto; }}
     * @memberof EntityExtensionDto
     */
    properties?: { [key: string]: ExtensionPropertyDto; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EntityExtensionDto
     */
    _configuration?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface ExtensionEnumDto
 */
export interface ExtensionEnumDto {
    /**
     * 
     * @type {Array<ExtensionEnumFieldDto>}
     * @memberof ExtensionEnumDto
     */
    fields?: Array<ExtensionEnumFieldDto> | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionEnumDto
     */
    localizationResource?: string | null;
}
/**
 * 
 * @export
 * @interface ExtensionEnumFieldDto
 */
export interface ExtensionEnumFieldDto {
    /**
     * 
     * @type {string}
     * @memberof ExtensionEnumFieldDto
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ExtensionEnumFieldDto
     */
    value?: any | null;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyApiCreateDto
 */
export interface ExtensionPropertyApiCreateDto {
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionPropertyApiCreateDto
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyApiDto
 */
export interface ExtensionPropertyApiDto {
    /**
     * 
     * @type {ExtensionPropertyApiGetDto}
     * @memberof ExtensionPropertyApiDto
     */
    onGet?: ExtensionPropertyApiGetDto;
    /**
     * 
     * @type {ExtensionPropertyApiCreateDto}
     * @memberof ExtensionPropertyApiDto
     */
    onCreate?: ExtensionPropertyApiCreateDto;
    /**
     * 
     * @type {ExtensionPropertyApiUpdateDto}
     * @memberof ExtensionPropertyApiDto
     */
    onUpdate?: ExtensionPropertyApiUpdateDto;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyApiGetDto
 */
export interface ExtensionPropertyApiGetDto {
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionPropertyApiGetDto
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyApiUpdateDto
 */
export interface ExtensionPropertyApiUpdateDto {
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionPropertyApiUpdateDto
     */
    isAvailable?: boolean;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyAttributeDto
 */
export interface ExtensionPropertyAttributeDto {
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyAttributeDto
     */
    typeSimple?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ExtensionPropertyAttributeDto
     */
    config?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyDto
 */
export interface ExtensionPropertyDto {
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyDto
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyDto
     */
    typeSimple?: string | null;
    /**
     * 
     * @type {LocalizableStringDto}
     * @memberof ExtensionPropertyDto
     */
    displayName?: LocalizableStringDto;
    /**
     * 
     * @type {ExtensionPropertyApiDto}
     * @memberof ExtensionPropertyDto
     */
    api?: ExtensionPropertyApiDto;
    /**
     * 
     * @type {ExtensionPropertyUiDto}
     * @memberof ExtensionPropertyDto
     */
    ui?: ExtensionPropertyUiDto;
    /**
     * 
     * @type {Array<ExtensionPropertyAttributeDto>}
     * @memberof ExtensionPropertyDto
     */
    attributes?: Array<ExtensionPropertyAttributeDto> | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ExtensionPropertyDto
     */
    _configuration?: { [key: string]: any; } | null;
    /**
     * 
     * @type {any}
     * @memberof ExtensionPropertyDto
     */
    defaultValue?: any | null;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyUiDto
 */
export interface ExtensionPropertyUiDto {
    /**
     * 
     * @type {ExtensionPropertyUiTableDto}
     * @memberof ExtensionPropertyUiDto
     */
    onTable?: ExtensionPropertyUiTableDto;
    /**
     * 
     * @type {ExtensionPropertyUiFormDto}
     * @memberof ExtensionPropertyUiDto
     */
    onCreateForm?: ExtensionPropertyUiFormDto;
    /**
     * 
     * @type {ExtensionPropertyUiFormDto}
     * @memberof ExtensionPropertyUiDto
     */
    onEditForm?: ExtensionPropertyUiFormDto;
    /**
     * 
     * @type {ExtensionPropertyUiLookupDto}
     * @memberof ExtensionPropertyUiDto
     */
    lookup?: ExtensionPropertyUiLookupDto;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyUiFormDto
 */
export interface ExtensionPropertyUiFormDto {
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionPropertyUiFormDto
     */
    isVisible?: boolean;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyUiLookupDto
 */
export interface ExtensionPropertyUiLookupDto {
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyUiLookupDto
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyUiLookupDto
     */
    resultListPropertyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyUiLookupDto
     */
    displayPropertyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyUiLookupDto
     */
    valuePropertyName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ExtensionPropertyUiLookupDto
     */
    filterParamName?: string | null;
}
/**
 * 
 * @export
 * @interface ExtensionPropertyUiTableDto
 */
export interface ExtensionPropertyUiTableDto {
    /**
     * 
     * @type {boolean}
     * @memberof ExtensionPropertyUiTableDto
     */
    isVisible?: boolean;
}
/**
 * 
 * @export
 * @interface FeatureDto
 */
export interface FeatureDto {
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    value?: string | null;
    /**
     * 
     * @type {FeatureProviderDto}
     * @memberof FeatureDto
     */
    provider?: FeatureProviderDto;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    description?: string | null;
    /**
     * 
     * @type {IStringValueType}
     * @memberof FeatureDto
     */
    valueType?: IStringValueType;
    /**
     * 
     * @type {number}
     * @memberof FeatureDto
     */
    depth?: number;
    /**
     * 
     * @type {string}
     * @memberof FeatureDto
     */
    parentName?: string | null;
}
/**
 * 
 * @export
 * @interface FeatureGroupDto
 */
export interface FeatureGroupDto {
    /**
     * 
     * @type {string}
     * @memberof FeatureGroupDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FeatureGroupDto
     */
    displayName?: string | null;
    /**
     * 
     * @type {Array<FeatureDto>}
     * @memberof FeatureGroupDto
     */
    features?: Array<FeatureDto> | null;
}
/**
 * 
 * @export
 * @interface FeatureProviderDto
 */
export interface FeatureProviderDto {
    /**
     * 
     * @type {string}
     * @memberof FeatureProviderDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FeatureProviderDto
     */
    key?: string | null;
}
/**
 * 
 * @export
 * @interface FindTenantResultDto
 */
export interface FindTenantResultDto {
    /**
     * 
     * @type {boolean}
     * @memberof FindTenantResultDto
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FindTenantResultDto
     */
    tenantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FindTenantResultDto
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof FindTenantResultDto
     */
    isActive?: boolean;
}
/**
 * 
 * @export
 * @interface GetFeatureListResultDto
 */
export interface GetFeatureListResultDto {
    /**
     * 
     * @type {Array<FeatureGroupDto>}
     * @memberof GetFeatureListResultDto
     */
    groups?: Array<FeatureGroupDto> | null;
}
/**
 * 
 * @export
 * @interface GetPermissionListResultDto
 */
export interface GetPermissionListResultDto {
    /**
     * 
     * @type {string}
     * @memberof GetPermissionListResultDto
     */
    entityDisplayName?: string | null;
    /**
     * 
     * @type {Array<PermissionGroupDto>}
     * @memberof GetPermissionListResultDto
     */
    groups?: Array<PermissionGroupDto> | null;
}
/**
 * 
 * @export
 * @interface IStringValueType
 */
export interface IStringValueType {
    /**
     * 
     * @type {string}
     * @memberof IStringValueType
     */
    readonly name?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IStringValueType
     */
    readonly properties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {IValueValidator}
     * @memberof IStringValueType
     */
    validator?: IValueValidator;
}
/**
 * 
 * @export
 * @interface IValueValidator
 */
export interface IValueValidator {
    /**
     * 
     * @type {string}
     * @memberof IValueValidator
     */
    readonly name?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IValueValidator
     */
    readonly properties?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface IanaTimeZone
 */
export interface IanaTimeZone {
    /**
     * 
     * @type {string}
     * @memberof IanaTimeZone
     */
    timeZoneName?: string | null;
}
/**
 * 
 * @export
 * @interface IdentityRoleCreateDto
 */
export interface IdentityRoleCreateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityRoleCreateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleCreateDto
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleCreateDto
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleCreateDto
     */
    isPublic?: boolean;
}
/**
 * 
 * @export
 * @interface IdentityRoleDto
 */
export interface IdentityRoleDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityRoleDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleDto
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleDto
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleDto
     */
    isStatic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleDto
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface IdentityRoleDtoListResultDto
 */
export interface IdentityRoleDtoListResultDto {
    /**
     * 
     * @type {Array<IdentityRoleDto>}
     * @memberof IdentityRoleDtoListResultDto
     */
    items?: Array<IdentityRoleDto> | null;
}
/**
 * 
 * @export
 * @interface IdentityRoleDtoPagedResultDto
 */
export interface IdentityRoleDtoPagedResultDto {
    /**
     * 
     * @type {Array<IdentityRoleDto>}
     * @memberof IdentityRoleDtoPagedResultDto
     */
    items?: Array<IdentityRoleDto> | null;
    /**
     * 
     * @type {number}
     * @memberof IdentityRoleDtoPagedResultDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface IdentityRoleUpdateDto
 */
export interface IdentityRoleUpdateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityRoleUpdateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleUpdateDto
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleUpdateDto
     */
    isDefault?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityRoleUpdateDto
     */
    isPublic?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityRoleUpdateDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface IdentityUserCreateDto
 */
export interface IdentityUserCreateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityUserCreateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserCreateDto
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserCreateDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserCreateDto
     */
    surname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserCreateDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserCreateDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserCreateDto
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserCreateDto
     */
    lockoutEnabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentityUserCreateDto
     */
    roleNames?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserCreateDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface IdentityUserDto
 */
export interface IdentityUserDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityUserDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    creationTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    creatorId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    lastModificationTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    lastModifierId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    deleterId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    deletionTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    tenantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    surname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    emailConfirmed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    phoneNumberConfirmed?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserDto
     */
    lockoutEnabled?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof IdentityUserDto
     */
    lockoutEnd?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface IdentityUserDtoPagedResultDto
 */
export interface IdentityUserDtoPagedResultDto {
    /**
     * 
     * @type {Array<IdentityUserDto>}
     * @memberof IdentityUserDtoPagedResultDto
     */
    items?: Array<IdentityUserDto> | null;
    /**
     * 
     * @type {number}
     * @memberof IdentityUserDtoPagedResultDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface IdentityUserUpdateDto
 */
export interface IdentityUserUpdateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IdentityUserUpdateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    surname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserUpdateDto
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IdentityUserUpdateDto
     */
    lockoutEnabled?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentityUserUpdateDto
     */
    roleNames?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    password?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IdentityUserUpdateDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface IdentityUserUpdateRolesDto
 */
export interface IdentityUserUpdateRolesDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof IdentityUserUpdateRolesDto
     */
    roleNames: Array<string>;
}
/**
 * 
 * @export
 * @interface InterfaceMethodApiDescriptionModel
 */
export interface InterfaceMethodApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof InterfaceMethodApiDescriptionModel
     */
    name?: string | null;
    /**
     * 
     * @type {Array<MethodParameterApiDescriptionModel>}
     * @memberof InterfaceMethodApiDescriptionModel
     */
    parametersOnMethod?: Array<MethodParameterApiDescriptionModel> | null;
    /**
     * 
     * @type {ReturnValueApiDescriptionModel}
     * @memberof InterfaceMethodApiDescriptionModel
     */
    returnValue?: ReturnValueApiDescriptionModel;
}
/**
 * 
 * @export
 * @interface LanguageInfo
 */
export interface LanguageInfo {
    /**
     * 
     * @type {string}
     * @memberof LanguageInfo
     */
    cultureName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LanguageInfo
     */
    uiCultureName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LanguageInfo
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LanguageInfo
     */
    readonly twoLetterISOLanguageName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LanguageInfo
     */
    flagIcon?: string | null;
}
/**
 * 
 * @export
 * @interface LocalizableStringDto
 */
export interface LocalizableStringDto {
    /**
     * 
     * @type {string}
     * @memberof LocalizableStringDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocalizableStringDto
     */
    resource?: string | null;
}

/**
 * 
 * @export
 */
export const LoginResultType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type LoginResultType = typeof LoginResultType[keyof typeof LoginResultType];

/**
 * 
 * @export
 * @interface MediaFileDto
 */
export interface MediaFileDto {
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof MediaFileDto
     */
    creationTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    creatorId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof MediaFileDto
     */
    lastModificationTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    lastModifierId?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MediaFileDto
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    deleterId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof MediaFileDto
     */
    deletionTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    thumbnailPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    path?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    extension?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MediaFileDto
     */
    type?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MediaFileDto
     */
    size?: number;
}
/**
 * 
 * @export
 * @interface MediaFileDtoPagedResultDto
 */
export interface MediaFileDtoPagedResultDto {
    /**
     * 
     * @type {Array<MediaFileDto>}
     * @memberof MediaFileDtoPagedResultDto
     */
    items?: Array<MediaFileDto> | null;
    /**
     * 
     * @type {number}
     * @memberof MediaFileDtoPagedResultDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface MethodParameterApiDescriptionModel
 */
export interface MethodParameterApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof MethodParameterApiDescriptionModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MethodParameterApiDescriptionModel
     */
    typeAsString?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MethodParameterApiDescriptionModel
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MethodParameterApiDescriptionModel
     */
    typeSimple?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MethodParameterApiDescriptionModel
     */
    isOptional?: boolean;
    /**
     * 
     * @type {any}
     * @memberof MethodParameterApiDescriptionModel
     */
    defaultValue?: any | null;
}
/**
 * 
 * @export
 * @interface ModuleApiDescriptionModel
 */
export interface ModuleApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof ModuleApiDescriptionModel
     */
    rootPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModuleApiDescriptionModel
     */
    remoteServiceName?: string | null;
    /**
     * 
     * @type {{ [key: string]: ControllerApiDescriptionModel; }}
     * @memberof ModuleApiDescriptionModel
     */
    controllers?: { [key: string]: ControllerApiDescriptionModel; } | null;
}
/**
 * 
 * @export
 * @interface ModuleExtensionDto
 */
export interface ModuleExtensionDto {
    /**
     * 
     * @type {{ [key: string]: EntityExtensionDto; }}
     * @memberof ModuleExtensionDto
     */
    entities?: { [key: string]: EntityExtensionDto; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModuleExtensionDto
     */
    _configuration?: { [key: string]: any; } | null;
}
/**
 * 
 * @export
 * @interface MultiTenancyInfoDto
 */
export interface MultiTenancyInfoDto {
    /**
     * 
     * @type {boolean}
     * @memberof MultiTenancyInfoDto
     */
    isEnabled?: boolean;
}
/**
 * 
 * @export
 * @interface NameValue
 */
export interface NameValue {
    /**
     * 
     * @type {string}
     * @memberof NameValue
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NameValue
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface ObjectExtensionsDto
 */
export interface ObjectExtensionsDto {
    /**
     * 
     * @type {{ [key: string]: ModuleExtensionDto; }}
     * @memberof ObjectExtensionsDto
     */
    modules?: { [key: string]: ModuleExtensionDto; } | null;
    /**
     * 
     * @type {{ [key: string]: ExtensionEnumDto; }}
     * @memberof ObjectExtensionsDto
     */
    enums?: { [key: string]: ExtensionEnumDto; } | null;
}
/**
 * 
 * @export
 * @interface ParameterApiDescriptionModel
 */
export interface ParameterApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    nameOnMethod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    jsonName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    typeSimple?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ParameterApiDescriptionModel
     */
    isOptional?: boolean;
    /**
     * 
     * @type {any}
     * @memberof ParameterApiDescriptionModel
     */
    defaultValue?: any | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ParameterApiDescriptionModel
     */
    constraintTypes?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    bindingSourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ParameterApiDescriptionModel
     */
    descriptorName?: string | null;
}
/**
 * 
 * @export
 * @interface PermissionGrantInfoDto
 */
export interface PermissionGrantInfoDto {
    /**
     * 
     * @type {string}
     * @memberof PermissionGrantInfoDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionGrantInfoDto
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionGrantInfoDto
     */
    parentName?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PermissionGrantInfoDto
     */
    isGranted?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PermissionGrantInfoDto
     */
    allowedProviders?: Array<string> | null;
    /**
     * 
     * @type {Array<ProviderInfoDto>}
     * @memberof PermissionGrantInfoDto
     */
    grantedProviders?: Array<ProviderInfoDto> | null;
}
/**
 * 
 * @export
 * @interface PermissionGroupDto
 */
export interface PermissionGroupDto {
    /**
     * 
     * @type {string}
     * @memberof PermissionGroupDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionGroupDto
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionGroupDto
     */
    displayNameKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PermissionGroupDto
     */
    displayNameResource?: string | null;
    /**
     * 
     * @type {Array<PermissionGrantInfoDto>}
     * @memberof PermissionGroupDto
     */
    permissions?: Array<PermissionGrantInfoDto> | null;
}
/**
 * 
 * @export
 * @interface ProfileDto
 */
export interface ProfileDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ProfileDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    surname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileDto
     */
    isExternal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileDto
     */
    hasPassword?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProfileDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface PropertyApiDescriptionModel
 */
export interface PropertyApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    jsonName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    typeSimple?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PropertyApiDescriptionModel
     */
    isRequired?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PropertyApiDescriptionModel
     */
    minLength?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PropertyApiDescriptionModel
     */
    maxLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    minimum?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    maximum?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyApiDescriptionModel
     */
    regex?: string | null;
}
/**
 * 
 * @export
 * @interface ProviderInfoDto
 */
export interface ProviderInfoDto {
    /**
     * 
     * @type {string}
     * @memberof ProviderInfoDto
     */
    providerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProviderInfoDto
     */
    providerKey?: string | null;
}
/**
 * 
 * @export
 * @interface RegisterDto
 */
export interface RegisterDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RegisterDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    emailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterDto
     */
    appName: string;
}
/**
 * 
 * @export
 * @interface RemoteServiceErrorInfo
 */
export interface RemoteServiceErrorInfo {
    /**
     * 
     * @type {string}
     * @memberof RemoteServiceErrorInfo
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteServiceErrorInfo
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteServiceErrorInfo
     */
    details?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof RemoteServiceErrorInfo
     */
    data?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteServiceValidationErrorInfo>}
     * @memberof RemoteServiceErrorInfo
     */
    validationErrors?: Array<RemoteServiceValidationErrorInfo> | null;
}
/**
 * 
 * @export
 * @interface RemoteServiceErrorResponse
 */
export interface RemoteServiceErrorResponse {
    /**
     * 
     * @type {RemoteServiceErrorInfo}
     * @memberof RemoteServiceErrorResponse
     */
    error?: RemoteServiceErrorInfo;
}
/**
 * 
 * @export
 * @interface RemoteServiceValidationErrorInfo
 */
export interface RemoteServiceValidationErrorInfo {
    /**
     * 
     * @type {string}
     * @memberof RemoteServiceValidationErrorInfo
     */
    message?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RemoteServiceValidationErrorInfo
     */
    members?: Array<string> | null;
}
/**
 * 
 * @export
 * @interface ResetPasswordDto
 */
export interface ResetPasswordDto {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordDto
     */
    resetToken: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface ReturnValueApiDescriptionModel
 */
export interface ReturnValueApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof ReturnValueApiDescriptionModel
     */
    type?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReturnValueApiDescriptionModel
     */
    typeSimple?: string | null;
}
/**
 * 
 * @export
 * @interface SendPasswordResetCodeDto
 */
export interface SendPasswordResetCodeDto {
    /**
     * 
     * @type {string}
     * @memberof SendPasswordResetCodeDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof SendPasswordResetCodeDto
     */
    appName: string;
    /**
     * 
     * @type {string}
     * @memberof SendPasswordResetCodeDto
     */
    returnUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SendPasswordResetCodeDto
     */
    returnUrlHash?: string | null;
}
/**
 * 
 * @export
 * @interface SendTestEmailInput
 */
export interface SendTestEmailInput {
    /**
     * 
     * @type {string}
     * @memberof SendTestEmailInput
     */
    senderEmailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof SendTestEmailInput
     */
    targetEmailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof SendTestEmailInput
     */
    subject: string;
    /**
     * 
     * @type {string}
     * @memberof SendTestEmailInput
     */
    body?: string | null;
}
/**
 * 
 * @export
 * @interface TenantCreateDto
 */
export interface TenantCreateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TenantCreateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof TenantCreateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TenantCreateDto
     */
    adminEmailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof TenantCreateDto
     */
    adminPassword: string;
}
/**
 * 
 * @export
 * @interface TenantDto
 */
export interface TenantDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TenantDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof TenantDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TenantDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface TenantDtoPagedResultDto
 */
export interface TenantDtoPagedResultDto {
    /**
     * 
     * @type {Array<TenantDto>}
     * @memberof TenantDtoPagedResultDto
     */
    items?: Array<TenantDto> | null;
    /**
     * 
     * @type {number}
     * @memberof TenantDtoPagedResultDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface TenantUpdateDto
 */
export interface TenantUpdateDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TenantUpdateDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof TenantUpdateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TenantUpdateDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface TimeZone
 */
export interface TimeZone {
    /**
     * 
     * @type {IanaTimeZone}
     * @memberof TimeZone
     */
    iana?: IanaTimeZone;
    /**
     * 
     * @type {WindowsTimeZone}
     * @memberof TimeZone
     */
    windows?: WindowsTimeZone;
}
/**
 * 
 * @export
 * @interface TimingDto
 */
export interface TimingDto {
    /**
     * 
     * @type {TimeZone}
     * @memberof TimingDto
     */
    timeZone?: TimeZone;
}
/**
 * 
 * @export
 * @interface TypeApiDescriptionModel
 */
export interface TypeApiDescriptionModel {
    /**
     * 
     * @type {string}
     * @memberof TypeApiDescriptionModel
     */
    baseType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof TypeApiDescriptionModel
     */
    isEnum?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypeApiDescriptionModel
     */
    enumNames?: Array<string> | null;
    /**
     * 
     * @type {Array<any>}
     * @memberof TypeApiDescriptionModel
     */
    enumValues?: Array<any> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TypeApiDescriptionModel
     */
    genericArguments?: Array<string> | null;
    /**
     * 
     * @type {Array<PropertyApiDescriptionModel>}
     * @memberof TypeApiDescriptionModel
     */
    properties?: Array<PropertyApiDescriptionModel> | null;
}
/**
 * 
 * @export
 * @interface UpdateEmailSettingsDto
 */
export interface UpdateEmailSettingsDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateEmailSettingsDto
     */
    smtpHost?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateEmailSettingsDto
     */
    smtpPort?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateEmailSettingsDto
     */
    smtpUserName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateEmailSettingsDto
     */
    smtpPassword?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateEmailSettingsDto
     */
    smtpDomain?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEmailSettingsDto
     */
    smtpEnableSsl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateEmailSettingsDto
     */
    smtpUseDefaultCredentials?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateEmailSettingsDto
     */
    defaultFromAddress: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateEmailSettingsDto
     */
    defaultFromDisplayName: string;
}
/**
 * 
 * @export
 * @interface UpdateFeatureDto
 */
export interface UpdateFeatureDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateFeatureDto
     */
    value?: string | null;
}
/**
 * 
 * @export
 * @interface UpdateFeaturesDto
 */
export interface UpdateFeaturesDto {
    /**
     * 
     * @type {Array<UpdateFeatureDto>}
     * @memberof UpdateFeaturesDto
     */
    features?: Array<UpdateFeatureDto> | null;
}
/**
 * 
 * @export
 * @interface UpdatePermissionDto
 */
export interface UpdatePermissionDto {
    /**
     * 
     * @type {string}
     * @memberof UpdatePermissionDto
     */
    name?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdatePermissionDto
     */
    isGranted?: boolean;
}
/**
 * 
 * @export
 * @interface UpdatePermissionsDto
 */
export interface UpdatePermissionsDto {
    /**
     * 
     * @type {Array<UpdatePermissionDto>}
     * @memberof UpdatePermissionsDto
     */
    permissions?: Array<UpdatePermissionDto> | null;
}
/**
 * 
 * @export
 * @interface UpdateProfileDto
 */
export interface UpdateProfileDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateProfileDto
     */
    readonly extraProperties?: { [key: string]: any; } | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileDto
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileDto
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileDto
     */
    surname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileDto
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateProfileDto
     */
    concurrencyStamp?: string | null;
}
/**
 * 
 * @export
 * @interface UserData
 */
export interface UserData {
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    tenantId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    userName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    surname?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserData
     */
    isActive?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    email?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserData
     */
    emailConfirmed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserData
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserData
     */
    phoneNumberConfirmed?: boolean;
}
/**
 * 
 * @export
 * @interface UserDataListResultDto
 */
export interface UserDataListResultDto {
    /**
     * 
     * @type {Array<UserData>}
     * @memberof UserDataListResultDto
     */
    items?: Array<UserData> | null;
}
/**
 * 
 * @export
 * @interface UserLoginInfo
 */
export interface UserLoginInfo {
    /**
     * 
     * @type {string}
     * @memberof UserLoginInfo
     */
    userNameOrEmailAddress: string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginInfo
     */
    password: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserLoginInfo
     */
    rememberMe?: boolean;
}
/**
 * 
 * @export
 * @interface VerifyPasswordResetTokenInput
 */
export interface VerifyPasswordResetTokenInput {
    /**
     * 
     * @type {string}
     * @memberof VerifyPasswordResetTokenInput
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof VerifyPasswordResetTokenInput
     */
    resetToken: string;
}
/**
 * 
 * @export
 * @interface WindowsTimeZone
 */
export interface WindowsTimeZone {
    /**
     * 
     * @type {string}
     * @memberof WindowsTimeZone
     */
    timeZoneId?: string | null;
}
