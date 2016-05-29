
export class Log {
    static console: boolean = true;
    static db: boolean = false;
    
    /* Write Regular Message
     * */
    public static writeMessage(message: any){
        this._writeConsoleMessage(message);
        this._writeDbMessage(message);
    }
    static _writeConsoleMessage(message: any){
        if (!this.console){
            return;
        }
        console.log(message);
    }
    static _writeDbMessage(message: any){
        if (!this.db){
            return;
        }
        
    }
    /* Write Error
     * */
    public static writeError(message: any){
        this._writeConsoleError(message);
        this._writeDbError(message);
    }
    static _writeConsoleError(message: any){
        if (!this.console){
            return;
        }
        console.error(message);
    }
    static _writeDbError(message: any){
        if (!this.db){
            return;
        }
        
    }
}