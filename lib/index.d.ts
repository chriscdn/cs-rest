import * as axios from 'axios';
import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

type ErrorMessage = {
    message: string;
    code: number;
    data: Array<any> | Record<string, any>;
};
declare class RPCError extends Error {
    code: number;
    data: Array<any> | Record<string, any>;
    constructor(message?: string | ErrorMessage, data?: any, code?: number);
}

interface CSRestOptions {
    username?: string;
    password?: string;
    otcsticket?: string;
    baseUrl: string;
}

declare class ServiceAbstract {
    protected _session: WeakRef<Session>;
    constructor(session: Session);
    get session(): Session;
}

declare class Auth extends ServiceAbstract {
    auth(): Promise<axios.AxiosResponse<any, any>>;
}

declare class Nodes extends ServiceAbstract {
    addablenodetypes(dataid: any): Promise<axios.AxiosResponse<any, any>>;
    addDocument({ parent_id, fileHandler, apiVersion, // v1 or v2
    name, options, }: {
        parent_id: any;
        fileHandler: any;
        apiVersion?: string;
        name?: any;
        options?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    addDocumentMajor({ parent_id, fileHandler, name, description, options, }: {
        parent_id: any;
        fileHandler: any;
        name?: any;
        description?: any;
        options?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    addItem(type: any, parent_id: any, name: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    node({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    ancestors(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    volumeInfo(objType: any): Promise<axios.AxiosResponse<any, any>>;
    volumes(): Promise<axios.AxiosResponse<any, any>>;
    addFolder(parent_id: any, name: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    addGeneration(parent_id: any, name: any, original_id: any, version_number: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    nodes(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    children(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    delete(dataid: any): Promise<axios.AxiosResponse<any, any>>;
    download({ dataid, apiVersion, filePath }: {
        dataid: any;
        apiVersion?: string;
        filePath: any;
    }): Promise<unknown>;
    audit({ dataid, apiVersion, params }: {
        dataid: any;
        apiVersion?: string;
        params?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
}

interface components {
  schemas: {
    /** @description Forces the server to always return a HTTP Response of '200 OK'. The data returned from the call will have an additional integer feature named 'statusCode', which will contain the actual status code (the 'statusCode' feature will be added regardless of whether the REST API call was successful or not). */
    suppress_response_codes: string;
    apiinfo: {
      /**
       * Format: string
       * @description If the DELETE method is available, information for this REST API call will be displayed.
       */
      DELETE?: string;
      /**
       * Format: string
       * @description If the GET method is available, information for this REST API call will be displayed.
       */
      GET?: string;
      /**
       * Format: string
       * @description If the POST method is available, information for this REST API call will be displayed.
       */
      POST?: string;
      /**
       * Format: string
       * @description If the PUT method is available, information for this REST API call will be displayed.
       */
      PUT?: string;
    };
    auth_UserInfo: {
      /** @description User Data */
      data?: components["schemas"]["auth_Data"][];
    };
    auth_Data: {
      /** @description The user's birthday */
      birth_date?: string;
      /** @description The user's business e-mail address */
      business_email?: string;
      /** @description The user's business fax number */
      business_fax?: string;
      /** @description The user's business phone number */
      business_phone?: string;
      /** @description The user's personal cellphone number */
      cell_phone?: string;
      /** @description TRUE if the user has been deleted, FALSE otherwise */
      deleted?: boolean;
      /** @description The user's preferred language */
      display_language?: string;
      /** @description The user's displayed name */
      display_name?: string;
      /** @description The user's first name */
      first_name?: string;
      /** @description The user's gender. null = <gender not set>, 0 = male, 1 = female. Any integers greater than 1 refer to additional custom genders, which can be configured in Content Server under 'Configure Gender Settings'. */
      gender?: number;
      /** @description The ID of the user's base group */
      group_id?: number;
      /** @description The user's first home address */
      home_address_1?: string;
      /** @description The user's second home address */
      home_address_2?: string;
      /** @description The user's home fax number */
      home_fax?: string;
      /** @description The user's home phone number */
      home_phone?: string;
      /** @description A unique identifier for the user */
      id?: number;
      /** @description The user's initials */
      initials?: string;
      /** @description The user's last name */
      last_name?: string;
      /** @description The user's middle name */
      middle_name?: string;
      /** @description The user's log-in name */
      name?: string;
      /** @description The full address of the user's office location */
      office_location?: string;
      /** @description The user's pager number */
      pager?: string;
      /** @description The user's home email address */
      personal_email?: string;
      /** @description The user's hobbies */
      personal_interests?: string;
      /** @description The user's first favorite link */
      personal_url_1?: string;
      /** @description The user's second favorite link */
      personal_url_2?: string;
      /** @description The user's third favorite link */
      personal_url_3?: string;
      /** @description The user's homepage address */
      personal_website?: string;
      /** @description The user's photo ID */
      photo_id?: string;
      /** @description REST API URL to get the member's profile photo */
      photo_url?: string;
      /** @description TRUE if the user has the Content Manager privilege, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_content_manager?: boolean;
      /** @description TRUE if the user has eDiscovery privileges, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_grant_discovery?: boolean;
      /** @description TRUE if the user log-in is enabled, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_login?: boolean;
      /** @description TRUE if the user can create groups and modify or delete the groups that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_groups?: boolean;
      /** @description TRUE if the user can create users and modify or delete the users that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_users?: boolean;
      /** @description TRUE means the user can access to any item in the system for which the Public Access permission is activated, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_public_access?: boolean;
      /** @description TRUE means the user has full access to Content Server's administration functionality, if the user knows the administration password. This privilege also provides access to all items in the system, without filtering for permissions. This privilege does not include the ability to administer users or groups. FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_system_admin_rights?: boolean;
      /** @description TRUE if the user can create, modify, and delete any user or group, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_user_admin_rights?: boolean;
      /** @description An offset of GMT */
      time_zone?: number;
      /** @description The user's title */
      title?: string;
      /** @description The type of user or user-related entity */
      type?: number;
      /** @description The type name of user or user-related entity */
      type_name?: string;
    };
    auth_AuthenticationInfo: {
      /** @description The valid authentication ticket */
      ticket?: string;
    };
    auth_AuthenticationDelete: Record<string, any>;
    bulkactions: {
      data?: components["schemas"]["bulkactions_ActionData"];
      definitions?: components["schemas"]["bulkactions_Definitions"];
      definitions_map?: components["schemas"]["bulkactions_DefinitionsMap"];
      /** @description The order in which actions should be displayed. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
    };
    bulkactions_ActionData: Record<string, any>;
    bulkactions_Definitions: Record<string, any>;
    bulkactions_DefinitionsMap: Record<string, any>;
    categories_V2CategoriesResponseSingle: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["categories_V2DataCategories"][];
    };
    categories_V2CategoriesResponse: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["categories_V2DataCategories"][];
    };
    categories_V2CategoriesApplyResponse: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?:
        components["schemas"]["categories_V2DataCategoriesApplyResults"][];
    };
    categories_V2EmptyResponse: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["categories_V2EmptyResults"][];
    };
    categories_V2DataCategories: {
      data?: components["schemas"]["categories_V2Categories"][];
    };
    categories_V2Categories: {
      categories?: components["schemas"]["categories_V2EmptyResults"][];
    };
    categories_V2DataLinks: {
      data?: components["schemas"]["categories_V2Links"][];
    };
    categories_V2Links: {
      self?: components["schemas"]["categories_V2Link"][];
    };
    categories_V2Link: {
      body?: string;
      content_type?: string;
      href?: string;
      method?: string;
      name?: string;
    };
    categories_V2DataCategoriesApplyResults: {
      message?: string;
      processed?: number;
      skipped?: number;
    };
    categories_V2EmptyResults: Record<string, any>;
    categories_CategoriesInfo: {
      /** @description Category information */
      data?: components["schemas"]["categories_CategoriesInfoData"][];
      definitions?: components["schemas"]["categories_Definitions"];
      /** @description Default order of the fields defined in data */
      definitions_order?: string[];
      definitions_map?: components["schemas"]["categories_DefinitionsMap"];
    };
    categories_CategoriesInfoData: {
      /** @description Category ID */
      id?: number;
      /** @description Display name */
      name?: string;
    };
    categories_CategoryInfo: {
      /** @description Category information */
      data?: components["schemas"]["categories_CategoryInfoData"][];
      definitions?: components["schemas"]["categories_Definitions"];
      /** @description Default order of the fields defined in data */
      definitions_order?: string[];
      definitions_map?: components["schemas"]["categories_DefinitionsMap"];
    };
    categories_CategoryInfoData: {
      /** @description Attribute value */
      "{attribute_key}"?: string;
    };
    categories_ActionsCategoriesInfo: {
      data?: components["schemas"]["categories_ActionData"];
      definitions?: components["schemas"]["categories_Definitions"];
      definitions_map?: components["schemas"]["categories_DefinitionsMap"];
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
    };
    categories_AddCategoryResponse: Record<string, any>;
    categories_UpdateCategoryResponse: Record<string, any>;
    categories_ActionData: Record<string, any>;
    categories_Definitions: Record<string, any>;
    categories_DefinitionsMap: Record<string, any>;
    csapplications_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    csapplications_V2Results: {
      /** @description Content Server Applications Server Response */
      content?: string;
      /** @description ok is true or false */
      ok?: boolean;
    };
    csapplications_V2ResponseCSApplicationsPost: {
      links?: {
        data?: {
          self?: components["schemas"]["csapplications_V2Link"];
        };
      };
      results?: {
        data?: {
          properties?: components["schemas"]["csapplications_V2Results"];
        };
      };
    };
    doctemplates_DocumentTemplateInstanceInfo: {
      /**
       * Format: integer
       * @description The valid document template InstanceID
       */
      id: number;
      /**
       * Format: integer
       * @description The valid cacheID generated and used while instance creation
       */
      cacheId: number;
    };
    documentproperties_InsertablePropertiesRow: {
      /** @description The localized name of the insertable property. */
      name?: string;
      /** @description The name of the file property to write the value to. */
      property?: string;
      /** @description The value of the content server attribute the insertable property represents. */
      value?: string;
      /** @description The value with possible formatting or conversion applied. */
      value_formatted?: string;
    };
    draftprocesses_DraftProcess_V2EmptyResponse: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["draftprocesses_DraftProcess"][];
    };
    draftprocesses_DraftProcess_PutV2EmptyResponse: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["draftprocesses_DraftProcess_Put"][];
    };
    draftprocesses_DraftProcess: {
      /** @description The id of the created draft process */
      draftprocess_id: number;
      /** @description String composition of  workData.type_workData.subtype , example  1_1 */
      workflow_type?: string;
    };
    draftprocesses_DraftProcess_Put: {
      /** @description custom_message,If exist */
      custom_message: string;
      /** @description process_id */
      process_id: number;
    };
    draftprocesses_DraftProcess_Authentication: {
      /** @description Authentication Required */
      error: string;
    };
    draftprocesses_DraftProcess_NodeNotFound: {
      /** @description <ul><li>Could not Loadmap.</li><li>Workflow Map has no versions.</li><li>Error getting node from ID</li> <li>Could not retrieve specified version from map.</li></ul> */
      error: string;
    };
    export_Export: {
      /** @description Indicates report should include default values */
      includeDefaults?: boolean;
      /** @description Extension of report format */
      fileFormat?: string;
    };
    facets_FacetResponse: {
      /** @description Links */
      links?: components["schemas"]["facets_DataLinks"][];
      /** @description results */
      results?: components["schemas"]["facets_Results"][];
    };
    facets_DataLinks: {
      data?: components["schemas"]["facets_Links"][];
    };
    facets_Links: {
      /** @description Self link */
      self?: components["schemas"]["facets_Link"][];
    };
    facets_Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    facets_Results: {
      data?: components["schemas"]["facets_Data"][];
    };
    facets_Data: {
      facets?: components["schemas"]["facets_Facet"][];
      values?: components["schemas"]["facets_Values"][];
    };
    facets_Values: {
      available?: components["schemas"]["facets_Value"][];
      selected?: components["schemas"]["facets_Value"][];
    };
    facets_Facet: {
      /** @description TRUE if count information is available and should be displayed; FALSE otherwise */
      display_count?: boolean;
      /** @description The ID of the Facet */
      id?: number;
      /** @description The name of the Facet */
      name?: string;
      /** @description The number of available options to display */
      total_displayable?: number;
    };
    facets_Value: {
      /** @description The number of matched objects for the given option */
      count?: number;
      /** @description The name of the option */
      name?: string;
      /** @description The percentage of objects which contain this option */
      percentage?: number;
      /** @description The internal value of this option */
      value?: string;
    };
    forms_CategoriesCreateFormInfo: {
      data?: components["schemas"]["forms_CategoriesData"];
      options?: components["schemas"]["forms_CategoriesCreateOptions"];
      schema?: components["schemas"]["forms_CategoriesCreateSchema"];
    };
    forms_CategoriesUpdateFormInfo: {
      /** @description Category attributes and their values for the category applied to the node */
      data?: Record<string, any>;
      options?: components["schemas"]["forms_CategoriesUpdateOptions"];
      schema?: components["schemas"]["forms_CategoriesUpdateSchema"];
    };
    forms_CopyFormInfo: {
      /** @description The array containing the information on the object being copied. The first element contains node data, the elements following contain optional data */
      form?: components["schemas"]["forms_CopyInfo"][];
    };
    forms_CreateFormInfo: {
      /** @description The array containing the information on the object being created. The first element contains node data, the elements following contain optional data */
      form?: components["schemas"]["forms_CreateInfo"][];
    };
    forms_GetFormFileNodeInfo: {
      /** @description The array containing the information on the object being filed. The first element contains node data, the elements following contain optional data */
      forms?: components["schemas"]["forms_FileNodeInfo"][];
    };
    forms_RunPropertiesFormInfo: {
      data?: components["schemas"]["forms_RunPropertiesFormData"];
      /** @description The array containing the information on WebReport parameters to be displayed. The forms are displayed when a WebReport is run. */
      forms?: components["schemas"]["forms_RunFormInfo"][];
    };
    forms_RunPropertiesFormData: {
      /** @description Destination data */
      destination_data?: components["schemas"]["forms_DestinationData"][];
      /** @description Parameters data */
      parameters_data?: components["schemas"]["forms_ParametersData"][];
    };
    forms_UpdateFormInfo: {
      /** @description The array containing the forms for updating the node. The first element contains node data, the elements following contain additional data */
      forms?: components["schemas"]["forms_UpdateInfo"][];
    };
    forms_DestinationData: {
      /** @description Destination-specific data */
      destination_specific?:
        components["schemas"]["forms_DestinationSpecific"][];
      /** @description Whether the WebReport is set to export if there is no data */
      export_if_no_data?: boolean;
      /** @description The MIMEType that the WebReport output is written in */
      export_mime_type?: string;
      /** @description The http method that should be used to run the WebReport based on the destination type */
      http_method?: string;
      /** @description The WebReport destination type */
      output_destination?: string;
      /** @description Whether the WebReport is set to run in the background */
      run_in_background?: boolean;
      /** @description Schedule data */
      schedule_data?: components["schemas"]["forms_ScheduleData"][];
      /** @description Whether the WebReport is set to display a status page after it is run */
      show_status_screen?: boolean;
      /** @description Whether the conversion engine is set to be used */
      use_conversion_engine?: boolean;
      /** @description ID of the XML job ticket */
      xml_job_ticket_id?: string;
    };
    forms_DestinationSpecific: {
      /** @description (Content Server Node destination only): The names of the categories that will be applied to the output node */
      category_names?: string;
      /** @description (Content Server Node destination only): The node ID of the container that the WebReport output will be created in */
      "create_in_id (*)"?: string;
      /** @description (Content Server Node destination only): The action that the WebReport will take if a file of the same name as the WebReport output file is found in the destination container */
      duplicate_name_action?: string;
      /** @description (Content Server Node destination only): Whether the WebReport is set to output to a new node or add a version to an existing node */
      export_type?: string;
      /** @description (Content Server Node destination only): The description of the output node */
      "node_description (*)"?: string;
      /** @description (Content Server Node destination only): The name of the output node */
      "node_name (*)"?: string;
      /** @description (Content Server Node destination only): Whether the node type of the output is set to Document or Custom View */
      node_type?: string;
      /** @description (Content Server Version destination only): The node to add a version to */
      add_version_to_id?: string;
      /** @description (Content Server Version destination only): Setting used to determine whether the WebReport output should be appended into the text of an existing document */
      append_data?: string;
      /** @description (Content Server Version destination only): The end tag if the WebReport output is set to be appended into the text of an existing document between tags */
      end_tag?: string;
      /** @description (Content Server Version destination only): Whether the output should overwrite tags in the destination text if the WebReport output is set to be appended into the text of an existing document between tags */
      overwrite_tags?: string;
      /** @description (Content Server Version destination only): The start tag if the WebReport output is set to be appended into the text of an existing document between tags */
      start_tag?: string;
      /** @description (Content Server Version destination only): The description of the output version */
      "version_description (*)"?: string;
      /** @description (Content Server Version destination only): Whether the output should be added as a major or minor version */
      version_handling?: string;
      /** @description (Content Server Version destination only): The name of the output version */
      "version_name (*)"?: string;
      /** @description (Desktop destination only): The name of the file that the WebReport output is written to */
      "download_file_name (*)"?: string;
      /** @description (E-mail destination only): The name of the file attached to the e-mail */
      "attachment_name (*)"?: string;
      /** @description (E-mail destination only): Whether the WebReport output should be attached to the e-mail */
      attach_results_to_email?: boolean;
      /** @description (E-mail destination only): The e-mail address that the e-mail is being sent to */
      "email_address (*)"?: string;
      /** @description (E-mail destination only): The User ID of the Content Server user that the e-mail is being sent to */
      "email_address_user_id (*)"?: string;
      /** @description (E-mail destination only): The body text of the e-mail */
      "email_body_text (*)"?: string;
      /** @description (E-mail destination only): The node ID of the Content Server node containing the mailing list that the e-mail is being sent to */
      "email_mailing_list (*)"?: string;
      /** @description (E-mail destination only): The Subject of the e-mail */
      "email_subject (*)"?: string;
      /** @description (Form destination only): Setting used to determine how the WebReport output affects existing form data */
      append_form?: string;
      /** @description (Form destination only): The node ID of the Form being used as the destination of the WebReport */
      "form_id (*)"?: string;
      /** @description (FTP destination only): Whether the WebReport is set to login to the FTP Server anonymously */
      ftp_anonymous?: boolean;
      /** @description (FTP destination only): The action that the WebReport will take if a file of the same name as the WebReport output file is found on the destination FTP server */
      ftp_copy_options?: string;
      /** @description (FTP destination only): The relative path to the destination file from the FTP root folder */
      "ftp_file_path (*)"?: string;
      /** @description (FTP destination only): The port on the FTP server to connect to */
      ftp_port?: number;
      /** @description (FTP destination only): The IP Address or machine name of the FTP server */
      ftp_server?: string;
      /** @description (FTP destination only): The user name used for authentication on the FTP server */
      ftp_user_name?: string;
      /** @description (FTP destination only): The password used for authentication on the FTP server */
      ftp_user_password?: string;
      /** @description (Server destination only): The file path that the output will be written to on the destination server */
      "server_file_path (*)"?: string;
      /** @description (Workflow destination only): Whether the WebReport output is attached to the initiated workflow */
      workflow_attach_output?: boolean;
      /** @description (Workflow destination only): The node description of the WebReport output to be attached to the initiated workflow */
      "workflow_attachment_description (*)"?: boolean;
      /** @description (Workflow destination only): The node name of the WebReport output to be attached to the initiated workflow */
      "workflow_attachment_name (*)"?: boolean;
      /** @description (Workflow destination only): The names of the categories that will be applied to the output node to be attached to the initiated workflow */
      workflow_category_names?: boolean;
      /** @description (Workflow destination only): The description of the initiated workflow */
      "workflow_description (*)"?: string;
      /** @description (Workflow destination only): Setting used to determine whether the workflow will become due for completion */
      workflow_due?: string;
      /** @description (Workflow destination only): Number of days from initiation that the workflow will become due for completion */
      workflow_due_in?: string;
      /** @description (Workflow destination only): Date that the workflow will become due for completion */
      workflow_due_on?: string;
      /** @description (Workflow destination only): The node ID of the Workflow map being used as the destination of the WebReport */
      "workflow_map_id (*)"?: string;
      /** @description (Workflow destination only): The title of the initiated workflow */
      "workflow_title (*)"?: string;
    };
    forms_ScheduleData: {
      /** @description Whether the '5-minute-increments' setting is set */
      five_minute_increments?: boolean;
      /**
       * Format: date
       * @description The date that the WebReport is scheduled to be next run
       */
      next_run?: string;
      /** @description The repeat interval number of days that the WebReport is scheduled for */
      repeat_day?: number;
      /** @description The repeat interval number of hours that the WebReport is scheduled for */
      repeat_hour?: number;
      /** @description The repeat interval number of minutes that the WebReport is scheduled for */
      repeat_minute?: number;
      /** @description The repeat interval number of weeks that the WebReport is scheduled for */
      repeat_week?: number;
      /** @description 'intervals' if the schedule is set to run using repeat intervals or 'specific' if the schedule is set to run on specific days of the month */
      run_condition?: string;
      /** @description List containing the dates of the month that the report is scheduled to run on */
      run_on_dates?: string;
      /** @description List containing the weeks of the month that the report is scheduled to run on */
      run_on_weeks_month?: string;
      /** @description List containing the days of the month that the report is scheduled to run on */
      run_on_days_month?: string;
      /** @description List containing the days of the week that the report is scheduled to run on */
      run_on_days_week?: string;
      /** @description The specific number of times that the WebReport will run, or -1 for forever */
      run_times?: number;
      /** @description Whether the schedule is enabled */
      schedule_enabled?: boolean;
      /** @description The User ID of the user that created the schedule */
      user_id?: number;
    };
    forms_ParametersData: {
      /** @description ID of the prompt file */
      prompt_file_id?: string;
      /** @description Whether the parameter descriptions are set to be displayed */
      show_descriptions?: boolean;
    };
    forms_RunFormInfo: {
      /** @description Dynamic data for the WebReport parameters to be displayed */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for displaying WebReport parameters */
      schema?: Record<string, any>;
    };
    forms_GeneralPropertiesFormInfo: {
      data?: components["schemas"]["forms_GeneralPropertiesInfo"];
      options?: components["schemas"]["forms_PropertiesOptions"];
      schema?: components["schemas"]["forms_PropertiesSchema"];
    };
    forms_VersionGeneralPropertiesFormInfo: {
      data?: components["schemas"]["forms_VersionGeneralPropertiesInfo"];
      options?: components["schemas"]["forms_PropertiesOptions"];
      schema?: components["schemas"]["forms_PropertiesSchema"];
    };
    forms_VersionSpecificPropertiesFormInfo: {
      data?: components["schemas"]["forms_VersionSpecificPropertiesInfo"];
      options?: components["schemas"]["forms_PropertiesOptions"];
      schema?: components["schemas"]["forms_PropertiesSchema"];
    };
    forms_SpecificPropertiesFormInfo: {
      /** @description Dynamic data about the node */
      data?: Record<string, any>;
      options?: components["schemas"]["forms_PropertiesOptions"];
      schema?: components["schemas"]["forms_PropertiesSchema"];
    };
    forms_MoveFormInfo: {
      /** @description The array containing the information on the object being moved. The first element contains node data, the elements following contain optional data */
      form?: components["schemas"]["forms_MoveInfo"][];
    };
    forms_CopyInfo: {
      /** @description Dynamic data for the node being copied */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for copying the node */
      schema?: Record<string, any>;
    };
    forms_MoveInfo: {
      /** @description Dynamic data for the node being moved */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for moving the node */
      schema?: Record<string, any>;
    };
    forms_CreateInfo: {
      /** @description Dynamic data for the node being created */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for creating the node */
      schema?: Record<string, any>;
    };
    forms_FileNodeInfo: {
      data?: components["schemas"]["forms_FileNodeInfoData"];
      options?: components["schemas"]["forms_FileNodeInfoOptions"];
      schema?: components["schemas"]["forms_FileNodeInfoSchema"];
    };
    forms_FileNodeInfoData: {
      /** @description Always contains the Filing Destination ID set to null */
      filing_destination_id?: number;
      /** @description Always contains the Filing Classification ID set to null */
      filing_classification_id?: number;
    };
    forms_FileNodeInfoOptions: {
      fields?: components["schemas"]["forms_FileNodeInfoOptionsFields"];
      form?: components["schemas"]["forms_PropertiesForm"];
    };
    forms_FileNodeInfoOptionsFields: {
      filing_destination_id?:
        components["schemas"][
          "forms_FileNodeInfoFilingDestinationIDOptionsField"
        ];
      filing_classification_id?:
        components["schemas"][
          "forms_FileNodeInfoFilingClassificationIDOptionsField"
        ];
    };
    forms_FileNodeInfoOptionsField: {
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description Integer values representing selectable node types ( ex.0 = Folders, 144 = Documents, 131 = Category etc. ) */
      select_types?: number[];
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
      type_control?: components["schemas"]["forms_type_control"];
    };
    forms_FileNodeInfoFilingDestinationIDOptionsField: {
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
      type_control?: components["schemas"]["file_FilingDestinationIDControl"];
    };
    file_FilingDestinationIDControl: {
      parameters?:
        components["schemas"]["file_FilingDestinationIDControlParameters"];
    };
    file_FilingDestinationIDControlParameters: {
      /** @description The search type (ex. startsWith) */
      search_type?: string;
      /** @description Integer values representing Workspace Types */
      workspace_types?: number[];
    };
    forms_FileNodeInfoFilingClassificationIDOptionsField: {
      /** @description The ID of the Business Workspace Template */
      businessWorkspaceId?: number;
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_FileNodeInfoSchema: {
      properties?: components["schemas"]["forms_FileNodeInfoSchemaProperties"];
      type?: string;
    };
    forms_FileNodeInfoSchemaProperties: {
      filing_destination_id?:
        components["schemas"]["forms_FilingDestinationIDSchemaProperties"];
      filing_classification_id?:
        components["schemas"]["forms_FilingClassificationIDSchemaProperties"];
    };
    forms_FilingDestinationIDSchemaProperties: {
      /** @description The description of the alpaca field */
      description?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description True if the alpaca field is required, false otherwise */
      required?: boolean;
      /** @description The label of the alpaca field */
      title?: string;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_FilingClassificationIDSchemaProperties: {
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description True if the alpaca field is required, false otherwise */
      required?: boolean;
      /** @description The label of the alpaca field */
      title?: string;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_GeneralPropertiesInfo: {
      /** @description Name of the node */
      name?: string;
      /** @description Description of the node */
      description?: string;
      /**
       * Format: date-time
       * @description Date of node creation
       */
      create_date?: string;
      /** @description User ID of the node's creator */
      create_user_id?: number;
      /** @description Node data type */
      type?: number;
      /**
       * Format: date-time
       * @description Date the node was last modified
       */
      modified_date?: string;
      /** @description User ID of the node's owner */
      owner_user_id?: number;
    };
    forms_UpdateInfo: {
      /** @description Dynamic data for the node being updated */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for updating the node */
      schema?: Record<string, any>;
    };
    forms_VersionGeneralPropertiesInfo: {
      /** @description Description of the version */
      description?: string;
      /** @description Version number of the node */
      version_number?: number;
      /** @description Version number of the node */
      version_number_name?: string;
      /**
       * Format: date-time
       * @description Date the version was created
       */
      create_date?: string;
      /** @description User ID of the versions's owner */
      owner_id?: number;
      /**
       * Format: date-time
       * @description Date the version was last modified
       */
      modify_date?: string;
      /** @description Storage provider name */
      provider_id?: string;
    };
    forms_VersionSpecificPropertiesInfo: {
      /** @description Mime type of the version */
      mime_type?: string;
      /** @description Version number of the node */
      version_number?: number;
      /** @description File name of the version */
      file_name?: string;
      /** @description File extension of the version */
      file_type?: string;
      /** @description Formatted file size of the versions */
      file_size_formatted?: string;
      /**
       * Format: date-time
       * @description Date the file was created
       */
      file_create_date?: string;
      /**
       * Format: date-time
       * @description Date the file was last modified
       */
      file_modify_date?: string;
    };
    forms_VersionsCategoriesFormInfo: {
      /** @description Attributes values for the categories applied to the version */
      data?: Record<string, any>;
      /** @description Display information for the categories applied to the version */
      options?: Record<string, any>;
      /** @description Definitions for the categories applied to the version */
      schema?: Record<string, any>;
    };
    forms_VersionsCreateFormInfo: {
      data?: components["schemas"]["forms_VersionsCreateInfo"];
      options?: components["schemas"]["forms_VersionsCreateOptions"];
      schema?: components["schemas"]["forms_VersionsCreateSchema"];
    };
    forms_VersionsCreateInfo: {
      /** @description Description for the new version of the node */
      description?: string;
      /** @description File for the new version of the node */
      file?: string;
    };
    forms_VersionsCreateOptions: {
      description?: components["schemas"]["forms_VersionCreateOptionsInfo"];
      file?: components["schemas"]["forms_VersionCreateOptionsInfo"];
      form?: components["schemas"]["forms_PropertiesForm"];
    };
    forms_VersionCreateOptionsInfo: {
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_VersionsCreateSchema: {
      description?: components["schemas"]["forms_VersionCreateSchemaInfo"];
      file?: components["schemas"]["forms_VersionCreateSchemaInfo"];
      /** @description Object type of the schema (always of type 'object') */
      type?: string;
    };
    forms_VersionCreateSchemaInfo: {
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description True if the alpaca field is required, false otherwise */
      required?: boolean;
      /** @description The label of the alpaca field */
      title?: string;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_VersionsUpdateFormInfo: {
      data?: components["schemas"]["forms_VersionsUpdateInfo"];
      options?: components["schemas"]["forms_VersionsUpdateOptions"];
      schema?: components["schemas"]["forms_VersionsUpdateSchema"];
    };
    forms_VersionsUpdateInfo: {
      /** @description Description for the new version of the node */
      description?: string;
      /** @description The version number of the node to update */
      version_number?: number;
    };
    forms_VersionsUpdateOptions: {
      description?: components["schemas"]["forms_VersionUpdateOptionsInfo"];
      version_number?: components["schemas"]["forms_VersionUpdateOptionsInfo"];
      form?: components["schemas"]["forms_PropertiesForm"];
    };
    forms_VersionUpdateOptionsInfo: {
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_VersionsUpdateSchema: {
      description?: components["schemas"]["forms_VersionUpdateSchemaInfo"];
      version_number?: components["schemas"]["forms_VersionUpdateSchemaInfo2"];
      /** @description Object type of the schema (always of type 'object') */
      type?: string;
    };
    forms_VersionUpdateSchemaInfo: {
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description True if the alpaca field is required, false otherwise */
      required?: boolean;
      /** @description The label of the alpaca field */
      title?: string;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_VersionUpdateSchemaInfo2: {
      /** @description Regex pattern for the field */
      pattern?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description True if the alpaca field is required, false otherwise */
      required?: boolean;
      /** @description The label of the alpaca field */
      title?: string;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
    };
    forms_CategoriesCreateOptions: {
      options?: components["schemas"]["forms_category_id"];
      form?: components["schemas"]["forms_PropertiesForm"];
    };
    forms_CategoriesUpdateOptions: {
      /** @description Properties data for the fields of the alpaca form */
      options?: Record<string, any>;
      form?: components["schemas"]["forms_PropertiesForm"];
    };
    forms_CategoriesUpdateSchema: {
      /** @description Schema of the data that will populate the alpaca form fields */
      schema?: Record<string, any>;
      /** @description Object type of the schema (always of type 'object') */
      type?: string;
    };
    forms_category_id: {
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description The type of alpaca field ( ex. otcs_node_picker ) */
      type?: string;
      type_control?: components["schemas"]["forms_type_control"];
    };
    forms_type_control: {
      action?: string;
      method?: string;
      name?: string;
      parameters?: components["schemas"]["forms_parameters"];
    };
    forms_parameters: {
      /** @description Integer values representing node filter types ( ex. 0 = Folders, 144 = Documents, 131 = Category etc. ) */
      filter_types?: number[];
      /** @description Integer values representing selectable node types ( ex.0 = Folders, 144 = Documents, 131 = Category etc. ) */
      select_types?: number[];
    };
    forms_CategoriesCreateSchema: {
      schema?: components["schemas"]["forms_Schema"];
      type?: string;
    };
    forms_CategoriesData: {
      /** @description Always contains the categories ID set to null */
      categories_id?: number;
    };
    forms_Options: {
      /** @description Contains dynamic field data for the alpaca form */
      options?: Record<string, any>;
    };
    forms_Schema: {
      /** @description Contains dynamic data for populating the alpaca form fields */
      schema?: Record<string, any>;
    };
    forms_PropertiesForm: {
      attributes?: components["schemas"]["forms_PropertiesFormAttributes"];
      /** @description True if the form will be rendered, false otherwise */
      renderForm?: boolean;
    };
    forms_PropertiesFormAttributes: {
      /** @description Path of the action ( example: api/v1/nodes/{1} ) */
      action?: string;
      /** @description Method of the action ( ex. GET, PUT etc. ) */
      method?: string;
    };
    forms_PropertiesOptions: {
      options?: components["schemas"]["forms_Options"];
      form?: components["schemas"]["forms_PropertiesForm"];
    };
    forms_PropertiesSchema: {
      schema?: components["schemas"]["forms_Schema"];
      type?: string;
    };
    forms_CategoryInfo: {
      /** @description Data about the the category */
      data?: string[];
      /** @description Data about the category options */
      options?: string[];
      /** @description Name of the role being used */
      role_name?: string;
      /** @description Schema of the category */
      schema?: string[];
    };
    forms_WorkflowPropertiesFormInfo: {
      data?: components["schemas"]["forms_WorkflowPropertiesInfo"];
      /** @description The array containing the information on workflow attributes to be displayed. The forms are displayed in the workflow dialog. */
      forms?: components["schemas"]["forms_WorkflowFormInfo"][];
    };
    forms_WorkflowPropertiesInfo: {
      /** @description Title of the workflow */
      title?: string;
      /** @description Instructions of the workflow task */
      instructions?: string;
      /** @description Priority of the workflow task */
      priority?: number;
      /** @description Flag indicating if comments are enabled for the workflow */
      comments_on?: boolean;
      /** @description Flag indicating if attachments are enabled for the workflow */
      attachments_on?: boolean;
      /** @description The array containing the information about the defined data packages (comments, attachments, ...) */
      data_packages?: components["schemas"]["forms_WorkflowDataPackageInfo"][];
      /** @description The array containing the information about the standard actions for the workflow task. ( example: SendOn, SendForReview, Delegate) */
      actions?: components["schemas"]["forms_WorkflowActionInfo"][];
      /** @description The array containing the information about the custom actions (dispositiions) for the workflow task. */
      custom_actions?: components["schemas"]["forms_WorkflowActionInfo"][];
      message?: components["schemas"]["forms_WorkflowPropertiesMessageInfo"];
      /** @description Indicates if the step has to be accepted before the user can work with it */
      member_accept?: boolean;
      /** @description Contains in a subwork case, if available, the performerId of the step before this step. Used for the 'Reply' action in smartUI, but can be set in other cases as well. Is not there when the performerId is not available. */
      reply_performer_id?: number;
      task?: components["schemas"]["forms_WorkflowTaskInfo"];
      /** @description Flag indicating wether the authentication is set for this task. */
      authentication?: boolean;
    };
    forms_WorkflowPropertiesMessageInfo: {
      /** @description Performer that is responsible for the message */
      performer?: number;
      /** @description The type of the message. Supported types are 'delegate', 'review' and 'review_return' */
      type?: string;
      /** @description The message text */
      text?: string;
    };
    forms_WorkflowTaskInfo: {
      /** @description Task type */
      type?: number;
      /** @description Task sub_type */
      sub_type?: number;
      /** @description Task specific data */
      data?: Record<string, any>;
    };
    forms_WorkflowFormInfo: {
      /** @description Dynamic data for the workflow to be displayed */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for displaying workflow attributes */
      schema?: Record<string, any>;
      /** @description Number of columns for the form, currently supported values: 1 or 2 */
      columns?: number;
    };
    forms_WorkflowActionInfo: {
      /** @description Key of the action, has to be sent when executing the action */
      key?: string;
      /** @description Label of the action */
      label?: string;
    };
    forms_WorkflowDataPackageInfo: {
      /** @description Type of the data package, normally 1 */
      type?: number;
      /** @description Sub type of the data package (attachments = 1, comments = 2, attributes = 3, ...) */
      sub_type?: number;
      /** @description The structure of the data property depends on the data packages */
      data?: Record<string, any>;
    };
    forms_UserFormInfo: {
      data?: components["schemas"]["forms_UserData"];
      options?: components["schemas"]["forms_UserViewOptions"];
      schema?: components["schemas"]["forms_UserViewSchema"];
    };
    forms_UserData: {
      /** @description The user's manager id */
      reportsToID?: string;
      /** @description The user's office location */
      OfficeLocation?: string;
      /** @description The user's office email address */
      MailAddress?: string;
      /** @description The user's office phone number */
      Contact?: string;
      /** @description The user's personal mobile phone number */
      CellularPhone?: string;
    };
    forms_UserViewOptions: {
      fields?: components["schemas"]["forms_UserOptionFields"];
    };
    forms_UserOptionFields: {
      reportsToID?: components["schemas"]["forms_UserOptionFieldsInfo"];
      OfficeLocation?: components["schemas"]["forms_UserOptionFieldsInfo"];
      MailAddress?: components["schemas"]["forms_UserOptionFieldsInfo"];
      Contact?: components["schemas"]["forms_UserOptionFieldsInfo"];
      CellularPhone?: components["schemas"]["forms_UserOptionFieldsInfo"];
    };
    forms_UserOptionFieldsInfo: {
      /** @description True if alpaca field is hidden, false otherwise */
      hidden?: boolean;
      /** @description True if hideInitValidationError validation error is hidden for the alpaca field, false otherwise */
      hideInitValidationError?: boolean;
      /** @description The label of the alpaca field */
      label?: string;
      /** @description True if the alpaca field is read only, false otherwise */
      readonly?: boolean;
      /** @description The type of alpaca field ( ex. otcs_user_picker ) */
      type?: string;
    };
    forms_UserViewSchema: {
      schema?: components["schemas"]["forms_Schema"];
      type?: string;
    };
    forms_DoctemplatesCreateResponse: {
      forms?: components["schemas"]["forms_DoctemplatesCreateFormsInfo"][];
    };
    forms_DoctemplatesCreateFormsInfo: {
      /** @description Data about the the doctemplates create form */
      data?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: components["schemas"]["forms_DoctemplatesCreateFormsOptions"][];
      /** @description Name of the role being used */
      role_name?: string;
      /** @description Schema of the data that will populate the alpaca form fields */
      schema?: components["schemas"]["forms_DoctemplatesCreateFormsSchema"][];
    };
    forms_DoctemplatesCreateFormsOptions: {
      fields?: Record<string, any>;
    };
    forms_DoctemplatesCreateFormsSchema: {
      properties?: Record<string, any>;
      title?: string;
      type?: string;
    };
    forms_RenameFormInfo: Record<string, any>;
    intelligentfiling_V2ResponseIntelligentFilingPost: {
      links?: {
        data?: {
          self?: components["schemas"]["nodes_V2Link"];
        };
      };
      results?: {
        data?: {
          properties?: components["schemas"]["nodes_V2Properties"];
        };
      };
    };
    lladmin_setup: {
      links?: {
        data?: {
          self?: components["schemas"]["nodes_V2Link"];
        };
      };
      results?: {
        dbupgradeError?: boolean;
        ok?: boolean;
      };
    };
    members_MemberInfo: {
      available_actions?: components["schemas"]["members_AvailableActions"][];
      /** @description User Data */
      data?: components["schemas"]["members_Data"][];
      /** @description This describes the actions available for items in the data structure */
      definitions?: components["schemas"]["members_ActionDefinitions"][];
      /** @description The order items should be displayed in. These items can be treated as keys to items in definitions_map */
      definitions_order?:
        components["schemas"]["members_ActionDefinitionsOrder"][];
      /** @description The type of user, group or user-related entity */
      type?: number;
      /** @description The type name of user, group or user-related entity */
      type_name?: string;
      /** @description The workflow ID */
      workflow_id?: number;
      /** @description The sub-workflow ID */
      workflow_subworkflow_id?: number;
      /** @description The task ID from the sub-workflow */
      workflow_subworkflow_task_id?: number;
    };
    members_ActionDefinitions: Record<string, any>;
    members_ActionDefinitionsOrder: Record<string, any>;
    members_AvailableActions: {
      /** @description TRUE if this action has parameters, FALSE otherwise */
      parameterless?: boolean;
      /** @description TRUE if this action does not modify data, FALSE otherwise */
      read_only?: boolean;
      /** @description The type of action */
      type?: string;
      /** @description The name of the action */
      type_name?: string;
      /** @description A unique name for this action */
      webnode_signature?: string;
    };
    members_Data: {
      /** @description The user's business e-mail address */
      business_email?: string;
      /** @description The user's business fax number */
      business_fax?: string;
      /** @description The user's business phone number */
      business_phone?: string;
      /** @description TRUE if the user or group has been deleted, FALSE otherwise */
      deleted?: boolean;
      /** @description The user's first name */
      first_name?: string;
      /** @description The ID of the user's base group */
      group_id?: number;
      /** @description A unique identifier for the user or group */
      id?: number;
      /** @description The user/group display initials (ex. 'JP', 'A') */
      initials?: string;
      /** @description The user's last name */
      last_name?: string;
      /** @description The user's middle name */
      middle_name?: string;
      /** @description The user or group name */
      name?: string;
      /** @description The full address of the user's office location */
      office_location?: string;
      /** @description REST API URL to get the member's profile photo */
      photo_url?: string;
      /** @description The user's preferred display language */
      display_language?: string;
      /** @description TRUE if the user has the Content Manager privilege, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_content_manager?: boolean;
      /** @description TRUE if the user log-in is enabled, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_login?: boolean;
      /** @description TRUE if the user can create groups and modify or delete the groups that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_groups?: boolean;
      /** @description TRUE if the user can create users and modify or delete the users that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_users?: boolean;
      /** @description TRUE means the user can access any item in the system for which the Public Access permission is activated, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_public_access?: boolean;
      /** @description TRUE means the user has full access to Content Server's administration functionality, if the user knows the administration password. This privilege also provides access to all items in the system, without filtering for permissions. This privilege does not include the ability to administer users or groups. FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_system_admin_rights?: boolean;
      /** @description TRUE if the user can create, modify, and delete any user or group, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_user_admin_rights?: boolean;
      /** @description An offset of GMT */
      time_zone?: number;
      /** @description The user's title */
      title?: string;
      /** @description The type of user, group or user-related entity */
      type?: number;
      /** @description The type name of user, group or user-related entity */
      type_name?: string;
    };
    members_CreateMember: {
      /** @description A unique identifier for the user */
      id?: number;
    };
    members_DeleteMember: Record<string, any>;
    members_AddFavorite: Record<string, any>;
    members_EmptyResult: Record<string, any>;
    members_RemoveFavorite: Record<string, any>;
    members_Properties: {
      /** @description Properties */
      properties?: components["schemas"]["members_PropertiesStandard"][];
    };
    members_PropertiesStandard: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      /** @description Globally unique id */
      guid?: string;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /**
       * Format: date
       * @description The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    members_SearchMember: {
      /** @description Search results */
      data?: components["schemas"]["members_SearchResults"][];
    };
    members_SearchResults: {
      /** @description A unique identifier for the user or group */
      id?: number;
      /** @description The user or group name */
      name?: string;
      /** @description The user's first name */
      first_name?: string;
      /** @description The user's last name */
      last_name?: string;
      /** @description The type of user, group or user-related entity */
      type?: string;
      /** @description The group name or user's display name */
      name_formatted?: string;
      /** @description The user/group display initials (ex. 'JP', 'A') */
      initials?: string;
    };
    members_UpdateMemberGroup: {
      /** @description TRUE if the group has been deleted, FALSE otherwise */
      deleted?: boolean;
      /** @description The group ID */
      id?: number;
      /** @description The id of the leader of the group */
      leader_id?: number;
      /** @description The group name */
      name?: string;
      /** @description Member Type of the user represented as an integer (0 for User, 1 for Group) */
      type?: number;
      /** @description Member Type of the user in a human-readable format */
      type_name?: string;
    };
    members_UpdateMemberUser: {
      /**
       * Format: date
       * @description The user's birthday
       */
      birth_date?: string;
      /** @description The user's office email address */
      business_email?: string;
      /** @description The user's office fax number */
      business_fax?: string;
      /** @description The user's office phone number */
      business_phone?: string;
      /** @description The user's personal mobile phone number */
      cell_phone?: string;
      /** @description TRUE if the user or group has been deleted, FALSE otherwise */
      deleted?: boolean;
      /** @description The user's first name */
      first_name?: string;
      /** @description The user's gender */
      gender?: string;
      /** @description The user's group ID */
      group_id?: number;
      /** @description The user's home address 1 */
      home_address_1?: string;
      /** @description The user's home address 2 */
      home_address_2?: string;
      /** @description The user's personal fax number */
      home_fax?: string;
      /** @description The user's personal home phone number */
      home_phone?: string;
      /** @description The user/group ID */
      id?: number;
      /** @description The user's last name */
      last_name?: string;
      /** @description The user's middle name */
      middle_name?: string;
      /** @description The user's login name.  If this is a group, then it is the group name */
      name?: string;
      /** @description The user's office location */
      office_location?: string;
      /** @description The user's office mobile phone number */
      pager?: string;
      /** @description The user's personal email address */
      personal_email?: string;
      /** @description The user's personal interests and hobbies */
      personal_interests?: string;
      /** @description The user's bookmarked url link 1 */
      personal_url_1?: string;
      /** @description The user's bookmarked url link 2 */
      personal_url_2?: string;
      /** @description The user's bookmarked url link 3 */
      personal_url_3?: string;
      /** @description The user's personal home page */
      personal_website?: string;
      /** @description The ID of the node for the user's profile photo */
      photo_id?: number;
      /** @description The user's preferred display language */
      display_language?: string;
      /** @description TRUE if the user has the Content Manager privilege, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_content_manager?: boolean;
      /** @description TRUE if the user log-in is enabled, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_login?: boolean;
      /** @description TRUE if the user can create groups and modify or delete the groups that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_groups?: boolean;
      /** @description TRUE if the user can create users and modify or delete the users that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_users?: boolean;
      /** @description TRUE means the user can access any item in the system for which the Public Access permission is activated, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_public_access?: boolean;
      /** @description TRUE means the user has full access to Content Server's administration functionality, if the user knows the administration password. This privilege also provides access to all items in the system, without filtering for permissions. This privilege does not include the ability to administer users or groups. FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_system_admin_rights?: boolean;
      /** @description TRUE if the user can create, modify, and delete any user or group, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_user_admin_rights?: boolean;
      /** @description The user's time zone */
      time_zone?: number;
      /** @description The user's title */
      title?: string;
      /** @description Member Type of the user represented as an integer (0 for User, 1 for Group) */
      type?: number;
      /** @description Member Type of the user in a human-readable format */
      type_name?: string;
    };
    members_V2UpdateMember: {
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
      /** @description Results */
      results?: components["schemas"]["members_V2UpdateMemberResults"][];
    };
    members_V2UpdateMemberResults: {
      /** @description Data */
      data?: components["schemas"]["members_V2UpdateMemberData"][];
    };
    members_V2UpdateMemberData: {
      /** @description Members Information */
      properties?: components["schemas"]["members_V2UpdateMemberProperties"][];
    };
    members_V2UpdateMemberProperties: {
      /**
       * Format: date
       * @description The user's birthday
       */
      birth_date?: string;
      /** @description The user's office email address */
      business_email?: string;
      /** @description The user's office fax number */
      business_fax?: string;
      /** @description The user's office phone number */
      business_phone?: string;
      /** @description The user's personal mobile phone number */
      cell_phone?: string;
      /** @description TRUE if the user or group has been deleted, FALSE otherwise */
      deleted?: boolean;
      /** @description The user's first name */
      first_name?: string;
      /** @description The user's gender */
      gender?: string;
      /** @description The user's group ID */
      group_id?: number;
      /** @description The user's home address 1 */
      home_address_1?: string;
      /** @description The user's home address 2 */
      home_address_2?: string;
      /** @description The user's personal fax number */
      home_fax?: string;
      /** @description The user's personal home phone number */
      home_phone?: string;
      /** @description The user/group ID */
      id?: number;
      /** @description The user/group display initials (ex. 'JP', 'A') */
      initials?: string;
      /** @description The user's last name */
      last_name?: string;
      /** @description The user's middle name */
      middle_name?: string;
      /** @description The user's login name.  If this is a group, then it is the group name */
      name?: string;
      /** @description The user/group display name (ex. 'John Q. Public', 'AdminUserGroup') */
      name_formatted?: string;
      /** @description The user's office location */
      office_location?: string;
      /** @description The user's office mobile phone number */
      pager?: string;
      /** @description The user's personal email address */
      personal_email?: string;
      /** @description The user's personal interests and hobbies */
      personal_interests?: string;
      /** @description The user's bookmarked url link 1 */
      personal_url_1?: string;
      /** @description The user's bookmarked url link 2 */
      personal_url_2?: string;
      /** @description The user's bookmarked url link 3 */
      personal_url_3?: string;
      /** @description The user's personal home page */
      personal_website?: string;
      /** @description The ID of the node for the user's profile photo */
      photo_id?: number;
      /** @description The user's photo url */
      photo_url?: string;
      /** @description The user's time zone */
      time_zone?: number;
      /** @description The user's preferred display language */
      display_language?: string;
      /** @description TRUE if the user has the Content Manager privilege, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_content_manager?: boolean;
      /** @description TRUE if the user log-in is enabled, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_login?: boolean;
      /** @description TRUE if the user can create groups and modify or delete the groups that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_groups?: boolean;
      /** @description TRUE if the user can create users and modify or delete the users that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_users?: boolean;
      /** @description TRUE means the user can access any item in the system for which the Public Access permission is activated, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_public_access?: boolean;
      /** @description TRUE means the user has full access to Content Server's administration functionality, if the user knows the administration password. This privilege also provides access to all items in the system, without filtering for permissions. This privilege does not include the ability to administer users or groups. FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_system_admin_rights?: boolean;
      /** @description TRUE if the user can create, modify, and delete any user or group, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_user_admin_rights?: boolean;
      /** @description The user's title */
      title?: string;
      /** @description Member Type of the user represented as an integer (0 for User, 1 for Group) */
      type?: number;
      /** @description Member Type of the user in a human-readable format */
      type_name?: string;
    };
    members_V2Data: {
      /** @description Properties */
      properties?: components["schemas"]["members_V2Properties"][];
    };
    members_V2DataAccessed: {
      /** @description Properties */
      properties?: components["schemas"]["members_V2Properties"][];
      /** @description User Properties */
      properties_user?: components["schemas"]["members_V2PropertiesUser"][];
    };
    members_V2DataAssignments: {
      /** @description Assignments */
      assignments?: components["schemas"]["members_V2PropertiesAssignments"][];
    };
    members_V2DataMembersSearch: {
      /** @description Members Search */
      properties?: components["schemas"]["members_V2PropertiesMembersSearch"][];
    };
    members_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    members_V2Link_Self: {
      /** @description Self link */
      self?: components["schemas"]["members_V2Link"][];
    };
    members_V2Links: {
      /** @description Data link */
      data?: components["schemas"]["members_V2Link_Self"][];
    };
    members_V2Properties: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description (Can be time-zone aware) The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["members_DescriptionMultilingual"];
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description Globally unique id */
      guid?: string;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["members_NameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description (Can be time-zone aware) The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description TRUE if this item has versionable content, FALSE otherwise */
      versionable?: boolean;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    members_V2PropertiesFavoritesTab: {
      /** @description The name of the favorites tab */
      name?: string;
      /** @description The order of the favorites tab */
      order?: number;
      /** @description The tab_id of the favorites tab */
      tab_id?: number;
    };
    members_V2PropertiesAssignments: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) Assignment due date
       */
      date_due?: string;
      /** @description Description of the item */
      description?: string;
      /** @description Indicates if the item is a favorite */
      favorite?: boolean;
      /** @description The follow up ID */
      followup_id?: number;
      /** @description The id of the user who had sent this assignment */
      from_user_id?: number;
      /** @description The item's unique object ID */
      id?: number;
      /** @description Instructions for the assignment if applicable */
      instructions?: string;
      /** @description The object id of the parent to which this assignment belongs */
      location_id?: number;
      /** @description The name of the item */
      name?: string;
      /** @description Integer representation of the assignment's priority */
      priority?: number;
      /** @description Assignment priority */
      priority_name?: string;
      /** @description Whether to open the workflow in the Smart View Attachment view */
      smartViewAttachmentsView?: boolean;
      /** @description Integer representation of the assignment's status */
      status?: number;
      /** @description Assignment status */
      status_name?: string;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description The workflow ID */
      workflow_id?: number;
      /** @description Whether to open the workflow in the Smart UI */
      workflow_open_in_smart_ui?: boolean;
      /** @description The sub-workflow ID */
      workflow_subworkflow_id?: number;
      /** @description The sub-workflow task ID */
      workflow_subworkflow_task_id?: number;
      /** @description The task subtype */
      maptask_subtype?: number;
    };
    members_V2PropertiesMembersSearch: {
      /**
       * Format: date
       * @description The user's birthday
       */
      birth_date?: string;
      /** @description The user's office email address */
      business_email?: string;
      /** @description The user's office fax number */
      business_fax?: string;
      /** @description The user's office phone number */
      business_phone?: string;
      /** @description The user's personal mobile phone number */
      cell_phone?: string;
      /** @description The user's first name */
      first_name?: string;
      /** @description The user's gender */
      gender?: string;
      /** @description The user's group ID */
      group_id?: number;
      /** @description The user's home address 1 */
      home_address_1?: string;
      /** @description The user's home address 2 */
      home_address_2?: string;
      /** @description The user's personal fax number */
      home_fax?: string;
      /** @description The user's personal home phone number */
      home_phone?: string;
      /** @description The user/group ID */
      id?: number;
      /** @description The user/group display initials (ex. 'JP', 'A') */
      initials?: string;
      /** @description The user's last name */
      last_name?: string;
      /** @description The group leader's user ID */
      leader_id?: number;
      /** @description The user's middle name */
      middle_name?: string;
      /** @description The user's login name.  If this is a group, then it is the group name */
      name?: string;
      /** @description The user/group display name (ex. 'John Q. Public', 'AdminUserGroup') */
      name_formatted?: string;
      /** @description The user's office location */
      office_location?: string;
      /** @description The user's office mobile phone number */
      pager?: string;
      /** @description The user's personal email address */
      personal_email?: string;
      /** @description The user's personal interests and hobbies */
      personal_interests?: string;
      /** @description The user's bookmarked url link 1 */
      personal_url_1?: string;
      /** @description The user's bookmarked url link 2 */
      personal_url_2?: string;
      /** @description The user's bookmarked url link 3 */
      personal_url_3?: string;
      /** @description The user's personal home page */
      personal_website?: string;
      /** @description The ID of the node for the user's profile photo */
      photo_id?: number;
      /** @description The user's photo url */
      photo_url?: string;
      /** @description The user's time zone */
      time_zone?: number;
      /** @description The user's preferred display language */
      display_language?: string;
      /** @description TRUE if the user has the Content Manager privilege, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_content_manager?: boolean;
      /** @description TRUE if the user log-in is enabled, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_login?: boolean;
      /** @description TRUE if the user can create groups and modify or delete the groups that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_groups?: boolean;
      /** @description TRUE if the user can create users and modify or delete the users that he or she creates, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_modify_users?: boolean;
      /** @description TRUE means the user can access any item in the system for which the Public Access permission is activated, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_public_access?: boolean;
      /** @description TRUE means the user has full access to Content Server's administration functionality, if the user knows the administration password. This privilege also provides access to all items in the system, without filtering for permissions. This privilege does not include the ability to administer users or groups. FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_system_admin_rights?: boolean;
      /** @description TRUE if the user can create, modify, and delete any user or group, FALSE otherwise. This information is only available to Administrators or User Administrators */
      privilege_user_admin_rights?: boolean;
      /** @description The user's title */
      title?: string;
      /** @description Member Type of the user represented as an integer (0 for User, 1 for Group) */
      type?: number;
      /** @description Member Type of the user in a human-readable format */
      type_name?: string;
    };
    members_V2PropertiesUser: {
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The last time this item was accessed by this user
       */
      access_date_last?: string;
    };
    members_V2ResponseAccessed: {
      /** @description Collection */
      collection?:
        components["schemas"]["members_V2Collection_BrowseMembers"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
      /** @description Results */
      results?: components["schemas"]["members_V2ResultAccessed"][];
    };
    members_V2ResponseAssignments: {
      /** @description Results */
      results?: components["schemas"]["members_V2ResultAssignments"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseEmpty: {
      /** @description Results */
      results?: components["schemas"]["members_EmptyResult"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseMembersCreate: {
      /** @description Results */
      results?: components["schemas"]["members_V2ResultMembersSearch"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseMembersSearch: {
      /** @description Collection */
      collection?:
        components["schemas"]["members_V2Collection_BrowseMembers"][];
      /** @description Results */
      results?: components["schemas"]["members_V2ResultMembersSearch"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseBrowseMembersSearch: {
      /** @description Collection */
      collection?:
        components["schemas"]["members_V2Collection_BrowseMembers"][];
      /** @description Results */
      results?: components["schemas"]["members_V2ResultMembersSearch"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseMembersGet: {
      /** @description Results */
      results?: components["schemas"]["members_V2ResultMembersSearch"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseCollection: {
      /** @description Results */
      results?: components["schemas"]["members_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseCollectionFavorites: {
      /** @description Collection */
      collection?:
        components["schemas"]["members_V2Collection_ListFavorites"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
      /** @description Results */
      results?: components["schemas"]["members_V2Result"][];
    };
    members_V2ResponseCollectionReserved: {
      /** @description Collection */
      collection?: components["schemas"]["members_V2Collection_ListReserved"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
      /** @description Results */
      results?: components["schemas"]["members_V2Result"][];
    };
    members_V2ResponseCollectionFavoritesTab: {
      /** @description Results */
      results?: components["schemas"]["members_V2ResultFavoritesTab"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResponseElement: {
      /** @description Results */
      results?: components["schemas"]["members_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2Result: {
      /** @description Data */
      data?: components["schemas"]["members_V2Data"][];
    };
    members_V2ResultFavoritesTab: {
      /** @description Data */
      data?: components["schemas"]["members_V2PropertiesFavoritesTab"][];
    };
    members_V2ResultAccessed: {
      /** @description Data */
      data?: components["schemas"]["members_V2DataAccessed"][];
    };
    members_V2ResultAssignments: {
      /** @description Data */
      data?: components["schemas"]["members_V2DataAssignments"][];
    };
    members_V2ResultMembersSearch: {
      /** @description Data */
      data?: components["schemas"]["members_V2DataMembersSearch"][];
    };
    members_V2ResponseGroupsSearch: {
      /** @description Results */
      results?: components["schemas"]["members_V2ResultGroupsSearch"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResultGroupsSearch: {
      /** @description Data */
      data?: components["schemas"]["members_V2DataGroupsSearch"][];
    };
    members_V2DataGroupsSearch: {
      /** @description Group Search */
      properties?: components["schemas"]["members_V2PropertiesGroupsSearch"][];
    };
    members_V2PropertiesGroupsSearch: {
      /** @description TRUE if the user or group has been deleted, FALSE otherwise */
      deleted?: boolean;
      /** @description The user/group ID */
      id?: number;
      /** @description The group leader's user ID */
      leader_id?: number;
      /** @description The user's login name.  If this is a group, then it is the group name */
      name?: string;
      /** @description The user/group display name (ex. 'John Q. Public', 'AdminUserGroup') */
      name_formatted?: string;
      /** @description The user/group display initials (ex. 'JP', 'A') */
      initials?: string;
      /** @description Member Type of the user represented as an integer (0 for User, 1 for Group) */
      type?: number;
      /** @description Member Type of the user in a human-readable format */
      type_name?: string;
    };
    members_V2ResponseObjectTypes: {
      /** @description Results */
      results?: components["schemas"]["members_V2ResultObjectTypes"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    members_V2ResultObjectTypes: {
      /** @description Data */
      data?: components["schemas"]["members_V2ListObjectTypes"][];
    };
    members_V2ListObjectTypes: {
      /** @description Objects */
      objects?: components["schemas"]["members_V2DataObjectType"][];
    };
    members_V2DataObjectType: {
      /** @description The value of the Object Type */
      type?: number;
      /** @description The display name of the Object Type */
      type_name?: string;
    };
    members_V2Collection: {
      /** @description Paging Information */
      paging?: components["schemas"]["members_V2Paging"][];
    };
    members_V2Collection_BrowseMembers: {
      /** @description Paging Information */
      paging?: components["schemas"]["members_V2Paging"][];
      /** @description Sorting information */
      sorting?: components["schemas"]["members_V2Sorting"][];
    };
    members_V2Collection_ListFavorites: {
      /** @description Paging Information */
      paging?: components["schemas"]["members_V2Paging"][];
      /** @description Sorting information */
      sorting?: components["schemas"]["members_V2Sorting"][];
    };
    members_V2Collection_ListReserved: {
      /** @description Paging Information */
      paging?: components["schemas"]["members_V2Paging"][];
      /** @description Sorting information */
      sorting?: components["schemas"]["members_V2Sorting"][];
    };
    members_V2Paging: {
      /** @description limit */
      limit?: number;
      /** @description links */
      links?: string[];
      /** @description page */
      page?: number;
      /** @description page total */
      page_total?: number;
      /** @description range max */
      range_max?: number;
      /** @description range min */
      range_min?: number;
      /** @description total count */
      total_count?: number;
    };
    members_V2Sorting: {
      sort?: components["schemas"]["members_V2Sort"][];
    };
    members_V2Sort: Record<string, any>;
    members_DescriptionMultilingual: {
      /** @description Description in English */
      en?: string;
      /** @description Beschreibung in Deutsch */
      de?: string;
    };
    members_NameMultilingual: {
      /** @description Name in English */
      en?: string;
      /** @description Name auf Deutsch */
      de?: string;
    };
    multipart_GetSettings: {
      /** @description Whether Large File Upload is enabled or not */
      is_enabled?: boolean;
      /** @description Maximum allowed size in bytes */
      max_size?: number;
      /** @description Minimum allowed size in bytes */
      min_size?: number;
    };
    multipart_StartUpload: {
      /** @description The key to identify the Large File Upload session */
      upload_key?: string;
      /** @description Number of retries allowed per part */
      max_retries?: number;
      /** @description Number of parts expected in Large File Upload session */
      num_parts?: number;
      /** @description Maximum size of each file part in bytes */
      part_size?: number;
    };
    members_V2GetSessions: {
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
      /** @description Results */
      results?: components["schemas"]["members_V2GetSessionsResults"][];
    };
    members_V2GetSessionsResults: {
      active_sessions?:
        components["schemas"]["members_V2SessionsActiveSessions"][];
      previous_sessions?:
        components["schemas"]["members_V2SessionsPreviousSessions"][];
    };
    members_V2SessionsActiveSessions: {
      /** @description Whether or not the active session information was successfully retrieved. */
      ok?: boolean;
      recs?: components["schemas"]["members_V2SessionsActiveSessionsRecs"][];
    };
    /** @description The array of the active session information. */
    members_V2SessionsActiveSessionsRecs:
      components["schemas"]["members_V2SessionsActiveSessionsRecsDatePairs"][];
    members_V2SessionsActiveSessionsRecsDatePairs: {
      /** @description For how long the current session was active in minutes. */
      duration?: number;
      /**
       * Format: date-time
       * @description When the current session was created.
       */
      create_time?: string;
      /**
       * Format: date-time
       * @description When the last activity of the current session happened.
       */
      last_activity?: string;
    };
    members_V2SessionsPreviousSessions: {
      /** @description Whether or not the previous session information was successfully retrieved. */
      ok?: boolean;
      recs?: string[];
    };
    nicknames_Tag: {
      name?: string;
    };
    nicknames_V2Empty: {
      /** @description results */
      results?: components["schemas"]["nicknames_V2EmptyResults"][];
      /** @description links */
      links?: components["schemas"]["nicknames_V2DataLinks"][];
    };
    nicknames_V2EmptyResults: Record<string, any>;
    nicknames_V2Links: {
      /** @description Self link */
      self?: components["schemas"]["nicknames_V2Link"][];
    };
    nicknames_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    nicknames_V2DataLinks: {
      data?: components["schemas"]["nicknames_V2Links"][];
    };
    nicknames_V2Result: {
      /** @description Data */
      data?: components["schemas"]["nicknames_V2Data"][];
    };
    nicknames_V2Data: {
      /** @description Properties */
      properties?: components["schemas"]["nicknames_V2Properties"][];
    };
    nicknames_V2ResponseElement: {
      /** @description Results */
      results?: components["schemas"]["nicknames_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["nicknames_V2DataLinks"][];
    };
    nicknames_V2Properties: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["members_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description Globally unique id */
      guid?: string;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /**
       * Format: date
       * @description The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["members_NameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /**
       * Format: date
       * @description The date on which the item was reserved
       */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    nodes_bodyParam: {
      description?: string;
      description_multilingual?: components["schemas"]["nodes_bodyParam2"];
    };
    nodes_bodyParam2: {
      en?: string;
      de_DE?: string;
    };
    nodes_GetRequestStatus: {
      data?: {
        /** @description the number of users that have requested for reservation, not including the current user */
        num_users?: number;
        /** @description the username of the user who is currently reserving the given node */
        reserved_by?: string;
        /**
         * Format: date-time
         * @description the datetime that the given node was reserved
         */
        reserved_date?: string;
        /** @description Returns true if the current user has already requested */
        already_requested?: boolean;
      };
    };
    nodes_Tag: {
      name?: string;
    };
    nodes_AddableTypesInfo: {
      data?: components["schemas"]["nodes_ActionData"];
      definitions?: components["schemas"]["nodes_Definitions"];
      definitions_map?: components["schemas"]["nodes_DefinitionsMap"];
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
    };
    nodes_AuditInfo: {
      data?: components["schemas"]["nodes_ActionData"];
      definitions?: components["schemas"]["nodes_Definitions"];
      /** @description The order items should be displayed in */
      definitions_order?: string[];
      /** @description The max number of records that can be returned */
      limit?: number;
      offset_key?: components["schemas"]["nodes_AuditOffsetKey"];
      /** @description Number of the current page */
      page?: number;
      /** @description Total number of pages available */
      page_total?: number;
      /** @description Total audit records available */
      total?: number;
      /** @description Order and column name on which the results are sorted */
      sort?: string;
    };
    nodes_AuditResult2: {
      /** @description Collection */
      collection?: components["schemas"]["nodes_V2Collection"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["nodes_V2AuditResult"][];
    };
    nodes_V2AuditResult: {
      /** @description Data */
      data?: components["schemas"]["nodes_V2AuditData"][];
    };
    nodes_V2AuditData: {
      /** @description The audit data fields */
      audit?: components["schemas"]["nodes_V2AuditDataFields"][];
    };
    nodes_V2AuditDataFields: {
      /** @description The ID of the agent which performed the audit event on behalf of a user */
      agent_id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The audit date
       */
      audit_date?: string;
      /** @description The node ID (which these audit records belong to) */
      id?: number;
      /** @description The user ID associated with the audit event */
      user_id?: number;
      /** @description The audit language code */
      audit_language_code?: string;
      /** @description The audit name */
      audit_name?: string;
    };
    nodes_AuditOffsetKey: {
      /** @description EventID of last audit record returned */
      Identity?: number;
      /** @description Returns a false if not all audit records were returned in data, true if all were returned */
      NoMoreData?: boolean;
    };
    nodes_BrowseResult: {
      data?: components["schemas"]["nodes_NodeInfo"][];
      definitions?: components["schemas"]["nodes_Definitions"];
      definitions_map?: components["schemas"]["nodes_DefinitionsMap"];
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
      /** @description Maximum number of items returned per page */
      limit?: number;
      /** @description Number of the current page */
      page?: number;
      /** @description Total number of pages available */
      page_total?: number;
      /** @description Number of the ending item for this page */
      range_max?: number;
      /** @description Number of the starting item for this page */
      range_min?: number;
      /** @description Order and column name on which the results are sorted */
      sort?: string;
      /** @description Total number of items available */
      total_count?: number;
      /** @description Facets on which results are filtered */
      where_facet?: string[];
      /** @description Name on which results are filtered */
      where_name?: number;
      /** @description Types on which results are filtered */
      where_type?: number[];
    };
    nodes_BrowseResult2: {
      /** @description Collection */
      collection?: components["schemas"]["nodes_V2Collection"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["nodes_V2Result"][];
    };
    nodes_BrowseReleasesResult2: {
      /** @description Collection */
      collection?: components["schemas"]["nodes_V2Collection"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["nodes_V2ReleaseResult"][];
    };
    nodes_ListContents: {
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["nodes_ListContentsResult"][];
    };
    nodes_CellMetadata: {
      data?: components["schemas"]["nodes_CellMetadataData"];
      definitions?: components["schemas"]["nodes_CellMetadataDefinitions"];
    };
    nodes_CreateResponse: {
      /** @description The ID of the node which was created */
      id?: number;
    };
    nodes_CopyResponse: {
      /** @description Information about the node */
      data?: components["schemas"]["nodes_V1DataPost"][];
    };
    nodes_MoveResponse: {
      /** @description Information about the node */
      data?: components["schemas"]["nodes_V1DataPost"][];
    };
    nodes_RolesInfo: {
      categories?: Record<string, any>;
    };
    nodes_CategoriesInfo: {
      /** @description Attribute key in the format {category_id}_[{set_id}_{set_row}]_{attribute_id} */
      "{attribute_key}"?: string;
    };
    nodes_FacetInfo: {
      /** @description Information on the available unselected facets. */
      available_values?: string[];
      properties?: components["schemas"]["nodes_FacetInfoProperties"];
      /** @description Information on the selected facets from the query string's where_facets clause */
      selected_values?: string[];
    };
    nodes_FacetInfoProperties: Record<string, any>;
    nodes_FacetsInfo: {
      facets?: components["schemas"]["nodes_FacetInfo"];
    };
    nodes_InfoResult: {
      /** @description The object types (including icon information) that can be added to this node */
      addable_types?: components["schemas"]["nodes_AddableTypes"][];
      /** @description The actions that can be performed on this node */
      available_actions?: components["schemas"]["nodes_AvailableActions"][];
      /** @description The available roles for this node */
      available_roles?: components["schemas"]["nodes_AvailableRoles"][];
      data?: components["schemas"]["nodes_Data"];
      definitions?: components["schemas"]["nodes_InfoDefinitions"];
      /** @description The definitions that are common to all nodes */
      definitions_base?: string[];
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
      /** @description An ID representing the type of the object */
      type?: number;
      type_info?: components["schemas"]["nodes_TypeInfo"];
      /** @description The name of the node's object type */
      type_name?: string;
    };
    nodes_AddableTypes: {
      /** @description A relative URL to the object's icon */
      icon?: string;
      /** @description An ID representing the type of the object */
      type?: number;
      /** @description The name of the type of object */
      type_name?: string;
    };
    nodes_AvailableActions: {
      /** @description TRUE if this action has parameters, FALSE otherwise */
      parameterless?: boolean;
      /** @description TRUE if this action does not modify data, FALSE otherwise */
      read_only?: boolean;
      /** @description The type of action */
      type?: string;
      /** @description The name of action */
      type_name?: string;
      /** @description A unique name for this action */
      webnode_signature?: string;
    };
    nodes_AvailableRoles: {
      /** @description The type of role */
      type?: string;
      /** @description The name of role */
      type_name?: string;
    };
    nodes_Data: {
      /** @description Whether or not this item uses standard or advanced versioning */
      advanced_versioning?: boolean;
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description (Can be time-zone aware) Creation date of this object */
      create_date?: string;
      /** @description The ID of the user */
      create_user_id?: number;
      /** @description Description of the object */
      description?: string;
      description_multilingual?:
        components["schemas"]["nodes_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Global unique identifier */
      guid?: string;
      /** @description Indicates if the item is hidden */
      hidden?: boolean;
      /** @description Path to the type specific icon */
      icon?: string;
      /** @description Path to the type specific icon (larger sized) */
      icon_large?: string;
      /** @description A unique ID for this object */
      id?: number;
      /** @description (Can be time-zone aware) Date when this object was modified */
      modify_date?: string;
      /** @description The ID of the user who modified this object */
      modify_user_id?: number;
      /** @description Name of the object */
      name?: string;
      name_multilingual?: components["schemas"]["nodes_NameMultilingual"];
      /** @description ID of original object if this object is a shortcut */
      original_id?: number;
      /** @description The ID of the group to which the owner of this object belongs */
      owner_group_id?: number;
      /** @description The ID of the user who owns this object */
      owner_user_id?: number;
      /** @description The ID of the parent object of which this object is a child */
      parent_id?: number;
      /** @description TRUE if this object is reserved, FALSE otherwise */
      reserved?: boolean;
      /** @description (Can be time-zone aware) Date when this object was reserved */
      reserved_date?: string;
      /** @description The ID of the user or group that has reserved this object */
      reserved_user_id?: number;
      /** @description TRUE if this object has versionable content, false otherwise */
      versionable?: boolean;
      /** @description The ID of the volume */
      volume_id?: number;
    };
    nodes_Properties: {
      /**
       * Format: date-time
       * @description Date of creation
       */
      create_date?: string;
      /**
       * Format: date-time
       * @description Date of last modification
       */
      modify_date?: string;
      description?: string;
      guid?: string;
      id?: number;
      name?: string;
      /** @description Parent's ID */
      parent_id?: number;
      volume_id?: number;
    };
    nodes_AncestorsInfo: {
      ancestors?: components["schemas"]["nodes_AncestorInfo"][];
    };
    nodes_AncestorInfo: {
      /** @description Unique identifer of an item, as number */
      id?: number;
      /** @description Item name */
      name?: string;
      /** @description ID of the volume under which the item is located */
      volume_id?: number;
      /** @description Parent's ID */
      parent_id?: number;
      /** @description Item type */
      type?: number;
      /** @description Item type name */
      type_name?: string;
    };
    nodes_ColumnsInfo: {
      columns?: components["schemas"]["nodes_ColumnInfo"][];
    };
    nodes_ColumnInfo: {
      /** @description Unique identifer of column, as number */
      id?: number;
      /** @description Indicates if this is a non-modifiable column */
      locked?: number;
      /**
       * @description Horizontal alignment
       * @enum {string}
       */
      alignment?: "left" | "center" | "right";
      /** @description Unique identifier of column as string, used for e.g. sorting or getting value */
      column_key?: string;
      /** @description Width of column in letters, maximum number of letters to display */
      column_display_width?: number;
      /** @description Width of column in em units */
      column_em_width?: number;
      /** @description Name of value provider, which gives value of this column */
      data_source?: string;
      /**
       * @description Data Type (5 = Boolean,-7 = Date,13 = DatePopup,401 = DateTime,2 = Integer,12 = IntegerPopup,-1 = String,10 = StringPopup,305 = SubType,14 = User,19 = UserPopup)
       * @enum {integer}
       */
      data_type?: 5 | -7 | 13 | 401 | 2 | 12 | -1 | 10 | 305 | 14 | 19;
      /** @description Indicates display of this column as link */
      display_as_link?: boolean;
      /** @description Column name */
      name?: string;
      /** @description Display format string ('%value%' is to be replaced with the property value) */
      display_value?: string;
      /** @description Indicates if column is always displayed */
      is_default?: boolean;
      /** @description Indicates if this column is fixed system column (i.e. columns that come defined out of the box and can't be removed) */
      is_system_column?: boolean;
      /**
       * @description How to handle textual column values (Wrap = 0, NoWrap = 1, Truncate = 2)
       * @enum {integer}
       */
      long_text?: 0 | 1 | 2;
      name_multilingual?: components["schemas"]["nodes_NameMultilingual"];
      /** @description Indicates, in case display_as_link is true, if the link has to be opened in new window */
      new_window?: boolean;
      /** @description Public access permissions */
      public_access?: number;
      /** @description Indicates if columns is ready to be displayed. */
      ready?: boolean;
      /** @description Indicates if this column is sortable. */
      sortable?: boolean;
      /** @description <tooltip?> */
      title_text?: string;
      /** @description Gives, in case display_as_link is true, target URL */
      url?: string;
    };
    nodes_NodeInfo: {
      /** @description ID of the volume to which this item belongs */
      volume_id?: number;
      /** @description Unique identifier of this item */
      id?: number;
      /** @description ID of the parent container */
      parent_id?: number;
      /** @description Item name */
      name?: string;
      /** @description Item type, as a number */
      type?: number;
      /** @description Item description */
      description?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) Date of creation
       */
      create_date?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) Date of last modification
       */
      modify_date?: string;
      /** @description Is this item reserved */
      reserved?: boolean;
      /** @description ID of user that reserved this item */
      reserved_user_id?: number;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) Date this item was reserved
       */
      reserved_date?: string;
      /** @description Indicates if the item is hidden */
      hidden?: boolean;
      /** @description Path to the icon for the type of this item */
      icon?: string;
      /** @description Mime type of the object */
      mime_type?: string;
      /** @description ID of original item - used when this item is a shortcut */
      original_id?: number;
      /** @description Item type, as a word */
      type_name?: string;
      /** @description Is this item a container */
      container?: boolean;
      /** @description Size of this item */
      size?: number;
      perm_see?: boolean;
      perm_see_contents?: boolean;
      perm_modify?: boolean;
      perm_modify_attributes?: boolean;
      perm_modify_permissions?: boolean;
      perm_create?: boolean;
      perm_delete?: boolean;
      perm_delete_versions?: boolean;
      perm_reserve?: boolean;
      perm_add_major_version?: boolean;
      cell_metadata?: components["schemas"]["nodes_CellMetadata"];
      menu?: string;
      /** @description Whether this node has been favorited by the current user */
      favorite?: boolean;
      /** @description Size of this item with an appropriate units based on type (i.e. 11 items or 7 KB) */
      size_formatted?: string;
      reserved_user_login?: string;
      /** @description URL for getting available actions on this item */
      action_url?: string;
      /** @description URL for getting metadata about this item's parent container */
      parent_id_url?: string;
      /** @description Actions possible on this node (only with query-parameter actions=true) */
      actions?: components["schemas"]["nodes_ActionInfo"][];
    };
    nodes_ActionsInfo: {
      /** @description Actions possible on this node. The returned actions also includes spacing (represented by dashes '-') */
      actions?: components["schemas"]["nodes_ActionInfo"][];
      data?: components["schemas"]["nodes_ActionData"];
      definitions?: components["schemas"]["nodes_Definitions"];
      definitions_map?: components["schemas"]["nodes_DefinitionsMap"];
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
    };
    nodes_ActionInfo: {
      /** @description The action's name (as shown in UI representation) */
      name?: string;
      /** @description The URL to be called on the action's execution */
      url?: string;
      /** @description List of sub-actions available. This appears when the action is a sub-menu */
      children?: components["schemas"]["nodes_ActionInfoChild"][];
      signature?: string;
    };
    nodes_ActionInfoChild: {
      /** @description The action's name (as shown in UI representation) */
      name?: string;
      /** @description The URL to be called on the action's execution */
      url?: string;
      signature?: string;
    };
    nodes_ActionData: Record<string, any>;
    nodes_InfoDefinitions: Record<string, any>;
    nodes_Definitions: Record<string, any>;
    nodes_DefinitionsBase: Record<string, any>;
    nodes_DefinitionsMap: Record<string, any>;
    nodes_DefinitionsOrder: Record<string, any>;
    nodes_ThumbnailInfo: {
      data?: components["schemas"]["nodes_ThumbnailInfoData"];
      definitions?: components["schemas"]["nodes_ThumbnailInfoDefinitions"];
      /** @description This is populated with children of item(s) in definitions_order if applicable. These items will also be in definitions and data. Always returns empty for addablenodetypes */
      definitions_map?: Record<string, any>;
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
    };
    nodes_ThumbnailInfoData: {
      /** @description Path of the thumbnail resource ( e.g. 'api/v1/nodes/{id}/thumbnails/medium/content' ) */
      medium?: string;
    };
    nodes_ThumbnailInfoDefinitions: {
      medium?: components["schemas"]["nodes_ThumbnailInfoDefinitionsSize"];
    };
    nodes_ThumbnailInfoDefinitionsSize: {
      /** @description Size of the thumbnail in bytes */
      file_size?: number;
      /** @description MIME type of the thumbnail */
      mime_type?: string;
      /** @description The thumbnail type (currently only the medium type is supported) */
      type?: string;
      /** @description Path of the thumbnail resource ( e.g. 'api/v1/nodes/{id}/thumbnails/medium/content' ) */
      url?: string;
    };
    nodes_TypeInfo: {
      /** @description True if this document has advanced versioning, false otherwise */
      advanced_versioning?: boolean;
      /** @description True if this object is a container */
      container?: boolean;
    };
    nodes_V2Collection: {
      /** @description Paging Information */
      paging?: components["schemas"]["nodes_V2Paging"][];
      /** @description Sorting information */
      sorting?: components["schemas"]["nodes_V2Sorting"][];
    };
    nodes_V2Columns: {
      /** @description data type */
      data_type?: number;
      /** @description key */
      key?: string;
      /** @description name */
      name?: string;
      /** @description sort_key */
      sort_key?: string;
    };
    nodes_V2Data: {
      /** @description columns */
      columns?: components["schemas"]["nodes_V2Columns"][];
      /** @description Properties */
      properties?: components["schemas"]["nodes_V2Properties"][];
    };
    nodes_V2ReleaseData: {
      /** @description columns */
      columns?: components["schemas"]["nodes_V2Columns"][];
      /** @description Properties */
      properties?: components["schemas"]["nodes_V2ReleaseProperties"][];
    };
    nodes_ListContentsData: {
      /** @description Properties */
      properties?: components["schemas"]["nodes_ListContentsProperties"][];
    };
    nodes_V2DataPost: {
      /** @description Properties */
      properties?: components["schemas"]["nodes_V2Properties"][];
    };
    nodes_V2SystemAttributesDataPost: {
      /** @description Properties */
      properties?: components["schemas"]["nodes_V2Properties"][];
      /** @description System Attributes */
      system_attributes?: components["schemas"]["nodes_V2SystemAttributes"][];
    };
    nodes_V2DataLinks: {
      data?: components["schemas"]["nodes_V2Links"][];
    };
    nodes_V2Empty: {
      /** @description results */
      results?: components["schemas"]["nodes_V2EmptyResults"][];
      /** @description links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
    };
    nodes_V2EmptyResults: Record<string, any>;
    nodes_V2Links: {
      /** @description Self link */
      self?: components["schemas"]["nodes_V2Link"][];
    };
    nodes_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    nodes_V2Paging: {
      /** @description limit */
      limit?: number;
      /** @description links */
      links?: Record<string, any>;
      /** @description page */
      page?: number;
      /** @description page total */
      page_total?: number;
      /** @description range max */
      range_max?: number;
      /** @description range min */
      range_min?: number;
      /** @description total count */
      total_count?: number;
    };
    nodes_V2Properties: {
      /** @description Whether or not this item uses standard or advanced versioning */
      advanced_versioning?: boolean;
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description (Can be time-zone aware) The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["nodes_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description Globally unique id */
      guid?: string;
      /** @description Indicates if the item is hidden */
      hidden?: boolean;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["nodes_NameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description (Can be time-zone aware) The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The item's status */
      status?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description TRUE if this item has versionable content, FALSE otherwise */
      versionable?: boolean;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    nodes_V2ReleaseProperties: {
      /** @description Whether or not this item uses standard or advanced versioning */
      advanced_versioning?: boolean;
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description (Can be time-zone aware) The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["nodes_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description Globally unique id */
      guid?: string;
      /** @description Indicates if the release/revision has an associated Generation */
      has_generation?: boolean;
      /** @description Indicates if the item is hidden */
      hidden?: boolean;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /** @description Indicates if this is a non-modifiable release/revision */
      locked?: boolean;
      /**
       * Format: date-time
       * @description The date when the release/revision was locked
       */
      locked_date?: string;
      /** @description The ID of the user who locked this release/revision */
      locked_user_id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["nodes_NameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description The number of the release */
      release?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description (Can be time-zone aware) The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The number of the revision */
      revision?: number;
      /** @description The item's status */
      status?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description TRUE if this item has versionable content, FALSE otherwise */
      versionable?: boolean;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    nodes_ListContentsProperties: {
      /** @description The ID of the volume to which this item belongs */
      volume_id?: number;
      /** @description The item's unique object ID */
      id?: number;
      /** @description The object ID of the item's parent */
      parent_id?: number;
      /** @description The name of the item */
      name?: string;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description Description of the item */
      description?: string;
      /** @description (Can be time-zone aware) The date that the item was created */
      create_date?: string;
      /** @description The ID of the user who created the item */
      create_user_id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The ID of the user who modified the item */
      modify_user_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description The ID of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description (Can be time-zone aware) The date on which the item was reserved */
      reserved_date?: string;
      /** @description The item's order (order 0 is Master) */
      order?: number;
      /** @description The item's icon */
      icon?: string;
      /** @description Indicates if the item is hidden */
      hidden?: boolean;
      /** @description The item's file size (in bytes) */
      size?: number;
      /** @description The item's MIME type */
      mime_type?: string;
      /** @description The item's original ID */
      original_id?: number;
    };
    nodes_V2SystemAttributes: {
      /** @description A sample System Attribute */
      attribute_key?: string;
    };
    nodes_V2ResponseCollection: {
      /** @description Results */
      results?: components["schemas"]["nodes_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2Links"][];
    };
    nodes_V2ResponseElement: {
      /** @description Results */
      results?: components["schemas"]["nodes_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
    };
    nodes_V2ResponseElementPost: {
      /** @description Results */
      results?: components["schemas"]["nodes_V2ResultPost"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
    };
    nodes_V2ResponseElementSystemAttributesPost: {
      /** @description Results */
      results?: components["schemas"]["nodes_V2SystemAttributesResultPost"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
    };
    nodes_V2Result: {
      /** @description Data */
      data?: components["schemas"]["nodes_V2Data"][];
    };
    nodes_V2ReleaseResult: {
      /** @description Data */
      data?: components["schemas"]["nodes_V2ReleaseData"][];
    };
    nodes_ListContentsResult: {
      /** @description Data */
      data?: components["schemas"]["nodes_ListContentsData"][];
    };
    nodes_V2ResultPost: {
      /** @description Data */
      data?: components["schemas"]["nodes_V2DataPost"][];
    };
    nodes_V2SystemAttributesResultPost: {
      /** @description Data */
      data?: components["schemas"]["nodes_V2SystemAttributesDataPost"][];
    };
    nodes_V2Sort: Record<string, any>;
    nodes_V2Sorting: {
      sort?: components["schemas"]["nodes_V2Sort"][];
    };
    nodes_V2ResponseNodesActions: {
      /** @description Results */
      results?: components["schemas"]["nodes_V2NodeActionsId"][];
      /** @description Links */
      links?: components["schemas"]["nodes_V2Links"][];
    };
    nodes_V2NodeActionsId: {
      /** @description ID */
      "<id>"?: components["schemas"]["nodes_V2NodeActionsData"][];
    };
    nodes_V2NodeActionsData: {
      /** @description Data */
      data?: components["schemas"]["nodes_V2Actions"][];
      /** @description Map */
      map?: Record<string, any>;
      /** @description Order */
      order?: string;
    };
    nodes_V2Actions: {
      /** @description Self link */
      "<action>"?: components["schemas"]["nodes_V2Link"][];
    };
    nodes_v2ResponseUpdateCollection: {
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["nodes_v2ResponseUpdateCollectionData"][];
    };
    nodes_v2ResponseUpdateCollectionData: {
      /** @description Update collection results */
      data?: components["schemas"]["nodes_V2UpdateCollectionStatus"][];
    };
    nodes_V2UpdateCollectionStatus: {
      /** @description Update collection results */
      status?: components["schemas"]["nodes_V2UpdateCollectionStatusDetails"][];
    };
    nodes_V2UpdateCollectionStatusDetails: {
      /** @description No of items failed to add or remove from collection */
      error_count?: number;
      /** @description No of items successfully added or removed from collection */
      success_count?: number;
      /** @description Total number of items sent as apart of the request */
      total_count?: number;
      /** @description No of items failed to add or remove from collection */
      errors?: components["schemas"]["nodes_V2UpdateCollectionErrors"][];
    };
    nodes_V2UpdateCollectionErrors: {
      /** @description Id of node to added or removed from collection */
      id?: number;
      /** @description name of node to added or removed from collectionn */
      name?: string;
      /** @description Error occurend while adding or removing the node in collection */
      error?: string;
    };
    nodes_DoctemplatesInfo: {
      /** @description Links */
      links?: components["schemas"]["nodes_V2DataLinks"][];
      results?: components["schemas"]["nodes_TemplateTypeInfo"][];
    };
    nodes_TemplateTypeInfo: {
      /** @description specifies whether template type is container or not */
      container?: boolean;
      /** @description This parameter specifies whether templates are available or not. This parameter will be available only when group_by request parameter is available */
      hasTemplates?: boolean;
      /** @description Name of the template type. For example: Document */
      name?: string;
      /** @description This response parameter specifies the list of recently used templates */
      recentlyUsedTemplates?: components["schemas"]["nodes_TemplateInfo"][];
      /** @description Subtype of the template type. For example: 144 */
      subtype?: number;
      /** @description This response parameter will be available only when group_by request parameter is not available */
      templates?: components["schemas"]["nodes_TemplateInfo"][];
      /** @description This response parameter will be available only when group_by request parameter is available */
      templatesGroup?: components["schemas"]["nodes_TemplateTypeByClassInfo"][];
    };
    nodes_TemplateTypeByClassInfo: {
      /** @description classification id */
      id?: number;
      /** @description Name of the Classification */
      name?: string;
      /** @description Templates grouped by particular classification */
      templates?: components["schemas"]["nodes_TemplateInfo"][];
    };
    nodes_TemplateInfo: {
      /** @description Data ID of the template */
      id?: number;
      /** @description Specifies whether DPWizard module is available or not */
      isDPWizardAvailable?: boolean;
      /** @description mime type of the template */
      mime_type?: string;
      /** @description Name of the template */
      name?: string;
      /**
       * Format: date
       * @description Recently used date ( This field will be available only for recently used templates)
       */
      recentlyUsedDate?: string;
      /** @description Exact size of the template */
      size?: string;
      /** @description Formatted size of the template */
      sizeformatted?: number;
      /** @description Subtype of the template. For example: 144 */
      type?: number;
    };
    nodes_CellMetadataData: Record<string, any>;
    nodes_CellMetadataDefinitions: Record<string, any>;
    nodes_V1DataPost: {
      /** @description Properties */
      Properties?: components["schemas"]["nodes_V1Properties"][];
    };
    nodes_V1Properties: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description (Can be time-zone aware) The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["nodes_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description Globally unique id */
      guid?: string;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["nodes_NameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description (Can be time-zone aware) The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description TRUE if this item has versionable content, FALSE otherwise */
      versionable?: boolean;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    nodes_NameMultilingual: {
      /** @description Name in English */
      en?: string;
      /** @description Name auf Deutsch */
      de?: string;
    };
    nodes_DescriptionMultilingual: {
      /** @description Description in English */
      en?: string;
      /** @description Beschreibung in Deutsch */
      de?: string;
    };
    notifications_notification_interests_node: {
      /** @description Results */
      results?: components["schemas"]["notifications_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["notifications_V2DataLinks"][];
    };
    notifications_V2Result: {
      /** @description Data */
      data?: components["schemas"]["notifications_datainterests"][];
    };
    notifications_datainterests: {
      /** @description interests */
      interests?: components["schemas"]["notifications_interests"][];
    };
    notifications_interests: {
      /** @description interests */
      id?: number;
      /** @description interests */
      interest?: string;
      /** @description interests */
      report?: number;
    };
    notifications_V2DataLinks: {
      data?: components["schemas"]["notifications_V2Links"][];
    };
    notifications_V2Links: {
      /** @description Self link */
      self?: components["schemas"]["notifications_V2Link"][];
    };
    notifications_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    notifications_set_notification_interests_node: {
      /** @description Results */
      results?: components["schemas"]["notifications_V2EmptyResults"][];
      /** @description Links */
      links?: components["schemas"]["notifications_V2DataLinks"][];
    };
    notifications_V2EmptyResults: Record<string, any>;
    permissions_V2DataPermissions: {
      /** @description permissions */
      permissions?: components["schemas"]["permissions_V2Permissions"][];
    };
    permissions_V2Permissions: {
      /** @description The permissions associated with this right */
      permissions?: string;
      /** @description The ID of the user/group associated with this right */
      right_id?: number;
      /**
       * @description The type of right
       * @enum {string}
       */
      type?: "owner" | "group" | "public" | "custom";
    };
    permissions_V2ResponsePermissions: {
      /** @description Results */
      results?: components["schemas"]["permissions_V2ResultPermissions"][];
      /** @description Links */
      links?: components["schemas"]["permissions_V2DataLinks"][];
    };
    permissions_V2ResponsePermission: {
      /** @description Results */
      results?: components["schemas"]["permissions_V2ResultPermissions"][];
      /** @description Links */
      links?: components["schemas"]["permissions_V2DataLinks"][];
    };
    permissions_V2ResultPermissions: {
      /** @description Data */
      data?: components["schemas"]["permissions_V2DataPermissions"][];
    };
    permissions_V2DataLinks: {
      data?: components["schemas"]["permissions_V2Links"][];
    };
    permissions_V2Links: {
      /** @description Self link */
      self?: components["schemas"]["permissions_V2Link"][];
    };
    permissions_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    permissions_V2EmptyResponse: {
      links?: components["schemas"]["permissions_V2DataLinks"][];
      results?: components["schemas"]["permissions_V2EmptyResults"][];
    };
    permissions_V2EmptyResults: Record<string, any>;
    ping_rest_api: {
      /** @description The build number of the REST API */
      build?: number;
      /** @description The base HREF URL */
      href?: string;
      /** @description The version of the REST API */
      version?: number;
    };
    processes_ProcessInfo: {
      /** @description The id of the initiated process */
      process_id: number;
    };
    processes_WorkflowDefinitionInfo: {
      results?: components["schemas"]["processes_WorkflowDefinitionResults"];
    };
    workflow_Process_TaskListResults: {
      data?: components["schemas"]["workflow_Process_TaskListDefinition"];
    };
    workflow_Process_TaskListDefinition: {
      /** @description The array contains the attachment details of the workflow instance */
      attachments?:
        components["schemas"]["workflow_Process_TaskList_attachments"];
      /** @description The array contains the data packages activated for the workflow map */
      data_packages?:
        components["schemas"][
          "workflow_Process_TaskList_WorkflowDefinitionDataPackage"
        ][];
      step_list?: {
        completed?: components["schemas"]["workFlow_Process_TaskInfo"][];
        current?: components["schemas"]["workFlow_Process_TaskInfo"][];
        next?: components["schemas"]["workFlow_Process_TaskInfo"][];
      };
      wf_details?: components["schemas"]["workFlow_Details"];
      permissions?: components["schemas"]["workflow_Permissions"];
    };
    /** @description Contains Permisions that logged in user have on the Workflow */
    workflow_Permissions: {
      /** @description check if logged in user have permission to archive the workflow */
      Archive?: boolean;
      /** @description check if logged in user have permission to change attributes of the workflow */
      ChangeAttr?: boolean;
      /** @description check if logged in user have permission to Delete the workflow */
      Delete?: boolean;
      /** @description check if logged in user have permission to change route of the workflow */
      ChangeRoute?: boolean;
      /** @description check if logged in user have permission to manage permissions of the workflow */
      ManagerPerms?: boolean;
      /** @description check if logged in user have permission to see details the workflow */
      SeeDetail?: boolean;
      /** @description check if logged in user have permission to stop the workflow */
      Stop?: boolean;
      /** @description check if logged in user have permission to suspend the workflow */
      Suspend?: boolean;
    };
    workflow_Process_TaskList_attachments: {
      /** @description attachment id */
      attachment_folder_id?: number;
    };
    workflow_StatusListInfo: {
      results?: components["schemas"]["workflow_StatusListResults"];
    };
    workflow_StatusListResults: components["schemas"]["workflow_StatusData"][];
    workflow_StatusData: {
      data?: components["schemas"]["workflow_StatusData_Info"];
      definitions?: {
        wfstatus?: components["schemas"]["workflowstatus_nodeDefinitions"];
      };
      definitions_map?: {
        wfstatus?: Record<string, any>;
      };
      definitions_order?: {
        wfstatus?: string[];
      };
      permissions?: components["schemas"]["workflow_Permissions"];
    };
    workflowstatus_nodeDefinitions: {
      assignee?:
        components["schemas"]["workflowstatus_nodeDefinitions_properties"];
      date_initiated?:
        components["schemas"]["workflowstatus_nodeDefinitions_properties"];
      due_date?:
        components["schemas"]["workflowstatus_nodeDefinitions_properties"];
      status_key?:
        components["schemas"]["workflowstatus_nodeDefinitions_properties"];
      step_name?:
        components["schemas"]["workflowstatus_nodeDefinitions_properties"];
      wf_name?:
        components["schemas"]["workflowstatus_nodeDefinitions_properties"];
    };
    workflowstatus_nodeDefinitions_properties: {
      allow_undefined?: boolean;
      bulk_shared?: boolean;
      default_value?: Record<string, any>;
      hidden?: boolean;
      key?: string;
      max_value?: Record<string, any>;
      min_value?: Record<string, any>;
      multi_value?: boolean;
      name?: string;
      read_only?: boolean;
      required?: boolean;
      type?: number;
      type_name?: string;
      description?: string;
      persona?: string;
      valid_values?: Record<string, any>;
      valid_values_name?: Record<string, any>;
    };
    workflow_StatusData_Info: {
      wfstatus?: components["schemas"]["workflow_StatusData_Properties"];
    };
    workflow_StatusData_Properties: {
      process_id?: number;
      assignee?: components["schemas"]["workflow_Process_TaskAssigneeInfo"][];
      parallel_steps?: components["schemas"]["workFlow_Process_TaskInfo"][];
      assignee_count?: number;
      comments_on?: boolean;
      current_assignee?: string;
      /**
       * Format: date-time
       * @description Date Initiated of workflow
       */
      date_initiated?: string;
      /**
       * Format: date-time
       * @description Due date of workflow
       */
      due_date?: string;
      status_key?: string;
      step_name?: string;
      steps_count?: number;
      subprocess_id?: number;
      /** @description Name of the Workflow */
      wf_name?: string;
      /** @description Workflow task id */
      task_id?: number;
    };
    workflow_Process_TaskListInfo: {
      results?: components["schemas"]["workflow_Process_TaskListDefinition"];
    };
    workflow_Process_TaskAssigneeInfo: {
      /** @description user ID of the assignee */
      userId?: number;
      /** @description login name of the assignee */
      loginName?: string;
      /** @description First Name of the assignee */
      firstName?: string;
      /** @description Last Name of the assignee */
      lastName?: string;
      /** @description Email address of the assignee */
      emailAddress?: string;
      /** @description Phone number of the assignee */
      phone?: string;
    };
    workflow_InitiatorInfo: {
      /** @description First Name of the Initiator */
      firstName?: string;
      /** @description Last Name of the Initiator */
      lastName?: string;
      /** @description login Name of the Initiator */
      loginName?: string;
      /** @description user Id the assignee */
      userId?: number;
    };
    workFlow_Process_TaskInfo: {
      /** @description process ID */
      process_id?: number;
      /** @description Sub process ID */
      subprocess_id?: number;
      /** @description Task Id of the Workflow */
      task_id?: number;
      /** @description Task Name of the Workflow */
      task_name?: string;
      /**
       * Format: date-time
       * @description Task Due date
       */
      task_due_date?: string;
      /**
       * Format: date-time
       * @description Task Start date
       */
      task_start_date?: string;
      /** @description Task Status */
      task_status?: string;
      /** @description The array containing the information collected for one task of the workflow */
      task_assignees?:
        components["schemas"]["workflow_Process_TaskAssigneeInfoObject"];
    };
    workflow_Process_TaskAssigneeInfoObject: {
      assignee?: components["schemas"]["workflow_Process_TaskAssigneeInfo"][];
      /** @description count of assignees */
      assigneeCount?: number;
      /** @description Current Assignee */
      currentAssignee?: string;
    };
    workFlow_Details: {
      /**
       * Format: date-time
       * @description Date Initiated of workflow
       */
      date_initiated?: string;
      /**
       * Format: date-time
       * @description Due date of workflow
       */
      due_date?: string;
      /** @description Initiator Details of Workflow */
      initiator?: components["schemas"]["workflow_InitiatorInfo"];
      /** @description Status of the workdflow */
      status?: string;
      /** @description Name of the Workflow */
      wf_name?: string;
      /** @description WorkFlow Instance ID */
      work_workID?: number;
    };
    processes_AuthenticationInfo: {
      /** @description This is cache id which filled will be validated at server. */
      authentication_id?: number;
      /** @description password of the assigned user, will be used for validation if authentication_id is not available. */
      password?: string;
    };
    processes_WorkflowActivitiesResults: {
      results?: components["schemas"]["processes_WorkflowActivitiesData"];
    };
    processes_WorkflowActivitiesData: {
      /** @description The array containing the information collected for one task of the workflow */
      data?: components["schemas"]["processes_WorkflowActivitiesInfo"][];
    };
    processes_WorkflowActivitiesInfo: {
      /** @description Taken task action */
      action?: string;
      action_properties?:
        components["schemas"]["processes_ActionPropertiesInfo"];
      /** @description Comment of task performer */
      comment?: string;
      /**
       * Format: date-time
       * @description Date of task action
       */
      date?: string;
      /** @description ID of task performer */
      user_id?: number;
    };
    processes_ActionPropertiesInfo: {
      /** @description Event property when disposition or attachment was performed */
      event?: string;
      /** @description Disposition label */
      label?: string;
      node?: components["schemas"]["processes_NodeInfo"];
      /** @description ID of assignee when send for review or forward was performed */
      user_id?: number;
    };
    processes_NodeInfo: {
      /** @description Attachment description */
      description?: string;
      /** @description Attachment node ID */
      id?: number;
      /** @description Attachment mime-type */
      "mime-type"?: string;
      /** @description Attachment name */
      name?: string;
      /** @description Attachment type */
      type?: number;
    };
    workflow_Process_TaskList_WorkflowDefinitionDataPackage: {
      /** @description Data Package ID */
      USERDATA?: number;
      /** @description Description of the workflow package */
      DESCRIPTION?: string;
      /** @description Workflow package type id */
      TYPE?: number;
      /** @description Workflow package sub-type id */
      SUBTYPE?: number;
    };
    processes_WorkflowDefinitionResults: {
      definition?: components["schemas"]["processes_WorkflowDefinition"];
    };
    processes_WorkflowDefinition: {
      /** @description The array contains the data packages activated for the workflow map */
      data_packages?:
        components["schemas"]["processes_WorkflowDefinitionDataPackage"][];
      /** @description The array contains the tasks available in the workflow map */
      tasks?: components["schemas"]["processes_WorkflowDefinitionTask"][];
      /** @description This is the workflow map id */
      workflow_id?: number;
    };
    processes_WorkflowDefinitionDataPackage: {
      /** @description Workflow data package specific properties */
      data?: number;
      /** @description Description of the workflow package */
      description?: string;
      /** @description Workflow package type id */
      type?: number;
      /** @description Workflow package sub-type id */
      sub_type?: number;
    };
    processes_WorkflowDefinitionTask: {
      /** @description Workflow task specific properties */
      data?: number;
      /** @description Description of the workflow task */
      description?: string;
      /** @description Instructions of the workflow task */
      instructions?: string;
      /** @description Workflow task sub-type id */
      sub_type?: number;
      /** @description Workflow task id */
      task_id?: number;
      /** @description Title of the workflow task */
      title?: string;
      /** @description Workflow task type id */
      type?: number;
    };
    search_RegionInfo: {
      /** @description Regions Data */
      data?: components["schemas"]["search_RegionData"][];
    };
    search_RegionData: {
      /** @description Whether the region is displayable, which allows users to display regions on the Search Results page */
      displayable?: boolean;
      /** @description The region's display name */
      display_name?: string;
      /** @description Whether the region is a facet */
      facet?: boolean;
      /** @description The name of the region */
      name?: string;
      /** @description Whether the region is queryable, which allows users to choose the regions that appear as System Attributes on the Advanced Search Page */
      queryable?: boolean;
      /** @description Whether the region is searched automatically */
      search_by_default?: boolean;
      /** @description Whether the region is sortable */
      sortable?: boolean;
    };
    search_SliceInfo: {
      /** @description Slices Data */
      data?: components["schemas"]["search_SliceData"][];
    };
    search_SliceData: {
      /** @description Whether the slice is a default slice */
      default_slice?: boolean;
      /** @description ID of the slice */
      id?: number;
      /** @description Name of the slice */
      name?: string;
    };
    search_SearchInfo: {
      collection?: components["schemas"]["search_collectionData"];
      links?: components["schemas"]["search_linksData"];
      results?: components["schemas"]["search_resultsData"][];
    };
    search_collectionData: {
      paging?: components["schemas"]["search_pagingData"];
      searching?: components["schemas"]["search_searchingData"];
      sorting?: components["schemas"]["search_sortingData"];
    };
    search_sortingData: {
      links?: components["schemas"]["search_linksSortingData"];
      /** @description A list of region names prepended with sort direction specifying the order in which the results are sorted */
      sort?: string[];
    };
    search_linksSortingData: {
      asc_OTObjectDate?: components["schemas"]["search_searchLinksSelfData"];
      asc_OTObjectSize?: components["schemas"]["search_searchLinksSelfData"];
      desc_OTObjectDate?: components["schemas"]["search_searchLinksSelfData"];
      desc_OTObjectSize?: components["schemas"]["search_searchLinksSelfData"];
      relevance?: components["schemas"]["search_searchLinksSelfData"];
    };
    search_resultsData: {
      data?: components["schemas"]["search_dataResultsData"];
      links?: components["schemas"]["search_linksResultsData"];
      metadata?: string;
      search_result_metadata?:
        components["schemas"]["search_searchMetadataResultsData"];
    };
    search_searchMetadataResultsData: {
      /** @description Indicates if this is a versioned object or not */
      current_version?: boolean;
      /** @description URL mapped location to access the result */
      object_href?: string;
      /** @description The unique identifier in the search index the result came from */
      object_id?: string;
      /** @description result style ( 264 indicates an Enterprise style result ) */
      result_type?: number;
      /** @description The node ID of the search engine that generated the result */
      source_id?: number;
      /** @description Representing the type of the version */
      version_type?: string;
    };
    search_dataResultsData: {
      properties?: components["schemas"]["search_propertiesDataResultsData"];
      regions?: string;
      versions?: components["schemas"]["search_versionsDataResultsData"];
    };
    search_versionsDataResultsData: {
      /**
       * Format: date-time
       * @description The date that the version was created
       */
      create_date?: string;
      /** @description A description of the version */
      description?: string;
      /**
       * Format: date-time
       * @description The date the file was created
       */
      file_create_date?: string;
      /**
       * Format: date-time
       * @description The date the file was last modified
       */
      file_modify_date?: string;
      /** @description The file name of the version */
      file_name?: string;
      /** @description The file size of the version */
      file_size?: number;
      /** @description The file extension of the version */
      file_type?: string;
      /** @description The ID of the version */
      id?: number;
      /** @description Indicates if this is a non-modifiable version */
      locked?: boolean;
      /**
       * Format: date-time
       * @description The date of the version where locked
       */
      locked_date?: string;
      /** @description The ID of the user who locked this version */
      locked_user_id?: number;
      /** @description The mime type of the object */
      mime_type?: string;
      /**
       * Format: date-time
       * @description The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The name of the file */
      name?: string;
      /** @description The user ID of the versionâ€™s owner */
      owner_id?: number;
      /** @description The storage provider ID */
      provider_id?: number;
      /** @description The version ID */
      version_id?: number;
      /** @description The version number of the node */
      version_number?: number;
      /** @description The number of the source version */
      version_number_major?: number;
      /** @description The number of the edited version */
      version_number_minor?: number;
      /** @description Version number of the node */
      version_number_name?: string;
    };
    search_propertiesDataResultsData: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /**
       * Format: data-time
       * @description The date that the item was created
       */
      create_date?: string;
      /** @description The ID of the user who created the item */
      create_user_id?: number;
      /** @description A description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["search_descriptionMultilingual"];
      /**
       * Format: date
       * @description The external create date
       */
      external_create_date?: string;
      /** @description The external identity */
      external_identity?: string;
      /** @description The external identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description The external modify date
       */
      external_modify_date?: string;
      /** @description The external source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description The item's unique object ID */
      id?: number;
      /** @description The mime type of the object */
      mime_type?: string;
      /**
       * Format: date-time
       * @description The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The ID of the user who modified the item */
      modify_user_id?: number;
      /** @description  The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["search_nameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description  The group ID of the owner of this item */
      owner_group_id?: number;
      /** @description The user ID of the owner of this item */
      owner_user_id?: number;
      /** @description The object ID of the item's parent */
      parent_id?: number;
      /** @description This is the permissions level */
      permissions_model?: string;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /**
       * Format: date
       * @description The date on which the item was reserved
       */
      reserved_date?: string;
      /** @description Indicates if this item is shared externally or not */
      reserved_shared_collaboration?: boolean;
      /** @description The ID of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description A short description of the item */
      short_summary?: string;
      /** @description The size of this item */
      size?: number;
      /** @description The size of this item with an appropriate units based on type */
      size_formatted?: string;
      /** @description A description of the item */
      summary?: string;
      /** @description An ID representing the type of the object */
      type?: number;
      /** @description The name of the node's object type */
      type_name?: string;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description ID of the volume to which this item belongs */
      volume_id?: number;
    };
    search_formData: {
      /** @description The ID of the form */
      id?: number;
      /** @description The display name of the form */
      name?: string;
      /** @description Whether or not the form is writeable by the user */
      read_only?: boolean;
    };
    search_recentFormData: {
      /**
       * Format: date-time
       * @description The date the form was last accessed by the user
       */
      accessed?: string;
      /** @description The ID of the form */
      id?: number;
      /** @description The display name of the form */
      name?: string;
    };
    search_searchbarData: {
      full_text?: components["schemas"]["search_fulltextData"];
    };
    search_fulltextData: {
      /** @description Search Mode options */
      lookfor?: string;
      /** @description The kind of related terms included in the search */
      modifier?: string;
    };
    search_sliceData: {
      /** @description The ID of the slice. Typically a number, but can be a 'From here' slice, which has a number that represents the slice ID, a vertical bar, then a number than represents the container ID the search is constrained to, eg: '3423|2000' */
      id?: string;
      /** @description The display name of the slice */
      name?: string;
      /** @description Whether or not the slice is the default selected for UI dropdowns */
      selected?: boolean;
    };
    search_descriptionMultilingual: {
      /** @description Description in English */
      en?: string;
      /** @description Beschreibung in Deutsch */
      de?: string;
    };
    search_nameMultilingual: {
      /** @description Name in English */
      en?: string;
      /** @description Name auf Deutsch */
      de?: string;
    };
    search_linksResultsData: {
      ancestors?: components["schemas"]["search_allLinksResultsData"][];
      ancestors_nodes?: components["schemas"]["search_allLinksResultsData"][];
      parent?: components["schemas"]["search_allLinksResultsData"];
      parent_nodes?: components["schemas"]["search_allLinksResultsData"];
    };
    search_allLinksResultsData: {
      href?: string;
      name?: string;
    };
    search_searchingData: {
      /** @description The search cacheID for the result set */
      cache_id?: number;
      facets?: components["schemas"]["search_facetsSearchingData"];
      /** @description A title for the result set */
      result_title?: string;
      /** @description A list of region names specifying the order in which to display the regions. There can be duplicates */
      regions_order?: string[];
      regions_metadata?: components["schemas"]["search_regionsMetadataData"];
    };
    search_regionsMetadataData: {
      OTObjectDate?: components["schemas"]["search_regionsMetadataSelfData"];
      OTLocation?: components["schemas"]["search_regionsMetadataSelfData"];
      OTMIMEType?: components["schemas"]["search_regionsMetadataSelfData"];
      OTName?: components["schemas"]["search_regionsMetadataSelfData"];
      OTObjectSize?: components["schemas"]["search_regionsMetadataSelfData"];
    };
    search_regionsMetadataSelfData: {
      persona?: string;
      name?: string;
      type?: number;
    };
    search_facetsSearchingData: {
      available?:
        components["schemas"]["search_availableFacetsSearchingData"][];
    };
    search_availableFacetsSearchingData: {
      count?: number;
      count_exceeded?: boolean;
      display_name?: string;
      facet_items?: components["schemas"]["search_facetItems"][];
      name?: string;
      type?: string;
    };
    search_facetItems: {
      count?: number;
      display_name?: string;
      value?: string;
    };
    search_pagingData: {
      /** @description Maximum number of items returned per page */
      limit?: number;
      /** @description Number of the current page */
      page?: number;
      /** @description Total number of pages available */
      page_total?: number;
      /** @description Number of the ending item for this page */
      range_max?: number;
      /** @description Number of the starting item for this page */
      range_min?: number;
      /** @description The header for the result page */
      result_header_string?: string;
      /** @description Total number of items available */
      total_count?: number;
    };
    search_searchLinksData: {
      self?: components["schemas"]["search_searchLinksSelfData"];
    };
    search_searchLinksSelfData: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    search_linksData: {
      data?: components["schemas"]["search_searchLinksData"];
    };
    search_membersInfoData: {
      personal_search_forms?: components["schemas"]["search_formData"][];
      recent_search_forms?: components["schemas"]["search_recentFormData"][];
      search_bar_settings?: components["schemas"]["search_searchbarData"];
      system_search_forms?: components["schemas"]["search_formData"][];
      slices?: components["schemas"]["search_sliceData"][];
    };
    search_templateDisplayData: {
      data?: components["schemas"]["search_templateDisplayDataData"];
    };
    search_templateDisplaySettings: {
      /** @description Number of results to return per page */
      page_size?: number;
      /** @description Whether or not to show the result's keywords */
      show_keywords?: boolean;
      /** @description Whether or not to show the result's location path */
      show_location_path?: boolean;
      /** @description Key value indicating which display style to use */
      style_id?: number;
      display_regions?: components["schemas"]["search_displayRegionsObject"];
      facet_regions?: components["schemas"]["search_facetRegionsObject"];
      sort_regions?: components["schemas"]["search_sortRegionsObject"];
      summary_description?: components["schemas"]["search_summDescObject"];
    };
    search_templateProperties: {
      /** @description dataID of the template */
      id?: number;
      /** @description Display name of the template */
      name?: string;
      /** @description ID of the data type of the template */
      type?: number;
      /** @description Display name of the data type of the template */
      type_name?: string;
    };
    search_templateDisplayDataData: {
      display?: components["schemas"]["search_templateDisplaySettings"];
      properties?: components["schemas"]["search_templateProperties"];
    };
    search_availableSelectedObject: {
      /** @description ID string for the option */
      key?: string;
      /** @description Display name for the option */
      name?: string;
    };
    search_displayRegionsObject: {
      /** @description List of available display regions for the template */
      available?: components["schemas"]["search_availableSelectedObject"][];
      /** @description Ordered list of selected display regions for the template */
      selected?: components["schemas"]["search_availableSelectedObject"][];
    };
    search_facetRegionsObject: {
      /** @description List of available facet regions for the template */
      available?: components["schemas"]["search_availableSelectedObject"][];
      /** @description Ordered list of selected facet regions for the template */
      selected?: components["schemas"]["search_availableSelectedObject"][];
    };
    search_sortRegionsObject: {
      /** @description List of available sort regions for the template */
      available?: components["schemas"]["search_availableSelectedObject"][];
      /** @description Ordered list of selected sort regions for the template */
      selected?: components["schemas"]["search_availableSelectedObject"][];
    };
    search_summDescObject: {
      /** @description List of available summary and description options */
      available?: components["schemas"]["search_availableSelectedObject"][];
      /** @description The selected summary and description option */
      selected?: string;
    };
    search_MembersInfo: {
      links?: components["schemas"]["search_linksData"];
      results?: components["schemas"]["search_membersInfoData"];
    };
    search_TemplateDisplayInfo: {
      links?: components["schemas"]["search_linksData"];
      results?: components["schemas"]["search_templateDisplayData"];
    };
    search_WorkflowDefinitionResults: {
      definition?: components["schemas"]["search_WorkflowDefinition"];
    };
    search_WorkflowDefinition: {
      /** @description The array contains the data packages activated for the workflow map */
      data_packages?:
        components["schemas"]["search_WorkflowDefinitionDataPackage"][];
      /** @description The array contains the tasks available in the workflow map */
      tasks?: components["schemas"]["search_WorkflowDefinitionTask"][];
      /** @description This is the workflow map id */
      workflow_id?: number;
    };
    search_WorkflowDefinitionDataPackage: {
      /** @description Workflow data package specific properties */
      data?: number;
      /** @description Description of the workflow package */
      description?: string;
      /** @description Workflow package type id */
      type?: number;
      /** @description Workflow package sub-type id */
      sub_type?: number;
    };
    search_WorkflowDefinitionTask: {
      /** @description Workflow task specific properties */
      data?: number;
      /** @description Description of the workflow task */
      description?: string;
      /** @description Instructions of the workflow task */
      instructions?: string;
      /** @description Workflow task sub-type id */
      sub_type?: number;
      /** @description Workflow task id */
      task_id?: number;
      /** @description Title of the workflow task */
      title?: string;
      /** @description Workflow task type id */
      type?: number;
    };
    servermessages_results: {
      messages?: components["schemas"]["servermessages_message"][];
      /** @description The amount of time a message should appear on screen (in milliseconds) */
      display_interval?: number;
      /** @description A flag that indicates if message URLs are relative */
      relative_url?: boolean;
    };
    servermessages_message: {
      /** @description The text of the system message to be displayed */
      message?: string;
      /** @description (Optional) The URL to accompany the message */
      url?: string;
    };
    serverinfo_results: {
      mobile?: components["schemas"]["serverinfo_mobile"][];
      server?: components["schemas"]["serverinfo_server"][];
      viewer?: components["schemas"]["serverinfo_viewer"][];
      sessions?: components["schemas"]["serverinfo_sessions"][];
    };
    server_PrivilegeV2Collection: {
      /** @description Filtering information */
      filtering?: {
        filter?: components["schemas"]["volumes_V2FilterObj"][];
      };
      /** @description Results */
      results?: components["schemas"]["server_V2Privilege"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    server_PrivilegeV2UpdateCollection: {
      /** @description Results */
      results?: components["schemas"]["server_V2PrivilegeUpdateResults"][];
    };
    server_V2PrivilegeUpdateResults: {
      /** @description Data */
      data?: components["schemas"]["server_V2PrivilegeUpdateData"][];
    };
    server_V2PrivilegeUpdateData: {
      /** @description The ID to be used when making /v2/members/* calls. Will be null if the privilege is unrestricted */
      id?: number;
    };
    server_V2Privilege: {
      /** @description A flag that indicates if the privilege was deleted */
      deleted?: boolean;
      /** @description The ID to be used when making /v2/members/* calls. Will be null if the privilege is unrestricted */
      id?: number;
      /** @description The name of the privilege */
      name?: string;
      /** @description If the privilege is an object privilege, this will be the path to the icon. If the privilege is a usage privilege, the value will be null */
      object_icon?: string;
      /** @description If the privilege is an object privilege, this will be the name of the associate subtype. If the privilege is a usage privilege, the value will be null */
      object_name?: string;
      /** @description If the privilege is an object privilege, this will be the associate subtype. If the privilege is a usage privilege, the value will be null */
      object_type?: number;
      /** @description The UAPI type of the privilege. This will be the value of UAPI.FACTORY */
      type?: number;
      /** @description The name of the UAPI type of the privilege. */
      type_name?: string;
      /** @description If the privilege is a usage privilege, this will be the internal ID of the privilege. If the privilege is an object privilege, the value will be null */
      usage_id?: string;
      /** @description If the privilege is a usage privilege, this will be the name of the privilege. If the privilege is an object privilege, the value will be null */
      usage_name?: string;
      /** @description If the privilege is a usage privilege, this will be the internal ID of the privilege's usage type. If the privilege is an object privilege, the value will be null */
      usage_type?: string;
      /** @description If the privilege is a usage privilege, this will be the name of the usage type of the privilege. If the privilege is an object privilege, the value will be null */
      object_type_name?: string;
    };
    serverinfo_language: {
      /** @description A flag that indicates if this the default language */
      default?: boolean;
      /** @description The internal language code for the language */
      language_code?: string;
      /** @description The display name of the language */
      display_name?: string;
    };
    serverinfo_sessions: {
      /** @description A flag that indicates if this the session expiration is enabled */
      enabled?: boolean;
      /** @description A flag that indicates if the session should expire after a set time after the last request has been made */
      expire_after_last_request?: boolean;
      /** @description A flag that indicates if the session should expire after a set time after logging in */
      expire_after_last_login?: boolean;
      /** @description When the session should expire (in milliseconds) */
      session_timeout?: number;
      /** @description The amount of time a session can be inactive before an alert should appear (in milliseconds) */
      session_inactivity?: number;
      /** @description The amount of time that the user has to continue or end their session in the session timeout alert (in milliseconds) */
      session_reaction_time?: number;
      /** @description A portion of the URL to be used in order to allow the user to log out */
      logout_url?: string;
    };
    serverinfo_mobile: {
      /** @description A flag that indicates if users can download objects to their mobile device */
      offline_use?: boolean;
    };
    serverinfo_server: {
      /** @description The base Content Server URL */
      url?: string;
      /** @description Indicates the type of character encoding used by Content Server, as specified by one of the Character Encoding Constants */
      character_encoding?: number;
      /** @description The release and update version of Content Server (for example, 16.2.3) */
      version?: string;
      /** @description Indicates the locale suffix used by Content Server, for example, _en_US */
      current_locale_suffix?: string;
      /** @description A flag that indicates if domain access is enabled in Content Server */
      domain_access_enabled?: boolean;
      /** @description A flag which indicates if the time zone offset setting is enabled in Content Server */
      time_zone_offset_enabled?: boolean;
      /** @description Indicates the language code in use in Content Server */
      language_code?: string;
      /** @description List of all display languages currently enabled in Content Server */
      languages?: components["schemas"]["serverinfo_language"][];
      /** @description List of all metadata languages currently enabled in Content Server */
      metadata_languages?: components["schemas"]["serverinfo_language"][];
      /**
       * Format: date-time
       * @description Content Server's current date and time that follows ISO 8601 format, which is YYYY-MM-DDThh:mm:ss
       */
      current_date?: string;
      /** @description List of MIME types which are forced to be downloaded before they are opened in the browser window */
      force_download_for_mime_types?: string[];
      /** @description A flag which indicates if the Advanced Versioning setting is enabled in Content Server */
      advanced_versioning?: boolean;
      /** @description A flag which indicates if the Enhanced Advanced Versioning setting is enabled in Content Server */
      enhanced_advanced_versioning?: boolean;
      /** @description A flag which indicates if the Extended ECM for Government setting for mobile is enabled in Content Server */
      xecmgovInstalled?: boolean;
    };
    serverinfo_viewer: {
      content_suite?: components["schemas"]["serverinfo_cs_viewer"][];
    };
    serverinfo_cs_viewer: {
      /** @description Boolean indicating if the Content Suite Viewer is enabled */
      enabled?: boolean;
      /** @description List of MIME types which are supported by the Content Suite Viewer */
      supported_mime_types?: string[];
    };
    tabs_CategoriesTabInfo: {
      data?: components["schemas"]["tabs_Data"];
      definitions?: components["schemas"]["tabs_Definitions"];
      definitions_map?: components["schemas"]["tabs_DefinitionsMap"];
      /** @description Ordering of the categories in the categories tab */
      definitions_order?: string[];
    };
    tabs_Data: Record<string, any>;
    tabs_Definitions: Record<string, any>;
    tabs_DefinitionsMap: Record<string, any>;
    tklattribute_ValidValues: {
      /** @description Attribute Key */
      attribute_key?: string[];
    };
    tklattribute_DefaultValue: {
      /** @description Attribute Value */
      attribute_key?: string;
    };
    tklattribute_V2ResponseElement: {
      /** @description Results */
      results?: components["schemas"]["tklattribute_V2Result"][];
    };
    tklattribute_V2Result: {
      /** @description DefaultValues */
      data?: components["schemas"]["tklattribute_DefaultValue"][];
    };
    validation_CheckCategoriesInfo: {
      results?: components["schemas"]["validation_CheckCategoriesItem"][];
    };
    validation_CheckCategoriesItem: {
      /** @description The id of the node whose subtype enforces required attributes */
      id?: number;
    };
    validation_CheckNodesInfo: {
      results?: components["schemas"]["validation_CheckNodesItem"][];
    };
    validation_CheckNamesInfo: {
      results?: components["schemas"]["validation_CheckNamesItem"][];
    };
    validation_CheckNamesItem: {
      /** @description The id of the node which was matched on the parent by name */
      id?: number;
      /** @description The name of the node which was matched on the parent by name */
      name?: string;
    };
    validation_CheckNodesItem: {
      /** @description If the node exists (ie. there was a name collision), this is the node's ID, otherwise it is null */
      id?: number;
      /** @description The name that was input as part of the body parameter to this call */
      name?: string;
      /** @description If the node exists (ie. there was a name collision), this is the node's subtype, otherwise it is the suggested subtype for the name (based on file extension) */
      type?: number;
      /** @description Whether the node supports versions */
      versioned?: boolean;
    };
    versions_VersionsInfo: {
      data?: components["schemas"]["versions_VersionInfo"][];
      definitions?: components["schemas"]["versions_Definitions"];
    };
    versions_OneVersionInfo: {
      data?: components["schemas"]["versions_VersionInfo"][];
      definitions?: components["schemas"]["versions_Definitions"];
    };
    versions_CategoryInfo: {
      /** @description Category information */
      data?: components["schemas"]["versions_CategoryInfoData"][];
      definitions?: components["schemas"]["versions_Definitions"];
      /** @description Default order of the fields defined in data */
      definitions_order?: string[];
      definitions_map?: components["schemas"]["versions_DefinitionsMap"];
    };
    versions_LatestVersionInfo: {
      data?: components["schemas"]["versions_VersionInfo"][];
      definitions?: components["schemas"]["versions_Definitions"];
    };
    versions_DownloadVersion: {
      /** @description The contents of the given version of the given node */
      data?: string;
    };
    versions_DownloadNamedVersion: {
      /** @description The contents of the given version of the given node */
      data?: string;
    };
    versions_VersionThumbnails: {
      /** @description Image size information */
      data?: Record<string, any>;
      definitions?: components["schemas"]["versions_Definitions"];
      definitions_map?: components["schemas"]["versions_DefinitionsMap"];
      /** @description The order items should be displayed in. */
      definitions_order?: string[];
    };
    versions_DownloadVersionThumbnail: {
      /** @description The given image of the given node version */
      data?: string;
    };
    versions_VersionInfo: {
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The version's creation date
       */
      create_date?: string;
      /** @description The version's description */
      description?: string;
      /**
       * Format: date
       * @description External create date. This property will not be returned if the node is a Category.
       */
      external_create_date?: string;
      /** @description External identity. This property will not be returned if the node is a Category. */
      external_identity?: string;
      /** @description External identity type. This property will not be returned if the node is a Category. */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date. This property will not be returned if the node is a Category.
       */
      external_modify_date?: string;
      /** @description External source. This property will not be returned if the node is a Category. */
      external_source?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The creation date of the file used for the version. This property will not be returned if the node is a Category.
       */
      file_create_date?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The modification date of the file used for the version. This property will not be returned if the node is a Category.
       */
      file_modify_date?: string;
      /** @description The name of the file used for the version */
      file_name?: string;
      /** @description The data size of the file used for the version */
      file_size?: number;
      /** @description The extension from the name of the file used for the version */
      file_type?: string;
      /** @description Indicates if there is a Generation associated with this version */
      has_generation?: boolean;
      /** @description The ID of the version */
      id?: number;
      /** @description Legacy */
      locked?: number;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) Legacy
       */
      locked_date?: string;
      /** @description Legacy */
      locked_user_id?: number;
      /** @description The MIME type for the version */
      mime_type?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The modification date of the version
       */
      modify_date?: string;
      /** @description The ID of the owner of the version */
      owner_id?: number;
      /** @description The name of the storage provider */
      provider_name?: string;
      /** @description The ID of the version */
      version_id?: number;
      /** @description The version number */
      version_number?: number;
      /** @description The major version number. This property will not be returned if the node is a Category. */
      version_major_number?: number;
      /** @description The minor version number. This property will not be returned if the node is a Category. */
      version_minor_number?: number;
    };
    versions_VersionActionsInfo: {
      data?: components["schemas"]["versions_ActionData"];
      definitions?: components["schemas"]["versions_Definitions"];
      definitions_map?: components["schemas"]["versions_DefinitionsMap"];
      /** @description The order items should be displayed in. Note: An item in definitions_order may be a key in definitions_map. If so, that indicates there are related sub-items and they are considered higher in order than the next item in definitions_order */
      definitions_order?: string[];
    };
    versions_NewVersionInfo: {
      /** @description The ID of the version */
      id?: number;
      /** @description The version number */
      version_number?: number;
    };
    versions_ActionData: Record<string, any>;
    versions_Definitions: Record<string, any>;
    versions_DefinitionsMap: Record<string, any>;
    versions_V2CategoriesResponse: {
      links?: components["schemas"]["versions_V2Links"][];
      results?: components["schemas"]["versions_V2DataCategories"][];
    };
    versions_V2DataCategories: {
      data?: components["schemas"]["versions_V2Categories"][];
    };
    versions_V2Categories: {
      categories?: components["schemas"]["versions_V2EmptyResults"][];
    };
    versions_V2DataVersions: {
      /** @description Versions */
      versions?: components["schemas"]["versions_VersionInfo"][];
    };
    versions_V2DataVersionsSingle: {
      /** @description Versions */
      versions?: components["schemas"]["versions_VersionInfo"][];
    };
    versions_V2DataVersionsAdd: {
      /** @description Properties */
      properties?: components["schemas"]["versions_V2Properties"][];
      /** @description Versions */
      versions?: components["schemas"]["versions_VersionInfo"][];
    };
    versions_V2EmptyResults: Record<string, any>;
    versions_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    versions_V2Paging: {
      /** @description Limit */
      limit?: number;
      /** @description Page */
      page?: number;
      /** @description Page Total */
      page_total?: number;
    };
    versions_V2Links: {
      /** @description Links data */
      data?: {
        /** @description self link */
        self?: components["schemas"]["versions_V2Link"][];
      };
    };
    versions_V2Collection: {
      /** @description Collection paging */
      paging?: components["schemas"]["versions_V2Paging"][];
    };
    versions_V2ResponseVersions: {
      /** @description Results */
      results?: components["schemas"]["versions_V2ResultVersions"][];
      /** @description Collection */
      collection?: components["schemas"]["versions_V2Collection"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResponseVersionsSingle: {
      /** @description Results */
      results?: components["schemas"]["versions_V2ResultVersionsSingle"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResponseVersionsAdd: {
      /** @description Results */
      results?: components["schemas"]["versions_V2ResultVersionsAdd"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResponseVersionsDelete: {
      /** @description Results */
      results?: components["schemas"]["versions_V2EmptyResults"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResponseVersionsPurge: {
      /** @description Results */
      results?: components["schemas"]["versions_V2EmptyResults"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResultVersions: {
      /** @description Data */
      data?: components["schemas"]["versions_V2DataVersions"][];
    };
    versions_V2ResultVersionsSingle: {
      /** @description Data */
      data?: components["schemas"]["versions_V2DataVersionsSingle"][];
    };
    versions_V2ResultVersionsAdd: {
      /** @description Data */
      data?: components["schemas"]["versions_V2DataVersionsAdd"][];
    };
    versions_V2Properties: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description (Can be time-zone aware) The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["versions_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description Globally unique id */
      guid?: string;
      /** @description The item's icon */
      icon?: string;
      /** @description The item's icon (large) */
      icon_large?: string;
      /** @description The item's unique object ID */
      id?: number;
      /**
       * Format: date
       * @description (Can be time-zone aware) The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["versions_NameMultilingual"];
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description (Can be time-zone aware) The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description TRUE if this item has versionable content, FALSE otherwise */
      versionable?: boolean;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    versions_V2ResultRenditionsListAll: {
      data?: components["schemas"]["versions_V2ResultRenditionsByVersion"];
    };
    versions_V2ResultRenditionsByVersion: {
      /** @description Renditions information for each version */
      "<version_number>"?: components["schemas"]["versions_RenditionInfo"][];
    };
    versions_V2ResultRenditions: {
      /** @description Data */
      data?: components["schemas"]["versions_RenditionInfo"][];
    };
    versions_V2ResponseRenditions: {
      /** @description Results */
      results?: components["schemas"]["versions_V2ResultRenditions"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResponseRenditionsAdd: {
      /** @description Results */
      results?: components["schemas"]["versions_V2ResultRenditionsAdd"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResultRenditionsAdd: {
      /** @description Data */
      data?: components["schemas"]["versions_RenditionInfo"][];
    };
    versions_V2ResponseRenditionsReplace: {
      /** @description Results */
      results?: components["schemas"]["versions_V2ResultRenditionsReplace"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_V2ResultRenditionsReplace: {
      /** @description Data */
      data?: components["schemas"]["versions_RenditionInfo"][];
    };
    versions_RenditionInfo: {
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The rendition's creation date
       */
      create_date?: string;
      /**
       * Format: date
       * @description External create date. This property will not be returned if the node is a Category.
       */
      external_create_date?: string;
      /** @description External identity. This property will not be returned if the node is a Category. */
      external_identity?: string;
      /** @description External identity type. This property will not be returned if the node is a Category. */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date. This property will not be returned if the node is a Category.
       */
      external_modify_date?: string;
      /** @description External source. This property will not be returned if the node is a Category. */
      external_source?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The creation date of the file used for the rendition. This property will not be returned if the node is a Category.
       */
      file_create_date?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The modification date of the file used for the rendition. This property will not be returned if the node is a Category.
       */
      file_modify_date?: string;
      /** @description The name of the file used for the rendition */
      file_name?: string;
      /** @description The data size of the file used for the rendition */
      file_size?: number;
      /** @description The extension from the name of the file used for the rendition */
      file_type?: string;
      /** @description The ID of the rendition */
      id?: number;
      /** @description The MIME type for the rendition */
      mime_type?: string;
      /**
       * Format: date-time
       * @description (Can be time-zone aware) The modification date of the rendition
       */
      modify_date?: string;
      /** @description The type of the rendition */
      rendition_type?: string;
      /** @description The ID of the owner of the rendition */
      owner_id?: number;
      /** @description The version number of the rendition */
      version_number?: number;
      /** @description The major version number. This property will not be returned if the node is a Category. */
      version_major_number?: number;
      /** @description The minor version number. This property will not be returned if the node is a Category. */
      version_minor_number?: number;
      /** @description The name of the version number. This property will not be returned if the node is a Category. */
      version_number_name?: string;
    };
    versions_V2ResponseRenditionsDelete: {
      /** @description Results */
      results?: components["schemas"]["versions_V2EmptyResults"][];
      /** @description Links */
      links?: components["schemas"]["versions_V2Links"][];
    };
    versions_CategoryInfoData: {
      /** @description Attribute value */
      "{attribute_key}"?: string;
    };
    versions_DescriptionMultilingual: {
      /** @description Description in English */
      en?: string;
      /** @description Beschreibung in Deutsch */
      de?: string;
    };
    versions_NameMultilingual: {
      /** @description Name in English */
      en?: string;
      /** @description Name auf Deutsch */
      de?: string;
    };
    volumes_NodeInfo: {
      /** @description ID of the volume to which this item belongs */
      volume_id?: number;
      /** @description Unique identifier of this item */
      id?: number;
      /** @description ID of the parent container */
      parent_id?: number;
      /** @description Item name */
      name?: string;
      /** @description Item type, as a number */
      type?: number;
      /** @description Item description */
      description?: string;
      /**
       * Format: date-time
       * @description Date of creation
       */
      create_date?: string;
      /**
       * Format: date-time
       * @description Date of last modification
       */
      modify_date?: string;
      /** @description Is this item reserved */
      reserved?: boolean;
      /** @description ID of user that reserved this item */
      reserved_user_id?: number;
      /**
       * Format: date-time
       * @description Date this item was reserved
       */
      reserved_date?: string;
      /** @description Path to the icon for the type of this item */
      icon?: string;
      /** @description Mime type of the object */
      mime_type?: string;
      /** @description ID of original item - used when this item is a shortcut */
      original_id?: number;
      /** @description ID of user who is this item's owner */
      wnd_owner?: number;
      /** @description ID of user who created this item */
      wnd_createdby?: number;
      /**
       * Format: date-time
       * @description Date item was created
       */
      wnd_createdate?: string;
      /** @description ID of user who last modified this item */
      wnd_modifiedby?: number;
      /** @description Version of this item */
      wnd_version?: number;
      /** @description Item type, as a word */
      type_name?: string;
      /** @description Is this item a container */
      container?: boolean;
      /** @description Size of this item */
      size?: number;
      perm_see?: boolean;
      perm_see_contents?: boolean;
      perm_modify?: boolean;
      perm_modify_attributes?: boolean;
      perm_modify_permissions?: boolean;
      perm_create?: boolean;
      perm_delete?: boolean;
      perm_delete_versions?: boolean;
      perm_reserve?: boolean;
      perm_add_major_version?: boolean;
      cell_metadata?: components["schemas"]["volumes_CellMetadata"];
      menu?: string;
      /** @description Size of this item with an appropriate units based on type (i.e. 11 items or 7 KB) */
      size_formatted?: string;
      reserved_user_login?: string;
      /** @description URL for getting available actions on this item */
      action_url?: string;
      /** @description URL for getting metadata about this item's parent container */
      parent_id_url?: string;
      /** @description Actions possible on this node (only with query-parameter actions=true) */
      actions?: components["schemas"]["volumes_ActionInfo"][];
    };
    volumes_CellMetadata: {
      data?: components["schemas"]["volumes_CellMetadataData"];
      definitions?: components["schemas"]["volumes_CellMetadataDefinitions"];
    };
    volumes_InfoResults: {
      data?: components["schemas"]["volumes_Data"][];
      definitions?: components["schemas"]["volumes_InfoDefinitions"][];
      definitions_map?: components["schemas"]["volumes_DefinitionsMap"];
      /** @description The suggested order in which data for each item should be displayed */
      definitions_order?: string[];
      /** @description The maximum number of records that can be returned */
      limit?: number;
      /** @description Number of the current page */
      page?: number;
      /** @description Order by named column. Format can be sort=name, or sort=asc_name, or sort=desc_name. */
      sort?: string;
      /** @description Facets on which results are filtered */
      where_facet?: string[];
      /** @description Name on which results are filtered */
      where_name?: number;
      /** @description Types on which results are filtered */
      where_type?: number[];
    };
    volumes_DefinitionsMap: Record<string, any>;
    volumes_InfoResult: {
      addable_types?: components["schemas"]["volumes_AddableTypes"][];
      available_actions?: components["schemas"]["volumes_AvailableActions"][];
      available_roles?: components["schemas"]["volumes_AvailableRoles"][];
      data?: components["schemas"]["volumes_Data"][];
      definitions?: components["schemas"]["volumes_InfoDefinitions"][];
      /** @description The definitions that are common to all nodes */
      definitions_base?: string[];
      /** @description The suggested order in which data for each item should be displayed */
      definitions_order?: string[];
      /** @description An id representing the type of the object */
      type?: number;
      type_info?: components["schemas"]["volumes_TypeInfo"];
      /** @description The name of the type of object */
      type_name?: string;
    };
    volumes_AddableTypes: {
      /** @description A relative URL to the object's icon */
      icon?: string;
      /** @description An ID representing the type of the object */
      type?: number;
      /** @description The name of the type of object */
      type_name?: string;
    };
    volumes_AvailableActions: {
      /** @description TRUE if this action has parameters, FALSE otherwise */
      parameterless?: boolean;
      /** @description TRUE if this action does not modify data, FALSE otherwise */
      read_only?: boolean;
      /** @description The type of action */
      type?: string;
      /** @description The name of action */
      type_name?: string;
      /** @description A unique name for this action */
      webnode_signature?: string;
    };
    volumes_AvailableRoles: {
      /** @description The type of role */
      type?: string;
      /** @description The name of role */
      type_name?: string;
    };
    volumes_Data: {
      /** @description Creation date of this object */
      create_date?: string;
      /** @description The id of the user */
      create_user_id?: number;
      /** @description Description of the object */
      description?: string;
      /** @description Locale specific item description */
      description_multilingual?:
        components["schemas"]["volumes_DescriptionMultilingual"][];
      /** @description Global unique identifier */
      guid?: string;
      /** @description Path to the type specific icon */
      icon?: string;
      /** @description Path to the type specific large icon */
      icon_large?: string;
      /** @description A unique id for this object */
      id?: number;
      /** @description Date when this object was modified */
      modify_date?: string;
      /** @description The id of the user who modified this object */
      modify_user_id?: number;
      /** @description Name of the object */
      name?: string;
      /** @description Locale specific item name */
      name_multilingual?: components["schemas"]["volumes_NameMultilingual"][];
      /** @description The id of the group to which the owner of this object belongs */
      owner_group_id?: number;
      /** @description The id of the user who owns this object */
      owner_user_id?: number;
      /** @description The id of the parent object of which this object is a child */
      parent_id?: number;
      /** @description TRUE if this object is reserved, FALSE otherwise */
      reserved?: boolean;
      /** @description Date when this object was reserved */
      reserved_date?: string;
      /** @description The id of the user who has reserved this object */
      reserved_user_id?: number;
      /** @description An ID representing the type of the object */
      type?: number;
      /** @description The name of the type of object */
      type_name?: string;
      /** @description True if Advanced Versioning is enabled on this object, false otherwise */
      versions_control_advanced?: boolean;
      /** @description The ID of the volume */
      volume_id?: number;
    };
    volumes_VolumeBrowse: {
      data?: components["schemas"]["volumes_NodeInfo"][];
      definitions?: components["schemas"]["volumes_InfoDefinitions"][];
      definitions_map?: components["schemas"]["volumes_DefinitionsMap"];
      /** @description The suggested order in which data for each item should be displayed */
      definitions_order?: string[];
      /** @description Maximum number of items returned per page */
      limit?: number;
      /** @description Number of the current page */
      page?: number;
      /** @description Total number of pages available */
      page_total?: number;
      /** @description Number of the ending item for this page */
      range_max?: number;
      /** @description Number of the starting item for this page */
      range_min?: number;
      /** @description Direction and column name on which the results are sorted */
      sort?: string;
      /** @description Total number of items available */
      total_count?: number;
      /** @description Facets on which results are filtered */
      where_facet?: number[];
      /** @description Name on which results are filtered */
      where_name?: number;
      /** @description Types on which results are filtered */
      where_type?: number[];
    };
    volumes_ActionInfo: {
      /** @description The action's name (as shown in UI representation) */
      name?: string;
      /** @description The url to be called on the action's execution */
      url?: string;
      /** @description List of sub-actions available.  This appears when the action is a sub-menu */
      children?: components["schemas"]["volumes_ActionInfoChild"][];
      signature?: string;
    };
    volumes_ActionInfoChild: {
      /** @description The action's name (as shown in UI representation) */
      name?: string;
      /** @description The url to be called on the action's execution */
      url?: string;
      signature?: string;
    };
    volumes_TypeInfo: {
      /** @description True if this document has advanced versioning, false otherwise */
      advanced_versioning?: boolean;
      /** @description True if this object is a container */
      container?: boolean;
    };
    volumes_InfoDefinitions: Record<string, any>;
    volumes_V2ResponseElement: {
      /** @description Results */
      results?: components["schemas"]["volumes_V2Result"][];
      /** @description Links */
      links?: components["schemas"]["volumes_V2DataLinks"][];
    };
    volumes_V2BrowseRecycleBinResult: {
      /** @description Data */
      data?: components["schemas"]["volumes_V2BrowseRecycleBinData"][];
    };
    volumes_V2BrowseRecycleBinData: {
      /** @description Properties */
      properties?:
        components["schemas"]["volumes_V2BrowseRecycleBinProperties"][];
    };
    volumes_V2Result: {
      /** @description Data */
      data?: components["schemas"]["volumes_V2Data"][];
    };
    volumes_V2Data: {
      /** @description columns */
      columns?: components["schemas"]["volumes_V2Columns"][];
      /** @description Properites */
      properties?: components["schemas"]["volumes_V2Properties"][];
    };
    volumes_V2Columns: {
      /** @description data type */
      data_type?: number;
      /** @description key */
      key?: string;
      /** @description name */
      name?: string;
      /** @description sort_key */
      sort_key?: string;
    };
    volumes_V2DataLinks: {
      data?: components["schemas"]["volumes_V2Links"][];
    };
    volumes_V2Links: {
      /** @description Self link */
      self?: components["schemas"]["volumes_V2Link"][];
    };
    volumes_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    volumes_V2Properties: {
      /** @description Whether or not this item is a container */
      container?: boolean;
      /** @description The number of items in this container */
      container_size?: number;
      /** @description The date that the item was created */
      create_date?: string;
      /** @description The id of the user who created the item */
      create_user_id?: number;
      /** @description Description of the item */
      description?: string;
      description_multilingual?:
        components["schemas"]["volumes_DescriptionMultilingual"];
      /**
       * Format: date
       * @description External create date
       */
      external_create_date?: string;
      /** @description External identity */
      external_identity?: string;
      /** @description External identity type */
      external_identity_type?: string;
      /**
       * Format: date
       * @description External modify date
       */
      external_modify_date?: string;
      /** @description External source */
      external_source?: string;
      /** @description Indicates if this item has been favorited by the current user */
      favorite?: boolean;
      /** @description The item's unique object ID */
      id?: number;
      /** @description Mime type of the object */
      mime_type?: string;
      /**
       * Format: date
       * @description The date on which the item was last modified
       */
      modify_date?: string;
      /** @description The id of the user who modified the item */
      modify_user_id?: number;
      /** @description The name of the item */
      name?: string;
      name_multilingual?: components["schemas"]["volumes_NameMultilingual"];
      /** @description The name of the owner of this item */
      owner?: string;
      /** @description The group id of the owner of this item */
      owner_group_id?: number;
      /** @description The user id of the owner of this item */
      owner_user_id?: number;
      /** @description The object id of the item's parent */
      parent_id?: number;
      /** @description Whether or not this item has been reserved */
      reserved?: boolean;
      /** @description The date on which the item was reserved */
      reserved_date?: string;
      /** @description The id of the user who has this item reserved */
      reserved_user_id?: number;
      /** @description Size of this item */
      size?: number;
      /** @description Size of this item with an appropriate units based on type (i.e. 11 items or 7 KB) */
      size_formatted?: string;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The item's type */
      type_name?: string;
      /** @description Whether or not newly added items to this item are added as advanced versioning (major/minor versioning) */
      versions_control_advanced?: boolean;
      /** @description The id of the volume to which this item belongs */
      volume_id?: number;
    };
    volumes_V2BrowseRecycleBinProperties: {
      /** @description The item's unique object ID */
      id?: number;
      /** @description The item's type (unique number) */
      type?: number;
      /** @description The name of the item */
      name?: string;
      /** @description The ID of the user who deleted the item */
      deleted_user_id?: number;
      /**
       * Format: date
       * @description The date when the item will be purged (default setting is 60 days from the deleted_date, but can be changed in Content Server Admin settings to any other value)
       */
      purged_date?: string;
      /**
       * Format: date
       * @description The date on which the item was deleted
       */
      deleted_date?: string;
      /** @description The object ID of the item's parent (before it was deleted, a.k.a. the location) */
      parent_id?: number;
    };
    volumes_BrowseResult2: {
      /** @description Collection */
      collection?: components["schemas"]["volumes_V2Collection"][];
      /** @description Links */
      links?: components["schemas"]["volumes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["volumes_V2Result"][];
    };
    volumes_BrowseRecyleBinResult2: {
      /** @description Collection */
      collection?:
        components["schemas"]["volumes_BrowseRecycleBinV2Collection"][];
      /** @description Links */
      links?: components["schemas"]["volumes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["volumes_V2BrowseRecycleBinResult"][];
    };
    volumes_BrowseRecycleBinV2Collection: {
      /** @description Filtering information */
      filtering?: {
        filter?: components["schemas"]["volumes_V2FilterObj"][];
      };
      /** @description Paging Information */
      paging?: components["schemas"]["volumes_V2Paging"][];
      /** @description Sorting information */
      sorting?: components["schemas"]["volumes_V2Sorting"][];
    };
    volumes_V2Collection: {
      /** @description Paging Information */
      paging?: components["schemas"]["volumes_V2Paging"][];
      /** @description Sorting information */
      sorting?: components["schemas"]["volumes_V2Sorting"][];
    };
    volumes_V2Paging: {
      /** @description limit */
      limit?: number;
      /** @description links */
      links?: string[];
      /** @description page */
      page?: number;
      /** @description page total */
      page_total?: number;
      /** @description range max */
      range_max?: number;
      /** @description range min */
      range_min?: number;
      /** @description total count */
      total_count?: number;
    };
    volumes_V2FilterObj: {
      key?: string;
      value?: string;
    };
    volumes_V2Mode: {
      mode?: components["schemas"]["volumes_V2ModeObj"][];
    };
    volumes_V2ModeObj: Record<string, any>;
    volumes_V2Sorting: {
      sort?: components["schemas"]["volumes_V2Sort"][];
    };
    volumes_V2Sort: Record<string, any>;
    volumes_BrowseVolumes2: {
      /** @description Links */
      links?: components["schemas"]["volumes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["volumes_V2Result"][];
    };
    volumes_CellMetadataData: Record<string, any>;
    volumes_CellMetadataDefinitions: Record<string, any>;
    volumes_NameMultilingual: {
      /** @description Name in English */
      en?: string;
      /** @description Name auf Deutsch */
      de?: string;
    };
    volumes_DescriptionMultilingual: {
      /** @description Description in English */
      en?: string;
      /** @description Beschreibung in Deutsch */
      de?: string;
    };
    volumes_PurgeRestoreRecycleBinResult: {
      /** @description Links */
      links?: components["schemas"]["volumes_V2DataLinks"][];
      /** @description results */
      results?: components["schemas"]["volumes_V2PurgeRecycleBinResults"][];
    };
    volumes_V2PurgeRecycleBinResults: {
      /** @description Failure */
      failure?: components["schemas"]["volumes_V2PurgeRecycleBinFailure"][];
      /** @description Success */
      success?: components["schemas"]["volumes_V2PurgeRecycleBinSuccess"][];
    };
    volumes_V2PurgeRecycleBinFailure: {
      /** @description Failure error messages */
      errors?:
        components["schemas"]["volumes_V2PurgeRecycleBinFailureMessage"][];
      /** @description Failure IDs */
      ids?: number[];
    };
    volumes_V2PurgeRecycleBinFailureMessage: {
      /** @description Failure error messages */
      "<ID>"?: string[];
    };
    volumes_V2PurgeRecycleBinSuccess: {
      /** @description Success IDs */
      ids?: number[];
    };
    webreports_ParametersListing: {
      /** @description Parameter data */
      data?: components["schemas"]["webreports_ParameterData"][];
    };
    webreports_ParameterData: {
      /** @description The type of parameter field. Possible types are: 'User', 'ObjectID', 'Number', 'Object', 'String', 'Date', 'Custom' */
      type?: string;
      /** @description The unique name for the parameter */
      parm_name?: string;
      /** @description The display name associated with parm_name */
      display_text?: string;
      /** @description Whether the parameter is set to prompt or not */
      prompt?: boolean;
      /** @description The defined order for the parameter relative to other parameters */
      prompt_order?: number;
      /** @description A default value for the parameter */
      default_value?: unknown;
      /** @description The parameter description */
      description?: string;
      /** @description Whether the parameter is mandatory or not */
      mandatory?: boolean;
      /** @description Additional data which is not common to all parameter types */
      type_specific?: components["schemas"]["webreports_TypeSpecificData"][];
    };
    webreports_TypeSpecificData: {
      /** @description Whether groups are enabled for the field. Supported only for the 'User' field type */
      groups_enabled?: boolean;
      /** @description Whether users are enabled for the field. Supported only for the 'User' field type */
      users_enabled?: boolean;
      /** @description The display name for the default_value user, if defined. Supported only for the 'User' field type */
      user_name?: string;
      /** @description The display name for the default_value node, if defined. Supported only for the 'ObjectID' field type */
      node_name?: string;
      /** @description The path display name for the default_value node, if defined. Supported only for the 'ObjectID' field type */
      node_path?: string;
      /** @description A list of all subtypes in the system. Supported only for the 'ObjectID' field type */
      subtype_list?: components["schemas"]["webreports_SubTypeData"][];
      /** @description A list of subtypes defined as valid for this parameter. Supported only for the 'ObjectID' field type */
      valid_subtype_list?: components["schemas"]["webreports_SubTypeData"][];
      /** @description The display name for the default_value subtype, if defined. Supported only for the 'Object' field type */
      subtype_name?: string;
      /** @description Whether time is enabled for the date field. Supported only for the 'Date' field type */
      time_enabled?: boolean;
      /** @description Whether the current time should be used for the date field. Supported only for the 'Date' field type */
      use_current?: boolean;
      /** @description A string of HTML code representing the custom form element. Supported only for the 'Custom' field type */
      content?: string;
    };
    webreports_SubTypeData: {
      /** @description The name of the subtype in the list */
      name?: string;
      /** @description The unique ID for the subtype in the list */
      subtype?: number;
    };
    webreports_OutputResponse: {
      /** @description Destination data */
      destination_data?: components["schemas"]["webreports_OutputData"][];
      /** @description (Content Server Node destination only) The node ID of the output */
      node_id?: number;
      /** @description (Workflow destination only) The work ID of the initiated workflow */
      work_id?: number;
    };
    webreports_DestinationResponse: {
      /** @description Destination data */
      data?: components["schemas"]["webreports_DestinationData"][];
    };
    webreports_DestinationData: {
      /** @description Destination-specific data. Note that the keys in this object will vary based on the Destination tab and permission settings for the WebReport */
      destination_specific?:
        components["schemas"]["webreports_DestinationSpecific"][];
      /** @description Whether the WebReport is set to export if there is no data */
      export_if_no_data?: boolean;
      /** @description The MIMEType that the WebReport output is written in */
      export_mime_type?: string;
      /** @description The http method that should be used to run the WebReport based on the destination type */
      http_method?: string;
      /** @description The WebReport destination type */
      output_destination?: string;
      /** @description Whether the WebReport is set to run in the background */
      run_in_background?: boolean;
      /** @description Schedule data */
      schedule_data?: components["schemas"]["webreports_ScheduleData"][];
      /** @description Whether the WebReport is set to display a status page after it is run */
      show_status_screen?: boolean;
      /** @description Whether the conversion engine is set to be used */
      use_conversion_engine?: boolean;
      /** @description ID of the XML job ticket */
      xml_job_ticket_id?: string;
    };
    webreports_OutputData: {
      /** @description Destination-specific data. Note that the keys in this object will vary based on the Destination tab and permission settings for the WebReport */
      destination_specific?:
        components["schemas"]["webreports_OutputSpecific"][];
      /** @description Whether the WebReport is set to export if there is no data */
      export_if_no_data?: boolean;
      /** @description The MIMEType that the WebReport output is written in */
      export_mime_type?: string;
      /** @description The http method that should be used to run the WebReport based on the destination type */
      http_method?: string;
      /** @description The WebReport destination type */
      output_destination?: string;
      /** @description Whether the WebReport is set to run in the background */
      run_in_background?: boolean;
      /** @description Schedule data */
      schedule_data?: components["schemas"]["webreports_ScheduleData"][];
      /** @description Whether the WebReport is set to display a status page after it is run */
      show_status_screen?: boolean;
      /** @description Whether the conversion engine is set to be used */
      use_conversion_engine?: boolean;
      /** @description ID of the XML job ticket */
      xml_job_ticket_id?: number;
    };
    webreports_DestinationSpecific: {
      /** @description (Content Server Node destination only): The names of the categories that will be applied to the output node */
      category_names?: string;
      /** @description (Content Server Node destination only): The node ID of the container that the WebReport output will be created in */
      "create_in_id (*)"?: string;
      /** @description (Content Server Node destination only): The action that the WebReport will take if a file of the same name as the WebReport output file is found in the destination container */
      duplicate_name_action?: string;
      /** @description (Content Server Node destination only): Whether the WebReport is set to output to a new node or add a version to an existing node */
      export_type?: string;
      /** @description (Content Server Node destination only): The description of the output node */
      "node_description (*)"?: string;
      /** @description (Content Server Node destination only): The name of the output node */
      "node_name (*)"?: string;
      /** @description (Content Server Node destination only): Whether the node type of the output is set to Document or Custom View */
      node_type?: string;
      /** @description (Content Server Version destination only): The node to add a version to */
      add_version_to_id?: string;
      /** @description (Content Server Version destination only): Setting used to determine whether the WebReport output should be appended into the text of an existing document */
      append_data?: string;
      /** @description (Content Server Version destination only): The end tag if the WebReport output is set to be appended into the text of an existing document between tags */
      end_tag?: string;
      /** @description (Content Server Version destination only): Whether the output should overwrite tags in the destination text if the WebReport output is set to be appended into the text of an existing document between tags */
      overwrite_tags?: string;
      /** @description (Content Server Version destination only): The start tag if the WebReport output is set to be appended into the text of an existing document between tags */
      start_tag?: string;
      /** @description (Content Server Version destination only): The description of the output version */
      "version_description (*)"?: string;
      /** @description (Content Server Version destination only): Whether the output should be added as a major or minor version */
      version_handling?: string;
      /** @description (Content Server Version destination only): The name of the output version */
      "version_name (*)"?: string;
      /** @description (Desktop destination only): The name of the file that the WebReport output is written to */
      "download_file_name (*)"?: string;
      /** @description (E-mail destination only): The name of the file attached to the e-mail */
      "attachment_name (*)"?: string;
      /** @description (E-mail destination only): Whether the WebReport output should be attached to the e-mail */
      attach_results_to_email?: boolean;
      /** @description (E-mail destination only): The e-mail address that the e-mail is being sent to */
      "email_address (*)"?: string;
      /** @description (E-mail destination only): The User ID of the Content Server user that the e-mail is being sent to */
      "email_address_user_id (*)"?: string;
      /** @description (E-mail destination only): The body text of the e-mail */
      "email_body_text (*)"?: string;
      /** @description (E-mail destination only): The node ID of the Content Server node containing the mailing list that the e-mail is being sent to */
      "email_mailing_list (*)"?: string;
      /** @description (E-mail destination only): The Subject of the e-mail */
      "email_subject (*)"?: string;
      /** @description (Form destination only): Setting used to determine how the WebReport output affects existing form data */
      append_form?: string;
      /** @description (Form destination only): The node ID of the Form being used as the destination of the WebReport */
      "form_id (*)"?: string;
      /** @description (FTP destination only): Whether the WebReport is set to login to the FTP Server anonymously */
      ftp_anonymous?: boolean;
      /** @description (FTP destination only): The action that the WebReport will take if a file of the same name as the WebReport output file is found on the destination FTP server */
      ftp_copy_options?: string;
      /** @description (FTP destination only): The relative path to the destination file from the FTP root folder */
      "ftp_file_path (*)"?: string;
      /** @description (FTP destination only): The port on the FTP server to connect to */
      ftp_port?: number;
      /** @description (FTP destination only): The IP Address or machine name of the FTP server */
      ftp_server?: string;
      /** @description (FTP destination only): The user name used for authentication on the FTP server */
      ftp_user_name?: string;
      /** @description (FTP destination only): Whether the password has been set for the FTP user yet */
      ftp_password_set?: boolean;
      /** @description (Server destination only): The file path that the output will be written to on the destination server */
      "server_file_path (*)"?: string;
      /** @description (Workflow destination only): Whether the WebReport output is attached to the initiated workflow */
      workflow_attach_output?: boolean;
      /** @description (Workflow destination only): The node description of the WebReport output to be attached to the initiated workflow */
      "workflow_attachment_description (*)"?: boolean;
      /** @description (Workflow destination only): The node name of the WebReport output to be attached to the initiated workflow */
      "workflow_attachment_name (*)"?: boolean;
      /** @description (Workflow destination only): The names of the categories that will be applied to the output node to be attached to the initiated workflow */
      workflow_category_names?: boolean;
      /** @description (Workflow destination only): The description of the initiated workflow */
      "workflow_description (*)"?: string;
      /** @description (Workflow destination only): Setting used to determine whether the workflow will become due for completion */
      workflow_due?: string;
      /** @description (Workflow destination only): Number of days from initiation that the workflow will become due for completion */
      workflow_due_in?: string;
      /** @description (Workflow destination only): Date that the workflow will become due for completion */
      workflow_due_on?: string;
      /** @description (Workflow destination only): The node ID of the Workflow map being used as the destination of the WebReport */
      "workflow_map_id (*)"?: string;
      /** @description (Workflow destination only): The title of the initiated workflow */
      "workflow_title (*)"?: string;
    };
    webreports_OutputSpecific: {
      /** @description (Content Server Node destination only): The names of the categories that will be applied to the output node */
      category_names?: string;
      /** @description (Content Server Node destination only): The node ID of the container that the WebReport output will be created in */
      create_in_id?: number;
      /** @description (Content Server Node destination only): The action that the WebReport will take if a file of the same name as the WebReport output file is found in the destination container */
      duplicate_name_action?: string;
      /** @description (Content Server Node destination only): Whether the WebReport is set to output to a new node or add a version to an existing node */
      export_type?: string;
      /** @description (Content Server Node destination only): The description of the output node */
      node_description?: string;
      /** @description (Content Server Node destination only): The name of the output node */
      node_name?: string;
      /** @description (Content Server Node destination only): Whether the node type of the output is set to Document or Custom View */
      node_type?: string;
      /** @description (Content Server Version destination only): The node to add a version to */
      add_version_to_id?: number;
      /** @description (Content Server Version destination only): Setting used to determine whether the WebReport output should be appended into the text of an existing document */
      append_data?: string;
      /** @description (Content Server Version destination only): The end tag if the WebReport output is set to be appended into the text of an existing document between tags */
      end_tag?: string;
      /** @description (Content Server Version destination only): Whether the output should overwrite tags in the destination text if the WebReport output is set to be appended into the text of an existing document between tags */
      overwrite_tags?: string;
      /** @description (Content Server Version destination only): The start tag if the WebReport output is set to be appended into the text of an existing document between tags */
      start_tag?: string;
      /** @description (Content Server Version destination only): Whether the output should be added as a major or minor version */
      version_handling?: string;
      /** @description (Content Server Version destination only): The name of the output node */
      version_name?: string;
      /** @description (Desktop destination only): The name of the file that the WebReport output is written to */
      download_file_name?: string;
      /** @description (E-mail destination only): The name of the file attached to the e-mail */
      attachment_name?: string;
      /** @description (E-mail destination only): Whether the WebReport output should be attached to the e-mail */
      attach_results_to_email?: boolean;
      /** @description (E-mail destination only): The e-mail address that the e-mail is being sent to */
      email_address?: string;
      /** @description (E-mail destination only): The User ID of the Content Server user that the e-mail is being sent to */
      email_address_user_id?: number;
      /** @description (E-mail destination only): The body text of the e-mail */
      email_body_text?: string;
      /** @description (E-mail destination only): The node ID of the Content Server node containing the mailing list that the e-mail is being sent to */
      email_mailing_list?: number;
      /** @description (E-mail destination only): The Subject of the e-mail */
      email_subject?: string;
      /** @description (Form destination only): Setting used to determine how the WebReport output affects existing form data */
      append_form?: string;
      /** @description (Form destination only): The node ID of the Form being used as the destination of the WebReport */
      form_id?: number;
      /** @description (Form destination only): The number of rows of form data affected when the WebReport is run */
      rows_affected?: number;
      /** @description (FTP destination only): Whether the WebReport is set to login to the FTP Server anonymously */
      ftp_anonymous?: boolean;
      /** @description (FTP destination only): The action that the WebReport will take if a file of the same name as the WebReport output file is found on the destination FTP server */
      ftp_copy_options?: string;
      /** @description (FTP destination only): The relative path to the destination file from the FTP root folder */
      ftp_file_path?: string;
      /** @description (FTP destination only): The port on the FTP server to connect to */
      ftp_port?: number;
      /** @description (FTP destination only): The IP Address or machine name of the FTP server */
      ftp_server?: string;
      /** @description (FTP destination only): The user name used for authentication on the FTP server */
      ftp_user_name?: string;
      /** @description (FTP destination only): The password used for authentication on the FTP server */
      ftp_user_password?: string;
      /** @description (Server destination only): The file path that the output will be written to on the destination server */
      server_file_path?: string;
      /** @description (Workflow destination only): Whether the WebReport output is attached to the initiated workflow */
      workflow_attach_output?: boolean;
      /** @description (Workflow destination only): The node description of the WebReport output attached to the initiated workflow */
      workflow_attachment_description?: boolean;
      /** @description (Workflow destination only): The node name of the WebReport output attached to the initiated workflow */
      workflow_attachment_name?: boolean;
      /** @description (Workflow destination only): The names of the categories applied to the output node attached to the initiated workflow */
      workflow_category_names?: boolean;
      /** @description (Workflow destination only): The description of the initiated workflow */
      workflow_description?: string;
      /** @description (Workflow destination only): Setting used to determine whether the workflow will become due for completion */
      workflow_due?: string;
      /** @description (Workflow destination only): Number of days from initiation that the workflow will become due for completion */
      workflow_due_in?: string;
      /**
       * Format: date
       * @description (Workflow destination only): Date that the workflow will become due for completion
       */
      workflow_due_on?: string;
      /** @description (Workflow destination only): The node ID of the Workflow map being used as the destination of the WebReport */
      workflow_map_id?: number;
      /** @description (Workflow destination only): The title of the initiated workflow */
      workflow_title?: string;
    };
    webreports_ScheduleData: {
      /** @description Whether the '5-minute-increments' setting is set */
      five_minute_increments?: boolean;
      /**
       * Format: date
       * @description The date that the WebReport is scheduled to be next run
       */
      next_run?: string;
      /** @description The repeat interval number of days that the WebReport is scheduled for */
      repeat_day?: number;
      /** @description The repeat interval number of hours that the WebReport is scheduled for */
      repeat_hour?: number;
      /** @description The repeat interval number of minutes that the WebReport is scheduled for */
      repeat_minute?: number;
      /** @description The repeat interval number of weeks that the WebReport is scheduled for */
      repeat_week?: number;
      /** @description 'intervals' if the schedule is set to run using repeat intervals or 'specific' if the schedule is set to run on specific days of the month */
      run_condition?: string;
      /** @description List containing the dates of the month that the report is scheduled to run on */
      run_on_dates?: string;
      /** @description List containing the weeks of the month that the report is scheduled to run on */
      run_on_weeks_month?: string;
      /** @description List containing the days of the month that the report is scheduled to run on */
      run_on_days_month?: string;
      /** @description List containing the days of the week that the report is scheduled to run on */
      run_on_days_week?: string;
      /** @description The specific number of times that the WebReport will run, or -1 for forever */
      run_times?: number;
      /** @description Whether the schedule is enabled */
      schedule_enabled?: boolean;
      /** @description The User ID of the user that created the schedule */
      user_id?: number;
    };
    xmlimport_response_200: {
      /** @description Nested json with content-type, href, request-method, etc. */
      links?: Record<string, any>;
      results?: {
        data?: {
          /** @description Successful import message: {filename} successfully imported */
          message?: string;
          restart?: boolean;
        };
      };
    };
    xmlimport_response_400: {
      /** @description Error message */
      error?: string;
    };
    xmlimport_response_500: {
      /** @description Error message - {filename} import failed: system error */
      error?: string;
      /** @description List of errors as a string */
      errorDetail?: string;
    };
    V2FollowUps: {
      /** @description Results */
      results?: Record<string, any>;
      /** @description Links */
      links?: Record<string, any>;
    };
    V2FollowUpInfo: {
      /** @description Results */
      results?: Record<string, any>;
      /** @description Links */
      links?: Record<string, any>;
    };
    V2FollowUpsResults: {
      /** @description FollowUps */
      followups?: components["schemas"]["V2FollowUpsFollowups"][];
    };
    V2FollowUpsFollowups: {
      /** @description Data */
      data?: Record<string, any>;
    };
    V2FollowUpsData: {
      /** @description FollowUp */
      followup?: Record<string, any>;
    };
    V2FollowUpsFollowup: {
      /** @description Move Follow Up activation date to the previous business day, if it falls on a weekend; 0: Don't move the date. 1: Move the date to the previous business day. */
      activation_by_day?: number;
      /**
       * Format: date
       * @description The calculated activation date
       */
      activation_date?: string;
      /** @description list of integer assignee id values */
      assignees?: number[];
      /**
       * Format: date
       * @description The date and time the Follow Up was created
       */
      create_date?: string;
      /** @description ID of the user who created the Follow Up */
      create_user_id?: number;
      /** @description Data Id of the node */
      data_id?: number;
      /** @description Description of the folloup */
      description?: string;
      /**
       * Format: date
       * @description The date on which the Follow Up must be executed
       */
      due_date?: string;
      /**
       * Format: date
       * @description End date of the period in which the resubmission has to be executed. Valid only if RSRULE = 2
       */
      end_sequence_date?: string;
      /** @description Unique identifier representing a Follow Up client */
      followup_client?: number;
      /** @description Name of the Follow Up client */
      followup_client_name?: string;
      /** @description Follow Up handler 1: Normal Follow Up handler , 2: Follow Up handler with escalation data, 100: cmbase-specific for automaticrenewal */
      followup_handler?: number;
      /** @description Follow Up ID */
      followup_id?: number;
      /** @description Follow Up Type ID */
      followup_type?: number;
      /** @description Follow Up Type Name */
      followup_type_name?: string;
      /** @description Follow Up Parent Node ID */
      parent_id?: number;
      /** @description Type of rule to apply; 0: Follow Up on specific data 1: Follow Up in specific days, weeks, or months 2: Periodic Follow Up */
      rule?: number;
      /**
       * Format: date
       * @description Start date of the period in which the Follow Up has to be executed. Valid only if RSRULE = 2.
       */
      start_sequence_date?: string;
      /** @description Follow Up Status */
      status?: number;
      /** @description Follow Up Status Updated By */
      status_by?: number;
    };
    V1ReminderView: {
      /** @description forms */
      forms?: Record<string, any>;
    };
    V1ReminderViewForms: {
      data?: components["schemas"]["V1ReminderViewData"];
      form?: components["schemas"]["V1ReminderViewForm"];
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for creating the node */
      schema?: Record<string, any>;
    };
    V1ReminderViewData: {
      /** @description activation_alert */
      activation_alert?: Record<string, any>;
      /** @description list of integer assignee id values */
      assignees?: number[];
      /** @description descrption of the follow up */
      description?: string;
      /**
       * Format: date
       * @description duein
       */
      duein?: string;
      /** @description escalation_alert */
      escalation_alert?: Record<string, any>;
      /** @description Name of the Follow Up client */
      followup_client_name?: number;
      /** @description Follow Up Type Name */
      followup_type_name?: number;
      /** @description general */
      general?: Record<string, any>;
      /** @description priority */
      priority?: number;
      /** @description schedule */
      schedule?: Record<string, any>;
    };
    V1ReminderViewActivationAlert: {
      /** @description send_in */
      send_in?: Record<string, any>;
    };
    V1ReminderViewActivationSendIn: {
      /** @description activation_period */
      activation_period?: number;
      /** @description activation_unit */
      activation_unit?: number;
    };
    V1ReminderViewEscalationAlert: {
      /** @description escalation_enabled */
      escalation_enabled?: boolean;
      /** @description send_in */
      send_in?: Record<string, any>;
    };
    V1ReminderViewEscalationSendIn: {
      /** @description escalation_period */
      escalation_period?: number;
      /** @description escalation_when */
      escalation_when?: number;
    };
    V1ReminderViewGeneral: {
      /** @description Created_by */
      Created_by?: number;
      /**
       * Format: date
       * @description Created_on
       */
      Created_on?: string;
      /** @description Modified_by */
      Modified_by?: number;
      /** @description Modified_on */
      Modified_on?: number;
    };
    V1ReminderViewSchedule: {
      /** @description due */
      due?: number;
      /** @description Due In */
      due_in?: Record<string, any>;
      /**
       * Format: date
       * @description Due On
       */
      due_on?: string;
      /**
       * Format: date
       * @description End Date
       */
      end_date?: string;
      /** @description Month Recursive */
      month_recursive?: number;
      /** @description Predefined */
      predefined?: boolean;
      /** @description Recurring */
      Recurring?: boolean;
      /** @description Repeat Month */
      repeat_month?: Record<string, any>;
      /** @description Repeat On */
      repeat_on?: string;
      /** @description Repeat Week */
      repeat_week?: number;
      /** @description Repeat Year */
      repeat_year?: Record<string, any>;
      /**
       * Format: date
       * @description Start Date
       */
      start_date?: string;
      /** @description Week Recursive */
      week_recursive?: number;
      /** @description Year Recursive */
      year_recursive?: number;
    };
    V1ReminderViewDueIn: {
      /** @description Due In Period */
      due_in_period?: number;
      /** @description Due In Unit */
      due_in_unit?: number;
    };
    V1ReminderViewRepeatMonth: {
      /** @description Month Day */
      month_day?: number;
      /** @description Month Unit */
      month_unit?: string;
      /** @description Month Weekday */
      month_weekday?: number;
    };
    V1ReminderViewRepeatYear: {
      /** @description Year On Month */
      year_on_month?: number;
      /** @description Year On Month Day */
      year_on_month_day?: number;
      /** @description Year On Month Unit */
      year_on_month_unit?: string;
      /** @description Year On Month Weekday */
      year_on_month_weekday?: number;
    };
    V1ReminderViewForm: {
      /** @description Attributes */
      attributes?: Record<string, any>;
      /** @description renderForm */
      renderForm?: boolean;
    };
    V1ReminderViewAttributes: {
      /** @description action */
      action?: string;
      /** @description method */
      method?: string;
    };
    V1FollowupClientTypes: {
      /** @description forms */
      forms?: Record<string, any>;
    };
    V1FollowupClientTypesForms: {
      /** @description data */
      data?: Record<string, any>;
      form?: components["schemas"]["V1ReminderViewForm"];
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for creating the node */
      schema?: Record<string, any>;
    };
    V1FollowupClientTypesData: {
      /** @description Follow Up Type Name */
      followup_type_name?: number;
      /** @description Name of the Follow Up client */
      followup_client_name?: number;
      /**
       * Format: date
       * @description Due On
       */
      due_on?: string;
      /** @description description */
      description?: string;
      /** @description assignees */
      assignees?: string;
      /** @description Activation Alert */
      activation_alert?: Record<string, any>;
    };
    V1FollowupClientTypesActivationAlert: {
      /** @description send_in */
      send_in?: Record<string, any>;
    };
    V1FollowupClientTypesActivationAlertSendIn: {
      /** @description activationAlert1 */
      activationAlert1?: number;
      /** @description activationAlert2 */
      activationAlert2?: number;
    };
    V1ReminderCreateForm: {
      /** @description forms */
      forms?: Record<string, any>;
    };
    V1ReminderCreateData: {
      /** @description data */
      data?: Record<string, any>;
      /** @description form */
      form?: Record<string, any>;
      /** @description Basic data about the alpaca form */
      options?: Record<string, any>;
      /** @description Properties of the parameters being used for creating the node */
      schema?: Record<string, any>;
    };
    V2PostReminder: {
      /** @description Results */
      results?: Record<string, any>;
      /** @description Links */
      links?: Record<string, any>;
    };
    resubmission_V2EmptyResults: Record<string, any>;
    resubmission_V2DataLinks: {
      data?: Record<string, any>;
    };
    resubmission_V2Links: {
      self?: components["schemas"]["resubmission_V2Link"];
    };
    resubmission_V2Link: {
      /** @description Body */
      body?: string;
      /** @description Content Type */
      content_type?: string;
      /** @description URL */
      href?: string;
      /** @description HTTP Method */
      method?: string;
      /** @description Name */
      name?: string;
    };
    syndication_response_200: {
      /** @description Nested json with content-type, href, request-method, etc. */
      links?: Record<string, any>;
      results?: {
        /** @description Whether user has the document level syndication privilege or not */
        canUserEditTheSiteMappings?: boolean;
        /** @description Document level syndication value of a given node */
        DLS?: boolean;
        /** @description Is syndication enabled on a given node */
        enabled?: boolean;
        /** @description Whether DLS can be enabled on a given node */
        hideDLS?: boolean;
      };
    };
    signaturerequests_create: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["signature_V2Results"][];
    };
    signature_V2Results: {
      data?: components["schemas"]["signature_V2Data"][];
    };
    signature_V2Data: {
      /** @description Signature Request URL */
      url?: string;
      /** @description A unique identifier for the Signature Request */
      request_id?: number;
    };
    signaturerequests_get: {
      /** @description Collection */
      collection?:
        components["schemas"]["members_V2Collection_BrowseMembers"][];
      /** @description Results */
      results?: components["schemas"]["signaturerequests_V2GetResult"][];
      /** @description Links */
      links?: components["schemas"]["members_V2Links"][];
    };
    signaturerequests_V2GetResult: {
      /** @description Data */
      data?: components["schemas"]["signaturerequests_V2Data"][];
    };
    signaturerequests_V2Data: {
      /** @description Properties */
      properties?: components["schemas"]["signaturerequests_V2Properties"][];
    };
    signaturerequests_V2Properties: {
      /** @description Signature Request Id */
      request_id?: string;
      /** @description Provider Name */
      provider_name?: string;
      /** @description Signature Request Modified date */
      modified_date?: number;
      /** @description Signature Request Created date */
      created_date?: number;
      /** @description Signature Request URL */
      status?: string;
      /** @description Total no of Documents */
      total_documents?: number;
      /** @description documents */
      documents?: components["schemas"]["signaturerequests_DocumentsData"][];
    };
    signaturerequests_DocumentsData: {
      /** @description Document Id */
      doc_id?: number;
      /** @description Document Name */
      doc_name?: string;
      /** @description The mime type of the original document sent for signature */
      mime_type?: string;
      /** @description The version of the document sent for signature */
      version_num?: number;
    };
    signaturerequests_getbyId: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["signatureRequestDetails_V2Results"][];
    };
    signatureRequestDetails_V2Results: {
      data?: components["schemas"]["signatureRequestDetails_V2Data"][];
    };
    signatureRequestDetails_V2Data: {
      /** @description Signature Request Id */
      request_id?: string;
      /** @description Provider Name */
      provider_name?: string;
      /** @description Signature Request Created date */
      created_date?: number;
      /** @description Signature Request modified date */
      modified_date?: number;
      /** @description Signature Request status */
      status?: string;
      /** @description Total no of Documents */
      total_documents?: number;
      /** @description documents */
      documents?: components["schemas"]["signaturerequests_DocumentsData"][];
      /** @description signers */
      signers?: components["schemas"]["signaturerequests_SignersData"][];
      /** @description Decides if activity information needs to be included. This activity information is created by parsing the signer data */
      activities?: components["schemas"]["signaturerequests_ActivitiesData"][];
    };
    signaturerequests_SignersData: {
      /** @description Name of the signer */
      full_name?: string;
      /** @description Email Id of the signer */
      email_id?: string;
      /** @description Signing order */
      signing_order?: number;
      /** @description Signer status */
      cssigner_status?: number;
    };
    signaturerequests_ActivitiesData: {
      /** @description Activity description */
      full_name?: string;
      /** @description Event date */
      event_date?: number;
      /** @description Type of the event */
      event_type?: string;
      /** @description Event performer */
      performer_name?: string;
    };
    signaturerequests_sendnotification: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?:
        components["schemas"]["signatureRequestsNotification_V2Results"][];
    };
    signatureRequestsNotification_V2Results: {
      data?: components["schemas"]["signaturerequestsNotification_V2Data"][];
    };
    signaturerequestsNotification_V2Data: Record<string, any>;
    signaturerequests_cancel: {
      links?: components["schemas"]["categories_V2DataLinks"][];
      results?: components["schemas"]["signatureRequestsCancel_V2Results"][];
    };
    signatureRequestsCancel_V2Results: {
      data?: components["schemas"]["signatureRequestsCancel_V2Data"][];
    };
    signatureRequestsCancel_V2Data: Record<string, any>;
  };
  responses: never;
  parameters: {
    /** @description Forces the server to always return a HTTP Response of '200 OK'. The data returned from the call will have an additional integer feature named 'statusCode', which will contain the actual status code (the 'statusCode' feature will be added regardless of whether the REST API call was successful or not).<br><br>NOTE: This parameter does not require a value, so it should be specified as <ul><li><b>[Query String]:</b><code>?suppress_response_codes</code></li><li><b>[Form Body (where the value is an empty string)]</b>: <code>suppress_response_codes = </code></li></ul> */
    suppress_response_codes?: string | null;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

type draftprocesses_DraftProcess = components["schemas"]["draftprocesses_DraftProcess"];
type forms_WorkflowPropertiesFormInfo$1 = components["schemas"]["forms_WorkflowPropertiesFormInfo"];
type draftprocesses_DraftProcess_Put$1 = components["schemas"]["draftprocesses_DraftProcess_Put"];
type TDraftProcess = {
    results: draftprocesses_DraftProcess;
};
type TWorkflowPut = {
    action: "Initiate" | "formUpdate";
    values?: any;
    comment?: string;
    authentication_info?: {
        password: string;
    };
};
declare class WorkflowInitiator {
    private session;
    private mapId;
    workflowPropertiesInfo: forms_WorkflowPropertiesFormInfo$1 | null;
    constructor(session: Session, mapId: number);
    /**
     * This method prepares the workflow for initiation. It must be called before any other method.
     */
    start(): Promise<void>;
    get form(): {
        data?: Record<string, any>;
        options?: Record<string, any>;
        schema?: Record<string, any>;
        columns?: number;
    };
    findWorkflowAttribute(attributeName: string): [string, any];
    get processId(): number;
    get attachmentsFolderId(): number | undefined;
    get wantComments(): boolean;
    get wantAuthentication(): boolean;
    setWorkflowAttribute(attributeName: string, value: any): typeof WorkflowInitiator;
    formUpdate(): Promise<{
        results: draftprocesses_DraftProcess_Put$1;
    }>;
    initiate({ comment, password }?: {
        comment?: string;
        password?: string;
    }): Promise<{
        results: draftprocesses_DraftProcess_Put$1;
    }>;
}

type forms_WorkflowPropertiesFormInfo = components["schemas"]["forms_WorkflowPropertiesFormInfo"];
type draftprocesses_DraftProcess_Put = components["schemas"]["draftprocesses_DraftProcess_Put"];

declare class Workflow extends ServiceAbstract {
    workflowInitiator(mapId: number): WorkflowInitiator;
    start(mapId: number): Promise<forms_WorkflowPropertiesFormInfo>;
    draftprocesses(workflowId: number): Promise<TDraftProcess>;
    draftprocessesUpdate(draftprocessId: number): Promise<forms_WorkflowPropertiesFormInfo>;
    draftprocessesPut(draftprocessId: number, body: TWorkflowPut): Promise<{
        results: draftprocesses_DraftProcess_Put;
    }>;
}

declare class RHCore extends ServiceAbstract {
    scriptNode(id: any, body?: {}): Promise<axios.AxiosResponse<any, any>>;
}

declare class Search extends ServiceAbstract {
    search(where: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
    regions(params?: {}): Promise<axios.AxiosResponse<any, any>>;
}

declare class Members extends ServiceAbstract {
    readonly USER: number;
    readonly GROUP: number;
    constructor(session: Session);
    userQuery(query: any, options?: {}, version?: string): Promise<axios.AxiosResponse<any, any>>;
    member(id: any, version?: string): Promise<axios.AxiosResponse<any, any>>;
}

declare class Versions extends ServiceAbstract {
    addVersion({ dataid, fileHandler, apiVersion, fileName, options, }: {
        dataid: any;
        fileHandler: any;
        apiVersion?: string;
        fileName?: any;
        options?: {};
    }): Promise<axios.AxiosResponse<any, any>>;
    download({ dataid, version, filePath }: {
        dataid: any;
        version: any;
        filePath: any;
    }): Promise<unknown>;
    list(dataid: any): Promise<axios.AxiosResponse<any, any>>;
    version(dataid: any, version_number?: string): Promise<axios.AxiosResponse<any, any>>;
    promote({ dataid, versionNumber, description }: {
        dataid: any;
        versionNumber: any;
        description?: any;
    }): Promise<axios.AxiosResponse<any, any>>;
    deleteVersion({ dataid, versionNumber, apiVersion }: {
        dataid: any;
        versionNumber: any;
        apiVersion?: string;
    }): Promise<axios.AxiosResponse<any, any>>;
    purge({ dataid, number_to_keep }: {
        dataid: any;
        number_to_keep?: number;
    }): Promise<axios.AxiosResponse<any, any>>;
}

declare class WebReports extends ServiceAbstract {
    run(dataid: any, params?: {}): Promise<axios.AxiosResponse<any, any>>;
}

type requestObjectType = {
    jsonrpc: string;
    method: string;
    id: number;
    params: Record<string, any> | Array<any>;
};
declare class RPCClient {
    session: Session;
    relativePath: string;
    protected _batchQueue: Array<requestObjectType>;
    constructor(session: Session, relativePath: string);
    protected requestObject(method: string, params: Record<string, any> | Array<any>, id: number): requestObjectType;
    protected handleResponse(data: any): any;
    request(method: string, params: any, id?: number): Promise<any>;
    private resetQueue;
    queue(method: string, params: any, id?: number): RPCClient;
    batch(throwOnError?: boolean): Promise<any>;
    rhnode(dataid: any, method: any, args?: any[], id?: number): Promise<any>;
    rhnodeQueue(dataid: any, method: any, args?: any[], id?: number): RPCClient;
}

declare class Session {
    protected readonly axios: AxiosInstance;
    protected _nodes: Nodes;
    protected _auth: Auth;
    protected _workflow: any;
    protected _rhcore: RHCore;
    protected _members: Members;
    protected _search: Search;
    protected _webreports: WebReports;
    protected _versions: Versions;
    constructor(options: CSRestOptions);
    get nodes(): Nodes;
    get auth(): Auth;
    get workflow(): Workflow;
    get rhcore(): RHCore;
    get members(): Members;
    get search(): Search;
    get webreports(): WebReports;
    get versions(): Versions;
    get dataTypesEnum(): {
        AssocType: number;
        BooleanType: number;
        ClassType: number;
        DapiNodeType: number;
        DapiSessionType: number;
        DapiStreamType: number;
        DapiVersionType: number;
        DateType: number;
        DynamicType: number;
        ErrorType: number;
        FileType: number;
        FrameType: number;
        IntegerType: number;
        JavaObjectType: number;
        ListType: number;
        LongType: number;
        ObjectType: number;
        ObjRefType: number;
        RealType: number;
        RecArrayType: number;
        RecordType: number;
        ScriptType: number;
        SocketType: number;
        StringType: number;
        UAPIType: number;
        UndefinedType: number;
        VoidType: number;
        WAPIWorkType: number;
    };
    rpcClient(relativePath?: string): RPCClient;
    _isObject(value: any): boolean;
    _isString(value: any): boolean;
    _isBoolean(value: any): boolean;
    objectToForm(obj: Record<string, any>): any;
    putForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    postForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    patchForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    deleteForm(url: any, params: any): Promise<AxiosResponse<any, any>>;
    putBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    postBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    patchBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    deleteBody(url: any, body: any): Promise<AxiosResponse<any, any>>;
    get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    patch<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
    options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
    delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
}

declare function isRPCError(e: RPCError | any): e is RPCError;

export { RPCError, Session, isRPCError };
