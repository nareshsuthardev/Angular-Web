import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(pattern: RegExp): ValidatorFn {
    return (contol: AbstractControl): { [key: string]: any } | null => {
        const isVlaidEmailAdd = pattern.test(contol.value) && contol.value.length > 5;
        return isVlaidEmailAdd ? null : { 'emailValidator':!(contol.value.length > 5) , 'requiredValue': 10, 'patternValidator':  pattern.test(contol.value), 'pattern': contol.value }
    }
}
// export function emailValidator(contol : AbstractControl): { [ key:string] : any} | null{
//     const emailAdd:string = contol.value;
//     if(emailAdd.length < 4){
//         console.log(contol)
//         return { 'emailValidator': true, 'requiredValue': 10,'':true,'patter':'email' }
//     }
//     return null
// }