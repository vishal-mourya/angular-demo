import { AbstractControl, ValidationErrors } from "@angular/forms";
import { rejects } from "assert";
import { resolve } from "dns";

export class UsernameValidators {
    static cannotContainSpace( control : AbstractControl) : ValidationErrors | null {
        if( (control.value as string ).indexOf(' ') >= 0 )
            return { cannotConatainSpace : true };

        return null;
    }

    static shouldBeUnique( control : AbstractControl ) : Promise<ValidationErrors | null> {
        return new Promise(( resolve, reject ) => {
            setTimeout(() => {
                if( control.value === 'mosh' )
                    resolve({ shouldBeUnique : true });
                else
                    resolve({ shouldBeUnique : false });
                    // resolve(null);
            }, 2000);
        });
    }
}