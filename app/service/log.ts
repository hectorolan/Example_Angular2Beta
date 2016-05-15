
export class Log {
    static console: boolean = true;
    static db: boolean = false;
    
    public static writeError(message: string){
        if (this.console) {
            this.writeConsoleError(message);
        }
        if (this.db) {
            this.writeDbError(message);
        }
    }
    static writeConsoleError(message: string){
        console.error(message);
    }
    static writeDbError(message: string){
        
    }
}