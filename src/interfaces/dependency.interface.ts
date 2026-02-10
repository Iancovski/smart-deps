export interface DependencyInfo {
    name: string;
    version: string;
    packageRoot: string;
    scope?: DependencyScope;
}

export type DependencyScope = "dependencies" | "devDependencies";
