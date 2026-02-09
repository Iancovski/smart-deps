import { FileSystemWatcher } from "vscode";

export interface PackageValidator {
    packageLockWatcher: FileSystemWatcher;
    nodeModulesWatcher: FileSystemWatcher;
    revalidationTimer?: NodeJS.Timeout;
}
