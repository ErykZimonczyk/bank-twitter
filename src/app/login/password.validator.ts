import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const smallLetterRe = /[a-z]/g;
        const largeLetterRe = /[A-Z]/g;
        const numberRe = /[0-9]/g;
        const error: any = {};
        let errorFlag = false;

        if (control.value) {
            if (!smallLetterRe.test(control.value)) {
                errorFlag = true;
                error.missingSmallLetter = { value: control.value };
            }

            if (!largeLetterRe.test(control.value)) {
                errorFlag = true;
                error.missingLargeLetter = { value: control.value };
            }

            if (!numberRe.test(control.value)) {
                errorFlag = true;
                error.missingNumber = { value: control.value };
            }
        }

        return errorFlag ? error : null;
    };
}
