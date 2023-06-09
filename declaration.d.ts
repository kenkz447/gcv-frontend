// tslint:disable:readonly-keyword
// tslint:disable:no-any

/// <reference path="node_modules/ts-nameof/ts-nameof.d.ts" />

declare module '*.scss' {
    const content: unknown;
    export default content;
}

declare const APP_NAME: string;
declare const BACKEND_URL: string;
declare const NODE_ENV: 'production' | 'development';