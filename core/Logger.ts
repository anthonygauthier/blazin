import Utils from "../tools/Utils.ts"
import Config from "../config/Config.ts"

export class Logger {
    public static info(msg: string) {
        console.info(this.build("INFO", msg));
    }
    
    public static error(msg: string, err: Error) {
        console.error(this.build("ERROR", err.message));
    }

    public static warn(msg: string) {
        if(Config.LOG_LEVEL >= 2)
            console.warn(this.build("WARNING", msg));
    }

    public static debug(msg: string) {
        if(Config.LOG_LEVEL == 3)
            console.debug(this.build("DEBUG", msg));
    }

    public static trace(msg: string) {
        if(Config.LOG_LEVEL == 3)
            console.trace(this.build("TRACE", msg))
    }

    /**
     * There are 3 log levels
     * 1. info / error
     * 2. info / error + stacktrace / warn
     * 3. info / error / warn / debug / trace
     * @param level The level of log to display
     */
    public static setLogLevel(level: number) {
        Config.LOG_LEVEL = level
    }

    private static build(type: string, msg: string) {
        const date = new Date();
        return `${Utils.getCurrentDate()} [${type}] ${msg}`;
    }
}