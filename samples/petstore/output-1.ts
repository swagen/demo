//------------------------------
// <auto-generated>
//     Generated using the Swagen tool
//     Generator: angular
//     Mode: ng1-typescript-experimental
// </auto-generated>
//------------------------------
// Swagger Petstore
// This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
// Base URL: http://petstore.swagger.io/v2/

/// <reference path="../../typings/index.d.ts" />

namespace petstore.webservices {
    import __models = petstore.webservices.models;

    export interface IPetClient {
        /**
         * Add a new pet to the store
         * @param {PetModel} body - Pet object that needs to be added to the store
         */
        addPet(body: __models.PetModel): ng.IPromise<any>;

        /**
         * Update an existing pet
         * @param {PetModel} body - Pet object that needs to be added to the store
         */
        updatePet(body: __models.PetModel): ng.IPromise<any>;

        /**
         * Finds Pets by status
         * Multiple status values can be provided with comma separated strings
         * @param {StatusPetModel[]} status - Status values that need to be considered for filter
         */
        findPetsByStatus(status: __models.StatusPetModel[]): ng.IPromise<__models.PetModel[]>;

        /**
         * Finds Pets by tags
         * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
         * @param {string[]} tags - Tags to filter by
         */
        findPetsByTags(tags: string[]): ng.IPromise<__models.PetModel[]>;

        /**
         * Find pet by ID
         * Returns a single pet
         * @param {number} petId - ID of pet to return
         */
        getPetById(petId: number): ng.IPromise<__models.PetModel>;

        /**
         * Updates a pet in the store with form data
         * @param {number} petId - ID of pet that needs to be updated
         * @param {string} name - Updated name of the pet
         * @param {string} status - Updated status of the pet
         */
        updatePetWithForm(petId: number, name?: string, status?: string): ng.IPromise<any>;

        /**
         * Deletes a pet
         * @param {number} petId - Pet id to delete
         */
        deletePet(petId: number, api_key?: string): ng.IPromise<any>;

        /**
         * uploads an image
         * @param {number} petId - ID of pet to update
         * @param {string} additionalMetadata - Additional data to pass to server
         * @param {any} file - file to upload
         */
        uploadFile(petId: number, additionalMetadata?: string, file?: any): ng.IPromise<__models.ApiResponseModel>;

    }

    export interface IStoreClient {
        /**
         * Returns pet inventories by status
         * Returns a map of status codes to quantities
         */
        getInventory(): ng.IPromise<any>;

        /**
         * Place an order for a pet
         * @param {OrderModel} body - order placed for purchasing the pet
         */
        placeOrder(body: __models.OrderModel): ng.IPromise<__models.OrderModel>;

        /**
         * Find purchase order by ID
         * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
         * @param {number} orderId - ID of pet that needs to be fetched
         */
        getOrderById(orderId: number): ng.IPromise<__models.OrderModel>;

        /**
         * Delete purchase order by ID
         * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
         * @param {number} orderId - ID of the order that needs to be deleted
         */
        deleteOrder(orderId: number): ng.IPromise<any>;

    }

    export interface IUserClient {
        /**
         * Create user
         * This can only be done by the logged in user.
         * @param {UserModel} body - Created user object
         */
        createUser(body: __models.UserModel): ng.IPromise<any>;

        /**
         * Creates list of users with given input array
         * @param {UserModel[]} body - List of user object
         */
        createUsersWithArrayInput(body: __models.UserModel[]): ng.IPromise<any>;

        /**
         * Creates list of users with given input array
         * @param {UserModel[]} body - List of user object
         */
        createUsersWithListInput(body: __models.UserModel[]): ng.IPromise<any>;

        /**
         * Logs user into the system
         * @param {string} username - The user name for login
         * @param {string} password - The password for login in clear text
         */
        loginUser(username: string, password: string): ng.IPromise<string>;

        /**
         * Logs out current logged in user session
         */
        logoutUser(): ng.IPromise<any>;

        /**
         * Get user by user name
         * @param {string} username - The name that needs to be fetched. Use user1 for testing. 
         */
        getUserByName(username: string): ng.IPromise<__models.UserModel>;

        /**
         * Updated user
         * This can only be done by the logged in user.
         * @param {string} username - name that need to be updated
         * @param {UserModel} body - Updated user object
         */
        updateUser(username: string, body: __models.UserModel): ng.IPromise<any>;

        /**
         * Delete user
         * This can only be done by the logged in user.
         * @param {string} username - The name that needs to be deleted
         */
        deleteUser(username: string): ng.IPromise<any>;

    }
}

namespace petstore.webservices {
    import __models = petstore.webservices.models;

    export class PetClient implements IPetClient {
        private baseUrl: string;

        public static $inject: string[] = ['$http', 'config'];
        constructor (private $http: ng.IHttpService, config: app.IConfig) {
            this.baseUrl = config.baseUrl;
        }

        public addPet(body: __models.PetModel): ng.IPromise<any> {
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/pet';
            return this.$http<any>({
                method: 'POST',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public updatePet(body: __models.PetModel): ng.IPromise<any> {
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/pet';
            return this.$http<any>({
                method: 'PUT',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public findPetsByStatus(status: __models.StatusPetModel[]): ng.IPromise<__models.PetModel[]> {
            if (status == undefined || status == null) {
                throw new Error(`The parameter 'status' must be defined.`);
            }
            let resourceUrl: string = '/pet/findByStatus';
            let queryParams: {[key: string]: string} = {
                 status: encodeURIComponent('' + status)
            };
            return this.$http<__models.PetModel[]>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl, queryParams)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.PetModel[]>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public findPetsByTags(tags: string[]): ng.IPromise<__models.PetModel[]> {
            if (tags == undefined || tags == null) {
                throw new Error(`The parameter 'tags' must be defined.`);
            }
            let resourceUrl: string = '/pet/findByTags';
            let queryParams: {[key: string]: string} = {
                 tags: encodeURIComponent('' + tags)
            };
            return this.$http<__models.PetModel[]>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl, queryParams)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.PetModel[]>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public getPetById(petId: number): ng.IPromise<__models.PetModel> {
            if (petId == undefined || petId == null) {
                throw new Error(`The parameter 'petId' must be defined.`);
            }
            let resourceUrl: string = '/pet/{petId}'
                .replace('{petId}', encodeURIComponent('' + petId));
            return this.$http<__models.PetModel>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.PetModel>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public updatePetWithForm(petId: number, name?: string, status?: string): ng.IPromise<any> {
            if (petId == undefined || petId == null) {
                throw new Error(`The parameter 'petId' must be defined.`);
            }
            let resourceUrl: string = '/pet/{petId}'
                .replace('{petId}', encodeURIComponent('' + petId));
            let fd: FormData = new FormData();
            fd.append('name', name);
            fd.append('status', status);
            return this.$http<any>({
                method: 'POST',
                data: fd,
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                },
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public deletePet(petId: number, api_key?: string): ng.IPromise<any> {
            if (petId == undefined || petId == null) {
                throw new Error(`The parameter 'petId' must be defined.`);
            }
            let resourceUrl: string = '/pet/{petId}'
                .replace('{petId}', encodeURIComponent('' + petId));
            return this.$http<any>({
                method: 'DELETE',
                headers: {
                    'api_key': api_key
                },
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public uploadFile(petId: number, additionalMetadata?: string, file?: any): ng.IPromise<__models.ApiResponseModel> {
            if (petId == undefined || petId == null) {
                throw new Error(`The parameter 'petId' must be defined.`);
            }
            let resourceUrl: string = '/pet/{petId}/uploadImage'
                .replace('{petId}', encodeURIComponent('' + petId));
            let fd: FormData = new FormData();
            fd.append('additionalMetadata', additionalMetadata);
            fd.append('file', file);
            return this.$http<__models.ApiResponseModel>({
                method: 'POST',
                data: fd,
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                },
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.ApiResponseModel>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }
    }
    angular.module('common').service('petClient', PetClient);

    export class StoreClient implements IStoreClient {
        private baseUrl: string;

        public static $inject: string[] = ['$http', 'config'];
        constructor (private $http: ng.IHttpService, config: app.IConfig) {
            this.baseUrl = config.baseUrl;
        }

        public getInventory(): ng.IPromise<any> {
            let resourceUrl: string = '/store/inventory';
            return this.$http<any>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public placeOrder(body: __models.OrderModel): ng.IPromise<__models.OrderModel> {
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/store/order';
            return this.$http<__models.OrderModel>({
                method: 'POST',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.OrderModel>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public getOrderById(orderId: number): ng.IPromise<__models.OrderModel> {
            if (orderId == undefined || orderId == null) {
                throw new Error(`The parameter 'orderId' must be defined.`);
            }
            let resourceUrl: string = '/store/order/{orderId}'
                .replace('{orderId}', encodeURIComponent('' + orderId));
            return this.$http<__models.OrderModel>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.OrderModel>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public deleteOrder(orderId: number): ng.IPromise<any> {
            if (orderId == undefined || orderId == null) {
                throw new Error(`The parameter 'orderId' must be defined.`);
            }
            let resourceUrl: string = '/store/order/{orderId}'
                .replace('{orderId}', encodeURIComponent('' + orderId));
            return this.$http<any>({
                method: 'DELETE',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }
    }
    angular.module('common').service('storeClient', StoreClient);

    export class UserClient implements IUserClient {
        private baseUrl: string;

        public static $inject: string[] = ['$http', 'config'];
        constructor (private $http: ng.IHttpService, config: app.IConfig) {
            this.baseUrl = config.baseUrl;
        }

        public createUser(body: __models.UserModel): ng.IPromise<any> {
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/user';
            return this.$http<any>({
                method: 'POST',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public createUsersWithArrayInput(body: __models.UserModel[]): ng.IPromise<any> {
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/user/createWithArray';
            return this.$http<any>({
                method: 'POST',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public createUsersWithListInput(body: __models.UserModel[]): ng.IPromise<any> {
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/user/createWithList';
            return this.$http<any>({
                method: 'POST',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public loginUser(username: string, password: string): ng.IPromise<string> {
            if (username == undefined || username == null) {
                throw new Error(`The parameter 'username' must be defined.`);
            }
            if (password == undefined || password == null) {
                throw new Error(`The parameter 'password' must be defined.`);
            }
            let resourceUrl: string = '/user/login';
            let queryParams: {[key: string]: string} = {
                 username: encodeURIComponent('' + username),
                 password: encodeURIComponent('' + password)
            };
            return this.$http<string>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl, queryParams)
            })
                .then((response: ng.IHttpPromiseCallbackArg<string>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public logoutUser(): ng.IPromise<any> {
            let resourceUrl: string = '/user/logout';
            return this.$http<any>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public getUserByName(username: string): ng.IPromise<__models.UserModel> {
            if (username == undefined || username == null) {
                throw new Error(`The parameter 'username' must be defined.`);
            }
            let resourceUrl: string = '/user/{username}'
                .replace('{username}', encodeURIComponent('' + username));
            return this.$http<__models.UserModel>({
                method: 'GET',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<__models.UserModel>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public updateUser(username: string, body: __models.UserModel): ng.IPromise<any> {
            if (username == undefined || username == null) {
                throw new Error(`The parameter 'username' must be defined.`);
            }
            if (body == undefined || body == null) {
                throw new Error(`The parameter 'body' must be defined.`);
            }
            let resourceUrl: string = '/user/{username}'
                .replace('{username}', encodeURIComponent('' + username));
            return this.$http<any>({
                method: 'PUT',
                data: body,
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }

        public deleteUser(username: string): ng.IPromise<any> {
            if (username == undefined || username == null) {
                throw new Error(`The parameter 'username' must be defined.`);
            }
            let resourceUrl: string = '/user/{username}'
                .replace('{username}', encodeURIComponent('' + username));
            return this.$http<any>({
                method: 'DELETE',
                url: buildServiceUrl(this.baseUrl, resourceUrl)
            })
                .then((response: ng.IHttpPromiseCallbackArg<any>) => response.data)
                .catch((response: ng.IHttpPromiseCallbackArg<any>) => response.data);
        }
    }
    angular.module('common').service('userClient', UserClient);

    function buildServiceUrl(baseUrl: string, resourceUrl: string, queryParams?: {[key: string]: string}): string {
        let url: string = baseUrl;
        let baseUrlSlash: boolean = url[url.length - 1] === '/';
        let resourceUrlSlash: boolean = resourceUrl[0] === '/';
        if (!baseUrlSlash && !resourceUrlSlash) {
            url += '/';
        } else if (baseUrlSlash && resourceUrlSlash) {
            url = url.substr(0, url.length - 1);
        }
        url += resourceUrl;

        if (queryParams) {
            let isFirst: boolean = true;
            for (let p in queryParams) {
                if (queryParams.hasOwnProperty(p) && queryParams[p]) {
                    let separator: string = isFirst ? '?' : '&';
                    url += `${separator}${p}=${queryParams[p]}`;
                    isFirst = false;
                }
            }
        }
        return url;
    }
}

namespace petstore.webservices.models {
    export interface ApiResponseModel {
        code: number;
        type: string;
        message: string;
    }

    export interface CategoryModel {
        id: number;
        name: string;
    }

    export interface OrderModel {
        id: number;
        petId: number;
        quantity: number;
        shipDate: Date;
        status: StatusOrderModel;
        complete: boolean;
    }

    export interface PetModel {
        id: number;
        category: CategoryModel;
        name: string;
        photoUrls: string[];
        tags: TagModel[];
        status: StatusPetModel;
    }

    export interface TagModel {
        id: number;
        name: string;
    }

    export interface UserModel {
        id: number;
        username: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phone: string;
        userStatus: number;
    }

    export type StatusOrderModel = "placed" | "approved" | "delivered";

    export type StatusPetModel = "available" | "pending" | "sold";

    export type Initializer<TModel> = (model: TModel) => void;

    export class ModelFactory {
        public static createEmptyApiResponseModel(initializer?: Initializer<ApiResponseModel>): ApiResponseModel {
            let model: ApiResponseModel =  {
                code: undefined,
                type: '',
                message: '',
            };
            if (!!initializer) {
                initializer(model);
            }
            return model;
        }

        public static createEmptyCategoryModel(initializer?: Initializer<CategoryModel>): CategoryModel {
            let model: CategoryModel =  {
                id: undefined,
                name: '',
            };
            if (!!initializer) {
                initializer(model);
            }
            return model;
        }

        public static createEmptyOrderModel(initializer?: Initializer<OrderModel>): OrderModel {
            let model: OrderModel =  {
                id: undefined,
                petId: undefined,
                quantity: undefined,
                shipDate: undefined,
                status: undefined,
                complete: false,
            };
            if (!!initializer) {
                initializer(model);
            }
            return model;
        }

        public static createEmptyPetModel(initializer?: Initializer<PetModel>): PetModel {
            let model: PetModel =  {
                id: undefined,
                category: ModelFactory.createEmptyCategoryModel(),
                name: '',
                photoUrls: [],
                tags: [],
                status: undefined,
            };
            if (!!initializer) {
                initializer(model);
            }
            return model;
        }

        public static createEmptyTagModel(initializer?: Initializer<TagModel>): TagModel {
            let model: TagModel =  {
                id: undefined,
                name: '',
            };
            if (!!initializer) {
                initializer(model);
            }
            return model;
        }

        public static createEmptyUserModel(initializer?: Initializer<UserModel>): UserModel {
            let model: UserModel =  {
                id: undefined,
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: '',
                userStatus: undefined,
            };
            if (!!initializer) {
                initializer(model);
            }
            return model;
        }
    }
}